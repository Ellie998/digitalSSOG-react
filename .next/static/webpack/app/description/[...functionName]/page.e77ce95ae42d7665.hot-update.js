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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FunctionDescription/MakeAppList */ \"(app-client)/./components/FunctionDescription/MakeAppList.jsx\");\n/* harmony import */ var _DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DisplayBox/DisplayBox */ \"(app-client)/./components/DisplayBox/DisplayBox.jsx\");\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* harmony import */ var _page_context_UrlContextProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page_context/UrlContextProvider */ \"(app-client)/./components/page_context/UrlContextProvider.jsx\");\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FunctionDescriptionPage.module.css */ \"(app-client)/./components/layout/FunctionDescriptionPage.module.css\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar data = __webpack_require__(/*! ../../../../../../public/data/functionData.json */ \"(app-client)/./public/data/functionData.json\");\nfunction FunctionDescriptionPage() {\n    var _this = this;\n    var _detailFunctionObject_app;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), functionName = _useContext.functionName, appName = _useContext.appName, methodId = _useContext.methodId, descriptionId = _useContext.descriptionId, functionName_makeCall = _useContext.functionName_makeCall;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), detailFunctionObject = _useState[0], setData = _useState[1];\n    var scrollY = localStorage.getItem(\"scrollY\");\n    var scrollX = localStorage.getItem(\"scrollX\");\n    console.log(scrollX);\n    console.log(scrollY);\n    window.scrollTo(scrollX, scrollY);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        data.forEach(function(categoryObject) {\n            if (categoryObject.category !== \"new\" && categoryObject.category !== \"hot\") {\n                var _categoryObject_objects;\n                (_categoryObject_objects = categoryObject.objects) === null || _categoryObject_objects === void 0 ? void 0 : _categoryObject_objects.forEach(function(ObjectInArray) {\n                    if (ObjectInArray.name.slice(2) === functionName) {\n                        setData(ObjectInArray);\n                        return;\n                    }\n                });\n            }\n        });\n    }, []);\n    // useEffect(() => {}, [appName, methodId, descriptionId]);\n    return(// <UrlContextProvider>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 소개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"특징\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: detailFunctionObject.charateristic\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"관련 어플\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: (_detailFunctionObject_app = detailFunctionObject.app) === null || _detailFunctionObject_app === void 0 ? void 0 : _detailFunctionObject_app.map(function(appName) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(appName, \"&methodId=0&descriptionId=0\"),\n                                                    children: appName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, Math.random(), false, {\n                                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 실행 방법\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        functionMethods: detailFunctionObject.method\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().displayBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().subTitle),\n                                children: \"❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexWrap)\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this));\n}\n_s(FunctionDescriptionPage, \"KUWhz7SvC3p97Cio/+F0PD7i0Vs=\");\n_c = FunctionDescriptionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionDescriptionPage);\nvar _c;\n$RefreshReg$(_c, \"FunctionDescriptionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN3RDtBQUVtQjtBQUN6QjtBQUNQO0FBQ3lCO0FBQ2hCO0FBQ087QUFFM0QsSUFBTVMsT0FBT0MsbUJBQU9BLENBQUMscUdBQWdDO0FBRXJELFNBQVNDOztRQWdETUM7O0lBL0NiLElBTUlaLGNBQUFBLGlEQUFVQSxDQUFDTyxnRUFBVUEsR0FMdkJNLGVBS0ViLFlBTEZhLGNBQ0FDLFVBSUVkLFlBSkZjLFNBQ0FDLFdBR0VmLFlBSEZlLFVBQ0FDLGdCQUVFaEIsWUFGRmdCLGVBQ0FDLHdCQUNFakIsWUFERmlCO0lBRUYsSUFBd0NmLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTVDVSx1QkFBaUNWLGNBQVhnQixVQUFXaEI7SUFFeEMsSUFBTWlCLFVBQVVDLGFBQWFDLFFBQVE7SUFDckMsSUFBTUMsVUFBVUYsYUFBYUMsUUFBUTtJQUNyQ0UsUUFBUUMsSUFBSUY7SUFDWkMsUUFBUUMsSUFBSUw7SUFDWk0sT0FBT0MsU0FBU0osU0FBU0g7SUFFekJsQixnREFBU0EsQ0FBQztRQUNSUSxLQUFLa0IsUUFBUSxTQUFDQztZQUNaLElBQ0VBLGVBQWVDLGFBQWEsU0FDNUJELGVBQWVDLGFBQWEsT0FDNUI7b0JBQ0FEO2dCQUFBQSxDQUFBQSwwQkFBQUEsZUFBZUUscUJBQWZGLHFDQUFBQSxLQUFBQSxJQUFBQSx3QkFBd0JELFFBQVEsU0FBQ0k7b0JBQy9CLElBQUlBLGNBQWNDLEtBQUtDLE1BQU0sT0FBT3BCLGNBQWM7d0JBQ2hESyxRQUFRYTt3QkFDUjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFDTCwyREFBMkQ7SUFFM0QsT0FDRSx1QkFBdUI7a0JBQ3ZCLDhEQUFDRzs7MEJBQ0MsOERBQUNDO2dCQUFRQyxXQUFXNUIsd0ZBQW1CNkI7O2tDQUNyQyw4REFBQ0M7d0JBQUdGLFdBQVc1QixrRkFBYStCOzswQ0FDMUIsOERBQUNDOzBDQUFHNUIscUJBQXFCb0I7Ozs7Ozs0QkFBUzs7Ozs7OztrQ0FFcEMsOERBQUNTOzswQ0FDQyw4REFBQ0M7Z0NBQUdOLFdBQVc1QixvRkFBZW1DOztrREFDNUIsOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFHakMscUJBQXFCa0M7Ozs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNKO2dDQUFHTixXQUFXNUIsb0ZBQWVtQzs7a0RBQzVCLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDSDtrREFDRTdCLENBQUFBLDRCQUFBQSxxQkFBcUJtQyxpQkFBckJuQyx1Q0FBQUEsS0FBQUEsSUFBQUEsMEJBQTBCb0MsSUFBSSxTQUFDbEM7aUVBQzlCLDhEQUFDNEI7MERBQ0MsNEVBQUNyQyxxREFBWUE7b0RBQ1g0QyxNQUFNLGdCQUF5Q25DLE9BQXpCRCxjQUFhLGNBQW9CLE9BQVJDLFNBQVE7OERBQ3REQTs7Ozs7OytDQUhJb0MsS0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVd4Qiw4REFBQ2hCO2dCQUFRQyxXQUFXNUIsaUZBQVkwQjs7a0NBQzlCLDhEQUFDVTs7MENBQ0MsOERBQUNKO2dDQUFFSixXQUFXNUIsa0ZBQWErQjswQ0FBRzNCLHFCQUFxQm9COzs7Ozs7NEJBQVM7Ozs7Ozs7a0NBRzlELDhEQUFDN0IsbUZBQVdBO3dCQUFDaUQsaUJBQWlCeEMscUJBQXFCeUM7Ozs7OztrQ0FDbkQsOERBQUNDO3dCQUFJbEIsV0FBVzVCLHVGQUFrQitDOzswQ0FDaEMsOERBQUNWO2dDQUFFVCxXQUFXNUIscUZBQWdCZ0Q7MENBQUU7Ozs7OzswQ0FJaEMsOERBQUNwRCw4REFBVUE7Ozs7OzBDQUNYLDhEQUFDa0Q7Z0NBQUlsQixXQUFXNUIscUZBQWdCaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQztHQTlFUzlDO0tBQUFBO0FBZ0ZULCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4PzJmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNYWtlQXBwTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VBcHBMaXN0XCI7XG5pbXBvcnQgRGlzcGxheUJveCBmcm9tIFwiLi4vRGlzcGxheUJveC9EaXNwbGF5Qm94XCI7XG5pbXBvcnQgTm9TY3JvbGxMaW5rIGZyb20gXCIuLi9Ob1Njcm9sbExpbmtcIjtcbmltcG9ydCBVcmxDb250ZXh0UHJvdmlkZXIgZnJvbSBcIi4uL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0UHJvdmlkZXJcIjtcbmltcG9ydCBVcmxDb250ZXh0IGZyb20gXCIuLi9wYWdlX2NvbnRleHQvVXJsQ29udGV4dFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBkYXRhID0gcmVxdWlyZShcIi9wdWJsaWMvZGF0YS9mdW5jdGlvbkRhdGEuanNvblwiKTtcblxuZnVuY3Rpb24gRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UoKSB7XG4gIGNvbnN0IHtcbiAgICBmdW5jdGlvbk5hbWUsXG4gICAgYXBwTmFtZSxcbiAgICBtZXRob2RJZCxcbiAgICBkZXNjcmlwdGlvbklkLFxuICAgIGZ1bmN0aW9uTmFtZV9tYWtlQ2FsbCxcbiAgfSA9IHVzZUNvbnRleHQoVXJsQ29udGV4dCk7XG4gIGNvbnN0IFtkZXRhaWxGdW5jdGlvbk9iamVjdCwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsWSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nyb2xsWVwiKTtcbiAgY29uc3Qgc2Nyb2xsWCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nyb2xsWFwiKTtcbiAgY29uc29sZS5sb2coc2Nyb2xsWCk7XG4gIGNvbnNvbGUubG9nKHNjcm9sbFkpO1xuICB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsWCwgc2Nyb2xsWSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5T2JqZWN0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNhdGVnb3J5T2JqZWN0LmNhdGVnb3J5ICE9PSBcIm5ld1wiICYmXG4gICAgICAgIGNhdGVnb3J5T2JqZWN0LmNhdGVnb3J5ICE9PSBcImhvdFwiXG4gICAgICApIHtcbiAgICAgICAgY2F0ZWdvcnlPYmplY3Qub2JqZWN0cz8uZm9yRWFjaCgoT2JqZWN0SW5BcnJheSkgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3RJbkFycmF5Lm5hbWUuc2xpY2UoMikgPT09IGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICAgICAgc2V0RGF0YShPYmplY3RJbkFycmF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7fSwgW2FwcE5hbWUsIG1ldGhvZElkLCBkZXNjcmlwdGlvbklkXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8VXJsQ29udGV4dFByb3ZpZGVyPlxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5faGVhZGVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPGI+e2RldGFpbEZ1bmN0aW9uT2JqZWN0Lm5hbWV9PC9iPiDquLDriqUg7IaM6rCcXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCb3h9PlxuICAgICAgICAgICAgPGgyPu2KueynlTwvaDI+XG4gICAgICAgICAgICA8cD57ZGV0YWlsRnVuY3Rpb25PYmplY3QuY2hhcmF0ZXJpc3RpY308L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCb3h9PlxuICAgICAgICAgICAgPGgyPuq0gOugqCDslrTtlIw8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGV0YWlsRnVuY3Rpb25PYmplY3QuYXBwPy5tYXAoKGFwcE5hbWUpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgICAgICAgIDxOb1Njcm9sbExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kZXNjcmlwdGlvbi8ke2Z1bmN0aW9uTmFtZX0vP2FwcE5hbWU9JHthcHBOYW1lfSZtZXRob2RJZD0wJmRlc2NyaXB0aW9uSWQ9MGB9PlxuICAgICAgICAgICAgICAgICAgICB7YXBwTmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTm9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPGIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGV0YWlsRnVuY3Rpb25PYmplY3QubmFtZX08L2I+IOq4sOuKpSDsi6TtlolcbiAgICAgICAgICDrsKnrspVcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPE1ha2VBcHBMaXN0IGZ1bmN0aW9uTWV0aG9kcz17ZGV0YWlsRnVuY3Rpb25PYmplY3QubWV0aG9kfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5Qm94fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3ViVGl0bGV9PlxuICAgICAgICAgICAg4p2X77iPIO2VmeyKteyXkCDrj4Tsm4DsnYQg65Oc66as6riwIOychO2VtCDsi6TsoJwg7Iqk66eI7Yq47Y+w7J2YIOuqqOyKteydhCDrs7jrlLAg66eM65OgXG4gICAgICAgICAgICDtmZTrqbTsnoXri4jri6QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxEaXNwbGF5Qm94PjwvRGlzcGxheUJveD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4V3JhcH0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgICAvLyA8L1VybENvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2U7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFrZUFwcExpc3QiLCJEaXNwbGF5Qm94IiwiTm9TY3JvbGxMaW5rIiwiVXJsQ29udGV4dFByb3ZpZGVyIiwiVXJsQ29udGV4dCIsImNsYXNzZXMiLCJkYXRhIiwicmVxdWlyZSIsIkZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlIiwiZGV0YWlsRnVuY3Rpb25PYmplY3QiLCJmdW5jdGlvbk5hbWUiLCJhcHBOYW1lIiwibWV0aG9kSWQiLCJkZXNjcmlwdGlvbklkIiwiZnVuY3Rpb25OYW1lX21ha2VDYWxsIiwic2V0RGF0YSIsInNjcm9sbFkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Nyb2xsWCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImZvckVhY2giLCJjYXRlZ29yeU9iamVjdCIsImNhdGVnb3J5Iiwib2JqZWN0cyIsIk9iamVjdEluQXJyYXkiLCJuYW1lIiwic2xpY2UiLCJtYWluIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1haW5faGVhZGVyIiwiaDEiLCJ0aXRsZSIsImIiLCJ1bCIsImxpIiwibGlzdEJveCIsImgyIiwicCIsImNoYXJhdGVyaXN0aWMiLCJhcHAiLCJtYXAiLCJocmVmIiwiTWF0aCIsInJhbmRvbSIsImZ1bmN0aW9uTWV0aG9kcyIsIm1ldGhvZCIsImRpdiIsImRpc3BsYXlCb3giLCJzdWJUaXRsZSIsImZsZXhXcmFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/layout/FunctionDescriptionPage.jsx\n"));

/***/ })

});