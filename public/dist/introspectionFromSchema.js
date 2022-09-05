import { s as GraphQLError, x as devAssert, a$ as assertValidSchema, cl as isObjectLike, K as Kind, cm as getVariableValues, t as addPath, bk as getDirectiveValues, af as GraphQLSkipDirective, ae as GraphQLIncludeDirective, c0 as typeFromAST, aD as isAbstractType, l as getArgumentValues, m as locatedError, n as pathToArray, O as isNonNullType, M as isListType, aB as isLeafType, c as isObjectType, u as invariant, q as inspect, cn as safeArrayFrom, a1 as isNamedType, at as SchemaMetaFieldDef, au as TypeMetaFieldDef, av as TypeNameMetaFieldDef, p as parse, bW as getIntrospectionQuery } from "./index.js";
function isPromise(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === "function";
}
function memoize3(fn) {
  var cache0;
  return function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = /* @__PURE__ */ new WeakMap();
    }
    var cache1 = cache0.get(a1);
    var cache2;
    if (cache1) {
      cache2 = cache1.get(a2);
      if (cache2) {
        var cachedValue = cache2.get(a3);
        if (cachedValue !== void 0) {
          return cachedValue;
        }
      }
    } else {
      cache1 = /* @__PURE__ */ new WeakMap();
      cache0.set(a1, cache1);
    }
    if (!cache2) {
      cache2 = /* @__PURE__ */ new WeakMap();
      cache1.set(a2, cache2);
    }
    var newValue = fn(a1, a2, a3);
    cache2.set(a3, newValue);
    return newValue;
  };
}
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function(previous, value) {
    return isPromise(previous) ? previous.then(function(resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function(name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function(values) {
    return values.reduce(function(resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, /* @__PURE__ */ Object.create(null));
  });
}
function getOperationRootType(schema, operation) {
  if (operation.operation === "query") {
    var queryType = schema.getQueryType();
    if (!queryType) {
      throw new GraphQLError("Schema does not define the required query root type.", operation);
    }
    return queryType;
  }
  if (operation.operation === "mutation") {
    var mutationType = schema.getMutationType();
    if (!mutationType) {
      throw new GraphQLError("Schema is not configured for mutations.", operation);
    }
    return mutationType;
  }
  if (operation.operation === "subscription") {
    var subscriptionType = schema.getSubscriptionType();
    if (!subscriptionType) {
      throw new GraphQLError("Schema is not configured for subscriptions.", operation);
    }
    return subscriptionType;
  }
  throw new GraphQLError("Can only have query, mutation and subscription operations.", operation);
}
function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
    schema: argsOrSchema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver
  });
}
function executeSync(args) {
  var result = executeImpl(args);
  if (isPromise(result)) {
    throw new Error("GraphQL execution failed to complete synchronously.");
  }
  return result;
}
function executeImpl(args) {
  var schema = args.schema, document = args.document, rootValue = args.rootValue, contextValue = args.contextValue, variableValues = args.variableValues, operationName = args.operationName, fieldResolver = args.fieldResolver, typeResolver = args.typeResolver;
  assertValidExecutionArguments(schema, document, variableValues);
  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver);
  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  }
  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
