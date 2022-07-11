import { K as Kind, c4 as concatAST, o as oldVisit, cb as pathBrowserify } from "./index.js";
import { C as ClientSideBaseVisitor, g as getConfigValue, f as DocumentMode, a as autoBind, h as OMIT_TYPE } from "./index3.js";
import "https://esm.sh/typescript";
import "./loader.js";
import "./introspectionFromSchema.js";
class UrqlVisitor extends ClientSideBaseVisitor {
  constructor(schema, fragments, rawConfig) {
    super(schema, fragments, rawConfig, {
      withComponent: getConfigValue(rawConfig.withComponent, false),
      withHooks: getConfigValue(rawConfig.withHooks, true),
      urqlImportFrom: getConfigValue(rawConfig.urqlImportFrom, null)
    });
    this._externalImportPrefix = "";
    if (this.config.importOperationTypesFrom) {
      this._externalImportPrefix = `${this.config.importOperationTypesFrom}.`;
      if (this.config.documentMode !== DocumentMode.external || !this.config.importDocumentNodeExternallyFrom) {
        console.warn('"importOperationTypesFrom" should be used with "documentMode=external" and "importDocumentNodeExternallyFrom"');
      }
      if (this.config.importOperationTypesFrom !== "Operations") {
        console.warn('importOperationTypesFrom only works correctly when left empty or set to "Operations"');
      }
    }
    autoBind(this);
  }
  getImports() {
    const baseImports = super.getImports();
    const imports = [];
    const hasOperations = this._collectedOperations.length > 0;
    if (!hasOperations) {
      return baseImports;
    }
    if (this.config.withComponent) {
      imports.push(`import * as React from 'react';`);
    }
    if (this.config.withComponent || this.config.withHooks) {
      imports.push(`import * as Urql from '${this.config.urqlImportFrom || "urql"}';`);
    }
    imports.push(OMIT_TYPE);
    return [...baseImports, ...imports];
  }
  _buildComponent(node, documentVariableName, operationType, operationResultType, operationVariablesTypes) {
    var _a, _b;
    const componentName = this.convertName((_b = (_a = node.name) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "", {
      suffix: "Component",
      useTypesPrefix: false
    });
    const isVariablesRequired = operationType === "Query" && node.variableDefinitions.some((variableDef) => variableDef.type.kind === Kind.NON_NULL_TYPE);
    const generics = [operationResultType, operationVariablesTypes];
    if (operationType === "Subscription") {
      generics.unshift(operationResultType);
    }
    return `
export const ${componentName} = (props: Omit<Urql.${operationType}Props<${generics.join(", ")}>, 'query'> & { variables${isVariablesRequired ? "" : "?"}: ${operationVariablesTypes} }) => (
  <Urql.${operationType} {...props} query={${documentVariableName}} />
);
`;
  }
  _buildHooks(node, operationType, documentVariableName, operationResultType, operationVariablesTypes) {
    var _a, _b;
    const operationName = this.convertName((_b = (_a = node.name) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "", {
      suffix: this.getOperationSuffix(node, operationType),
      useTypesPrefix: false
    });
    if (operationType === "Mutation") {
      return `
export function use${operationName}() {
  return Urql.use${operationType}<${operationResultType}, ${operationVariablesTypes}>(${documentVariableName});
};`;
    }
    if (operationType === "Subscription") {
      return `
export function use${operationName}<TData = ${operationResultType}>(options: Omit<Urql.Use${operationType}Args<${operationVariablesTypes}>, 'query'> = {}, handler?: Urql.SubscriptionHandler<${operationResultType}, TData>) {
  return Urql.use${operationType}<${operationResultType}, TData, ${operationVariablesTypes}>({ query: ${documentVariableName}, ...options }, handler);
};`;
    }
    const isVariablesRequired = node.variableDefinitions.some((variableDef) => variableDef.type.kind === Kind.NON_NULL_TYPE && variableDef.defaultValue == null);
    return `
export function use${operationName}(options${isVariablesRequired ? "" : "?"}: Omit<Urql.Use${operationType}Args<${operationVariablesTypes}>, 'query'>) {
  return Urql.use${operationType}<${operationResultType}>({ query: ${documentVariableName}, ...options });
};`;
  }
  buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes) {
    const documentVariablePrefixed = this._externalImportPrefix + documentVariableName;
    const operationResultTypePrefixed = this._externalImportPrefix + operationResultType;
    const operationVariablesTypesPrefixed = this._externalImportPrefix + operationVariablesTypes;
    const component = this.config.withComponent ? this._buildComponent(node, documentVariablePrefixed, operationType, operationResultTypePrefixed, operationVariablesTypesPrefixed) : null;
    const hooks = this.config.withHooks ? this._buildHooks(node, operationType, documentVariablePrefixed, operationResultTypePrefixed, operationVariablesTypesPrefixed) : null;
    return [component, hooks].filter((a) => a).join("\n");
  }
}
const plugin = (schema, documents, config) => {
  const allAst = concatAST(documents.map((v) => v.document));
  const allFragments = [
    ...allAst.definitions.filter((d) => d.kind === Kind.FRAGMENT_DEFINITION).map((fragmentDef) => ({
      node: fragmentDef,
      name: fragmentDef.name.value,
      onType: fragmentDef.typeCondition.name.value,
      isExternal: false
    })),
    ...config.externalFragments || []
  ];
  const visitor = new UrqlVisitor(schema, allFragments, config);
  const visitorResult = oldVisit(allAst, { leave: visitor });
  return {
    prepend: visitor.getImports(),
    content: [visitor.fragments, ...visitorResult.definitions.filter((t) => typeof t === "string")].join("\n")
  };
};
const validate = async (schema, documents, config, outputFile) => {
  if (config.withComponent === true) {
    if (pathBrowserify.extname(outputFile) !== ".tsx") {
      throw new Error(`Plugin "typescript-urql" requires extension to be ".tsx" when withComponent: true is set!`);
    }
  } else {
    if (pathBrowserify.extname(outputFile) !== ".ts" && pathBrowserify.extname(outputFile) !== ".tsx") {
      throw new Error(`Plugin "typescript-urql" requires extension to be ".ts" or ".tsx"!`);
    }
  }
};
export { UrqlVisitor, plugin, validate };
