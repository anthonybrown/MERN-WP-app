"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ToggleTheme.js":
/*!***********************************!*\
  !*** ./components/ToggleTheme.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ToggleTheme() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext), theme = ref[0], setTheme = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/css/\".concat(theme, \".css\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setTheme(\"dark\");\n                    localStorage.setItem(\"theme\", \"dark\");\n                },\n                style: {\n                    fontSize: \"1.1rem\"\n                },\n                children: [\n                    \"\\uD83C\\uDF1D \",\n                    theme\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setTheme(\"light\");\n                    localStorage.setItem(\"theme\", \"light\");\n                },\n                style: {\n                    fontSize: \"1.1rem\"\n                },\n                children: [\n                    \"\\uD83C\\uDF11 \",\n                    theme\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ToggleTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = ToggleTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleTheme);\nvar _c;\n$RefreshReg$(_c, \"ToggleTheme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDYTtBQUNuQjs7QUFFNUIsU0FBU0csV0FBVyxHQUFHOztJQUNyQixJQUEwQkgsR0FBd0IsR0FBeEJBLGlEQUFVLENBQUNDLHdEQUFZLENBQUMsRUFMcEQsS0FLYyxHQUFjRCxHQUF3QixHQUF0QyxFQUxkLFFBS3dCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLHFCQUNFOzswQkFDQSw4REFBQ0Usa0RBQUk7MEJBQ0gsNEVBQUNJLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxZQUFZO29CQUFDQyxJQUFJLEVBQUUsT0FBTSxDQUFRLE1BQUksQ0FBVkosS0FBSyxFQUFDLE1BQUksQ0FBQzs7Ozs7d0JBQUk7Ozs7O29CQUMvQztZQUNKQSxLQUFLLEtBQUssT0FBTyxpQkFDaEIsOERBQUNLLE1BQUk7Z0JBQ0hDLE9BQU8sRUFBRSxXQUFNO29CQUNiTCxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNoQk0sWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztpQkFDdEM7Z0JBQ0RDLEtBQUssRUFBRTtvQkFBRUMsUUFBUSxFQUFFLFFBQVE7aUJBQUU7O29CQUM5QixlQUNHO29CQUFJVixLQUFLOzs7Ozs7b0JBQ0gsaUJBRVYsOERBQUNLLE1BQUk7Z0JBQ0hDLE9BQU8sRUFBRSxXQUFNO29CQUNiTCxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUNqQk0sWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDdkM7Z0JBQ0RDLEtBQUssRUFBRTtvQkFBRUMsUUFBUSxFQUFFLFFBQVE7aUJBQUU7O29CQUM5QixlQUNHO29CQUFDVixLQUFLOzs7Ozs7b0JBQ0g7O29CQUVSLENBQ0o7Q0FDRjtHQTlCUUQsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBZ0NwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzPzM0NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3RoZW1lXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5mdW5jdGlvbiBUb2dnbGVUaGVtZSgpIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtgL2Nzcy8ke3RoZW1lfS5jc3NgfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIilcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFyZW1cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIPCfjJ0ge3RoZW1lfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImxpZ2h0XCIpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuMXJlbVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg8J+MkSB7dGhlbWV9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVUaGVtZVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsIkhlYWQiLCJUb2dnbGVUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInNwYW4iLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0eWxlIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToggleTheme.js\n");

/***/ })

});