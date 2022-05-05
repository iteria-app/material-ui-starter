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
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
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
  console.log("getAllFiles", dirPath, depth);
  if (depth === 0) {
    return [];
  }
  const dirFiles = import_fs.default.readdirSync(dirPath);
  let ret = [];
  for (const file of dirFiles) {
    const filePath = import_path.default.join(dirPath, "/", file);
    if (import_fs.default.statSync(filePath).isDirectory()) {
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
      if (!import_fs.default.existsSync(filePath)) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "File does not exists" }));
      } else {
        import_fs.default.readFile(filePath, (err, data) => {
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
      import_fs.default.mkdirSync(dir, { recursive: true });
      const file = import_fs.default.createWriteStream(filePath);
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
      import_fs.default.access(filePath, import_fs.default.constants.R_OK, (err) => {
        if (err) {
          res.end(JSON.stringify({ message: "File path does not exists" }));
          return;
        }
        import_fs.default.unlink(filePath, (err2) => {
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
      console.log(files);
      res.end(JSON.stringify(files));
    }
  });
};

// src/index.ts
function iteriaLowcode(options) {
  var _a;
  const isViteDevServer = options.injectMode === "devServer" && (options.command === "serve" || options.mode === "development" && options.command === "build");
  const ideDevServerIteriaAppInitConf = __spreadValues(__spreadValues({
    fsPort: 3e3,
    isDev: isViteDevServer
  }, options.cwd ? { cwd: options.cwd } : {}), options.graphQLEndpoint ? { graphQLEndpoint: options.graphQLEndpoint } : {});
  // const ideDevserverPath = `'https://unpkg.com/@iteria-app/ide-devserver@${(_a = options.version) != null ? _a : "1.2.8"}/dist/ide-devserver.es.js'`;
  const ideDevserverPath = `'/ide-devserver.es.js'`;
  const injectDevServer = (options == null ? void 0 : options.version) === "workspace:*" ? false : true;
  const metas = [];
  const links = [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@iteria-app/wysiwyg@1.5.4/dist/style.css"
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
      window.reactRefresh = reactRefresh
      `
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
      }
      window.global = {}
    `
    },
    {
      src: "https://kit.fontawesome.com/90ec8eceb4.js",
      crossorigin: "anonymous"
    },
    injectDevServer && {
      type: "module",
      content: `
        import { iteriaApp } from ${ideDevserverPath}
        iteriaApp(
          ${JSON.stringify(ideDevServerIteriaAppInitConf)}
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
      var _a2, _b;
      const hmr = ((_a2 = process == null ? void 0 : process.env) == null ? void 0 : _a2.GITPOD_WORKSPACE_ID) ? {
        clientPort: 443,
        path: "/__vite_hmr"
      } : void 0;
      return __spreadProps(__spreadValues({}, config), {
        server: __spreadProps(__spreadValues({}, config.server), {
          hmr,
          fs: __spreadProps(__spreadValues({}, (_b = config.server) == null ? void 0 : _b.fs), {
            strict: false
          })
        })
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
      if (scripts.length) {
        scripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, "body-prepend"));
        });
      }
      htmlResult.push(getScriptContent(devtoolsScript, "body-prepend"));
      return htmlResult;
    },
    configureServer(server) {
      server.middlewares.use("/__fetchfs/read/file/", httpReadFile);
      server.middlewares.use("/__fetchfs/write/file/", httpWriteFile);
      server.middlewares.use("/__fetchfs/delete/file/", httpDeleteFile);
      server.middlewares.use("/__fetchfs/read/dir/", httpReadDir);
    }
  };
}
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
