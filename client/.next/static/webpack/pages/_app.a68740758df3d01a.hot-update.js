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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar items = [\n    {\n        label: \"Navigation One\",\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 10,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Navigation Two\",\n        key: \"app\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 15,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        label: \"Navigation Three - Submenu\",\n        key: \"SubMenu\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SettingOutlined, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined),\n        children: [\n            {\n                type: \"group\",\n                label: \"Item 1\",\n                children: [\n                    {\n                        label: \"Option 1\",\n                        key: \"setting:1\"\n                    },\n                    {\n                        label: \"Option 2\",\n                        key: \"setting:2\"\n                    }, \n                ]\n            },\n            {\n                type: \"group\",\n                label: \"Item 2\",\n                children: [\n                    {\n                        label: \"Option 3\",\n                        key: \"setting:3\"\n                    },\n                    {\n                        label: \"Option 4\",\n                        key: \"setting:4\"\n                    }, \n                ]\n            }, \n        ]\n    },\n    {\n        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://ant.design\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Navigation Four - Link\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined),\n        key: \"alipay\"\n    }, \n];\nvar TopNav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var onClick = function(e) {\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tony\\\\Desktop\\\\Development\\\\Ryan Dahl\\\\CMS\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 70,\n        columnNumber: 10\n    }, _this);\n};\n_s(TopNav, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFvRjtBQUN4RDtBQUNLO0FBQ007O0FBRXZDLElBQU1NLEtBQUssR0FBRztJQUNaO1FBQ0VDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEdBQUcsRUFBRSxNQUFNO1FBQ1hDLElBQUksZ0JBQUUsOERBQUNSLDJEQUFZOzs7O3FCQUFHO0tBQ3ZCO0lBQ0Q7UUFDRU0sS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsR0FBRyxFQUFFLEtBQUs7UUFDVkMsSUFBSSxnQkFBRSw4REFBQ1QsK0RBQWdCOzs7O3FCQUFHO0tBQzNCO0lBQ0Q7UUFDRU8sS0FBSyxFQUFFLDRCQUE0QjtRQUNuQ0MsR0FBRyxFQUFFLFNBQVM7UUFDZEMsSUFBSSxnQkFBRSw4REFBQ1AsOERBQWU7Ozs7cUJBQUc7UUFDekJRLFFBQVEsRUFBRTtZQUNSO2dCQUNFQyxJQUFJLEVBQUUsT0FBTztnQkFDYkosS0FBSyxFQUFFLFFBQVE7Z0JBQ2ZHLFFBQVEsRUFBRTtvQkFDUjt3QkFDRUgsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCQyxHQUFHLEVBQUUsV0FBVztxQkFDakI7b0JBQ0Q7d0JBQ0VELEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRUcsSUFBSSxFQUFFLE9BQU87Z0JBQ2JKLEtBQUssRUFBRSxRQUFRO2dCQUNmRyxRQUFRLEVBQUU7b0JBQ1I7d0JBQ0VILEtBQUssRUFBRSxVQUFVO3dCQUNqQkMsR0FBRyxFQUFFLFdBQVc7cUJBQ2pCO29CQUNEO3dCQUNFRCxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLEdBQUcsRUFBRSxXQUFXO3FCQUNqQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNEO1FBQ0VELEtBQUssZ0JBQ0gsOERBQUNLLEdBQUM7WUFBQ0MsSUFBSSxFQUFDLG9CQUFvQjtZQUFDQyxNQUFNLEVBQUMsUUFBUTtZQUFDQyxHQUFHLEVBQUMscUJBQXFCO3NCQUFDLHdCQUV2RTs7Ozs7cUJBQUk7UUFFTlAsR0FBRyxFQUFFLFFBQVE7S0FDZDtDQUNGO0FBRUQsSUFBTVEsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQThCWixHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUE5RGhELE9BOERnQixHQUFnQkEsR0FBZ0IsR0FBaEMsRUE5RGhCLFVBOEQ0QixHQUFJQSxHQUFnQixHQUFwQjtJQUUxQixJQUFNZSxPQUFPLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLENBQUMsQ0FBQyxDQUFDO1FBQ3pCRixVQUFVLENBQUNFLENBQUMsQ0FBQ1osR0FBRyxDQUFDLENBQUM7S0FDbkI7SUFFRCxxQkFBTyw4REFBQ0wsc0NBQUk7UUFBQ2dCLE9BQU8sRUFBRUEsT0FBTztRQUFFSSxZQUFZLEVBQUU7WUFBQ04sT0FBTztTQUFDO1FBQUVPLElBQUksRUFBQyxZQUFZO1FBQUNsQixLQUFLLEVBQUVBLEtBQUs7Ozs7O2FBQUksQ0FBQztDQUM1RjtHQVRLVSxNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUFXWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgTWFpbE91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb2dnbGVUaGVtZSBmcm9tICcuL1RvZ2dsZVRoZW1lJ1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdOYXZpZ2F0aW9uIE9uZScsXHJcbiAgICBrZXk6ICdtYWlsJyxcclxuICAgIGljb246IDxNYWlsT3V0bGluZWQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJ05hdmlnYXRpb24gVHdvJyxcclxuICAgIGtleTogJ2FwcCcsXHJcbiAgICBpY29uOiA8QXBwc3RvcmVPdXRsaW5lZCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnTmF2aWdhdGlvbiBUaHJlZSAtIFN1Ym1lbnUnLFxyXG4gICAga2V5OiAnU3ViTWVudScsXHJcbiAgICBpY29uOiA8U2V0dGluZ091dGxpbmVkIC8+LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdncm91cCcsXHJcbiAgICAgICAgbGFiZWw6ICdJdGVtIDEnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDEnLFxyXG4gICAgICAgICAgICBrZXk6ICdzZXR0aW5nOjEnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdPcHRpb24gMicsXHJcbiAgICAgICAgICAgIGtleTogJ3NldHRpbmc6MicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxyXG4gICAgICAgIGxhYmVsOiAnSXRlbSAyJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ09wdGlvbiAzJyxcclxuICAgICAgICAgICAga2V5OiAnc2V0dGluZzozJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnT3B0aW9uIDQnLFxyXG4gICAgICAgICAgICBrZXk6ICdzZXR0aW5nOjQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAoXHJcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgTmF2aWdhdGlvbiBGb3VyIC0gTGlua1xyXG4gICAgICA8L2E+XHJcbiAgICApLFxyXG4gICAga2V5OiAnYWxpcGF5JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCdtYWlsJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrICcsIGUpO1xyXG4gICAgc2V0Q3VycmVudChlLmtleSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxNZW51IG9uQ2xpY2s9e29uQ2xpY2t9IHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBtb2RlPVwiaG9yaXpvbnRhbFwiIGl0ZW1zPXtpdGVtc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOYXY7Il0sIm5hbWVzIjpbIkFwcHN0b3JlT3V0bGluZWQiLCJNYWlsT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJNZW51IiwidXNlU3RhdGUiLCJUb2dnbGVUaGVtZSIsIml0ZW1zIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJ0eXBlIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJUb3BOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm9uQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkS2V5cyIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ })

});