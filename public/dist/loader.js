var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var defaults = {
  lines: 12,
  length: 7,
  width: 5,
  radius: 10,
  scale: 1,
  corners: 1,
  color: "#000",
  fadeColor: "transparent",
  animation: "spinner-line-fade-default",
  rotate: 0,
  direction: 1,
  speed: 1,
  zIndex: 2e9,
  className: "spinner",
  top: "50%",
  left: "50%",
  shadow: "0 0 1px transparent",
  position: "absolute"
};
var Spinner = function() {
  function Spinner2(opts2) {
    if (opts2 === void 0) {
      opts2 = {};
    }
    this.opts = __assign(__assign({}, defaults), opts2);
  }
  Spinner2.prototype.spin = function(target) {
    this.stop();
    this.el = document.createElement("div");
    this.el.className = this.opts.className;
    this.el.setAttribute("role", "progressbar");
    css(this.el, {
      position: this.opts.position,
      width: 0,
      zIndex: this.opts.zIndex,
      left: this.opts.left,
      top: this.opts.top,
      transform: "scale(" + this.opts.scale + ")"
    });
    if (target) {
      target.insertBefore(this.el, target.firstChild || null);
    }
    drawLines(this.el, this.opts);
    return this;
  };
  Spinner2.prototype.stop = function() {
    if (this.el) {
      if (typeof requestAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.animateId);
      } else {
        clearTimeout(this.animateId);
      }
      if (this.el.parentNode) {
        this.el.parentNode.removeChild(this.el);
      }
      this.el = void 0;
    }
    return this;
  };
  return Spinner2;
}();
function css(el, props) {
  for (var prop in props) {
    el.style[prop] = props[prop];
  }
  return el;
}
function getColor(color, idx) {
  return typeof color == "string" ? color : color[idx % color.length];
}
function drawLines(el, opts2) {
  var borderRadius = Math.round(opts2.corners * opts2.width * 500) / 1e3 + "px";
  var shadow = "none";
  if (opts2.shadow === true) {
    shadow = "0 2px 4px #000";
  } else if (typeof opts2.shadow === "string") {
    shadow = opts2.shadow;
  }
  var shadows = parseBoxShadow(shadow);
  for (var i = 0; i < opts2.lines; i++) {
    var degrees = ~~(360 / opts2.lines * i + opts2.rotate);
    var backgroundLine = css(document.createElement("div"), {
      position: "absolute",
      top: -opts2.width / 2 + "px",
      width: opts2.length + opts2.width + "px",
      height: opts2.width + "px",
      background: getColor(opts2.fadeColor, i),
      borderRadius,
      transformOrigin: "left",
      transform: "rotate(" + degrees + "deg) translateX(" + opts2.radius + "px)"
    });
    var delay = i * opts2.direction / opts2.lines / opts2.speed;
    delay -= 1 / opts2.speed;
    var line = css(document.createElement("div"), {
      width: "100%",
      height: "100%",
      background: getColor(opts2.color, i),
      borderRadius,
      boxShadow: normalizeShadow(shadows, degrees),
      animation: 1 / opts2.speed + "s linear " + delay + "s infinite " + opts2.animation
    });
    backgroundLine.appendChild(line);
    el.appendChild(backgroundLine);
  }
}
function parseBoxShadow(boxShadow) {
  var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
  var shadows = [];
  for (var _i = 0, _a = boxShadow.split(","); _i < _a.length; _i++) {
    var shadow = _a[_i];
    var matches = shadow.match(regex);
    if (matches === null) {
      continue;
    }
    var x = +matches[2];
    var y = +matches[5];
    var xUnits = matches[4];
    var yUnits = matches[7];
    if (x === 0 && !xUnits) {
      xUnits = yUnits;
    }
    if (y === 0 && !yUnits) {
      yUnits = xUnits;
    }
    if (xUnits !== yUnits) {
      continue;
    }
    shadows.push({
      prefix: matches[1] || "",
      x,
      y,
      xUnits,
      yUnits,
      end: matches[8]
    });
  }
  return shadows;
}
function normalizeShadow(shadows, degrees) {
  var normalized = [];
  for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
    var shadow = shadows_1[_i];
    var xy = convertOffset(shadow.x, shadow.y, degrees);
    normalized.push(shadow.prefix + xy[0] + shadow.xUnits + " " + xy[1] + shadow.yUnits + shadow.end);
  }
  return normalized.join(", ");
}
function convertOffset(x, y, degrees) {
  var radians = degrees * Math.PI / 180;
  var sin = Math.sin(radians);
  var cos = Math.cos(radians);
  return [
    Math.round((x * cos + y * sin) * 1e3) / 1e3,
    Math.round((-x * sin + y * cos) * 1e3) / 1e3
  ];
}
document.getElementsByTagName("HEAD")[0];
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "";
const spinner = document.createElement("div");
const opts = {
  left: "46%",
  top: "50%"
};
const container = document.createElement("div");
const spinnerObj = new Spinner(opts);
container.className = "loader";
container.style.cssText = `
    width: 50px;
    background-image: linear-gradient(
      rgb(255, 255, 255),
      rgb(244, 245, 247)
    ) !important;
    box-shadow: rgb(67 90 111 / 14%) 0px 0px 0px 1px inset,
      rgb(67 90 111 / 6%) 0px -1px 1px 0px inset;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: center;
    justify-content: center;
    height: 48px;
    display: flex;
    transition: transform 0.3s;
    flex-direction: column;
    position: fixed;
    bottom: 32px;
    left: 0px;
    box-sizing: border-box;
    transform: translate(0px, 0px);
    display: flex;
    flex-direction: column-reverse;
    z-index: 1000000000;
`;
document.body.appendChild(container);
container.appendChild(spinner);
function showSpinner() {
  spinnerObj.spin(spinner);
}
function hideSpinner() {
  spinnerObj.stop();
  spinner.remove();
  container.remove();
}
var spin = "";
let devServer;
async function iteriaApp(props) {
  showSpinner();
  ({ devServer } = await import("./index.js").then(function(n) {
    return n.co;
  }));
  devServer({
    cwd: props.cwd,
    injectMode: props.injectMode,
    mode: props.mode,
    command: props.command,
    graphQLEndpoint: props.graphQLEndpoint,
    features: props.features,
    env: props.env
  });
}
export { hideSpinner as h, iteriaApp as i };
