var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => iteriaLowcode
});

// src/fsHttp.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var checkExtension = (path2, extensions) => {
  if (extensions.length > 0) {
    for (const ext of extensions) {
      if (path2.endsWith(ext)) {
        return true;
      }
    }
    return false;
  }
  return true;
};
var getAllFiles = (dirPath, extensions, depth = 1) => {
  if (depth === 0) {
    return [];
  }
  const dirFiles = fs.readdirSync(dirPath);
  let ret = [];
  for (const file of dirFiles) {
    const filePath = path.join(dirPath, "/", file);
    if (fs.statSync(filePath).isDirectory()) {
      ret = [...ret, ...getAllFiles(filePath, extensions, depth - 1)];
    } else if (checkExtension(file, extensions)) {
      ret = [...ret, filePath];
    }
  }
  return ret;
};
var httpReadFile = (req, res) => {
  let body = "";
  let filePath = "";
  req.on("readable", function() {
    const chunk = req.read();
    if (chunk !== null) {
      body += chunk;
    }
  });
  req.on("end", function() {
    filePath = JSON.parse(body).path;
    if (filePath) {
      if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "File does not exists" }));
      } else {
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end(err);
          } else {
            res.write(data);
            res.end();
          }
        });
      }
    }
  });
};
var httpWriteFile = (req, res) => {
  let body = "";
  let filePath = "";
  req.on("readable", function() {
    const chunk = req.read();
    if (chunk !== null) {
      body += chunk;
    }
  });
  req.on("end", function() {
    const bodyData = JSON.parse(body);
    filePath = bodyData.path;
    const data = bodyData.data;
    if (filePath) {
      let dir = filePath.substring(0, filePath.lastIndexOf("/"));
      if (dir === "")
        dir = filePath.substring(0, filePath.lastIndexOf("\\"));
      fs.mkdirSync(dir, { recursive: true });
      const file = fs.createWriteStream(filePath);
      file.write(data);
      res.end(JSON.stringify({ message: "Success" }));
    } else {
      res.end(JSON.stringify({ message: "Missing file path" }));
    }
  });
};
var httpDeleteFile = (req, res) => {
  let body = "";
  let filePath = "";
  req.on("readable", function() {
    const chunk = req.read();
    if (chunk !== null) {
      body += chunk;
    }
  });
  req.on("end", function() {
    const bodyData = JSON.parse(body);
    filePath = bodyData.path;
    if (filePath) {
      fs.access(filePath, fs.constants.R_OK, (err) => {
        if (err) {
          res.end(JSON.stringify({ message: "File path does not exists" }));
          return;
        }
        fs.unlink(filePath, (err2) => {
          if (err2) {
            res.end(JSON.stringify({ message: "There was problem to delete file" }));
            return;
          }
          res.end(JSON.stringify({ message: "File was successfully deleted" }));
        });
      });
    }
  });
};
var httpReadDir = (req, res) => {
  let body = "";
  let filePath = "";
  req.on("readable", function() {
    const chunk = req.read();
    if (chunk !== null) {
      body += chunk;
    }
  });
  req.on("end", function() {
    filePath = JSON.parse(body).path;
    const dirPath = filePath;
    if (dirPath) {
      const files = getAllFiles(dirPath, [], 1);
      res.end(JSON.stringify(files));
    }
  });
};
var httpRenameFile = (req, res) => {
  let body = "";
  let oldFilePath = "";
  let newFilePath = "";
  req.on("readable", function() {
    const chunk = req.read();
    if (chunk !== null) {
      body += chunk;
    }
  });
  req.on("end", function() {
    const bodyData = JSON.parse(body);
    oldFilePath = bodyData.oldFilePath;
    newFilePath = bodyData.newFilePath;
    if (oldFilePath && newFilePath) {
      fs.access(oldFilePath, fs.constants.R_OK, (err) => {
        if (err) {
          res.end(JSON.stringify({ message: "File path does not exists" }));
          return;
        }
        fs.rename(oldFilePath, newFilePath, (err2) => {
          if (err2) {
            res.end(JSON.stringify({
              message: "There was problem with renaming the file"
            }));
            return;
          }
          res.end(JSON.stringify({ message: "File was successfully rename" }));
        });
      });
    }
  });
};

