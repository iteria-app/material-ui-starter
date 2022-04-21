export const refreshed = `(function () {
    'use strict';

    function $RefreshReg$(c, id) {
          const path = "/src/App.tsx";
          window.$RefreshRegGlobal$(c, '.' +  path + ' ' + id);
        }
        var _jsxFileName$1 = "/src/App.tsx", _s = $RefreshSig$();
    const React$1 = requireDefault('react');
    const { useState } = require('react');
    //import './App.css';
    function App() {
        _s();
        var [count, setCount] = useState(0);
        return /*#__PURE__*/ React$1.createElement("div", {
            className: "App",
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 9,
                columnNumber: 5
            }
        }, /*#__PURE__*/ React$1.createElement("header", {
            className: "App-header",
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 10,
                columnNumber: 7
            }
        }, /*#__PURE__*/ React$1.createElement("p", {
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 13,
                columnNumber: 9
            }
        }, "Logo"), /*#__PURE__*/ React$1.createElement("p", {
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 14,
                columnNumber: 9
            }
        }, "Hello Vite + React!"), /*#__PURE__*/ React$1.createElement("p", {
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 15,
                columnNumber: 9
            }
        }, /*#__PURE__*/ React$1.createElement("button", {
            type: "button",
            onClick: () => setCount(count => count + 1),
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 16,
                columnNumber: 11
            }
        }, "count is: ", count)), /*#__PURE__*/ React$1.createElement("p", {
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 20,
                columnNumber: 9
            }
        }, "Edit ", /*#__PURE__*/ React$1.createElement("code", {
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 21,
                columnNumber: 16
            }
        }, "App.tsx"), " and save to test HMR updates.XXXXX"), /*#__PURE__*/ React$1.createElement("p", {
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 23,
                columnNumber: 9
            }
        }, /*#__PURE__*/ React$1.createElement("a", {
            className: "App-link",
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noopener noreferrer",
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 24,
                columnNumber: 11
            }
        }, "Learn React"), ' | ', /*#__PURE__*/ React$1.createElement("a", {
            className: "App-link",
            href: "https://vitejs.dev/guide/features.html",
            target: "_blank",
            rel: "noopener noreferrer",
            __source: {
                fileName: _jsxFileName$1,
                lineNumber: 33,
                columnNumber: 11
            }
        }, "Vite Docs"))));
    }
    _s(App, "useState{[count, setCount](0)}");
    _c = App;
    var _c;
    $RefreshReg$(_c, "App");

    var _jsxFileName = "/src/main.tsx";
    const React = requireDefault('react');
    const ReactDOM = requireDefault('react-dom');
    ReactDOM.render(/*#__PURE__*/ React.createElement(React.StrictMode, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 3
        }
    }, /*#__PURE__*/ React.createElement(App, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 5
        }
    })), document.getElementById('root'));

})();`
