import { r as removeFederation, cb as pathBrowserify } from "./index.js";
import { l as introspectionFromSchema } from "./introspectionFromSchema.js";
import "https://esm.sh/typescript";
import "./loader.js";
var MapperKind;
(function(MapperKind2) {
  MapperKind2[MapperKind2["Namespace"] = 0] = "Namespace";
  MapperKind2[MapperKind2["Default"] = 1] = "Default";
  MapperKind2[MapperKind2["Regular"] = 2] = "Regular";
})(MapperKind || (MapperKind = {}));
const getConfigValue = (value, defaultValue) => {
  if (value === null || value === void 0) {
    return defaultValue;
  }
  return value;
};
const plugin = async (schema, _documents, pluginConfig) => {
  const cleanSchema = pluginConfig.federation ? removeFederation(schema) : schema;
  const descriptions = getConfigValue(pluginConfig.descriptions, true);
  const directiveIsRepeatable = getConfigValue(pluginConfig.directiveIsRepeatable, true);
  const schemaDescription = getConfigValue(pluginConfig.schemaDescription, void 0);
  const specifiedByUrl = getConfigValue(pluginConfig.specifiedByUrl, void 0);
  const introspection = introspectionFromSchema(cleanSchema, {
    descriptions,
    directiveIsRepeatable,
    schemaDescription,
    specifiedByUrl
  });
  return pluginConfig.minify ? JSON.stringify(introspection) : JSON.stringify(introspection, null, 2);
};
const validate = async (schema, documents, config, outputFile) => {
  if (pathBrowserify.extname(outputFile) !== ".json") {
    throw new Error(`Plugin "introspection" requires extension to be ".json"!`);
  }
};
export { plugin, validate };