function buildResponse(exeContext, data) {
  if (isPromise(data)) {
    return data.then(function(resolved) {
      return buildResponse(exeContext, resolved);
    });
  }
  return exeContext.errors.length === 0 ? {
    data
  } : {
    errors: exeContext.errors,
    data
  };
}
function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || devAssert(0, "Must provide document.");
  assertValidSchema(schema);
  rawVariableValues == null || isObjectLike(rawVariableValues) || devAssert(0, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.");
}
function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var _definition$name, _operation$variableDe;
  var operation;
  var fragments = /* @__PURE__ */ Object.create(null);
  for (var _i2 = 0, _document$definitions2 = document.definitions; _i2 < _document$definitions2.length; _i2++) {
    var definition = _document$definitions2[_i2];
    switch (definition.kind) {
      case Kind.OPERATION_DEFINITION:
        if (operationName == null) {
          if (operation !== void 0) {
            return [new GraphQLError("Must provide operation name if query contains multiple operations.")];
          }
          operation = definition;
        } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
          operation = definition;
        }
        break;
      case Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }
  if (!operation) {
    if (operationName != null) {
      return [new GraphQLError('Unknown operation named "'.concat(operationName, '".'))];
    }
    return [new GraphQLError("Must provide an operation.")];
  }
  var variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
  var coercedVariableValues = getVariableValues(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
    maxErrors: 50
  });
  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }
  return {
    schema,
    fragments,
    rootValue,
    contextValue,
    operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
    typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
    errors: []
  };
}
function executeOperation(exeContext, operation, rootValue) {
  var type = getOperationRootType(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null));
  var path = void 0;
  try {
    var result = operation.operation === "mutation" ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);
    if (isPromise(result)) {
      return result.then(void 0, function(error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }
    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return promiseReduce(Object.keys(fields), function(results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName, parentType.name);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result === void 0) {
      return results;
    }
    if (isPromise(result)) {
      return result.then(function(resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }
    results[responseName] = result;
    return results;
  }, /* @__PURE__ */ Object.create(null));
}
function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = /* @__PURE__ */ Object.create(null);
  var containsPromise = false;
  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName, parentType.name);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);
    if (result !== void 0) {
      results[responseName] = result;
      if (isPromise(result)) {
        containsPromise = true;
      }
    }
  }
  if (!containsPromise) {
    return results;
  }
  return promiseForObject(results);
}
function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
    var selection = _selectionSet$selecti2[_i6];
    switch (selection.kind) {
      case Kind.FIELD: {
        if (!shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        var name = getFieldEntryKey(selection);
        if (!fields[name]) {
          fields[name] = [];
        }
        fields[name].push(selection);
        break;
      }
      case Kind.INLINE_FRAGMENT: {
        if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
        break;
      }
      case Kind.FRAGMENT_SPREAD: {
        var fragName = selection.name.value;
        if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
          continue;
        }
        visitedFragmentNames[fragName] = true;
        var fragment = exeContext.fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
          continue;
        }
        collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
        break;
      }
    }
  }
  return fields;
}
function shouldIncludeNode(exeContext, node) {
  var skip = getDirectiveValues(GraphQLSkipDirective, node, exeContext.variableValues);
  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }
  var include = getDirectiveValues(GraphQLIncludeDirective, node, exeContext.variableValues);
  if ((include === null || include === void 0 ? void 0 : include.if) === false) {
    return false;
  }
  return true;
}
function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  var conditionalType = typeFromAST(exeContext.schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if (isAbstractType(conditionalType)) {
    return exeContext.schema.isSubType(conditionalType, type);
  }
  return false;
}
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var _fieldDef$resolve;
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
  if (!fieldDef) {
    return;
  }
  var returnType = fieldDef.type;
  var resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path);
  try {
    var args = getArgumentValues(fieldDef, fieldNodes[0], exeContext.variableValues);
    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    var completed;
    if (isPromise(result)) {
      completed = result.then(function(resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }
    if (isPromise(completed)) {
      return completed.then(void 0, function(rawError) {
        var error2 = locatedError(rawError, fieldNodes, pathToArray(path));
        return handleFieldError(error2, returnType, exeContext);
      });
    }
    return completed;
  } catch (rawError) {
    var error = locatedError(rawError, fieldNodes, pathToArray(path));
    return handleFieldError(error, returnType, exeContext);
  }
}
function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  return {
    fieldName: fieldDef.name,
    fieldNodes,
    returnType: fieldDef.type,
    parentType,
    path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}
function handleFieldError(error, returnType, exeContext) {
  if (isNonNullType(returnType)) {
    throw error;
  }
  exeContext.errors.push(error);
  return null;
}
function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (result instanceof Error) {
    throw result;
  }
  if (isNonNullType(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);
    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }
    return completed;
  }
  if (result == null) {
    return null;
  }
  if (isListType(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  if (isLeafType(returnType)) {
    return completeLeafValue(returnType, result);
  }
  if (isAbstractType(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  if (isObjectType(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  }
  invariant(0, "Cannot complete value of unexpected output type: " + inspect(returnType));
}
function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = safeArrayFrom(result, function(item, index) {
    var itemPath = addPath(path, index, void 0);
    try {
      var completedItem;
      if (isPromise(item)) {
        completedItem = item.then(function(resolved) {
          return completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved);
        });
      } else {
        completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
      }
      if (isPromise(completedItem)) {
        containsPromise = true;
        return completedItem.then(void 0, function(rawError) {
          var error2 = locatedError(rawError, fieldNodes, pathToArray(itemPath));
          return handleFieldError(error2, itemType, exeContext);
        });
      }
      return completedItem;
    } catch (rawError) {
      var error = locatedError(rawError, fieldNodes, pathToArray(itemPath));
      return handleFieldError(error, itemType, exeContext);
    }
  });
  if (completedResults == null) {
    throw new GraphQLError('Expected Iterable, but did not find one for field "'.concat(info.parentType.name, ".").concat(info.fieldName, '".'));
  }
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
function completeLeafValue(returnType, result) {
  var serializedResult = returnType.serialize(result);
  if (serializedResult === void 0) {
    throw new Error('Expected a value of type "'.concat(inspect(returnType), '" but ') + "received: ".concat(inspect(result)));
  }
  return serializedResult;
}
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var _returnType$resolveTy;
  var resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);
  if (isPromise(runtimeType)) {
    return runtimeType.then(function(resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }
  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}
function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  if (runtimeTypeOrName == null) {
    throw new GraphQLError('Abstract type "'.concat(returnType.name, '" must resolve to an Object type at runtime for field "').concat(info.parentType.name, ".").concat(info.fieldName, '". Either the "').concat(returnType.name, '" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'), fieldNodes);
  }
  var runtimeTypeName = isNamedType(runtimeTypeOrName) ? runtimeTypeOrName.name : runtimeTypeOrName;
  if (typeof runtimeTypeName !== "string") {
    throw new GraphQLError('Abstract type "'.concat(returnType.name, '" must resolve to an Object type at runtime for field "').concat(info.parentType.name, ".").concat(info.fieldName, '" with ') + "value ".concat(inspect(result), ', received "').concat(inspect(runtimeTypeOrName), '".'));
  }
  var runtimeType = exeContext.schema.getType(runtimeTypeName);
  if (runtimeType == null) {
    throw new GraphQLError('Abstract type "'.concat(returnType.name, '" was resolve to a type "').concat(runtimeTypeName, '" that does not exist inside schema.'), fieldNodes);
  }
  if (!isObjectType(runtimeType)) {
    throw new GraphQLError('Abstract type "'.concat(returnType.name, '" was resolve to a non-object type "').concat(runtimeTypeName, '".'), fieldNodes);
  }
  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new GraphQLError('Runtime Object type "'.concat(runtimeType.name, '" is not a possible type for "').concat(returnType.name, '".'), fieldNodes);
  }
  return runtimeType;
}
function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
    if (isPromise(isTypeOf)) {
      return isTypeOf.then(function(resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }
    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }
  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new GraphQLError('Expected value of type "'.concat(returnType.name, '" but got: ').concat(inspect(result), "."), fieldNodes);
}
function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
var collectSubfields = memoize3(_collectSubfields);
function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = /* @__PURE__ */ Object.create(null);
  var visitedFragmentNames = /* @__PURE__ */ Object.create(null);
  for (var _i8 = 0; _i8 < fieldNodes.length; _i8++) {
    var node = fieldNodes[_i8];
    if (node.selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }
  return subFieldNodes;
}
var defaultTypeResolver = function defaultTypeResolver2(value, contextValue, info, abstractType) {
  if (isObjectLike(value) && typeof value.__typename === "string") {
    return value.__typename;
  }
  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];
  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];
    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);
      if (isPromise(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type.name;
      }
    }
  }
  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function(isTypeOfResults) {
      for (var _i9 = 0; _i9 < isTypeOfResults.length; _i9++) {
        if (isTypeOfResults[_i9]) {
          return possibleTypes[_i9].name;
        }
      }
    });
  }
};
var defaultFieldResolver = function defaultFieldResolver2(source, args, contextValue, info) {
  if (isObjectLike(source) || typeof source === "function") {
    var property = source[info.fieldName];
    if (typeof property === "function") {
      return source[info.fieldName](args, contextValue, info);
    }
    return property;
  }
};
function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return SchemaMetaFieldDef;
  } else if (fieldName === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return TypeMetaFieldDef;
  } else if (fieldName === TypeNameMetaFieldDef.name) {
    return TypeNameMetaFieldDef;
  }
  return parentType.getFields()[fieldName];
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function introspectionFromSchema(schema, options) {
  var optionsWithDefaults = _objectSpread({
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true
  }, options);
  var document = parse(getIntrospectionQuery(optionsWithDefaults));
  var result = executeSync({
    schema,
    document
  });
  !result.errors && result.data || invariant(0);
  return result.data;
}
export { assertValidExecutionArguments as a, buildExecutionContext as b, collectFields as c, getFieldDef as d, execute as e, buildResolveInfo as f, getOperationRootType as g, executeSync as h, isPromise as i, defaultFieldResolver as j, defaultTypeResolver as k, introspectionFromSchema as l };
