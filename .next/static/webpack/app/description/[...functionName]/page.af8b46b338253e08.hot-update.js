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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FunctionDescription/MakeAppList */ \"(app-client)/./components/FunctionDescription/MakeAppList.jsx\");\n/* harmony import */ var _DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DisplayBox/DisplayBox */ \"(app-client)/./components/DisplayBox/DisplayBox.jsx\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FunctionDescriptionPage.module.css */ \"(app-client)/./components/layout/FunctionDescriptionPage.module.css\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar data = __webpack_require__(/*! ../../../../../../public/data/functionData.json */ \"(app-client)/./public/data/functionData.json\");\n// import { functionDataURL } from \"../data\";\n\n\nfunction FunctionDescriptionPage() {\n    var _this = this;\n    var _detailFunctionObject_app;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), detailFunctionObject = _useState[0], setData = _useState[1];\n    var params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    var functionName = decodeURI(params.functionName);\n    //\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    var paramAppName = searchParams.get(\"appName\");\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(paramAppName), 2), appName = _useState1[0], setAppName = _useState1[1];\n    // fetch(functionDataURL)\n    //   .then((response) => response.json())\n    //   .then((data) => {\n    //     data.forEach((categoryObject) => {\n    //       if (\n    //         categoryObject.category !== \"new\" &&\n    //         categoryObject.category !== \"hot\"\n    //       ) {\n    //         categoryObject.objects?.forEach((ObjectInArray) => {\n    //           if (ObjectInArray.name === functionName) {\n    //             setData(ObjectInArray);\n    //             return;\n    //           }\n    //         });\n    //       }\n    //     });\n    //   });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        data.forEach(function(categoryObject) {\n            if (categoryObject.category !== \"new\" && categoryObject.category !== \"hot\") {\n                var _categoryObject_objects;\n                (_categoryObject_objects = categoryObject.objects) === null || _categoryObject_objects === void 0 ? void 0 : _categoryObject_objects.forEach(function(ObjectInArray) {\n                    if (ObjectInArray.name.slice(2) === functionName) {\n                        setData(ObjectInArray);\n                        return;\n                    }\n                });\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, [\n        appName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 소개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"특징\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: detailFunctionObject.charateristic\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"관련 어플\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: (_detailFunctionObject_app = detailFunctionObject.app) === null || _detailFunctionObject_app === void 0 ? void 0 : _detailFunctionObject_app.map(function(appName) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(appName, \"&methodId=0&descriptionId=0\"),\n                                                    children: appName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, Math.random(), false, {\n                                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 실행 방법\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        functionMethods: detailFunctionObject.method,\n                        setAppName: setAppName,\n                        appName: appName\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().displayBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().subTitle),\n                                children: \"❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexWrap)\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(FunctionDescriptionPage, \"XgXWwACQUGcabIVohHJSP1ynKmE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = FunctionDescriptionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionDescriptionPage);\nvar _c;\n$RefreshReg$(_c, \"FunctionDescriptionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2lCO0FBQ2hDO0FBRThDO0FBQ3pCO0FBRWxELElBQU1PLE9BQU9DLG1CQUFPQSxDQUFDLHFHQUFnQztBQUNyRCw2Q0FBNkM7QUFDYztBQUNoQjtBQUUzQyxTQUFTRzs7UUF5RE1DOztJQXhEYixJQUF3Q1gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBNUNXLHVCQUFpQ1gsY0FBWFksVUFBV1o7SUFDeEMsSUFBTWEsU0FBU1osMERBQVNBO0lBQ3hCLElBQU1hLGVBQWVDLFVBQVVGLE9BQU9DO0lBQ3RDLEVBQUU7SUFDRixJQUFNRSxlQUFlZCxnRUFBZUE7SUFDcEMsSUFBTWUsZUFBZUQsYUFBYUUsSUFBSTtJQUN0QyxJQUE4QmxCLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ2lCLG1CQUFoQ0UsVUFBdUJuQixlQUFkb0IsYUFBY3BCO0lBQzlCLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osK0RBQStEO0lBQy9ELHVEQUF1RDtJQUN2RCxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBRVJELGdEQUFTQSxDQUFDO1FBQ1JPLEtBQUtlLFFBQVEsU0FBQ0M7WUFDWixJQUNFQSxlQUFlQyxhQUFhLFNBQzVCRCxlQUFlQyxhQUFhLE9BQzVCO29CQUNBRDtnQkFBQUEsQ0FBQUEsMEJBQUFBLGVBQWVFLHFCQUFmRixxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCRCxRQUFRLFNBQUNJO29CQUMvQixJQUFJQSxjQUFjQyxLQUFLQyxNQUFNLE9BQU9iLGNBQWM7d0JBQ2hERixRQUFRYTt3QkFDUjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFDTDFCLGdEQUFTQSxDQUFDLFlBQU8sR0FBRztRQUFDb0I7S0FBUTtJQUU3QixxQkFDRSw4REFBQ1M7OzBCQUNDLDhEQUFDQztnQkFBUUMsV0FBV3RCLHdGQUFtQnVCOztrQ0FDckMsOERBQUNDO3dCQUFHRixXQUFXdEIsa0ZBQWF5Qjs7MENBQzFCLDhEQUFDQzswQ0FBR3ZCLHFCQUFxQmU7Ozs7Ozs0QkFBUzs7Ozs7OztrQ0FFcEMsOERBQUNTOzswQ0FDQyw4REFBQ0M7Z0NBQUdOLFdBQVd0QixvRkFBZTZCOztrREFDNUIsOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFHNUIscUJBQXFCNkI7Ozs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNKO2dDQUFHTixXQUFXdEIsb0ZBQWU2Qjs7a0RBQzVCLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDSDtrREFDRXhCLENBQUFBLDRCQUFBQSxxQkFBcUI4QixpQkFBckI5Qix1Q0FBQUEsS0FBQUEsSUFBQUEsMEJBQTBCK0IsSUFBSSxTQUFDdkI7aUVBQzlCLDhEQUFDaUI7MERBQ0MsNEVBQUMzQixxREFBWUE7b0RBQ1hrQyxNQUFNLGdCQUF5Q3hCLE9BQXpCTCxjQUFhLGNBQW9CLE9BQVJLLFNBQVE7OERBQ3REQTs7Ozs7OytDQUhJeUIsS0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVd4Qiw4REFBQ2hCO2dCQUFRQyxXQUFXdEIsaUZBQVlvQjs7a0NBQzlCLDhEQUFDVTs7MENBQ0MsOERBQUNKO2dDQUFFSixXQUFXdEIsa0ZBQWF5QjswQ0FBR3RCLHFCQUFxQmU7Ozs7Ozs0QkFBUzs7Ozs7OztrQ0FHOUQsOERBQUN0QixtRkFBV0E7d0JBQ1YwQyxpQkFBaUJuQyxxQkFBcUJvQzt3QkFDdEMzQixZQUFZQTt3QkFDWkQsU0FBU0E7Ozs7OztrQ0FFWCw4REFBQzZCO3dCQUFJbEIsV0FBV3RCLHVGQUFrQnlDOzswQ0FDaEMsOERBQUNWO2dDQUFFVCxXQUFXdEIscUZBQWdCMEM7MENBQUU7Ozs7OzswQ0FJaEMsOERBQUM3Qyw4REFBVUE7Ozs7OzBDQUNYLDhEQUFDMkM7Z0NBQUlsQixXQUFXdEIscUZBQWdCMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQTFGU3pDOztRQUVRVCxzREFBU0E7UUFHSEMsNERBQWVBOzs7S0FMN0JRO0FBNEZULCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4PzJmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IE1ha2VBcHBMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZUFwcExpc3RcIjtcbmltcG9ydCBEaXNwbGF5Qm94IGZyb20gXCIuLi9EaXNwbGF5Qm94L0Rpc3BsYXlCb3hcIjtcblxuY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIvcHVibGljL2RhdGEvZnVuY3Rpb25EYXRhLmpzb25cIik7XG4vLyBpbXBvcnQgeyBmdW5jdGlvbkRhdGFVUkwgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5vU2Nyb2xsTGluayBmcm9tIFwiLi4vTm9TY3JvbGxMaW5rXCI7XG5cbmZ1bmN0aW9uIEZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlKCkge1xuICBjb25zdCBbZGV0YWlsRnVuY3Rpb25PYmplY3QsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gZGVjb2RlVVJJKHBhcmFtcy5mdW5jdGlvbk5hbWUpO1xuICAvL1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGFyYW1BcHBOYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImFwcE5hbWVcIik7XG4gIGNvbnN0IFthcHBOYW1lLCBzZXRBcHBOYW1lXSA9IHVzZVN0YXRlKHBhcmFtQXBwTmFtZSk7XG4gIC8vIGZldGNoKGZ1bmN0aW9uRGF0YVVSTClcbiAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeU9iamVjdCkgPT4ge1xuICAvLyAgICAgICBpZiAoXG4gIC8vICAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwibmV3XCIgJiZcbiAgLy8gICAgICAgICBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeSAhPT0gXCJob3RcIlxuICAvLyAgICAgICApIHtcbiAgLy8gICAgICAgICBjYXRlZ29yeU9iamVjdC5vYmplY3RzPy5mb3JFYWNoKChPYmplY3RJbkFycmF5KSA9PiB7XG4gIC8vICAgICAgICAgICBpZiAoT2JqZWN0SW5BcnJheS5uYW1lID09PSBmdW5jdGlvbk5hbWUpIHtcbiAgLy8gICAgICAgICAgICAgc2V0RGF0YShPYmplY3RJbkFycmF5KTtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnlPYmplY3QpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwibmV3XCIgJiZcbiAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwiaG90XCJcbiAgICAgICkge1xuICAgICAgICBjYXRlZ29yeU9iamVjdC5vYmplY3RzPy5mb3JFYWNoKChPYmplY3RJbkFycmF5KSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdEluQXJyYXkubmFtZS5zbGljZSgyKSA9PT0gZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBzZXREYXRhKE9iamVjdEluQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbYXBwTmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbl9oZWFkZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICA8Yj57ZGV0YWlsRnVuY3Rpb25PYmplY3QubmFtZX08L2I+IOq4sOuKpSDshozqsJxcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJveH0+XG4gICAgICAgICAgICA8aDI+7Yq57KeVPC9oMj5cbiAgICAgICAgICAgIDxwPntkZXRhaWxGdW5jdGlvbk9iamVjdC5jaGFyYXRlcmlzdGljfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEJveH0+XG4gICAgICAgICAgICA8aDI+6rSA66CoIOyWtO2UjDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtkZXRhaWxGdW5jdGlvbk9iamVjdC5hcHA/Lm1hcCgoYXBwTmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgICAgICAgPE5vU2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfS8/YXBwTmFtZT0ke2FwcE5hbWV9Jm1ldGhvZElkPTAmZGVzY3JpcHRpb25JZD0wYH0+XG4gICAgICAgICAgICAgICAgICAgIHthcHBOYW1lfVxuICAgICAgICAgICAgICAgICAgPC9Ob1Njcm9sbExpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8YiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkZXRhaWxGdW5jdGlvbk9iamVjdC5uYW1lfTwvYj4g6riw64qlIOyLpO2WiVxuICAgICAgICAgIOuwqeuylVxuICAgICAgICA8L2gyPlxuICAgICAgICA8TWFrZUFwcExpc3RcbiAgICAgICAgICBmdW5jdGlvbk1ldGhvZHM9e2RldGFpbEZ1bmN0aW9uT2JqZWN0Lm1ldGhvZH1cbiAgICAgICAgICBzZXRBcHBOYW1lPXtzZXRBcHBOYW1lfVxuICAgICAgICAgIGFwcE5hbWU9e2FwcE5hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3BsYXlCb3h9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJUaXRsZX0+XG4gICAgICAgICAgICDinZfvuI8g7ZWZ7Iq17JeQIOuPhOybgOydhCDrk5zrpqzquLAg7JyE7ZW0IOyLpOygnCDsiqTrp4jtirjtj7DsnZgg66qo7Iq17J2EIOuzuOuUsCDrp4zrk6BcbiAgICAgICAgICAgIO2ZlOuptOyeheuLiOuLpC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPERpc3BsYXlCb3g+PC9EaXNwbGF5Qm94PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhXcmFwfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbkRlc2NyaXB0aW9uUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsIkxpbmsiLCJNYWtlQXBwTGlzdCIsIkRpc3BsYXlCb3giLCJkYXRhIiwicmVxdWlyZSIsImNsYXNzZXMiLCJOb1Njcm9sbExpbmsiLCJGdW5jdGlvbkRlc2NyaXB0aW9uUGFnZSIsImRldGFpbEZ1bmN0aW9uT2JqZWN0Iiwic2V0RGF0YSIsInBhcmFtcyIsImZ1bmN0aW9uTmFtZSIsImRlY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInBhcmFtQXBwTmFtZSIsImdldCIsImFwcE5hbWUiLCJzZXRBcHBOYW1lIiwiZm9yRWFjaCIsImNhdGVnb3J5T2JqZWN0IiwiY2F0ZWdvcnkiLCJvYmplY3RzIiwiT2JqZWN0SW5BcnJheSIsIm5hbWUiLCJzbGljZSIsIm1haW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFpbl9oZWFkZXIiLCJoMSIsInRpdGxlIiwiYiIsInVsIiwibGkiLCJsaXN0Qm94IiwiaDIiLCJwIiwiY2hhcmF0ZXJpc3RpYyIsImFwcCIsIm1hcCIsImhyZWYiLCJNYXRoIiwicmFuZG9tIiwiZnVuY3Rpb25NZXRob2RzIiwibWV0aG9kIiwiZGl2IiwiZGlzcGxheUJveCIsInN1YlRpdGxlIiwiZmxleFdyYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/layout/FunctionDescriptionPage.jsx\n"));

/***/ })

});