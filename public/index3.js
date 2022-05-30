var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { j as GraphQLError$1, k as devAssert, l as assertValidSchema, m as isObjectLike, K as Kind, n as getVariableValues, q as addPath, s as getDirectiveValues, t as GraphQLSkipDirective, u as GraphQLIncludeDirective, w as typeFromAST, x as isAbstractType, y as getArgumentValues, z as locatedError, A as pathToArray, B as isNonNullType, C as isListType, D as isLeafType, c as isObjectType, E as invariant$9, F as inspect, H as safeArrayFrom, I as isNamedType, S as SchemaMetaFieldDef$1, J as TypeMetaFieldDef$1, L as TypeNameMetaFieldDef, M as validateSchema, p as parse$2, N as validate, O as SYMBOL_ASYNC_ITERATOR, d as getNamedType, P as isInputObjectType, h as isIntrospectionType, Q as getIntrospectionQuery, R as keyValMap, U as naturalCompare, V as GraphQLSchema, W as objectValues, X as GraphQLDirective, Y as isScalarType, G as GraphQLObjectType, Z as isInterfaceType, _ as GraphQLInterfaceType, $ as isUnionType, a0 as GraphQLUnionType, i as isEnumType, a1 as GraphQLEnumType, a2 as GraphQLInputObjectType, a3 as GraphQLList, a4 as GraphQLNonNull, v as visit, a5 as isSource, a6 as Source$1, a7 as Lexer, a8 as TokenKind, a9 as isPunctuatorTokenKind, aa as dedentBlockStringValue, ab as getBlockStringIndentation, ac as isRequiredArgument, ad as isSpecifiedScalarType, ae as isRequiredInputField, af as print$3, ag as astFromValue, ah as keyMap, ai as version, aj as versionInfo, ak as GraphQLScalarType, al as specifiedScalarTypes, am as GraphQLInt$1, an as GraphQLFloat$1, ao as GraphQLString$1, ap as GraphQLBoolean$1, aq as GraphQLID$1, ar as specifiedDirectives, as as GraphQLDeprecatedDirective, at as GraphQLSpecifiedByDirective, au as TypeKind, av as DEFAULT_DEPRECATION_REASON, aw as introspectionTypes, ax as __Schema, ay as __Directive, az as __DirectiveLocation, aA as __Type, aB as __Field, aC as __InputValue, aD as __EnumValue, aE as __TypeKind, aF as isSchema, aG as isDirective, aH as isType, aI as isInputType, aJ as isOutputType, aK as isCompositeType, aL as isWrappingType, aM as isNullableType, aN as isSpecifiedDirective, aO as assertSchema, aP as assertDirective, aQ as assertType, aR as assertScalarType, aS as assertObjectType, aT as assertInterfaceType, aU as assertUnionType, aV as assertEnumType, aW as assertInputObjectType, aX as assertListType, aY as assertNonNullType, aZ as assertInputType, a_ as assertOutputType, a$ as assertLeafType, b0 as assertCompositeType, b1 as assertAbstractType, b2 as assertWrappingType, b3 as assertNullableType, b4 as assertNamedType, b5 as getNullableType, b6 as Token, b7 as Location, b8 as getLocation$1, b9 as printLocation, ba as printSourceLocation, bb as parseValue, bc as parseType$2, bd as visitInParallel, be as getVisitFn, bf as BREAK, bg as DirectiveLocation, bh as isDefinitionNode, bi as isExecutableDefinitionNode, bj as isSelectionNode, bk as isValueNode, bl as isTypeNode, bm as isTypeSystemDefinitionNode, bn as isTypeDefinitionNode, bo as isTypeSystemExtensionNode, bp as isTypeExtensionNode, bq as ValidationContext, br as specifiedRules, bs as ExecutableDefinitionsRule, bt as FieldsOnCorrectTypeRule, bu as FragmentsOnCompositeTypesRule, bv as KnownArgumentNamesRule, bw as KnownDirectivesRule, bx as KnownFragmentNamesRule, by as KnownTypeNamesRule, bz as LoneAnonymousOperationRule, bA as NoFragmentCyclesRule, bB as NoUndefinedVariablesRule, bC as NoUnusedFragmentsRule, bD as NoUnusedVariablesRule, bE as OverlappingFieldsCanBeMergedRule, bF as PossibleFragmentSpreadsRule, bG as ProvidedRequiredArgumentsRule, bH as ScalarLeafsRule, bI as SingleFieldSubscriptionsRule, bJ as UniqueArgumentNamesRule, bK as UniqueDirectivesPerLocationRule, bL as UniqueFragmentNamesRule, bM as UniqueInputFieldNamesRule, bN as UniqueOperationNamesRule, bO as UniqueVariableNamesRule, bP as ValuesOfCorrectTypeRule, bQ as VariablesAreInputTypesRule, bR as VariablesInAllowedPositionRule, bS as LoneSchemaDefinitionRule, bT as UniqueOperationTypesRule, bU as UniqueTypeNamesRule, bV as UniqueEnumValueNamesRule, bW as UniqueFieldDefinitionNamesRule, bX as UniqueDirectiveNamesRule, bY as PossibleTypeExtensionsRule, bZ as syntaxError, b_ as printError, b$ as buildClientSchema, b as buildASTSchema, c0 as buildSchema, c1 as getDescription, e as extendSchema, c2 as printSchema, c3 as printType, a as printIntrospectionSchema, c4 as valueFromAST, c5 as valueFromASTUntyped$1, T as TypeInfo, f as visitWithTypeInfo, c6 as coerceInputValue, c7 as concatAST, c8 as isEqualType, c9 as isTypeSubTypeOf, ca as doTypesOverlap, cb as assertValidName, cc as isValidNameError, cd as commonjsGlobal, ce as pathBrowserify, cf as __assign, cg as getAugmentedNamespace, ch as printSchemaWithDirectives, ci as pascalCase, o as oldVisit, cj as getBaseType, ck as getRootTypes, cl as DetailedError, cm as removeNonNullWrapper, cn as resolveExternalModuleAndFn } from "./index.js";
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
      throw new GraphQLError$1("Schema does not define the required query root type.", operation);
    }
    return queryType;
  }
  if (operation.operation === "mutation") {
    var mutationType = schema.getMutationType();
    if (!mutationType) {
      throw new GraphQLError$1("Schema is not configured for mutations.", operation);
    }
    return mutationType;
  }
  if (operation.operation === "subscription") {
    var subscriptionType = schema.getSubscriptionType();
    if (!subscriptionType) {
      throw new GraphQLError$1("Schema is not configured for subscriptions.", operation);
    }
    return subscriptionType;
  }
  throw new GraphQLError$1("Can only have query, mutation and subscription operations.", operation);
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
            return [new GraphQLError$1("Must provide operation name if query contains multiple operations.")];
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
      return [new GraphQLError$1('Unknown operation named "'.concat(operationName, '".'))];
    }
    return [new GraphQLError$1("Must provide an operation.")];
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
  var path2 = void 0;
  try {
    var result = operation.operation === "mutation" ? executeFieldsSerially(exeContext, type, rootValue, path2, fields) : executeFields(exeContext, type, rootValue, path2, fields);
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
function executeFieldsSerially(exeContext, parentType, sourceValue, path2, fields) {
  return promiseReduce(Object.keys(fields), function(results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path2, responseName, parentType.name);
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
function executeFields(exeContext, parentType, sourceValue, path2, fields) {
  var results = /* @__PURE__ */ Object.create(null);
  var containsPromise = false;
  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path2, responseName, parentType.name);
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
function resolveField(exeContext, parentType, source, fieldNodes, path2) {
  var _fieldDef$resolve;
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);
  if (!fieldDef) {
    return;
  }
  var returnType = fieldDef.type;
  var resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path2);
  try {
    var args = getArgumentValues(fieldDef, fieldNodes[0], exeContext.variableValues);
    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    var completed;
    if (isPromise(result)) {
      completed = result.then(function(resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path2, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path2, result);
    }
    if (isPromise(completed)) {
      return completed.then(void 0, function(rawError) {
        var error2 = locatedError(rawError, fieldNodes, pathToArray(path2));
        return handleFieldError(error2, returnType, exeContext);
      });
    }
    return completed;
  } catch (rawError) {
    var error = locatedError(rawError, fieldNodes, pathToArray(path2));
    return handleFieldError(error, returnType, exeContext);
  }
}
function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path2) {
  return {
    fieldName: fieldDef.name,
    fieldNodes,
    returnType: fieldDef.type,
    parentType,
    path: path2,
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
function completeValue(exeContext, returnType, fieldNodes, info, path2, result) {
  if (result instanceof Error) {
    throw result;
  }
  if (isNonNullType(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path2, result);
    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }
    return completed;
  }
  if (result == null) {
    return null;
  }
  if (isListType(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path2, result);
  }
  if (isLeafType(returnType)) {
    return completeLeafValue(returnType, result);
  }
  if (isAbstractType(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path2, result);
  }
  if (isObjectType(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path2, result);
  }
  invariant$9(0, "Cannot complete value of unexpected output type: " + inspect(returnType));
}
function completeListValue(exeContext, returnType, fieldNodes, info, path2, result) {
  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = safeArrayFrom(result, function(item, index) {
    var itemPath = addPath(path2, index, void 0);
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
    throw new GraphQLError$1('Expected Iterable, but did not find one for field "'.concat(info.parentType.name, ".").concat(info.fieldName, '".'));
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
function completeAbstractValue(exeContext, returnType, fieldNodes, info, path2, result) {
  var _returnType$resolveTy;
  var resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);
  if (isPromise(runtimeType)) {
    return runtimeType.then(function(resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path2, result);
    });
  }
  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path2, result);
}
function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  if (runtimeTypeOrName == null) {
    throw new GraphQLError$1('Abstract type "'.concat(returnType.name, '" must resolve to an Object type at runtime for field "').concat(info.parentType.name, ".").concat(info.fieldName, '". Either the "').concat(returnType.name, '" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'), fieldNodes);
  }
  var runtimeTypeName = isNamedType(runtimeTypeOrName) ? runtimeTypeOrName.name : runtimeTypeOrName;
  if (typeof runtimeTypeName !== "string") {
    throw new GraphQLError$1('Abstract type "'.concat(returnType.name, '" must resolve to an Object type at runtime for field "').concat(info.parentType.name, ".").concat(info.fieldName, '" with ') + "value ".concat(inspect(result), ', received "').concat(inspect(runtimeTypeOrName), '".'));
  }
  var runtimeType = exeContext.schema.getType(runtimeTypeName);
  if (runtimeType == null) {
    throw new GraphQLError$1('Abstract type "'.concat(returnType.name, '" was resolve to a type "').concat(runtimeTypeName, '" that does not exist inside schema.'), fieldNodes);
  }
  if (!isObjectType(runtimeType)) {
    throw new GraphQLError$1('Abstract type "'.concat(returnType.name, '" was resolve to a non-object type "').concat(runtimeTypeName, '".'), fieldNodes);
  }
  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new GraphQLError$1('Runtime Object type "'.concat(runtimeType.name, '" is not a possible type for "').concat(returnType.name, '".'), fieldNodes);
  }
  return runtimeType;
}
function completeObjectValue(exeContext, returnType, fieldNodes, info, path2, result) {
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);
    if (isPromise(isTypeOf)) {
      return isTypeOf.then(function(resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }
        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path2, result);
      });
    }
    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }
  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path2, result);
}
function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new GraphQLError$1('Expected value of type "'.concat(returnType.name, '" but got: ').concat(inspect(result), "."), fieldNodes);
}
function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path2, result) {
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path2, subFieldNodes);
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
  if (fieldName === SchemaMetaFieldDef$1.name && schema.getQueryType() === parentType) {
    return SchemaMetaFieldDef$1;
  } else if (fieldName === TypeMetaFieldDef$1.name && schema.getQueryType() === parentType) {
    return TypeMetaFieldDef$1;
  } else if (fieldName === TypeNameMetaFieldDef.name) {
    return TypeNameMetaFieldDef;
  }
  return parentType.getFields()[fieldName];
}
function graphql$1(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var _arguments = arguments;
  return new Promise(function(resolve) {
    return resolve(_arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
      schema: argsOrSchema,
      source,
      rootValue,
      contextValue,
      variableValues,
      operationName,
      fieldResolver,
      typeResolver
    }));
  });
}
function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
    schema: argsOrSchema,
    source,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver
  });
  if (isPromise(result)) {
    throw new Error("GraphQL execution failed to complete synchronously.");
  }
  return result;
}
function graphqlImpl(args) {
  var schema = args.schema, source = args.source, rootValue = args.rootValue, contextValue = args.contextValue, variableValues = args.variableValues, operationName = args.operationName, fieldResolver = args.fieldResolver, typeResolver = args.typeResolver;
  var schemaValidationErrors = validateSchema(schema);
  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  }
  var document;
  try {
    document = parse$2(source);
  } catch (syntaxError2) {
    return {
      errors: [syntaxError2]
    };
  }
  var validationErrors = validate(schema, document);
  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  }
  return execute({
    schema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver
  });
}
function isAsyncIterable(maybeAsyncIterable) {
  return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[SYMBOL_ASYNC_ITERATOR]) === "function";
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iteratorMethod = iterable[SYMBOL_ASYNC_ITERATOR];
  var iterator = iteratorMethod.call(iterable);
  var $return;
  var abruptClose;
  if (typeof iterator.return === "function") {
    $return = iterator.return;
    abruptClose = function abruptClose2(error) {
      var rethrow = function rethrow2() {
        return Promise.reject(error);
      };
      return $return.call(iterator).then(rethrow, rethrow);
    };
  }
  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }
  var mapReject;
  if (rejectCallback) {
    var reject = rejectCallback;
    mapReject = function mapReject2(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  return _defineProperty$3({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: void 0,
        done: true
      });
    },
    throw: function _throw(error) {
      if (typeof iterator.throw === "function") {
        return iterator.throw(error).then(mapResult, mapReject);
      }
      return Promise.reject(error).catch(abruptClose);
    }
  }, SYMBOL_ASYNC_ITERATOR, function() {
    return this;
  });
}
function asyncMapValue(value, callback) {
  return new Promise(function(resolve) {
    return resolve(callback(value));
  });
}
function iteratorResult(value) {
  return {
    value,
    done: false
  };
}
function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  return arguments.length === 1 ? subscribeImpl(argsOrSchema) : subscribeImpl({
    schema: argsOrSchema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    subscribeFieldResolver
  });
}
function reportGraphQLError(error) {
  if (error instanceof GraphQLError$1) {
    return {
      errors: [error]
    };
  }
  throw error;
}
function subscribeImpl(args) {
  var schema = args.schema, document = args.document, rootValue = args.rootValue, contextValue = args.contextValue, variableValues = args.variableValues, operationName = args.operationName, fieldResolver = args.fieldResolver, subscribeFieldResolver = args.subscribeFieldResolver;
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver);
  var mapSourceToResponse = function mapSourceToResponse2(payload) {
    return execute({
      schema,
      document,
      rootValue: payload,
      contextValue,
      variableValues,
      operationName,
      fieldResolver
    });
  };
  return sourcePromise.then(function(resultOrStream) {
    return isAsyncIterable(resultOrStream) ? mapAsyncIterator(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream;
  });
}
function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  assertValidExecutionArguments(schema, document, variableValues);
  return new Promise(function(resolve) {
    var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
    resolve(Array.isArray(exeContext) ? {
      errors: exeContext
    } : executeSubscription(exeContext));
  }).catch(reportGraphQLError);
}
function executeSubscription(exeContext) {
  var schema = exeContext.schema, operation = exeContext.operation, variableValues = exeContext.variableValues, rootValue = exeContext.rootValue;
  var type = getOperationRootType(schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, /* @__PURE__ */ Object.create(null), /* @__PURE__ */ Object.create(null));
  var responseNames = Object.keys(fields);
  var responseName = responseNames[0];
  var fieldNodes = fields[responseName];
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(schema, type, fieldName);
  if (!fieldDef) {
    throw new GraphQLError$1('The subscription field "'.concat(fieldName, '" is not defined.'), fieldNodes);
  }
  var path2 = addPath(void 0, responseName, type.name);
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, type, path2);
  return new Promise(function(resolveResult) {
    var _fieldDef$subscribe;
    var args = getArgumentValues(fieldDef, fieldNodes[0], variableValues);
    var contextValue = exeContext.contextValue;
    var resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.fieldResolver;
    resolveResult(resolveFn(rootValue, args, contextValue, info));
  }).then(function(eventStream) {
    if (eventStream instanceof Error) {
      throw locatedError(eventStream, fieldNodes, pathToArray(path2));
    }
    if (!isAsyncIterable(eventStream)) {
      throw new Error("Subscription field must return Async Iterable. " + "Received: ".concat(inspect(eventStream), "."));
    }
    return eventStream;
  }, function(error) {
    throw locatedError(error, fieldNodes, pathToArray(path2));
  });
}
function NoDeprecatedCustomRule(context) {
  return {
    Field: function Field3(node) {
      var fieldDef = context.getFieldDef();
      var deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;
      if (fieldDef && deprecationReason != null) {
        var parentType = context.getParentType();
        parentType != null || invariant$9(0);
        context.reportError(new GraphQLError$1("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated. ").concat(deprecationReason), node));
      }
    },
    Argument: function Argument(node) {
      var argDef = context.getArgument();
      var deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;
      if (argDef && deprecationReason != null) {
        var directiveDef = context.getDirective();
        if (directiveDef != null) {
          context.reportError(new GraphQLError$1('Directive "@'.concat(directiveDef.name, '" argument "').concat(argDef.name, '" is deprecated. ').concat(deprecationReason), node));
        } else {
          var parentType = context.getParentType();
          var fieldDef = context.getFieldDef();
          parentType != null && fieldDef != null || invariant$9(0);
          context.reportError(new GraphQLError$1('Field "'.concat(parentType.name, ".").concat(fieldDef.name, '" argument "').concat(argDef.name, '" is deprecated. ').concat(deprecationReason), node));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var inputObjectDef = getNamedType(context.getParentInputType());
      if (isInputObjectType(inputObjectDef)) {
        var inputFieldDef = inputObjectDef.getFields()[node.name.value];
        var deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;
        if (deprecationReason != null) {
          context.reportError(new GraphQLError$1("The input field ".concat(inputObjectDef.name, ".").concat(inputFieldDef.name, " is deprecated. ").concat(deprecationReason), node));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumValueDef = context.getEnumValue();
      var deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;
      if (enumValueDef && deprecationReason != null) {
        var enumTypeDef = getNamedType(context.getInputType());
        enumTypeDef != null || invariant$9(0);
        context.reportError(new GraphQLError$1('The enum value "'.concat(enumTypeDef.name, ".").concat(enumValueDef.name, '" is deprecated. ').concat(deprecationReason), node));
      }
    }
  };
}
function NoSchemaIntrospectionCustomRule(context) {
  return {
    Field: function Field3(node) {
      var type = getNamedType(context.getType());
      if (type && isIntrospectionType(type)) {
        context.reportError(new GraphQLError$1('GraphQL introspection has been disabled, but the requested query contained the field "'.concat(node.name.value, '".'), node));
      }
    }
  };
}
function formatError(error) {
  var _error$message;
  error || devAssert(0, "Received null or undefined error.");
  var message = (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : "An unknown error occurred.";
  var locations = error.locations;
  var path2 = error.path;
  var extensions = error.extensions;
  return extensions && Object.keys(extensions).length > 0 ? {
    message,
    locations,
    path: path2,
    extensions
  } : {
    message,
    locations,
    path: path2
  };
}
function getOperationAST(documentAST, operationName) {
  var operation = null;
  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definition = _documentAST$definiti2[_i2];
    if (definition.kind === Kind.OPERATION_DEFINITION) {
      var _definition$name;
      if (operationName == null) {
        if (operation) {
          return null;
        }
        operation = definition;
      } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
        return definition;
      }
    }
  }
  return operation;
}
function ownKeys$2(object, enumerableOnly) {
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
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function introspectionFromSchema(schema, options) {
  var optionsWithDefaults = _objectSpread$2({
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true
  }, options);
  var document = parse$2(getIntrospectionQuery(optionsWithDefaults));
  var result = executeSync({
    schema,
    document
  });
  !result.errors && result.data || invariant$9(0);
  return result.data;
}
function ownKeys$1(object, enumerableOnly) {
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
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = keyValMap(sortByName(schemaConfig.types), function(type) {
    return type.name;
  }, sortNamedType);
  return new GraphQLSchema(_objectSpread$1(_objectSpread$1({}, schemaConfig), {}, {
    types: objectValues(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));
  function replaceType(type) {
    if (isListType(type)) {
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      return new GraphQLNonNull(replaceType(type.ofType));
    }
    return replaceNamedType(type);
  }
  function replaceNamedType(type) {
    return typeMap[type.name];
  }
  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }
  function sortDirective(directive) {
    var config = directive.toConfig();
    return new GraphQLDirective(_objectSpread$1(_objectSpread$1({}, config), {}, {
      locations: sortBy(config.locations, function(x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }
  function sortArgs(args) {
    return sortObjMap(args, function(arg) {
      return _objectSpread$1(_objectSpread$1({}, arg), {}, {
        type: replaceType(arg.type)
      });
    });
  }
  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function(field) {
      return _objectSpread$1(_objectSpread$1({}, field), {}, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }
  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function(field) {
      return _objectSpread$1(_objectSpread$1({}, field), {}, {
        type: replaceType(field.type)
      });
    });
  }
  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }
  function sortNamedType(type) {
    if (isScalarType(type) || isIntrospectionType(type)) {
      return type;
    }
    if (isObjectType(type)) {
      var config = type.toConfig();
      return new GraphQLObjectType(_objectSpread$1(_objectSpread$1({}, config), {}, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    }
    if (isInterfaceType(type)) {
      var _config = type.toConfig();
      return new GraphQLInterfaceType(_objectSpread$1(_objectSpread$1({}, _config), {}, {
        interfaces: function interfaces() {
          return sortTypes(_config.interfaces);
        },
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    }
    if (isUnionType(type)) {
      var _config2 = type.toConfig();
      return new GraphQLUnionType(_objectSpread$1(_objectSpread$1({}, _config2), {}, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    }
    if (isEnumType(type)) {
      var _config3 = type.toConfig();
      return new GraphQLEnumType(_objectSpread$1(_objectSpread$1({}, _config3), {}, {
        values: sortObjMap(_config3.values)
      }));
    }
    if (isInputObjectType(type)) {
      var _config4 = type.toConfig();
      return new GraphQLInputObjectType(_objectSpread$1(_objectSpread$1({}, _config4), {}, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    }
    invariant$9(0, "Unexpected type: " + inspect(type));
  }
}
function sortObjMap(map, sortValueFn) {
  var sortedMap = /* @__PURE__ */ Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function(x) {
    return x;
  });
  for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
    var key = sortedKeys[_i2];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }
  return sortedMap;
}
function sortByName(array) {
  return sortBy(array, function(obj) {
    return obj.name;
  });
}
function sortBy(array, mapToKey) {
  return array.slice().sort(function(obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return naturalCompare(key1, key2);
  });
}
function separateOperations(documentAST) {
  var operations = [];
  var depGraph = /* @__PURE__ */ Object.create(null);
  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definitionNode = _documentAST$definiti2[_i2];
    switch (definitionNode.kind) {
      case Kind.OPERATION_DEFINITION:
        operations.push(definitionNode);
        break;
      case Kind.FRAGMENT_DEFINITION:
        depGraph[definitionNode.name.value] = collectDependencies(definitionNode.selectionSet);
        break;
    }
  }
  var separatedDocumentASTs = /* @__PURE__ */ Object.create(null);
  var _loop = function _loop2(_i42) {
    var operation = operations[_i42];
    var dependencies = /* @__PURE__ */ new Set();
    for (var _i6 = 0, _collectDependencies2 = collectDependencies(operation.selectionSet); _i6 < _collectDependencies2.length; _i6++) {
      var fragmentName = _collectDependencies2[_i6];
      collectTransitiveDependencies(dependencies, depGraph, fragmentName);
    }
    var operationName = operation.name ? operation.name.value : "";
    separatedDocumentASTs[operationName] = {
      kind: Kind.DOCUMENT,
      definitions: documentAST.definitions.filter(function(node) {
        return node === operation || node.kind === Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value);
      })
    };
  };
  for (var _i4 = 0; _i4 < operations.length; _i4++) {
    _loop(_i4);
  }
  return separatedDocumentASTs;
}
function collectTransitiveDependencies(collected, depGraph, fromName) {
  if (!collected.has(fromName)) {
    collected.add(fromName);
    var immediateDeps = depGraph[fromName];
    if (immediateDeps !== void 0) {
      for (var _i8 = 0; _i8 < immediateDeps.length; _i8++) {
        var toName = immediateDeps[_i8];
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    }
  }
}
function collectDependencies(selectionSet) {
  var dependencies = [];
  visit(selectionSet, {
    FragmentSpread: function FragmentSpread(node) {
      dependencies.push(node.name.value);
    }
  });
  return dependencies;
}
function stripIgnoredCharacters(source) {
  var sourceObj = isSource(source) ? source : new Source$1(source);
  var body = sourceObj.body;
  var lexer = new Lexer(sourceObj);
  var strippedBody = "";
  var wasLastAddedTokenNonPunctuator = false;
  while (lexer.advance().kind !== TokenKind.EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    var isNonPunctuator = !isPunctuatorTokenKind(currentToken.kind);
    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === TokenKind.SPREAD) {
        strippedBody += " ";
      }
    }
    var tokenBody = body.slice(currentToken.start, currentToken.end);
    if (tokenKind === TokenKind.BLOCK_STRING) {
      strippedBody += dedentBlockString(tokenBody);
    } else {
      strippedBody += tokenBody;
    }
    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }
  return strippedBody;
}
function dedentBlockString(blockStr) {
  var rawStr = blockStr.slice(3, -3);
  var body = dedentBlockStringValue(rawStr);
  if (getBlockStringIndentation(body) > 0) {
    body = "\n" + body;
  }
  var lastChar = body[body.length - 1];
  var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';
  if (hasTrailingQuote || lastChar === "\\") {
    body += "\n";
  }
  return '"""' + body + '"""';
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
var BreakingChangeType = Object.freeze({
  TYPE_REMOVED: "TYPE_REMOVED",
  TYPE_CHANGED_KIND: "TYPE_CHANGED_KIND",
  TYPE_REMOVED_FROM_UNION: "TYPE_REMOVED_FROM_UNION",
  VALUE_REMOVED_FROM_ENUM: "VALUE_REMOVED_FROM_ENUM",
  REQUIRED_INPUT_FIELD_ADDED: "REQUIRED_INPUT_FIELD_ADDED",
  IMPLEMENTED_INTERFACE_REMOVED: "IMPLEMENTED_INTERFACE_REMOVED",
  FIELD_REMOVED: "FIELD_REMOVED",
  FIELD_CHANGED_KIND: "FIELD_CHANGED_KIND",
  REQUIRED_ARG_ADDED: "REQUIRED_ARG_ADDED",
  ARG_REMOVED: "ARG_REMOVED",
  ARG_CHANGED_KIND: "ARG_CHANGED_KIND",
  DIRECTIVE_REMOVED: "DIRECTIVE_REMOVED",
  DIRECTIVE_ARG_REMOVED: "DIRECTIVE_ARG_REMOVED",
  REQUIRED_DIRECTIVE_ARG_ADDED: "REQUIRED_DIRECTIVE_ARG_ADDED",
  DIRECTIVE_REPEATABLE_REMOVED: "DIRECTIVE_REPEATABLE_REMOVED",
  DIRECTIVE_LOCATION_REMOVED: "DIRECTIVE_LOCATION_REMOVED"
});
var DangerousChangeType = Object.freeze({
  VALUE_ADDED_TO_ENUM: "VALUE_ADDED_TO_ENUM",
  TYPE_ADDED_TO_UNION: "TYPE_ADDED_TO_UNION",
  OPTIONAL_INPUT_FIELD_ADDED: "OPTIONAL_INPUT_FIELD_ADDED",
  OPTIONAL_ARG_ADDED: "OPTIONAL_ARG_ADDED",
  IMPLEMENTED_INTERFACE_ADDED: "IMPLEMENTED_INTERFACE_ADDED",
  ARG_DEFAULT_VALUE_CHANGE: "ARG_DEFAULT_VALUE_CHANGE"
});
function findBreakingChanges(oldSchema, newSchema) {
  var breakingChanges = findSchemaChanges(oldSchema, newSchema).filter(function(change) {
    return change.type in BreakingChangeType;
  });
  return breakingChanges;
}
function findDangerousChanges(oldSchema, newSchema) {
  var dangerousChanges = findSchemaChanges(oldSchema, newSchema).filter(function(change) {
    return change.type in DangerousChangeType;
  });
  return dangerousChanges;
}
function findSchemaChanges(oldSchema, newSchema) {
  return [].concat(findTypeChanges(oldSchema, newSchema), findDirectiveChanges(oldSchema, newSchema));
}
function findDirectiveChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());
  for (var _i2 = 0, _directivesDiff$remov2 = directivesDiff.removed; _i2 < _directivesDiff$remov2.length; _i2++) {
    var oldDirective = _directivesDiff$remov2[_i2];
    schemaChanges.push({
      type: BreakingChangeType.DIRECTIVE_REMOVED,
      description: "".concat(oldDirective.name, " was removed.")
    });
  }
  for (var _i4 = 0, _directivesDiff$persi2 = directivesDiff.persisted; _i4 < _directivesDiff$persi2.length; _i4++) {
    var _ref2 = _directivesDiff$persi2[_i4];
    var _oldDirective = _ref2[0];
    var newDirective = _ref2[1];
    var argsDiff = diff(_oldDirective.args, newDirective.args);
    for (var _i6 = 0, _argsDiff$added2 = argsDiff.added; _i6 < _argsDiff$added2.length; _i6++) {
      var newArg = _argsDiff$added2[_i6];
      if (isRequiredArgument(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
          description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
        });
      }
    }
    for (var _i8 = 0, _argsDiff$removed2 = argsDiff.removed; _i8 < _argsDiff$removed2.length; _i8++) {
      var oldArg = _argsDiff$removed2[_i8];
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
      });
    }
    if (_oldDirective.isRepeatable && !newDirective.isRepeatable) {
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
        description: "Repeatable flag was removed from ".concat(_oldDirective.name, ".")
      });
    }
    for (var _i10 = 0, _oldDirective$locatio2 = _oldDirective.locations; _i10 < _oldDirective$locatio2.length; _i10++) {
      var location = _oldDirective$locatio2[_i10];
      if (newDirective.locations.indexOf(location) === -1) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
          description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
        });
      }
    }
  }
  return schemaChanges;
}
function findTypeChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var typesDiff = diff(objectValues(oldSchema.getTypeMap()), objectValues(newSchema.getTypeMap()));
  for (var _i12 = 0, _typesDiff$removed2 = typesDiff.removed; _i12 < _typesDiff$removed2.length; _i12++) {
    var oldType = _typesDiff$removed2[_i12];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED,
      description: isSpecifiedScalarType(oldType) ? "Standard scalar ".concat(oldType.name, " was removed because it is not referenced anymore.") : "".concat(oldType.name, " was removed.")
    });
  }
  for (var _i14 = 0, _typesDiff$persisted2 = typesDiff.persisted; _i14 < _typesDiff$persisted2.length; _i14++) {
    var _ref4 = _typesDiff$persisted2[_i14];
    var _oldType = _ref4[0];
    var newType = _ref4[1];
    if (isEnumType(_oldType) && isEnumType(newType)) {
      schemaChanges.push.apply(schemaChanges, findEnumTypeChanges(_oldType, newType));
    } else if (isUnionType(_oldType) && isUnionType(newType)) {
      schemaChanges.push.apply(schemaChanges, findUnionTypeChanges(_oldType, newType));
    } else if (isInputObjectType(_oldType) && isInputObjectType(newType)) {
      schemaChanges.push.apply(schemaChanges, findInputObjectTypeChanges(_oldType, newType));
    } else if (isObjectType(_oldType) && isObjectType(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
    } else if (isInterfaceType(_oldType) && isInterfaceType(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
    } else if (_oldType.constructor !== newType.constructor) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  }
  return schemaChanges;
}
function findInputObjectTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(objectValues(oldType.getFields()), objectValues(newType.getFields()));
  for (var _i16 = 0, _fieldsDiff$added2 = fieldsDiff.added; _i16 < _fieldsDiff$added2.length; _i16++) {
    var newField = _fieldsDiff$added2[_i16];
    if (isRequiredInputField(newField)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
        description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
        description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    }
  }
  for (var _i18 = 0, _fieldsDiff$removed2 = fieldsDiff.removed; _i18 < _fieldsDiff$removed2.length; _i18++) {
    var oldField = _fieldsDiff$removed2[_i18];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }
  for (var _i20 = 0, _fieldsDiff$persisted2 = fieldsDiff.persisted; _i20 < _fieldsDiff$persisted2.length; _i20++) {
    var _ref6 = _fieldsDiff$persisted2[_i20];
    var _oldField = _ref6[0];
    var _newField = _ref6[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);
    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
      });
    }
  }
  return schemaChanges;
}
function findUnionTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());
  for (var _i22 = 0, _possibleTypesDiff$ad2 = possibleTypesDiff.added; _i22 < _possibleTypesDiff$ad2.length; _i22++) {
    var newPossibleType = _possibleTypesDiff$ad2[_i22];
    schemaChanges.push({
      type: DangerousChangeType.TYPE_ADDED_TO_UNION,
      description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
    });
  }
  for (var _i24 = 0, _possibleTypesDiff$re2 = possibleTypesDiff.removed; _i24 < _possibleTypesDiff$re2.length; _i24++) {
    var oldPossibleType = _possibleTypesDiff$re2[_i24];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
      description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
    });
  }
  return schemaChanges;
}
function findEnumTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var valuesDiff = diff(oldType.getValues(), newType.getValues());
  for (var _i26 = 0, _valuesDiff$added2 = valuesDiff.added; _i26 < _valuesDiff$added2.length; _i26++) {
    var newValue = _valuesDiff$added2[_i26];
    schemaChanges.push({
      type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
      description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
    });
  }
  for (var _i28 = 0, _valuesDiff$removed2 = valuesDiff.removed; _i28 < _valuesDiff$removed2.length; _i28++) {
    var oldValue = _valuesDiff$removed2[_i28];
    schemaChanges.push({
      type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
      description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
    });
  }
  return schemaChanges;
}
function findImplementedInterfacesChanges(oldType, newType) {
  var schemaChanges = [];
  var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());
  for (var _i30 = 0, _interfacesDiff$added2 = interfacesDiff.added; _i30 < _interfacesDiff$added2.length; _i30++) {
    var newInterface = _interfacesDiff$added2[_i30];
    schemaChanges.push({
      type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
      description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
    });
  }
  for (var _i32 = 0, _interfacesDiff$remov2 = interfacesDiff.removed; _i32 < _interfacesDiff$remov2.length; _i32++) {
    var oldInterface = _interfacesDiff$remov2[_i32];
    schemaChanges.push({
      type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
      description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
    });
  }
  return schemaChanges;
}
function findFieldChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(objectValues(oldType.getFields()), objectValues(newType.getFields()));
  for (var _i34 = 0, _fieldsDiff$removed4 = fieldsDiff.removed; _i34 < _fieldsDiff$removed4.length; _i34++) {
    var oldField = _fieldsDiff$removed4[_i34];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }
  for (var _i36 = 0, _fieldsDiff$persisted4 = fieldsDiff.persisted; _i36 < _fieldsDiff$persisted4.length; _i36++) {
    var _ref8 = _fieldsDiff$persisted4[_i36];
    var _oldField2 = _ref8[0];
    var newField = _ref8[1];
    schemaChanges.push.apply(schemaChanges, findArgChanges(oldType, _oldField2, newField));
    var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);
    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
      });
    }
  }
  return schemaChanges;
}
function findArgChanges(oldType, oldField, newField) {
  var schemaChanges = [];
  var argsDiff = diff(oldField.args, newField.args);
  for (var _i38 = 0, _argsDiff$removed4 = argsDiff.removed; _i38 < _argsDiff$removed4.length; _i38++) {
    var oldArg = _argsDiff$removed4[_i38];
    schemaChanges.push({
      type: BreakingChangeType.ARG_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
    });
  }
  for (var _i40 = 0, _argsDiff$persisted2 = argsDiff.persisted; _i40 < _argsDiff$persisted2.length; _i40++) {
    var _ref10 = _argsDiff$persisted2[_i40];
    var _oldArg = _ref10[0];
    var newArg = _ref10[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);
    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
      });
    } else if (_oldArg.defaultValue !== void 0) {
      if (newArg.defaultValue === void 0) {
        schemaChanges.push({
          type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
        });
      } else {
        var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
        var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);
        if (oldValueStr !== newValueStr) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
          });
        }
      }
    }
  }
  for (var _i42 = 0, _argsDiff$added4 = argsDiff.added; _i42 < _argsDiff$added4.length; _i42++) {
    var _newArg = _argsDiff$added4[_i42];
    if (isRequiredArgument(_newArg)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_ARG_ADDED,
        description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_ARG_ADDED,
        description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    }
  }
  return schemaChanges;
}
function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (isListType(oldType)) {
    return isListType(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
  }
  if (isNonNullType(oldType)) {
    return isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }
  return isNamedType(newType) && oldType.name === newType.name || isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType);
}
function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (isListType(oldType)) {
    return isListType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }
  if (isNonNullType(oldType)) {
    return isNonNullType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || !isNonNullType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType);
  }
  return isNamedType(newType) && oldType.name === newType.name;
}
function typeKindName(type) {
  if (isScalarType(type)) {
    return "a Scalar type";
  }
  if (isObjectType(type)) {
    return "an Object type";
  }
  if (isInterfaceType(type)) {
    return "an Interface type";
  }
  if (isUnionType(type)) {
    return "a Union type";
  }
  if (isEnumType(type)) {
    return "an Enum type";
  }
  if (isInputObjectType(type)) {
    return "an Input type";
  }
  invariant$9(0, "Unexpected type: " + inspect(type));
}
function stringifyValue(value, type) {
  var ast = astFromValue(value, type);
  ast != null || invariant$9(0);
  var sortedAST = visit(ast, {
    ObjectValue: function ObjectValue(objectNode) {
      var fields = [].concat(objectNode.fields);
      fields.sort(function(fieldA, fieldB) {
        return naturalCompare(fieldA.name.value, fieldB.name.value);
      });
      return _objectSpread(_objectSpread({}, objectNode), {}, {
        fields
      });
    }
  });
  return print$3(sortedAST);
}
function diff(oldArray, newArray) {
  var added = [];
  var removed = [];
  var persisted = [];
  var oldMap = keyMap(oldArray, function(_ref11) {
    var name = _ref11.name;
    return name;
  });
  var newMap = keyMap(newArray, function(_ref12) {
    var name = _ref12.name;
    return name;
  });
  for (var _i44 = 0; _i44 < oldArray.length; _i44++) {
    var oldItem = oldArray[_i44];
    var newItem = newMap[oldItem.name];
    if (newItem === void 0) {
      removed.push(oldItem);
    } else {
      persisted.push([oldItem, newItem]);
    }
  }
  for (var _i46 = 0; _i46 < newArray.length; _i46++) {
    var _newItem = newArray[_i46];
    if (oldMap[_newItem.name] === void 0) {
      added.push(_newItem);
    }
  }
  return {
    added,
    persisted,
    removed
  };
}
function findDeprecatedUsages(schema, ast) {
  return validate(schema, ast, [NoDeprecatedCustomRule]);
}
var graphql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  version,
  versionInfo,
  graphql: graphql$1,
  graphqlSync,
  GraphQLSchema,
  GraphQLDirective,
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  specifiedScalarTypes,
  GraphQLInt: GraphQLInt$1,
  GraphQLFloat: GraphQLFloat$1,
  GraphQLString: GraphQLString$1,
  GraphQLBoolean: GraphQLBoolean$1,
  GraphQLID: GraphQLID$1,
  specifiedDirectives,
  GraphQLIncludeDirective,
  GraphQLSkipDirective,
  GraphQLDeprecatedDirective,
  GraphQLSpecifiedByDirective,
  TypeKind,
  DEFAULT_DEPRECATION_REASON,
  introspectionTypes,
  __Schema,
  __Directive,
  __DirectiveLocation,
  __Type,
  __Field,
  __InputValue,
  __EnumValue,
  __TypeKind,
  SchemaMetaFieldDef: SchemaMetaFieldDef$1,
  TypeMetaFieldDef: TypeMetaFieldDef$1,
  TypeNameMetaFieldDef,
  isSchema,
  isDirective,
  isType,
  isScalarType,
  isObjectType,
  isInterfaceType,
  isUnionType,
  isEnumType,
  isInputObjectType,
  isListType,
  isNonNullType,
  isInputType,
  isOutputType,
  isLeafType,
  isCompositeType,
  isAbstractType,
  isWrappingType,
  isNullableType,
  isNamedType,
  isRequiredArgument,
  isRequiredInputField,
  isSpecifiedScalarType,
  isIntrospectionType,
  isSpecifiedDirective,
  assertSchema,
  assertDirective,
  assertType,
  assertScalarType,
  assertObjectType,
  assertInterfaceType,
  assertUnionType,
  assertEnumType,
  assertInputObjectType,
  assertListType,
  assertNonNullType,
  assertInputType,
  assertOutputType,
  assertLeafType,
  assertCompositeType,
  assertAbstractType,
  assertWrappingType,
  assertNullableType,
  assertNamedType,
  getNullableType,
  getNamedType,
  validateSchema,
  assertValidSchema,
  Token,
  Source: Source$1,
  Location,
  getLocation: getLocation$1,
  printLocation,
  printSourceLocation,
  Lexer,
  TokenKind,
  parse: parse$2,
  parseValue,
  parseType: parseType$2,
  print: print$3,
  visit,
  visitInParallel,
  getVisitFn,
  BREAK,
  Kind,
  DirectiveLocation,
  isDefinitionNode,
  isExecutableDefinitionNode,
  isSelectionNode,
  isValueNode,
  isTypeNode,
  isTypeSystemDefinitionNode,
  isTypeDefinitionNode,
  isTypeSystemExtensionNode,
  isTypeExtensionNode,
  execute,
  executeSync,
  defaultFieldResolver,
  defaultTypeResolver,
  responsePathAsArray: pathToArray,
  getDirectiveValues,
  subscribe,
  createSourceEventStream,
  validate,
  ValidationContext,
  specifiedRules,
  ExecutableDefinitionsRule,
  FieldsOnCorrectTypeRule,
  FragmentsOnCompositeTypesRule,
  KnownArgumentNamesRule,
  KnownDirectivesRule,
  KnownFragmentNamesRule,
  KnownTypeNamesRule,
  LoneAnonymousOperationRule,
  NoFragmentCyclesRule,
  NoUndefinedVariablesRule,
  NoUnusedFragmentsRule,
  NoUnusedVariablesRule,
  OverlappingFieldsCanBeMergedRule,
  PossibleFragmentSpreadsRule,
  ProvidedRequiredArgumentsRule,
  ScalarLeafsRule,
  SingleFieldSubscriptionsRule,
  UniqueArgumentNamesRule,
  UniqueDirectivesPerLocationRule,
  UniqueFragmentNamesRule,
  UniqueInputFieldNamesRule,
  UniqueOperationNamesRule,
  UniqueVariableNamesRule,
  ValuesOfCorrectTypeRule,
  VariablesAreInputTypesRule,
  VariablesInAllowedPositionRule,
  LoneSchemaDefinitionRule,
  UniqueOperationTypesRule,
  UniqueTypeNamesRule,
  UniqueEnumValueNamesRule,
  UniqueFieldDefinitionNamesRule,
  UniqueDirectiveNamesRule,
  PossibleTypeExtensionsRule,
  NoDeprecatedCustomRule,
  NoSchemaIntrospectionCustomRule,
  GraphQLError: GraphQLError$1,
  syntaxError,
  locatedError,
  printError,
  formatError,
  getIntrospectionQuery,
  getOperationAST,
  getOperationRootType,
  introspectionFromSchema,
  buildClientSchema,
  buildASTSchema,
  buildSchema,
  getDescription,
  extendSchema,
  lexicographicSortSchema,
  printSchema,
  printType,
  printIntrospectionSchema,
  typeFromAST,
  valueFromAST,
  valueFromASTUntyped: valueFromASTUntyped$1,
  astFromValue,
  TypeInfo,
  visitWithTypeInfo,
  coerceInputValue,
  concatAST,
  separateOperations,
  stripIgnoredCharacters,
  isEqualType,
  isTypeSubTypeOf,
  doTypesOverlap,
  assertValidName,
  isValidNameError,
  BreakingChangeType,
  DangerousChangeType,
  findBreakingChanges,
  findDangerousChanges,
  findDeprecatedUsages
}, Symbol.toStringTag, { value: "Module" }));
var uncPathRegex = function uncPathRegex2() {
  return /^[\\\/]{2,}[^\\\/]+[\\\/]+[^\\\/]+/;
};
var regex = uncPathRegex();
var isUncPath$1 = function(filepath) {
  if (typeof filepath !== "string") {
    throw new TypeError("expected a string");
  }
  return regex.test(filepath);
};
var isUncPath = isUncPath$1;
var isRelative$1 = function isRelative(filepath) {
  if (typeof filepath !== "string") {
    throw new TypeError("expected filepath to be a string");
  }
  return !isUncPath(filepath) && !/^([a-z]:)?[\\\/]/i.test(filepath);
};
var isWindows$1 = { exports: {} };
/*!
 * is-windows <https://github.com/jonschlinkert/is-windows>
 *
 * Copyright © 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
(function(module, exports) {
  (function(factory) {
    if (exports && true && true) {
      module.exports = factory();
    } else if (typeof window !== "undefined") {
      window.isWindows = factory();
    } else if (typeof commonjsGlobal !== "undefined") {
      commonjsGlobal.isWindows = factory();
    } else if (typeof self !== "undefined") {
      self.isWindows = factory();
    } else {
      this.isWindows = factory();
    }
  })(function() {
    return function isWindows2() {
      return process && (process.platform === "win32" || /^(msys|cygwin)$/.test({}.OSTYPE));
    };
  });
})(isWindows$1, isWindows$1.exports);
var isRelative2 = isRelative$1;
var isWindows = isWindows$1.exports;
var isAbsolute_1 = isAbsolute$1;
function isAbsolute$1(fp) {
  if (typeof fp !== "string") {
    throw new TypeError("isAbsolute expects a string.");
  }
  return isWindows() ? isAbsolute$1.win32(fp) : isAbsolute$1.posix(fp);
}
isAbsolute$1.posix = function posixPath(fp) {
  return fp.charAt(0) === "/";
};
isAbsolute$1.win32 = function win32(fp) {
  if (/[a-z]/i.test(fp.charAt(0)) && fp.charAt(1) === ":" && fp.charAt(2) === "\\") {
    return true;
  }
  if (fp.slice(0, 2) === "\\\\") {
    return true;
  }
  return !isRelative2(fp);
};
/*!
 * path-root-regex <https://github.com/jonschlinkert/path-root-regex>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var pathRootRegex$1 = function() {
  return /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?/;
};
/*!
 * path-root <https://github.com/jonschlinkert/path-root>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var pathRootRegex = pathRootRegex$1;
var pathRoot$1 = function(filepath) {
  if (typeof filepath !== "string") {
    throw new TypeError("expected a string");
  }
  var match = pathRootRegex().exec(filepath);
  if (match) {
    return match[0];
  }
};
/*!
 * map-cache <https://github.com/jonschlinkert/map-cache>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var hasOwn = Object.prototype.hasOwnProperty;
var mapCache = MapCache$1;
function MapCache$1(data) {
  this.__data__ = data || {};
}
MapCache$1.prototype.set = function mapSet(key, value) {
  if (key !== "__proto__") {
    this.__data__[key] = value;
  }
  return this;
};
MapCache$1.prototype.get = function mapGet(key) {
  return key === "__proto__" ? void 0 : this.__data__[key];
};
MapCache$1.prototype.has = function mapHas(key) {
  return key !== "__proto__" && hasOwn.call(this.__data__, key);
};
MapCache$1.prototype.del = function mapDelete(key) {
  return this.has(key) && delete this.__data__[key];
};
var path = pathBrowserify;
var isAbsolute = isAbsolute_1;
var pathRoot = pathRoot$1;
var MapCache = mapCache;
var cache$1 = new MapCache();
var parseFilepath = function(filepath) {
  if (typeof filepath !== "string") {
    throw new TypeError("parse-filepath expects a string");
  }
  if (cache$1.has(filepath)) {
    return cache$1.get(filepath);
  }
  var obj = {};
  if (typeof path.parse === "function") {
    obj = path.parse(filepath);
    obj.extname = obj.ext;
    obj.basename = obj.base;
    obj.dirname = obj.dir;
    obj.stem = obj.name;
  } else {
    define(obj, "root", function() {
      return pathRoot(this.path);
    });
    define(obj, "extname", function() {
      return path.extname(filepath);
    });
    define(obj, "ext", function() {
      return this.extname;
    });
    define(obj, "name", function() {
      return path.basename(filepath, this.ext);
    });
    define(obj, "stem", function() {
      return this.name;
    });
    define(obj, "base", function() {
      return this.name + this.ext;
    });
    define(obj, "basename", function() {
      return this.base;
    });
    define(obj, "dir", function() {
      var dir = path.dirname(filepath);
      if (dir === ".") {
        return filepath[0] === "." ? dir : "";
      } else {
        return dir;
      }
    });
    define(obj, "dirname", function() {
      return this.dir;
    });
  }
  obj.path = filepath;
  define(obj, "absolute", function() {
    return path.resolve(this.path);
  });
  define(obj, "isAbsolute", function() {
    return isAbsolute(this.path);
  });
  cache$1.set(filepath, obj);
  return obj;
};
function define(obj, prop, fn) {
  var cached;
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    set: function(val) {
      cached = val;
    },
    get: function() {
      return cached || (cached = fn.call(obj));
    }
  });
}
const getAllProperties = (object) => {
  const properties = /* @__PURE__ */ new Set();
  do {
    for (const key of Reflect.ownKeys(object)) {
      properties.add([object, key]);
    }
  } while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
  return properties;
};
var autoBind = (self2, { include, exclude } = {}) => {
  const filter = (key) => {
    const match = (pattern) => typeof pattern === "string" ? key === pattern : pattern.test(key);
    if (include) {
      return include.some(match);
    }
    if (exclude) {
      return !exclude.some(match);
    }
    return true;
  };
  for (const [object, key] of getAllProperties(self2.constructor.prototype)) {
    if (key === "constructor" || !filter(key)) {
      continue;
    }
    const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
    if (descriptor && typeof descriptor.value === "function") {
      self2[key] = self2[key].bind(self2);
    }
  }
  return self2;
};
var DepGraph_1;
function createDFS(edges, leavesOnly, result, circular) {
  var visited = {};
  return function(start2) {
    if (visited[start2]) {
      return;
    }
    var inCurrentPath = {};
    var currentPath = [];
    var todo = [];
    todo.push({ node: start2, processed: false });
    while (todo.length > 0) {
      var current = todo[todo.length - 1];
      var processed = current.processed;
      var node = current.node;
      if (!processed) {
        if (visited[node]) {
          todo.pop();
          continue;
        } else if (inCurrentPath[node]) {
          if (circular) {
            todo.pop();
            continue;
          }
          currentPath.push(node);
          throw new DepGraphCycleError(currentPath);
        }
        inCurrentPath[node] = true;
        currentPath.push(node);
        var nodeEdges = edges[node];
        for (var i = nodeEdges.length - 1; i >= 0; i--) {
          todo.push({ node: nodeEdges[i], processed: false });
        }
        current.processed = true;
      } else {
        todo.pop();
        currentPath.pop();
        inCurrentPath[node] = false;
        visited[node] = true;
        if (!leavesOnly || edges[node].length === 0) {
          result.push(node);
        }
      }
    }
  };
}
var DepGraph = DepGraph_1 = function DepGraph2(opts) {
  this.nodes = {};
  this.outgoingEdges = {};
  this.incomingEdges = {};
  this.circular = opts && !!opts.circular;
};
DepGraph.prototype = {
  size: function() {
    return Object.keys(this.nodes).length;
  },
  addNode: function(node, data) {
    if (!this.hasNode(node)) {
      if (arguments.length === 2) {
        this.nodes[node] = data;
      } else {
        this.nodes[node] = node;
      }
      this.outgoingEdges[node] = [];
      this.incomingEdges[node] = [];
    }
  },
  removeNode: function(node) {
    if (this.hasNode(node)) {
      delete this.nodes[node];
      delete this.outgoingEdges[node];
      delete this.incomingEdges[node];
      [this.incomingEdges, this.outgoingEdges].forEach(function(edgeList) {
        Object.keys(edgeList).forEach(function(key) {
          var idx = edgeList[key].indexOf(node);
          if (idx >= 0) {
            edgeList[key].splice(idx, 1);
          }
        }, this);
      });
    }
  },
  hasNode: function(node) {
    return this.nodes.hasOwnProperty(node);
  },
  getNodeData: function(node) {
    if (this.hasNode(node)) {
      return this.nodes[node];
    } else {
      throw new Error("Node does not exist: " + node);
    }
  },
  setNodeData: function(node, data) {
    if (this.hasNode(node)) {
      this.nodes[node] = data;
    } else {
      throw new Error("Node does not exist: " + node);
    }
  },
  addDependency: function(from, to) {
    if (!this.hasNode(from)) {
      throw new Error("Node does not exist: " + from);
    }
    if (!this.hasNode(to)) {
      throw new Error("Node does not exist: " + to);
    }
    if (this.outgoingEdges[from].indexOf(to) === -1) {
      this.outgoingEdges[from].push(to);
    }
    if (this.incomingEdges[to].indexOf(from) === -1) {
      this.incomingEdges[to].push(from);
    }
    return true;
  },
  removeDependency: function(from, to) {
    var idx;
    if (this.hasNode(from)) {
      idx = this.outgoingEdges[from].indexOf(to);
      if (idx >= 0) {
        this.outgoingEdges[from].splice(idx, 1);
      }
    }
    if (this.hasNode(to)) {
      idx = this.incomingEdges[to].indexOf(from);
      if (idx >= 0) {
        this.incomingEdges[to].splice(idx, 1);
      }
    }
  },
  clone: function() {
    var source = this;
    var result = new DepGraph();
    var keys = Object.keys(source.nodes);
    keys.forEach(function(n) {
      result.nodes[n] = source.nodes[n];
      result.outgoingEdges[n] = source.outgoingEdges[n].slice(0);
      result.incomingEdges[n] = source.incomingEdges[n].slice(0);
    });
    return result;
  },
  directDependenciesOf: function(node) {
    if (this.hasNode(node)) {
      return this.outgoingEdges[node].slice(0);
    } else {
      throw new Error("Node does not exist: " + node);
    }
  },
  directDependantsOf: function(node) {
    if (this.hasNode(node)) {
      return this.incomingEdges[node].slice(0);
    } else {
      throw new Error("Node does not exist: " + node);
    }
  },
  dependenciesOf: function(node, leavesOnly) {
    if (this.hasNode(node)) {
      var result = [];
      var DFS = createDFS(this.outgoingEdges, leavesOnly, result, this.circular);
      DFS(node);
      var idx = result.indexOf(node);
      if (idx >= 0) {
        result.splice(idx, 1);
      }
      return result;
    } else {
      throw new Error("Node does not exist: " + node);
    }
  },
  dependantsOf: function(node, leavesOnly) {
    if (this.hasNode(node)) {
      var result = [];
      var DFS = createDFS(this.incomingEdges, leavesOnly, result, this.circular);
      DFS(node);
      var idx = result.indexOf(node);
      if (idx >= 0) {
        result.splice(idx, 1);
      }
      return result;
    } else {
      throw new Error("Node does not exist: " + node);
    }
  },
  overallOrder: function(leavesOnly) {
    var self2 = this;
    var result = [];
    var keys = Object.keys(this.nodes);
    if (keys.length === 0) {
      return result;
    } else {
      if (!this.circular) {
        var CycleDFS = createDFS(this.outgoingEdges, false, [], this.circular);
        keys.forEach(function(n) {
          CycleDFS(n);
        });
      }
      var DFS = createDFS(this.outgoingEdges, leavesOnly, result, this.circular);
      keys.filter(function(node) {
        return self2.incomingEdges[node].length === 0;
      }).forEach(function(n) {
        DFS(n);
      });
      if (this.circular) {
        keys.filter(function(node) {
          return result.indexOf(node) === -1;
        }).forEach(function(n) {
          DFS(n);
        });
      }
      return result;
    }
  },
  entryNodes: function() {
    var self2 = this;
    return Object.keys(this.nodes).filter(function(node) {
      return self2.incomingEdges[node].length === 0;
    });
  }
};
DepGraph.prototype.directDependentsOf = DepGraph.prototype.directDependantsOf;
DepGraph.prototype.dependentsOf = DepGraph.prototype.dependantsOf;
var DepGraphCycleError = function(cyclePath) {
  var message = "Dependency Cycle Found: " + cyclePath.join(" -> ");
  var instance = new Error(message);
  instance.cyclePath = cyclePath;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, DepGraphCycleError);
  }
  return instance;
};
DepGraphCycleError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
Object.setPrototypeOf(DepGraphCycleError, Error);
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse$2(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result = literals[0];
  args.forEach(function(arg, i) {
    if (arg && arg.kind === "Document") {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }
    result += literals[i + 1];
  });
  return parseDocument(result);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
var gqlTag = gql;
const removeDescriptions = (input) => {
  function transformNode2(node) {
    if (node.description) {
      node.description = void 0;
    }
    return node;
  }
  return visit(input, {
    ScalarTypeDefinition: transformNode2,
    ObjectTypeDefinition: transformNode2,
    InterfaceTypeDefinition: transformNode2,
    UnionTypeDefinition: transformNode2,
    EnumTypeDefinition: transformNode2,
    EnumValueDefinition: transformNode2,
    InputObjectTypeDefinition: transformNode2,
    InputValueDefinition: transformNode2,
    FieldDefinition: transformNode2
  });
};
const removeEmptyNodes = (input) => {
  function transformNode2(node) {
    let resultNode = node;
    if (resultNode.directives && Array.isArray(resultNode.directives) && resultNode.directives.length === 0) {
      const _a = resultNode, { directives } = _a, rest = __objRest(_a, ["directives"]);
      resultNode = rest;
    }
    if (resultNode.arguments && Array.isArray(resultNode.arguments) && resultNode.arguments.length === 0) {
      const _b = resultNode, { arguments: args } = _b, rest = __objRest(_b, ["arguments"]);
      resultNode = rest;
    }
    if (resultNode.variableDefinitions && Array.isArray(resultNode.variableDefinitions) && resultNode.variableDefinitions.length === 0) {
      const _c = resultNode, { variableDefinitions } = _c, rest = __objRest(_c, ["variableDefinitions"]);
      resultNode = rest;
    }
    return resultNode;
  }
  return visit(input, {
    FragmentDefinition: transformNode2,
    OperationDefinition: transformNode2,
    VariableDefinition: transformNode2,
    Field: transformNode2,
    FragmentSpread: transformNode2,
    InlineFragment: transformNode2,
    Name: transformNode2,
    Directive: transformNode2,
    SchemaDefinition: transformNode2,
    ScalarTypeDefinition: transformNode2,
    ObjectTypeDefinition: transformNode2,
    InterfaceTypeDefinition: transformNode2,
    UnionTypeDefinition: transformNode2,
    EnumTypeDefinition: transformNode2,
    EnumValueDefinition: transformNode2,
    InputObjectTypeDefinition: transformNode2,
    FieldDefinition: transformNode2,
    InputValueDefinition: transformNode2,
    SchemaExtension: transformNode2,
    ScalarTypeExtension: transformNode2,
    ObjectTypeExtension: transformNode2,
    InterfaceTypeExtension: transformNode2,
    UnionTypeExtension: transformNode2,
    EnumTypeExtension: transformNode2,
    InputObjectTypeExtension: transformNode2
  });
};
const removeLoc = (input) => {
  function transformNode2(node) {
    if (node.loc && typeof node.loc === "object") {
      const _a = node, { loc } = _a, rest = __objRest(_a, ["loc"]);
      return rest;
    }
    return node;
  }
  return visit(input, { enter: transformNode2 });
};
const DEFAULT_OPTIMIZERS = [removeDescriptions, removeEmptyNodes, removeLoc];
function optimizeDocumentNode(node, optimizers = DEFAULT_OPTIMIZERS) {
  let resultNode = node;
  for (const optimizer of optimizers) {
    if (typeof optimizer !== "function") {
      throw new Error(`Optimizer provided for "optimizeDocumentNode" must be a function!`);
    }
    const result = optimizer(resultNode);
    if (!result) {
      throw new Error(`Optimizer provided for "optimizeDocumentNode" returned empty value instead of modified "DocumentNode"!`);
    }
    resultNode = result;
  }
  return resultNode;
}
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireDefault);
var objectSpread2 = { exports: {} };
var defineProperty = { exports: {} };
(function(module) {
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty);
(function(module) {
  var defineProperty$1 = defineProperty.exports;
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread22(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        defineProperty$1(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  module.exports = _objectSpread22, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(objectSpread2);
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
var arrayLikeToArray = { exports: {} };
(function(module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayLikeToArray);
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return arrayLikeToArray$1(arr);
  }
  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithoutHoles);
var iterableToArray = { exports: {} };
(function(module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArray);
var unsupportedIterableToArray = { exports: {} };
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray$1(o, minLen);
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(unsupportedIterableToArray);
var nonIterableSpread = { exports: {} };
(function(module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableSpread);
(function(module) {
  var arrayWithoutHoles$1 = arrayWithoutHoles.exports;
  var iterableToArray$1 = iterableToArray.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableSpread$1 = nonIterableSpread.exports;
  function _toConsumableArray(arr) {
    return arrayWithoutHoles$1(arr) || iterableToArray$1(arr) || unsupportedIterableToArray$1(arr) || nonIterableSpread$1();
  }
  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toConsumableArray);
var invariant$8 = function(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var browser = invariant$8;
var createForOfIteratorHelper = { exports: {} };
(function(module) {
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return {
          s: F,
          n: function n() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
      s: function s() {
        it = it.call(o);
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null)
            it["return"]();
        } finally {
          if (didErr)
            throw err;
        }
      }
    };
  }
  module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(createForOfIteratorHelper);
var require$$5 = /* @__PURE__ */ getAugmentedNamespace(graphql);
var _interopRequireDefault$7 = interopRequireDefault.exports;
var _createForOfIteratorHelper2$4 = _interopRequireDefault$7(createForOfIteratorHelper.exports);
var _require$c = require$$5, GraphQLError = _require$c.GraphQLError;
function createUserError$4(message, locations, nodes) {
  var messageWithLocations = message;
  if (locations != null) {
    var printedLocations = printLocations(locations);
    messageWithLocations = printedLocations.length === 0 ? message : [message].concat(printedLocations).join("\n\n") + "\n";
  }
  return new GraphQLError(messageWithLocations, nodes !== null && nodes !== void 0 ? nodes : []);
}
function createNonRecoverableUserError$1(message, locations, nodes) {
  var messageWithLocations = message;
  if (locations != null) {
    var printedLocations = printLocations(locations);
    messageWithLocations = printedLocations.length === 0 ? message : [message].concat(printedLocations).join("\n\n") + "\n";
  }
  var error = new GraphQLError(messageWithLocations, nodes !== null && nodes !== void 0 ? nodes : []);
  return new Error(error.message);
}
function createCompilerError$7(message, locations, nodes) {
  var messageWithLocations = message;
  if (locations != null) {
    var printedLocations = printLocations(locations);
    messageWithLocations = printedLocations.length === 0 ? message : [message].concat(printedLocations).join("\n\n") + "\n";
  }
  var error = new GraphQLError("Internal Error: ".concat(messageWithLocations), nodes !== null && nodes !== void 0 ? nodes : []);
  return new Error(error.message);
}
function eachWithCombinedError$3(iterable, fn) {
  var errors = [];
  var _iterator = (0, _createForOfIteratorHelper2$4["default"])(iterable), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var item = _step.value;
      try {
        fn(item);
      } catch (error) {
        if (error instanceof GraphQLError) {
          errors.push(error);
        } else {
          throw error;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (errors.length > 0) {
    if (errors.length === 1) {
      throw createUserError$4(String(errors[0]).split("\n").map(function(line, index) {
        return index === 0 ? "- ".concat(line) : "  ".concat(line);
      }).join("\n"));
    }
    throw createUserError$4("Encountered ".concat(errors.length, " errors:\n") + errors.map(function(error) {
      return String(error).split("\n").map(function(line, index) {
        return index === 0 ? "- ".concat(line) : "  ".concat(line);
      }).join("\n");
    }).join("\n"));
  }
}
function printLocations(locations) {
  var printedLocations = [];
  var _iterator2 = (0, _createForOfIteratorHelper2$4["default"])(locations), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var location = _step2.value;
      var sourceLocation = location;
      while (sourceLocation.kind === "Derived") {
        sourceLocation = sourceLocation.source;
      }
      switch (sourceLocation.kind) {
        case "Source": {
          var prefix = sourceLocation === location ? "Source: " : "Source (derived): ";
          printedLocations.push(prefix + highlightSourceAtLocation(sourceLocation.source, getLocation(sourceLocation.source, sourceLocation.start)));
          break;
        }
        case "Generated": {
          printedLocations.push("Source: (generated)");
          break;
        }
        case "Unknown": {
          printedLocations.push("Source: (unknown)");
          break;
        }
        default: {
          sourceLocation;
          throw createCompilerError$7("CompilerError: cannot print location '".concat(String(sourceLocation), "'."));
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return printedLocations;
}
function highlightSourceAtLocation(source, location) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = location.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = location.line + lineOffset;
  var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = location.column + columnOffset;
  var lines = body.split(/\r\n|[\n\r]/g);
  return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([
    ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]],
    ["".concat(lineNum, ": "), lines[lineIndex]],
    ["", whitespace(columnNum - 1) + "^"],
    ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  var existingLines = lines.filter(function(_ref) {
    _ref[0];
    var line = _ref[1];
    return line !== void 0;
  });
  var padLen = 0;
  var _iterator3 = (0, _createForOfIteratorHelper2$4["default"])(existingLines), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _step3$value = _step3.value, prefix = _step3$value[0];
      padLen = Math.max(padLen, prefix.length);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return existingLines.map(function(_ref2) {
    var prefix2 = _ref2[0], line = _ref2[1];
    return lpad(padLen, prefix2) + line;
  }).join("\n");
}
function whitespace(len) {
  return Array(len + 1).join(" ");
}
function lpad(len, str) {
  return whitespace(len - str.length) + str;
}
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return {
    line,
    column
  };
}
var CompilerError = {
  createCompilerError: createCompilerError$7,
  createNonRecoverableUserError: createNonRecoverableUserError$1,
  createUserError: createUserError$4,
  eachWithCombinedError: eachWithCombinedError$3
};
var _interopRequireDefault$6 = interopRequireDefault.exports;
var _objectSpread2$4 = _interopRequireDefault$6(objectSpread2.exports);
var invariant$7 = browser;
var _require$b = CompilerError, eachWithCombinedError$2 = _require$b.eachWithCombinedError;
function transform$1(context, visitor, stateInitializer) {
  var transformer = new Transformer(context, visitor);
  return context.withMutations(function(ctx) {
    var nextContext = ctx;
    eachWithCombinedError$2(context.documents(), function(prevNode) {
      var nextNode;
      if (stateInitializer === void 0) {
        nextNode = transformer.visit(prevNode, void 0);
      } else {
        var _state = stateInitializer(prevNode);
        if (_state != null) {
          nextNode = transformer.visit(prevNode, _state);
        }
      }
      if (!nextNode) {
        nextContext = nextContext.remove(prevNode.name);
      } else if (nextNode !== prevNode) {
        nextContext = nextContext.replace(nextNode);
      }
    });
    return nextContext;
  });
}
var Transformer = /* @__PURE__ */ function() {
  function Transformer2(context, visitor) {
    this._context = context;
    this._states = [];
    this._visitor = visitor;
  }
  var _proto = Transformer2.prototype;
  _proto.getContext = function getContext() {
    return this._context;
  };
  _proto.visit = function visit2(node, state) {
    this._states.push(state);
    var nextNode = this._visit(node);
    this._states.pop();
    return nextNode;
  };
  _proto.traverse = function traverse(node, state) {
    this._states.push(state);
    var nextNode = this._traverse(node);
    this._states.pop();
    return nextNode;
  };
  _proto._visit = function _visit(node) {
    var nodeVisitor = this._visitor[node.kind];
    if (nodeVisitor) {
      var _state2 = this._getState();
      var nextNode = nodeVisitor.call(this, node, _state2);
      return nextNode;
    }
    return this._traverse(node);
  };
  _proto._traverse = function _traverse(prevNode) {
    var nextNode;
    switch (prevNode.kind) {
      case "Argument":
        nextNode = this._traverseChildren(prevNode, null, ["value"]);
        break;
      case "Literal":
      case "LocalArgumentDefinition":
      case "RootArgumentDefinition":
      case "Variable":
        nextNode = prevNode;
        break;
      case "Defer":
        nextNode = this._traverseChildren(prevNode, ["selections"], ["if"]);
        break;
      case "Stream":
        nextNode = this._traverseChildren(prevNode, ["selections"], ["if", "initialCount"]);
        break;
      case "ClientExtension":
        nextNode = this._traverseChildren(prevNode, ["selections"]);
        break;
      case "Directive":
        nextNode = this._traverseChildren(prevNode, ["args"]);
        break;
      case "ModuleImport":
        nextNode = this._traverseChildren(prevNode, ["selections"]);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case "FragmentSpread":
      case "ScalarField":
        nextNode = this._traverseChildren(prevNode, ["args", "directives"]);
        break;
      case "InlineDataFragmentSpread":
        nextNode = this._traverseChildren(prevNode, ["selections"]);
        break;
      case "LinkedField":
        nextNode = this._traverseChildren(prevNode, ["args", "directives", "selections"]);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case "ListValue":
        nextNode = this._traverseChildren(prevNode, ["items"]);
        break;
      case "ObjectFieldValue":
        nextNode = this._traverseChildren(prevNode, null, ["value"]);
        break;
      case "ObjectValue":
        nextNode = this._traverseChildren(prevNode, ["fields"]);
        break;
      case "Condition":
        nextNode = this._traverseChildren(prevNode, ["directives", "selections"], ["condition"]);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case "InlineFragment":
        nextNode = this._traverseChildren(prevNode, ["directives", "selections"]);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case "Fragment":
      case "Root":
        nextNode = this._traverseChildren(prevNode, ["argumentDefinitions", "directives", "selections"]);
        break;
      case "Request":
        nextNode = this._traverseChildren(prevNode, null, ["fragment", "root"]);
        break;
      case "SplitOperation":
        nextNode = this._traverseChildren(prevNode, ["selections"]);
        break;
      default:
        invariant$7(false);
    }
    return nextNode;
  };
  _proto._traverseChildren = function _traverseChildren(prevNode, pluralKeys, singularKeys) {
    var _this = this;
    var nextNode;
    pluralKeys && pluralKeys.forEach(function(key) {
      var prevItems = prevNode[key];
      if (!prevItems) {
        return;
      }
      !Array.isArray(prevItems) ? invariant$7(false) : void 0;
      var nextItems = _this._map(prevItems);
      if (nextNode || nextItems !== prevItems) {
        nextNode = nextNode || (0, _objectSpread2$4["default"])({}, prevNode);
        nextNode[key] = nextItems;
      }
    });
    singularKeys && singularKeys.forEach(function(key) {
      var prevItem = prevNode[key];
      if (!prevItem) {
        return;
      }
      var nextItem = _this._visit(prevItem);
      if (nextNode || nextItem !== prevItem) {
        nextNode = nextNode || (0, _objectSpread2$4["default"])({}, prevNode);
        nextNode[key] = nextItem;
      }
    });
    return nextNode || prevNode;
  };
  _proto._map = function _map(prevItems) {
    var _this2 = this;
    var nextItems;
    prevItems.forEach(function(prevItem, index) {
      var nextItem = _this2._visit(prevItem);
      if (nextItems || nextItem !== prevItem) {
        nextItems = nextItems || prevItems.slice(0, index);
        if (nextItem) {
          nextItems.push(nextItem);
        }
      }
    });
    return nextItems || prevItems;
  };
  _proto._getState = function _getState() {
    !this._states.length ? invariant$7(false) : void 0;
    return this._states[this._states.length - 1];
  };
  return Transformer2;
}();
var IRTransformer$4 = {
  transform: transform$1
};
var immutable = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var SLICE$0 = Array.prototype.slice;
    function createClass(ctor, superClass) {
      if (superClass) {
        ctor.prototype = Object.create(superClass.prototype);
      }
      ctor.prototype.constructor = ctor;
    }
    function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }
    createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }
    createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }
    createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    function isIterable(maybeIterable) {
      return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
    }
    function isKeyed(maybeKeyed) {
      return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
    }
    function isIndexed(maybeIndexed) {
      return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
    }
    function isAssociative(maybeAssociative) {
      return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
    }
    function isOrdered(maybeOrdered) {
      return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
    }
    Iterable.isIterable = isIterable;
    Iterable.isKeyed = isKeyed;
    Iterable.isIndexed = isIndexed;
    Iterable.isAssociative = isAssociative;
    Iterable.isOrdered = isOrdered;
    Iterable.Keyed = KeyedIterable;
    Iterable.Indexed = IndexedIterable;
    Iterable.Set = SetIterable;
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var DELETE = "delete";
    var SHIFT = 5;
    var SIZE = 1 << SHIFT;
    var MASK = SIZE - 1;
    var NOT_SET = {};
    var CHANGE_LENGTH = { value: false };
    var DID_ALTER = { value: false };
    function MakeRef(ref) {
      ref.value = false;
      return ref;
    }
    function SetRef(ref) {
      ref && (ref.value = true);
    }
    function OwnerID() {
    }
    function arrCopy(arr, offset) {
      offset = offset || 0;
      var len = Math.max(0, arr.length - offset);
      var newArr = new Array(len);
      for (var ii = 0; ii < len; ii++) {
        newArr[ii] = arr[ii + offset];
      }
      return newArr;
    }
    function ensureSize(iter) {
      if (iter.size === void 0) {
        iter.size = iter.__iterate(returnTrue);
      }
      return iter.size;
    }
    function wrapIndex(iter, index) {
      if (typeof index !== "number") {
        var uint32Index = index >>> 0;
        if ("" + uint32Index !== index || uint32Index === 4294967295) {
          return NaN;
        }
        index = uint32Index;
      }
      return index < 0 ? ensureSize(iter) + index : index;
    }
    function returnTrue() {
      return true;
    }
    function wholeSlice(begin, end2, size) {
      return (begin === 0 || size !== void 0 && begin <= -size) && (end2 === void 0 || size !== void 0 && end2 >= size);
    }
    function resolveBegin(begin, size) {
      return resolveIndex(begin, size, 0);
    }
    function resolveEnd(end2, size) {
      return resolveIndex(end2, size, size);
    }
    function resolveIndex(index, size, defaultIndex) {
      return index === void 0 ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === void 0 ? index : Math.min(size, index);
    }
    var ITERATE_KEYS = 0;
    var ITERATE_VALUES = 1;
    var ITERATE_ENTRIES = 2;
    var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
    function Iterator(next) {
      this.next = next;
    }
    Iterator.prototype.toString = function() {
      return "[Iterator]";
    };
    Iterator.KEYS = ITERATE_KEYS;
    Iterator.VALUES = ITERATE_VALUES;
    Iterator.ENTRIES = ITERATE_ENTRIES;
    Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
      return this.toString();
    };
    Iterator.prototype[ITERATOR_SYMBOL] = function() {
      return this;
    };
    function iteratorValue(type, k, v, iteratorResult2) {
      var value = type === 0 ? k : type === 1 ? v : [k, v];
      iteratorResult2 ? iteratorResult2.value = value : iteratorResult2 = {
        value,
        done: false
      };
      return iteratorResult2;
    }
    function iteratorDone() {
      return { value: void 0, done: true };
    }
    function hasIterator(maybeIterable) {
      return !!getIteratorFn(maybeIterable);
    }
    function isIterator(maybeIterator) {
      return maybeIterator && typeof maybeIterator.next === "function";
    }
    function getIterator(iterable) {
      var iteratorFn = getIteratorFn(iterable);
      return iteratorFn && iteratorFn.call(iterable);
    }
    function getIteratorFn(iterable) {
      var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    function isArrayLike(value) {
      return value && typeof value.length === "number";
    }
    createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === void 0 ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
    }
    Seq.of = function() {
      return Seq(arguments);
    };
    Seq.prototype.toSeq = function() {
      return this;
    };
    Seq.prototype.toString = function() {
      return this.__toString("Seq {", "}");
    };
    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };
    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };
    createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === void 0 ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
    }
    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };
    createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }
    IndexedSeq.of = function() {
      return IndexedSeq(arguments);
    };
    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };
    IndexedSeq.prototype.toString = function() {
      return this.__toString("Seq [", "]");
    };
    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };
    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };
    createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
    }
    SetSeq.of = function() {
      return SetSeq(arguments);
    };
    SetSeq.prototype.toSetSeq = function() {
      return this;
    };
    Seq.isSeq = isSeq;
    Seq.Keyed = KeyedSeq;
    Seq.Set = SetSeq;
    Seq.Indexed = IndexedSeq;
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    Seq.prototype[IS_SEQ_SENTINEL] = true;
    createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }
    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };
    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() {
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++]);
      });
    };
    createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }
    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== void 0 && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };
    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };
    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function() {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
      });
    };
    ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
    createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }
    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };
    createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }
    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache2 = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache2.length) {
        if (fn(cache2[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache2[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache2 = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function() {
        if (iterations >= cache2.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache2[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache2[iterations++]);
      });
    };
    function isSeq(maybeSeq) {
      return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
    }
    var EMPTY_SEQ;
    function emptySequence() {
      return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
    }
    function keyedSeqFromValue(value) {
      var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === "object" ? new ObjectSeq(value) : void 0;
      if (!seq) {
        throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + value);
      }
      return seq;
    }
    function indexedSeqFromValue(value) {
      var seq = maybeIndexedSeqFromValue(value);
      if (!seq) {
        throw new TypeError("Expected Array or iterable object of values: " + value);
      }
      return seq;
    }
    function seqFromValue(value) {
      var seq = maybeIndexedSeqFromValue(value) || typeof value === "object" && new ObjectSeq(value);
      if (!seq) {
        throw new TypeError("Expected Array or iterable object of values, or keyed object: " + value);
      }
      return seq;
    }
    function maybeIndexedSeqFromValue(value) {
      return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
    }
    function seqIterate(seq, fn, reverse, useKeys) {
      var cache2 = seq._cache;
      if (cache2) {
        var maxIndex = cache2.length - 1;
        for (var ii = 0; ii <= maxIndex; ii++) {
          var entry = cache2[reverse ? maxIndex - ii : ii];
          if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
            return ii + 1;
          }
        }
        return ii;
      }
      return seq.__iterateUncached(fn, reverse);
    }
    function seqIterator(seq, type, reverse, useKeys) {
      var cache2 = seq._cache;
      if (cache2) {
        var maxIndex = cache2.length - 1;
        var ii = 0;
        return new Iterator(function() {
          var entry = cache2[reverse ? maxIndex - ii : ii];
          return ii++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
        });
      }
      return seq.__iteratorUncached(type, reverse);
    }
    function fromJS(json, converter) {
      return converter ? fromJSWith(converter, json, "", { "": json }) : fromJSDefault(json);
    }
    function fromJSWith(converter, json, key, parentJSON) {
      if (Array.isArray(json)) {
        return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k) {
          return fromJSWith(converter, v, k, json);
        }));
      }
      if (isPlainObj(json)) {
        return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k) {
          return fromJSWith(converter, v, k, json);
        }));
      }
      return json;
    }
    function fromJSDefault(json) {
      if (Array.isArray(json)) {
        return IndexedSeq(json).map(fromJSDefault).toList();
      }
      if (isPlainObj(json)) {
        return KeyedSeq(json).map(fromJSDefault).toMap();
      }
      return json;
    }
    function isPlainObj(value) {
      return value && (value.constructor === Object || value.constructor === void 0);
    }
    function is(valueA, valueB) {
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
      if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
        valueA = valueA.valueOf();
        valueB = valueB.valueOf();
        if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
          return true;
        }
        if (!valueA || !valueB) {
          return false;
        }
      }
      if (typeof valueA.equals === "function" && typeof valueB.equals === "function" && valueA.equals(valueB)) {
        return true;
      }
      return false;
    }
    function deepEqual(a, b) {
      if (a === b) {
        return true;
      }
      if (!isIterable(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
        return false;
      }
      if (a.size === 0 && b.size === 0) {
        return true;
      }
      var notAssociative = !isAssociative(a);
      if (isOrdered(a)) {
        var entries = a.entries();
        return b.every(function(v, k) {
          var entry = entries.next().value;
          return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
        }) && entries.next().done;
      }
      var flipped = false;
      if (a.size === void 0) {
        if (b.size === void 0) {
          if (typeof a.cacheResult === "function") {
            a.cacheResult();
          }
        } else {
          flipped = true;
          var _ = a;
          a = b;
          b = _;
        }
      }
      var allEqual = true;
      var bSize = b.__iterate(function(v, k) {
        if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
          allEqual = false;
          return false;
        }
      });
      return allEqual && a.size === bSize;
    }
    createClass(Repeat, IndexedSeq);
    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === void 0 ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }
    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return "Repeat []";
      }
      return "Repeat [ " + this._value + " " + this.size + " times ]";
    };
    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };
    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };
    Repeat.prototype.slice = function(begin, end2) {
      var size = this.size;
      return wholeSlice(begin, end2, size) ? this : new Repeat(this._value, resolveEnd(end2, size) - resolveBegin(begin, size));
    };
    Repeat.prototype.reverse = function() {
      return this;
    };
    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };
    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };
    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };
    Repeat.prototype.__iterator = function(type, reverse) {
      var this$0 = this;
      var ii = 0;
      return new Iterator(function() {
        return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone();
      });
    };
    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
    };
    var EMPTY_REPEAT;
    function invariant2(condition, error) {
      if (!condition)
        throw new Error(error);
    }
    createClass(Range, IndexedSeq);
    function Range(start2, end2, step) {
      if (!(this instanceof Range)) {
        return new Range(start2, end2, step);
      }
      invariant2(step !== 0, "Cannot step a Range by 0");
      start2 = start2 || 0;
      if (end2 === void 0) {
        end2 = Infinity;
      }
      step = step === void 0 ? 1 : Math.abs(step);
      if (end2 < start2) {
        step = -step;
      }
      this._start = start2;
      this._end = end2;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end2 - start2) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }
    Range.prototype.toString = function() {
      if (this.size === 0) {
        return "Range []";
      }
      return "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
    };
    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    };
    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range.prototype.slice = function(begin, end2) {
      if (wholeSlice(begin, end2, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end2 = resolveEnd(end2, this.size);
      if (end2 <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end2, this._end), this._step);
    };
    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index;
        }
      }
      return -1;
    };
    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };
    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };
    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function() {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };
    Range.prototype.equals = function(other) {
      return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
    };
    var EMPTY_RANGE;
    createClass(Collection, Iterable);
    function Collection() {
      throw TypeError("Abstract");
    }
    createClass(KeyedCollection, Collection);
    function KeyedCollection() {
    }
    createClass(IndexedCollection, Collection);
    function IndexedCollection() {
    }
    createClass(SetCollection, Collection);
    function SetCollection() {
    }
    Collection.Keyed = KeyedCollection;
    Collection.Indexed = IndexedCollection;
    Collection.Set = SetCollection;
    var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
      a = a | 0;
      b = b | 0;
      var c = a & 65535;
      var d = b & 65535;
      return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
    };
    function smi(i32) {
      return i32 >>> 1 & 1073741824 | i32 & 3221225471;
    }
    function hash(o) {
      if (o === false || o === null || o === void 0) {
        return 0;
      }
      if (typeof o.valueOf === "function") {
        o = o.valueOf();
        if (o === false || o === null || o === void 0) {
          return 0;
        }
      }
      if (o === true) {
        return 1;
      }
      var type = typeof o;
      if (type === "number") {
        var h = o | 0;
        if (h !== o) {
          h ^= o * 4294967295;
        }
        while (o > 4294967295) {
          o /= 4294967295;
          h ^= o;
        }
        return smi(h);
      }
      if (type === "string") {
        return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
      }
      if (typeof o.hashCode === "function") {
        return o.hashCode();
      }
      if (type === "object") {
        return hashJSObj(o);
      }
      if (typeof o.toString === "function") {
        return hashString(o.toString());
      }
      throw new Error("Value type " + type + " cannot be hashed.");
    }
    function cachedHashString(string) {
      var hash2 = stringHashCache[string];
      if (hash2 === void 0) {
        hash2 = hashString(string);
        if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
          STRING_HASH_CACHE_SIZE = 0;
          stringHashCache = {};
        }
        STRING_HASH_CACHE_SIZE++;
        stringHashCache[string] = hash2;
      }
      return hash2;
    }
    function hashString(string) {
      var hash2 = 0;
      for (var ii = 0; ii < string.length; ii++) {
        hash2 = 31 * hash2 + string.charCodeAt(ii) | 0;
      }
      return smi(hash2);
    }
    function hashJSObj(obj) {
      var hash2;
      if (usingWeakMap) {
        hash2 = weakMap.get(obj);
        if (hash2 !== void 0) {
          return hash2;
        }
      }
      hash2 = obj[UID_HASH_KEY];
      if (hash2 !== void 0) {
        return hash2;
      }
      if (!canDefineProperty) {
        hash2 = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
        if (hash2 !== void 0) {
          return hash2;
        }
        hash2 = getIENodeHash(obj);
        if (hash2 !== void 0) {
          return hash2;
        }
      }
      hash2 = ++objHashUID;
      if (objHashUID & 1073741824) {
        objHashUID = 0;
      }
      if (usingWeakMap) {
        weakMap.set(obj, hash2);
      } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
        throw new Error("Non-extensible objects are not allowed as keys.");
      } else if (canDefineProperty) {
        Object.defineProperty(obj, UID_HASH_KEY, {
          "enumerable": false,
          "configurable": false,
          "writable": false,
          "value": hash2
        });
      } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
        obj.propertyIsEnumerable = function() {
          return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };
        obj.propertyIsEnumerable[UID_HASH_KEY] = hash2;
      } else if (obj.nodeType !== void 0) {
        obj[UID_HASH_KEY] = hash2;
      } else {
        throw new Error("Unable to set a non-enumerable property on object.");
      }
      return hash2;
    }
    var isExtensible = Object.isExtensible;
    var canDefineProperty = function() {
      try {
        Object.defineProperty({}, "@", {});
        return true;
      } catch (e) {
        return false;
      }
    }();
    function getIENodeHash(node) {
      if (node && node.nodeType > 0) {
        switch (node.nodeType) {
          case 1:
            return node.uniqueID;
          case 9:
            return node.documentElement && node.documentElement.uniqueID;
        }
      }
    }
    var usingWeakMap = typeof WeakMap === "function";
    var weakMap;
    if (usingWeakMap) {
      weakMap = /* @__PURE__ */ new WeakMap();
    }
    var objHashUID = 0;
    var UID_HASH_KEY = "__immutablehash__";
    if (typeof Symbol === "function") {
      UID_HASH_KEY = Symbol(UID_HASH_KEY);
    }
    var STRING_HASH_CACHE_MIN_STRLEN = 16;
    var STRING_HASH_CACHE_MAX_SIZE = 255;
    var STRING_HASH_CACHE_SIZE = 0;
    var stringHashCache = {};
    function assertNotInfinite(size) {
      invariant2(size !== Infinity, "Cannot perform this action with an infinite size.");
    }
    createClass(Map2, KeyedCollection);
    function Map2(value) {
      return value === null || value === void 0 ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map) {
        var iter = KeyedIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v, k) {
          return map.set(k, v);
        });
      });
    }
    Map2.prototype.toString = function() {
      return this.__toString("Map {", "}");
    };
    Map2.prototype.get = function(k, notSetValue) {
      return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
    };
    Map2.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };
    Map2.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function() {
        return v;
      });
    };
    Map2.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };
    Map2.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function() {
        return NOT_SET;
      });
    };
    Map2.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
    };
    Map2.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = void 0;
      }
      var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
      return updatedValue === NOT_SET ? void 0 : updatedValue;
    };
    Map2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };
    Map2.prototype.merge = function() {
      return mergeIntoMapWith(this, void 0, arguments);
    };
    Map2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };
    Map2.prototype.mergeIn = function(keyPath) {
      var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(keyPath, emptyMap(), function(m) {
        return typeof m.merge === "function" ? m.merge.apply(m, iters) : iters[iters.length - 1];
      });
    };
    Map2.prototype.mergeDeep = function() {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };
    Map2.prototype.mergeDeepWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };
    Map2.prototype.mergeDeepIn = function(keyPath) {
      var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(keyPath, emptyMap(), function(m) {
        return typeof m.mergeDeep === "function" ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
      });
    };
    Map2.prototype.sort = function(comparator) {
      return OrderedMap(sortFactory(this, comparator));
    };
    Map2.prototype.sortBy = function(mapper, comparator) {
      return OrderedMap(sortFactory(this, comparator, mapper));
    };
    Map2.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };
    Map2.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };
    Map2.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };
    Map2.prototype.wasAltered = function() {
      return this.__altered;
    };
    Map2.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };
    Map2.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };
    Map2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    function isMap(maybeMap) {
      return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
    }
    Map2.isMap = isMap;
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var MapPrototype = Map2.prototype;
    MapPrototype[IS_MAP_SENTINEL] = true;
    MapPrototype[DELETE] = MapPrototype.remove;
    MapPrototype.removeIn = MapPrototype.deleteIn;
    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }
    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };
    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && entries.length === 1) {
        return;
      }
      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new ArrayMapNode(ownerID, newEntries);
    };
    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }
    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
    };
    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;
      if (!exists && value === NOT_SET) {
        return this;
      }
      var idx = popCount(bitmap & bit - 1);
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : void 0;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }
      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }
      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }
      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };
    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }
    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };
    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];
      if (removed && !node) {
        return this;
      }
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }
      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };
    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }
    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };
    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var removed = value === NOT_SET;
      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };
    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }
    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };
    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }
      SetRef(didAlter);
      if (removed) {
        SetRef(didChangeSize);
        return;
      }
      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };
    ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
      var entries = this.entries;
      for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
        if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
          return false;
        }
      }
    };
    BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
      var nodes = this.nodes;
      for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
        var node = nodes[reverse ? maxIndex - ii : ii];
        if (node && node.iterate(fn, reverse) === false) {
          return false;
        }
      }
    };
    ValueNode.prototype.iterate = function(fn, reverse) {
      return fn(this.entry);
    };
    createClass(MapIterator, Iterator);
    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }
    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack2 = this._stack;
      while (stack2) {
        var node = stack2.node;
        var index = stack2.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack2 = this._stack = mapIteratorFrame(subNode, stack2);
            }
            continue;
          }
        }
        stack2 = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };
    function mapIteratorValue(type, entry) {
      return iteratorValue(type, entry[0], entry[1]);
    }
    function mapIteratorFrame(node, prev) {
      return {
        node,
        index: 0,
        __prev: prev
      };
    }
    function makeMap(size, root, ownerID, hash2) {
      var map = Object.create(MapPrototype);
      map.size = size;
      map._root = root;
      map.__ownerID = ownerID;
      map.__hash = hash2;
      map.__altered = false;
      return map;
    }
    var EMPTY_MAP;
    function emptyMap() {
      return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
    }
    function updateMap(map, k, v) {
      var newRoot;
      var newSize;
      if (!map._root) {
        if (v === NOT_SET) {
          return map;
        }
        newSize = 1;
        newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
      } else {
        var didChangeSize = MakeRef(CHANGE_LENGTH);
        var didAlter = MakeRef(DID_ALTER);
        newRoot = updateNode(map._root, map.__ownerID, 0, void 0, k, v, didChangeSize, didAlter);
        if (!didAlter.value) {
          return map;
        }
        newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
      }
      if (map.__ownerID) {
        map.size = newSize;
        map._root = newRoot;
        map.__hash = void 0;
        map.__altered = true;
        return map;
      }
      return newRoot ? makeMap(newSize, newRoot) : emptyMap();
    }
    function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (!node) {
        if (value === NOT_SET) {
          return node;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return new ValueNode(ownerID, keyHash, [key, value]);
      }
      return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
    }
    function isLeafNode(node) {
      return node.constructor === ValueNode || node.constructor === HashCollisionNode;
    }
    function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
      if (node.keyHash === keyHash) {
        return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
      }
      var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
      var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var newNode;
      var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
      return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
    }
    function createNodes(ownerID, entries, key, value) {
      if (!ownerID) {
        ownerID = new OwnerID();
      }
      var node = new ValueNode(ownerID, hash(key), [key, value]);
      for (var ii = 0; ii < entries.length; ii++) {
        var entry = entries[ii];
        node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
      }
      return node;
    }
    function packNodes(ownerID, nodes, count, excluding) {
      var bitmap = 0;
      var packedII = 0;
      var packedNodes = new Array(count);
      for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
        var node = nodes[ii];
        if (node !== void 0 && ii !== excluding) {
          bitmap |= bit;
          packedNodes[packedII++] = node;
        }
      }
      return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
    }
    function expandNodes(ownerID, nodes, bitmap, including, node) {
      var count = 0;
      var expandedNodes = new Array(SIZE);
      for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
        expandedNodes[ii] = bitmap & 1 ? nodes[count++] : void 0;
      }
      expandedNodes[including] = node;
      return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
    }
    function mergeIntoMapWith(map, merger, iterables) {
      var iters = [];
      for (var ii = 0; ii < iterables.length; ii++) {
        var value = iterables[ii];
        var iter = KeyedIterable(value);
        if (!isIterable(value)) {
          iter = iter.map(function(v) {
            return fromJS(v);
          });
        }
        iters.push(iter);
      }
      return mergeIntoCollectionWith(map, merger, iters);
    }
    function deepMerger(existing, value, key) {
      return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
    }
    function deepMergerWith(merger) {
      return function(existing, value, key) {
        if (existing && existing.mergeDeepWith && isIterable(value)) {
          return existing.mergeDeepWith(merger, value);
        }
        var nextValue = merger(existing, value, key);
        return is(existing, nextValue) ? existing : nextValue;
      };
    }
    function mergeIntoCollectionWith(collection, merger, iters) {
      iters = iters.filter(function(x) {
        return x.size !== 0;
      });
      if (iters.length === 0) {
        return collection;
      }
      if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
        return collection.constructor(iters[0]);
      }
      return collection.withMutations(function(collection2) {
        var mergeIntoMap = merger ? function(value, key) {
          collection2.update(key, NOT_SET, function(existing) {
            return existing === NOT_SET ? value : merger(existing, value, key);
          });
        } : function(value, key) {
          collection2.set(key, value);
        };
        for (var ii = 0; ii < iters.length; ii++) {
          iters[ii].forEach(mergeIntoMap);
        }
      });
    }
    function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
      var isNotSet = existing === NOT_SET;
      var step = keyPathIter.next();
      if (step.done) {
        var existingValue = isNotSet ? notSetValue : existing;
        var newValue = updater(existingValue);
        return newValue === existingValue ? existing : newValue;
      }
      invariant2(isNotSet || existing && existing.set, "invalid keyPath");
      var key = step.value;
      var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
      var nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
      return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
    }
    function popCount(x) {
      x = x - (x >> 1 & 1431655765);
      x = (x & 858993459) + (x >> 2 & 858993459);
      x = x + (x >> 4) & 252645135;
      x = x + (x >> 8);
      x = x + (x >> 16);
      return x & 127;
    }
    function setIn(array, idx, val, canEdit) {
      var newArray = canEdit ? array : arrCopy(array);
      newArray[idx] = val;
      return newArray;
    }
    function spliceIn(array, idx, val, canEdit) {
      var newLen = array.length + 1;
      if (canEdit && idx + 1 === newLen) {
        array[idx] = val;
        return array;
      }
      var newArray = new Array(newLen);
      var after = 0;
      for (var ii = 0; ii < newLen; ii++) {
        if (ii === idx) {
          newArray[ii] = val;
          after = -1;
        } else {
          newArray[ii] = array[ii + after];
        }
      }
      return newArray;
    }
    function spliceOut(array, idx, canEdit) {
      var newLen = array.length - 1;
      if (canEdit && idx === newLen) {
        array.pop();
        return array;
      }
      var newArray = new Array(newLen);
      var after = 0;
      for (var ii = 0; ii < newLen; ii++) {
        if (ii === idx) {
          after = 1;
        }
        newArray[ii] = array[ii + after];
      }
      return newArray;
    }
    var MAX_ARRAY_MAP_SIZE = SIZE / 4;
    var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
    var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
    createClass(List2, IndexedCollection);
    function List2(value) {
      var empty = emptyList();
      if (value === null || value === void 0) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list) {
        list.setSize(size);
        iter.forEach(function(v, i) {
          return list.set(i, v);
        });
      });
    }
    List2.of = function() {
      return this(arguments);
    };
    List2.prototype.toString = function() {
      return this.__toString("List [", "]");
    };
    List2.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };
    List2.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };
    List2.prototype.remove = function(index) {
      return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List2.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };
    List2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };
    List2.prototype.push = function() {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };
    List2.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };
    List2.prototype.unshift = function() {
      var values = arguments;
      return this.withMutations(function(list) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };
    List2.prototype.shift = function() {
      return setListBounds(this, 1);
    };
    List2.prototype.merge = function() {
      return mergeIntoListWith(this, void 0, arguments);
    };
    List2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };
    List2.prototype.mergeDeep = function() {
      return mergeIntoListWith(this, deepMerger, arguments);
    };
    List2.prototype.mergeDeepWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };
    List2.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };
    List2.prototype.slice = function(begin, end2) {
      var size = this.size;
      if (wholeSlice(begin, end2, size)) {
        return this;
      }
      return setListBounds(this, resolveBegin(begin, size), resolveEnd(end2, size));
    };
    List2.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function() {
        var value = values();
        return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
      });
    };
    List2.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };
    List2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };
    function isList(maybeList) {
      return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
    }
    List2.isList = isList;
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var ListPrototype = List2.prototype;
    ListPrototype[IS_LIST_SENTINEL] = true;
    ListPrototype[DELETE] = ListPrototype.remove;
    ListPrototype.setIn = MapPrototype.setIn;
    ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
    ListPrototype.update = MapPrototype.update;
    ListPrototype.updateIn = MapPrototype.updateIn;
    ListPrototype.mergeIn = MapPrototype.mergeIn;
    ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
    ListPrototype.withMutations = MapPrototype.withMutations;
    ListPrototype.asMutable = MapPrototype.asMutable;
    ListPrototype.asImmutable = MapPrototype.asImmutable;
    ListPrototype.wasAltered = MapPrototype.wasAltered;
    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }
    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : this.array.length === 0) {
        return this;
      }
      var originIndex = index >>> level & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = void 0;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };
    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = index - 1 >>> level & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }
      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }
      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };
    var DONE = {};
    function iterateList(list, reverse) {
      var left = list._origin;
      var right = list._capacity;
      var tailPos = getTailOffset(right);
      var tail = list._tail;
      return iterateNodeOrLeaf(list._root, list._level, 0);
      function iterateNodeOrLeaf(node, level, offset) {
        return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
      }
      function iterateLeaf(node, offset) {
        var array = offset === tailPos ? tail && tail.array : node && node.array;
        var from = offset > left ? 0 : left - offset;
        var to = right - offset;
        if (to > SIZE) {
          to = SIZE;
        }
        return function() {
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          return array && array[idx];
        };
      }
      function iterateNode(node, level, offset) {
        var values;
        var array = node && node.array;
        var from = offset > left ? 0 : left - offset >> level;
        var to = (right - offset >> level) + 1;
        if (to > SIZE) {
          to = SIZE;
        }
        return function() {
          do {
            if (values) {
              var value = values();
              if (value !== DONE) {
                return value;
              }
              values = null;
            }
            if (from === to) {
              return DONE;
            }
            var idx = reverse ? --to : from++;
            values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
          } while (true);
        };
      }
    }
    function makeList(origin, capacity, level, root, tail, ownerID, hash2) {
      var list = Object.create(ListPrototype);
      list.size = capacity - origin;
      list._origin = origin;
      list._capacity = capacity;
      list._level = level;
      list._root = root;
      list._tail = tail;
      list.__ownerID = ownerID;
      list.__hash = hash2;
      list.__altered = false;
      return list;
    }
    var EMPTY_LIST;
    function emptyList() {
      return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
    }
    function updateList(list, index, value) {
      index = wrapIndex(list, index);
      if (index !== index) {
        return list;
      }
      if (index >= list.size || index < 0) {
        return list.withMutations(function(list2) {
          index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
        });
      }
      index += list._origin;
      var newTail = list._tail;
      var newRoot = list._root;
      var didAlter = MakeRef(DID_ALTER);
      if (index >= getTailOffset(list._capacity)) {
        newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
      } else {
        newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
      }
      if (!didAlter.value) {
        return list;
      }
      if (list.__ownerID) {
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = void 0;
        list.__altered = true;
        return list;
      }
      return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
    }
    function updateVNode(node, ownerID, level, index, value, didAlter) {
      var idx = index >>> level & MASK;
      var nodeHas = node && idx < node.array.length;
      if (!nodeHas && value === void 0) {
        return node;
      }
      var newNode;
      if (level > 0) {
        var lowerNode = node && node.array[idx];
        var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
        if (newLowerNode === lowerNode) {
          return node;
        }
        newNode = editableVNode(node, ownerID);
        newNode.array[idx] = newLowerNode;
        return newNode;
      }
      if (nodeHas && node.array[idx] === value) {
        return node;
      }
      SetRef(didAlter);
      newNode = editableVNode(node, ownerID);
      if (value === void 0 && idx === newNode.array.length - 1) {
        newNode.array.pop();
      } else {
        newNode.array[idx] = value;
      }
      return newNode;
    }
    function editableVNode(node, ownerID) {
      if (ownerID && node && ownerID === node.ownerID) {
        return node;
      }
      return new VNode(node ? node.array.slice() : [], ownerID);
    }
    function listNodeFor(list, rawIndex) {
      if (rawIndex >= getTailOffset(list._capacity)) {
        return list._tail;
      }
      if (rawIndex < 1 << list._level + SHIFT) {
        var node = list._root;
        var level = list._level;
        while (node && level > 0) {
          node = node.array[rawIndex >>> level & MASK];
          level -= SHIFT;
        }
        return node;
      }
    }
    function setListBounds(list, begin, end2) {
      if (begin !== void 0) {
        begin = begin | 0;
      }
      if (end2 !== void 0) {
        end2 = end2 | 0;
      }
      var owner = list.__ownerID || new OwnerID();
      var oldOrigin = list._origin;
      var oldCapacity = list._capacity;
      var newOrigin = oldOrigin + begin;
      var newCapacity = end2 === void 0 ? oldCapacity : end2 < 0 ? oldCapacity + end2 : oldOrigin + end2;
      if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
        return list;
      }
      if (newOrigin >= newCapacity) {
        return list.clear();
      }
      var newLevel = list._level;
      var newRoot = list._root;
      var offsetShift = 0;
      while (newOrigin + offsetShift < 0) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [void 0, newRoot] : [], owner);
        newLevel += SHIFT;
        offsetShift += 1 << newLevel;
      }
      if (offsetShift) {
        newOrigin += offsetShift;
        oldOrigin += offsetShift;
        newCapacity += offsetShift;
        oldCapacity += offsetShift;
      }
      var oldTailOffset = getTailOffset(oldCapacity);
      var newTailOffset = getTailOffset(newCapacity);
      while (newTailOffset >= 1 << newLevel + SHIFT) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
        newLevel += SHIFT;
      }
      var oldTail = list._tail;
      var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
      if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
        newRoot = editableVNode(newRoot, owner);
        var node = newRoot;
        for (var level = newLevel; level > SHIFT; level -= SHIFT) {
          var idx = oldTailOffset >>> level & MASK;
          node = node.array[idx] = editableVNode(node.array[idx], owner);
        }
        node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
      }
      if (newCapacity < oldCapacity) {
        newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
      }
      if (newOrigin >= newTailOffset) {
        newOrigin -= newTailOffset;
        newCapacity -= newTailOffset;
        newLevel = SHIFT;
        newRoot = null;
        newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
      } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
        offsetShift = 0;
        while (newRoot) {
          var beginIndex = newOrigin >>> newLevel & MASK;
          if (beginIndex !== newTailOffset >>> newLevel & MASK) {
            break;
          }
          if (beginIndex) {
            offsetShift += (1 << newLevel) * beginIndex;
          }
          newLevel -= SHIFT;
          newRoot = newRoot.array[beginIndex];
        }
        if (newRoot && newOrigin > oldOrigin) {
          newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
        }
        if (newRoot && newTailOffset < oldTailOffset) {
          newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
        }
        if (offsetShift) {
          newOrigin -= offsetShift;
          newCapacity -= offsetShift;
        }
      }
      if (list.__ownerID) {
        list.size = newCapacity - newOrigin;
        list._origin = newOrigin;
        list._capacity = newCapacity;
        list._level = newLevel;
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = void 0;
        list.__altered = true;
        return list;
      }
      return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
    }
    function mergeIntoListWith(list, merger, iterables) {
      var iters = [];
      var maxSize = 0;
      for (var ii = 0; ii < iterables.length; ii++) {
        var value = iterables[ii];
        var iter = IndexedIterable(value);
        if (iter.size > maxSize) {
          maxSize = iter.size;
        }
        if (!isIterable(value)) {
          iter = iter.map(function(v) {
            return fromJS(v);
          });
        }
        iters.push(iter);
      }
      if (maxSize > list.size) {
        list = list.setSize(maxSize);
      }
      return mergeIntoCollectionWith(list, merger, iters);
    }
    function getTailOffset(size) {
      return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
    }
    createClass(OrderedMap, Map2);
    function OrderedMap(value) {
      return value === null || value === void 0 ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map) {
        var iter = KeyedIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v, k) {
          return map.set(k, v);
        });
      });
    }
    OrderedMap.of = function() {
      return this(arguments);
    };
    OrderedMap.prototype.toString = function() {
      return this.__toString("OrderedMap {", "}");
    };
    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== void 0 ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };
    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };
    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };
    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };
    OrderedMap.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._list.__iterate(function(entry) {
        return entry && fn(entry[1], entry[0], this$0);
      }, reverse);
    };
    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };
    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    function isOrderedMap(maybeOrderedMap) {
      return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
    }
    OrderedMap.isOrderedMap = isOrderedMap;
    OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
    OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
    function makeOrderedMap(map, list, ownerID, hash2) {
      var omap = Object.create(OrderedMap.prototype);
      omap.size = map ? map.size : 0;
      omap._map = map;
      omap._list = list;
      omap.__ownerID = ownerID;
      omap.__hash = hash2;
      return omap;
    }
    var EMPTY_ORDERED_MAP;
    function emptyOrderedMap() {
      return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
    }
    function updateOrderedMap(omap, k, v) {
      var map = omap._map;
      var list = omap._list;
      var i = map.get(k);
      var has = i !== void 0;
      var newMap;
      var newList;
      if (v === NOT_SET) {
        if (!has) {
          return omap;
        }
        if (list.size >= SIZE && list.size >= map.size * 2) {
          newList = list.filter(function(entry, idx) {
            return entry !== void 0 && i !== idx;
          });
          newMap = newList.toKeyedSeq().map(function(entry) {
            return entry[0];
          }).flip().toMap();
          if (omap.__ownerID) {
            newMap.__ownerID = newList.__ownerID = omap.__ownerID;
          }
        } else {
          newMap = map.remove(k);
          newList = i === list.size - 1 ? list.pop() : list.set(i, void 0);
        }
      } else {
        if (has) {
          if (v === list.get(i)[1]) {
            return omap;
          }
          newMap = map;
          newList = list.set(i, [k, v]);
        } else {
          newMap = map.set(k, list.size);
          newList = list.set(list.size, [k, v]);
        }
      }
      if (omap.__ownerID) {
        omap.size = newMap.size;
        omap._map = newMap;
        omap._list = newList;
        omap.__hash = void 0;
        return omap;
      }
      return makeOrderedMap(newMap, newList);
    }
    createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence.prototype.reverse = function() {
      var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function() {
          return this$0._iter.toSeq().reverse();
        };
      }
      return reversedSequence;
    };
    ToKeyedSequence.prototype.map = function(mapper, context) {
      var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function() {
          return this$0._iter.toSeq().map(mapper, context);
        };
      }
      return mappedSequence;
    };
    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      var ii;
      return this._iter.__iterate(this._useKeys ? function(v, k) {
        return fn(v, k, this$0);
      } : (ii = reverse ? resolveSize(this) : 0, function(v) {
        return fn(v, reverse ? --ii : ii++, this$0);
      }), reverse);
    };
    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };
    ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
    createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v) {
        return fn(v, iterations++, this$0);
      }, reverse);
    };
    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value, step);
      });
    };
    createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };
    ToSetSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._iter.__iterate(function(v) {
        return fn(v, v, this$0);
      }, reverse);
    };
    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, step.value, step.value, step);
      });
    };
    createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }
    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };
    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._iter.__iterate(function(entry) {
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
        }
      }, reverse);
    };
    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
          }
        }
      });
    };
    ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
    function flipFactory(iterable) {
      var flipSequence = makeSequence(iterable);
      flipSequence._iter = iterable;
      flipSequence.size = iterable.size;
      flipSequence.flip = function() {
        return iterable;
      };
      flipSequence.reverse = function() {
        var reversedSequence = iterable.reverse.apply(this);
        reversedSequence.flip = function() {
          return iterable.reverse();
        };
        return reversedSequence;
      };
      flipSequence.has = function(key) {
        return iterable.includes(key);
      };
      flipSequence.includes = function(key) {
        return iterable.has(key);
      };
      flipSequence.cacheResult = cacheResultThrough;
      flipSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v, k) {
          return fn(k, v, this$0) !== false;
        }, reverse);
      };
      flipSequence.__iteratorUncached = function(type, reverse) {
        if (type === ITERATE_ENTRIES) {
          var iterator = iterable.__iterator(type, reverse);
          return new Iterator(function() {
            var step = iterator.next();
            if (!step.done) {
              var k = step.value[0];
              step.value[0] = step.value[1];
              step.value[1] = k;
            }
            return step;
          });
        }
        return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
      };
      return flipSequence;
    }
    function mapFactory(iterable, mapper, context) {
      var mappedSequence = makeSequence(iterable);
      mappedSequence.size = iterable.size;
      mappedSequence.has = function(key) {
        return iterable.has(key);
      };
      mappedSequence.get = function(key, notSetValue) {
        var v = iterable.get(key, NOT_SET);
        return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
      };
      mappedSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v, k, c) {
          return fn(mapper.call(context, v, k, c), k, this$0) !== false;
        }, reverse);
      };
      mappedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        return new Iterator(function() {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
        });
      };
      return mappedSequence;
    }
    function reverseFactory(iterable, useKeys) {
      var reversedSequence = makeSequence(iterable);
      reversedSequence._iter = iterable;
      reversedSequence.size = iterable.size;
      reversedSequence.reverse = function() {
        return iterable;
      };
      if (iterable.flip) {
        reversedSequence.flip = function() {
          var flipSequence = flipFactory(iterable);
          flipSequence.reverse = function() {
            return iterable.flip();
          };
          return flipSequence;
        };
      }
      reversedSequence.get = function(key, notSetValue) {
        return iterable.get(useKeys ? key : -1 - key, notSetValue);
      };
      reversedSequence.has = function(key) {
        return iterable.has(useKeys ? key : -1 - key);
      };
      reversedSequence.includes = function(value) {
        return iterable.includes(value);
      };
      reversedSequence.cacheResult = cacheResultThrough;
      reversedSequence.__iterate = function(fn, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v, k) {
          return fn(v, k, this$0);
        }, !reverse);
      };
      reversedSequence.__iterator = function(type, reverse) {
        return iterable.__iterator(type, !reverse);
      };
      return reversedSequence;
    }
    function filterFactory(iterable, predicate, context, useKeys) {
      var filterSequence = makeSequence(iterable);
      if (useKeys) {
        filterSequence.has = function(key) {
          var v = iterable.get(key, NOT_SET);
          return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
        };
        filterSequence.get = function(key, notSetValue) {
          var v = iterable.get(key, NOT_SET);
          return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
        };
      }
      filterSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        iterable.__iterate(function(v, k, c) {
          if (predicate.call(context, v, k, c)) {
            iterations++;
            return fn(v, useKeys ? k : iterations - 1, this$0);
          }
        }, reverse);
        return iterations;
      };
      filterSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var iterations = 0;
        return new Iterator(function() {
          while (true) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var key = entry[0];
            var value = entry[1];
            if (predicate.call(context, value, key, iterable)) {
              return iteratorValue(type, useKeys ? key : iterations++, value, step);
            }
          }
        });
      };
      return filterSequence;
    }
    function countByFactory(iterable, grouper, context) {
      var groups = Map2().asMutable();
      iterable.__iterate(function(v, k) {
        groups.update(grouper.call(context, v, k, iterable), 0, function(a) {
          return a + 1;
        });
      });
      return groups.asImmutable();
    }
    function groupByFactory(iterable, grouper, context) {
      var isKeyedIter = isKeyed(iterable);
      var groups = (isOrdered(iterable) ? OrderedMap() : Map2()).asMutable();
      iterable.__iterate(function(v, k) {
        groups.update(grouper.call(context, v, k, iterable), function(a) {
          return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
        });
      });
      var coerce = iterableClass(iterable);
      return groups.map(function(arr) {
        return reify(iterable, coerce(arr));
      });
    }
    function sliceFactory(iterable, begin, end2, useKeys) {
      var originalSize = iterable.size;
      if (begin !== void 0) {
        begin = begin | 0;
      }
      if (end2 !== void 0) {
        end2 = end2 | 0;
      }
      if (wholeSlice(begin, end2, originalSize)) {
        return iterable;
      }
      var resolvedBegin = resolveBegin(begin, originalSize);
      var resolvedEnd = resolveEnd(end2, originalSize);
      if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
        return sliceFactory(iterable.toSeq().cacheResult(), begin, end2, useKeys);
      }
      var resolvedSize = resolvedEnd - resolvedBegin;
      var sliceSize;
      if (resolvedSize === resolvedSize) {
        sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
      }
      var sliceSeq = makeSequence(iterable);
      sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || void 0;
      if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
        sliceSeq.get = function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
        };
      }
      sliceSeq.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        if (sliceSize === 0) {
          return 0;
        }
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var skipped = 0;
        var isSkipping = true;
        var iterations = 0;
        iterable.__iterate(function(v, k) {
          if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
            iterations++;
            return fn(v, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
          }
        });
        return iterations;
      };
      sliceSeq.__iteratorUncached = function(type, reverse) {
        if (sliceSize !== 0 && reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
        var skipped = 0;
        var iterations = 0;
        return new Iterator(function() {
          while (skipped++ < resolvedBegin) {
            iterator.next();
          }
          if (++iterations > sliceSize) {
            return iteratorDone();
          }
          var step = iterator.next();
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          } else if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations - 1, void 0, step);
          } else {
            return iteratorValue(type, iterations - 1, step.value[1], step);
          }
        });
      };
      return sliceSeq;
    }
    function takeWhileFactory(iterable, predicate, context) {
      var takeSequence = makeSequence(iterable);
      takeSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var iterations = 0;
        iterable.__iterate(function(v, k, c) {
          return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
        });
        return iterations;
      };
      takeSequence.__iteratorUncached = function(type, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var iterating = true;
        return new Iterator(function() {
          if (!iterating) {
            return iteratorDone();
          }
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var k = entry[0];
          var v = entry[1];
          if (!predicate.call(context, v, k, this$0)) {
            iterating = false;
            return iteratorDone();
          }
          return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
      };
      return takeSequence;
    }
    function skipWhileFactory(iterable, predicate, context, useKeys) {
      var skipSequence = makeSequence(iterable);
      skipSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var isSkipping = true;
        var iterations = 0;
        iterable.__iterate(function(v, k, c) {
          if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
            iterations++;
            return fn(v, useKeys ? k : iterations - 1, this$0);
          }
        });
        return iterations;
      };
      skipSequence.__iteratorUncached = function(type, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var skipping = true;
        var iterations = 0;
        return new Iterator(function() {
          var step, k, v;
          do {
            step = iterator.next();
            if (step.done) {
              if (useKeys || type === ITERATE_VALUES) {
                return step;
              } else if (type === ITERATE_KEYS) {
                return iteratorValue(type, iterations++, void 0, step);
              } else {
                return iteratorValue(type, iterations++, step.value[1], step);
              }
            }
            var entry = step.value;
            k = entry[0];
            v = entry[1];
            skipping && (skipping = predicate.call(context, v, k, this$0));
          } while (skipping);
          return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
      };
      return skipSequence;
    }
    function concatFactory(iterable, values) {
      var isKeyedIterable = isKeyed(iterable);
      var iters = [iterable].concat(values).map(function(v) {
        if (!isIterable(v)) {
          v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
        } else if (isKeyedIterable) {
          v = KeyedIterable(v);
        }
        return v;
      }).filter(function(v) {
        return v.size !== 0;
      });
      if (iters.length === 0) {
        return iterable;
      }
      if (iters.length === 1) {
        var singleton = iters[0];
        if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
          return singleton;
        }
      }
      var concatSeq = new ArraySeq(iters);
      if (isKeyedIterable) {
        concatSeq = concatSeq.toKeyedSeq();
      } else if (!isIndexed(iterable)) {
        concatSeq = concatSeq.toSetSeq();
      }
      concatSeq = concatSeq.flatten(true);
      concatSeq.size = iters.reduce(function(sum, seq) {
        if (sum !== void 0) {
          var size = seq.size;
          if (size !== void 0) {
            return sum + size;
          }
        }
      }, 0);
      return concatSeq;
    }
    function flattenFactory(iterable, depth, useKeys) {
      var flatSequence = makeSequence(iterable);
      flatSequence.__iterateUncached = function(fn, reverse) {
        var iterations = 0;
        var stopped = false;
        function flatDeep(iter, currentDepth) {
          var this$0 = this;
          iter.__iterate(function(v, k) {
            if ((!depth || currentDepth < depth) && isIterable(v)) {
              flatDeep(v, currentDepth + 1);
            } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
              stopped = true;
            }
            return !stopped;
          }, reverse);
        }
        flatDeep(iterable, 0);
        return iterations;
      };
      flatSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(type, reverse);
        var stack2 = [];
        var iterations = 0;
        return new Iterator(function() {
          while (iterator) {
            var step = iterator.next();
            if (step.done !== false) {
              iterator = stack2.pop();
              continue;
            }
            var v = step.value;
            if (type === ITERATE_ENTRIES) {
              v = v[1];
            }
            if ((!depth || stack2.length < depth) && isIterable(v)) {
              stack2.push(iterator);
              iterator = v.__iterator(type, reverse);
            } else {
              return useKeys ? step : iteratorValue(type, iterations++, v, step);
            }
          }
          return iteratorDone();
        });
      };
      return flatSequence;
    }
    function flatMapFactory(iterable, mapper, context) {
      var coerce = iterableClass(iterable);
      return iterable.toSeq().map(function(v, k) {
        return coerce(mapper.call(context, v, k, iterable));
      }).flatten(true);
    }
    function interposeFactory(iterable, separator) {
      var interposedSequence = makeSequence(iterable);
      interposedSequence.size = iterable.size && iterable.size * 2 - 1;
      interposedSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        iterable.__iterate(function(v, k) {
          return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v, iterations++, this$0) !== false;
        }, reverse);
        return iterations;
      };
      interposedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        var step;
        return new Iterator(function() {
          if (!step || iterations % 2) {
            step = iterator.next();
            if (step.done) {
              return step;
            }
          }
          return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
        });
      };
      return interposedSequence;
    }
    function sortFactory(iterable, comparator, mapper) {
      if (!comparator) {
        comparator = defaultComparator;
      }
      var isKeyedIterable = isKeyed(iterable);
      var index = 0;
      var entries = iterable.toSeq().map(function(v, k) {
        return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
      }).toArray();
      entries.sort(function(a, b) {
        return comparator(a[3], b[3]) || a[2] - b[2];
      }).forEach(isKeyedIterable ? function(v, i) {
        entries[i].length = 2;
      } : function(v, i) {
        entries[i] = v[1];
      });
      return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
    }
    function maxFactory(iterable, comparator, mapper) {
      if (!comparator) {
        comparator = defaultComparator;
      }
      if (mapper) {
        var entry = iterable.toSeq().map(function(v, k) {
          return [v, mapper(v, k, iterable)];
        }).reduce(function(a, b) {
          return maxCompare(comparator, a[1], b[1]) ? b : a;
        });
        return entry && entry[0];
      } else {
        return iterable.reduce(function(a, b) {
          return maxCompare(comparator, a, b) ? b : a;
        });
      }
    }
    function maxCompare(comparator, a, b) {
      var comp = comparator(b, a);
      return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
    }
    function zipWithFactory(keyIter, zipper, iters) {
      var zipSequence = makeSequence(keyIter);
      zipSequence.size = new ArraySeq(iters).map(function(i) {
        return i.size;
      }).min();
      zipSequence.__iterate = function(fn, reverse) {
        var iterator = this.__iterator(ITERATE_VALUES, reverse);
        var step;
        var iterations = 0;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
        return iterations;
      };
      zipSequence.__iteratorUncached = function(type, reverse) {
        var iterators = iters.map(function(i) {
          return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
        });
        var iterations = 0;
        var isDone = false;
        return new Iterator(function() {
          var steps;
          if (!isDone) {
            steps = iterators.map(function(i) {
              return i.next();
            });
            isDone = steps.some(function(s) {
              return s.done;
            });
          }
          if (isDone) {
            return iteratorDone();
          }
          return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function(s) {
            return s.value;
          })));
        });
      };
      return zipSequence;
    }
    function reify(iter, seq) {
      return isSeq(iter) ? seq : iter.constructor(seq);
    }
    function validateEntry(entry) {
      if (entry !== Object(entry)) {
        throw new TypeError("Expected [K, V] tuple: " + entry);
      }
    }
    function resolveSize(iter) {
      assertNotInfinite(iter.size);
      return ensureSize(iter);
    }
    function iterableClass(iterable) {
      return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
    }
    function makeSequence(iterable) {
      return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
    }
    function cacheResultThrough() {
      if (this._iter.cacheResult) {
        this._iter.cacheResult();
        this.size = this._iter.size;
        return this;
      } else {
        return Seq.prototype.cacheResult.call(this);
      }
    }
    function defaultComparator(a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    }
    function forceIterator(keyPath) {
      var iter = getIterator(keyPath);
      if (!iter) {
        if (!isArrayLike(keyPath)) {
          throw new TypeError("Expected iterable or array-like: " + keyPath);
        }
        iter = getIterator(Iterable(keyPath));
      }
      return iter;
    }
    createClass(Record, KeyedCollection);
    function Record(defaultValues, name) {
      var hasInitialized;
      var RecordType = function Record2(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map2(values);
      };
      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;
      return RecordType;
    }
    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + " {", "}");
    };
    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };
    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };
    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };
    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Record.prototype.__iterator = function(type, reverse) {
      var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k) {
        return this$0.get(k);
      }).__iterator(type, reverse);
    };
    Record.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k) {
        return this$0.get(k);
      }).__iterate(fn, reverse);
    };
    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };
    var RecordPrototype = Record.prototype;
    RecordPrototype[DELETE] = RecordPrototype.remove;
    RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
    RecordPrototype.merge = MapPrototype.merge;
    RecordPrototype.mergeWith = MapPrototype.mergeWith;
    RecordPrototype.mergeIn = MapPrototype.mergeIn;
    RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
    RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
    RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
    RecordPrototype.setIn = MapPrototype.setIn;
    RecordPrototype.update = MapPrototype.update;
    RecordPrototype.updateIn = MapPrototype.updateIn;
    RecordPrototype.withMutations = MapPrototype.withMutations;
    RecordPrototype.asMutable = MapPrototype.asMutable;
    RecordPrototype.asImmutable = MapPrototype.asImmutable;
    function makeRecord(likeRecord, map, ownerID) {
      var record = Object.create(Object.getPrototypeOf(likeRecord));
      record._map = map;
      record.__ownerID = ownerID;
      return record;
    }
    function recordName(record) {
      return record._name || record.constructor.name || "Record";
    }
    function setProps(prototype, names) {
      try {
        names.forEach(setProp.bind(void 0, prototype));
      } catch (error) {
      }
    }
    function setProp(prototype, name) {
      Object.defineProperty(prototype, name, {
        get: function() {
          return this.get(name);
        },
        set: function(value) {
          invariant2(this.__ownerID, "Cannot set on an immutable record.");
          this.set(name, value);
        }
      });
    }
    createClass(Set2, SetCollection);
    function Set2(value) {
      return value === null || value === void 0 ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set) {
        var iter = SetIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v) {
          return set.add(v);
        });
      });
    }
    Set2.of = function() {
      return this(arguments);
    };
    Set2.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    Set2.prototype.toString = function() {
      return this.__toString("Set {", "}");
    };
    Set2.prototype.has = function(value) {
      return this._map.has(value);
    };
    Set2.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };
    Set2.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };
    Set2.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };
    Set2.prototype.union = function() {
      var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x) {
        return x.size !== 0;
      });
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value) {
            return set.add(value);
          });
        }
      });
    };
    Set2.prototype.intersect = function() {
      var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetIterable(iter);
      });
      var originalSet = this;
      return this.withMutations(function(set) {
        originalSet.forEach(function(value) {
          if (!iters.every(function(iter) {
            return iter.includes(value);
          })) {
            set.remove(value);
          }
        });
      });
    };
    Set2.prototype.subtract = function() {
      var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetIterable(iter);
      });
      var originalSet = this;
      return this.withMutations(function(set) {
        originalSet.forEach(function(value) {
          if (iters.some(function(iter) {
            return iter.includes(value);
          })) {
            set.remove(value);
          }
        });
      });
    };
    Set2.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };
    Set2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };
    Set2.prototype.sort = function(comparator) {
      return OrderedSet(sortFactory(this, comparator));
    };
    Set2.prototype.sortBy = function(mapper, comparator) {
      return OrderedSet(sortFactory(this, comparator, mapper));
    };
    Set2.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Set2.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._map.__iterate(function(_, k) {
        return fn(k, k, this$0);
      }, reverse);
    };
    Set2.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k) {
        return k;
      }).__iterator(type, reverse);
    };
    Set2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    function isSet(maybeSet) {
      return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
    }
    Set2.isSet = isSet;
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var SetPrototype = Set2.prototype;
    SetPrototype[IS_SET_SENTINEL] = true;
    SetPrototype[DELETE] = SetPrototype.remove;
    SetPrototype.mergeDeep = SetPrototype.merge;
    SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
    SetPrototype.withMutations = MapPrototype.withMutations;
    SetPrototype.asMutable = MapPrototype.asMutable;
    SetPrototype.asImmutable = MapPrototype.asImmutable;
    SetPrototype.__empty = emptySet;
    SetPrototype.__make = makeSet;
    function updateSet(set, newMap) {
      if (set.__ownerID) {
        set.size = newMap.size;
        set._map = newMap;
        return set;
      }
      return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
    }
    function makeSet(map, ownerID) {
      var set = Object.create(SetPrototype);
      set.size = map ? map.size : 0;
      set._map = map;
      set.__ownerID = ownerID;
      return set;
    }
    var EMPTY_SET;
    function emptySet() {
      return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
    }
    createClass(OrderedSet, Set2);
    function OrderedSet(value) {
      return value === null || value === void 0 ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set) {
        var iter = SetIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v) {
          return set.add(v);
        });
      });
    }
    OrderedSet.of = function() {
      return this(arguments);
    };
    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    OrderedSet.prototype.toString = function() {
      return this.__toString("OrderedSet {", "}");
    };
    function isOrderedSet(maybeOrderedSet) {
      return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
    }
    OrderedSet.isOrderedSet = isOrderedSet;
    var OrderedSetPrototype = OrderedSet.prototype;
    OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
    OrderedSetPrototype.__empty = emptyOrderedSet;
    OrderedSetPrototype.__make = makeOrderedSet;
    function makeOrderedSet(map, ownerID) {
      var set = Object.create(OrderedSetPrototype);
      set.size = map ? map.size : 0;
      set._map = map;
      set.__ownerID = ownerID;
      return set;
    }
    var EMPTY_ORDERED_SET;
    function emptyOrderedSet() {
      return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
    }
    createClass(Stack, IndexedCollection);
    function Stack(value) {
      return value === null || value === void 0 ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
    }
    Stack.of = function() {
      return this(arguments);
    };
    Stack.prototype.toString = function() {
      return this.__toString("Stack [", "]");
    };
    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };
    Stack.prototype.push = function() {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value) {
        newSize++;
        head = {
          value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack.prototype.pop = function() {
      return this.slice(1);
    };
    Stack.prototype.unshift = function() {
      return this.push.apply(this, arguments);
    };
    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };
    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };
    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = void 0;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };
    Stack.prototype.slice = function(begin, end2) {
      if (wholeSlice(begin, end2, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end2, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection.prototype.slice.call(this, begin, end2);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };
    function isStack(maybeStack) {
      return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
    }
    Stack.isStack = isStack;
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var StackPrototype = Stack.prototype;
    StackPrototype[IS_STACK_SENTINEL] = true;
    StackPrototype.withMutations = MapPrototype.withMutations;
    StackPrototype.asMutable = MapPrototype.asMutable;
    StackPrototype.asImmutable = MapPrototype.asImmutable;
    StackPrototype.wasAltered = MapPrototype.wasAltered;
    function makeStack(size, head, ownerID, hash2) {
      var map = Object.create(StackPrototype);
      map.size = size;
      map._head = head;
      map.__ownerID = ownerID;
      map.__hash = hash2;
      map.__altered = false;
      return map;
    }
    var EMPTY_STACK;
    function emptyStack() {
      return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
    }
    function mixin(ctor, methods) {
      var keyCopier = function(key) {
        ctor.prototype[key] = methods[key];
      };
      Object.keys(methods).forEach(keyCopier);
      Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
      return ctor;
    }
    Iterable.Iterator = Iterator;
    mixin(Iterable, {
      toArray: function() {
        assertNotInfinite(this.size);
        var array = new Array(this.size || 0);
        this.valueSeq().__iterate(function(v, i) {
          array[i] = v;
        });
        return array;
      },
      toIndexedSeq: function() {
        return new ToIndexedSequence(this);
      },
      toJS: function() {
        return this.toSeq().map(function(value) {
          return value && typeof value.toJS === "function" ? value.toJS() : value;
        }).__toJS();
      },
      toJSON: function() {
        return this.toSeq().map(function(value) {
          return value && typeof value.toJSON === "function" ? value.toJSON() : value;
        }).__toJS();
      },
      toKeyedSeq: function() {
        return new ToKeyedSequence(this, true);
      },
      toMap: function() {
        return Map2(this.toKeyedSeq());
      },
      toObject: function() {
        assertNotInfinite(this.size);
        var object = {};
        this.__iterate(function(v, k) {
          object[k] = v;
        });
        return object;
      },
      toOrderedMap: function() {
        return OrderedMap(this.toKeyedSeq());
      },
      toOrderedSet: function() {
        return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
      },
      toSet: function() {
        return Set2(isKeyed(this) ? this.valueSeq() : this);
      },
      toSetSeq: function() {
        return new ToSetSequence(this);
      },
      toSeq: function() {
        return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
      },
      toStack: function() {
        return Stack(isKeyed(this) ? this.valueSeq() : this);
      },
      toList: function() {
        return List2(isKeyed(this) ? this.valueSeq() : this);
      },
      toString: function() {
        return "[Iterable]";
      },
      __toString: function(head, tail) {
        if (this.size === 0) {
          return head + tail;
        }
        return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
      },
      concat: function() {
        var values = SLICE$0.call(arguments, 0);
        return reify(this, concatFactory(this, values));
      },
      includes: function(searchValue) {
        return this.some(function(value) {
          return is(value, searchValue);
        });
      },
      entries: function() {
        return this.__iterator(ITERATE_ENTRIES);
      },
      every: function(predicate, context) {
        assertNotInfinite(this.size);
        var returnValue = true;
        this.__iterate(function(v, k, c) {
          if (!predicate.call(context, v, k, c)) {
            returnValue = false;
            return false;
          }
        });
        return returnValue;
      },
      filter: function(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, true));
      },
      find: function(predicate, context, notSetValue) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[1] : notSetValue;
      },
      findEntry: function(predicate, context) {
        var found;
        this.__iterate(function(v, k, c) {
          if (predicate.call(context, v, k, c)) {
            found = [k, v];
            return false;
          }
        });
        return found;
      },
      findLastEntry: function(predicate, context) {
        return this.toSeq().reverse().findEntry(predicate, context);
      },
      forEach: function(sideEffect, context) {
        assertNotInfinite(this.size);
        return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
      },
      join: function(separator) {
        assertNotInfinite(this.size);
        separator = separator !== void 0 ? "" + separator : ",";
        var joined = "";
        var isFirst = true;
        this.__iterate(function(v) {
          isFirst ? isFirst = false : joined += separator;
          joined += v !== null && v !== void 0 ? v.toString() : "";
        });
        return joined;
      },
      keys: function() {
        return this.__iterator(ITERATE_KEYS);
      },
      map: function(mapper, context) {
        return reify(this, mapFactory(this, mapper, context));
      },
      reduce: function(reducer, initialReduction, context) {
        assertNotInfinite(this.size);
        var reduction;
        var useFirst;
        if (arguments.length < 2) {
          useFirst = true;
        } else {
          reduction = initialReduction;
        }
        this.__iterate(function(v, k, c) {
          if (useFirst) {
            useFirst = false;
            reduction = v;
          } else {
            reduction = reducer.call(context, reduction, v, k, c);
          }
        });
        return reduction;
      },
      reduceRight: function(reducer, initialReduction, context) {
        var reversed = this.toKeyedSeq().reverse();
        return reversed.reduce.apply(reversed, arguments);
      },
      reverse: function() {
        return reify(this, reverseFactory(this, true));
      },
      slice: function(begin, end2) {
        return reify(this, sliceFactory(this, begin, end2, true));
      },
      some: function(predicate, context) {
        return !this.every(not(predicate), context);
      },
      sort: function(comparator) {
        return reify(this, sortFactory(this, comparator));
      },
      values: function() {
        return this.__iterator(ITERATE_VALUES);
      },
      butLast: function() {
        return this.slice(0, -1);
      },
      isEmpty: function() {
        return this.size !== void 0 ? this.size === 0 : !this.some(function() {
          return true;
        });
      },
      count: function(predicate, context) {
        return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
      },
      countBy: function(grouper, context) {
        return countByFactory(this, grouper, context);
      },
      equals: function(other) {
        return deepEqual(this, other);
      },
      entrySeq: function() {
        var iterable = this;
        if (iterable._cache) {
          return new ArraySeq(iterable._cache);
        }
        var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
        entriesSequence.fromEntrySeq = function() {
          return iterable.toSeq();
        };
        return entriesSequence;
      },
      filterNot: function(predicate, context) {
        return this.filter(not(predicate), context);
      },
      findLast: function(predicate, context, notSetValue) {
        return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
      },
      first: function() {
        return this.find(returnTrue);
      },
      flatMap: function(mapper, context) {
        return reify(this, flatMapFactory(this, mapper, context));
      },
      flatten: function(depth) {
        return reify(this, flattenFactory(this, depth, true));
      },
      fromEntrySeq: function() {
        return new FromEntriesSequence(this);
      },
      get: function(searchKey, notSetValue) {
        return this.find(function(_, key) {
          return is(key, searchKey);
        }, void 0, notSetValue);
      },
      getIn: function(searchKeyPath, notSetValue) {
        var nested = this;
        var iter = forceIterator(searchKeyPath);
        var step;
        while (!(step = iter.next()).done) {
          var key = step.value;
          nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
          if (nested === NOT_SET) {
            return notSetValue;
          }
        }
        return nested;
      },
      groupBy: function(grouper, context) {
        return groupByFactory(this, grouper, context);
      },
      has: function(searchKey) {
        return this.get(searchKey, NOT_SET) !== NOT_SET;
      },
      hasIn: function(searchKeyPath) {
        return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
      },
      isSubset: function(iter) {
        iter = typeof iter.includes === "function" ? iter : Iterable(iter);
        return this.every(function(value) {
          return iter.includes(value);
        });
      },
      isSuperset: function(iter) {
        iter = typeof iter.isSubset === "function" ? iter : Iterable(iter);
        return iter.isSubset(this);
      },
      keySeq: function() {
        return this.toSeq().map(keyMapper).toIndexedSeq();
      },
      last: function() {
        return this.toSeq().reverse().first();
      },
      max: function(comparator) {
        return maxFactory(this, comparator);
      },
      maxBy: function(mapper, comparator) {
        return maxFactory(this, comparator, mapper);
      },
      min: function(comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
      },
      minBy: function(mapper, comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
      },
      rest: function() {
        return this.slice(1);
      },
      skip: function(amount) {
        return this.slice(Math.max(0, amount));
      },
      skipLast: function(amount) {
        return reify(this, this.toSeq().reverse().skip(amount).reverse());
      },
      skipWhile: function(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, true));
      },
      skipUntil: function(predicate, context) {
        return this.skipWhile(not(predicate), context);
      },
      sortBy: function(mapper, comparator) {
        return reify(this, sortFactory(this, comparator, mapper));
      },
      take: function(amount) {
        return this.slice(0, Math.max(0, amount));
      },
      takeLast: function(amount) {
        return reify(this, this.toSeq().reverse().take(amount).reverse());
      },
      takeWhile: function(predicate, context) {
        return reify(this, takeWhileFactory(this, predicate, context));
      },
      takeUntil: function(predicate, context) {
        return this.takeWhile(not(predicate), context);
      },
      valueSeq: function() {
        return this.toIndexedSeq();
      },
      hashCode: function() {
        return this.__hash || (this.__hash = hashIterable(this));
      }
    });
    var IterablePrototype = Iterable.prototype;
    IterablePrototype[IS_ITERABLE_SENTINEL] = true;
    IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
    IterablePrototype.__toJS = IterablePrototype.toArray;
    IterablePrototype.__toStringMapper = quoteString;
    IterablePrototype.inspect = IterablePrototype.toSource = function() {
      return this.toString();
    };
    IterablePrototype.chain = IterablePrototype.flatMap;
    IterablePrototype.contains = IterablePrototype.includes;
    (function() {
      try {
        Object.defineProperty(IterablePrototype, "length", {
          get: function() {
            if (!Iterable.noLengthWarning) {
              var stack2;
              try {
                throw new Error();
              } catch (error) {
                stack2 = error.stack;
              }
              if (stack2.indexOf("_wrapObject") === -1) {
                console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + stack2);
                return this.size;
              }
            }
          }
        });
      } catch (e) {
      }
    })();
    mixin(KeyedIterable, {
      flip: function() {
        return reify(this, flipFactory(this));
      },
      findKey: function(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry && entry[0];
      },
      findLastKey: function(predicate, context) {
        return this.toSeq().reverse().findKey(predicate, context);
      },
      keyOf: function(searchValue) {
        return this.findKey(function(value) {
          return is(value, searchValue);
        });
      },
      lastKeyOf: function(searchValue) {
        return this.findLastKey(function(value) {
          return is(value, searchValue);
        });
      },
      mapEntries: function(mapper, context) {
        var this$0 = this;
        var iterations = 0;
        return reify(this, this.toSeq().map(function(v, k) {
          return mapper.call(context, [k, v], iterations++, this$0);
        }).fromEntrySeq());
      },
      mapKeys: function(mapper, context) {
        var this$0 = this;
        return reify(this, this.toSeq().flip().map(function(k, v) {
          return mapper.call(context, k, v, this$0);
        }).flip());
      }
    });
    var KeyedIterablePrototype = KeyedIterable.prototype;
    KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
    KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
    KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
    KeyedIterablePrototype.__toStringMapper = function(v, k) {
      return JSON.stringify(k) + ": " + quoteString(v);
    };
    mixin(IndexedIterable, {
      toKeyedSeq: function() {
        return new ToKeyedSequence(this, false);
      },
      filter: function(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, false));
      },
      findIndex: function(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[0] : -1;
      },
      indexOf: function(searchValue) {
        var key = this.toKeyedSeq().keyOf(searchValue);
        return key === void 0 ? -1 : key;
      },
      lastIndexOf: function(searchValue) {
        var key = this.toKeyedSeq().reverse().keyOf(searchValue);
        return key === void 0 ? -1 : key;
      },
      reverse: function() {
        return reify(this, reverseFactory(this, false));
      },
      slice: function(begin, end2) {
        return reify(this, sliceFactory(this, begin, end2, false));
      },
      splice: function(index, removeNum) {
        var numArgs = arguments.length;
        removeNum = Math.max(removeNum | 0, 0);
        if (numArgs === 0 || numArgs === 2 && !removeNum) {
          return this;
        }
        index = resolveBegin(index, index < 0 ? this.count() : this.size);
        var spliced = this.slice(0, index);
        return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
      },
      findLastIndex: function(predicate, context) {
        var key = this.toKeyedSeq().findLastKey(predicate, context);
        return key === void 0 ? -1 : key;
      },
      first: function() {
        return this.get(0);
      },
      flatten: function(depth) {
        return reify(this, flattenFactory(this, depth, false));
      },
      get: function(index, notSetValue) {
        index = wrapIndex(this, index);
        return index < 0 || (this.size === Infinity || this.size !== void 0 && index > this.size) ? notSetValue : this.find(function(_, key) {
          return key === index;
        }, void 0, notSetValue);
      },
      has: function(index) {
        index = wrapIndex(this, index);
        return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
      },
      interpose: function(separator) {
        return reify(this, interposeFactory(this, separator));
      },
      interleave: function() {
        var iterables = [this].concat(arrCopy(arguments));
        var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
        var interleaved = zipped.flatten(true);
        if (zipped.size) {
          interleaved.size = zipped.size * iterables.length;
        }
        return reify(this, interleaved);
      },
      last: function() {
        return this.get(-1);
      },
      skipWhile: function(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, false));
      },
      zip: function() {
        var iterables = [this].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, iterables));
      },
      zipWith: function(zipper) {
        var iterables = arrCopy(arguments);
        iterables[0] = this;
        return reify(this, zipWithFactory(this, zipper, iterables));
      }
    });
    IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
    IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
    mixin(SetIterable, {
      get: function(value, notSetValue) {
        return this.has(value) ? value : notSetValue;
      },
      includes: function(value) {
        return this.has(value);
      },
      keySeq: function() {
        return this.valueSeq();
      }
    });
    SetIterable.prototype.has = IterablePrototype.includes;
    mixin(KeyedSeq, KeyedIterable.prototype);
    mixin(IndexedSeq, IndexedIterable.prototype);
    mixin(SetSeq, SetIterable.prototype);
    mixin(KeyedCollection, KeyedIterable.prototype);
    mixin(IndexedCollection, IndexedIterable.prototype);
    mixin(SetCollection, SetIterable.prototype);
    function keyMapper(v, k) {
      return k;
    }
    function entryMapper(v, k) {
      return [k, v];
    }
    function not(predicate) {
      return function() {
        return !predicate.apply(this, arguments);
      };
    }
    function neg(predicate) {
      return function() {
        return -predicate.apply(this, arguments);
      };
    }
    function quoteString(value) {
      return typeof value === "string" ? JSON.stringify(value) : value;
    }
    function defaultZipper() {
      return arrCopy(arguments);
    }
    function defaultNegComparator(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }
    function hashIterable(iterable) {
      if (iterable.size === Infinity) {
        return 0;
      }
      var ordered = isOrdered(iterable);
      var keyed = isKeyed(iterable);
      var h = ordered ? 1 : 0;
      var size = iterable.__iterate(keyed ? ordered ? function(v, k) {
        h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
      } : function(v, k) {
        h = h + hashMerge(hash(v), hash(k)) | 0;
      } : ordered ? function(v) {
        h = 31 * h + hash(v) | 0;
      } : function(v) {
        h = h + hash(v) | 0;
      });
      return murmurHashOfSize(size, h);
    }
    function murmurHashOfSize(size, h) {
      h = imul(h, 3432918353);
      h = imul(h << 15 | h >>> -15, 461845907);
      h = imul(h << 13 | h >>> -13, 5);
      h = (h + 3864292196 | 0) ^ size;
      h = imul(h ^ h >>> 16, 2246822507);
      h = imul(h ^ h >>> 13, 3266489909);
      h = smi(h ^ h >>> 16);
      return h;
    }
    function hashMerge(a, b) {
      return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
    }
    var Immutable = {
      Iterable,
      Seq,
      Collection,
      Map: Map2,
      OrderedMap,
      List: List2,
      Stack,
      Set: Set2,
      OrderedSet,
      Record,
      Range,
      Repeat,
      is,
      fromJS
    };
    return Immutable;
  });
})(immutable);
function partitionArray$2(array, predicate) {
  var first = [];
  var second = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (predicate(item)) {
      first.push(item);
    } else {
      second.push(item);
    }
  }
  return [first, second];
}
var partitionArray_1 = partitionArray$2;
var DefaultHandleKey = {
  DEFAULT_HANDLE_KEY: ""
};
var invariant$6 = browser;
var _require$a = DefaultHandleKey, DEFAULT_HANDLE_KEY$1 = _require$a.DEFAULT_HANDLE_KEY;
var INDENT = "  ";
function print$2(schema, node) {
  switch (node.kind) {
    case "Fragment":
      return "fragment ".concat(node.name, " on ").concat(schema.getTypeString(node.type)) + printFragmentArgumentDefinitions(schema, node.argumentDefinitions) + printDirectives$1(schema, node.directives) + printSelections(schema, node, "", {}) + "\n";
    case "Root":
      return "".concat(node.operation, " ").concat(node.name) + printArgumentDefinitions(schema, node.argumentDefinitions) + printDirectives$1(schema, node.directives) + printSelections(schema, node, "", {}) + "\n";
    case "SplitOperation":
      return "SplitOperation ".concat(node.name, " on ").concat(schema.getTypeString(node.type)) + printSelections(schema, node, "", {}) + "\n";
    default:
      invariant$6(false);
  }
}
function printSelections(schema, node, indent2, options) {
  var selections = node.selections;
  if (selections == null) {
    return "";
  }
  var printed = selections.map(function(selection) {
    return printSelection(schema, selection, indent2, options);
  });
  return printed.length ? " {\n".concat(indent2 + INDENT).concat(printed.join("\n" + indent2 + INDENT), "\n").concat(indent2).concat((options === null || options === void 0 ? void 0 : options.isClientExtension) === true ? "# " : "", "}") : "";
}
function printField(schema, field, options) {
  var _options$parentDirect;
  var parentDirectives = (_options$parentDirect = options === null || options === void 0 ? void 0 : options.parentDirectives) !== null && _options$parentDirect !== void 0 ? _options$parentDirect : "";
  var isClientExtension = (options === null || options === void 0 ? void 0 : options.isClientExtension) === true;
  return (isClientExtension ? "# " : "") + (field.alias === field.name ? field.name : field.alias + ": " + field.name) + printArguments$1(schema, field.args) + parentDirectives + printDirectives$1(schema, field.directives) + printHandles(schema, field);
}
function printSelection(schema, selection, indent2, options) {
  var _options$parentDirect2;
  var str;
  var parentDirectives = (_options$parentDirect2 = options === null || options === void 0 ? void 0 : options.parentDirectives) !== null && _options$parentDirect2 !== void 0 ? _options$parentDirect2 : "";
  var isClientExtension = (options === null || options === void 0 ? void 0 : options.isClientExtension) === true;
  if (selection.kind === "LinkedField") {
    str = printField(schema, selection, {
      parentDirectives,
      isClientExtension
    });
    str += printSelections(schema, selection, indent2 + INDENT, {
      isClientExtension
    });
  } else if (selection.kind === "ModuleImport") {
    str = selection.selections.map(function(matchSelection) {
      return printSelection(schema, matchSelection, indent2, {
        parentDirectives,
        isClientExtension
      });
    }).join("\n" + indent2 + INDENT);
  } else if (selection.kind === "ScalarField") {
    str = printField(schema, selection, {
      parentDirectives,
      isClientExtension
    });
  } else if (selection.kind === "InlineFragment") {
    str = "";
    if (isClientExtension) {
      str += "# ";
    }
    str += "... on " + schema.getTypeString(selection.typeCondition);
    str += parentDirectives;
    str += printDirectives$1(schema, selection.directives);
    str += printSelections(schema, selection, indent2 + INDENT, {
      isClientExtension
    });
  } else if (selection.kind === "FragmentSpread") {
    str = "";
    if (isClientExtension) {
      str += "# ";
    }
    str += "..." + selection.name;
    str += parentDirectives;
    str += printFragmentArguments(schema, selection.args);
    str += printDirectives$1(schema, selection.directives);
  } else if (selection.kind === "InlineDataFragmentSpread") {
    str = "# ".concat(selection.name, " @inline") + "\n".concat(indent2).concat(INDENT, "...") + parentDirectives + printSelections(schema, selection, indent2 + INDENT, {});
  } else if (selection.kind === "Condition") {
    var value = printValue(schema, selection.condition, null);
    !(value != null) ? invariant$6(false) : void 0;
    var condStr = selection.passingValue ? " @include" : " @skip";
    condStr += "(if: " + value + ")";
    condStr += parentDirectives;
    var subSelections = selection.selections.map(function(sel) {
      return printSelection(schema, sel, indent2, {
        parentDirectives: condStr,
        isClientExtension
      });
    });
    str = subSelections.join("\n" + indent2 + INDENT);
  } else if (selection.kind === "Stream") {
    var streamStr = parentDirectives;
    streamStr += ' @stream(label: "'.concat(selection.label, '"');
    if (selection["if"] !== null) {
      var _printValue;
      streamStr += ", if: ".concat((_printValue = printValue(schema, selection["if"], null)) !== null && _printValue !== void 0 ? _printValue : "");
    }
    if (selection.initialCount !== null) {
      var _printValue2;
      streamStr += ", initial_count: ".concat((_printValue2 = printValue(schema, selection.initialCount, null)) !== null && _printValue2 !== void 0 ? _printValue2 : "");
    }
    if (selection.useCustomizedBatch !== null) {
      var _printValue3;
      streamStr += ", use_customized_batch: ".concat((_printValue3 = printValue(schema, selection.useCustomizedBatch, null)) !== null && _printValue3 !== void 0 ? _printValue3 : "false");
    }
    streamStr += ")";
    var _subSelections = selection.selections.map(function(sel) {
      return printSelection(schema, sel, indent2, {
        parentDirectives: streamStr,
        isClientExtension
      });
    });
    str = _subSelections.join("\n" + INDENT);
  } else if (selection.kind === "Defer") {
    var deferStr = parentDirectives;
    deferStr += ' @defer(label: "'.concat(selection.label, '"');
    if (selection["if"] !== null) {
      var _printValue4;
      deferStr += ", if: ".concat((_printValue4 = printValue(schema, selection["if"], null)) !== null && _printValue4 !== void 0 ? _printValue4 : "");
    }
    deferStr += ")";
    if (selection.selections.every(function(subSelection) {
      return subSelection.kind === "InlineFragment" || subSelection.kind === "FragmentSpread";
    })) {
      var _subSelections2 = selection.selections.map(function(sel) {
        return printSelection(schema, sel, indent2, {
          parentDirectives: deferStr,
          isClientExtension
        });
      });
      str = _subSelections2.join("\n" + INDENT);
    } else {
      str = "..." + deferStr;
      str += printSelections(schema, selection, indent2 + INDENT, {
        isClientExtension
      });
    }
  } else if (selection.kind === "ClientExtension") {
    !(isClientExtension === false) ? invariant$6(false) : void 0;
    str = "# Client-only selections:\n" + indent2 + INDENT + selection.selections.map(function(sel) {
      return printSelection(schema, sel, indent2, {
        parentDirectives,
        isClientExtension: true
      });
    }).join("\n" + indent2 + INDENT);
  } else {
    invariant$6(false);
  }
  return str;
}
function printArgumentDefinitions(schema, argumentDefinitions) {
  var printed = argumentDefinitions.map(function(def) {
    var str = "$".concat(def.name, ": ").concat(schema.getTypeString(def.type));
    if (def.defaultValue != null) {
      str += " = " + printLiteral(schema, def.defaultValue, def.type);
    }
    return str;
  });
  return printed.length ? "(\n".concat(INDENT).concat(printed.join("\n" + INDENT), "\n)") : "";
}
function printFragmentArgumentDefinitions(schema, argumentDefinitions) {
  var printed;
  argumentDefinitions.forEach(function(def) {
    if (def.kind !== "LocalArgumentDefinition") {
      return;
    }
    printed = printed || [];
    var str = "".concat(def.name, ': {type: "').concat(schema.getTypeString(def.type), '"');
    if (def.defaultValue != null) {
      str += ", defaultValue: ".concat(printLiteral(schema, def.defaultValue, def.type));
    }
    str += "}";
    printed.push(str);
  });
  return printed && printed.length ? " @argumentDefinitions(\n".concat(INDENT).concat(printed.join("\n" + INDENT), "\n)") : "";
}
function printHandles(schema, field) {
  if (!field.handles) {
    return "";
  }
  var printed = field.handles.map(function(handle) {
    var key = handle.key === DEFAULT_HANDLE_KEY$1 ? "" : ', key: "'.concat(handle.key, '"');
    var filters = handle.filters == null ? "" : ", filters: ".concat(JSON.stringify(Array.from(handle.filters).sort()));
    var handleArgs = handle.handleArgs == null ? "" : ", handleArgs: ".concat(printArguments$1(schema, handle.handleArgs));
    return '@__clientField(handle: "'.concat(handle.name, '"').concat(key).concat(filters).concat(handleArgs, ")");
  });
  return printed.length ? " " + printed.join(" ") : "";
}
function printDirectives$1(schema, directives) {
  var printed = directives.map(function(directive) {
    return "@" + directive.name + printArguments$1(schema, directive.args);
  });
  return printed.length ? " " + printed.join(" ") : "";
}
function printFragmentArguments(schema, args) {
  var printedArgs = printArguments$1(schema, args);
  if (!printedArgs.length) {
    return "";
  }
  return " @arguments".concat(printedArgs);
}
function printArguments$1(schema, args) {
  var printed = [];
  args.forEach(function(arg) {
    var printedValue = printValue(schema, arg.value, arg.type);
    if (printedValue != null) {
      printed.push(arg.name + ": " + printedValue);
    }
  });
  return printed.length ? "(" + printed.join(", ") + ")" : "";
}
function printValue(schema, value, type) {
  if (type != null && schema.isNonNull(type)) {
    type = schema.getNullableType(type);
  }
  if (value.kind === "Variable") {
    return "$" + value.variableName;
  } else if (value.kind === "ObjectValue") {
    var inputType = type != null ? schema.asInputObjectType(type) : null;
    var pairs = value.fields.map(function(field) {
      var fieldConfig = inputType != null ? schema.hasField(inputType, field.name) ? schema.getFieldConfig(schema.expectField(inputType, field.name)) : null : null;
      var innerValue = printValue(schema, field.value, fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.type);
      return innerValue == null ? null : field.name + ": " + innerValue;
    }).filter(Boolean);
    return "{" + pairs.join(", ") + "}";
  } else if (value.kind === "ListValue") {
    !(type && schema.isList(type)) ? invariant$6(false) : void 0;
    var innerType = schema.getListItemType(type);
    return "[".concat(value.items.map(function(i) {
      return printValue(schema, i, innerType);
    }).join(", "), "]");
  } else if (value.value != null) {
    return printLiteral(schema, value.value, type);
  } else {
    return null;
  }
}
function printLiteral(schema, value, type) {
  if (value == null) {
    var _JSON$stringify;
    return (_JSON$stringify = JSON.stringify(value)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : "null";
  }
  if (type != null && schema.isNonNull(type)) {
    type = schema.getNullableType(type);
  }
  if (type && schema.isEnum(type)) {
    var result = schema.serialize(schema.assertEnumType(type), value);
    if (result == null && typeof value === "string") {
      result = value;
    }
    !(typeof result === "string") ? invariant$6(false) : void 0;
    return result;
  } else if (type && (schema.isId(type) || schema.isInt(type))) {
    var _JSON$stringify3;
    return (_JSON$stringify3 = JSON.stringify(value)) !== null && _JSON$stringify3 !== void 0 ? _JSON$stringify3 : "";
  } else if (type && schema.isScalar(type)) {
    var _JSON$stringify4;
    var _result = schema.serialize(schema.assertScalarType(type), value);
    return (_JSON$stringify4 = JSON.stringify(_result)) !== null && _JSON$stringify4 !== void 0 ? _JSON$stringify4 : "";
  } else if (Array.isArray(value)) {
    !(type && schema.isList(type)) ? invariant$6(false) : void 0;
    var itemType = schema.getListItemType(type);
    return "[" + value.map(function(item) {
      return printLiteral(schema, item, itemType);
    }).join(", ") + "]";
  } else if (type && schema.isList(type) && value != null) {
    return printLiteral(schema, value, schema.getListItemType(type));
  } else if (typeof value === "object" && value != null) {
    var fields = [];
    !(type && schema.isInputObject(type)) ? invariant$6(false) : void 0;
    var inputType = schema.assertInputObjectType(type);
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        var fieldConfig = schema.getFieldConfig(schema.expectField(inputType, key));
        fields.push(key + ": " + printLiteral(schema, value[key], fieldConfig.type));
      }
    }
    return "{" + fields.join(", ") + "}";
  } else {
    var _JSON$stringify5;
    return (_JSON$stringify5 = JSON.stringify(value)) !== null && _JSON$stringify5 !== void 0 ? _JSON$stringify5 : "null";
  }
}
var IRPrinter = {
  print: print$2,
  printField,
  printArguments: printArguments$1,
  printDirectives: printDirectives$1
};
var invariant$5 = browser;
var _require$9 = IRPrinter, printArguments = _require$9.printArguments, printDirectives = _require$9.printDirectives;
function getIdentifierForSelection$2(schema, node) {
  if (node.kind === "LinkedField" || node.kind === "ScalarField") {
    return "Field: " + node.directives.length === 0 ? node.alias : node.alias + printDirectives(schema, node.directives);
  } else if (node.kind === "FragmentSpread") {
    return "FragmentSpread:" + node.args.length === 0 ? node.name : node.name + printArguments(schema, node.args);
  } else if (node.kind === "ModuleImport") {
    return "ModuleImport:";
  } else if (node.kind === "Defer") {
    return "Defer:" + node.label;
  } else if (node.kind === "Stream") {
    return "Stream:" + node.label;
  } else if (node.kind === "InlineFragment") {
    return "InlineFragment:" + schema.getTypeString(node.typeCondition) + printDirectives(schema, node.directives);
  } else if (node.kind === "ClientExtension") {
    return "ClientExtension:";
  } else if (node.kind === "InlineDataFragmentSpread") {
    return "InlineDataFragment:" + node.name;
  } else if (node.kind === "Condition") {
    return "Condition:" + (node.condition.kind === "Variable" ? "$" + node.condition.variableName : String(node.condition.value)) + String(node.passingValue);
  } else {
    invariant$5(false);
  }
}
var getIdentifierForSelection_1 = getIdentifierForSelection$2;
var _interopRequireDefault$5 = interopRequireDefault.exports;
var _objectSpread2$3 = _interopRequireDefault$5(objectSpread2.exports);
var _toConsumableArray2$2 = _interopRequireDefault$5(toConsumableArray.exports);
var IRTransformer$3 = IRTransformer$4;
var IMap = immutable.exports.Map;
var partitionArray$1 = partitionArray_1;
var getIdentifierForSelection$1 = getIdentifierForSelection_1;
var invariant$4 = browser;
function skipRedundantNodesTransform(context) {
  return IRTransformer$3.transform(context, {
    Root: visitNode,
    SplitOperation: visitNode,
    Fragment: visitNode
  });
}
var cache = /* @__PURE__ */ new Map();
function visitNode(node) {
  cache = /* @__PURE__ */ new Map();
  var context = this.getContext();
  return transformNode$1(context.getSchema(), node, new IMap()).node;
}
function transformNode$1(schema, node, selectionMap) {
  var isEmptySelectionMap = selectionMap.size === 0;
  var result;
  if (isEmptySelectionMap) {
    result = cache.get(node);
    if (result != null) {
      return result;
    }
  }
  var selections = [];
  sortSelections(node.selections).forEach(function(selection) {
    var identifier = getIdentifierForSelection$1(schema, selection);
    switch (selection.kind) {
      case "ScalarField":
      case "FragmentSpread": {
        if (!selectionMap.has(identifier)) {
          selections.push(selection);
          selectionMap = selectionMap.set(identifier, null);
        }
        break;
      }
      case "Defer":
      case "Stream":
      case "ModuleImport":
      case "ClientExtension":
      case "InlineDataFragmentSpread":
      case "LinkedField": {
        var transformed = transformNode$1(schema, selection, selectionMap.get(identifier) || new IMap());
        if (transformed.node) {
          selections.push(transformed.node);
          selectionMap = selectionMap.set(identifier, transformed.selectionMap);
        }
        break;
      }
      case "InlineFragment":
      case "Condition": {
        var _transformed = transformNode$1(schema, selection, selectionMap.get(identifier) || selectionMap);
        if (_transformed.node) {
          selections.push(_transformed.node);
          selectionMap = selectionMap.set(identifier, _transformed.selectionMap);
        }
        break;
      }
      default:
        invariant$4(false);
    }
  });
  var nextNode = selections.length ? (0, _objectSpread2$3["default"])((0, _objectSpread2$3["default"])({}, node), {}, {
    selections
  }) : null;
  result = {
    selectionMap,
    node: nextNode
  };
  if (isEmptySelectionMap) {
    cache.set(node, result);
  }
  return result;
}
function sortSelections(selections) {
  var isScalarOrLinkedField = function isScalarOrLinkedField2(selection) {
    return selection.kind === "ScalarField" || selection.kind === "LinkedField";
  };
  var _partitionArray = partitionArray$1(selections, isScalarOrLinkedField), scalarsAndLinkedFields = _partitionArray[0], rest = _partitionArray[1];
  return [].concat((0, _toConsumableArray2$2["default"])(scalarsAndLinkedFields), (0, _toConsumableArray2$2["default"])(rest));
}
var SkipRedundantNodesTransform = {
  transform: skipRedundantNodesTransform
};
var IRTransformer$2 = IRTransformer$4;
var invariant$3 = browser;
function inlineFragmentsTransform(context) {
  var visitFragmentSpread = fragmentSpreadVisitor(/* @__PURE__ */ new Map());
  return IRTransformer$2.transform(context, {
    Fragment: visitFragment,
    FragmentSpread: visitFragmentSpread
  });
}
function visitFragment(fragment) {
  return null;
}
function fragmentSpreadVisitor(cache2) {
  return function visitFragmentSpread(fragmentSpread) {
    var traverseResult = cache2.get(fragmentSpread);
    if (traverseResult != null) {
      return traverseResult;
    }
    !(fragmentSpread.args.length === 0) ? invariant$3(false) : void 0;
    var fragment = this.getContext().getFragment(fragmentSpread.name, fragmentSpread.loc);
    var result = {
      kind: "InlineFragment",
      directives: fragmentSpread.directives,
      loc: {
        kind: "Derived",
        source: fragmentSpread.loc
      },
      metadata: fragmentSpread.metadata,
      selections: fragment.selections,
      typeCondition: fragment.type
    };
    traverseResult = this.traverse(result);
    cache2.set(fragmentSpread, traverseResult);
    return traverseResult;
  };
}
var InlineFragmentsTransform = {
  transform: inlineFragmentsTransform
};
var _require$8 = CompilerError, createUserError$3 = _require$8.createUserError, eachWithCombinedError$1 = _require$8.eachWithCombinedError;
function getRootScope$1(definitions) {
  var scope = {};
  definitions.forEach(function(definition) {
    scope[definition.name] = {
      kind: "Variable",
      loc: definition.loc,
      variableName: definition.name,
      type: definition.type
    };
  });
  return scope;
}
function getFragmentScope$1(schema, definitions, args, parentScope, spread) {
  var argMap = /* @__PURE__ */ new Map();
  args.forEach(function(arg) {
    if (arg.value.kind === "Literal") {
      argMap.set(arg.name, arg.value);
    } else if (arg.value.kind === "Variable") {
      argMap.set(arg.name, parentScope[arg.value.variableName]);
    }
  });
  var fragmentScope = {};
  eachWithCombinedError$1(definitions, function(definition) {
    if (definition.kind === "RootArgumentDefinition") {
      if (argMap.has(definition.name)) {
        var _argNode$loc;
        var argNode = args.find(function(a) {
          return a.name === definition.name;
        });
        throw createUserError$3("Unexpected argument '".concat(definition.name, "' supplied to fragment '").concat(spread.name, "'. @arguments may only be provided for variables defined in the fragment's @argumentDefinitions."), [(_argNode$loc = argNode === null || argNode === void 0 ? void 0 : argNode.loc) !== null && _argNode$loc !== void 0 ? _argNode$loc : spread.loc]);
      }
      fragmentScope[definition.name] = {
        kind: "Variable",
        loc: definition.loc,
        variableName: definition.name,
        type: definition.type
      };
    } else {
      var arg = argMap.get(definition.name);
      if (arg == null || arg.kind === "Literal" && arg.value == null) {
        if (definition.defaultValue == null && schema.isNonNull(definition.type)) {
          var _argNode$loc2;
          var _argNode = args.find(function(a) {
            return a.name === definition.name;
          });
          throw createUserError$3("No value found for required argument '".concat(definition.name, ": ").concat(schema.getTypeString(definition.type), "' on fragment '").concat(spread.name, "'."), [(_argNode$loc2 = _argNode === null || _argNode === void 0 ? void 0 : _argNode.loc) !== null && _argNode$loc2 !== void 0 ? _argNode$loc2 : spread.loc]);
        }
        fragmentScope[definition.name] = {
          kind: "Literal",
          value: definition.defaultValue
        };
      } else {
        fragmentScope[definition.name] = arg;
      }
    }
  });
  return fragmentScope;
}
var RelayCompilerScope$1 = {
  getFragmentScope: getFragmentScope$1,
  getRootScope: getRootScope$1
};
var invariant$2 = browser;
function getIdentifierForArgumentValue$1(value) {
  switch (value.kind) {
    case "Variable":
      return {
        variable: value.variableName
      };
    case "Literal":
      return {
        value: value.value
      };
    case "ListValue":
      return {
        list: value.items.map(function(item) {
          return getIdentifierForArgumentValue$1(item);
        })
      };
    case "ObjectValue":
      return {
        object: value.fields.map(function(field) {
          return {
            name: field.name,
            value: getIdentifierForArgumentValue$1(field.value)
          };
        })
      };
    default:
      invariant$2(false);
  }
}
var getIdentifierForArgumentValue_1 = getIdentifierForArgumentValue$1;
var BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function murmurHash$1(str) {
  var length = str.length;
  var rem = length & 3;
  var len = length ^ rem;
  var h = 0;
  var i = 0;
  var k;
  while (i !== len) {
    var ch4 = str.charCodeAt(i + 3);
    k = str.charCodeAt(i) ^ str.charCodeAt(i + 1) << 8 ^ str.charCodeAt(i + 2) << 16 ^ (ch4 & 255) << 24 ^ (ch4 & 65280) >> 8;
    i += 4;
    k = k * 11601 + (k & 65535) * 3432906752 >>> 0;
    k = k << 15 | k >>> 17;
    k = k * 13715 + (k & 65535) * 461832192 >>> 0;
    h ^= k;
    h = h << 13 | h >>> 19;
    h = h * 5 + 3864292196 >>> 0;
  }
  k = 0;
  switch (rem) {
    case 3:
      k ^= str.charCodeAt(len + 2) << 16;
    case 2:
      k ^= str.charCodeAt(len + 1) << 8;
    case 1:
      k ^= str.charCodeAt(len);
      k = k * 11601 + (k & 65535) * 3432906752 >>> 0;
      k = k << 15 | k >>> 17;
      k = k * 13715 + (k & 65535) * 461832192 >>> 0;
      h ^= k;
  }
  h ^= length;
  h ^= h >>> 16;
  h = h * 51819 + (h & 65535) * 2246770688 >>> 0;
  h ^= h >>> 13;
  h = h * 44597 + (h & 65535) * 3266445312 >>> 0;
  h ^= h >>> 16;
  h >>>= 0;
  if (!h) {
    return "0";
  }
  var s = "";
  while (h) {
    var d = h % 62;
    s = BASE62[d] + s;
    h = (h - d) / 62;
  }
  return s;
}
var murmurHash_1 = murmurHash$1;
var _interopRequireDefault$4 = interopRequireDefault.exports;
var _objectSpread2$2 = _interopRequireDefault$4(objectSpread2.exports);
var _createForOfIteratorHelper2$3 = _interopRequireDefault$4(createForOfIteratorHelper.exports);
var _toConsumableArray2$1 = _interopRequireDefault$4(toConsumableArray.exports);
var IRTransformer$1 = IRTransformer$4;
var RelayCompilerScope = RelayCompilerScope$1;
var getIdentifierForArgumentValue = getIdentifierForArgumentValue_1;
var murmurHash = murmurHash_1;
var _require$7 = CompilerError, createCompilerError$6 = _require$7.createCompilerError, createNonRecoverableUserError = _require$7.createNonRecoverableUserError;
var getFragmentScope = RelayCompilerScope.getFragmentScope, getRootScope = RelayCompilerScope.getRootScope;
function applyFragmentArgumentTransform(context) {
  var fragments = /* @__PURE__ */ new Map();
  var nextContext = IRTransformer$1.transform(context, {
    Root: function Root(node) {
      var scope = getRootScope(node.argumentDefinitions);
      return transformNode(context, fragments, scope, node, [node]);
    },
    SplitOperation: function SplitOperation(node) {
      return transformNode(context, fragments, {}, node, [node]);
    },
    Fragment: function Fragment() {
      return null;
    }
  });
  var _iterator = (0, _createForOfIteratorHelper2$3["default"])(fragments.values()), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var pendingFragment = _step.value;
      if (pendingFragment.kind === "resolved" && pendingFragment.value) {
        nextContext = nextContext.add(pendingFragment.value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return nextContext;
}
function transformNode(context, fragments, scope, node, errorContext) {
  var selections = transformSelections(context, fragments, scope, node.selections, errorContext);
  if (!selections) {
    return null;
  }
  if (node.hasOwnProperty("directives")) {
    var directives = transformDirectives(scope, node.directives, errorContext);
    return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, node), {}, {
      directives,
      selections
    });
  }
  return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, node), {}, {
    selections
  });
}
function transformDeferStreamNode(context, fragments, scope, node, errorContext) {
  var nextNode = transformNode(context, fragments, scope, node, errorContext);
  if (!nextNode) {
    return null;
  }
  if (nextNode["if"]) {
    var ifVal = transformValue$1(scope, nextNode["if"], errorContext);
    if (ifVal.kind === "Literal" && ifVal.value === false && node.selections && node.selections.length === 1) {
      return node.selections[0];
    }
    nextNode["if"] = ifVal;
  }
  if (nextNode.useCustomizedBatch) {
    nextNode.useCustomizedBatch = transformValue$1(scope, nextNode.useCustomizedBatch, errorContext);
  }
  if (nextNode.initialCount) {
    nextNode.initialCount = transformValue$1(scope, nextNode.initialCount, errorContext);
  }
  return nextNode;
}
function transformFragmentSpread(context, fragments, scope, spread, errorContext) {
  var directives = transformDirectives(scope, spread.directives, errorContext);
  var appliedFragment = transformFragment(context, fragments, scope, spread, spread.args, [].concat((0, _toConsumableArray2$1["default"])(errorContext), [spread]));
  if (!appliedFragment) {
    return null;
  }
  var transformed = (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, spread), {}, {
    kind: "FragmentSpread",
    args: [],
    directives,
    name: appliedFragment.name
  });
  return transformed;
}
function transformField(context, fragments, scope, field, errorContext) {
  var args = transformArguments(scope, field.args, errorContext);
  var directives = transformDirectives(scope, field.directives, errorContext);
  if (field.kind === "LinkedField") {
    var selections = transformSelections(context, fragments, scope, field.selections, errorContext);
    if (!selections) {
      return null;
    }
    return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, field), {}, {
      args,
      directives,
      selections
    });
  } else {
    return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, field), {}, {
      args,
      directives
    });
  }
}
function transformCondition(context, fragments, scope, node, errorContext) {
  var condition = transformValue$1(scope, node.condition, errorContext);
  if (!(condition.kind === "Literal" || condition.kind === "Variable")) {
    throw createNonRecoverableUserError("A non-scalar value was applied to an @include or @skip directive, the `if` argument value must be a variable or a literal Boolean.", [condition.loc]);
  }
  if (condition.kind === "Literal" && condition.value !== node.passingValue) {
    return null;
  }
  var selections = transformSelections(context, fragments, scope, node.selections, errorContext);
  if (!selections) {
    return null;
  }
  if (condition.kind === "Literal" && condition.value === node.passingValue) {
    return selections;
  }
  return [(0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, node), {}, {
    condition,
    selections
  })];
}
function transformSelections(context, fragments, scope, selections, errorContext) {
  var nextSelections = null;
  selections.forEach(function(selection) {
    var nextSelection;
    if (selection.kind === "ClientExtension" || selection.kind === "InlineDataFragmentSpread" || selection.kind === "InlineFragment" || selection.kind === "ModuleImport") {
      nextSelection = transformNode(context, fragments, scope, selection, errorContext);
    } else if (selection.kind === "Defer" || selection.kind === "Stream") {
      nextSelection = transformDeferStreamNode(context, fragments, scope, selection, errorContext);
    } else if (selection.kind === "FragmentSpread") {
      nextSelection = transformFragmentSpread(context, fragments, scope, selection, errorContext);
    } else if (selection.kind === "Condition") {
      var conditionSelections = transformCondition(context, fragments, scope, selection, errorContext);
      if (conditionSelections) {
        var _nextSelections;
        nextSelections = nextSelections || [];
        (_nextSelections = nextSelections).push.apply(_nextSelections, (0, _toConsumableArray2$1["default"])(conditionSelections));
      }
    } else if (selection.kind === "LinkedField" || selection.kind === "ScalarField") {
      nextSelection = transformField(context, fragments, scope, selection, errorContext);
    } else {
      throw createCompilerError$6("ApplyFragmentArgumentTransform: Unsupported kind '".concat(selection.kind, "'."), [selection.loc]);
    }
    if (nextSelection) {
      nextSelections = nextSelections || [];
      nextSelections.push(nextSelection);
    }
  });
  return nextSelections;
}
function transformDirectives(scope, directives, errorContext) {
  return directives.map(function(directive) {
    var args = transformArguments(scope, directive.args, errorContext);
    return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, directive), {}, {
      args
    });
  });
}
function transformArguments(scope, args, errorContext) {
  return args.map(function(arg) {
    var value = transformValue$1(scope, arg.value, errorContext);
    return value === arg.value ? arg : (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, arg), {}, {
      value
    });
  });
}
function transformValue$1(scope, value, errorContext) {
  if (value.kind === "Variable") {
    var scopeValue = scope[value.variableName];
    if (scopeValue == null) {
      var _errorContext$;
      throw createNonRecoverableUserError("Variable '$".concat(value.variableName, "' is not in scope."), [(_errorContext$ = errorContext[0]) === null || _errorContext$ === void 0 ? void 0 : _errorContext$.loc, value.loc].filter(Boolean));
    }
    return scopeValue;
  } else if (value.kind === "ObjectValue") {
    return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, value), {}, {
      fields: value.fields.map(function(field) {
        return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, field), {}, {
          value: transformValue$1(scope, field.value, errorContext)
        });
      })
    });
  } else if (value.kind === "ListValue") {
    return (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, value), {}, {
      items: value.items.map(function(item) {
        return transformValue$1(scope, item, errorContext);
      })
    });
  }
  return value;
}
function transformFragment(context, fragments, parentScope, spread, args, errorContext) {
  var schema = context.getSchema();
  var fragment = context.getFragment(spread.name, spread.loc);
  var argumentsHash = hashArguments(args, parentScope, errorContext);
  var fragmentName = argumentsHash ? "".concat(fragment.name, "_").concat(argumentsHash) : fragment.name;
  var appliedFragment = fragments.get(fragmentName);
  if (appliedFragment) {
    if (appliedFragment.kind === "resolved") {
      return appliedFragment.value;
    } else {
      throw createNonRecoverableUserError("Found a circular reference from fragment '".concat(fragment.name, "'."), errorContext.map(function(node) {
        return node.loc;
      }));
    }
  }
  var fragmentScope = getFragmentScope(schema, fragment.argumentDefinitions, args, parentScope, spread);
  fragments.set(fragmentName, {
    kind: "pending"
  });
  var transformedFragment = null;
  var selections = transformSelections(context, fragments, fragmentScope, fragment.selections, errorContext);
  if (selections) {
    transformedFragment = (0, _objectSpread2$2["default"])((0, _objectSpread2$2["default"])({}, fragment), {}, {
      selections,
      name: fragmentName,
      argumentDefinitions: []
    });
  }
  fragments.set(fragmentName, {
    kind: "resolved",
    value: transformedFragment
  });
  return transformedFragment;
}
function hashArguments(args, scope, errorContext) {
  if (!args.length) {
    return null;
  }
  var sortedArgs = (0, _toConsumableArray2$1["default"])(args).sort(function(a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  var printedArgs = JSON.stringify(sortedArgs.map(function(arg) {
    var value;
    if (arg.value.kind === "Variable") {
      value = scope[arg.value.variableName];
      if (value == null) {
        var _errorContext$2;
        throw createNonRecoverableUserError("Variable '$".concat(arg.value.variableName, "' is not in scope."), [(_errorContext$2 = errorContext[0]) === null || _errorContext$2 === void 0 ? void 0 : _errorContext$2.loc, arg.value.loc].filter(Boolean));
      }
    } else {
      value = arg.value;
    }
    return {
      name: arg.name,
      value: getIdentifierForArgumentValue(value)
    };
  }));
  return murmurHash(printedArgs);
}
var ApplyFragmentArgumentTransform = {
  transform: applyFragmentArgumentTransform
};
var aStackPool = [];
var bStackPool = [];
/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */
function areEqualArgValues$1(a, b) {
  var aStack = aStackPool.length ? aStackPool.pop() : [];
  var bStack = bStackPool.length ? bStackPool.pop() : [];
  var result = eq(a, b, aStack, bStack);
  aStack.length = 0;
  bStack.length = 0;
  aStackPool.push(aStack);
  bStackPool.push(bStack);
  return result;
}
function eq(a, b, aStack, bStack) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  if (a == null || b == null) {
    return false;
  }
  if (typeof a !== "object" || typeof b !== "object") {
    return false;
  }
  var objToStr = Object.prototype.toString;
  var className = objToStr.call(a);
  if (className !== objToStr.call(b)) {
    return false;
  }
  switch (className) {
    case "[object String]":
      return a === String(b);
    case "[object Number]":
      return isNaN(a) || isNaN(b) ? false : a === Number(b);
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object RegExp]":
      return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.ignoreCase === b.ignoreCase;
  }
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  var size = 0;
  if (className === "[object Array]") {
    size = a.length;
    if (size !== b.length) {
      return false;
    }
    while (size--) {
      if (!eq(a[size], b[size], aStack, bStack)) {
        return false;
      }
    }
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (a.hasOwnProperty("valueOf") && b.hasOwnProperty("valueOf")) {
      return a.valueOf() === b.valueOf();
    }
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) {
      return false;
    }
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === "_owner") {
        continue;
      }
      if (!b.hasOwnProperty(keys[i]) || !eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
var areEqualArgValues_1 = areEqualArgValues$1;
var _interopRequireDefault$3 = interopRequireDefault.exports;
var _objectSpread2$1 = _interopRequireDefault$3(objectSpread2.exports);
var IRTransformer = IRTransformer$4;
var areEqualArgValues = areEqualArgValues_1;
var getIdentifierForSelection = getIdentifierForSelection_1;
var _require$6 = CompilerError, createCompilerError$5 = _require$6.createCompilerError, createUserError$2 = _require$6.createUserError;
function flattenTransformImpl(context, options) {
  var state = {
    isForCodegen: !!(options && options.isForCodegen),
    parentType: null
  };
  var visitorFn = memoizedFlattenSelection(/* @__PURE__ */ new Map());
  return IRTransformer.transform(context, {
    Condition: visitorFn,
    Defer: visitorFn,
    Fragment: visitorFn,
    InlineDataFragmentSpread: visitorFn,
    InlineFragment: visitorFn,
    LinkedField: visitorFn,
    ModuleImport: visitorFn,
    Root: visitorFn,
    SplitOperation: visitorFn
  }, function() {
    return state;
  });
}
function memoizedFlattenSelection(cache2) {
  return function flattenSelectionsFn(node, state) {
    var context = this.getContext();
    var nodeCache = cache2.get(node);
    if (nodeCache == null) {
      nodeCache = /* @__PURE__ */ new Map();
      cache2.set(node, nodeCache);
    }
    var parentType = state.parentType;
    var result = nodeCache.get(parentType);
    if (result != null) {
      return result;
    }
    var type = node.kind === "LinkedField" || node.kind === "Fragment" || node.kind === "Root" || node.kind === "SplitOperation" ? node.type : node.kind === "InlineFragment" ? node.typeCondition : parentType;
    if (type == null) {
      throw createCompilerError$5("FlattenTransform: Expected a parent type.", [node.loc]);
    }
    var nextSelections = /* @__PURE__ */ new Map();
    var hasFlattened = flattenSelectionsInto(context.getSchema(), nextSelections, node, state, type);
    var flattenedNode = hasFlattened ? (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({}, node), {}, {
      selections: Array.from(nextSelections.values())
    }) : node;
    state.parentType = type;
    var deeplyFlattenedNode = this.traverse(flattenedNode, state);
    state.parentType = parentType;
    nodeCache.set(parentType, deeplyFlattenedNode);
    return deeplyFlattenedNode;
  };
}
function flattenSelectionsInto(schema, flattenedSelections, node, state, type) {
  var hasFlattened = false;
  node.selections.forEach(function(selection) {
    if (selection.kind === "InlineFragment" && shouldFlattenInlineFragment(schema, selection, state, type)) {
      hasFlattened = true;
      flattenSelectionsInto(schema, flattenedSelections, selection, state, type);
      return;
    }
    var nodeIdentifier = getIdentifierForSelection(schema, selection);
    var flattenedSelection = flattenedSelections.get(nodeIdentifier);
    if (!flattenedSelection) {
      flattenedSelections.set(nodeIdentifier, selection);
      return;
    }
    hasFlattened = true;
    if (flattenedSelection.kind === "InlineFragment") {
      if (selection.kind !== "InlineFragment") {
        throw createCompilerError$5("FlattenTransform: Expected an InlineFragment, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, selection.typeCondition)
      }));
    } else if (flattenedSelection.kind === "Condition") {
      if (selection.kind !== "Condition") {
        throw createCompilerError$5("FlattenTransform: Expected a Condition, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === "ClientExtension") {
      if (selection.kind !== "ClientExtension") {
        throw createCompilerError$5("FlattenTransform: Expected a ClientExtension, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === "FragmentSpread")
      ;
    else if (flattenedSelection.kind === "ModuleImport") {
      if (selection.kind !== "ModuleImport") {
        throw createCompilerError$5("FlattenTransform: Expected a ModuleImport, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      if (selection.name !== flattenedSelection.name || selection.module !== flattenedSelection.module || selection.key !== flattenedSelection.key) {
        throw createUserError$2("Found conflicting @module selections: use a unique alias on the parent fields.", [selection.loc, flattenedSelection.loc]);
      }
      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({}, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === "Defer") {
      if (selection.kind !== "Defer") {
        throw createCompilerError$5("FlattenTransform: Expected a Defer, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({
        kind: "Defer"
      }, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === "Stream") {
      if (selection.kind !== "Stream") {
        throw createCompilerError$5("FlattenTransform: Expected a Stream, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({
        kind: "Stream"
      }, flattenedSelection), {}, {
        selections: mergeSelections(schema, flattenedSelection, selection, state, type)
      }));
    } else if (flattenedSelection.kind === "LinkedField") {
      if (selection.kind !== "LinkedField") {
        throw createCompilerError$5("FlattenTransform: Expected a LinkedField, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      assertUniqueArgsForAlias(selection, flattenedSelection);
      flattenedSelections.set(nodeIdentifier, {
        kind: "LinkedField",
        alias: flattenedSelection.alias,
        args: flattenedSelection.args,
        connection: flattenedSelection.connection || selection.connection,
        directives: flattenedSelection.directives,
        handles: mergeHandles(flattenedSelection, selection),
        loc: flattenedSelection.loc,
        metadata: flattenedSelection.metadata,
        name: flattenedSelection.name,
        selections: mergeSelections(schema, flattenedSelection, selection, state, selection.type),
        type: flattenedSelection.type
      });
    } else if (flattenedSelection.kind === "ScalarField") {
      if (selection.kind !== "ScalarField") {
        throw createCompilerError$5("FlattenTransform: Expected a ScalarField, got a '".concat(selection.kind, "'"), [selection.loc]);
      }
      assertUniqueArgsForAlias(selection, flattenedSelection);
      if (selection.handles && selection.handles.length > 0) {
        flattenedSelections.set(nodeIdentifier, (0, _objectSpread2$1["default"])((0, _objectSpread2$1["default"])({
          kind: "ScalarField"
        }, flattenedSelection), {}, {
          handles: mergeHandles(selection, flattenedSelection)
        }));
      }
    } else if (flattenedSelection.kind === "InlineDataFragmentSpread") {
      throw createCompilerError$5("FlattenTransform: did not expect an InlineDataFragmentSpread node. Only expecting InlineDataFragmentSpread in reader ASTs and this transform to run only on normalization ASTs.", [selection.loc]);
    } else {
      flattenedSelection.kind;
      throw createCompilerError$5("FlattenTransform: Unknown kind '".concat(flattenedSelection.kind, "'"));
    }
  });
  return hasFlattened;
}
function mergeSelections(schema, nodeA, nodeB, state, type) {
  var flattenedSelections = /* @__PURE__ */ new Map();
  flattenSelectionsInto(schema, flattenedSelections, nodeA, state, type);
  flattenSelectionsInto(schema, flattenedSelections, nodeB, state, type);
  return Array.from(flattenedSelections.values());
}
function assertUniqueArgsForAlias(field, otherField) {
  if (!areEqualFields(field, otherField)) {
    throw createUserError$2("Expected all fields on the same parent with the name or alias " + "'".concat(field.alias, "' to have the same name and arguments."), [field.loc, otherField.loc]);
  }
}
function shouldFlattenInlineFragment(schema, fragment, state, type) {
  return schema.areEqualTypes(fragment.typeCondition, schema.getRawType(type)) && (state.isForCodegen || fragment.directives.length === 0);
}
function areEqualFields(thisField, thatField) {
  return thisField.kind === thatField.kind && thisField.name === thatField.name && thisField.alias === thatField.alias && areEqualArgs(thisField.args, thatField.args);
}
function areEqualArgs(thisArgs, thatArgs) {
  return thisArgs.length === thatArgs.length && thisArgs.every(function(thisArg, index) {
    var thatArg = thatArgs[index];
    return thisArg.name === thatArg.name && thisArg.value.kind === thatArg.value.kind && thisArg.value.variableName === thatArg.value.variableName && areEqualArgValues(thisArg.value.value, thatArg.value.value);
  });
}
function mergeHandles(nodeA, nodeB) {
  if (!nodeA.handles) {
    return nodeB.handles;
  }
  if (!nodeB.handles) {
    return nodeA.handles;
  }
  var uniqueItems = /* @__PURE__ */ new Map();
  nodeA.handles.concat(nodeB.handles).forEach(function(item) {
    return uniqueItems.set(item.name + item.key, item);
  });
  return Array.from(uniqueItems.values());
}
function transformWithOptions(options) {
  return function flattenTransform(context) {
    return flattenTransformImpl(context, options);
  };
}
var FlattenTransform = {
  transformWithOptions
};
var asyncToGenerator = { exports: {} };
(function(module) {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator2(fn) {
    return function() {
      var self2 = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  module.exports = _asyncToGenerator2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(asyncToGenerator);
var _asyncToGenerator = asyncToGenerator.exports;
var invariant$1 = browser;
var enabled = false;
var traces = [{
  ph: "M",
  pid: 0,
  tid: 0,
  name: "process_name",
  args: {
    name: "relay-compiler"
  }
}, {
  ph: "M",
  pid: 0,
  tid: 0,
  name: "thread_name",
  args: {
    name: "relay-compiler"
  }
}];
var stack = [];
function enable() {
  enabled = true;
}
function getTraces() {
  return traces;
}
function run(name, fn) {
  return instrument(fn, name)();
}
function asyncContext(name, fn) {
  return instrumentAsyncContext(fn, name)();
}
function waitFor(name, fn) {
  return instrumentWait(fn, name)();
}
function instrument(fn, name) {
  var _ref;
  if (!enabled) {
    return fn;
  }
  var profileName = (_ref = name !== null && name !== void 0 ? name : fn.displayName) !== null && _ref !== void 0 ? _ref : fn.name;
  var instrumented = function instrumented2() {
    var traceId = start(profileName);
    try {
      return fn.apply(this, arguments);
    } finally {
      end(traceId);
    }
  };
  instrumented.displayName = profileName;
  return instrumented;
}
function instrumentAsyncContext(fn, name) {
  var _ref2;
  if (!enabled) {
    return fn;
  }
  var profileName = (_ref2 = name !== null && name !== void 0 ? name : fn.displayName) !== null && _ref2 !== void 0 ? _ref2 : fn.name;
  var instrumented = /* @__PURE__ */ function() {
    var _instrumented = _asyncToGenerator(function* () {
      var traceId = start(profileName);
      try {
        return yield fn.apply(this, arguments);
      } finally {
        end(traceId);
      }
    });
    function instrumented2() {
      return _instrumented.apply(this, arguments);
    }
    return instrumented2;
  }();
  instrumented.displayName = profileName;
  return instrumented;
}
function instrumentWait(fn, name) {
  var _ref3;
  if (!enabled) {
    return fn;
  }
  var profileName = (_ref3 = name !== null && name !== void 0 ? name : fn.displayName) !== null && _ref3 !== void 0 ? _ref3 : fn.name;
  var instrumented = /* @__PURE__ */ function() {
    var _instrumented2 = _asyncToGenerator(function* () {
      var traceId = startWait(profileName);
      try {
        return yield fn.apply(this, arguments);
      } finally {
        end(traceId);
      }
    });
    function instrumented2() {
      return _instrumented2.apply(this, arguments);
    }
    return instrumented2;
  }();
  instrumented.displayName = profileName;
  return instrumented;
}
var T_ZERO = process.hrtime();
function microtime() {
  var hrtime = process.hrtime(T_ZERO);
  return 0 | hrtime[0] * 1e6 + Math.round(hrtime[1] / 1e3);
}
function start(name) {
  var beginTrace = {
    ph: "B",
    name,
    pid: 0,
    tid: 0,
    ts: microtime()
  };
  traces.push(beginTrace);
  stack.push(beginTrace);
  return traces.length - 1;
}
var asyncID = 0;
function startWait(name) {
  traces.push({
    ph: "b",
    name,
    cat: "wait",
    id: asyncID++,
    pid: 0,
    tid: 0,
    ts: microtime()
  });
  return traces.length - 1;
}
function end(traceIdx) {
  var trace = traces[traceIdx];
  if (trace.ph === "b") {
    traces.push({
      ph: "e",
      cat: trace.cat,
      name: trace.name,
      id: trace.id,
      pid: trace.pid,
      tid: trace.tid,
      ts: microtime()
    });
    return;
  }
  !(trace.ph === "B") ? invariant$1(false) : void 0;
  !(stack.pop() === trace) ? invariant$1(false) : void 0;
  var prevTrace = traces[traces.length - 1];
  if (trace === prevTrace) {
    traces[traceIdx] = {
      ph: "X",
      name: trace.name,
      pid: trace.pid,
      tid: trace.tid,
      ts: trace.ts,
      dur: microtime() - trace.ts
    };
    return;
  }
  traces.push({
    ph: "E",
    name: trace.name,
    pid: trace.pid,
    tid: trace.tid,
    ts: microtime()
  });
}
var GraphQLCompilerProfiler = {
  enable,
  getTraces,
  run,
  asyncContext,
  waitFor,
  instrument,
  instrumentAsyncContext,
  instrumentWait,
  start,
  startWait,
  end
};
var Profiler$1 = GraphQLCompilerProfiler;
var invariant = browser;
var _require$5 = CompilerError, createUserError$1 = _require$5.createUserError;
var _require2$3 = immutable.exports, ImmutableOrderedMap = _require2$3.OrderedMap;
var CompilerContext = /* @__PURE__ */ function() {
  function CompilerContext2(schema) {
    this._isMutable = false;
    this._documents = new ImmutableOrderedMap();
    this._withTransform = /* @__PURE__ */ new WeakMap();
    this._schema = schema;
  }
  var _proto = CompilerContext2.prototype;
  _proto.documents = function documents() {
    return this._documents.toArray();
  };
  _proto.forEachDocument = function forEachDocument(fn) {
    this._documents.forEach(fn);
  };
  _proto.replace = function replace(node) {
    return this._update(this._documents.update(node.name, function(existing) {
      !existing ? invariant(false) : void 0;
      return node;
    }));
  };
  _proto.add = function add(node) {
    return this._update(this._documents.update(node.name, function(existing) {
      !!existing ? invariant(false) : void 0;
      return node;
    }));
  };
  _proto.addAll = function addAll(nodes) {
    return this.withMutations(function(mutable) {
      return nodes.reduce(function(ctx, definition) {
        return ctx.add(definition);
      }, mutable);
    });
  };
  _proto.applyTransforms = function applyTransforms(transforms, reporter) {
    var _this = this;
    return Profiler$1.run("applyTransforms", function() {
      return transforms.reduce(function(ctx, transform2) {
        return ctx.applyTransform(transform2, reporter);
      }, _this);
    });
  };
  _proto.applyTransform = function applyTransform(transform2, reporter) {
    var transformed = this._withTransform.get(transform2);
    if (!transformed) {
      var start2 = process.hrtime();
      transformed = Profiler$1.instrument(transform2)(this);
      var delta = process.hrtime(start2);
      var deltaMs = Math.round((delta[0] * 1e9 + delta[1]) / 1e6);
      reporter && reporter.reportTime(transform2.name, deltaMs);
      this._withTransform.set(transform2, transformed);
    }
    return transformed;
  };
  _proto.get = function get(name) {
    return this._documents.get(name);
  };
  _proto.getFragment = function getFragment(name, referencedFrom) {
    var node = this._documents.get(name);
    if (node == null) {
      throw createUserError$1("Cannot find fragment '".concat(name, "'."), referencedFrom != null ? [referencedFrom] : null);
    } else if (node.kind !== "Fragment") {
      throw createUserError$1("Cannot find fragment '".concat(name, "', a document with this name exists ") + "but is not a fragment.", [node.loc, referencedFrom].filter(Boolean));
    }
    return node;
  };
  _proto.getRoot = function getRoot(name) {
    var node = this._documents.get(name);
    if (node == null) {
      throw createUserError$1("Cannot find root '".concat(name, "'."));
    } else if (node.kind !== "Root") {
      throw createUserError$1("Cannot find root '".concat(name, "', a document with this name exists but ") + "is not a root.", [node.loc]);
    }
    return node;
  };
  _proto.remove = function remove(name) {
    return this._update(this._documents["delete"](name));
  };
  _proto.withMutations = function withMutations(fn) {
    var mutableCopy = this._update(this._documents.asMutable());
    mutableCopy._isMutable = true;
    var result = fn(mutableCopy);
    result._isMutable = false;
    result._documents = result._documents.asImmutable();
    return this._documents === result._documents ? this : result;
  };
  _proto._update = function _update(documents) {
    var context = this._isMutable ? this : new CompilerContext2(this.getSchema());
    context._documents = documents;
    return context;
  };
  _proto.getSchema = function getSchema() {
    return this._schema;
  };
  return CompilerContext2;
}();
var CompilerContext_1 = CompilerContext;
var OR_LIST_MAX_LENGTH = 5;
var _require$4 = CompilerError, createCompilerError$4 = _require$4.createCompilerError;
function orList$1(items) {
  if (items.length === 0) {
    throw createCompilerError$4("Expected an array of strings. Got empty array");
  }
  if (items.length === 1) {
    return items[0];
  }
  if (items.length > OR_LIST_MAX_LENGTH) {
    return items.slice(0, OR_LIST_MAX_LENGTH).join(", ") + ", ...";
  }
  var selected = items.slice();
  var lastItem = selected.pop();
  return selected.join(", ") + " or " + lastItem;
}
var orList_1 = orList$1;
var _require$3 = CompilerError, createCompilerError$3 = _require$3.createCompilerError;
var ID = "id";
function isExecutableDefinitionAST$1(ast) {
  return ast.kind === "FragmentDefinition" || ast.kind === "OperationDefinition";
}
function isSchemaDefinitionAST$1(ast) {
  return ast.kind === "SchemaDefinition" || ast.kind === "ScalarTypeDefinition" || ast.kind === "ObjectTypeDefinition" || ast.kind === "InterfaceTypeDefinition" || ast.kind === "UnionTypeDefinition" || ast.kind === "EnumTypeDefinition" || ast.kind === "InputObjectTypeDefinition" || ast.kind === "DirectiveDefinition" || ast.kind === "ScalarTypeExtension" || ast.kind === "ObjectTypeExtension" || ast.kind === "InterfaceTypeExtension" || ast.kind === "UnionTypeExtension" || ast.kind === "EnumTypeExtension" || ast.kind === "InputObjectTypeExtension";
}
function generateIDField(schema, type) {
  var idField = schema.getFieldByName(type, "id");
  if (idField == null) {
    throw new createCompilerError$3("Expected an 'id' field on type '".concat(schema.getTypeString(type), "'."));
  }
  var idType = schema.assertScalarFieldType(schema.getFieldType(idField));
  return {
    kind: "ScalarField",
    alias: ID,
    args: [],
    directives: [],
    handles: null,
    loc: {
      kind: "Generated"
    },
    metadata: null,
    name: ID,
    type: idType
  };
}
function getNullableBooleanInput(schema) {
  return schema.assertInputType(schema.expectBooleanType());
}
function getNonNullBooleanInput(schema) {
  return schema.assertInputType(schema.getNonNullType(schema.expectBooleanType()));
}
function getNullableStringInput(schema) {
  return schema.assertInputType(schema.expectStringType());
}
function getNonNullStringInput(schema) {
  return schema.assertInputType(schema.getNonNullType(schema.expectStringType()));
}
function getNullableIdInput(schema) {
  return schema.assertInputType(schema.expectIdType());
}
function getNonNullIdInput(schema) {
  return schema.assertInputType(schema.getNonNullType(schema.expectIdType()));
}
var SchemaUtils = {
  generateIDField,
  isExecutableDefinitionAST: isExecutableDefinitionAST$1,
  isSchemaDefinitionAST: isSchemaDefinitionAST$1,
  getNullableBooleanInput,
  getNonNullBooleanInput,
  getNullableStringInput,
  getNonNullStringInput,
  getNullableIdInput,
  getNonNullIdInput
};
var _interopRequireDefault$2 = interopRequireDefault.exports;
var _createForOfIteratorHelper2$2 = _interopRequireDefault$2(createForOfIteratorHelper.exports);
var _require$2 = CompilerError, createCompilerError$2 = _require$2.createCompilerError;
var _require2$2 = require$$5, SchemaMetaFieldDef = _require2$2.SchemaMetaFieldDef, TypeMetaFieldDef = _require2$2.TypeMetaFieldDef;
function getFieldDefinitionStrict(schema, parentType, fieldName) {
  var type = schema.getRawType(parentType);
  var queryType = schema.getQueryType();
  var isQueryType = queryType != null && schema.areEqualTypes(type, queryType);
  var hasTypeName = schema.isAbstractType(type) || schema.isObject(type);
  var schemaFieldDef;
  if (isQueryType && fieldName === SchemaMetaFieldDef.name) {
    schemaFieldDef = queryType != null ? schema.getFieldByName(queryType, "__schema") : null;
  } else if (isQueryType && fieldName === TypeMetaFieldDef.name) {
    schemaFieldDef = queryType != null ? schema.getFieldByName(queryType, "__type") : null;
  } else if (hasTypeName && fieldName === "__typename") {
    schemaFieldDef = schema.getFieldByName(schema.assertCompositeType(type), "__typename");
  } else if (hasTypeName && fieldName === "__id") {
    schemaFieldDef = schema.getFieldByName(schema.assertCompositeType(type), "__id");
  } else if (schema.isInterface(type) || schema.isObject(type)) {
    var compositeType = schema.assertCompositeType(type);
    if (schema.hasField(compositeType, fieldName)) {
      schemaFieldDef = schema.getFieldByName(compositeType, fieldName);
    } else {
      return null;
    }
  }
  return schemaFieldDef;
}
function getFieldDefinitionLegacy$1(schema, parentType, fieldName, fieldAST) {
  var _schemaFieldDef;
  var schemaFieldDef = getFieldDefinitionStrict(schema, parentType, fieldName);
  if (!schemaFieldDef) {
    schemaFieldDef = getFieldDefinitionLegacyImpl(schema, parentType, fieldName, fieldAST);
  }
  return (_schemaFieldDef = schemaFieldDef) !== null && _schemaFieldDef !== void 0 ? _schemaFieldDef : null;
}
function getFieldDefinitionLegacyImpl(schema, type, fieldName, fieldAST) {
  var rawType = schema.getRawType(type);
  if (schema.isAbstractType(rawType) && fieldAST && fieldAST.directives && fieldAST.directives.some(function(directive) {
    return getName$2(directive) === "fixme_fat_interface";
  })) {
    var possibleTypes = schema.getPossibleTypes(schema.assertAbstractType(rawType));
    var schemaFieldDef;
    var _iterator = (0, _createForOfIteratorHelper2$2["default"])(possibleTypes), _step;
    try {
      var _loop = function _loop2() {
        var possibleType = _step.value;
        var possibleField = schema.getFieldByName(possibleType, fieldName);
        if (possibleField) {
          schemaFieldDef = possibleField;
          if (fieldAST && fieldAST.arguments) {
            var argumentsAllExist = fieldAST.arguments.every(function(argument) {
              return schema.getFieldArgByName(possibleField, getName$2(argument)) != null;
            });
            if (argumentsAllExist) {
              return "break";
            }
          }
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _ret = _loop();
        if (_ret === "break")
          break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return schemaFieldDef;
  }
}
function getName$2(ast) {
  var name = ast.name ? ast.name.value : null;
  if (typeof name !== "string") {
    throw createCompilerError$2("Expected ast node to have a 'name'.", null, [ast]);
  }
  return name;
}
var getFieldDefinition = {
  getFieldDefinitionLegacy: getFieldDefinitionLegacy$1,
  getFieldDefinitionStrict
};
var _interopRequireDefault$1 = interopRequireDefault.exports;
var _objectSpread2 = _interopRequireDefault$1(objectSpread2.exports);
var _createForOfIteratorHelper2$1 = _interopRequireDefault$1(createForOfIteratorHelper.exports);
var _toConsumableArray2 = _interopRequireDefault$1(toConsumableArray.exports);
var Profiler = GraphQLCompilerProfiler;
var orList = orList_1;
var partitionArray = partitionArray_1;
var _require$1 = DefaultHandleKey, DEFAULT_HANDLE_KEY = _require$1.DEFAULT_HANDLE_KEY;
var _require2$1 = CompilerError, createCompilerError$1 = _require2$1.createCompilerError, createUserError = _require2$1.createUserError, eachWithCombinedError = _require2$1.eachWithCombinedError;
var _require3$1 = SchemaUtils, isExecutableDefinitionAST = _require3$1.isExecutableDefinitionAST;
var _require4 = getFieldDefinition, getFieldDefinitionLegacy = _require4.getFieldDefinitionLegacy;
var _require5 = require$$5, parseGraphQL = _require5.parse, parseType$1 = _require5.parseType, print$1 = _require5.print, Source = _require5.Source;
var ARGUMENT_DEFINITIONS = "argumentDefinitions";
var ARGUMENTS = "arguments";
var DEPRECATED_UNCHECKED_ARGUMENTS = "uncheckedArguments_DEPRECATED";
var DIRECTIVE_WHITELIST = /* @__PURE__ */ new Set([ARGUMENT_DEFINITIONS, DEPRECATED_UNCHECKED_ARGUMENTS, ARGUMENTS]);
var CLIENT_FIELD = "__clientField";
var CLIENT_FIELD_HANDLE = "handle";
var CLIENT_FIELD_KEY = "key";
var CLIENT_FIELD_FILTERS = "filters";
var INCLUDE = "include";
var SKIP = "skip";
var IF = "if";
function parse$1(schema, text, filename) {
  var ast = parseGraphQL(new Source(text, filename));
  var parser = new RelayParser(schema.extend(ast), ast.definitions);
  return parser.transform();
}
function transform(schema, definitions) {
  return Profiler.run("RelayParser.transform", function() {
    var parser = new RelayParser(schema, definitions);
    return parser.transform();
  });
}
var RelayParser = /* @__PURE__ */ function() {
  function RelayParser2(schema, definitions) {
    var _this = this;
    this._definitions = /* @__PURE__ */ new Map();
    this._getFieldDefinition = getFieldDefinitionLegacy;
    this._schema = schema;
    var duplicated = /* @__PURE__ */ new Set();
    definitions.forEach(function(def) {
      if (isExecutableDefinitionAST(def)) {
        var name = getName$1(def);
        if (_this._definitions.has(name)) {
          duplicated.add(name);
          return;
        }
        _this._definitions.set(name, def);
      }
    });
    if (duplicated.size) {
      throw createUserError("RelayParser: Encountered duplicate definitions for one or more documents: each document must have a unique name. Duplicated documents:\n" + Array.from(duplicated, function(name) {
        return "- ".concat(name);
      }).join("\n"));
    }
  }
  var _proto = RelayParser2.prototype;
  _proto.transform = function transform2() {
    var _this2 = this;
    var nodes = [];
    var entries = /* @__PURE__ */ new Map();
    eachWithCombinedError(this._definitions, function(_ref) {
      var name = _ref[0], definition = _ref[1];
      var variableDefinitions = _this2._buildArgumentDefinitions(definition);
      entries.set(name, {
        definition,
        variableDefinitions
      });
    });
    eachWithCombinedError(entries.values(), function(_ref2) {
      var definition = _ref2.definition, variableDefinitions = _ref2.variableDefinitions;
      var node = parseDefinition(_this2._schema, _this2._getFieldDefinition, entries, definition, variableDefinitions);
      nodes.push(node);
    });
    return nodes;
  };
  _proto._buildArgumentDefinitions = function _buildArgumentDefinitions(definition) {
    switch (definition.kind) {
      case "OperationDefinition":
        return this._buildOperationArgumentDefinitions(definition);
      case "FragmentDefinition":
        return this._buildFragmentArgumentDefinitions(definition);
      default:
        throw createCompilerError$1("Unexpected ast kind '".concat(definition.kind, "'."), [definition]);
    }
  };
  _proto._buildFragmentArgumentDefinitions = function _buildFragmentArgumentDefinitions(fragment) {
    var _this3 = this;
    var variableDirectives = (fragment.directives || []).filter(function(directive) {
      return getName$1(directive) === ARGUMENT_DEFINITIONS;
    });
    if (!variableDirectives.length) {
      return /* @__PURE__ */ new Map();
    }
    if (variableDirectives.length !== 1) {
      throw createUserError("Directive @".concat(ARGUMENT_DEFINITIONS, " may be defined at most once per ") + "fragment.", null, variableDirectives);
    }
    var variableDirective = variableDirectives[0];
    var args = variableDirective.arguments;
    if (variableDirective == null || !Array.isArray(args)) {
      return /* @__PURE__ */ new Map();
    }
    if (!args.length) {
      throw createUserError("Directive @".concat(ARGUMENT_DEFINITIONS, " requires arguments: remove the ") + "directive to skip defining local variables for this fragment.", null, [variableDirective]);
    }
    var variables = /* @__PURE__ */ new Map();
    args.forEach(function(arg) {
      var _defaultValue$value;
      var argName = getName$1(arg);
      var previousVariable = variables.get(argName);
      if (previousVariable != null) {
        throw createUserError("Duplicate definition for variable '$".concat(argName, "'."), null, [previousVariable.ast, arg]);
      }
      if (arg.value.kind !== "ObjectValue") {
        throw createUserError("Expected definition for variable '$".concat(argName, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [arg.value]);
      }
      var defaultValueNode;
      var typeString;
      arg.value.fields.forEach(function(field) {
        var name = getName$1(field);
        if (name === "type") {
          typeString = transformLiteralValue(field.value, field);
        } else if (name === "defaultValue") {
          defaultValueNode = field.value;
        } else {
          throw createUserError("Expected definition for variable '$".concat(argName, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [arg.value]);
        }
      });
      if (typeof typeString !== "string") {
        throw createUserError("Expected definition for variable '$".concat(argName, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [arg.value]);
      }
      var typeFromAST2 = _this3._schema.getTypeFromAST(parseType$1(typeString));
      if (typeFromAST2 == null) {
        throw createUserError('Unknown type "'.concat(typeString, '" referenced in the argument definitions.'), null, [arg]);
      }
      var type = _this3._schema.asInputType(typeFromAST2);
      if (type == null) {
        throw createUserError('Expected type "'.concat(typeString, '" to be an input type in the "').concat(arg.name.value, '" argument definitions.'), null, [arg.value]);
      }
      var defaultValue = defaultValueNode != null ? transformValue(_this3._schema, defaultValueNode, type, function(variableAst) {
        throw createUserError("Expected 'defaultValue' to be a literal, got a variable.", null, [variableAst]);
      }) : null;
      if (defaultValue != null && defaultValue.kind !== "Literal") {
        throw createUserError("Expected 'defaultValue' to be a literal, got a variable.", [defaultValue.loc]);
      }
      variables.set(argName, {
        ast: arg,
        defaultValue: (_defaultValue$value = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.value) !== null && _defaultValue$value !== void 0 ? _defaultValue$value : null,
        defined: true,
        name: argName,
        type
      });
    });
    return variables;
  };
  _proto._buildOperationArgumentDefinitions = function _buildOperationArgumentDefinitions(operation) {
    var schema = this._schema;
    var variableDefinitions = /* @__PURE__ */ new Map();
    (operation.variableDefinitions || []).forEach(function(def) {
      var name = getName$1(def.variable);
      var typeFromAST2 = schema.getTypeFromAST(def.type);
      if (typeFromAST2 == null) {
        throw createUserError("Unknown type: '".concat(getTypeName(def.type), "'."), null, [def.type]);
      }
      var type = schema.asInputType(typeFromAST2);
      if (type == null) {
        throw createUserError('Expected type "'.concat(getTypeName(def.type), '" to be an input type.'), null, [def.type]);
      }
      var defaultValue = def.defaultValue ? transformLiteralValue(def.defaultValue, def) : null;
      var previousDefinition = variableDefinitions.get(name);
      if (previousDefinition != null) {
        throw createUserError("Duplicate definition for variable '$".concat(name, "'."), null, [previousDefinition.ast, def]);
      }
      variableDefinitions.set(name, {
        ast: def,
        defaultValue,
        defined: true,
        name,
        type
      });
    });
    return variableDefinitions;
  };
  return RelayParser2;
}();
function parseDefinition(schema, getFieldDefinition2, entries, definition, variableDefinitions) {
  var parser = new GraphQLDefinitionParser(schema, getFieldDefinition2, entries, definition, variableDefinitions);
  return parser.transform();
}
var GraphQLDefinitionParser = /* @__PURE__ */ function() {
  function GraphQLDefinitionParser2(schema, getFieldDefinition2, entries, definition, variableDefinitions) {
    this._definition = definition;
    this._entries = entries;
    this._getFieldDefinition = getFieldDefinition2;
    this._schema = schema;
    this._variableDefinitions = variableDefinitions;
    this._unknownVariables = /* @__PURE__ */ new Map();
  }
  var _proto2 = GraphQLDefinitionParser2.prototype;
  _proto2.transform = function transform2() {
    var definition = this._definition;
    switch (definition.kind) {
      case "OperationDefinition":
        return this._transformOperation(definition);
      case "FragmentDefinition":
        return this._transformFragment(definition);
      default:
        throw createCompilerError$1("Unsupported definition type ".concat(definition.kind), [definition]);
    }
  };
  _proto2._recordAndVerifyVariableReference = function _recordAndVerifyVariableReference(variable, name, usedAsType) {
    if (usedAsType == null) {
      if (!this._variableDefinitions.has(name) && !this._unknownVariables.has(name)) {
        this._unknownVariables.set(name, {
          ast: variable,
          type: null
        });
      }
      return;
    }
    var variableDefinition = this._variableDefinitions.get(name);
    if (variableDefinition != null) {
      var effectiveType = variableDefinition.type;
      if (variableDefinition.defaultValue != null) {
        effectiveType = this._schema.getNonNullType(this._schema.getNullableType(effectiveType));
      }
      if (!this._schema.isTypeSubTypeOf(effectiveType, usedAsType)) {
        throw createUserError("Variable '$".concat(name, "' was defined as type '").concat(String(variableDefinition.type), "' but used in a location expecting the type '").concat(String(usedAsType), "'"), null, [variableDefinition.ast, variable]);
      }
    } else {
      var previous = this._unknownVariables.get(name);
      if (!previous || !previous.type) {
        this._unknownVariables.set(name, {
          ast: variable,
          type: usedAsType
        });
      } else {
        var previousVariable = previous.ast, previousType = previous.type;
        if (!(this._schema.isTypeSubTypeOf(usedAsType, previousType) || this._schema.isTypeSubTypeOf(previousType, usedAsType))) {
          throw createUserError("Variable '$".concat(name, "' was used in locations expecting the conflicting types '").concat(String(previousType), "' and '").concat(String(usedAsType), "'."), null, [previousVariable, variable]);
        }
        if (this._schema.isTypeSubTypeOf(usedAsType, previousType)) {
          this._unknownVariables.set(name, {
            ast: variable,
            type: usedAsType
          });
        }
      }
    }
  };
  _proto2._getDirectiveLocations = function _getDirectiveLocations() {
    if (!this._directiveLocations) {
      var directiveDefs = this._schema.getDirectives();
      this._directiveLocations = /* @__PURE__ */ new Map();
      var _iterator = (0, _createForOfIteratorHelper2$1["default"])(directiveDefs), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var def = _step.value;
          this._directiveLocations.set(def.name, def.locations);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return this._directiveLocations;
  };
  _proto2._validateDirectivesLocation = function _validateDirectivesLocation(directives, allowedLocaction) {
    if (!directives || !directives.length) {
      return;
    }
    var directiveLocs = this._getDirectiveLocations();
    var mismatches = directives.filter(function(directive) {
      var name = getName$1(directive);
      if (DIRECTIVE_WHITELIST.has(name)) {
        return false;
      }
      var locs = directiveLocs.get(name);
      if (locs == null) {
        throw createUserError("Unknown directive '".concat(name, "'."), null, [directive]);
      }
      return !locs.some(function(loc) {
        return loc === allowedLocaction;
      });
    });
    if (mismatches.length) {
      var invalidDirectives = mismatches.map(function(directive) {
        return "@" + getName$1(directive);
      }).join(", ");
      throw createUserError("Invalid directives ".concat(invalidDirectives, " found on ").concat(allowedLocaction, "."), null, mismatches);
    }
  };
  _proto2._transformFragment = function _transformFragment(fragment) {
    var directives = this._transformDirectives((fragment.directives || []).filter(function(directive) {
      return getName$1(directive) !== ARGUMENT_DEFINITIONS;
    }), "FRAGMENT_DEFINITION");
    var typeFromAST2 = this._schema.getTypeFromAST(fragment.typeCondition);
    if (typeFromAST2 == null) {
      throw createUserError('Fragment "'.concat(fragment.name.value, '" cannot condition on unknown ') + 'type "'.concat(String(fragment.typeCondition.name.value), '".'), null, [fragment.typeCondition]);
    }
    var type = this._schema.asCompositeType(typeFromAST2);
    if (type == null) {
      throw createUserError('Fragment "'.concat(fragment.name.value, '" cannot condition on non composite ') + 'type "'.concat(String(type), '".'), null, [fragment.typeCondition]);
    }
    var selections = this._transformSelections(fragment.selectionSet, type, fragment.typeCondition);
    var argumentDefinitions = (0, _toConsumableArray2["default"])(buildArgumentDefinitions(this._variableDefinitions));
    var _iterator2 = (0, _createForOfIteratorHelper2$1["default"])(this._unknownVariables), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _step2.value, name = _step2$value[0], variableReference = _step2$value[1];
        argumentDefinitions.push({
          kind: "RootArgumentDefinition",
          loc: buildLocation(variableReference.ast.loc),
          name,
          type: variableReference.type
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return {
      kind: "Fragment",
      directives,
      loc: buildLocation(fragment.loc),
      metadata: null,
      name: getName$1(fragment),
      selections,
      type,
      argumentDefinitions
    };
  };
  _proto2._getLocationFromOperation = function _getLocationFromOperation(definition) {
    switch (definition.operation) {
      case "query":
        return "QUERY";
      case "mutation":
        return "MUTATION";
      case "subscription":
        return "SUBSCRIPTION";
      default:
        definition.operation;
        throw createCompilerError$1("Unknown operation type '".concat(definition.operation, "'."), null, [definition]);
    }
  };
  _proto2._transformOperation = function _transformOperation(definition) {
    var name = getName$1(definition);
    var directives = this._transformDirectives(definition.directives || [], this._getLocationFromOperation(definition));
    var type;
    var operation;
    var schema = this._schema;
    switch (definition.operation) {
      case "query":
        operation = "query";
        type = schema.expectQueryType();
        break;
      case "mutation":
        operation = "mutation";
        type = schema.expectMutationType();
        break;
      case "subscription":
        operation = "subscription";
        type = schema.expectSubscriptionType();
        break;
      default:
        definition.operation;
        throw createCompilerError$1("Unknown operation type '".concat(definition.operation, "'."), null, [definition]);
    }
    if (!definition.selectionSet) {
      throw createUserError("Expected operation to have selections.", null, [definition]);
    }
    var selections = this._transformSelections(definition.selectionSet, type);
    var argumentDefinitions = buildArgumentDefinitions(this._variableDefinitions);
    if (this._unknownVariables.size !== 0) {
      throw createUserError("Query '".concat(name, "' references undefined variables."), null, Array.from(this._unknownVariables.values(), function(variableReference) {
        return variableReference.ast;
      }));
    }
    return {
      kind: "Root",
      operation,
      loc: buildLocation(definition.loc),
      metadata: null,
      name,
      argumentDefinitions,
      directives,
      selections,
      type
    };
  };
  _proto2._transformSelections = function _transformSelections(selectionSet, parentType, parentTypeAST) {
    var _this4 = this;
    return selectionSet.selections.map(function(selection) {
      var node;
      if (selection.kind === "Field") {
        node = _this4._transformField(selection, parentType);
      } else if (selection.kind === "FragmentSpread") {
        node = _this4._transformFragmentSpread(selection, parentType, parentTypeAST);
      } else if (selection.kind === "InlineFragment") {
        node = _this4._transformInlineFragment(selection, parentType, parentTypeAST);
      } else {
        selection.kind;
        throw createCompilerError$1("Unknown ast kind '".concat(selection.kind, "'."), [selection]);
      }
      var _this4$_splitConditio = _this4._splitConditions(node.directives), conditions = _this4$_splitConditio[0], directives = _this4$_splitConditio[1];
      var conditionalNodes = applyConditions(conditions, [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
        directives
      })]);
      if (conditionalNodes.length !== 1) {
        throw createCompilerError$1("Expected exactly one condition node.", null, selection.directives);
      }
      return conditionalNodes[0];
    });
  };
  _proto2._transformInlineFragment = function _transformInlineFragment(fragment, parentType, parentTypeAST) {
    var schema = this._schema;
    var typeCondition = fragment.typeCondition != null ? schema.getTypeFromAST(fragment.typeCondition) : parentType;
    if (typeCondition == null) {
      var _fragment$typeConditi;
      throw createUserError("Inline fragments can only be on object, interface or union types" + ", got unknown type '".concat(getTypeName(fragment.typeCondition), "'."), null, [(_fragment$typeConditi = fragment.typeCondition) !== null && _fragment$typeConditi !== void 0 ? _fragment$typeConditi : fragment]);
    }
    var typeConditionName = schema.getTypeString(typeCondition);
    typeCondition = schema.asCompositeType(typeCondition);
    if (typeCondition == null) {
      var _fragment$typeConditi2;
      throw createUserError("Inline fragments can only be on object, interface or union types" + ", got '".concat(typeConditionName, "'."), null, [(_fragment$typeConditi2 = fragment.typeCondition) !== null && _fragment$typeConditi2 !== void 0 ? _fragment$typeConditi2 : fragment]);
    }
    var rawParentType = this._schema.assertCompositeType(this._schema.getRawType(parentType));
    checkFragmentSpreadTypeCompatibility(this._schema, typeCondition, rawParentType, null, fragment.typeCondition, parentTypeAST);
    var directives = this._transformDirectives(fragment.directives || [], "INLINE_FRAGMENT");
    var selections = this._transformSelections(fragment.selectionSet, typeCondition, fragment.typeCondition);
    return {
      kind: "InlineFragment",
      directives,
      loc: buildLocation(fragment.loc),
      metadata: null,
      selections,
      typeCondition
    };
  };
  _proto2._transformFragmentSpread = function _transformFragmentSpread(fragmentSpread, parentType, parentTypeAST) {
    var _this5 = this;
    var fragmentName = getName$1(fragmentSpread);
    var _partitionArray = partitionArray(fragmentSpread.directives || [], function(directive) {
      var name = getName$1(directive);
      return name === ARGUMENTS || name === DEPRECATED_UNCHECKED_ARGUMENTS;
    }), argumentDirectives = _partitionArray[0], otherDirectives = _partitionArray[1];
    if (argumentDirectives.length > 1) {
      throw createUserError("Directive @".concat(ARGUMENTS, " may be used at most once per a fragment spread."), null, argumentDirectives);
    }
    var fragmentDefinition = this._entries.get(fragmentName);
    if (fragmentDefinition == null) {
      throw createUserError("Unknown fragment '".concat(fragmentName, "'."), null, [fragmentSpread.name]);
    }
    var fragmentTypeNode = getFragmentType(fragmentDefinition.definition);
    var fragmentType = this._schema.assertCompositeType(this._schema.expectTypeFromAST(fragmentTypeNode));
    var rawParentType = this._schema.assertCompositeType(this._schema.getRawType(parentType));
    checkFragmentSpreadTypeCompatibility(this._schema, fragmentType, rawParentType, fragmentSpread.name.value, fragmentSpread, parentTypeAST);
    var fragmentArgumentDefinitions = fragmentDefinition.variableDefinitions;
    var argumentsDirective = argumentDirectives[0];
    var args;
    if (argumentsDirective != null) {
      var isDeprecatedUncheckedArguments = getName$1(argumentsDirective) === DEPRECATED_UNCHECKED_ARGUMENTS;
      var hasInvalidArgument = false;
      args = (argumentsDirective.arguments || []).map(function(arg) {
        var _argumentDefinition$t;
        var argName = getName$1(arg);
        var argValue = arg.value;
        var argumentDefinition = fragmentArgumentDefinitions.get(argName);
        var argumentType = (_argumentDefinition$t = argumentDefinition === null || argumentDefinition === void 0 ? void 0 : argumentDefinition.type) !== null && _argumentDefinition$t !== void 0 ? _argumentDefinition$t : null;
        if (argValue.kind === "Variable") {
          if (argumentDefinition == null && !isDeprecatedUncheckedArguments) {
            throw createUserError("Variable @".concat(ARGUMENTS, " values are only supported when the ") + "argument is defined with @".concat(ARGUMENT_DEFINITIONS, ". Check ") + "the definition of fragment '".concat(fragmentName, "'."), null, [arg.value, fragmentDefinition.definition]);
          }
          hasInvalidArgument = hasInvalidArgument || argumentDefinition == null;
          return {
            kind: "Argument",
            loc: buildLocation(arg.loc),
            name: argName,
            value: _this5._transformVariable(argValue, null),
            type: null
          };
        } else {
          if (argumentType == null) {
            throw createUserError("Literal @".concat(ARGUMENTS, " values are only supported when the ") + "argument is defined with @".concat(ARGUMENT_DEFINITIONS, ". Check ") + "the definition of fragment '".concat(fragmentName, "'."), null, [arg.value, fragmentDefinition.definition]);
          }
          var value = _this5._transformValue(argValue, argumentType);
          return {
            kind: "Argument",
            loc: buildLocation(arg.loc),
            name: argName,
            value,
            type: argumentType
          };
        }
      });
      if (isDeprecatedUncheckedArguments && !hasInvalidArgument) {
        throw createUserError("Invalid use of @".concat(DEPRECATED_UNCHECKED_ARGUMENTS, ": all arguments ") + "are defined, use @".concat(ARGUMENTS, " instead."), null, [argumentsDirective]);
      }
    }
    var directives = this._transformDirectives(otherDirectives, "FRAGMENT_SPREAD");
    return {
      kind: "FragmentSpread",
      args: args || [],
      metadata: null,
      loc: buildLocation(fragmentSpread.loc),
      name: fragmentName,
      directives
    };
  };
  _proto2._transformField = function _transformField(field, parentType) {
    var _field$alias$value, _field$alias;
    var schema = this._schema;
    var name = getName$1(field);
    var fieldDef = this._getFieldDefinition(schema, parentType, name, field);
    if (fieldDef == null) {
      throw createUserError("Unknown field '".concat(name, "' on type '").concat(schema.getTypeString(parentType), "'."), null, [field]);
    }
    var alias = (_field$alias$value = (_field$alias = field.alias) === null || _field$alias === void 0 ? void 0 : _field$alias.value) !== null && _field$alias$value !== void 0 ? _field$alias$value : name;
    var args = this._transformArguments(field.arguments || [], schema.getFieldArgs(fieldDef), fieldDef);
    var _partitionArray2 = partitionArray(field.directives || [], function(directive) {
      return getName$1(directive) !== CLIENT_FIELD;
    }), otherDirectives = _partitionArray2[0], clientFieldDirectives = _partitionArray2[1];
    var directives = this._transformDirectives(otherDirectives, "FIELD");
    var type = schema.getFieldType(fieldDef);
    var handles = this._transformHandle(name, args, clientFieldDirectives);
    if (schema.isLeafType(schema.getRawType(type))) {
      if (field.selectionSet && field.selectionSet.selections && field.selectionSet.selections.length) {
        throw createUserError("Expected no selections for scalar field '".concat(name, "'."), null, [field]);
      }
      return {
        kind: "ScalarField",
        alias,
        args,
        directives,
        handles,
        loc: buildLocation(field.loc),
        metadata: null,
        name,
        type: schema.assertScalarFieldType(type)
      };
    } else {
      var selections = field.selectionSet ? this._transformSelections(field.selectionSet, type) : null;
      if (selections == null || selections.length === 0) {
        throw createUserError("Expected at least one selection for non-scalar field '".concat(name, "' on type '").concat(schema.getTypeString(type), "'."), null, [field]);
      }
      return {
        kind: "LinkedField",
        alias,
        args,
        connection: false,
        directives,
        handles,
        loc: buildLocation(field.loc),
        metadata: null,
        name,
        selections,
        type: schema.assertLinkedFieldType(type)
      };
    }
  };
  _proto2._transformHandle = function _transformHandle(fieldName, fieldArgs, clientFieldDirectives) {
    var handles = null;
    clientFieldDirectives.forEach(function(clientFieldDirective) {
      var handleArgument = (clientFieldDirective.arguments || []).find(function(arg) {
        return getName$1(arg) === CLIENT_FIELD_HANDLE;
      });
      if (handleArgument) {
        var name = null;
        var key = DEFAULT_HANDLE_KEY;
        var filters = null;
        var maybeHandle = transformLiteralValue(handleArgument.value, handleArgument);
        if (typeof maybeHandle !== "string") {
          throw createUserError("Expected a string literal argument for the @".concat(CLIENT_FIELD, " directive."), null, [handleArgument.value]);
        }
        name = maybeHandle;
        var keyArgument = (clientFieldDirective.arguments || []).find(function(arg) {
          return getName$1(arg) === CLIENT_FIELD_KEY;
        });
        if (keyArgument) {
          var maybeKey = transformLiteralValue(keyArgument.value, keyArgument);
          if (typeof maybeKey !== "string") {
            throw createUserError("Expected a string literal argument for the @".concat(CLIENT_FIELD, " directive."), null, [keyArgument.value]);
          }
          key = maybeKey;
        }
        var filtersArgument = (clientFieldDirective.arguments || []).find(function(arg) {
          return getName$1(arg) === CLIENT_FIELD_FILTERS;
        });
        if (filtersArgument) {
          var maybeFilters = transformLiteralValue(filtersArgument.value, filtersArgument);
          if (!(Array.isArray(maybeFilters) && maybeFilters.every(function(filter) {
            return typeof filter === "string" && fieldArgs.some(function(fieldArg) {
              return fieldArg.name === filter;
            });
          }))) {
            throw createUserError("Expected an array of argument names on field '".concat(fieldName, "'."), null, [filtersArgument.value]);
          }
          filters = maybeFilters;
        }
        var dynamicKeyArgument = (clientFieldDirective.arguments || []).find(function(arg) {
          return getName$1(arg) === "dynamicKey_UNSTABLE";
        });
        if (dynamicKeyArgument != null) {
          throw createUserError("Dynamic keys are only supported with @connection.", null, [dynamicKeyArgument.value]);
        }
        handles = handles || [];
        handles.push({
          name,
          key,
          filters,
          dynamicKey: null
        });
      }
    });
    return handles;
  };
  _proto2._transformDirectives = function _transformDirectives(directives, location) {
    var _this6 = this;
    this._validateDirectivesLocation(directives, location);
    return directives.map(function(directive) {
      var name = getName$1(directive);
      var directiveDef = _this6._schema.getDirective(name);
      if (directiveDef == null) {
        throw createUserError("Unknown directive '".concat(name, "'."), null, [directive]);
      }
      var args = _this6._transformArguments(directive.arguments || [], directiveDef.args.map(function(item) {
        return {
          name: item.name,
          type: item.type,
          defaultValue: item.defaultValue
        };
      }), null, name);
      return {
        kind: "Directive",
        loc: buildLocation(directive.loc),
        name,
        args
      };
    });
  };
  _proto2._transformArguments = function _transformArguments(args, argumentDefinitions, field, directiveName) {
    var _this7 = this;
    return args.map(function(arg) {
      var argName = getName$1(arg);
      var argDef = argumentDefinitions.find(function(def) {
        return def.name === argName;
      });
      if (argDef == null) {
        var message = "Unknown argument '".concat(argName, "'") + (field ? " on field '".concat(_this7._schema.getFieldName(field), "'") + " of type '".concat(_this7._schema.getTypeString(_this7._schema.getFieldParentType(field)), "'.") : directiveName != null ? " on directive '@".concat(directiveName, "'.") : ".");
        throw createUserError(message, null, [arg]);
      }
      var value = _this7._transformValue(arg.value, argDef.type);
      return {
        kind: "Argument",
        loc: buildLocation(arg.loc),
        name: argName,
        value,
        type: argDef.type
      };
    });
  };
  _proto2._splitConditions = function _splitConditions(mixedDirectives) {
    var _partitionArray3 = partitionArray(mixedDirectives, function(directive) {
      return directive.name === INCLUDE || directive.name === SKIP;
    }), conditionDirectives = _partitionArray3[0], otherDirectives = _partitionArray3[1];
    var conditions = conditionDirectives.map(function(directive) {
      var passingValue = directive.name === INCLUDE;
      var arg = directive.args[0];
      if (arg == null || arg.name !== IF) {
        throw createUserError("Expected an 'if' argument to @".concat(directive.name, "."), [directive.loc]);
      }
      if (!(arg.value.kind === "Variable" || arg.value.kind === "Literal")) {
        throw createUserError("Expected the 'if' argument to @".concat(directive.name, " to be a variable or literal."), [directive.loc]);
      }
      return {
        kind: "Condition",
        condition: arg.value,
        loc: directive.loc,
        passingValue,
        selections: []
      };
    });
    var sortedConditions = conditions.sort(function(a, b) {
      if (a.condition.kind === "Variable" && b.condition.kind === "Variable") {
        return a.condition.variableName < b.condition.variableName ? -1 : a.condition.variableName > b.condition.variableName ? 1 : 0;
      } else {
        return a.condition.kind === "Variable" ? 1 : b.condition.kind === "Variable" ? -1 : 0;
      }
    });
    return [sortedConditions, otherDirectives];
  };
  _proto2._transformVariable = function _transformVariable(ast, usedAsType) {
    var variableName = getName$1(ast);
    this._recordAndVerifyVariableReference(ast, variableName, usedAsType);
    return {
      kind: "Variable",
      loc: buildLocation(ast.loc),
      variableName,
      type: usedAsType
    };
  };
  _proto2._transformValue = function _transformValue(ast, type) {
    var _this8 = this;
    return transformValue(this._schema, ast, type, function(variableAst, variableType) {
      return _this8._transformVariable(variableAst, variableType);
    });
  };
  return GraphQLDefinitionParser2;
}();
function transformValue(schema, ast, type, transformVariable) {
  if (ast.kind === "Variable") {
    return transformVariable(ast, type);
  } else if (ast.kind === "NullValue") {
    if (schema.isNonNull(type)) {
      throw createUserError("Expected a value matching type '".concat(String(type), "'."), null, [ast]);
    }
    return {
      kind: "Literal",
      loc: buildLocation(ast.loc),
      value: null
    };
  } else {
    return transformNonNullLiteral(schema, ast, type, transformVariable);
  }
}
function transformNonNullLiteral(schema, ast, type, transformVariable) {
  var nullableType = schema.getNullableType(type);
  if (schema.isList(nullableType)) {
    if (ast.kind !== "ListValue") {
      if (!schema.isInputType(schema.getListItemType(nullableType))) {
        throw createUserError("Expected type ".concat(schema.getTypeString(nullableType), " to be an input type."), null, [ast]);
      }
      return transformValue(schema, ast, schema.assertInputType(schema.getListItemType(nullableType)), transformVariable);
    }
    var itemType = schema.assertInputType(schema.getListItemType(nullableType));
    var literalList = [];
    var items = [];
    var areAllItemsScalar = true;
    ast.values.forEach(function(item) {
      var itemValue = transformValue(schema, item, itemType, transformVariable);
      if (itemValue.kind === "Literal") {
        literalList.push(itemValue.value);
      }
      items.push(itemValue);
      areAllItemsScalar = areAllItemsScalar && itemValue.kind === "Literal";
    });
    if (areAllItemsScalar) {
      return {
        kind: "Literal",
        loc: buildLocation(ast.loc),
        value: literalList
      };
    } else {
      return {
        kind: "ListValue",
        loc: buildLocation(ast.loc),
        items
      };
    }
  } else if (schema.isInputObject(nullableType)) {
    if (ast.kind !== "ObjectValue") {
      throw createUserError("Expected a value matching type '".concat(schema.getTypeString(type), "'."), null, [ast]);
    }
    var literalObject = {};
    var fields = [];
    var areAllFieldsScalar = true;
    var inputType = schema.assertInputObjectType(nullableType);
    var requiredFieldNames = new Set(schema.getFields(inputType).filter(function(field) {
      return schema.isNonNull(schema.getFieldType(field));
    }).map(function(field) {
      return schema.getFieldName(field);
    }));
    var seenFields = /* @__PURE__ */ new Map();
    ast.fields.forEach(function(field) {
      var fieldName = getName$1(field);
      var seenField = seenFields.get(fieldName);
      if (seenField) {
        throw createUserError("Duplicated field name '".concat(fieldName, "' in the input object."), null, [field, seenField]);
      }
      var fieldID = schema.getFieldByName(inputType, fieldName);
      if (!fieldID) {
        throw createUserError("Unknown field '".concat(fieldName, "' on type '").concat(schema.getTypeString(inputType), "'."), null, [field]);
      }
      var fieldConfig = schema.getFieldConfig(fieldID);
      var fieldType = schema.assertInputType(fieldConfig.type);
      var fieldValue = transformValue(schema, field.value, fieldType, transformVariable);
      if (fieldValue.kind === "Literal") {
        literalObject[field.name.value] = fieldValue.value;
      }
      fields.push({
        kind: "ObjectFieldValue",
        loc: buildLocation(field.loc),
        name: fieldName,
        value: fieldValue
      });
      seenFields.set(fieldName, field);
      requiredFieldNames["delete"](fieldName);
      areAllFieldsScalar = areAllFieldsScalar && fieldValue.kind === "Literal";
    });
    if (requiredFieldNames.size > 0) {
      var requiredFieldStr = Array.from(requiredFieldNames).map(function(item) {
        return "'".concat(item, "'");
      }).join(", ");
      throw createUserError("Missing non-optional field".concat(requiredFieldNames.size > 1 ? "s:" : "", " ").concat(requiredFieldStr, " for input type '").concat(schema.getTypeString(inputType), "'."), null, [ast]);
    }
    if (areAllFieldsScalar) {
      return {
        kind: "Literal",
        loc: buildLocation(ast.loc),
        value: literalObject
      };
    } else {
      return {
        kind: "ObjectValue",
        loc: buildLocation(ast.loc),
        fields
      };
    }
  } else if (schema.isId(nullableType)) {
    if (ast.kind === "IntValue") {
      return {
        kind: "Literal",
        loc: buildLocation(ast.loc),
        value: parseInt(ast.value, 10)
      };
    } else if (ast.kind === "StringValue") {
      return {
        kind: "Literal",
        loc: buildLocation(ast.loc),
        value: ast.value
      };
    } else {
      throw createUserError("Invalid value, expected a value matching type '".concat(schema.getTypeString(type), "'."), null, [ast]);
    }
  } else if (schema.isEnum(nullableType)) {
    var enumType = schema.assertEnumType(nullableType);
    var value = schema.parseLiteral(enumType, ast);
    if (value == null) {
      var suggestions = schema.getEnumValues(enumType);
      throw createUserError("Expected a value matching type '".concat(schema.getTypeString(type), "'. Possible values: ").concat(orList(suggestions), "?'"), null, [ast]);
    }
    return {
      kind: "Literal",
      loc: buildLocation(ast.loc),
      value
    };
  } else if (schema.isScalar(nullableType)) {
    var _value = schema.parseLiteral(schema.assertScalarType(nullableType), ast);
    if (_value == null) {
      throw createUserError("Expected a value matching type '".concat(schema.getTypeString(type), "'."), null, [ast]);
    }
    return {
      kind: "Literal",
      loc: buildLocation(ast.loc),
      value: _value
    };
  } else {
    throw createCompilerError$1("Unsupported type '".concat(schema.getTypeString(type), "' for input value, expected a GraphQLList, ") + "GraphQLInputObjectType, GraphQLEnumType, or GraphQLScalarType.", null, [ast]);
  }
}
function transformLiteralValue(ast, context) {
  switch (ast.kind) {
    case "IntValue":
      return parseInt(ast.value, 10);
    case "FloatValue":
      return parseFloat(ast.value);
    case "StringValue":
      return ast.value;
    case "BooleanValue":
      return ast.value;
    case "EnumValue":
      return ast.value;
    case "ListValue":
      return ast.values.map(function(item) {
        return transformLiteralValue(item, context);
      });
    case "NullValue":
      return null;
    case "ObjectValue": {
      var objectValue = {};
      ast.fields.forEach(function(field) {
        var fieldName = getName$1(field);
        var value = transformLiteralValue(field.value, context);
        objectValue[fieldName] = value;
      });
      return objectValue;
    }
    case "Variable":
      throw createUserError("Unexpected variable where a literal (static) value is required.", null, [ast, context]);
    default:
      ast.kind;
      throw createCompilerError$1("Unknown ast kind '".concat(ast.kind, "'."), [ast]);
  }
}
function buildArgumentDefinitions(variables) {
  return Array.from(variables.values(), function(_ref3) {
    var ast = _ref3.ast, name = _ref3.name, defaultValue = _ref3.defaultValue, type = _ref3.type;
    return {
      kind: "LocalArgumentDefinition",
      loc: buildLocation(ast.loc),
      name,
      type,
      defaultValue
    };
  });
}
function buildLocation(loc) {
  if (loc == null) {
    return {
      kind: "Unknown"
    };
  }
  return {
    kind: "Source",
    start: loc.start,
    end: loc.end,
    source: loc.source
  };
}
function applyConditions(conditions, selections) {
  var nextSelections = selections;
  conditions.forEach(function(condition) {
    nextSelections = [(0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, condition), {}, {
      selections: nextSelections
    })];
  });
  return nextSelections;
}
function getName$1(ast) {
  var _ast$name;
  var name = (_ast$name = ast.name) === null || _ast$name === void 0 ? void 0 : _ast$name.value;
  if (typeof name !== "string") {
    throw createCompilerError$1("Expected ast node to have a 'name'.", null, [ast]);
  }
  return name;
}
function getTypeName(ast) {
  return ast ? print$1(ast) : "Undefined Type Name";
}
function getFragmentType(ast) {
  if (ast.kind === "FragmentDefinition") {
    return ast.typeCondition;
  }
  throw createCompilerError$1("Expected ast node to be a FragmentDefinition node.", null, [ast]);
}
function checkFragmentSpreadTypeCompatibility(schema, fragmentType, parentType, fragmentName, fragmentTypeAST, parentTypeAST) {
  if (!schema.doTypesOverlap(fragmentType, schema.assertCompositeType(parentType))) {
    var nodes = [];
    if (parentTypeAST) {
      nodes.push(parentTypeAST);
    }
    if (fragmentTypeAST) {
      nodes.push(fragmentTypeAST);
    }
    var possibleConcreteTypes = schema.isAbstractType(parentType) ? Array.from(schema.getPossibleTypes(schema.assertAbstractType(parentType))) : [];
    var suggestedTypesMessage = "";
    if (possibleConcreteTypes.length !== 0) {
      suggestedTypesMessage = " Possible concrete types include ".concat(possibleConcreteTypes.sort().slice(0, 3).map(function(type) {
        return "'".concat(schema.getTypeString(type), "'");
      }).join(", "), ", etc.");
    }
    throw createUserError((fragmentName != null ? "Fragment '".concat(fragmentName, "' cannot be spread here as objects of ") : "Fragment cannot be spread here as objects of ") + "type '".concat(schema.getTypeString(parentType), "' ") + "can never be of type '".concat(schema.getTypeString(fragmentType), "'.") + suggestedTypesMessage, null, nodes);
  }
}
var RelayParser_1 = {
  parse: parse$1,
  transform
};
var inheritsLoose = { exports: {} };
var setPrototypeOf = { exports: {} };
(function(module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }
  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(setPrototypeOf);
(function(module) {
  var setPrototypeOf$1 = setPrototypeOf.exports;
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf$1(subClass, superClass);
  }
  module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(inheritsLoose);
var _interopRequireDefault = interopRequireDefault.exports;
var _createForOfIteratorHelper2 = _interopRequireDefault(createForOfIteratorHelper.exports);
var _inheritsLoose2 = _interopRequireDefault(inheritsLoose.exports);
var _require = CompilerError, createCompilerError = _require.createCompilerError;
var _require2 = SchemaUtils, isSchemaDefinitionAST = _require2.isSchemaDefinitionAST;
var _require3 = require$$5, GraphQLFloat = _require3.GraphQLFloat, GraphQLInt = _require3.GraphQLInt, GraphQLBoolean = _require3.GraphQLBoolean, GraphQLString = _require3.GraphQLString, GraphQLID = _require3.GraphQLID, parse = _require3.parse, parseType = _require3.parseType, print = _require3.print, valueFromASTUntyped = _require3.valueFromASTUntyped;
var Type = /* @__PURE__ */ function() {
  function Type2(name, isClient) {
    this.name = name;
    this.isClient = isClient;
  }
  var _proto = Type2.prototype;
  _proto.toString = function toString() {
    return this.name;
  };
  _proto.toJSON = function toJSON() {
    return String(this);
  };
  return Type2;
}();
var ScalarType = /* @__PURE__ */ function(_Type) {
  (0, _inheritsLoose2["default"])(ScalarType2, _Type);
  function ScalarType2() {
    return _Type.apply(this, arguments) || this;
  }
  return ScalarType2;
}(Type);
var EnumType = /* @__PURE__ */ function(_Type2) {
  (0, _inheritsLoose2["default"])(EnumType2, _Type2);
  function EnumType2(name, values, isClient) {
    var _this;
    _this = _Type2.call(this, name, isClient) || this;
    _this.values = values;
    return _this;
  }
  return EnumType2;
}(Type);
var UnionType = /* @__PURE__ */ function(_Type3) {
  (0, _inheritsLoose2["default"])(UnionType2, _Type3);
  function UnionType2() {
    return _Type3.apply(this, arguments) || this;
  }
  return UnionType2;
}(Type);
var ObjectType = /* @__PURE__ */ function(_Type4) {
  (0, _inheritsLoose2["default"])(ObjectType2, _Type4);
  function ObjectType2() {
    return _Type4.apply(this, arguments) || this;
  }
  return ObjectType2;
}(Type);
var InputObjectType = /* @__PURE__ */ function(_Type5) {
  (0, _inheritsLoose2["default"])(InputObjectType2, _Type5);
  function InputObjectType2() {
    return _Type5.apply(this, arguments) || this;
  }
  return InputObjectType2;
}(Type);
var InterfaceType = /* @__PURE__ */ function(_Type6) {
  (0, _inheritsLoose2["default"])(InterfaceType2, _Type6);
  function InterfaceType2() {
    return _Type6.apply(this, arguments) || this;
  }
  return InterfaceType2;
}(Type);
var List = /* @__PURE__ */ function() {
  function List2(type) {
    this.ofType = type;
    this._typeString = "[".concat(String(this.ofType), "]");
  }
  var _proto2 = List2.prototype;
  _proto2.toString = function toString() {
    return this._typeString;
  };
  _proto2.toJSON = function toJSON() {
    return this.toString();
  };
  return List2;
}();
var NonNull = /* @__PURE__ */ function() {
  function NonNull2(type) {
    this.ofType = type;
    this._typeString = "".concat(String(this.ofType), "!");
  }
  var _proto3 = NonNull2.prototype;
  _proto3.toString = function toString() {
    return this._typeString;
  };
  _proto3.toJSON = function toJSON() {
    return this.toString();
  };
  return NonNull2;
}();
var Field = function Field2(schema, name, type, belongsTo, args, directives, isClient) {
  this.name = name;
  this.type = type;
  this.belongsTo = belongsTo;
  this.isClient = isClient;
  this.args = parseInputArgumentDefinitionsMap(schema, args);
  this.directives = directives;
};
function unwrap(type) {
  if (type instanceof NonNull || type instanceof List) {
    return unwrap(type.ofType);
  }
  return type;
}
function hasConcreteTypeThatImplements(schema, type, interfaceType) {
  return _isAbstractType(type) && getConcreteTypes(schema, type).some(function(concreteType) {
    return schema.implementsInterface(schema.assertCompositeType(concreteType), interfaceType);
  });
}
function getConcreteTypes(schema, type) {
  var concreteTypes = /* @__PURE__ */ new Set();
  schema.getPossibleTypes(type).forEach(function(possibleType) {
    if (_isObject(possibleType)) {
      concreteTypes.add(possibleType);
    }
  });
  return Array.from(concreteTypes);
}
var TYPENAME_FIELD = "__typename";
var CLIENT_ID_FIELD = "__id";
var QUERY_TYPE_KEY = Symbol("Query");
var MUTATION_TYPE_KEY = Symbol("Mutation");
var SUBSCRIPTION_TYPE_KEY = Symbol("Subscription");
function _isScalar(type) {
  return type instanceof ScalarType;
}
function _isObject(type) {
  return type instanceof ObjectType;
}
function _isEnum(type) {
  return type instanceof EnumType;
}
function _isUnion(type) {
  return type instanceof UnionType;
}
function _isInputObject(type) {
  return type instanceof InputObjectType;
}
function _isInterface(type) {
  return type instanceof InterfaceType;
}
function _isWrapper(type) {
  return type instanceof List || type instanceof NonNull;
}
function isBaseType(type) {
  return type instanceof ScalarType || type instanceof ObjectType || type instanceof EnumType || type instanceof UnionType || type instanceof InputObjectType || type instanceof InterfaceType;
}
function _isAbstractType(type) {
  return type instanceof UnionType || type instanceof InterfaceType;
}
function _isCompositeType(type) {
  return type instanceof ObjectType || type instanceof UnionType || type instanceof InterfaceType;
}
function _isInputType(type) {
  return type instanceof InputObjectType || type instanceof ScalarType || type instanceof EnumType;
}
var Schema = /* @__PURE__ */ function() {
  function Schema2(typeMap) {
    var _this2 = this;
    this._typeMap = typeMap;
    this._typeWrappersMap = /* @__PURE__ */ new Map();
    this._fieldsMap = /* @__PURE__ */ new Map();
    this._typeNameMap = /* @__PURE__ */ new Map();
    this._clientIdMap = /* @__PURE__ */ new Map();
    this._directiveMap = new Map(typeMap.getDirectives().map(function(directive) {
      return [directive.name, {
        locations: directive.locations,
        args: parseInputArgumentDefinitions(_this2, directive.args),
        name: directive.name,
        isClient: directive.isClient
      }];
    }));
  }
  var _proto4 = Schema2.prototype;
  _proto4.getTypes = function getTypes() {
    return this._typeMap.getTypes();
  };
  _proto4.getTypeFromAST = function getTypeFromAST(typeNode) {
    if (typeNode.kind === "NonNullType") {
      var innerType = this.getTypeFromAST(typeNode.type);
      if (!innerType) {
        return;
      }
      if (innerType instanceof NonNull) {
        throw createCompilerError("Unable to wrap non-nullable type with non-null wrapper.");
      }
      var cacheKey = "".concat(this.getTypeString(innerType), "!");
      var type = this._typeWrappersMap.get(cacheKey);
      if (type) {
        return type;
      }
      type = new NonNull(innerType);
      this._typeWrappersMap.set(cacheKey, type);
      return type;
    } else if (typeNode.kind === "ListType") {
      var _innerType = this.getTypeFromAST(typeNode.type);
      if (!_innerType) {
        return;
      }
      var _cacheKey = "[".concat(this.getTypeString(_innerType), "]");
      var _type = this._typeWrappersMap.get(_cacheKey);
      if (_type) {
        return _type;
      }
      _type = new List(_innerType);
      this._typeWrappersMap.set(_cacheKey, _type);
      return _type;
    }
    return this._typeMap.getTypeByName(typeNode.name.value);
  };
  _proto4._getRawType = function _getRawType(typeName) {
    var type = this._typeWrappersMap.get(typeName);
    if (type) {
      return type;
    }
    if (typeof typeName === "string") {
      return this.getTypeFromAST(parseType(typeName));
    } else {
      var operationType;
      if (typeName === QUERY_TYPE_KEY) {
        operationType = this._typeMap.getQueryType();
      } else if (typeName === MUTATION_TYPE_KEY) {
        operationType = this._typeMap.getMutationType();
      } else if (typeName === SUBSCRIPTION_TYPE_KEY) {
        operationType = this._typeMap.getSubscriptionType();
      }
      if (operationType instanceof ObjectType) {
        return operationType;
      }
    }
  };
  _proto4.getTypeFromString = function getTypeFromString(typeName) {
    return this._getRawType(typeName);
  };
  _proto4.expectTypeFromString = function expectTypeFromString(typeName) {
    var type = this.getTypeFromString(typeName);
    if (type == null) {
      throw createCompilerError("Unknown type: '".concat(typeName, "'."));
    }
    return type;
  };
  _proto4.expectTypeFromAST = function expectTypeFromAST(ast) {
    var type = this.getTypeFromAST(ast);
    if (type == null) {
      throw createCompilerError("Unknown type: '".concat(print(ast), "'."), null, [ast]);
    }
    return type;
  };
  _proto4.getNonNullType = function getNonNullType(type) {
    if (type instanceof NonNull) {
      return type;
    }
    var cacheKey = "".concat(String(type), "!");
    var nonNullType = this._typeWrappersMap.get(cacheKey);
    if (nonNullType) {
      return nonNullType;
    }
    nonNullType = new NonNull(type);
    this._typeWrappersMap.set(cacheKey, nonNullType);
    return nonNullType;
  };
  _proto4.getRawType = function getRawType(type) {
    return unwrap(type);
  };
  _proto4.getNullableType = function getNullableType2(type) {
    if (type instanceof NonNull) {
      return type.ofType;
    }
    return type;
  };
  _proto4.getListItemType = function getListItemType(type) {
    if (type instanceof List) {
      return type.ofType;
    }
    return type;
  };
  _proto4.mapListItemType = function mapListItemType(type, mapper) {
    if (!(type instanceof List)) {
      throw createCompilerError("Expected List type");
    }
    var innerType = mapper(type.ofType);
    var cacheKey = "[".concat(this.getTypeString(innerType), "]");
    var newType = this._typeWrappersMap.get(cacheKey);
    if (newType) {
      return newType;
    }
    newType = new List(innerType);
    this._typeWrappersMap.set(cacheKey, newType);
    return newType;
  };
  _proto4.areEqualTypes = function areEqualTypes(typeA, typeB) {
    if (typeA === typeB) {
      return true;
    }
    if (typeA instanceof NonNull && typeB instanceof NonNull) {
      return this.areEqualTypes(typeA.ofType, typeB.ofType);
    }
    if (typeA instanceof List && typeB instanceof List) {
      return this.areEqualTypes(typeA.ofType, typeB.ofType);
    }
    if (isBaseType(typeA) && isBaseType(typeB)) {
      return typeA.name === typeB.name;
    }
    return false;
  };
  _proto4.mayImplement = function mayImplement(type, interfaceType) {
    return this.areEqualTypes(type, interfaceType) || this.implementsInterface(type, interfaceType) || this.isAbstractType(type) && hasConcreteTypeThatImplements(this, type, interfaceType);
  };
  _proto4.implementsInterface = function implementsInterface(type, interfaceType) {
    var _this3 = this;
    return this.getInterfaces(type).some(function(typeInterface) {
      return _this3.areEqualTypes(typeInterface, interfaceType);
    });
  };
  _proto4.canHaveSelections = function canHaveSelections(type) {
    return this.isObject(type) || this.isInterface(type);
  };
  _proto4.getTypeString = function getTypeString(type) {
    return type.toString();
  };
  _proto4.isTypeSubTypeOf = function isTypeSubTypeOf2(maybeSubType, superType) {
    if (maybeSubType === superType) {
      return true;
    }
    if (superType instanceof NonNull) {
      if (maybeSubType instanceof NonNull) {
        return this.isTypeSubTypeOf(maybeSubType.ofType, superType.ofType);
      }
      return false;
    }
    if (maybeSubType instanceof NonNull) {
      return this.isTypeSubTypeOf(maybeSubType.ofType, superType);
    }
    if (superType instanceof List) {
      if (maybeSubType instanceof List) {
        return this.isTypeSubTypeOf(maybeSubType.ofType, superType.ofType);
      }
      return false;
    }
    if (maybeSubType instanceof List) {
      return false;
    }
    if (this.isAbstractType(superType) && this.isObject(maybeSubType) && this.isPossibleType(this.assertAbstractType(superType), this.assertObjectType(maybeSubType))) {
      return true;
    }
    return false;
  };
  _proto4.doTypesOverlap = function doTypesOverlap2(typeA, typeB) {
    var _this4 = this;
    if (typeA === typeB) {
      return true;
    }
    if (_isAbstractType(typeA)) {
      if (_isAbstractType(typeB)) {
        return Array.from(this.getPossibleTypes(typeA)).some(function(type) {
          if (_isObject(type)) {
            return _this4.isPossibleType(typeB, type);
          }
        });
      }
      return this.isPossibleType(typeA, typeB);
    }
    if (_isAbstractType(typeB)) {
      return this.isPossibleType(typeB, typeA);
    }
    return false;
  };
  _proto4.isPossibleType = function isPossibleType(superType, maybeSubType) {
    return this._typeMap.getPossibleTypeSet(superType).has(maybeSubType);
  };
  _proto4.assertScalarFieldType = function assertScalarFieldType(type) {
    if (_isWrapper(type) && !_isScalar(unwrap(type)) && !_isEnum(unwrap(type)) || !_isWrapper(type) && !_isScalar(type) && !_isEnum(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be a Scalar or Enum type."));
    }
    return type;
  };
  _proto4.assertLinkedFieldType = function assertLinkedFieldType(type) {
    if (_isWrapper(type) && !_isCompositeType(unwrap(type)) || !_isWrapper(type) && !_isCompositeType(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be a Object, Interface or a Union Type."));
    }
    return type;
  };
  _proto4.assertInputType = function assertInputType2(type) {
    if (_isWrapper(type) && !_isInputType(unwrap(type)) || !_isWrapper(type) && !_isInputType(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be a Input, Scalar or Enum type."));
    }
    return type;
  };
  _proto4.asCompositeType = function asCompositeType(type) {
    if (_isCompositeType(type)) {
      return type;
    }
  };
  _proto4.asInputType = function asInputType(type) {
    if (_isWrapper(type) && _isInputType(unwrap(type)) || !_isWrapper(type) && _isInputType(type)) {
      return type;
    }
  };
  _proto4.asScalarFieldType = function asScalarFieldType(type) {
    if (_isScalar(type) || _isEnum(type)) {
      return type;
    }
  };
  _proto4.assertScalarType = function assertScalarType2(type) {
    if (!_isScalar(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a scalar type, got ").concat(this.getTypeString(type), "."));
    }
    return type;
  };
  _proto4.assertObjectType = function assertObjectType2(type) {
    if (!_isObject(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an object type."));
    }
    return type;
  };
  _proto4.assertInputObjectType = function assertInputObjectType2(type) {
    if (!_isInputObject(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an input type."));
    }
    return type;
  };
  _proto4.asInputObjectType = function asInputObjectType(type) {
    if (!_isInputObject(type)) {
      return null;
    }
    return type;
  };
  _proto4.assertInterfaceType = function assertInterfaceType2(type) {
    if (!_isInterface(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an interface type."));
    }
    return type;
  };
  _proto4.assertCompositeType = function assertCompositeType2(type) {
    if (!_isCompositeType(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a composite type."));
    }
    return type;
  };
  _proto4.assertAbstractType = function assertAbstractType2(type) {
    if (!_isAbstractType(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an abstract type."));
    }
    return type;
  };
  _proto4.assertLeafType = function assertLeafType2(type) {
    if (!this.isLeafType(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a leaf type."));
    }
    return type;
  };
  _proto4.assertUnionType = function assertUnionType2(type) {
    if (!_isUnion(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a union type."));
    }
    return type;
  };
  _proto4.assertEnumType = function assertEnumType2(type) {
    if (!_isEnum(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be an enum type."));
    }
    return type;
  };
  _proto4.assertIntType = function assertIntType(type) {
    if (!_isScalar(type) || !this.isInt(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be an 'Int' type."));
    }
    return type;
  };
  _proto4.assertFloatType = function assertFloatType(type) {
    if (!_isScalar(type) || !this.isFloat(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a 'Float' type."));
    }
    return type;
  };
  _proto4.assertBooleanType = function assertBooleanType(type) {
    if (!_isScalar(type) || !this.isBoolean(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a 'Boolean' type."));
    }
    return type;
  };
  _proto4.assertStringType = function assertStringType(type) {
    if (!_isScalar(type) || !this.isString(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a 'String' type."));
    }
    return type;
  };
  _proto4.assertIdType = function assertIdType(type) {
    if (!_isScalar(type) || !this.isId(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an ID type."));
    }
    return type;
  };
  _proto4.expectBooleanType = function expectBooleanType() {
    return this.assertScalarType(this.expectTypeFromString("Boolean"));
  };
  _proto4.expectIntType = function expectIntType() {
    return this.assertScalarType(this.expectTypeFromString("Int"));
  };
  _proto4.expectFloatType = function expectFloatType() {
    return this.assertScalarType(this.expectTypeFromString("Float"));
  };
  _proto4.expectStringType = function expectStringType() {
    return this.assertScalarType(this.expectTypeFromString("String"));
  };
  _proto4.expectIdType = function expectIdType() {
    return this.assertScalarType(this.expectTypeFromString("ID"));
  };
  _proto4.getQueryType = function getQueryType() {
    var queryType = this._getRawType(QUERY_TYPE_KEY);
    if (queryType && _isObject(queryType)) {
      return queryType;
    }
  };
  _proto4.getMutationType = function getMutationType() {
    var mutationType = this._getRawType(MUTATION_TYPE_KEY);
    if (mutationType && _isObject(mutationType)) {
      return mutationType;
    }
  };
  _proto4.getSubscriptionType = function getSubscriptionType() {
    var subscriptionType = this._getRawType(SUBSCRIPTION_TYPE_KEY);
    if (subscriptionType && _isObject(subscriptionType)) {
      return subscriptionType;
    }
  };
  _proto4.expectQueryType = function expectQueryType() {
    var queryType = this.getQueryType();
    if (queryType == null) {
      throw createCompilerError("Query type is not defined on the Schema");
    }
    return queryType;
  };
  _proto4.expectMutationType = function expectMutationType() {
    var mutationType = this.getMutationType();
    if (mutationType == null) {
      throw createCompilerError("Mutation type is not defined the Schema");
    }
    return mutationType;
  };
  _proto4.expectSubscriptionType = function expectSubscriptionType() {
    var subscriptionType = this.getSubscriptionType();
    if (subscriptionType == null) {
      throw createCompilerError("Subscription type is not defined the Schema");
    }
    return subscriptionType;
  };
  _proto4.isNonNull = function isNonNull(type) {
    return type instanceof NonNull;
  };
  _proto4.isList = function isList(type) {
    return type instanceof List;
  };
  _proto4.isWrapper = function isWrapper(type) {
    return _isWrapper(type);
  };
  _proto4.isScalar = function isScalar(type) {
    return _isScalar(type);
  };
  _proto4.isObject = function isObject(type) {
    return _isObject(type);
  };
  _proto4.isEnum = function isEnum(type) {
    return _isEnum(type);
  };
  _proto4.isUnion = function isUnion(type) {
    return _isUnion(type);
  };
  _proto4.isInputObject = function isInputObject(type) {
    return _isInputObject(type);
  };
  _proto4.isInterface = function isInterface(type) {
    return _isInterface(type);
  };
  _proto4.isInputType = function isInputType2(type) {
    return _isInputType(type) || _isWrapper(type) && _isInputType(unwrap(type));
  };
  _proto4.isCompositeType = function isCompositeType2(type) {
    return _isCompositeType(type);
  };
  _proto4.isAbstractType = function isAbstractType2(type) {
    return _isAbstractType(type);
  };
  _proto4.isLeafType = function isLeafType2(type) {
    return this.isScalar(type) || this.isEnum(type);
  };
  _proto4.isId = function isId(type) {
    if (type instanceof ScalarType) {
      return type.name === "ID";
    }
    return false;
  };
  _proto4.isInt = function isInt(type) {
    if (type instanceof ScalarType) {
      return type.name === "Int";
    }
    return false;
  };
  _proto4.isFloat = function isFloat(type) {
    if (type instanceof ScalarType) {
      return type.name === "Float";
    }
    return false;
  };
  _proto4.isBoolean = function isBoolean(type) {
    if (type instanceof ScalarType) {
      return type.name === "Boolean";
    }
    return false;
  };
  _proto4.isString = function isString(type) {
    if (type instanceof ScalarType) {
      return type.name === "String";
    }
    return false;
  };
  _proto4.hasField = function hasField(type, fieldName) {
    var canHaveTypename = this.isObject(type) || this.isAbstractType(type);
    if (canHaveTypename && (fieldName === TYPENAME_FIELD || fieldName === CLIENT_ID_FIELD)) {
      return true;
    }
    if (type instanceof ObjectType || type instanceof InterfaceType) {
      return this._typeMap.getField(type, fieldName) != null;
    } else if (type instanceof InputObjectType) {
      return this._typeMap.getInputField(type, fieldName) != null;
    }
    return false;
  };
  _proto4.hasId = function hasId(type) {
    if (!this.hasField(type, "id")) {
      return false;
    }
    var idField = this.expectField(type, "id");
    return this.areEqualTypes(this.getNullableType(this.getFieldType(idField)), this.expectIdType());
  };
  _proto4.getFields = function getFields(type) {
    var fieldsMap = this._getFieldsMap(type);
    return Array.from(fieldsMap.values());
  };
  _proto4._getFieldsMap = function _getFieldsMap(type) {
    var cachedMap = this._fieldsMap.get(type);
    if (cachedMap != null) {
      return cachedMap;
    }
    var fieldsMap = /* @__PURE__ */ new Map();
    if (type instanceof ObjectType || type instanceof InterfaceType) {
      var fields = this._typeMap.getFieldMap(type);
      if (fields) {
        var _iterator = (0, _createForOfIteratorHelper2["default"])(fields), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step$value = _step.value, fieldName = _step$value[0], fieldDefinition = _step$value[1];
            var fieldType = this.expectTypeFromAST(fieldDefinition.type);
            fieldsMap.set(fieldName, new Field(this, fieldName, fieldType, this.assertCompositeType(type), fieldDefinition.arguments, fieldDefinition.directives, fieldDefinition.isClient));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } else if (type instanceof InputObjectType) {
      var _fields = this._typeMap.getInputFieldMap(type);
      if (_fields) {
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(_fields), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _step2$value = _step2.value, _fieldName = _step2$value[0], typeNode = _step2$value[1];
            var _fieldType = this.expectTypeFromAST(typeNode);
            fieldsMap.set(_fieldName, new Field(this, _fieldName, _fieldType, type, [], null, false));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    if (fieldsMap.size === 0) {
      throw createCompilerError("_getFieldsMap: Type '".concat(type.name, "' should have fields."));
    }
    this._fieldsMap.set(type, fieldsMap);
    return fieldsMap;
  };
  _proto4.getFieldByName = function getFieldByName(type, fieldName) {
    if (!this.hasField(type, fieldName)) {
      return;
    }
    if (fieldName === TYPENAME_FIELD) {
      var typename = this._typeNameMap.get(type);
      if (!typename) {
        typename = new Field(this, TYPENAME_FIELD, this.getNonNullType(this.expectStringType()), type, [], null, false);
        this._typeNameMap.set(type, typename);
      }
      return typename;
    }
    if (fieldName === CLIENT_ID_FIELD) {
      var clientId = this._clientIdMap.get(type);
      if (!clientId) {
        clientId = new Field(this, CLIENT_ID_FIELD, this.getNonNullType(this.expectIdType()), type, [], null, true);
        this._clientIdMap.set(type, clientId);
      }
      return clientId;
    }
    if (_isUnion(type)) {
      throw createCompilerError("Unexpected union type '".concat(this.getTypeString(type), "' in the 'getFieldByName(...)'. Expected type with fields"));
    }
    var fieldsMap = this._getFieldsMap(type);
    return fieldsMap.get(fieldName);
  };
  _proto4.expectField = function expectField(type, fieldName) {
    var field = this.getFieldByName(type, fieldName);
    if (!field) {
      throw createCompilerError("Unknown field '".concat(fieldName, "' on type '").concat(this.getTypeString(type), "'."));
    }
    return field;
  };
  _proto4.getFieldConfig = function getFieldConfig(field) {
    return {
      type: field.type,
      args: Array.from(field.args.values())
    };
  };
  _proto4.getFieldName = function getFieldName(field) {
    return field.name;
  };
  _proto4.getFieldType = function getFieldType(field) {
    return field.type;
  };
  _proto4.getFieldParentType = function getFieldParentType(field) {
    return field.belongsTo;
  };
  _proto4.getFieldArgs = function getFieldArgs(field) {
    return Array.from(field.args.values());
  };
  _proto4.getFieldArgByName = function getFieldArgByName(field, argName) {
    return field.args.get(argName);
  };
  _proto4.getEnumValues = function getEnumValues(type) {
    return type.values;
  };
  _proto4.getUnionTypes = function getUnionTypes(type) {
    return Array.from(this._typeMap.getPossibleTypeSet(type));
  };
  _proto4.getInterfaces = function getInterfaces(type) {
    if (type instanceof ObjectType) {
      return this._typeMap.getInterfaces(type);
    }
    return [];
  };
  _proto4.getPossibleTypes = function getPossibleTypes2(type) {
    return this._typeMap.getPossibleTypeSet(type);
  };
  _proto4.getFetchableFieldName = function getFetchableFieldName(type) {
    return this._typeMap.getFetchableFieldName(type);
  };
  _proto4.parseLiteral = function parseLiteral(type, valueNode) {
    if (type instanceof EnumType && valueNode.kind === "EnumValue") {
      return this.parseValue(type, valueNode.value);
    } else if (type instanceof ScalarType) {
      if (valueNode.kind === "BooleanValue" && type.name === "Boolean") {
        return GraphQLBoolean.parseLiteral(valueNode);
      } else if (valueNode.kind === "FloatValue" && type.name === "Float") {
        return GraphQLFloat.parseLiteral(valueNode);
      } else if (valueNode.kind === "IntValue" && (type.name === "Int" || type.name === "ID" || type.name === "Float")) {
        return GraphQLInt.parseLiteral(valueNode);
      } else if (valueNode.kind === "StringValue" && (type.name === "String" || type.name === "ID")) {
        return GraphQLString.parseLiteral(valueNode);
      } else if (!isDefaultScalar(type.name)) {
        return valueFromASTUntyped(valueNode);
      }
    }
  };
  _proto4.parseValue = function parseValue2(type, value) {
    if (type instanceof EnumType) {
      return type.values.includes(value) ? value : void 0;
    } else if (type instanceof ScalarType) {
      switch (type.name) {
        case "Boolean":
          return GraphQLBoolean.parseValue(value);
        case "Float":
          return GraphQLFloat.parseValue(value);
        case "Int":
          return GraphQLInt.parseValue(value);
        case "String":
          return GraphQLString.parseValue(value);
        case "ID":
          return GraphQLID.parseValue(value);
        default:
          return value;
      }
    }
  };
  _proto4.serialize = function serialize(type, value) {
    if (type instanceof EnumType) {
      return type.values.includes(value) ? value : void 0;
    } else if (type instanceof ScalarType) {
      switch (type.name) {
        case "Boolean":
          return GraphQLBoolean.serialize(value);
        case "Float":
          return GraphQLFloat.serialize(value);
        case "Int":
          return GraphQLInt.serialize(value);
        case "String":
          return GraphQLString.serialize(value);
        case "ID":
          return GraphQLID.serialize(value);
        default:
          return value;
      }
    }
  };
  _proto4.getDirectives = function getDirectives() {
    return Array.from(this._directiveMap.values());
  };
  _proto4.getDirective = function getDirective(directiveName) {
    return this._directiveMap.get(directiveName);
  };
  _proto4.isServerType = function isServerType(type) {
    var unwrapped = unwrap(type);
    return unwrapped.isClient === false;
  };
  _proto4.isServerField = function isServerField(field) {
    return field.isClient === false;
  };
  _proto4.isServerDirective = function isServerDirective(directiveName) {
    var directive = this._directiveMap.get(directiveName);
    return (directive === null || directive === void 0 ? void 0 : directive.isClient) === false;
  };
  _proto4.isServerDefinedField = function isServerDefinedField(type, field) {
    return this.isAbstractType(type) && field.directives.some(function(_ref) {
      var name = _ref.name;
      return name === "fixme_fat_interface";
    }) || this.hasField(type, field.name) && this.isServerField(this.expectField(type, field.name));
  };
  _proto4.isClientDefinedField = function isClientDefinedField(type, field) {
    return !this.isServerDefinedField(type, field);
  };
  _proto4.extend = function extend(extensions) {
    var doc = Array.isArray(extensions) ? parse(extensions.join("\n")) : extensions;
    var schemaExtensions = [];
    doc.definitions.forEach(function(definition) {
      if (isSchemaDefinitionAST(definition)) {
        schemaExtensions.push(definition);
      }
    });
    if (schemaExtensions.length > 0) {
      return new Schema2(this._typeMap.extend(schemaExtensions));
    }
    return this;
  };
  return Schema2;
}();
var TypeMap = /* @__PURE__ */ function() {
  function TypeMap2(source, extensions) {
    this._types = /* @__PURE__ */ new Map([["ID", new ScalarType("ID", false)], ["String", new ScalarType("String", false)], ["Boolean", new ScalarType("Boolean", false)], ["Float", new ScalarType("Float", false)], ["Int", new ScalarType("Int", false)]]);
    this._typeInterfaces = /* @__PURE__ */ new Map();
    this._unionTypes = /* @__PURE__ */ new Map();
    this._interfaceImplementations = /* @__PURE__ */ new Map();
    this._fields = /* @__PURE__ */ new Map();
    this._inputFields = /* @__PURE__ */ new Map();
    this._directives = /* @__PURE__ */ new Map([["include", {
      name: "include",
      isClient: false,
      locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
      args: [{
        name: "if",
        typeNode: parseType("Boolean!"),
        defaultValue: void 0
      }]
    }], ["skip", {
      name: "skip",
      isClient: false,
      locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
      args: [{
        name: "if",
        typeNode: parseType("Boolean!"),
        defaultValue: void 0
      }]
    }], ["deprecated", {
      name: "deprecated",
      isClient: false,
      locations: ["FIELD_DEFINITION", "ENUM_VALUE"],
      args: [{
        name: "reason",
        typeNode: parseType("String"),
        defaultValue: {
          kind: "StringValue",
          value: "No longer supported"
        }
      }]
    }]]);
    this._queryTypeName = "Query";
    this._mutationTypeName = "Mutation";
    this._subscriptionTypeName = "Subscription";
    this._source = source;
    this._extensions = extensions;
    this._fetchable = /* @__PURE__ */ new Map();
    this._parse(source);
    this._extend(extensions);
  }
  var _proto5 = TypeMap2.prototype;
  _proto5._parse = function _parse(source) {
    var _this5 = this;
    var document = parse(source, {
      noLocation: true
    });
    document.definitions.forEach(function(definition) {
      switch (definition.kind) {
        case "SchemaDefinition": {
          _this5._parseSchemaDefinition(definition);
          break;
        }
        case "ScalarTypeDefinition": {
          _this5._parseScalarNode(definition, false);
          break;
        }
        case "EnumTypeDefinition": {
          _this5._parseEnumNode(definition, false);
          break;
        }
        case "ObjectTypeDefinition": {
          _this5._parseObjectTypeNode(definition, false);
          break;
        }
        case "InputObjectTypeDefinition": {
          _this5._parseInputObjectTypeNode(definition, false);
          break;
        }
        case "UnionTypeDefinition": {
          _this5._parseUnionNode(definition, false);
          break;
        }
        case "InterfaceTypeDefinition": {
          _this5._parseInterfaceNode(definition, false);
          break;
        }
        case "DirectiveDefinition": {
          _this5._parseDirective(definition, false);
          break;
        }
      }
    });
  };
  _proto5._parseSchemaDefinition = function _parseSchemaDefinition(node) {
    var _this6 = this;
    node.operationTypes.forEach(function(operationType) {
      switch (operationType.operation) {
        case "query":
          _this6._queryTypeName = operationType.type.name.value;
          break;
        case "mutation":
          _this6._mutationTypeName = operationType.type.name.value;
          break;
        case "subscription":
          _this6._subscriptionTypeName = operationType.type.name.value;
          break;
      }
    });
  };
  _proto5._parseScalarNode = function _parseScalarNode(node, isClient) {
    var name = node.name.value;
    if (!isDefaultScalar(name) && this._types.has(name)) {
      throw createCompilerError("_parseScalarNode: Duplicate definition for type ".concat(name, "."), null, [node]);
    }
    this._types.set(name, new ScalarType(name, isClient));
  };
  _proto5._parseEnumNode = function _parseEnumNode(node, isClient) {
    var name = node.name.value;
    if (this._types.has(name)) {
      throw createCompilerError("_parseEnumNode: Duplicate definition for type ".concat(name, "."), null, [node]);
    }
    var values = node.values ? node.values.map(function(value) {
      return value.name.value;
    }) : [];
    this._types.set(name, new EnumType(name, values, isClient));
  };
  _proto5._parseObjectTypeNode = function _parseObjectTypeNode(node, isClient) {
    var _this7 = this;
    var _this$_types$get;
    var name = node.name.value;
    var type = (_this$_types$get = this._types.get(name)) !== null && _this$_types$get !== void 0 ? _this$_types$get : new ObjectType(name, isClient);
    if (!(type instanceof ObjectType)) {
      throw createCompilerError("_parseObjectTypeNode: Expected object type, got ".concat(String(type)), null, [node]);
    }
    if (type.isClient !== isClient) {
      throw createCompilerError("_parseObjectTypeNode: Cannot create object type '".concat(name, "' defined as a client type."), null, [node]);
    }
    var typeInterfaces = [];
    node.interfaces && node.interfaces.forEach(function(interfaceTypeNode) {
      var _this$_interfaceImple;
      var interfaceName = interfaceTypeNode.name.value;
      var interfaceType = _this7._types.get(interfaceName);
      if (!interfaceType) {
        interfaceType = new InterfaceType(interfaceName, isClient);
        _this7._types.set(interfaceName, interfaceType);
      }
      if (!(interfaceType instanceof InterfaceType)) {
        throw createCompilerError("_parseObjectTypeNode: Expected interface type", null, [interfaceTypeNode]);
      }
      var implementations = (_this$_interfaceImple = _this7._interfaceImplementations.get(interfaceType)) !== null && _this$_interfaceImple !== void 0 ? _this$_interfaceImple : /* @__PURE__ */ new Set();
      implementations.add(type);
      _this7._interfaceImplementations.set(interfaceType, implementations);
      typeInterfaces.push(interfaceType);
    });
    var fetchable = null;
    node.directives && node.directives.forEach(function(directiveNode) {
      if (directiveNode.name.value === "fetchable") {
        var field_name_arg = directiveNode.arguments && directiveNode.arguments.find(function(arg) {
          return arg.name.value === "field_name";
        });
        if (field_name_arg != null && field_name_arg.value.kind === "StringValue") {
          fetchable = {
            field_name: field_name_arg.value.value
          };
        }
      }
    });
    this._typeInterfaces.set(type, typeInterfaces);
    this._types.set(name, type);
    if (fetchable != null) {
      this._fetchable.set(type, fetchable);
    }
    node.fields && this._handleTypeFieldsStrict(type, node.fields, isClient);
  };
  _proto5._parseInputObjectTypeNode = function _parseInputObjectTypeNode(node, isClient) {
    var name = node.name.value;
    if (this._types.has(name)) {
      throw createCompilerError("_parseInputObjectTypeNode: Unable to parse schema file. Duplicate definition for object type", null, [node]);
    }
    var type = new InputObjectType(name, isClient);
    this._types.set(name, type);
    this._parseInputObjectFields(type, node);
  };
  _proto5._parseUnionNode = function _parseUnionNode(node, isClient) {
    var _this8 = this;
    var name = node.name.value;
    if (this._types.has(name)) {
      throw createCompilerError("_parseUnionNode: Unable to parse schema file. Duplicate definition for object type", null, [node]);
    }
    var union = new UnionType(name, isClient);
    this._types.set(name, union);
    this._unionTypes.set(union, new Set(node.types ? node.types.map(function(typeInUnion) {
      var _this$_types$get2;
      var typeInUnionName = typeInUnion.name.value;
      var object = (_this$_types$get2 = _this8._types.get(typeInUnionName)) !== null && _this$_types$get2 !== void 0 ? _this$_types$get2 : new ObjectType(typeInUnionName, false);
      if (!(object instanceof ObjectType)) {
        throw createCompilerError("_parseUnionNode: Expected object type", null, [typeInUnion]);
      }
      _this8._types.set(typeInUnionName, object);
      return object;
    }) : []));
  };
  _proto5._parseInterfaceNode = function _parseInterfaceNode(node, isClient) {
    var name = node.name.value;
    var type = this._types.get(name);
    if (!type) {
      type = new InterfaceType(name, isClient);
      this._types.set(name, type);
    }
    if (!(type instanceof InterfaceType)) {
      throw createCompilerError("_parseInterfaceNode: Expected interface type. Got ".concat(String(type)), null, [node]);
    }
    if (type.isClient !== isClient) {
      throw createCompilerError("_parseInterfaceNode: Cannot create interface '".concat(name, "' defined as a client interface"), null, [node]);
    }
    node.fields && this._handleTypeFieldsStrict(type, node.fields, isClient);
  };
  _proto5._handleTypeFieldsStrict = function _handleTypeFieldsStrict(type, fields, isClient) {
    if (this._fields.has(type)) {
      throw createCompilerError("_handleTypeFieldsStrict: Unable to parse schema file. Duplicate definition for object type");
    }
    this._handleTypeFields(type, fields, isClient);
  };
  _proto5._handleTypeFields = function _handleTypeFields(type, fields, isClient) {
    var _this$_fields$get;
    var fieldsMap = (_this$_fields$get = this._fields.get(type)) !== null && _this$_fields$get !== void 0 ? _this$_fields$get : /* @__PURE__ */ new Map();
    fields.forEach(function(fieldNode) {
      var fieldName = fieldNode.name.value;
      if (fieldsMap.has(fieldName)) {
        throw createCompilerError("_handleTypeFields: Duplicate definition for field '".concat(fieldName, "'."));
      }
      fieldsMap.set(fieldName, {
        arguments: fieldNode.arguments ? fieldNode.arguments.map(function(arg) {
          return {
            name: arg.name.value,
            typeNode: arg.type,
            defaultValue: arg.defaultValue
          };
        }) : [],
        directives: fieldNode.directives ? fieldNode.directives.map(function(directive) {
          return {
            name: directive.name.value,
            args: directive.arguments ? directive.arguments.map(function(arg) {
              return {
                name: arg.name.value,
                value: arg.value
              };
            }) : []
          };
        }) : null,
        type: fieldNode.type,
        isClient
      });
    });
    this._fields.set(type, fieldsMap);
  };
  _proto5._parseInputObjectFields = function _parseInputObjectFields(type, node) {
    if (this._inputFields.has(type)) {
      throw createCompilerError("_parseInputObjectFields: Unable to parse schema file. Duplicate definition for type", null, [node]);
    }
    var fields = /* @__PURE__ */ new Map();
    if (node.fields) {
      node.fields.forEach(function(fieldNode) {
        fields.set(fieldNode.name.value, fieldNode.type);
      });
    }
    this._inputFields.set(type, fields);
  };
  _proto5._parseDirective = function _parseDirective(node, isClient) {
    var name = node.name.value;
    this._directives.set(name, {
      name,
      args: node.arguments ? node.arguments.map(function(arg) {
        return {
          name: arg.name.value,
          typeNode: arg.type,
          defaultValue: arg.defaultValue
        };
      }) : [],
      locations: node.locations.map(function(location) {
        switch (location.value) {
          case "QUERY":
          case "MUTATION":
          case "SUBSCRIPTION":
          case "FIELD":
          case "FRAGMENT_DEFINITION":
          case "FRAGMENT_SPREAD":
          case "INLINE_FRAGMENT":
          case "VARIABLE_DEFINITION":
          case "SCHEMA":
          case "SCALAR":
          case "OBJECT":
          case "FIELD_DEFINITION":
          case "ARGUMENT_DEFINITION":
          case "INTERFACE":
          case "UNION":
          case "ENUM":
          case "ENUM_VALUE":
          case "INPUT_OBJECT":
          case "INPUT_FIELD_DEFINITION":
            return location.value;
          default:
            throw createCompilerError("Invalid directive location");
        }
      }),
      isClient
    });
  };
  _proto5._parseObjectTypeExtension = function _parseObjectTypeExtension(node) {
    var type = this._types.get(node.name.value);
    if (!(type instanceof ObjectType)) {
      throw createCompilerError("_parseObjectTypeExtension: Expected to find type with the name '".concat(node.name.value, "'"), null, [node]);
    }
    node.fields && this._handleTypeFields(type, node.fields, true);
  };
  _proto5._parseInterfaceTypeExtension = function _parseInterfaceTypeExtension(node) {
    var type = this._types.get(node.name.value);
    if (!(type instanceof InterfaceType)) {
      throw createCompilerError("_parseInterfaceTypeExtension: Expected to have an interface type");
    }
    node.fields && this._handleTypeFields(type, node.fields, true);
  };
  _proto5._extend = function _extend(extensions) {
    var _this9 = this;
    extensions.forEach(function(definition) {
      if (definition.kind === "ObjectTypeDefinition") {
        _this9._parseObjectTypeNode(definition, true);
      } else if (definition.kind === "InterfaceTypeDefinition") {
        _this9._parseInterfaceNode(definition, true);
      } else if (definition.kind === "ScalarTypeDefinition") {
        _this9._parseScalarNode(definition, true);
      } else if (definition.kind === "EnumTypeDefinition") {
        _this9._parseEnumNode(definition, true);
      } else if (definition.kind === "InterfaceTypeExtension") {
        _this9._parseInterfaceTypeExtension(definition);
      } else if (definition.kind === "ObjectTypeExtension") {
        _this9._parseObjectTypeExtension(definition);
      } else if (definition.kind === "DirectiveDefinition") {
        _this9._parseDirective(definition, true);
      } else {
        throw createCompilerError("Unexpected extension kind: '".concat(definition.kind, "'"), null, [definition]);
      }
    });
  };
  _proto5.getTypes = function getTypes() {
    return Array.from(this._types.values());
  };
  _proto5.getTypeByName = function getTypeByName(typename) {
    return this._types.get(typename);
  };
  _proto5.getInterfaces = function getInterfaces(type) {
    var _this$_typeInterfaces;
    return (_this$_typeInterfaces = this._typeInterfaces.get(type)) !== null && _this$_typeInterfaces !== void 0 ? _this$_typeInterfaces : [];
  };
  _proto5.getPossibleTypeSet = function getPossibleTypeSet(type) {
    var set;
    if (type instanceof InterfaceType) {
      var _this$_interfaceImple2;
      set = (_this$_interfaceImple2 = this._interfaceImplementations.get(type)) !== null && _this$_interfaceImple2 !== void 0 ? _this$_interfaceImple2 : /* @__PURE__ */ new Set();
    } else if (type instanceof UnionType) {
      var _this$_unionTypes$get;
      set = (_this$_unionTypes$get = this._unionTypes.get(type)) !== null && _this$_unionTypes$get !== void 0 ? _this$_unionTypes$get : /* @__PURE__ */ new Set();
    } else {
      throw createCompilerError('Invalid type supplied to "getPossibleTypeSet"');
    }
    if (!set) {
      throw createCompilerError("Unable to find possible types for ".concat(type.name));
    }
    return set;
  };
  _proto5.getFetchableFieldName = function getFetchableFieldName(type) {
    var _this$_fetchable$get$, _this$_fetchable$get;
    return (_this$_fetchable$get$ = (_this$_fetchable$get = this._fetchable.get(type)) === null || _this$_fetchable$get === void 0 ? void 0 : _this$_fetchable$get.field_name) !== null && _this$_fetchable$get$ !== void 0 ? _this$_fetchable$get$ : null;
  };
  _proto5.getQueryType = function getQueryType() {
    return this._types.get(this._queryTypeName);
  };
  _proto5.getMutationType = function getMutationType() {
    return this._types.get(this._mutationTypeName);
  };
  _proto5.getSubscriptionType = function getSubscriptionType() {
    return this._types.get(this._subscriptionTypeName);
  };
  _proto5.getField = function getField(type, fieldName) {
    var fields = this._fields.get(type);
    if (fields) {
      return fields.get(fieldName);
    }
  };
  _proto5.getFieldMap = function getFieldMap(type) {
    return this._fields.get(type);
  };
  _proto5.getInputField = function getInputField(type, fieldName) {
    var inputFields = this._inputFields.get(type);
    if (inputFields) {
      return inputFields.get(fieldName);
    }
  };
  _proto5.getInputFieldMap = function getInputFieldMap(type) {
    return this._inputFields.get(type);
  };
  _proto5.getDirectives = function getDirectives() {
    return Array.from(this._directives.values());
  };
  _proto5.extend = function extend(extensions) {
    return new TypeMap2(this._source, this._extensions.concat(extensions));
  };
  return TypeMap2;
}();
function create(baseSchema, schemaExtensionDocuments, schemaExtensions) {
  var extensions = [];
  schemaExtensions && schemaExtensions.forEach(function(source) {
    var doc = parse(source, {
      noLocation: true
    });
    doc.definitions.forEach(function(definition) {
      if (isSchemaDefinitionAST(definition)) {
        extensions.push(definition);
      }
    });
  });
  schemaExtensionDocuments && schemaExtensionDocuments.forEach(function(doc) {
    doc.definitions.forEach(function(definition) {
      if (isSchemaDefinitionAST(definition)) {
        extensions.push(definition);
      }
    });
  });
  return new Schema(new TypeMap(baseSchema, extensions));
}
function parseInputArgumentDefinitions(schema, args) {
  return args.map(function(arg) {
    var argType = schema.assertInputType(schema.expectTypeFromAST(arg.typeNode));
    var defaultValue;
    var defaultValueNode = arg.defaultValue;
    if (defaultValueNode != null) {
      var nullableType = schema.getNullableType(argType);
      var isNullable = schema.isNonNull(argType) === false;
      if (isNullable && defaultValueNode.kind === "NullValue") {
        defaultValue = null;
      } else {
        if (nullableType instanceof ScalarType || nullableType instanceof EnumType) {
          defaultValue = schema.parseLiteral(nullableType, defaultValueNode);
        } else if (nullableType instanceof List && defaultValueNode.kind === "ListValue" || nullableType instanceof InputObjectType && defaultValueNode.kind === "ObjectValue") {
          defaultValue = valueFromASTUntyped(defaultValueNode);
        }
      }
      if (defaultValue === void 0) {
        throw createCompilerError("parseInputArgumentDefinitions: Unexpected default value: ".concat(String(defaultValueNode), ". Expected to have a value of type ").concat(String(nullableType), "."));
      }
    }
    return {
      name: arg.name,
      type: argType,
      defaultValue
    };
  });
}
function parseInputArgumentDefinitionsMap(schema, args) {
  return new Map(parseInputArgumentDefinitions(schema, args).map(function(arg) {
    return [arg.name, arg];
  }));
}
function isDefaultScalar(name) {
  return (/* @__PURE__ */ new Set(["ID", "String", "Boolean", "Int", "Float"])).has(name);
}
var Schema_1 = {
  create
};
function optimizeDocuments(schema, documents, options = {}) {
  options = __spreadValues({
    noLocation: true
  }, options);
  const adjustedSchema = Schema_1.create(printSchemaWithDirectives(schema, options));
  const documentAsts = concatAST(documents);
  const relayDocuments = RelayParser_1.transform(adjustedSchema, documentAsts.definitions);
  const result = [];
  if (options.includeFragments) {
    const fragmentCompilerContext = new CompilerContext_1(adjustedSchema).addAll(relayDocuments).applyTransforms([
      ApplyFragmentArgumentTransform.transform,
      FlattenTransform.transformWithOptions({ flattenAbstractTypes: false }),
      SkipRedundantNodesTransform.transform
    ]);
    result.push(...fragmentCompilerContext.documents().filter((doc) => doc.kind === "Fragment").map((doc) => parse$2(IRPrinter.print(adjustedSchema, doc), options)));
  }
  const queryCompilerContext = new CompilerContext_1(adjustedSchema).addAll(relayDocuments).applyTransforms([
    ApplyFragmentArgumentTransform.transform,
    InlineFragmentsTransform.transform,
    FlattenTransform.transformWithOptions({ flattenAbstractTypes: false }),
    SkipRedundantNodesTransform.transform
  ]);
  result.push(...queryCompilerContext.documents().map((doc) => parse$2(IRPrinter.print(adjustedSchema, doc), options)));
  return result;
}
const DEFAULT_SCALARS = {
  ID: "string",
  String: "string",
  Boolean: "boolean",
  Int: "number",
  Float: "number"
};
var MapperKind;
(function(MapperKind2) {
  MapperKind2[MapperKind2["Namespace"] = 0] = "Namespace";
  MapperKind2[MapperKind2["Default"] = 1] = "Default";
  MapperKind2[MapperKind2["Regular"] = 2] = "Regular";
})(MapperKind || (MapperKind = {}));
function prepareLegacy(mapper) {
  const items = mapper.split("#");
  const isNamespace = items.length === 3;
  const isDefault = items[1].trim() === "default" || items[1].startsWith("default ");
  const hasAlias = items[1].includes(" as ");
  return {
    items,
    isDefault,
    isNamespace,
    hasAlias
  };
}
function prepare(mapper) {
  const [source, path2] = mapper.split("#");
  const isNamespace = path2.includes(".");
  const isDefault = path2.trim() === "default" || path2.startsWith("default ");
  const hasAlias = path2.includes(" as ");
  return {
    items: isNamespace ? [source, ...path2.split(".")] : [source, path2],
    isDefault,
    isNamespace,
    hasAlias
  };
}
function isLegacyMode(mapper) {
  return mapper.split("#").length === 3;
}
function parseMapper(mapper, gqlTypeName = null, suffix) {
  if (isExternalMapper(mapper)) {
    let handleAlias = function(isDefault2 = false) {
      const [importedType, aliasType] = items[1].split(/\s+as\s+/);
      const type2 = maybeSuffix(aliasType);
      return {
        importElement: isDefault2 ? type2 : `${importedType} as ${type2}`,
        type: type2
      };
    }, maybeSuffix = function(type2) {
      if (suffix) {
        return addSuffix(type2, suffix);
      }
      return type2;
    }, handle = function() {
      switch (mapperKind) {
        case MapperKind.Namespace: {
          const [, ns, identifier] = items;
          return {
            type: `${ns}.${identifier}`,
            importElement: ns
          };
        }
        case MapperKind.Default: {
          if (hasAlias) {
            return handleAlias(true);
          }
          const type2 = maybeSuffix(`${gqlTypeName}`);
          return {
            importElement: type2,
            type: type2
          };
        }
        case MapperKind.Regular: {
          if (hasAlias) {
            return handleAlias();
          }
          const identifier = items[1];
          const type2 = maybeSuffix(identifier);
          return {
            type: type2,
            importElement: suffix ? `${identifier} as ${type2}` : type2
          };
        }
      }
    };
    const { isNamespace, isDefault, hasAlias, items } = isLegacyMode(mapper) ? prepareLegacy(mapper) : prepare(mapper);
    const mapperKind = isNamespace ? MapperKind.Namespace : isDefault ? MapperKind.Default : MapperKind.Regular;
    const { type, importElement } = handle();
    return {
      default: isDefault,
      isExternal: true,
      source: items[0],
      type,
      import: importElement.replace(/<(.*?)>/g, "")
    };
  }
  return {
    isExternal: false,
    type: mapper
  };
}
function addSuffix(element, suffix) {
  const generic = element.indexOf("<");
  if (generic === -1) {
    return `${element}${suffix}`;
  }
  return `${element.slice(0, generic)}${suffix}${element.slice(generic)}`;
}
function isExternalMapper(value) {
  return value.includes("#");
}
function transformDirectiveArgumentAndInputFieldMappings(rawDirectiveArgumentAndInputFieldMappings, directiveArgumentAndInputFieldMappingTypeSuffix) {
  const result = {};
  Object.keys(rawDirectiveArgumentAndInputFieldMappings).forEach((directive) => {
    const mapperDef = rawDirectiveArgumentAndInputFieldMappings[directive];
    const parsedMapper = parseMapper(mapperDef, directive, directiveArgumentAndInputFieldMappingTypeSuffix);
    result[directive] = parsedMapper;
  });
  return result;
}
const getConfigValue = (value, defaultValue) => {
  if (value === null || value === void 0) {
    return defaultValue;
  }
  return value;
};
function wrapWithSingleQuotes(value, skipNumericCheck = false) {
  if (skipNumericCheck) {
    if (typeof value === "number") {
      return `${value}`;
    } else {
      return `'${value}'`;
    }
  }
  if (typeof value === "number" || typeof value === "string" && !isNaN(parseInt(value)) && parseFloat(value).toString() === value) {
    return `${value}`;
  }
  return `'${value}'`;
}
function indent(str, count = 1) {
  return new Array(count).fill("  ").join("") + str;
}
function transformComment(comment, indentLevel = 0, disabled = false) {
  if (!comment || comment === "" || disabled) {
    return "";
  }
  if (isStringValueNode(comment)) {
    comment = comment.value;
  }
  comment = comment.split("*/").join("*\\/");
  let lines = comment.split("\n");
  if (lines.length === 1) {
    return indent(`/** ${lines[0]} */
`, indentLevel);
  }
  lines = ["/**", ...lines.map((line) => ` * ${line}`), " */\n"];
  return stripTrailingSpaces(lines.map((line) => indent(line, indentLevel)).join("\n"));
}
class DeclarationBlock {
  constructor(_config) {
    this._config = _config;
    this._decorator = null;
    this._export = false;
    this._name = null;
    this._kind = null;
    this._methodName = null;
    this._content = null;
    this._block = null;
    this._nameGenerics = null;
    this._comment = null;
    this._ignoreBlockWrapper = false;
    this._config = __spreadValues({
      blockWrapper: "",
      blockTransformer: (block) => block,
      enumNameValueSeparator: ":"
    }, this._config);
  }
  withDecorator(decorator) {
    this._decorator = decorator;
    return this;
  }
  export(exp = true) {
    if (!this._config.ignoreExport) {
      this._export = exp;
    }
    return this;
  }
  asKind(kind) {
    this._kind = kind;
    return this;
  }
  withComment(comment, disabled = false) {
    const nonEmptyComment = isStringValueNode(comment) ? !!comment.value : !!comment;
    if (nonEmptyComment && !disabled) {
      this._comment = transformComment(comment, 0);
    }
    return this;
  }
  withMethodCall(methodName, ignoreBlockWrapper = false) {
    this._methodName = methodName;
    this._ignoreBlockWrapper = ignoreBlockWrapper;
    return this;
  }
  withBlock(block) {
    this._block = block;
    return this;
  }
  withContent(content) {
    this._content = content;
    return this;
  }
  withName(name, generics = null) {
    this._name = name;
    this._nameGenerics = generics;
    return this;
  }
  get string() {
    let result = "";
    if (this._decorator) {
      result += this._decorator + "\n";
    }
    if (this._export) {
      result += "export ";
    }
    if (this._kind) {
      let extra = "";
      let name = "";
      if (["type", "const", "var", "let"].includes(this._kind)) {
        extra = "= ";
      }
      if (this._name) {
        name = this._name + (this._nameGenerics || "") + " ";
      }
      result += this._kind + " " + name + extra;
    }
    if (this._block) {
      if (this._content) {
        result += this._content;
      }
      const blockWrapper = this._ignoreBlockWrapper ? "" : this._config.blockWrapper;
      const before = "{" + blockWrapper;
      const after = blockWrapper + "}";
      const block = [before, this._block, after].filter((val) => !!val).join("\n");
      if (this._methodName) {
        result += `${this._methodName}(${this._config.blockTransformer(block)})`;
      } else {
        result += this._config.blockTransformer(block);
      }
    } else if (this._content) {
      result += this._content;
    } else if (this._kind) {
      result += this._config.blockTransformer("{}");
    }
    return stripTrailingSpaces((this._comment ? this._comment : "") + result + (this._kind === "interface" || this._kind === "enum" || this._kind === "namespace" || this._kind === "function" ? "" : ";") + "\n");
  }
}
function getBaseTypeNode(typeNode) {
  if (typeNode.kind === Kind.LIST_TYPE || typeNode.kind === Kind.NON_NULL_TYPE) {
    return getBaseTypeNode(typeNode.type);
  }
  return typeNode;
}
function convertNameParts(str, func, removeUnderscore = false) {
  if (removeUnderscore) {
    return func(str);
  }
  return str.split("_").map((s) => func(s)).join("_");
}
function buildScalarsFromConfig(schema, config, defaultScalarsMapping = DEFAULT_SCALARS, defaultScalarType = "any") {
  return buildScalars(schema, config.scalars, defaultScalarsMapping, config.strictScalars ? null : config.defaultScalarType || defaultScalarType);
}
function buildScalars(schema, scalarsMapping, defaultScalarsMapping = DEFAULT_SCALARS, defaultScalarType = "any") {
  const result = {};
  Object.keys(defaultScalarsMapping).forEach((name) => {
    result[name] = parseMapper(defaultScalarsMapping[name]);
  });
  if (schema) {
    const typeMap = schema.getTypeMap();
    Object.keys(typeMap).map((typeName) => typeMap[typeName]).filter((type) => isScalarType(type)).map((scalarType) => {
      var _a;
      const name = scalarType.name;
      if (typeof scalarsMapping === "string") {
        const value = parseMapper(scalarsMapping + "#" + name, name);
        result[name] = value;
      } else if (scalarsMapping && typeof scalarsMapping[name] === "string") {
        const value = parseMapper(scalarsMapping[name], name);
        result[name] = value;
      } else if (scalarsMapping && scalarsMapping[name]) {
        result[name] = {
          isExternal: false,
          type: JSON.stringify(scalarsMapping[name])
        };
      } else if ((_a = scalarType.extensions) === null || _a === void 0 ? void 0 : _a.codegenScalarType) {
        result[name] = {
          isExternal: false,
          type: scalarType.extensions.codegenScalarType
        };
      } else if (!defaultScalarsMapping[name]) {
        if (defaultScalarType === null) {
          throw new Error(`Unknown scalar type ${name}. Please override it using the "scalars" configuration field!`);
        }
        result[name] = {
          isExternal: false,
          type: defaultScalarType
        };
      }
    });
  } else if (scalarsMapping) {
    if (typeof scalarsMapping === "string") {
      throw new Error("Cannot use string scalars mapping when building without a schema");
    }
    Object.keys(scalarsMapping).forEach((name) => {
      if (typeof scalarsMapping[name] === "string") {
        const value = parseMapper(scalarsMapping[name], name);
        result[name] = value;
      } else {
        result[name] = {
          isExternal: false,
          type: JSON.stringify(scalarsMapping[name])
        };
      }
    });
  }
  return result;
}
function isStringValueNode(node) {
  return node && typeof node === "object" && node.kind === Kind.STRING;
}
const OMIT_TYPE = "export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;";
function mergeSelectionSets(selectionSet1, selectionSet2) {
  const newSelections = [...selectionSet1.selections];
  for (let selection2 of selectionSet2.selections) {
    if (selection2.kind === "FragmentSpread" || selection2.kind === "InlineFragment") {
      newSelections.push(selection2);
      continue;
    }
    if (selection2.kind !== "Field") {
      throw new TypeError("Invalid state.");
    }
    const match = newSelections.find((selection1) => selection1.kind === "Field" && getFieldNodeNameValue(selection1) === getFieldNodeNameValue(selection2));
    if (match) {
      if (match.kind === "Field" && match.selectionSet && selection2.selectionSet) {
        selection2 = __spreadProps(__spreadValues({}, selection2), {
          selectionSet: mergeSelectionSets(match.selectionSet, selection2.selectionSet)
        });
      }
    }
    newSelections.push(selection2);
  }
  return {
    kind: Kind.SELECTION_SET,
    selections: newSelections
  };
}
const getFieldNodeNameValue = (node) => {
  return (node.alias || node.name).value;
};
function separateSelectionSet(selections) {
  return {
    fields: selections.filter((s) => s.kind === Kind.FIELD),
    inlines: selections.filter((s) => s.kind === Kind.INLINE_FRAGMENT),
    spreads: selections.filter((s) => s.kind === Kind.FRAGMENT_SPREAD)
  };
}
function getPossibleTypes(schema, type) {
  if (isListType(type) || isNonNullType(type)) {
    return getPossibleTypes(schema, type.ofType);
  } else if (isObjectType(type)) {
    return [type];
  } else if (isAbstractType(type)) {
    return schema.getPossibleTypes(type);
  }
  return [];
}
function hasConditionalDirectives(field) {
  var _a;
  const CONDITIONAL_DIRECTIVES = ["skip", "include"];
  return (_a = field.directives) === null || _a === void 0 ? void 0 : _a.some((directive) => CONDITIONAL_DIRECTIVES.includes(directive.name.value));
}
function wrapTypeWithModifiers(baseType, type, options) {
  let currentType = type;
  const modifiers = [];
  while (currentType) {
    if (isNonNullType(currentType)) {
      currentType = currentType.ofType;
    } else {
      modifiers.push(options.wrapOptional);
    }
    if (isListType(currentType)) {
      modifiers.push(options.wrapArray);
      currentType = currentType.ofType;
    } else {
      break;
    }
  }
  return modifiers.reduceRight((result, modifier) => modifier(result), baseType);
}
function stripTrailingSpaces(str) {
  return str.replace(/ +\n/g, "\n");
}
function getKind(node) {
  if (typeof node === "string") {
    return "typeNames";
  }
  if (["EnumValueDefinition", "EnumValue"].includes(node.kind)) {
    return "enumValues";
  }
  return "typeNames";
}
function getName(node) {
  if (node == null) {
    return void 0;
  }
  if (typeof node === "string") {
    return node;
  }
  switch (node.kind) {
    case "OperationDefinition":
    case "Variable":
    case "Argument":
    case "FragmentSpread":
    case "FragmentDefinition":
    case "ObjectField":
    case "Directive":
    case "NamedType":
    case "ScalarTypeDefinition":
    case "ObjectTypeDefinition":
    case "FieldDefinition":
    case "InputValueDefinition":
    case "InterfaceTypeDefinition":
    case "UnionTypeDefinition":
    case "EnumTypeDefinition":
    case "EnumValueDefinition":
    case "InputObjectTypeDefinition":
    case "DirectiveDefinition": {
      return getName(node.name);
    }
    case "Name": {
      return node.value;
    }
    case "Field": {
      return getName(node.alias || node.name);
    }
    case "VariableDefinition": {
      return getName(node.variable);
    }
  }
  return void 0;
}
function convertFactory(config) {
  function resolveConventionName(type) {
    if (!config.namingConvention) {
      return (str, opts = {}) => {
        return convertNameParts(str, pascalCase, getConfigValue((opts || {}).transformUnderscore, false));
      };
    }
    if (typeof config.namingConvention === "string") {
      if (config.namingConvention === "keep") {
        return (str) => str;
      }
      return (str, opts = {}) => {
        return convertNameParts(str, resolveExternalModuleAndFn(config.namingConvention), getConfigValue((opts || {}).transformUnderscore, false));
      };
    }
    if (typeof config.namingConvention === "function") {
      return (str, opts = {}) => {
        return convertNameParts(str, config.namingConvention, getConfigValue((opts || {}).transformUnderscore, false));
      };
    }
    if (typeof config.namingConvention === "object" && config.namingConvention[type] === "keep") {
      return (str) => str;
    }
    if (typeof config.namingConvention === "object") {
      if (!config.namingConvention[type]) {
        return (str, opts = {}) => {
          const transformUnderscore = config.namingConvention.transformUnderscore || (opts || {}).transformUnderscore;
          return convertNameParts(str, pascalCase, getConfigValue(transformUnderscore, false));
        };
      }
      return (str, opts = {}) => {
        return convertNameParts(str, resolveExternalModuleAndFn(config.namingConvention[type]), getConfigValue((opts || {}).transformUnderscore, true));
      };
    }
    return config.namingConvention[type];
  }
  return (node, opts) => {
    const prefix = opts && opts.prefix;
    const suffix = opts && opts.suffix;
    const kind = getKind(node);
    const str = [prefix || "", getName(node), suffix || ""].join("");
    return resolveConventionName(kind)(str, opts);
  };
}
function escapeString(str) {
  return str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/'/g, "\\'");
}
function parseEnumValues({ schema, mapOrStr = {}, ignoreEnumValuesFromSchema }) {
  const allTypes = schema.getTypeMap();
  const allEnums = Object.keys(allTypes).filter((t) => isEnumType(allTypes[t]));
  if (typeof mapOrStr === "object") {
    if (!ignoreEnumValuesFromSchema) {
      for (const enumTypeName of allEnums) {
        const enumType = schema.getType(enumTypeName);
        for (const { name, value } of enumType.getValues()) {
          if (value && value !== name) {
            mapOrStr[enumTypeName] = mapOrStr[enumTypeName] || {};
            if (typeof mapOrStr[enumTypeName] !== "string" && !mapOrStr[enumTypeName][name]) {
              mapOrStr[enumTypeName][name] = typeof value === "string" ? escapeString(value) : value;
            }
          }
        }
      }
    }
    const invalidMappings = Object.keys(mapOrStr).filter((gqlName) => !allEnums.includes(gqlName));
    if (invalidMappings.length > 0) {
      throw new DetailedError(`Invalid 'enumValues' mapping!`, `The following types does not exist in your GraphQL schema: ${invalidMappings.join(", ")}`);
    }
    return Object.keys(mapOrStr).reduce((prev, gqlIdentifier) => {
      const pointer = mapOrStr[gqlIdentifier];
      if (typeof pointer === "string") {
        const mapper = parseMapper(pointer, gqlIdentifier);
        return __spreadProps(__spreadValues({}, prev), {
          [gqlIdentifier]: {
            isDefault: mapper.isExternal && mapper.default,
            typeIdentifier: gqlIdentifier,
            sourceFile: mapper.isExternal ? mapper.source : null,
            sourceIdentifier: mapper.type,
            importIdentifier: mapper.isExternal ? mapper.import : null,
            mappedValues: null
          }
        });
      } else if (typeof pointer === "object") {
        return __spreadProps(__spreadValues({}, prev), {
          [gqlIdentifier]: {
            isDefault: false,
            typeIdentifier: gqlIdentifier,
            sourceFile: null,
            sourceIdentifier: null,
            importIdentifier: null,
            mappedValues: pointer
          }
        });
      } else {
        throw new DetailedError(`Invalid "enumValues" configuration`, `Enum "${gqlIdentifier}": expected string or object (with enum values mapping)`);
      }
    }, {});
  } else if (typeof mapOrStr === "string") {
    return allEnums.filter((enumName) => !enumName.startsWith("__")).reduce((prev, enumName) => {
      return __spreadProps(__spreadValues({}, prev), {
        [enumName]: {
          isDefault: false,
          typeIdentifier: enumName,
          sourceFile: mapOrStr,
          sourceIdentifier: enumName,
          importIdentifier: enumName,
          mappedValues: null
        }
      });
    }, {});
  }
  return {};
}
const DEFAULT_DECLARATION_KINDS = {
  directive: "type",
  scalar: "type",
  input: "type",
  type: "type",
  interface: "type",
  arguments: "type"
};
function normalizeDeclarationKind(declarationKind) {
  if (typeof declarationKind === "string") {
    return {
      directive: declarationKind,
      scalar: declarationKind,
      input: declarationKind,
      type: declarationKind,
      interface: declarationKind,
      arguments: declarationKind
    };
  }
  return __spreadValues(__spreadValues({}, DEFAULT_DECLARATION_KINDS), declarationKind);
}
const DEFAULT_AVOID_OPTIONALS = {
  object: false,
  inputValue: false,
  field: false,
  defaultValue: false,
  resolvers: false
};
function normalizeAvoidOptionals(avoidOptionals) {
  if (typeof avoidOptionals === "boolean") {
    return {
      object: avoidOptionals,
      inputValue: avoidOptionals,
      field: avoidOptionals,
      defaultValue: avoidOptionals,
      resolvers: avoidOptionals
    };
  }
  return __spreadValues(__spreadValues({}, DEFAULT_AVOID_OPTIONALS), avoidOptionals);
}
function generateFragmentImportStatement(statement, kind) {
  const _a = statement, { importSource: fragmentImportSource } = _a, rest = __objRest(_a, ["importSource"]);
  const { identifiers, path: path2, namespace } = fragmentImportSource;
  const importSource = {
    identifiers: identifiers.filter((fragmentImport) => kind === "both" || kind === fragmentImport.kind).map(({ name }) => name),
    path: path2,
    namespace
  };
  return generateImportStatement(__spreadProps(__spreadValues({
    importSource
  }, rest), {
    typesImport: kind === "type" ? statement.typesImport : false
  }));
}
function generateImportStatement(statement) {
  const { baseDir, importSource, outputPath, typesImport } = statement;
  const importPath = resolveImportPath(baseDir, outputPath, importSource.path);
  const importNames = importSource.identifiers && importSource.identifiers.length ? `{ ${Array.from(new Set(importSource.identifiers)).join(", ")} }` : "*";
  const importAlias = importSource.namespace ? ` as ${importSource.namespace}` : "";
  const importStatement = typesImport ? "import type" : "import";
  return `${importStatement} ${importNames}${importAlias} from '${importPath}';${importAlias ? "\n" : ""}`;
}
function resolveImportPath(baseDir, outputPath, sourcePath) {
  const shouldAbsolute = !sourcePath.startsWith("~");
  if (shouldAbsolute) {
    const absGeneratedFilePath = pathBrowserify.resolve(baseDir, outputPath);
    const absImportFilePath = pathBrowserify.resolve(baseDir, sourcePath);
    return resolveRelativeImport(absGeneratedFilePath, absImportFilePath);
  } else {
    return sourcePath.replace(`~`, "");
  }
}
function resolveRelativeImport(from, to) {
  if (!pathBrowserify.isAbsolute(from)) {
    throw new Error(`Argument 'from' must be an absolute path, '${from}' given.`);
  }
  if (!pathBrowserify.isAbsolute(to)) {
    throw new Error(`Argument 'to' must be an absolute path, '${to}' given.`);
  }
  return fixLocalFilePath(clearExtension(pathBrowserify.relative(pathBrowserify.dirname(from), to)));
}
function clearExtension(path2) {
  const parsedPath = parseFilepath(path2);
  return pathBrowserify.join(parsedPath.dir, parsedPath.name).replace(/\\/g, "/");
}
function fixLocalFilePath(path2) {
  return !path2.startsWith("..") ? `./${path2}` : path2;
}
class BaseVisitor {
  constructor(rawConfig, additionalConfig) {
    var _a;
    this._declarationBlockConfig = {};
    this._parsedConfig = __spreadValues({
      convert: convertFactory(rawConfig),
      typesPrefix: rawConfig.typesPrefix || "",
      typesSuffix: rawConfig.typesSuffix || "",
      externalFragments: rawConfig.externalFragments || [],
      fragmentImports: rawConfig.fragmentImports || [],
      addTypename: !rawConfig.skipTypename,
      nonOptionalTypename: !!rawConfig.nonOptionalTypename,
      useTypeImports: !!rawConfig.useTypeImports,
      dedupeFragments: !!rawConfig.dedupeFragments,
      allowEnumStringTypes: !!rawConfig.allowEnumStringTypes,
      inlineFragmentTypes: (_a = rawConfig.inlineFragmentTypes) !== null && _a !== void 0 ? _a : "inline"
    }, additionalConfig || {});
    this.scalars = {};
    Object.keys(this.config.scalars || {}).forEach((key) => {
      this.scalars[key] = this.config.scalars[key].type;
    });
    autoBind(this);
  }
  getVisitorKindContextFromAncestors(ancestors) {
    if (!ancestors) {
      return [];
    }
    return ancestors.map((t) => t.kind).filter(Boolean);
  }
  get config() {
    return this._parsedConfig;
  }
  convertName(node, options) {
    const useTypesPrefix = typeof (options && options.useTypesPrefix) === "boolean" ? options.useTypesPrefix : true;
    const useTypesSuffix = typeof (options && options.useTypesSuffix) === "boolean" ? options.useTypesSuffix : true;
    let convertedName = "";
    if (useTypesPrefix) {
      convertedName += this.config.typesPrefix;
    }
    convertedName += this.config.convert(node, options);
    if (useTypesSuffix) {
      convertedName += this.config.typesSuffix;
    }
    return convertedName;
  }
  getOperationSuffix(node, operationType) {
    const { omitOperationSuffix = false, dedupeOperationSuffix = false } = this.config;
    const operationName = typeof node === "string" ? node : node.name ? node.name.value : "";
    return omitOperationSuffix ? "" : dedupeOperationSuffix && operationName.toLowerCase().endsWith(operationType.toLowerCase()) ? "" : operationType;
  }
  getFragmentSuffix(node) {
    return this.getOperationSuffix(node, "Fragment");
  }
  getFragmentName(node) {
    return this.convertName(node, {
      suffix: this.getFragmentSuffix(node),
      useTypesPrefix: false
    });
  }
  getFragmentVariableName(node) {
    const { omitOperationSuffix = false, dedupeOperationSuffix = false, fragmentVariableSuffix = "FragmentDoc", fragmentVariablePrefix = "" } = this.config;
    const fragmentName = typeof node === "string" ? node : node.name.value;
    const suffix = omitOperationSuffix ? "" : dedupeOperationSuffix && fragmentName.toLowerCase().endsWith("fragment") && fragmentVariableSuffix.toLowerCase().startsWith("fragment") ? fragmentVariableSuffix.substring("fragment".length) : fragmentVariableSuffix;
    return this.convertName(node, {
      prefix: fragmentVariablePrefix,
      suffix,
      useTypesPrefix: false
    });
  }
  getPunctuation(_declarationKind) {
    return "";
  }
}
class OperationVariablesToObject {
  constructor(_scalars, _convertName, _namespacedImportName = null, _enumNames = [], _enumPrefix = true, _enumValues = {}, _applyCoercion = false, _directiveArgumentAndInputFieldMappings = {}) {
    this._scalars = _scalars;
    this._convertName = _convertName;
    this._namespacedImportName = _namespacedImportName;
    this._enumNames = _enumNames;
    this._enumPrefix = _enumPrefix;
    this._enumValues = _enumValues;
    this._applyCoercion = _applyCoercion;
    this._directiveArgumentAndInputFieldMappings = _directiveArgumentAndInputFieldMappings;
    autoBind(this);
  }
  getName(node) {
    if (node.name) {
      if (typeof node.name === "string") {
        return node.name;
      }
      return node.name.value;
    } else if (node.variable) {
      return node.variable.name.value;
    }
    return null;
  }
  transform(variablesNode) {
    if (!variablesNode || variablesNode.length === 0) {
      return null;
    }
    return variablesNode.map((variable) => indent(this.transformVariable(variable))).join(`${this.getPunctuation()}
`) + this.getPunctuation();
  }
  getScalar(name) {
    const prefix = this._namespacedImportName ? `${this._namespacedImportName}.` : "";
    return `${prefix}Scalars['${name}']`;
  }
  getDirectiveMapping(name) {
    return `DirectiveArgumentAndInputFieldMappings['${name}']`;
  }
  getDirectiveOverrideType(directives) {
    if (!this._directiveArgumentAndInputFieldMappings)
      return null;
    const type = directives.map((directive) => {
      const directiveName = directive.name.value;
      if (this._directiveArgumentAndInputFieldMappings[directiveName]) {
        return this.getDirectiveMapping(directiveName);
      }
      return null;
    }).reverse().find((a) => !!a);
    return type || null;
  }
  transformVariable(variable) {
    let typeValue = null;
    const prefix = this._namespacedImportName ? `${this._namespacedImportName}.` : "";
    if (typeof variable.type === "string") {
      typeValue = variable.type;
    } else {
      const baseType = getBaseTypeNode(variable.type);
      const overrideType = variable.directives ? this.getDirectiveOverrideType(variable.directives) : null;
      const typeName = baseType.name.value;
      if (overrideType) {
        typeValue = overrideType;
      } else if (this._scalars[typeName]) {
        typeValue = this.getScalar(typeName);
      } else if (this._enumValues[typeName] && this._enumValues[typeName].sourceFile) {
        typeValue = this._enumValues[typeName].typeIdentifier || this._enumValues[typeName].sourceIdentifier;
      } else {
        typeValue = `${prefix}${this._convertName(baseType, {
          useTypesPrefix: this._enumNames.includes(typeName) ? this._enumPrefix : true
        })}`;
      }
    }
    const fieldName = this.getName(variable);
    const fieldType = this.wrapAstTypeWithModifiers(typeValue, variable.type, this._applyCoercion);
    const hasDefaultValue = variable.defaultValue != null && typeof variable.defaultValue !== "undefined";
    const isNonNullType2 = variable.type.kind === Kind.NON_NULL_TYPE;
    const formattedFieldString = this.formatFieldString(fieldName, isNonNullType2, hasDefaultValue);
    const formattedTypeString = this.formatTypeString(fieldType, isNonNullType2, hasDefaultValue);
    return `${formattedFieldString}: ${formattedTypeString}`;
  }
  wrapAstTypeWithModifiers(_baseType, _typeNode, _applyCoercion) {
    throw new Error(`You must override "wrapAstTypeWithModifiers" of OperationVariablesToObject!`);
  }
  formatFieldString(fieldName, isNonNullType2, _hasDefaultValue) {
    return fieldName;
  }
  formatTypeString(fieldType, isNonNullType2, hasDefaultValue) {
    const prefix = this._namespacedImportName ? `${this._namespacedImportName}.` : "";
    if (hasDefaultValue) {
      return `${prefix}Maybe<${fieldType}>`;
    }
    return fieldType;
  }
  getPunctuation() {
    return ",";
  }
}
class BaseTypesVisitor extends BaseVisitor {
  constructor(_schema, rawConfig, additionalConfig, defaultScalars = DEFAULT_SCALARS) {
    var _a;
    super(rawConfig, __spreadValues({
      enumPrefix: getConfigValue(rawConfig.enumPrefix, true),
      onlyOperationTypes: getConfigValue(rawConfig.onlyOperationTypes, false),
      addUnderscoreToArgsType: getConfigValue(rawConfig.addUnderscoreToArgsType, false),
      enumValues: parseEnumValues({
        schema: _schema,
        mapOrStr: rawConfig.enumValues,
        ignoreEnumValuesFromSchema: rawConfig.ignoreEnumValuesFromSchema
      }),
      declarationKind: normalizeDeclarationKind(rawConfig.declarationKind),
      scalars: buildScalarsFromConfig(_schema, rawConfig, defaultScalars),
      fieldWrapperValue: getConfigValue(rawConfig.fieldWrapperValue, "T"),
      wrapFieldDefinitions: getConfigValue(rawConfig.wrapFieldDefinitions, false),
      entireFieldWrapperValue: getConfigValue(rawConfig.entireFieldWrapperValue, "T"),
      wrapEntireDefinitions: getConfigValue(rawConfig.wrapEntireFieldDefinitions, false),
      ignoreEnumValuesFromSchema: getConfigValue(rawConfig.ignoreEnumValuesFromSchema, false),
      directiveArgumentAndInputFieldMappings: transformDirectiveArgumentAndInputFieldMappings((_a = rawConfig.directiveArgumentAndInputFieldMappings) !== null && _a !== void 0 ? _a : {}, rawConfig.directiveArgumentAndInputFieldMappingTypeSuffix)
    }, additionalConfig));
    this._schema = _schema;
    this._argumentsTransformer = new OperationVariablesToObject(this.scalars, this.convertName);
  }
  getExportPrefix() {
    return "export ";
  }
  getFieldWrapperValue() {
    if (this.config.fieldWrapperValue) {
      return `${this.getExportPrefix()}type FieldWrapper<T> = ${this.config.fieldWrapperValue};`;
    }
    return "";
  }
  getEntireFieldWrapperValue() {
    if (this.config.entireFieldWrapperValue) {
      return `${this.getExportPrefix()}type EntireFieldWrapper<T> = ${this.config.entireFieldWrapperValue};`;
    }
    return "";
  }
  getScalarsImports() {
    return Object.keys(this.config.scalars).map((enumName) => {
      const mappedValue = this.config.scalars[enumName];
      if (mappedValue.isExternal) {
        return this._buildTypeImport(mappedValue.import, mappedValue.source, mappedValue.default);
      }
      return null;
    }).filter((a) => a);
  }
  getDirectiveArgumentAndInputFieldMappingsImports() {
    return Object.keys(this.config.directiveArgumentAndInputFieldMappings).map((directive) => {
      const mappedValue = this.config.directiveArgumentAndInputFieldMappings[directive];
      if (mappedValue.isExternal) {
        return this._buildTypeImport(mappedValue.import, mappedValue.source, mappedValue.default);
      }
      return null;
    }).filter((a) => a);
  }
  get scalarsDefinition() {
    const allScalars = Object.keys(this.config.scalars).map((scalarName) => {
      const scalarValue = this.config.scalars[scalarName].type;
      const scalarType = this._schema.getType(scalarName);
      const comment = scalarType && scalarType.astNode && scalarType.description ? transformComment(scalarType.description, 1) : "";
      const { scalar } = this._parsedConfig.declarationKind;
      return comment + indent(`${scalarName}: ${scalarValue}${this.getPunctuation(scalar)}`);
    });
    return new DeclarationBlock(this._declarationBlockConfig).export().asKind(this._parsedConfig.declarationKind.scalar).withName("Scalars").withComment("All built-in and custom scalars, mapped to their actual values").withBlock(allScalars.join("\n")).string;
  }
  get directiveArgumentAndInputFieldMappingsDefinition() {
    const directiveEntries = Object.entries(this.config.directiveArgumentAndInputFieldMappings);
    if (directiveEntries.length === 0) {
      return "";
    }
    const allDirectives = [];
    for (const [directiveName, parsedMapper] of directiveEntries) {
      const directiveType = this._schema.getDirective(directiveName);
      const comment = (directiveType === null || directiveType === void 0 ? void 0 : directiveType.astNode) && directiveType.description ? transformComment(directiveType.description, 1) : "";
      const { directive } = this._parsedConfig.declarationKind;
      allDirectives.push(comment + indent(`${directiveName}: ${parsedMapper.type}${this.getPunctuation(directive)}`));
    }
    return new DeclarationBlock(this._declarationBlockConfig).export().asKind(this._parsedConfig.declarationKind.directive).withName("DirectiveArgumentAndInputFieldMappings").withComment("Type overrides using directives").withBlock(allDirectives.join("\n")).string;
  }
  setDeclarationBlockConfig(config) {
    this._declarationBlockConfig = config;
  }
  setArgumentsTransformer(argumentsTransfomer) {
    this._argumentsTransformer = argumentsTransfomer;
  }
  NonNullType(node) {
    const asString = node.type;
    return asString;
  }
  getInputObjectDeclarationBlock(node) {
    return new DeclarationBlock(this._declarationBlockConfig).export().asKind(this._parsedConfig.declarationKind.input).withName(this.convertName(node)).withComment(node.description).withBlock(node.fields.join("\n"));
  }
  InputObjectTypeDefinition(node) {
    return this.getInputObjectDeclarationBlock(node).string;
  }
  InputValueDefinition(node) {
    const comment = transformComment(node.description, 1);
    const { input } = this._parsedConfig.declarationKind;
    let type = node.type;
    if (node.directives && this.config.directiveArgumentAndInputFieldMappings) {
      type = this._getDirectiveOverrideType(node.directives) || type;
    }
    return comment + indent(`${node.name}: ${type}${this.getPunctuation(input)}`);
  }
  Name(node) {
    return node.value;
  }
  FieldDefinition(node) {
    const typeString = node.type;
    const { type } = this._parsedConfig.declarationKind;
    const comment = this.getFieldComment(node);
    return comment + indent(`${node.name}: ${typeString}${this.getPunctuation(type)}`);
  }
  UnionTypeDefinition(node, key, parent) {
    if (this.config.onlyOperationTypes)
      return "";
    const originalNode = parent[key];
    const possibleTypes = originalNode.types.map((t) => this.scalars[t.name.value] ? this._getScalar(t.name.value) : this.convertName(t)).join(" | ");
    return new DeclarationBlock(this._declarationBlockConfig).export().asKind("type").withName(this.convertName(node)).withComment(node.description).withContent(possibleTypes).string;
  }
  mergeInterfaces(interfaces, hasOtherFields) {
    return interfaces.join(" & ") + (interfaces.length && hasOtherFields ? " & " : "");
  }
  appendInterfacesAndFieldsToBlock(block, interfaces, fields) {
    block.withContent(this.mergeInterfaces(interfaces, fields.length > 0));
    block.withBlock(this.mergeAllFields(fields, interfaces.length > 0));
  }
  getObjectTypeDeclarationBlock(node, originalNode) {
    const optionalTypename = this.config.nonOptionalTypename ? "__typename" : "__typename?";
    const { type, interface: interfacesType } = this._parsedConfig.declarationKind;
    const allFields = [
      ...this.config.addTypename ? [
        indent(`${this.config.immutableTypes ? "readonly " : ""}${optionalTypename}: '${node.name}'${this.getPunctuation(type)}`)
      ] : [],
      ...node.fields
    ];
    const interfacesNames = originalNode.interfaces ? originalNode.interfaces.map((i) => this.convertName(i)) : [];
    const declarationBlock = new DeclarationBlock(this._declarationBlockConfig).export().asKind(type).withName(this.convertName(node)).withComment(node.description);
    if (type === "interface" || type === "class") {
      if (interfacesNames.length > 0) {
        const keyword = interfacesType === "interface" && type === "class" ? "implements" : "extends";
        declarationBlock.withContent(`${keyword} ` + interfacesNames.join(", ") + (allFields.length > 0 ? " " : " {}"));
      }
      declarationBlock.withBlock(this.mergeAllFields(allFields, false));
    } else {
      this.appendInterfacesAndFieldsToBlock(declarationBlock, interfacesNames, allFields);
    }
    return declarationBlock;
  }
  getFieldComment(node) {
    let commentText = node.description;
    const deprecationDirective = node.directives.find((v) => v.name === "deprecated");
    if (deprecationDirective) {
      const deprecationReason = this.getDeprecationReason(deprecationDirective);
      commentText = `${commentText ? `${commentText}
` : ""}@deprecated ${deprecationReason}`;
    }
    const comment = transformComment(commentText, 1);
    return comment;
  }
  mergeAllFields(allFields, _hasInterfaces) {
    return allFields.join("\n");
  }
  ObjectTypeDefinition(node, key, parent) {
    if (this.config.onlyOperationTypes)
      return "";
    const originalNode = parent[key];
    return [this.getObjectTypeDeclarationBlock(node, originalNode).string, this.buildArgumentsBlock(originalNode)].filter((f) => f).join("\n\n");
  }
  getInterfaceTypeDeclarationBlock(node, _originalNode) {
    const declarationBlock = new DeclarationBlock(this._declarationBlockConfig).export().asKind(this._parsedConfig.declarationKind.interface).withName(this.convertName(node)).withComment(node.description);
    return declarationBlock.withBlock(node.fields.join("\n"));
  }
  InterfaceTypeDefinition(node, key, parent) {
    if (this.config.onlyOperationTypes)
      return "";
    const originalNode = parent[key];
    return [this.getInterfaceTypeDeclarationBlock(node, originalNode).string, this.buildArgumentsBlock(originalNode)].filter((f) => f).join("\n\n");
  }
  ScalarTypeDefinition(_node) {
    return "";
  }
  _buildTypeImport(identifier, source, asDefault = false) {
    const { useTypeImports } = this.config;
    if (asDefault) {
      if (useTypeImports) {
        return `import type { default as ${identifier} } from '${source}';`;
      }
      return `import ${identifier} from '${source}';`;
    }
    return `import${useTypeImports ? " type" : ""} { ${identifier} } from '${source}';`;
  }
  handleEnumValueMapper(typeIdentifier, importIdentifier, sourceIdentifier, sourceFile) {
    const importStatement = this._buildTypeImport(importIdentifier || sourceIdentifier, sourceFile);
    if (importIdentifier !== sourceIdentifier || sourceIdentifier !== typeIdentifier) {
      return [importStatement, `import ${typeIdentifier} = ${sourceIdentifier};`];
    }
    return [importStatement];
  }
  getEnumsImports() {
    return Object.keys(this.config.enumValues).flatMap((enumName) => {
      const mappedValue = this.config.enumValues[enumName];
      if (mappedValue.sourceFile) {
        if (mappedValue.isDefault) {
          return [this._buildTypeImport(mappedValue.typeIdentifier, mappedValue.sourceFile, true)];
        }
        return this.handleEnumValueMapper(mappedValue.typeIdentifier, mappedValue.importIdentifier, mappedValue.sourceIdentifier, mappedValue.sourceFile);
      }
      return [];
    }).filter(Boolean);
  }
  EnumTypeDefinition(node) {
    const enumName = node.name;
    if (this.config.enumValues[enumName] && this.config.enumValues[enumName].sourceFile) {
      return null;
    }
    return new DeclarationBlock(this._declarationBlockConfig).export().asKind("enum").withName(this.convertName(node, { useTypesPrefix: this.config.enumPrefix })).withComment(node.description).withBlock(this.buildEnumValuesBlock(enumName, node.values)).string;
  }
  StringValue(node) {
    return node.value;
  }
  makeValidEnumIdentifier(identifier) {
    if (/^[0-9]/.exec(identifier)) {
      return wrapWithSingleQuotes(identifier, true);
    }
    return identifier;
  }
  buildEnumValuesBlock(typeName, values) {
    const schemaEnumType = this._schema ? this._schema.getType(typeName) : void 0;
    return values.map((enumOption) => {
      const optionName = this.makeValidEnumIdentifier(this.convertName(enumOption, { useTypesPrefix: false, transformUnderscore: true }));
      const comment = transformComment(enumOption.description, 1);
      const schemaEnumValue = schemaEnumType && !this.config.ignoreEnumValuesFromSchema ? schemaEnumType.getValue(enumOption.name).value : void 0;
      let enumValue = typeof schemaEnumValue !== "undefined" ? schemaEnumValue : enumOption.name;
      if (this.config.enumValues[typeName] && this.config.enumValues[typeName].mappedValues && typeof this.config.enumValues[typeName].mappedValues[enumValue] !== "undefined") {
        enumValue = this.config.enumValues[typeName].mappedValues[enumValue];
      }
      return comment + indent(`${optionName}${this._declarationBlockConfig.enumNameValueSeparator} ${wrapWithSingleQuotes(enumValue, typeof schemaEnumValue !== "undefined")}`);
    }).join(",\n");
  }
  DirectiveDefinition(_node) {
    return "";
  }
  getArgumentsObjectDeclarationBlock(node, name, field) {
    return new DeclarationBlock(this._declarationBlockConfig).export().asKind(this._parsedConfig.declarationKind.arguments).withName(this.convertName(name)).withComment(node.description).withBlock(this._argumentsTransformer.transform(field.arguments));
  }
  getArgumentsObjectTypeDefinition(node, name, field) {
    return this.getArgumentsObjectDeclarationBlock(node, name, field).string;
  }
  buildArgumentsBlock(node) {
    const fieldsWithArguments = node.fields.filter((field) => field.arguments && field.arguments.length > 0) || [];
    return fieldsWithArguments.map((field) => {
      const name = node.name.value + (this.config.addUnderscoreToArgsType ? "_" : "") + this.convertName(field, {
        useTypesPrefix: false,
        useTypesSuffix: false
      }) + "Args";
      return this.getArgumentsObjectTypeDefinition(node, name, field);
    }).join("\n\n");
  }
  _getScalar(name) {
    return `Scalars['${name}']`;
  }
  _getDirectiveArgumentNadInputFieldMapping(name) {
    return `DirectiveArgumentAndInputFieldMappings['${name}']`;
  }
  _getDirectiveOverrideType(directives) {
    const type = directives.map((directive) => {
      const directiveName = directive.name;
      if (this.config.directiveArgumentAndInputFieldMappings[directiveName]) {
        return this._getDirectiveArgumentNadInputFieldMapping(directiveName);
      }
      return null;
    }).reverse().find((a) => !!a);
    return type || null;
  }
  _getTypeForNode(node) {
    const typeAsString = node.name;
    if (this.scalars[typeAsString]) {
      return this._getScalar(typeAsString);
    } else if (this.config.enumValues[typeAsString]) {
      return this.config.enumValues[typeAsString].typeIdentifier;
    }
    const schemaType = this._schema.getType(node.name);
    if (schemaType && isEnumType(schemaType)) {
      return this.convertName(node, { useTypesPrefix: this.config.enumPrefix });
    }
    return this.convertName(node);
  }
  NamedType(node, key, parent, path2, ancestors) {
    const currentVisitContext = this.getVisitorKindContextFromAncestors(ancestors);
    const isVisitingInputType = currentVisitContext.includes(Kind.INPUT_OBJECT_TYPE_DEFINITION);
    const typeToUse = this._getTypeForNode(node);
    if (!isVisitingInputType && this.config.fieldWrapperValue && this.config.wrapFieldDefinitions) {
      return `FieldWrapper<${typeToUse}>`;
    }
    return typeToUse;
  }
  ListType(node, key, parent, path2, ancestors) {
    const asString = node.type;
    return this.wrapWithListType(asString);
  }
  SchemaDefinition() {
    return null;
  }
  getDeprecationReason(directive) {
    if (directive.name === "deprecated") {
      const hasArguments = directive.arguments.length > 0;
      let reason = "Field no longer supported";
      if (hasArguments) {
        reason = directive.arguments[0].value;
      }
      return reason;
    }
  }
  wrapWithListType(str) {
    return `Array<${str}>`;
  }
}
function getRootType(operation, schema) {
  switch (operation) {
    case "query":
      return schema.getQueryType();
    case "mutation":
      return schema.getMutationType();
    case "subscription":
      return schema.getSubscriptionType();
  }
  throw new Error(`Unknown operation type: ${operation}`);
}
class BaseDocumentsVisitor extends BaseVisitor {
  constructor(rawConfig, additionalConfig, _schema, defaultScalars = DEFAULT_SCALARS) {
    super(rawConfig, __spreadValues({
      exportFragmentSpreadSubTypes: getConfigValue(rawConfig.exportFragmentSpreadSubTypes, false),
      enumPrefix: getConfigValue(rawConfig.enumPrefix, true),
      preResolveTypes: getConfigValue(rawConfig.preResolveTypes, true),
      dedupeOperationSuffix: getConfigValue(rawConfig.dedupeOperationSuffix, false),
      omitOperationSuffix: getConfigValue(rawConfig.omitOperationSuffix, false),
      skipTypeNameForRoot: getConfigValue(rawConfig.skipTypeNameForRoot, false),
      namespacedImportName: getConfigValue(rawConfig.namespacedImportName, null),
      experimentalFragmentVariables: getConfigValue(rawConfig.experimentalFragmentVariables, false),
      addTypename: !rawConfig.skipTypename,
      globalNamespace: !!rawConfig.globalNamespace,
      operationResultSuffix: getConfigValue(rawConfig.operationResultSuffix, ""),
      scalars: buildScalarsFromConfig(_schema, rawConfig, defaultScalars)
    }, additionalConfig || {}));
    this._schema = _schema;
    this._unnamedCounter = 1;
    this._globalDeclarations = /* @__PURE__ */ new Set();
    autoBind(this);
    this._variablesTransfomer = new OperationVariablesToObject(this.scalars, this.convertName, this.config.namespacedImportName);
  }
  getGlobalDeclarations(noExport = false) {
    return Array.from(this._globalDeclarations).map((t) => noExport ? t : `export ${t}`);
  }
  setSelectionSetHandler(handler) {
    this._selectionSetToObject = handler;
  }
  setDeclarationBlockConfig(config) {
    this._declarationBlockConfig = config;
  }
  setVariablesTransformer(variablesTransfomer) {
    this._variablesTransfomer = variablesTransfomer;
  }
  get schema() {
    return this._schema;
  }
  get addTypename() {
    return this._parsedConfig.addTypename;
  }
  handleAnonymousOperation(node) {
    const name = node.name && node.name.value;
    if (name) {
      return this.convertName(name, {
        useTypesPrefix: false,
        useTypesSuffix: false
      });
    }
    return this.convertName(this._unnamedCounter++ + "", {
      prefix: "Unnamed_",
      suffix: "_",
      useTypesPrefix: false,
      useTypesSuffix: false
    });
  }
  FragmentDefinition(node) {
    const fragmentRootType = this._schema.getType(node.typeCondition.name.value);
    const selectionSet = this._selectionSetToObject.createNext(fragmentRootType, node.selectionSet);
    const fragmentSuffix = this.getFragmentSuffix(node);
    return [
      selectionSet.transformFragmentSelectionSetToTypes(node.name.value, fragmentSuffix, this._declarationBlockConfig),
      this.config.experimentalFragmentVariables ? new DeclarationBlock(__spreadProps(__spreadValues({}, this._declarationBlockConfig), {
        blockTransformer: (t) => this.applyVariablesWrapper(t)
      })).export().asKind("type").withName(this.convertName(node.name.value, {
        suffix: fragmentSuffix + "Variables"
      })).withBlock(this._variablesTransfomer.transform(node.variableDefinitions)).string : void 0
    ].filter((r) => r).join("\n\n");
  }
  applyVariablesWrapper(variablesBlock) {
    return variablesBlock;
  }
  OperationDefinition(node) {
    const name = this.handleAnonymousOperation(node);
    const operationRootType = getRootType(node.operation, this._schema);
    if (!operationRootType) {
      throw new Error(`Unable to find root schema type for operation type "${node.operation}"!`);
    }
    const selectionSet = this._selectionSetToObject.createNext(operationRootType, node.selectionSet);
    const visitedOperationVariables = this._variablesTransfomer.transform(node.variableDefinitions);
    const operationType = pascalCase(node.operation);
    const operationTypeSuffix = this.getOperationSuffix(name, operationType);
    const operationResult = new DeclarationBlock(this._declarationBlockConfig).export().asKind("type").withName(this.convertName(name, {
      suffix: operationTypeSuffix + this._parsedConfig.operationResultSuffix
    })).withContent(selectionSet.transformSelectionSet()).string;
    const operationVariables = new DeclarationBlock(__spreadProps(__spreadValues({}, this._declarationBlockConfig), {
      blockTransformer: (t) => this.applyVariablesWrapper(t)
    })).export().asKind("type").withName(this.convertName(name, {
      suffix: operationTypeSuffix + "Variables"
    })).withBlock(visitedOperationVariables).string;
    return [operationVariables, operationResult].filter((r) => r).join("\n\n");
  }
}
gqlTag.enableExperimentalFragmentVariables();
var DocumentMode;
(function(DocumentMode2) {
  DocumentMode2["graphQLTag"] = "graphQLTag";
  DocumentMode2["documentNode"] = "documentNode";
  DocumentMode2["documentNodeImportFragments"] = "documentNodeImportFragments";
  DocumentMode2["external"] = "external";
  DocumentMode2["string"] = "string";
})(DocumentMode || (DocumentMode = {}));
const EXTENSIONS_TO_REMOVE = [".ts", ".tsx", ".js", ".jsx"];
class ClientSideBaseVisitor extends BaseVisitor {
  constructor(_schema, _fragments, rawConfig, additionalConfig, documents) {
    super(rawConfig, __spreadValues({
      scalars: buildScalarsFromConfig(_schema, rawConfig),
      dedupeOperationSuffix: getConfigValue(rawConfig.dedupeOperationSuffix, false),
      optimizeDocumentNode: getConfigValue(rawConfig.optimizeDocumentNode, true),
      omitOperationSuffix: getConfigValue(rawConfig.omitOperationSuffix, false),
      gqlImport: rawConfig.gqlImport || null,
      documentNodeImport: rawConfig.documentNodeImport || null,
      noExport: !!rawConfig.noExport,
      importOperationTypesFrom: getConfigValue(rawConfig.importOperationTypesFrom, null),
      operationResultSuffix: getConfigValue(rawConfig.operationResultSuffix, ""),
      documentVariablePrefix: getConfigValue(rawConfig.documentVariablePrefix, ""),
      documentVariableSuffix: getConfigValue(rawConfig.documentVariableSuffix, "Document"),
      fragmentVariablePrefix: getConfigValue(rawConfig.fragmentVariablePrefix, ""),
      fragmentVariableSuffix: getConfigValue(rawConfig.fragmentVariableSuffix, "FragmentDoc"),
      documentMode: ((rawConfig2) => {
        if (typeof rawConfig2.noGraphQLTag === "boolean") {
          return rawConfig2.noGraphQLTag ? DocumentMode.documentNode : DocumentMode.graphQLTag;
        }
        return getConfigValue(rawConfig2.documentMode, DocumentMode.graphQLTag);
      })(rawConfig),
      importDocumentNodeExternallyFrom: getConfigValue(rawConfig.importDocumentNodeExternallyFrom, ""),
      pureMagicComment: getConfigValue(rawConfig.pureMagicComment, false),
      experimentalFragmentVariables: getConfigValue(rawConfig.experimentalFragmentVariables, false)
    }, additionalConfig));
    this._schema = _schema;
    this._fragments = _fragments;
    this._collectedOperations = [];
    this._documents = [];
    this._additionalImports = [];
    this._imports = /* @__PURE__ */ new Set();
    this._documents = documents;
    autoBind(this);
  }
  _extractFragments(document, withNested = false) {
    if (!document) {
      return [];
    }
    const names = /* @__PURE__ */ new Set();
    oldVisit(document, {
      enter: {
        FragmentSpread: (node) => {
          names.add(node.name.value);
          if (withNested) {
            const foundFragment = this._fragments.find((f) => f.name === node.name.value);
            if (foundFragment) {
              const childItems = this._extractFragments(foundFragment.node, true);
              if (childItems && childItems.length > 0) {
                for (const item of childItems) {
                  names.add(item);
                }
              }
            }
          }
        }
      }
    });
    return Array.from(names);
  }
  _transformFragments(document) {
    const includeNestedFragments = this.config.documentMode === DocumentMode.documentNode || this.config.dedupeFragments && document.kind === "OperationDefinition";
    return this._extractFragments(document, includeNestedFragments).map((document2) => this.getFragmentVariableName(document2));
  }
  _includeFragments(fragments, nodeKind) {
    if (fragments && fragments.length > 0) {
      if (this.config.documentMode === DocumentMode.documentNode) {
        return this._fragments.filter((f) => fragments.includes(this.getFragmentVariableName(f.name))).map((fragment) => print$3(fragment.node)).join("\n");
      } else if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
        return "";
      } else {
        if (this.config.dedupeFragments && nodeKind !== "OperationDefinition") {
          return "";
        }
        return `${fragments.map((name) => "${" + name + "}").join("\n")}`;
      }
    }
    return "";
  }
  _prepareDocument(documentStr) {
    return documentStr;
  }
  _gql(node) {
    const fragments = this._transformFragments(node);
    const doc = this._prepareDocument(`
    ${print$3(node).split("\\").join("\\\\")}
    ${this._includeFragments(fragments, node.kind)}`);
    if (this.config.documentMode === DocumentMode.documentNode) {
      let gqlObj = gqlTag([doc]);
      if (this.config.optimizeDocumentNode) {
        gqlObj = optimizeDocumentNode(gqlObj);
      }
      return JSON.stringify(gqlObj);
    } else if (this.config.documentMode === DocumentMode.documentNodeImportFragments) {
      let gqlObj = gqlTag([doc]);
      if (this.config.optimizeDocumentNode) {
        gqlObj = optimizeDocumentNode(gqlObj);
      }
      if (fragments.length > 0 && (!this.config.dedupeFragments || node.kind === "OperationDefinition")) {
        const definitions = [
          ...gqlObj.definitions.map((t) => JSON.stringify(t)),
          ...fragments.map((name) => `...${name}.definitions`)
        ].join();
        return `{"kind":"${Kind.DOCUMENT}","definitions":[${definitions}]}`;
      }
      return JSON.stringify(gqlObj);
    } else if (this.config.documentMode === DocumentMode.string) {
      return "`" + doc + "`";
    }
    const gqlImport = this._parseImport(this.config.gqlImport || "graphql-tag");
    return (gqlImport.propName || "gql") + "`" + doc + "`";
  }
  _generateFragment(fragmentDocument) {
    const name = this.getFragmentVariableName(fragmentDocument);
    const fragmentTypeSuffix = this.getFragmentSuffix(fragmentDocument);
    return `export const ${name} =${this.config.pureMagicComment ? " /*#__PURE__*/" : ""} ${this._gql(fragmentDocument)}${this.getDocumentNodeSignature(this.convertName(fragmentDocument.name.value, {
      useTypesPrefix: true,
      suffix: fragmentTypeSuffix
    }), this.config.experimentalFragmentVariables ? this.convertName(fragmentDocument.name.value, {
      suffix: fragmentTypeSuffix + "Variables"
    }) : "unknown", fragmentDocument)};`;
  }
  get fragmentsGraph() {
    const graph = new DepGraph_1({ circular: true });
    for (const fragment of this._fragments) {
      if (graph.hasNode(fragment.name)) {
        const cachedAsString = print$3(graph.getNodeData(fragment.name).node);
        const asString = print$3(fragment.node);
        if (cachedAsString !== asString) {
          throw new Error(`Duplicated fragment called '${fragment.name}'!`);
        }
      }
      graph.addNode(fragment.name, fragment);
    }
    this._fragments.forEach((fragment) => {
      const depends = this._extractFragments(fragment.node);
      if (depends && depends.length > 0) {
        depends.forEach((name) => {
          graph.addDependency(fragment.name, name);
        });
      }
    });
    return graph;
  }
  get fragments() {
    if (this._fragments.length === 0 || this.config.documentMode === DocumentMode.external) {
      return "";
    }
    const graph = this.fragmentsGraph;
    const orderedDeps = graph.overallOrder();
    const localFragments = orderedDeps.filter((name) => !graph.getNodeData(name).isExternal).map((name) => this._generateFragment(graph.getNodeData(name).node));
    return localFragments.join("\n");
  }
  _parseImport(importStr) {
    if (importStr === "gql") {
      return {
        moduleName: null,
        propName: "gql"
      };
    }
    if (importStr.includes(".gql")) {
      return {
        moduleName: null,
        propName: importStr
      };
    }
    const [moduleName, propName] = importStr.split("#");
    return {
      moduleName,
      propName
    };
  }
  _generateImport({ moduleName, propName }, varName, isTypeImport) {
    const typeImport = isTypeImport && this.config.useTypeImports ? "import type" : "import";
    const propAlias = propName === varName ? "" : ` as ${varName}`;
    if (moduleName) {
      return `${typeImport} ${propName ? `{ ${propName}${propAlias} }` : varName} from '${moduleName}';`;
    }
    return null;
  }
  clearExtension(path2) {
    const extension = pathBrowserify.extname(path2);
    if (EXTENSIONS_TO_REMOVE.includes(extension)) {
      return path2.replace(/\.[^/.]+$/, "");
    }
    return path2;
  }
  getImports(options = {}) {
    (this._additionalImports || []).forEach((i) => this._imports.add(i));
    switch (this.config.documentMode) {
      case DocumentMode.documentNode:
      case DocumentMode.documentNodeImportFragments: {
        const documentNodeImport = this._parseImport(this.config.documentNodeImport || "graphql#DocumentNode");
        const tagImport = this._generateImport(documentNodeImport, "DocumentNode", true);
        if (tagImport) {
          this._imports.add(tagImport);
        }
        break;
      }
      case DocumentMode.graphQLTag: {
        const gqlImport = this._parseImport(this.config.gqlImport || "graphql-tag");
        const tagImport = this._generateImport(gqlImport, "gql", false);
        if (tagImport) {
          this._imports.add(tagImport);
        }
        break;
      }
      case DocumentMode.external: {
        if (this._collectedOperations.length > 0) {
          if (this.config.importDocumentNodeExternallyFrom === "near-operation-file" && this._documents.length === 1) {
            this._imports.add(`import * as Operations from './${this.clearExtension(pathBrowserify.basename(this._documents[0].location))}';`);
          } else {
            if (!this.config.importDocumentNodeExternallyFrom) {
              console.warn("importDocumentNodeExternallyFrom must be provided if documentMode=external");
            }
            this._imports.add(`import * as Operations from '${this.clearExtension(this.config.importDocumentNodeExternallyFrom)}';`);
          }
        }
        break;
      }
    }
    if (!options.excludeFragments && !this.config.globalNamespace) {
      const { documentMode, fragmentImports } = this.config;
      if (documentMode === DocumentMode.graphQLTag || documentMode === DocumentMode.string || documentMode === DocumentMode.documentNodeImportFragments) {
        const alreadyImported = /* @__PURE__ */ new Map();
        const deduplicatedImports = fragmentImports.map((fragmentImport) => {
          const { path: path2, identifiers } = fragmentImport.importSource;
          if (!alreadyImported.has(path2)) {
            alreadyImported.set(path2, /* @__PURE__ */ new Set());
          }
          const alreadyImportedForPath = alreadyImported.get(path2);
          const newIdentifiers = identifiers.filter((identifier) => !alreadyImportedForPath.has(identifier.name));
          newIdentifiers.forEach((newIdentifier) => alreadyImportedForPath.add(newIdentifier.name));
          return __spreadProps(__spreadValues({}, fragmentImport), {
            importSource: __spreadProps(__spreadValues({}, fragmentImport.importSource), {
              identifiers: newIdentifiers
            })
          });
        }).filter((fragmentImport) => fragmentImport.importSource.identifiers.length > 0);
        deduplicatedImports.forEach((fragmentImport) => {
          if (fragmentImport.outputPath !== fragmentImport.importSource.path) {
            this._imports.add(generateFragmentImportStatement(fragmentImport, "document"));
          }
        });
      }
    }
    return Array.from(this._imports);
  }
  buildOperation(_node, _documentVariableName, _operationType, _operationResultType, _operationVariablesTypes, _hasRequiredVariables) {
    return null;
  }
  getDocumentNodeSignature(_resultType, _variablesTypes, _node) {
    if (this.config.documentMode === DocumentMode.documentNode || this.config.documentMode === DocumentMode.documentNodeImportFragments) {
      return ` as unknown as DocumentNode`;
    }
    return "";
  }
  checkVariablesRequirements(node) {
    const variables = node.variableDefinitions || [];
    if (variables.length === 0) {
      return false;
    }
    return variables.some((variableDef) => variableDef.type.kind === Kind.NON_NULL_TYPE && !variableDef.defaultValue);
  }
  getOperationVariableName(node) {
    return this.convertName(node, {
      suffix: this.config.documentVariableSuffix,
      prefix: this.config.documentVariablePrefix,
      useTypesPrefix: false
    });
  }
  OperationDefinition(node) {
    this._collectedOperations.push(node);
    const documentVariableName = this.getOperationVariableName(node);
    const operationType = pascalCase(node.operation);
    const operationTypeSuffix = this.getOperationSuffix(node, operationType);
    const operationResultType = this.convertName(node, {
      suffix: operationTypeSuffix + this._parsedConfig.operationResultSuffix
    });
    const operationVariablesTypes = this.convertName(node, {
      suffix: operationTypeSuffix + "Variables"
    });
    let documentString = "";
    if (this.config.documentMode !== DocumentMode.external) {
      if (documentVariableName !== "") {
        documentString = `${this.config.noExport ? "" : "export"} const ${documentVariableName} =${this.config.pureMagicComment ? " /*#__PURE__*/" : ""} ${this._gql(node)}${this.getDocumentNodeSignature(operationResultType, operationVariablesTypes, node)};`;
      }
    }
    const hasRequiredVariables = this.checkVariablesRequirements(node);
    const additional = this.buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes, hasRequiredVariables);
    return [documentString, additional].filter((a) => a).join("\n");
  }
}
function isMetadataFieldName(name) {
  return ["__schema", "__type"].includes(name);
}
const metadataFieldMap = {
  __schema: SchemaMetaFieldDef$1,
  __type: TypeMetaFieldDef$1
};
class SelectionSetToObject {
  constructor(_processor, _scalars, _schema, _convertName, _getFragmentSuffix, _loadedFragments, _config, _parentSchemaType, _selectionSet) {
    this._processor = _processor;
    this._scalars = _scalars;
    this._schema = _schema;
    this._convertName = _convertName;
    this._getFragmentSuffix = _getFragmentSuffix;
    this._loadedFragments = _loadedFragments;
    this._config = _config;
    this._parentSchemaType = _parentSchemaType;
    this._selectionSet = _selectionSet;
    this._primitiveFields = [];
    this._primitiveAliasedFields = [];
    this._linksFields = [];
    this._queriedForTypename = false;
    autoBind(this);
  }
  createNext(parentSchemaType, selectionSet) {
    return new SelectionSetToObject(this._processor, this._scalars, this._schema, this._convertName.bind(this), this._getFragmentSuffix.bind(this), this._loadedFragments, this._config, parentSchemaType, selectionSet);
  }
  _collectInlineFragments(parentType, nodes, types) {
    if (isListType(parentType) || isNonNullType(parentType)) {
      return this._collectInlineFragments(parentType.ofType, nodes, types);
    } else if (isObjectType(parentType)) {
      for (const node of nodes) {
        const typeOnSchema = node.typeCondition ? this._schema.getType(node.typeCondition.name.value) : parentType;
        const { fields, inlines, spreads } = separateSelectionSet(node.selectionSet.selections);
        const spreadsUsage = this.buildFragmentSpreadsUsage(spreads);
        const directives = node.directives || void 0;
        if (isObjectType(typeOnSchema)) {
          this._appendToTypeMap(types, typeOnSchema.name, fields);
          this._appendToTypeMap(types, typeOnSchema.name, spreadsUsage[typeOnSchema.name]);
          this._appendToTypeMap(types, typeOnSchema.name, directives);
          this._collectInlineFragments(typeOnSchema, inlines, types);
        } else if (isInterfaceType(typeOnSchema) && parentType.getInterfaces().includes(typeOnSchema)) {
          this._appendToTypeMap(types, parentType.name, fields);
          this._appendToTypeMap(types, parentType.name, spreadsUsage[parentType.name]);
          this._collectInlineFragments(typeOnSchema, inlines, types);
        }
      }
    } else if (isInterfaceType(parentType)) {
      const possibleTypes = getPossibleTypes(this._schema, parentType);
      for (const node of nodes) {
        const schemaType = node.typeCondition ? this._schema.getType(node.typeCondition.name.value) : parentType;
        const { fields, inlines, spreads } = separateSelectionSet(node.selectionSet.selections);
        const spreadsUsage = this.buildFragmentSpreadsUsage(spreads);
        if (isObjectType(schemaType) && possibleTypes.find((possibleType) => possibleType.name === schemaType.name)) {
          this._appendToTypeMap(types, schemaType.name, fields);
          this._appendToTypeMap(types, schemaType.name, spreadsUsage[schemaType.name]);
          this._collectInlineFragments(schemaType, inlines, types);
        } else if (isInterfaceType(schemaType) && schemaType.name === parentType.name) {
          for (const possibleType of possibleTypes) {
            this._appendToTypeMap(types, possibleType.name, fields);
            this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
            this._collectInlineFragments(schemaType, inlines, types);
          }
        } else {
          for (const possibleType of possibleTypes) {
            if (!node.typeCondition) {
              throw new Error("Invalid state. Expected type condition for interface spread on a interface field.");
            }
            const fragmentSpreadType = this._schema.getType(node.typeCondition.name.value);
            if (isTypeSubTypeOf(this._schema, possibleType, fragmentSpreadType)) {
              this._appendToTypeMap(types, possibleType.name, fields);
              this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
            }
          }
        }
      }
    } else if (isUnionType(parentType)) {
      const possibleTypes = parentType.getTypes();
      for (const node of nodes) {
        const schemaType = node.typeCondition ? this._schema.getType(node.typeCondition.name.value) : parentType;
        const { fields, inlines, spreads } = separateSelectionSet(node.selectionSet.selections);
        const spreadsUsage = this.buildFragmentSpreadsUsage(spreads);
        if (isObjectType(schemaType) && possibleTypes.find((possibleType) => possibleType.name === schemaType.name)) {
          this._appendToTypeMap(types, schemaType.name, fields);
          this._appendToTypeMap(types, schemaType.name, spreadsUsage[schemaType.name]);
          this._collectInlineFragments(schemaType, inlines, types);
        } else if (isInterfaceType(schemaType)) {
          const possibleInterfaceTypes = getPossibleTypes(this._schema, schemaType);
          for (const possibleType of possibleTypes) {
            if (possibleInterfaceTypes.find((possibleInterfaceType) => possibleInterfaceType.name === possibleType.name)) {
              this._appendToTypeMap(types, possibleType.name, fields);
              this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
              this._collectInlineFragments(schemaType, inlines, types);
            }
          }
        } else {
          for (const possibleType of possibleTypes) {
            this._appendToTypeMap(types, possibleType.name, fields);
            this._appendToTypeMap(types, possibleType.name, spreadsUsage[possibleType.name]);
          }
        }
      }
    }
  }
  _createInlineFragmentForFieldNodes(parentType, fieldNodes) {
    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: {
        kind: Kind.NAMED_TYPE,
        name: {
          kind: Kind.NAME,
          value: parentType.name
        }
      },
      directives: [],
      selectionSet: {
        kind: Kind.SELECTION_SET,
        selections: fieldNodes
      }
    };
  }
  buildFragmentSpreadsUsage(spreads) {
    const selectionNodesByTypeName = {};
    for (const spread of spreads) {
      const fragmentSpreadObject = this._loadedFragments.find((lf) => lf.name === spread.name.value);
      if (fragmentSpreadObject) {
        const schemaType = this._schema.getType(fragmentSpreadObject.onType);
        const possibleTypesForFragment = getPossibleTypes(this._schema, schemaType);
        for (const possibleType of possibleTypesForFragment) {
          const fragmentSuffix = this._getFragmentSuffix(spread.name.value);
          const usage = this.buildFragmentTypeName(spread.name.value, fragmentSuffix, possibleTypesForFragment.length === 1 ? null : possibleType.name);
          if (!selectionNodesByTypeName[possibleType.name]) {
            selectionNodesByTypeName[possibleType.name] = [];
          }
          selectionNodesByTypeName[possibleType.name].push({
            fragmentName: spread.name.value,
            typeName: usage,
            onType: fragmentSpreadObject.onType,
            selectionNodes: [...fragmentSpreadObject.node.selectionSet.selections]
          });
        }
      }
    }
    return selectionNodesByTypeName;
  }
  flattenSelectionSet(selections) {
    const selectionNodesByTypeName = /* @__PURE__ */ new Map();
    const inlineFragmentSelections = [];
    const fieldNodes = [];
    const fragmentSpreads = [];
    for (const selection of selections) {
      switch (selection.kind) {
        case Kind.FIELD:
          fieldNodes.push(selection);
          break;
        case Kind.INLINE_FRAGMENT:
          inlineFragmentSelections.push(selection);
          break;
        case Kind.FRAGMENT_SPREAD:
          fragmentSpreads.push(selection);
          break;
      }
    }
    if (fieldNodes.length) {
      inlineFragmentSelections.push(this._createInlineFragmentForFieldNodes(this._parentSchemaType, fieldNodes));
    }
    this._collectInlineFragments(this._parentSchemaType, inlineFragmentSelections, selectionNodesByTypeName);
    const fragmentsUsage = this.buildFragmentSpreadsUsage(fragmentSpreads);
    for (const [typeName, records] of Object.entries(fragmentsUsage)) {
      this._appendToTypeMap(selectionNodesByTypeName, typeName, records);
    }
    return selectionNodesByTypeName;
  }
  _appendToTypeMap(types, typeName, nodes) {
    if (!types.has(typeName)) {
      types.set(typeName, []);
    }
    if (nodes && nodes.length > 0) {
      types.get(typeName).push(...nodes);
    }
  }
  _buildGroupedSelections() {
    if (!this._selectionSet || !this._selectionSet.selections || this._selectionSet.selections.length === 0) {
      return { grouped: {}, mustAddEmptyObject: true };
    }
    const selectionNodesByTypeName = this.flattenSelectionSet(this._selectionSet.selections);
    let mustAddEmptyObject = false;
    const grouped = getPossibleTypes(this._schema, this._parentSchemaType).reduce((prev, type) => {
      const typeName = type.name;
      const schemaType = this._schema.getType(typeName);
      if (!isObjectType(schemaType)) {
        throw new TypeError(`Invalid state! Schema type ${typeName} is not a valid GraphQL object!`);
      }
      const selectionNodes = selectionNodesByTypeName.get(typeName) || [];
      if (!prev[typeName]) {
        prev[typeName] = [];
      }
      const transformedSet = this.buildSelectionSetString(schemaType, selectionNodes);
      if (transformedSet) {
        prev[typeName].push(transformedSet);
      } else {
        mustAddEmptyObject = true;
      }
      return prev;
    }, {});
    return { grouped, mustAddEmptyObject };
  }
  buildSelectionSetString(parentSchemaType, selectionNodes) {
    var _a, _b, _c;
    const primitiveFields = /* @__PURE__ */ new Map();
    const primitiveAliasFields = /* @__PURE__ */ new Map();
    const linkFieldSelectionSets = /* @__PURE__ */ new Map();
    let requireTypename = false;
    const fragmentsSpreadUsages = [];
    selectionNodes = [...selectionNodes];
    let inlineFragmentConditional = false;
    for (const selectionNode of selectionNodes) {
      if ("kind" in selectionNode) {
        if (selectionNode.kind === "Field") {
          if (!selectionNode.selectionSet) {
            if (selectionNode.alias) {
              primitiveAliasFields.set(selectionNode.alias.value, selectionNode);
            } else if (selectionNode.name.value === "__typename") {
              requireTypename = true;
            } else {
              primitiveFields.set(selectionNode.name.value, selectionNode);
            }
          } else {
            let selectedField = null;
            const fields2 = parentSchemaType.getFields();
            selectedField = fields2[selectionNode.name.value];
            if (isMetadataFieldName(selectionNode.name.value)) {
              selectedField = metadataFieldMap[selectionNode.name.value];
            }
            if (!selectedField) {
              continue;
            }
            const fieldName = getFieldNodeNameValue(selectionNode);
            let linkFieldNode = linkFieldSelectionSets.get(fieldName);
            if (!linkFieldNode) {
              linkFieldNode = {
                selectedFieldType: selectedField.type,
                field: selectionNode
              };
            } else {
              linkFieldNode = __spreadProps(__spreadValues({}, linkFieldNode), {
                field: __spreadProps(__spreadValues({}, linkFieldNode.field), {
                  selectionSet: mergeSelectionSets(linkFieldNode.field.selectionSet, selectionNode.selectionSet)
                })
              });
            }
            linkFieldSelectionSets.set(fieldName, linkFieldNode);
          }
        } else if (selectionNode.kind === "Directive") {
          if (["skip", "include"].includes((_a = selectionNode === null || selectionNode === void 0 ? void 0 : selectionNode.name) === null || _a === void 0 ? void 0 : _a.value)) {
            inlineFragmentConditional = true;
          }
        } else {
          throw new TypeError("Unexpected type.");
        }
        continue;
      }
      if (this._config.inlineFragmentTypes === "combine" || this._config.inlineFragmentTypes === "mask") {
        fragmentsSpreadUsages.push(selectionNode.typeName);
        continue;
      }
      const fragmentType = this._schema.getType(selectionNode.onType);
      if (fragmentType == null) {
        throw new TypeError(`Unexpected error: Type ${selectionNode.onType} does not exist within schema.`);
      }
      if (parentSchemaType.name === selectionNode.onType || parentSchemaType.getInterfaces().find((iinterface) => iinterface.name === selectionNode.onType) != null || isUnionType(fragmentType) && fragmentType.getTypes().find((objectType) => objectType.name === parentSchemaType.name)) {
        const flatten = this.flattenSelectionSet(selectionNode.selectionNodes);
        const typeNodes = (_b = flatten.get(parentSchemaType.name)) !== null && _b !== void 0 ? _b : [];
        selectionNodes.push(...typeNodes);
        for (const iinterface of parentSchemaType.getInterfaces()) {
          const typeNodes2 = (_c = flatten.get(iinterface.name)) !== null && _c !== void 0 ? _c : [];
          selectionNodes.push(...typeNodes2);
        }
      }
    }
    const linkFields = [];
    for (const { field, selectedFieldType } of linkFieldSelectionSets.values()) {
      const realSelectedFieldType = getBaseType(selectedFieldType);
      const selectionSet = this.createNext(realSelectedFieldType, field.selectionSet);
      const isConditional = hasConditionalDirectives(field) || inlineFragmentConditional;
      linkFields.push({
        alias: field.alias ? this._processor.config.formatNamedField(field.alias.value, selectedFieldType) : void 0,
        name: this._processor.config.formatNamedField(field.name.value, selectedFieldType, isConditional),
        type: realSelectedFieldType.name,
        selectionSet: this._processor.config.wrapTypeWithModifiers(selectionSet.transformSelectionSet().split(`
`).join(`
  `), selectedFieldType)
      });
    }
    const typeInfoField = this.buildTypeNameField(parentSchemaType, this._config.nonOptionalTypename, this._config.addTypename, requireTypename, this._config.skipTypeNameForRoot);
    const transformed = [
      ...typeInfoField ? this._processor.transformTypenameField(typeInfoField.type, typeInfoField.name) : [],
      ...this._processor.transformPrimitiveFields(parentSchemaType, Array.from(primitiveFields.values()).map((field) => ({
        isConditional: hasConditionalDirectives(field),
        fieldName: field.name.value
      }))),
      ...this._processor.transformAliasesPrimitiveFields(parentSchemaType, Array.from(primitiveAliasFields.values()).map((field) => ({
        alias: field.alias.value,
        fieldName: field.name.value
      }))),
      ...this._processor.transformLinkFields(linkFields)
    ].filter(Boolean);
    const allStrings = transformed.filter((t) => typeof t === "string");
    const allObjectsMerged = transformed.filter((t) => typeof t !== "string").map((t) => `${t.name}: ${t.type}`);
    let mergedObjectsAsString = null;
    if (allObjectsMerged.length > 0) {
      mergedObjectsAsString = this._processor.buildFieldsIntoObject(allObjectsMerged);
    }
    const fields = [...allStrings, mergedObjectsAsString].filter(Boolean);
    if (fragmentsSpreadUsages.length) {
      if (this._config.inlineFragmentTypes === "combine") {
        fields.push(...fragmentsSpreadUsages);
      } else if (this._config.inlineFragmentTypes === "mask") {
        fields.push(`{ ' $fragmentRefs': { ${fragmentsSpreadUsages.map((name) => `'${name}': ${name}`).join(`;`)} } }`);
      }
    }
    return this._processor.buildSelectionSetFromStrings(fields);
  }
  buildTypeNameField(type, nonOptionalTypename = this._config.nonOptionalTypename, addTypename = this._config.addTypename, queriedForTypename = this._queriedForTypename, skipTypeNameForRoot = this._config.skipTypeNameForRoot) {
    const rootTypes = getRootTypes(this._schema);
    if (rootTypes.has(type) && skipTypeNameForRoot && !queriedForTypename) {
      return null;
    }
    if (nonOptionalTypename || addTypename || queriedForTypename) {
      const optionalTypename = !queriedForTypename && !nonOptionalTypename;
      return {
        name: `${this._processor.config.formatNamedField("__typename")}${optionalTypename ? "?" : ""}`,
        type: `'${type.name}'`
      };
    }
    return null;
  }
  getUnknownType() {
    return "never";
  }
  getEmptyObjectType() {
    return `{}`;
  }
  getEmptyObjectTypeString(mustAddEmptyObject) {
    return mustAddEmptyObject ? " | " + this.getEmptyObjectType() : ``;
  }
  transformSelectionSet() {
    const { grouped, mustAddEmptyObject } = this._buildGroupedSelections();
    if (Object.keys(grouped).length === 0) {
      return this.getUnknownType();
    }
    return Object.keys(grouped).map((typeName) => {
      const relevant = grouped[typeName].filter(Boolean);
      if (relevant.length === 0) {
        return null;
      } else if (relevant.length === 1) {
        return relevant[0];
      } else {
        return `( ${relevant.join(" & ")} )`;
      }
    }).filter(Boolean).join(" | ") + this.getEmptyObjectTypeString(mustAddEmptyObject);
  }
  transformFragmentSelectionSetToTypes(fragmentName, fragmentSuffix, declarationBlockConfig) {
    const { grouped } = this._buildGroupedSelections();
    const subTypes = Object.keys(grouped).map((typeName) => {
      const possibleFields = grouped[typeName].filter(Boolean);
      const declarationName = this.buildFragmentTypeName(fragmentName, fragmentSuffix, typeName);
      if (possibleFields.length === 0) {
        if (!this._config.addTypename) {
          return { name: declarationName, content: this.getEmptyObjectType() };
        }
        return null;
      }
      return { name: declarationName, content: possibleFields.join(" & ") };
    }).filter(Boolean);
    const fragmentTypeName = this.buildFragmentTypeName(fragmentName, fragmentSuffix);
    const fragmentMaskPartial = this._config.inlineFragmentTypes === "mask" ? ` & { ' $fragmentName': '${fragmentTypeName}' }` : "";
    if (subTypes.length === 1) {
      return new DeclarationBlock(declarationBlockConfig).export().asKind("type").withName(fragmentTypeName).withContent(subTypes[0].content + fragmentMaskPartial).string;
    }
    return [
      ...subTypes.map((t) => new DeclarationBlock(declarationBlockConfig).export(this._config.exportFragmentSpreadSubTypes).asKind("type").withName(t.name).withContent(t.content).string),
      new DeclarationBlock(declarationBlockConfig).export().asKind("type").withName(fragmentTypeName).withContent(subTypes.map((t) => t.name).join(" | ")).string
    ].join("\n");
  }
  buildFragmentTypeName(name, suffix, typeName = "") {
    return this._convertName(name, {
      useTypesPrefix: true,
      suffix: typeName ? `_${typeName}_${suffix}` : suffix
    });
  }
}
class BaseSelectionSetProcessor {
  constructor(config) {
    this.config = config;
  }
  buildFieldsIntoObject(allObjectsMerged) {
    return `{ ${allObjectsMerged.join(", ")} }`;
  }
  buildSelectionSetFromStrings(pieces) {
    if (pieces.length === 0) {
      return null;
    } else if (pieces.length === 1) {
      return pieces[0];
    } else {
      return `(
  ${pieces.join(`
  & `)}
)`;
    }
  }
  transformPrimitiveFields(_schemaType, _fields) {
    throw new Error(`Please override "transformPrimitiveFields" as part of your BaseSelectionSetProcessor implementation!`);
  }
  transformAliasesPrimitiveFields(_schemaType, _fields) {
    throw new Error(`Please override "transformAliasesPrimitiveFields" as part of your BaseSelectionSetProcessor implementation!`);
  }
  transformLinkFields(_fields) {
    throw new Error(`Please override "transformLinkFields" as part of your BaseSelectionSetProcessor implementation!`);
  }
  transformTypenameField(_type, _name) {
    throw new Error(`Please override "transformTypenameField" as part of your BaseSelectionSetProcessor implementation!`);
  }
}
class PreResolveTypesProcessor extends BaseSelectionSetProcessor {
  transformTypenameField(type, name) {
    return [
      {
        type,
        name
      }
    ];
  }
  transformPrimitiveFields(schemaType, fields) {
    if (fields.length === 0) {
      return [];
    }
    return fields.map((field) => {
      const fieldObj = schemaType.getFields()[field.fieldName];
      const baseType = getBaseType(fieldObj.type);
      let typeToUse = baseType.name;
      const useInnerType = field.isConditional && isNonNullType(fieldObj.type);
      const innerType = useInnerType ? removeNonNullWrapper(fieldObj.type) : void 0;
      if (isEnumType(baseType)) {
        typeToUse = (this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : "") + this.config.convertName(baseType.name, { useTypesPrefix: this.config.enumPrefix });
      } else if (this.config.scalars[baseType.name]) {
        typeToUse = this.config.scalars[baseType.name];
      }
      const name = this.config.formatNamedField(field.fieldName, useInnerType ? innerType : fieldObj.type, field.isConditional);
      const wrappedType = this.config.wrapTypeWithModifiers(typeToUse, fieldObj.type);
      return {
        name,
        type: wrappedType
      };
    });
  }
  transformAliasesPrimitiveFields(schemaType, fields) {
    if (fields.length === 0) {
      return [];
    }
    return fields.map((aliasedField) => {
      if (aliasedField.fieldName === "__typename") {
        const name = this.config.formatNamedField(aliasedField.alias, null);
        return {
          name,
          type: `'${schemaType.name}'`
        };
      } else {
        const fieldObj = schemaType.getFields()[aliasedField.fieldName];
        const baseType = getBaseType(fieldObj.type);
        let typeToUse = this.config.scalars[baseType.name] || baseType.name;
        if (isEnumType(baseType)) {
          typeToUse = (this.config.namespacedImportName ? `${this.config.namespacedImportName}.` : "") + this.config.convertName(baseType.name, { useTypesPrefix: this.config.enumPrefix });
        }
        const name = this.config.formatNamedField(aliasedField.alias, fieldObj.type);
        const wrappedType = this.config.wrapTypeWithModifiers(typeToUse, fieldObj.type);
        return {
          name,
          type: wrappedType
        };
      }
    });
  }
  transformLinkFields(fields) {
    if (fields.length === 0) {
      return [];
    }
    return fields.map((field) => ({
      name: field.alias || field.name,
      type: field.selectionSet
    }));
  }
}
function optimizeOperations(schema, documents, options) {
  const newDocuments = optimizeDocuments(schema, documents.map((s) => s.document), options);
  return newDocuments.map((document, index) => {
    var _a;
    return {
      location: ((_a = documents[index]) === null || _a === void 0 ? void 0 : _a.location) || "optimized by relay",
      document
    };
  });
}
export { BaseTypesVisitor as B, ClientSideBaseVisitor as C, DeclarationBlock as D, OperationVariablesToObject as O, PreResolveTypesProcessor as P, SelectionSetToObject as S, autoBind as a, BaseDocumentsVisitor as b, wrapTypeWithModifiers as c, generateFragmentImportStatement as d, BaseSelectionSetProcessor as e, DocumentMode as f, getConfigValue as g, OMIT_TYPE as h, indent as i, normalizeAvoidOptionals as n, optimizeOperations as o, transformComment as t, wrapWithSingleQuotes as w };
