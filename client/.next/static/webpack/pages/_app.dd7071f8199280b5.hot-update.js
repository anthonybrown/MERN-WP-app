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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ToggleTheme() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext), theme = ref[0], setTheme = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/css/\".concat(theme, \".css\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/css/styles.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setTheme(\"dark\");\n                    localStorage.setItem(\"theme\", \"dark\");\n                },\n                style: {\n                    fontSize: \"1.1rem\",\n                    marginLeft: \"auto\"\n                },\n                children: [\n                    \"\\uD83C\\uDF1D \",\n                    theme\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setTheme(\"light\");\n                    localStorage.setItem(\"theme\", \"light\");\n                },\n                style: {\n                    fontSize: \"1.1rem\",\n                    marginLeft: \"auto\"\n                },\n                children: [\n                    \"\\uD83C\\uDF11 \",\n                    theme\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\ToggleTheme.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ToggleTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = ToggleTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleTheme);\nvar _c;\n$RefreshReg$(_c, \"ToggleTheme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDYTtBQUNuQjs7QUFFNUIsU0FBU0csV0FBVyxHQUFHOztJQUNyQixJQUEwQkgsR0FBd0IsR0FBeEJBLGlEQUFVLENBQUNDLHdEQUFZLENBQUMsRUFMcEQsS0FLYyxHQUFjRCxHQUF3QixHQUF0QyxFQUxkLFFBS3dCLEdBQUlBLEdBQXdCLEdBQTVCO0lBQ3RCLHFCQUNFOzswQkFDQSw4REFBQ0Usa0RBQUk7O2tDQUNILDhEQUFDSSxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsWUFBWTt3QkFBQ0MsSUFBSSxFQUFFLE9BQU0sQ0FBUSxNQUFJLENBQVZKLEtBQUssRUFBQyxNQUFJLENBQUM7Ozs7OzRCQUFJO2tDQUNwRCw4REFBQ0UsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7d0JBQUNDLElBQUksRUFBQyxpQkFBaUI7Ozs7OzRCQUFHOzs7Ozs7b0JBQzNDO1lBQ0pKLEtBQUssS0FBSyxPQUFPLGlCQUNoQiw4REFBQ0ssTUFBSTtnQkFDSEMsT0FBTyxFQUFFLFdBQU07b0JBQ2JMLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2hCTSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2lCQUN0QztnQkFDREMsS0FBSyxFQUFFO29CQUFFQyxRQUFRLEVBQUUsUUFBUTtvQkFBRUMsVUFBVSxFQUFFLE1BQU07aUJBQUU7O29CQUNsRCxlQUNHO29CQUFJWCxLQUFLOzs7Ozs7b0JBQ0gsaUJBRVYsOERBQUNLLE1BQUk7Z0JBQ0hDLE9BQU8sRUFBRSxXQUFNO29CQUNiTCxRQUFRLENBQUMsT0FBTyxDQUFDO29CQUNqQk0sWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDdkM7Z0JBQ0RDLEtBQUssRUFBRTtvQkFBRUMsUUFBUSxFQUFFLFFBQVE7b0JBQUVDLFVBQVUsRUFBRSxNQUFNO2lCQUFFOztvQkFDbEQsZUFDRztvQkFBQ1gsS0FBSzs7Ozs7O29CQUNIOztvQkFFUixDQUNKO0NBQ0Y7R0EvQlFELFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWlDcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2dnbGVUaGVtZS5qcz8zNDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC90aGVtZVwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5cclxuZnVuY3Rpb24gVG9nZ2xlVGhlbWUoKSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YC9jc3MvJHt0aGVtZX0uY3NzYH0gLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIilcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIilcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFyZW1cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDwn4ydIHt0aGVtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0VGhlbWUoXCJsaWdodFwiKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIilcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxLjFyZW1cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDwn4yRIHt0aGVtZX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZVRoZW1lXHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiSGVhZCIsIlRvZ2dsZVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwic3BhbiIsIm9uQ2xpY2siLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ToggleTheme.js\n");

/***/ })

});