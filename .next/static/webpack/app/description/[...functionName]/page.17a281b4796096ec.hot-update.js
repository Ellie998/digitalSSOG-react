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

/***/ "(app-client)/./components/FunctionDescription/MakeMethodList.jsx":
/*!***********************************************************!*\
  !*** ./components/FunctionDescription/MakeMethodList.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeDescriptionList */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MakeMethodList.module.css */ \"(app-client)/./components/FunctionDescription/MakeMethodList.module.css\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import data from \"../public/data/functionData.json\";\n\n\n\nfunction MakeMethodList(param) {\n    var functionMethodObject = param.functionMethodObject;\n    var _this = this;\n    var _functionMethodObject_howto;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), myAppName = _useContext.myAppName, myMethodId = _useContext.myMethodId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5___default().listWrap),\n        children: [\n            functionMethodObject.howto.length !== 1 && ((_functionMethodObject_howto = functionMethodObject.howto) === null || _functionMethodObject_howto === void 0 ? void 0 : _functionMethodObject_howto.map(function(functionMethod) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                        open: +myMethodId === functionMethod.methodNum && myAppName === functionMethodObject.methodAppName ? true : false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                children: [\n                                    \"방법\",\n                                    \" \".concat(functionMethod.methodNum).concat(functionMethod.methodTitle ? \") \".concat(functionMethod.methodTitle) : \"\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                functionMethod: functionMethod,\n                                dataAppName: functionMethodObject.methodAppName,\n                                dataMethodId: functionMethod.methodNum\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, _this)\n                }, Math.random(), false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, _this);\n            })),\n            functionMethodObject.howto.length === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                functionMethod: functionMethodObject.howto[0],\n                dataAppName: functionMethodObject.methodAppName,\n                dataMethodId: functionMethodObject.howto[0].methodNum\n            }, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeMethodList, \"BIrvBjfHKT9YLTQ65sHgxeKYVeE=\");\n_c = MakeMethodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeMethodList);\nvar _c;\n$RefreshReg$(_c, \"MakeMethodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDTTtBQUN4RCx1REFBdUQ7QUFDTDtBQUNmO0FBQ2lCO0FBRXBELFNBQVNLLGVBQWUsS0FBd0I7UUFBeEIsNkJBQUVDOztRQU1sQkE7O0lBTE4sSUFBa0NILGNBQUFBLGlEQUFVQSxDQUFDQyxnRUFBVUEsR0FBL0NHLFlBQTBCSixZQUExQkksV0FBV0MsYUFBZUwsWUFBZks7SUFFbkIscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVdSLDRFQUFnQlM7O1lBQzVCTCxxQkFBcUJNLE1BQU1DLFdBQVcsTUFDckNQLENBQUFBLDhCQUFBQSxxQkFBcUJNLG1CQUFyQk4seUNBQUFBLEtBQUFBLElBQUFBLDRCQUE0QlEsSUFBSSxTQUFDQztxQ0FDL0IsOERBQUNDOzhCQUNDLDRFQUFDQzt3QkFDQ0MsTUFDRSxDQUFDVixlQUFlTyxlQUFlSSxhQUMvQlosY0FBY0QscUJBQXFCYyxnQkFDL0IsT0FDQTs7MENBRU4sOERBQUNDOztvQ0FBUTtvQ0FFTCxJQUNBTixPQURHQSxlQUFlSSxXQUluQixPQUhDSixlQUFlTyxjQUNYLEtBQWdDLE9BQTNCUCxlQUFlTyxlQUNwQjs7Ozs7OzswQ0FHUiw4REFBQ3JCLDREQUFtQkE7Z0NBQ2xCYyxnQkFBZ0JBO2dDQUNoQlEsYUFBYWpCLHFCQUFxQmM7Z0NBQ2xDSSxjQUFjVCxlQUFlSTs7Ozs7Ozs7Ozs7O21CQW5CMUJNLEtBQUtDOzs7Ozs7WUF3QmpCcEIscUJBQXFCTSxNQUFNQyxXQUFXLG1CQUNyQyw4REFBQ1osNERBQW1CQTtnQkFDbEJjLGdCQUFnQlQscUJBQXFCTSxLQUFLLENBQUMsRUFBRTtnQkFDN0NXLGFBQWFqQixxQkFBcUJjO2dCQUNsQ0ksY0FBY2xCLHFCQUFxQk0sS0FBSyxDQUFDLEVBQUUsQ0FBQ087Ozs7Ozs7Ozs7OztBQUt0RDtHQXhDU2Q7S0FBQUE7QUEwQ1QsK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeD8yMWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBNYWtlRGVzY3JpcHRpb25MaXN0IGZyb20gXCIuL01ha2VEZXNjcmlwdGlvbkxpc3RcIjtcbi8vIGltcG9ydCBkYXRhIGZyb20gXCIuLi9wdWJsaWMvZGF0YS9mdW5jdGlvbkRhdGEuanNvblwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFrZU1ldGhvZExpc3QubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVybENvbnRleHQgZnJvbSBcIi4uL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE1ha2VNZXRob2RMaXN0KHsgZnVuY3Rpb25NZXRob2RPYmplY3QgfSkge1xuICBjb25zdCB7IG15QXBwTmFtZSwgbXlNZXRob2RJZCB9ID0gdXNlQ29udGV4dChVcmxDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdyYXB9PlxuICAgICAge2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvLmxlbmd0aCAhPT0gMSAmJlxuICAgICAgICBmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0bz8ubWFwKChmdW5jdGlvbk1ldGhvZCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgPGRldGFpbHNcbiAgICAgICAgICAgICAgb3Blbj17XG4gICAgICAgICAgICAgICAgK215TWV0aG9kSWQgPT09IGZ1bmN0aW9uTWV0aG9kLm1ldGhvZE51bSAmJlxuICAgICAgICAgICAgICAgIG15QXBwTmFtZSA9PT0gZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZVxuICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5PlxuICAgICAgICAgICAgICAgIOuwqeuylVxuICAgICAgICAgICAgICAgIHtgICR7ZnVuY3Rpb25NZXRob2QubWV0aG9kTnVtfSR7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbk1ldGhvZC5tZXRob2RUaXRsZVxuICAgICAgICAgICAgICAgICAgICA/IGApICR7ZnVuY3Rpb25NZXRob2QubWV0aG9kVGl0bGV9YFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8TWFrZURlc2NyaXB0aW9uTGlzdFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTWV0aG9kPXtmdW5jdGlvbk1ldGhvZH1cbiAgICAgICAgICAgICAgICBkYXRhQXBwTmFtZT17ZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZX1cbiAgICAgICAgICAgICAgICBkYXRhTWV0aG9kSWQ9e2Z1bmN0aW9uTWV0aG9kLm1ldGhvZE51bX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIHtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0by5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICA8TWFrZURlc2NyaXB0aW9uTGlzdFxuICAgICAgICAgIGZ1bmN0aW9uTWV0aG9kPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0b1swXX1cbiAgICAgICAgICBkYXRhQXBwTmFtZT17ZnVuY3Rpb25NZXRob2RPYmplY3QubWV0aG9kQXBwTmFtZX1cbiAgICAgICAgICBkYXRhTWV0aG9kSWQ9e2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvWzBdLm1ldGhvZE51bX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9vbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZU1ldGhvZExpc3Q7XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwiTWFrZURlc2NyaXB0aW9uTGlzdCIsImNsYXNzZXMiLCJ1c2VDb250ZXh0IiwiVXJsQ29udGV4dCIsIk1ha2VNZXRob2RMaXN0IiwiZnVuY3Rpb25NZXRob2RPYmplY3QiLCJteUFwcE5hbWUiLCJteU1ldGhvZElkIiwib2wiLCJjbGFzc05hbWUiLCJsaXN0V3JhcCIsImhvd3RvIiwibGVuZ3RoIiwibWFwIiwiZnVuY3Rpb25NZXRob2QiLCJsaSIsImRldGFpbHMiLCJvcGVuIiwibWV0aG9kTnVtIiwibWV0aG9kQXBwTmFtZSIsInN1bW1hcnkiLCJtZXRob2RUaXRsZSIsImRhdGFBcHBOYW1lIiwiZGF0YU1ldGhvZElkIiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeMethodList.jsx\n"));

/***/ })

});