// src/index.ts
var defineEnvironment = (env) => {
  const defineOn = "process.env";
  if (!env)
    return;
  return Object.keys(env).reduce((vars, key) => {
    const value = env[key];
    vars[`${defineOn}.${key}`] = JSON.stringify(value);
    return vars;
  }, {});
};
function iteriaLowcode(options) {
  var _a, _b;
  const injectLowcode = (_a = options.injectLowcode) != null ? _a : options.mode != "production";
  if (injectLowcode)
    process.env = __spreadProps(__spreadValues({}, process.env), {
      VITE_CWD: process.cwd(),
      VITE_MODE: options.mode,
      VITE_NETLIFY: process.env.NETLIFY,
      VITE_BRANCH: process.env.BRANCH,
      VITE_REPOSITORY_URL: process.env.REPOSITORY_URL,
      VITE_SITE_ID: process.env.SITE_ID
    });
  let injectedEnvs = {};
  Object.keys(process.env).forEach((name) => {
    if (options == null ? void 0 : options.whitelistedEnvs.includes(name))
      injectedEnvs[name] = process.env[name];
  });
  const iteriaScript = __spreadProps(__spreadValues(__spreadValues(__spreadValues({
    fsPort: 3e3,
    injectMode: (_b = options.injectMode) != null ? _b : "jamstack",
    cwd: process.cwd()
  }, options.graphQLEndpoint ? { graphQLEndpoint: options.graphQLEndpoint } : {}), options.graphQLSecret ? { graphQLSecret: options.graphQLSecret } : {}), options.features ? { features: options.features } : {}), {
    env: __spreadValues({}, injectedEnvs),
    mode: options.mode,
    command: options.command
  });
  let ideDevserverPath;
  if (options.version)
    ideDevserverPath = `'https://unpkg.com/@iteria-app/ide-devserver@${options.version}/dist/ide-devserver.es.js'`;
  else
    ideDevserverPath = `'/loader.js'`;
  const injectDevServer = (options == null ? void 0 : options.version) === "workspace:*" ? false : true;
  const metas = [];
  const links = [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@iteria-app/wysiwyg/dist/style.css"
    },
    {
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      rel: "stylesheet"
    },
    {
      href: "https://bossanova.uk/jspreadsheet/v4/jexcel.css",
      rel: "stylesheet"
    }
  ];
  const headScripts = [
    {
      type: "module",
      src: "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    }
  ];
  let scripts = [
    {
      type: "module",
      content: `
      import reactRefresh from 'https://esm.sh/react-refresh?dev'
      window.reactRefresh = reactRefresh`
    },
    {
      content: `
      import buffer from 'https://cdn.skypack.dev/buffer'
      window.buffer = buffer
      window.Buffer = buffer.Buffer 
      window.process = {
        env: {},
        version: 'version',
        versions: {
          node: 'version.node',
        },
        hrtime: () => {}
      }
      window.global = {}
    `
    },
    injectDevServer && {
      type: "module",
      content: `
        import { i } from ${ideDevserverPath}
        i(
          ${JSON.stringify(iteriaScript)}
        )`
    }
  ].filter(Boolean);
  const devtoolsScript = {
    src: "https://react-devtools-inline-initialize.netlify.app/react-devtools-inline-initialize.umd.js"
  };
  const getScriptContent = (script, injectTo) => {
    let result = {};
    if (typeof script === "object" && script.src) {
      result = {
        tag: "script",
        injectTo,
        attrs: __spreadValues({}, script)
      };
    } else if (typeof script === "object" && script.content) {
      const _a2 = script, { content } = _a2, attr = __objRest(_a2, ["content"]);
      result = {
        tag: "script",
        injectTo,
        attrs: __spreadValues({ type: "module" }, attr),
        children: `${content} `
      };
    } else {
      result = {
        tag: "script",
        injectTo,
        children: `${script} `
      };
    }
    return result;
  };
  return {
    name: "@iteria-app/vite-plugin-lowcode",
    config: (config) => {
      var _a2, _b2;
      const hmr = ((_a2 = process == null ? void 0 : process.env) == null ? void 0 : _a2.GITPOD_WORKSPACE_ID) ? {
        clientPort: 443,
        path: "/__vite_hmr"
      } : void 0;
      return __spreadProps(__spreadValues({}, config), {
        server: __spreadProps(__spreadValues({}, config.server), {
          hmr,
          fs: __spreadProps(__spreadValues({}, (_b2 = config.server) == null ? void 0 : _b2.fs), {
            strict: false
          })
        }),
        define: injectLowcode ? defineEnvironment({ NODE_ENV: "development" }) : {}
      });
    },
    transformIndexHtml(html, ctx) {
      const htmlResult = [];
      if (metas.length) {
        metas.forEach((meta) => {
          htmlResult.push({
            tag: "meta",
            injectTo: "head",
            attrs: __spreadValues({}, meta)
          });
        });
      }
      if (links.length) {
        links.forEach((meta) => {
          htmlResult.push({
            tag: "link",
            injectTo: "head",
            attrs: __spreadValues({}, meta)
          });
        });
      }
      if (headScripts.length) {
        headScripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, "head"));
        });
      }
      if (scripts.length && injectLowcode) {
        scripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, "head-prepend"));
        });
      }
      if (injectLowcode)
        htmlResult.push(getScriptContent(devtoolsScript, "body-prepend"));
      return htmlResult;
    },
    configureServer(server) {
      server.middlewares.use("/__fetchfs/read/file/", httpReadFile);
      server.middlewares.use("/__fetchfs/write/file/", httpWriteFile);
      server.middlewares.use("/__fetchfs/delete/file/", httpDeleteFile);
      server.middlewares.use("/__fetchfs/read/dir/", httpReadDir);
      server.middlewares.use("/__fetchfs/rename/file/", httpRenameFile);
    }
  };
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
