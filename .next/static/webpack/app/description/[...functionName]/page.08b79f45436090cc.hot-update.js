"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/description/[...functionName]/page",{

/***/ "(app-client)/./components/layout/FunctionDescriptionPage.jsx":
/*!*******************************************************!*\
  !*** ./components/layout/FunctionDescriptionPage.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FunctionDescription/MakeAppList */ \"(app-client)/./components/FunctionDescription/MakeAppList.jsx\");\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* harmony import */ var _page_context_UrlContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page_context/UrlContextProvider */ \"(app-client)/./components/page_context/UrlContextProvider.jsx\");\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FunctionDescriptionPage.module.css */ \"(app-client)/./components/layout/FunctionDescriptionPage.module.css\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n// import DisplayBox from \"../DisplayBox/DisplayBox\";\n\n\n\n\nvar data = __webpack_require__(/*! ../../../../../../public/data/functionData.json */ \"(app-client)/./public/data/functionData.json\");\nfunction FunctionDescriptionPage() {\n    var _this = this;\n    var _detailFunctionObject_app;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), functionName = _useContext.functionName, appName = _useContext.appName, methodId = _useContext.methodId, descriptionId = _useContext.descriptionId, functionName_makeCall = _useContext.functionName_makeCall;\n    console.log(functionName_makeCall);\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), detailFunctionObject = _useState[0], setData = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        data.forEach(function(categoryObject) {\n            if (categoryObject.category !== \"new\" && categoryObject.category !== \"hot\") {\n                var _categoryObject_objects;\n                (_categoryObject_objects = categoryObject.objects) === null || _categoryObject_objects === void 0 ? void 0 : _categoryObject_objects.forEach(function(ObjectInArray) {\n                    if (ObjectInArray.name.slice(2) === functionName) {\n                        setData(ObjectInArray);\n                        return;\n                    }\n                });\n            }\n        });\n    }, []);\n    // useEffect(() => {}, [appName, methodId, descriptionId]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_context_UrlContextProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().main_header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: detailFunctionObject.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                \" 기능 소개\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().listBox),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"특징\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: detailFunctionObject.charateristic\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().listBox),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"관련 어플\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            children: (_detailFunctionObject_app = detailFunctionObject.app) === null || _detailFunctionObject_app === void 0 ? void 0 : _detailFunctionObject_app.map(function(appName) {\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                        href: \"/description/\".concat(functionName, \"/?appName=\").concat(appName, \"&methodId=0&descriptionId=0\"),\n                                                        children: appName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, Math.random(), false, {\n                                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, _this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                    children: detailFunctionObject.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                \" 기능 실행 방법\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            functionMethods: detailFunctionObject.method\n                        }, void 0, false, {\n                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().displayBox),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().subTitle),\n                                    children: \"❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().flexWrap)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(FunctionDescriptionPage, \"KUWhz7SvC3p97Cio/+F0PD7i0Vs=\");\n_c = FunctionDescriptionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionDescriptionPage);\nvar _c;\n$RefreshReg$(_c, \"FunctionDescriptionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3dEO0FBRW1CO0FBQzNFLHFEQUFxRDtBQUNWO0FBQ3lCO0FBQ2hCO0FBQ087QUFFM0QsSUFBTVEsT0FBT0MsbUJBQU9BLENBQUMscUdBQWdDO0FBRXJELFNBQVNDOztRQTJDUUM7O0lBMUNmLElBTUlYLGNBQUFBLGlEQUFVQSxDQUFDTSxnRUFBVUEsR0FMdkJNLGVBS0VaLFlBTEZZLGNBQ0FDLFVBSUViLFlBSkZhLFNBQ0FDLFdBR0VkLFlBSEZjLFVBQ0FDLGdCQUVFZixZQUZGZSxlQUNBQyx3QkFDRWhCLFlBREZnQjtJQUVGQyxRQUFRQyxJQUFJRjtJQUNaLElBQXdDZCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE1Q1MsdUJBQWlDVCxjQUFYaUIsVUFBV2pCO0lBRXhDRCxnREFBU0EsQ0FBQztRQUNSTyxLQUFLWSxRQUFRLFNBQUNDO1lBQ1osSUFDRUEsZUFBZUMsYUFBYSxTQUM1QkQsZUFBZUMsYUFBYSxPQUM1QjtvQkFDQUQ7Z0JBQUFBLENBQUFBLDBCQUFBQSxlQUFlRSxxQkFBZkYscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkQsUUFBUSxTQUFDSTtvQkFDL0IsSUFBSUEsY0FBY0MsS0FBS0MsTUFBTSxPQUFPZCxjQUFjO3dCQUNoRE8sUUFBUUs7d0JBQ1I7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsMkRBQTJEO0lBRTNELHFCQUNFLDhEQUFDbkIsd0VBQWtCQTtrQkFDakIsNEVBQUNzQjs7OEJBQ0MsOERBQUNDO29CQUFRQyxXQUFXdEIsd0ZBQW1CdUI7O3NDQUNyQyw4REFBQ0M7NEJBQUdGLFdBQVd0QixrRkFBYXlCOzs4Q0FDMUIsOERBQUNDOzhDQUFHdEIscUJBQXFCYzs7Ozs7O2dDQUFTOzs7Ozs7O3NDQUVwQyw4REFBQ1M7OzhDQUNDLDhEQUFDQztvQ0FBR04sV0FBV3RCLG9GQUFlNkI7O3NEQUM1Qiw4REFBQ0M7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0M7c0RBQUczQixxQkFBcUI0Qjs7Ozs7Ozs7Ozs7OzhDQUUzQiw4REFBQ0o7b0NBQUdOLFdBQVd0QixvRkFBZTZCOztzREFDNUIsOERBQUNDO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNIO3NEQUNFdkIsQ0FBQUEsNEJBQUFBLHFCQUFxQjZCLGlCQUFyQjdCLHVDQUFBQSxLQUFBQSxJQUFBQSwwQkFBMEI4QixJQUFJLFNBQUM1QjtxRUFDOUIsOERBQUNzQjs4REFDQyw0RUFBQy9CLHFEQUFZQTt3REFDWHNDLE1BQU0sZ0JBQXlDN0IsT0FBekJELGNBQWEsY0FBb0IsT0FBUkMsU0FBUTtrRUFDdERBOzs7Ozs7bURBSEk4QixLQUFLQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBV3hCLDhEQUFDaEI7b0JBQVFDLFdBQVd0QixpRkFBWW9COztzQ0FDOUIsOERBQUNVOzs4Q0FDQyw4REFBQ0o7b0NBQUVKLFdBQVd0QixrRkFBYXlCOzhDQUFHckIscUJBQXFCYzs7Ozs7O2dDQUFTOzs7Ozs7O3NDQUc5RCw4REFBQ3RCLG1GQUFXQTs0QkFBQzBDLGlCQUFpQmxDLHFCQUFxQm1DOzs7Ozs7c0NBQ25ELDhEQUFDQzs0QkFBSWxCLFdBQVd0Qix1RkFBa0J5Qzs7OENBQ2hDLDhEQUFDVjtvQ0FBRVQsV0FBV3RCLHFGQUFnQjBDOzhDQUFFOzs7Ozs7OENBS2hDLDhEQUFDRjtvQ0FBSWxCLFdBQVd0QixxRkFBZ0IyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUM7R0F6RVN4QztLQUFBQTtBQTJFVCwrREFBZUEsdUJBQXVCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0Z1bmN0aW9uRGVzY3JpcHRpb25QYWdlLmpzeD8yZjE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTWFrZUFwcExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRnVuY3Rpb25EZXNjcmlwdGlvbi9NYWtlQXBwTGlzdFwiO1xuLy8gaW1wb3J0IERpc3BsYXlCb3ggZnJvbSBcIi4uL0Rpc3BsYXlCb3gvRGlzcGxheUJveFwiO1xuaW1wb3J0IE5vU2Nyb2xsTGluayBmcm9tIFwiLi4vTm9TY3JvbGxMaW5rXCI7XG5pbXBvcnQgVXJsQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9wYWdlX2NvbnRleHQvVXJsQ29udGV4dFByb3ZpZGVyXCI7XG5pbXBvcnQgVXJsQ29udGV4dCBmcm9tIFwiLi4vcGFnZV9jb250ZXh0L1VybENvbnRleHRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0Z1bmN0aW9uRGVzY3JpcHRpb25QYWdlLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIvcHVibGljL2RhdGEvZnVuY3Rpb25EYXRhLmpzb25cIik7XG5cbmZ1bmN0aW9uIEZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlKCkge1xuICBjb25zdCB7XG4gICAgZnVuY3Rpb25OYW1lLFxuICAgIGFwcE5hbWUsXG4gICAgbWV0aG9kSWQsXG4gICAgZGVzY3JpcHRpb25JZCxcbiAgICBmdW5jdGlvbk5hbWVfbWFrZUNhbGwsXG4gIH0gPSB1c2VDb250ZXh0KFVybENvbnRleHQpO1xuICBjb25zb2xlLmxvZyhmdW5jdGlvbk5hbWVfbWFrZUNhbGwpO1xuICBjb25zdCBbZGV0YWlsRnVuY3Rpb25PYmplY3QsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeU9iamVjdCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeSAhPT0gXCJuZXdcIiAmJlxuICAgICAgICBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeSAhPT0gXCJob3RcIlxuICAgICAgKSB7XG4gICAgICAgIGNhdGVnb3J5T2JqZWN0Lm9iamVjdHM/LmZvckVhY2goKE9iamVjdEluQXJyYXkpID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0SW5BcnJheS5uYW1lLnNsaWNlKDIpID09PSBmdW5jdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIHNldERhdGEoT2JqZWN0SW5BcnJheSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge30sIFthcHBOYW1lLCBtZXRob2RJZCwgZGVzY3JpcHRpb25JZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFVybENvbnRleHRQcm92aWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbl9oZWFkZXJ9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgPGI+e2RldGFpbEZ1bmN0aW9uT2JqZWN0Lm5hbWV9PC9iPiDquLDriqUg7IaM6rCcXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCb3h9PlxuICAgICAgICAgICAgICA8aDI+7Yq57KeVPC9oMj5cbiAgICAgICAgICAgICAgPHA+e2RldGFpbEZ1bmN0aW9uT2JqZWN0LmNoYXJhdGVyaXN0aWN9PC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJveH0+XG4gICAgICAgICAgICAgIDxoMj7qtIDroKgg7Ja07ZSMPC9oMj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtkZXRhaWxGdW5jdGlvbk9iamVjdC5hcHA/Lm1hcCgoYXBwTmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICAgICAgICAgIDxOb1Njcm9sbExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfS8/YXBwTmFtZT0ke2FwcE5hbWV9Jm1ldGhvZElkPTAmZGVzY3JpcHRpb25JZD0wYH0+XG4gICAgICAgICAgICAgICAgICAgICAge2FwcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvTm9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgPGIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGV0YWlsRnVuY3Rpb25PYmplY3QubmFtZX08L2I+IOq4sOuKpVxuICAgICAgICAgICAg7Iuk7ZaJIOuwqeuylVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPE1ha2VBcHBMaXN0IGZ1bmN0aW9uTWV0aG9kcz17ZGV0YWlsRnVuY3Rpb25PYmplY3QubWV0aG9kfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXlCb3h9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YlRpdGxlfT5cbiAgICAgICAgICAgICAg4p2X77iPIO2VmeyKteyXkCDrj4Tsm4DsnYQg65Oc66as6riwIOychO2VtCDsi6TsoJwg7Iqk66eI7Yq47Y+w7J2YIOuqqOyKteydhCDrs7jrlLAg66eM65OgXG4gICAgICAgICAgICAgIO2ZlOuptOyeheuLiOuLpC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIHsvKiA8RGlzcGxheUJveD48L0Rpc3BsYXlCb3g+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleFdyYXB9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgPC9VcmxDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1ha2VBcHBMaXN0IiwiTm9TY3JvbGxMaW5rIiwiVXJsQ29udGV4dFByb3ZpZGVyIiwiVXJsQ29udGV4dCIsImNsYXNzZXMiLCJkYXRhIiwicmVxdWlyZSIsIkZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlIiwiZGV0YWlsRnVuY3Rpb25PYmplY3QiLCJmdW5jdGlvbk5hbWUiLCJhcHBOYW1lIiwibWV0aG9kSWQiLCJkZXNjcmlwdGlvbklkIiwiZnVuY3Rpb25OYW1lX21ha2VDYWxsIiwiY29uc29sZSIsImxvZyIsInNldERhdGEiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPYmplY3QiLCJjYXRlZ29yeSIsIm9iamVjdHMiLCJPYmplY3RJbkFycmF5IiwibmFtZSIsInNsaWNlIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJtYWluX2hlYWRlciIsImgxIiwidGl0bGUiLCJiIiwidWwiLCJsaSIsImxpc3RCb3giLCJoMiIsInAiLCJjaGFyYXRlcmlzdGljIiwiYXBwIiwibWFwIiwiaHJlZiIsIk1hdGgiLCJyYW5kb20iLCJmdW5jdGlvbk1ldGhvZHMiLCJtZXRob2QiLCJkaXYiLCJkaXNwbGF5Qm94Iiwic3ViVGl0bGUiLCJmbGV4V3JhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/layout/FunctionDescriptionPage.jsx\n"));

/***/ })

});