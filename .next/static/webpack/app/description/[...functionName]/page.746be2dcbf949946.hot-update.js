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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FunctionDescription/MakeAppList */ \"(app-client)/./components/FunctionDescription/MakeAppList.jsx\");\n/* harmony import */ var _DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DisplayBox/DisplayBox */ \"(app-client)/./components/DisplayBox/DisplayBox.jsx\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FunctionDescriptionPage.module.css */ \"(app-client)/./components/layout/FunctionDescriptionPage.module.css\");\n/* harmony import */ var _FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar data = __webpack_require__(/*! ../../../../../../public/data/functionData.json */ \"(app-client)/./public/data/functionData.json\");\n// import { functionDataURL } from \"../data\";\n\n\nfunction FunctionDescriptionPage() {\n    var _this = this;\n    var _detailFunctionObject_app;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), detailFunctionObject = _useState[0], setData = _useState[1];\n    var params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    var functionName = decodeURI(params.functionName);\n    //\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    var paramAppName = searchParams.get(\"appName\");\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(paramAppName), 2), appName = _useState1[0], setAppName = _useState1[1];\n    // fetch(functionDataURL)\n    //   .then((response) => response.json())\n    //   .then((data) => {\n    //     data.forEach((categoryObject) => {\n    //       if (\n    //         categoryObject.category !== \"new\" &&\n    //         categoryObject.category !== \"hot\"\n    //       ) {\n    //         categoryObject.objects?.forEach((ObjectInArray) => {\n    //           if (ObjectInArray.name === functionName) {\n    //             setData(ObjectInArray);\n    //             return;\n    //           }\n    //         });\n    //       }\n    //     });\n    //   });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        data.forEach(function(categoryObject) {\n            if (categoryObject.category !== \"new\" && categoryObject.category !== \"hot\") {\n                var _categoryObject_objects;\n                (_categoryObject_objects = categoryObject.objects) === null || _categoryObject_objects === void 0 ? void 0 : _categoryObject_objects.forEach(function(ObjectInArray) {\n                    if (ObjectInArray.name.slice(2) === functionName) {\n                        setData(ObjectInArray);\n                        return;\n                    }\n                });\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 소개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"특징\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: detailFunctionObject.charateristic\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().listBox),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"관련 어플\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: (_detailFunctionObject_app = detailFunctionObject.app) === null || _detailFunctionObject_app === void 0 ? void 0 : _detailFunctionObject_app.map(function(appName) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(appName, \"&methodId=0&descriptionId=0\"),\n                                                    children: appName\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, Math.random(), false, {\n                                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 17\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                                children: detailFunctionObject.name\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            \" 기능 실행 방법\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FunctionDescription_MakeAppList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        functionMethods: detailFunctionObject.method,\n                        setAppName: setAppName,\n                        appName: appName\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().displayBox),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().subTitle),\n                                children: \"❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayBox_DisplayBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_FunctionDescriptionPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().flexWrap)\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/layout/FunctionDescriptionPage.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(FunctionDescriptionPage, \"/tW5ZrqlSVctzX1v8XT2z73vEkA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = FunctionDescriptionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FunctionDescriptionPage);\nvar _c;\n$RefreshReg$(_c, \"FunctionDescriptionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ2lCO0FBQ2hDO0FBRThDO0FBQ3pCO0FBRWxELElBQU1PLE9BQU9DLG1CQUFPQSxDQUFDLHFHQUFnQztBQUNyRCw2Q0FBNkM7QUFDYztBQUNoQjtBQUUzQyxTQUFTRzs7UUF3RE1DOztJQXZEYixJQUF3Q1gsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLEVBQUUsT0FBNUNXLHVCQUFpQ1gsY0FBWFksVUFBV1o7SUFDeEMsSUFBTWEsU0FBU1osMERBQVNBO0lBQ3hCLElBQU1hLGVBQWVDLFVBQVVGLE9BQU9DO0lBQ3RDLEVBQUU7SUFDRixJQUFNRSxlQUFlZCxnRUFBZUE7SUFDcEMsSUFBTWUsZUFBZUQsYUFBYUUsSUFBSTtJQUN0QyxJQUE4QmxCLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ2lCLG1CQUFoQ0UsVUFBdUJuQixlQUFkb0IsYUFBY3BCO0lBQzlCLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osK0RBQStEO0lBQy9ELHVEQUF1RDtJQUN2RCxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBRVJELGdEQUFTQSxDQUFDO1FBQ1JPLEtBQUtlLFFBQVEsU0FBQ0M7WUFDWixJQUNFQSxlQUFlQyxhQUFhLFNBQzVCRCxlQUFlQyxhQUFhLE9BQzVCO29CQUNBRDtnQkFBQUEsQ0FBQUEsMEJBQUFBLGVBQWVFLHFCQUFmRixxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCRCxRQUFRLFNBQUNJO29CQUMvQixJQUFJQSxjQUFjQyxLQUFLQyxNQUFNLE9BQU9iLGNBQWM7d0JBQ2hERixRQUFRYTt3QkFDUjtvQkFDRjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQztnQkFBUUMsV0FBV3RCLHdGQUFtQnVCOztrQ0FDckMsOERBQUNDO3dCQUFHRixXQUFXdEIsa0ZBQWF5Qjs7MENBQzFCLDhEQUFDQzswQ0FBR3ZCLHFCQUFxQmU7Ozs7Ozs0QkFBUzs7Ozs7OztrQ0FFcEMsOERBQUNTOzswQ0FDQyw4REFBQ0M7Z0NBQUdOLFdBQVd0QixvRkFBZTZCOztrREFDNUIsOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFHNUIscUJBQXFCNkI7Ozs7Ozs7Ozs7OzswQ0FFM0IsOERBQUNKO2dDQUFHTixXQUFXdEIsb0ZBQWU2Qjs7a0RBQzVCLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDSDtrREFDRXhCLENBQUFBLDRCQUFBQSxxQkFBcUI4QixpQkFBckI5Qix1Q0FBQUEsS0FBQUEsSUFBQUEsMEJBQTBCK0IsSUFBSSxTQUFDdkI7aUVBQzlCLDhEQUFDaUI7MERBQ0MsNEVBQUMzQixxREFBWUE7b0RBQ1hrQyxNQUFNLGdCQUF5Q3hCLE9BQXpCTCxjQUFhLGNBQW9CLE9BQVJLLFNBQVE7OERBQ3REQTs7Ozs7OytDQUhJeUIsS0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVd4Qiw4REFBQ2hCO2dCQUFRQyxXQUFXdEIsaUZBQVlvQjs7a0NBQzlCLDhEQUFDVTs7MENBQ0MsOERBQUNKO2dDQUFFSixXQUFXdEIsa0ZBQWF5QjswQ0FBR3RCLHFCQUFxQmU7Ozs7Ozs0QkFBUzs7Ozs7OztrQ0FHOUQsOERBQUN0QixtRkFBV0E7d0JBQ1YwQyxpQkFBaUJuQyxxQkFBcUJvQzt3QkFDdEMzQixZQUFZQTt3QkFDWkQsU0FBU0E7Ozs7OztrQ0FFWCw4REFBQzZCO3dCQUFJbEIsV0FBV3RCLHVGQUFrQnlDOzswQ0FDaEMsOERBQUNWO2dDQUFFVCxXQUFXdEIscUZBQWdCMEM7MENBQUU7Ozs7OzswQ0FJaEMsOERBQUM3Qyw4REFBVUE7Ozs7OzBDQUNYLDhEQUFDMkM7Z0NBQUlsQixXQUFXdEIscUZBQWdCMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQXpGU3pDOztRQUVRVCxzREFBU0E7UUFHSEMsNERBQWVBOzs7S0FMN0JRO0FBMkZULCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UuanN4PzJmMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IE1ha2VBcHBMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZUFwcExpc3RcIjtcbmltcG9ydCBEaXNwbGF5Qm94IGZyb20gXCIuLi9EaXNwbGF5Qm94L0Rpc3BsYXlCb3hcIjtcblxuY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIvcHVibGljL2RhdGEvZnVuY3Rpb25EYXRhLmpzb25cIik7XG4vLyBpbXBvcnQgeyBmdW5jdGlvbkRhdGFVUkwgfSBmcm9tIFwiLi4vZGF0YVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5vU2Nyb2xsTGluayBmcm9tIFwiLi4vTm9TY3JvbGxMaW5rXCI7XG5cbmZ1bmN0aW9uIEZ1bmN0aW9uRGVzY3JpcHRpb25QYWdlKCkge1xuICBjb25zdCBbZGV0YWlsRnVuY3Rpb25PYmplY3QsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgZnVuY3Rpb25OYW1lID0gZGVjb2RlVVJJKHBhcmFtcy5mdW5jdGlvbk5hbWUpO1xuICAvL1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGFyYW1BcHBOYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImFwcE5hbWVcIik7XG4gIGNvbnN0IFthcHBOYW1lLCBzZXRBcHBOYW1lXSA9IHVzZVN0YXRlKHBhcmFtQXBwTmFtZSk7XG4gIC8vIGZldGNoKGZ1bmN0aW9uRGF0YVVSTClcbiAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgZGF0YS5mb3JFYWNoKChjYXRlZ29yeU9iamVjdCkgPT4ge1xuICAvLyAgICAgICBpZiAoXG4gIC8vICAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwibmV3XCIgJiZcbiAgLy8gICAgICAgICBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeSAhPT0gXCJob3RcIlxuICAvLyAgICAgICApIHtcbiAgLy8gICAgICAgICBjYXRlZ29yeU9iamVjdC5vYmplY3RzPy5mb3JFYWNoKChPYmplY3RJbkFycmF5KSA9PiB7XG4gIC8vICAgICAgICAgICBpZiAoT2JqZWN0SW5BcnJheS5uYW1lID09PSBmdW5jdGlvbk5hbWUpIHtcbiAgLy8gICAgICAgICAgICAgc2V0RGF0YShPYmplY3RJbkFycmF5KTtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0pO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgoY2F0ZWdvcnlPYmplY3QpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwibmV3XCIgJiZcbiAgICAgICAgY2F0ZWdvcnlPYmplY3QuY2F0ZWdvcnkgIT09IFwiaG90XCJcbiAgICAgICkge1xuICAgICAgICBjYXRlZ29yeU9iamVjdC5vYmplY3RzPy5mb3JFYWNoKChPYmplY3RJbkFycmF5KSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdEluQXJyYXkubmFtZS5zbGljZSgyKSA9PT0gZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICBzZXREYXRhKE9iamVjdEluQXJyYXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5faGVhZGVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPGI+e2RldGFpbEZ1bmN0aW9uT2JqZWN0Lm5hbWV9PC9iPiDquLDriqUg7IaM6rCcXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCb3h9PlxuICAgICAgICAgICAgPGgyPu2KueynlTwvaDI+XG4gICAgICAgICAgICA8cD57ZGV0YWlsRnVuY3Rpb25PYmplY3QuY2hhcmF0ZXJpc3RpY308L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RCb3h9PlxuICAgICAgICAgICAgPGgyPuq0gOugqCDslrTtlIw8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGV0YWlsRnVuY3Rpb25PYmplY3QuYXBwPy5tYXAoKGFwcE5hbWUpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgICAgICAgIDxOb1Njcm9sbExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9kZXNjcmlwdGlvbi8ke2Z1bmN0aW9uTmFtZX0vP2FwcE5hbWU9JHthcHBOYW1lfSZtZXRob2RJZD0wJmRlc2NyaXB0aW9uSWQ9MGB9PlxuICAgICAgICAgICAgICAgICAgICB7YXBwTmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTm9TY3JvbGxMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPGIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGV0YWlsRnVuY3Rpb25PYmplY3QubmFtZX08L2I+IOq4sOuKpSDsi6TtlolcbiAgICAgICAgICDrsKnrspVcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPE1ha2VBcHBMaXN0XG4gICAgICAgICAgZnVuY3Rpb25NZXRob2RzPXtkZXRhaWxGdW5jdGlvbk9iamVjdC5tZXRob2R9XG4gICAgICAgICAgc2V0QXBwTmFtZT17c2V0QXBwTmFtZX1cbiAgICAgICAgICBhcHBOYW1lPXthcHBOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNwbGF5Qm94fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3ViVGl0bGV9PlxuICAgICAgICAgICAg4p2X77iPIO2VmeyKteyXkCDrj4Tsm4DsnYQg65Oc66as6riwIOychO2VtCDsi6TsoJwg7Iqk66eI7Yq47Y+w7J2YIOuqqOyKteydhCDrs7jrlLAg66eM65OgXG4gICAgICAgICAgICDtmZTrqbTsnoXri4jri6QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxEaXNwbGF5Qm94PjwvRGlzcGxheUJveD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4V3JhcH0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJMaW5rIiwiTWFrZUFwcExpc3QiLCJEaXNwbGF5Qm94IiwiZGF0YSIsInJlcXVpcmUiLCJjbGFzc2VzIiwiTm9TY3JvbGxMaW5rIiwiRnVuY3Rpb25EZXNjcmlwdGlvblBhZ2UiLCJkZXRhaWxGdW5jdGlvbk9iamVjdCIsInNldERhdGEiLCJwYXJhbXMiLCJmdW5jdGlvbk5hbWUiLCJkZWNvZGVVUkkiLCJzZWFyY2hQYXJhbXMiLCJwYXJhbUFwcE5hbWUiLCJnZXQiLCJhcHBOYW1lIiwic2V0QXBwTmFtZSIsImZvckVhY2giLCJjYXRlZ29yeU9iamVjdCIsImNhdGVnb3J5Iiwib2JqZWN0cyIsIk9iamVjdEluQXJyYXkiLCJuYW1lIiwic2xpY2UiLCJtYWluIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1haW5faGVhZGVyIiwiaDEiLCJ0aXRsZSIsImIiLCJ1bCIsImxpIiwibGlzdEJveCIsImgyIiwicCIsImNoYXJhdGVyaXN0aWMiLCJhcHAiLCJtYXAiLCJocmVmIiwiTWF0aCIsInJhbmRvbSIsImZ1bmN0aW9uTWV0aG9kcyIsIm1ldGhvZCIsImRpdiIsImRpc3BsYXlCb3giLCJzdWJUaXRsZSIsImZsZXhXcmFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/layout/FunctionDescriptionPage.jsx\n"));

/***/ })

});