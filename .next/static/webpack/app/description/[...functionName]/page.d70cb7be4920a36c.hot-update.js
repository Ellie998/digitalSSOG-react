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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FunctionDescription/MakeAppList */ \"(app-client)/./components/FunctionDescription/MakeAppList.jsx\");\n/* harmony import */ var _DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DisplayBox/DisplayBox */ \"(app-client)/./components/DisplayBox/DisplayBox.jsx\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FunctionDescriptionPage.module.css */ \"(app-client)/./components/layout/FunctionDescriptionPage.module.css\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar data = __webpack_require__(/*! ../../../../../../public/data/functionData.json */ \"(app-client)/./public/data/functionData.json\");\n// import { functionDataURL } from \"../data\";\n\n\nfunction FunctionDescriptionPage() {\n    var _this = this;\n    var _detailFunctionObject_app;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), detailFunctionObject = _useState[0], setData = _useState[1];\n    var params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    var functionName = decodeURI(params.functionName);\n    // fetch(functionDataURL)\n    //   .then((response) => response.json())\n    //   .then((data) => {\n    //     data.forEach((categoryObject) => {\n    //       if (\n    //         categoryObject.category !== \"new\" &&\n    //         categoryObject.category !== \"hot\"\n    //       ) {\n    //         categoryObject.objects?.forEach((ObjectInArray) => {\n    //           if (ObjectInArray.name === functionName) {\n    //             setData(ObjectInArray);\n    //             return;\n    //           }\n    //         });\n    //       }\n    //     });\n    //   });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        data.forEach(function(categoryObject) {\n            if (categoryObject.category !== \"new\" && categoryObject.category !== \"hot\") {\n                var _categoryObject_objects;\n                (_categoryObject_objects = categoryObject.objects) === null || _categoryObject_objects === void 0 ? void 0 : _categoryObject_objects.forEach(function(ObjectInArray) {\n                    if (ObjectInArray.name.slice(2) === functionName) {\n                        setData(ObjectInArray);\n                        return;\n                    }\n                });\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 소개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"특징\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: detailFunctionObject.charateristic\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"관련 어플\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: (_detailFunctionObject_app = detailFunctionObject.app) === null || _detailFunctionObject_app === void 0 ? void 0 : _detailFunctionObject_app.map(function(appName) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(appName, \"&methodId=0&descriptionId=0\"),\n                                                    children: appName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, Math.random(), false, {\n                                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 실행 방법\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        functionMethods: detailFunctionObject.method\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().displayBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().subTitle),\n                                children: \"❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexWrap)\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(FunctionDescriptionPage, \"JXyxizRhURxl4gb8fOQTEJdnWRw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = FunctionDescriptionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionDescriptionPage);\nvar _c;\n$RefreshReg$(_c, \"FunctionDescriptionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDZjtBQUU4QztBQUN6QjtBQUVsRCxJQUFNTSxPQUFPQyxtQkFBT0EsQ0FBQyxxR0FBZ0M7QUFDckQsNkNBQTZDO0FBQ2M7QUFDaEI7QUFFM0MsU0FBU0c7O1FBb0RNQzs7SUFuRGIsSUFBd0NWLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxFQUFFLE9BQTVDVSx1QkFBaUNWLGNBQVhXLFVBQVdYO0lBQ3hDLElBQU1ZLFNBQVNYLDBEQUFTQTtJQUN4QixJQUFNWSxlQUFlQyxVQUFVRixPQUFPQztJQUN0Qyx5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLCtDQUErQztJQUMvQyw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLCtEQUErRDtJQUMvRCx1REFBdUQ7SUFDdkQsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1YsUUFBUTtJQUVSZCxnREFBU0EsQ0FBQztRQUNSTSxLQUFLVSxRQUFRLFNBQUNDO1lBQ1osSUFDRUEsZUFBZUMsYUFBYSxTQUM1QkQsZUFBZUMsYUFBYSxPQUM1QjtvQkFDQUQ7Z0JBQUFBLENBQUFBLDBCQUFBQSxlQUFlRSxxQkFBZkYscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkQsUUFBUSxTQUFDSTtvQkFDL0IsSUFBSUEsY0FBY0MsS0FBS0MsTUFBTSxPQUFPUixjQUFjO3dCQUNoREYsUUFBUVE7d0JBQ1I7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQVFDLFdBQVdqQix3RkFBbUJrQjs7a0NBQ3JDLDhEQUFDQzt3QkFBR0YsV0FBV2pCLGtGQUFhb0I7OzBDQUMxQiw4REFBQ0M7MENBQUdsQixxQkFBcUJVOzs7Ozs7NEJBQVM7Ozs7Ozs7a0NBRXBDLDhEQUFDUzs7MENBQ0MsOERBQUNDO2dDQUFHTixXQUFXakIsb0ZBQWV3Qjs7a0RBQzVCLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBR3ZCLHFCQUFxQndCOzs7Ozs7Ozs7Ozs7MENBRTNCLDhEQUFDSjtnQ0FBR04sV0FBV2pCLG9GQUFld0I7O2tEQUM1Qiw4REFBQ0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0g7a0RBQ0VuQixDQUFBQSw0QkFBQUEscUJBQXFCeUIsaUJBQXJCekIsdUNBQUFBLEtBQUFBLElBQUFBLDBCQUEwQjBCLElBQUksU0FBQ0M7aUVBQzlCLDhEQUFDUDswREFDQyw0RUFBQzVCLGtEQUFJQTtvREFDSG9DLE1BQU0sZ0JBQXlDRCxPQUF6QnhCLGNBQWEsY0FBb0IsT0FBUndCLFNBQVE7OERBQ3REQTs7Ozs7OytDQUhJRSxLQUFLQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBV3hCLDhEQUFDakI7Z0JBQVFDLFdBQVdqQixpRkFBWWU7O2tDQUM5Qiw4REFBQ1U7OzBDQUNDLDhEQUFDSjtnQ0FBRUosV0FBV2pCLGtGQUFhb0I7MENBQUdqQixxQkFBcUJVOzs7Ozs7NEJBQVM7Ozs7Ozs7a0NBRzlELDhEQUFDakIsbUZBQVdBO3dCQUFDc0MsaUJBQWlCL0IscUJBQXFCZ0M7Ozs7OztrQ0FDbkQsOERBQUNDO3dCQUFJbkIsV0FBV2pCLHVGQUFrQnFDOzswQ0FDaEMsOERBQUNYO2dDQUFFVCxXQUFXakIscUZBQWdCc0M7MENBQUU7Ozs7OzswQ0FJaEMsOERBQUN6Qyw4REFBVUE7Ozs7OzBDQUNYLDhEQUFDdUM7Z0NBQUluQixXQUFXakIscUZBQWdCdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQWpGU3JDOztRQUVRUixzREFBU0E7OztLQUZqQlE7QUFtRlQsK0RBQWVBLHVCQUF1QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9GdW5jdGlvbkRlc2NyaXB0aW9uUGFnZS5qc3g/MmYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IE1ha2VBcHBMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZUFwcExpc3RcIjtcbmltcG9ydCBEaXNwbGF5Qm94IGZyb20gXCIuLi9EaXNwbGF5Qm94L0Rpc3BsYXlCb3hcIjtcblxuY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIvcHVibGljL2RhdGEvZnVuY3Rpb25EYXRhLmpzb25cIik7XG4vLyBpbXBvcnQgeyBmdW5jdGlvbkRhdGFVUkwgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5vU2Nyb2xsTGluayBmcm9tIFwiLi4vTm9TY3JvbGxMaW5rXCI7XG5cbmZ1bmN0aW9uIEZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlKCkge1xuICBjb25zdCBbZGV0YWlsRnVuY3Rpb25PYmplY3QsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gZGVjb2RlVVJJKHBhcmFtcy5mdW5jdGlvbk5hbWUpO1xuICAvLyBmZXRjaChmdW5jdGlvbkRhdGFVUkwpXG4gIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnlPYmplY3QpID0+IHtcbiAgLy8gICAgICAgaWYgKFxuICAvLyAgICAgICAgIGNhdGVnb3J5T2JqZWN0LmNhdGVnb3J5ICE9PSBcIm5ld1wiICYmXG4gIC8vICAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwiaG90XCJcbiAgLy8gICAgICAgKSB7XG4gIC8vICAgICAgICAgY2F0ZWdvcnlPYmplY3Qub2JqZWN0cz8uZm9yRWFjaCgoT2JqZWN0SW5BcnJheSkgPT4ge1xuICAvLyAgICAgICAgICAgaWYgKE9iamVjdEluQXJyYXkubmFtZSA9PT0gZnVuY3Rpb25OYW1lKSB7XG4gIC8vICAgICAgICAgICAgIHNldERhdGEoT2JqZWN0SW5BcnJheSk7XG4gIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgICAgIH1cbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5T2JqZWN0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNhdGVnb3J5T2JqZWN0LmNhdGVnb3J5ICE9PSBcIm5ld1wiICYmXG4gICAgICAgIGNhdGVnb3J5T2JqZWN0LmNhdGVnb3J5ICE9PSBcImhvdFwiXG4gICAgICApIHtcbiAgICAgICAgY2F0ZWdvcnlPYmplY3Qub2JqZWN0cz8uZm9yRWFjaCgoT2JqZWN0SW5BcnJheSkgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3RJbkFycmF5Lm5hbWUuc2xpY2UoMikgPT09IGZ1bmN0aW9uTmFtZSkge1xuICAgICAgICAgICAgc2V0RGF0YShPYmplY3RJbkFycmF5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluX2hlYWRlcn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxiPntkZXRhaWxGdW5jdGlvbk9iamVjdC5uYW1lfTwvYj4g6riw64qlIOyGjOqwnFxuICAgICAgICA8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0Qm94fT5cbiAgICAgICAgICAgIDxoMj7tirnsp5U8L2gyPlxuICAgICAgICAgICAgPHA+e2RldGFpbEZ1bmN0aW9uT2JqZWN0LmNoYXJhdGVyaXN0aWN9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0Qm94fT5cbiAgICAgICAgICAgIDxoMj7qtIDroKgg7Ja07ZSMPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2RldGFpbEZ1bmN0aW9uT2JqZWN0LmFwcD8ubWFwKChhcHBOYW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17TWF0aC5yYW5kb20oKX0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfS8/YXBwTmFtZT0ke2FwcE5hbWV9Jm1ldGhvZElkPTAmZGVzY3JpcHRpb25JZD0wYH0+XG4gICAgICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPGIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGV0YWlsRnVuY3Rpb25PYmplY3QubmFtZX08L2I+IOq4sOuKpSDsi6TtlolcbiAgICAgICAgICDrsKnrspVcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPE1ha2VBcHBMaXN0IGZ1bmN0aW9uTWV0aG9kcz17ZGV0YWlsRnVuY3Rpb25PYmplY3QubWV0aG9kfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5Qm94fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3ViVGl0bGV9PlxuICAgICAgICAgICAg4p2X77iPIO2VmeyKteyXkCDrj4Tsm4DsnYQg65Oc66as6riwIOychO2VtCDsi6TsoJwg7Iqk66eI7Yq47Y+w7J2YIOuqqOyKteydhCDrs7jrlLAg66eM65OgXG4gICAgICAgICAgICDtmZTrqbTsnoXri4jri6QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxEaXNwbGF5Qm94PjwvRGlzcGxheUJveD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4V3JhcH0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJMaW5rIiwiTWFrZUFwcExpc3QiLCJEaXNwbGF5Qm94IiwiZGF0YSIsInJlcXVpcmUiLCJjbGFzc2VzIiwiTm9TY3JvbGxMaW5rIiwiRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UiLCJkZXRhaWxGdW5jdGlvbk9iamVjdCIsInNldERhdGEiLCJwYXJhbXMiLCJmdW5jdGlvbk5hbWUiLCJkZWNvZGVVUkkiLCJmb3JFYWNoIiwiY2F0ZWdvcnlPYmplY3QiLCJjYXRlZ29yeSIsIm9iamVjdHMiLCJPYmplY3RJbkFycmF5IiwibmFtZSIsInNsaWNlIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJtYWluX2hlYWRlciIsImgxIiwidGl0bGUiLCJiIiwidWwiLCJsaSIsImxpc3RCb3giLCJoMiIsInAiLCJjaGFyYXRlcmlzdGljIiwiYXBwIiwibWFwIiwiYXBwTmFtZSIsImhyZWYiLCJNYXRoIiwicmFuZG9tIiwiZnVuY3Rpb25NZXRob2RzIiwibWV0aG9kIiwiZGl2IiwiZGlzcGxheUJveCIsInN1YlRpdGxlIiwiZmxleFdyYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/layout/FunctionDescriptionPage.jsx\n"));

/***/ })

});