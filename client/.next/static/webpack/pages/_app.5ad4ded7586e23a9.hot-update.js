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

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        label: \"CMS\",\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ControlOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 10,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Admin\",\n        key: \"app\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.RocketOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 15,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Navigation Three - Submenu\",\n        key: \"SubMenu\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SettingOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined),\n        children: [\n            {\n                type: \"group\",\n                label: \"Item 1\",\n                children: [\n                    {\n                        label: \"Option 1\",\n                        key: \"setting:1\"\n                    },\n                    {\n                        label: \"Option 2\",\n                        key: \"setting:2\"\n                    }, \n                ]\n            },\n            {\n                type: \"group\",\n                label: \"Item 2\",\n                children: [\n                    {\n                        label: \"Option 3\",\n                        key: \"setting:3\"\n                    },\n                    {\n                        label: \"Option 4\",\n                        key: \"setting:4\"\n                    }, \n                ]\n            }, \n        ]\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined),\n        key: \"alipay\",\n        className: \"right\"\n    }, \n];\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 69,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF1RztBQUMzRTtBQUNLO0FBQ007O0FBRXZDLElBQU1PLEtBQUssR0FBRztJQUNaO1FBQ0VDLEtBQUssRUFBRSxLQUFLO1FBQ1pDLEdBQUcsRUFBRSxNQUFNO1FBQ1hDLElBQUksZ0JBQUUsOERBQUNULDhEQUFlOzs7O3FCQUFHO0tBQzFCO0lBQ0Q7UUFDRU8sS0FBSyxFQUFFLE9BQU87UUFDZEMsR0FBRyxFQUFFLEtBQUs7UUFDVkMsSUFBSSxnQkFBRSw4REFBQ1AsNkRBQWM7Ozs7cUJBQUc7S0FDekI7SUFDRDtRQUNFSyxLQUFLLEVBQUUsNEJBQTRCO1FBQ25DQyxHQUFHLEVBQUUsU0FBUztRQUNkQyxJQUFJLGdCQUFFLDhEQUFDUiw4REFBZTs7OztxQkFBRztRQUN6QlMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0VDLElBQUksRUFBRSxPQUFPO2dCQUNiSixLQUFLLEVBQUUsUUFBUTtnQkFDZkcsUUFBUSxFQUFFO29CQUNSO3dCQUNFSCxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLEdBQUcsRUFBRSxXQUFXO3FCQUNqQjtvQkFDRDt3QkFDRUQsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCQyxHQUFHLEVBQUUsV0FBVztxQkFDakI7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFRyxJQUFJLEVBQUUsT0FBTztnQkFDYkosS0FBSyxFQUFFLFFBQVE7Z0JBQ2ZHLFFBQVEsRUFBRTtvQkFDUjt3QkFDRUgsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCQyxHQUFHLEVBQUUsV0FBVztxQkFDakI7b0JBQ0Q7d0JBQ0VELEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBQ0Q7UUFDRUQsS0FBSyxnQkFDSCw4REFBQ0Ysb0RBQVc7Ozs7cUJBQUc7UUFFakJHLEdBQUcsRUFBRSxRQUFRO1FBQ2JJLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0NBQ0Y7QUFFRCxJQUFNQyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBOEJULEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxFQTdEaEQsT0E2RGdCLEdBQWdCQSxHQUFnQixHQUFoQyxFQTdEaEIsVUE2RDRCLEdBQUlBLEdBQWdCLEdBQXBCO0lBRTFCLElBQU1ZLE9BQU8sR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRUYsQ0FBQyxDQUFDLENBQUM7UUFDekJGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDVCxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUVELHFCQUFPLDhEQUFDTCxzQ0FBSTtRQUFDYSxPQUFPLEVBQUVBLE9BQU87UUFBRUksWUFBWSxFQUFFO1lBQUNOLE9BQU87U0FBQztRQUFFTyxJQUFJLEVBQUMsWUFBWTtRQUFDZixLQUFLLEVBQUVBLEtBQUs7Ozs7O2FBQUksQ0FBQztDQUM1RjtHQVRLTyxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUFXWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgQ29udHJvbE91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQsIFJvY2tldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9nZ2xlVGhlbWUgZnJvbSAnLi9Ub2dnbGVUaGVtZSdcclxuXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAnQ01TJyxcclxuICAgIGtleTogJ21haWwnLFxyXG4gICAgaWNvbjogPENvbnRyb2xPdXRsaW5lZCAvPiAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ0FkbWluJyxcclxuICAgIGtleTogJ2FwcCcsXHJcbiAgICBpY29uOiA8Um9ja2V0T3V0bGluZWQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ05hdmlnYXRpb24gVGhyZWUgLSBTdWJtZW51JyxcclxuICAgIGtleTogJ1N1Yk1lbnUnLFxyXG4gICAgaWNvbjogPFNldHRpbmdPdXRsaW5lZCAvPixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxyXG4gICAgICAgIGxhYmVsOiAnSXRlbSAxJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiAxJyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzoxJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDInLFxyXG4gICAgICAgICAgICBrZXk6ICdzZXR0aW5nOjInLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2dyb3VwJyxcclxuICAgICAgICBsYWJlbDogJ0l0ZW0gMicsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gMycsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6MycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiA0JyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzo0JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogKFxyXG4gICAgICA8VG9nZ2xlVGhlbWUgLz5cclxuICAgICksXHJcbiAgICBrZXk6ICdhbGlwYXknLFxyXG4gICAgY2xhc3NOYW1lOiAncmlnaHQnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBUb3BOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJ21haWwnKTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgJywgZSk7XHJcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPE1lbnUgb25DbGljaz17b25DbGlja30gc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19IG1vZGU9XCJob3Jpem9udGFsXCIgaXRlbXM9e2l0ZW1zfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjsiXSwibmFtZXMiOlsiQXBwc3RvcmVPdXRsaW5lZCIsIkNvbnRyb2xPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlJvY2tldE91dGxpbmVkIiwiTWVudSIsInVzZVN0YXRlIiwiVG9nZ2xlVGhlbWUiLCJpdGVtcyIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwidHlwZSIsImNsYXNzTmFtZSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRLZXlzIiwibW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ })

});