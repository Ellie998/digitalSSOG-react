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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeDescriptionList */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MakeMethodList.module.css */ \"(app-client)/./components/FunctionDescription/MakeMethodList.module.css\");\n/* harmony import */ var _MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import data from \"../public/data/functionData.json\";\n\n\n\nfunction MakeMethodList(param) {\n    var functionMethodObject = param.functionMethodObject;\n    var _this = this;\n    var _functionMethodObject_howto;\n    _s();\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), appName = _useContext.appName, methodId = _useContext.methodId, descriptionId = _useContext.descriptionId, setAppName = _useContext.setAppName, setMethodId = _useContext.setMethodId, setDescriptionId = _useContext.setDescriptionId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeMethodList_module_css__WEBPACK_IMPORTED_MODULE_5___default().listWrap),\n        children: [\n            functionMethodObject.howto.length !== 1 && ((_functionMethodObject_howto = functionMethodObject.howto) === null || _functionMethodObject_howto === void 0 ? void 0 : _functionMethodObject_howto.map(function(functionMethod) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                        open: +methodId === functionMethod.methodNum && appName === functionMethodObject.methodAppName ? true : false,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                children: [\n                                    \"방법\",\n                                    \" \".concat(functionMethod.methodNum).concat(functionMethod.methodTitle ? \") \".concat(functionMethod.methodTitle) : \"\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                functionMethod: functionMethod,\n                                appName: functionMethodObject.methodAppName,\n                                methodId: functionMethod.methodNum\n                            }, void 0, false, {\n                                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, _this)\n                }, Math.random(), false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this);\n            })),\n            functionMethodObject.howto.length === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MakeDescriptionList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                functionMethod: functionMethodObject.howto[0],\n                appName: functionMethodObject.methodAppName,\n                methodId: functionMethodObject.howto[0].methodNum\n            }, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeMethodList.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeMethodList, \"xm2CQtroleZam0GISTxNMsC5iKQ=\");\n_c = MakeMethodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeMethodList);\nvar _c;\n$RefreshReg$(_c, \"MakeMethodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VNZXRob2RMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDTTtBQUN4RCx1REFBdUQ7QUFDTDtBQUNmO0FBQ2lCO0FBRXBELFNBQVNLLGVBQWUsS0FBd0I7UUFBeEIsNkJBQUVDOztRQWFsQkE7O0lBWk4sSUFPSUgsY0FBQUEsaURBQVVBLENBQUNDLGdFQUFVQSxHQU52QkcsVUFNRUosWUFORkksU0FDQUMsV0FLRUwsWUFMRkssVUFDQUMsZ0JBSUVOLFlBSkZNLGVBQ0FDLGFBR0VQLFlBSEZPLFlBQ0FDLGNBRUVSLFlBRkZRLGFBQ0FDLG1CQUNFVCxZQURGUztJQUdGLHFCQUNFLDhEQUFDQztRQUFHQyxXQUFXWiw0RUFBZ0JhOztZQUM1QlQscUJBQXFCVSxNQUFNQyxXQUFXLE1BQ3JDWCxDQUFBQSw4QkFBQUEscUJBQXFCVSxtQkFBckJWLHlDQUFBQSxLQUFBQSxJQUFBQSw0QkFBNEJZLElBQUksU0FBQ0M7cUNBQy9CLDhEQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NDLE1BQ0UsQ0FBQ2QsYUFBYVcsZUFBZUksYUFDN0JoQixZQUFZRCxxQkFBcUJrQixnQkFDN0IsT0FDQTs7MENBRU4sOERBQUNDOztvQ0FBUTtvQ0FFTCxJQUNBTixPQURHQSxlQUFlSSxXQUluQixPQUhDSixlQUFlTyxjQUNYLEtBQWdDLE9BQTNCUCxlQUFlTyxlQUNwQjs7Ozs7OzswQ0FHUiw4REFBQ3pCLDREQUFtQkE7Z0NBQ2xCa0IsZ0JBQWdCQTtnQ0FDaEJaLFNBQVNELHFCQUFxQmtCO2dDQUM5QmhCLFVBQVVXLGVBQWVJOzs7Ozs7Ozs7Ozs7bUJBbkJ0QkksS0FBS0M7Ozs7OztZQXdCakJ0QixxQkFBcUJVLE1BQU1DLFdBQVcsbUJBQ3JDLDhEQUFDaEIsNERBQW1CQTtnQkFDbEJrQixnQkFBZ0JiLHFCQUFxQlUsS0FBSyxDQUFDLEVBQUU7Z0JBQzdDVCxTQUFTRCxxQkFBcUJrQjtnQkFDOUJoQixVQUFVRixxQkFBcUJVLEtBQUssQ0FBQyxFQUFFLENBQUNPOzs7Ozs7Ozs7Ozs7QUFLbEQ7R0EvQ1NsQjtLQUFBQTtBQWlEVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZU1ldGhvZExpc3QuanN4PzIxZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IE1ha2VEZXNjcmlwdGlvbkxpc3QgZnJvbSBcIi4vTWFrZURlc2NyaXB0aW9uTGlzdFwiO1xuLy8gaW1wb3J0IGRhdGEgZnJvbSBcIi4uL3B1YmxpYy9kYXRhL2Z1bmN0aW9uRGF0YS5qc29uXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWtlTWV0aG9kTGlzdC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXJsQ29udGV4dCBmcm9tIFwiLi4vcGFnZV9jb250ZXh0L1VybENvbnRleHRcIjtcblxuZnVuY3Rpb24gTWFrZU1ldGhvZExpc3QoeyBmdW5jdGlvbk1ldGhvZE9iamVjdCB9KSB7XG4gIGNvbnN0IHtcbiAgICBhcHBOYW1lLFxuICAgIG1ldGhvZElkLFxuICAgIGRlc2NyaXB0aW9uSWQsXG4gICAgc2V0QXBwTmFtZSxcbiAgICBzZXRNZXRob2RJZCxcbiAgICBzZXREZXNjcmlwdGlvbklkLFxuICB9ID0gdXNlQ29udGV4dChVcmxDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdyYXB9PlxuICAgICAge2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lmhvd3RvLmxlbmd0aCAhPT0gMSAmJlxuICAgICAgICBmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0bz8ubWFwKChmdW5jdGlvbk1ldGhvZCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICAgICAgPGRldGFpbHNcbiAgICAgICAgICAgICAgb3Blbj17XG4gICAgICAgICAgICAgICAgK21ldGhvZElkID09PSBmdW5jdGlvbk1ldGhvZC5tZXRob2ROdW0gJiZcbiAgICAgICAgICAgICAgICBhcHBOYW1lID09PSBmdW5jdGlvbk1ldGhvZE9iamVjdC5tZXRob2RBcHBOYW1lXG4gICAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgPHN1bW1hcnk+XG4gICAgICAgICAgICAgICAg67Cp67KVXG4gICAgICAgICAgICAgICAge2AgJHtmdW5jdGlvbk1ldGhvZC5tZXRob2ROdW19JHtcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uTWV0aG9kLm1ldGhvZFRpdGxlXG4gICAgICAgICAgICAgICAgICAgID8gYCkgJHtmdW5jdGlvbk1ldGhvZC5tZXRob2RUaXRsZX1gXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDxNYWtlRGVzY3JpcHRpb25MaXN0XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25NZXRob2Q9e2Z1bmN0aW9uTWV0aG9kfVxuICAgICAgICAgICAgICAgIGFwcE5hbWU9e2Z1bmN0aW9uTWV0aG9kT2JqZWN0Lm1ldGhvZEFwcE5hbWV9XG4gICAgICAgICAgICAgICAgbWV0aG9kSWQ9e2Z1bmN0aW9uTWV0aG9kLm1ldGhvZE51bX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIHtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0by5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICA8TWFrZURlc2NyaXB0aW9uTGlzdFxuICAgICAgICAgIGZ1bmN0aW9uTWV0aG9kPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0b1swXX1cbiAgICAgICAgICBhcHBOYW1lPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5tZXRob2RBcHBOYW1lfVxuICAgICAgICAgIG1ldGhvZElkPXtmdW5jdGlvbk1ldGhvZE9iamVjdC5ob3d0b1swXS5tZXRob2ROdW19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvb2w+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VNZXRob2RMaXN0O1xuIl0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsIk1ha2VEZXNjcmlwdGlvbkxpc3QiLCJjbGFzc2VzIiwidXNlQ29udGV4dCIsIlVybENvbnRleHQiLCJNYWtlTWV0aG9kTGlzdCIsImZ1bmN0aW9uTWV0aG9kT2JqZWN0IiwiYXBwTmFtZSIsIm1ldGhvZElkIiwiZGVzY3JpcHRpb25JZCIsInNldEFwcE5hbWUiLCJzZXRNZXRob2RJZCIsInNldERlc2NyaXB0aW9uSWQiLCJvbCIsImNsYXNzTmFtZSIsImxpc3RXcmFwIiwiaG93dG8iLCJsZW5ndGgiLCJtYXAiLCJmdW5jdGlvbk1ldGhvZCIsImxpIiwiZGV0YWlscyIsIm9wZW4iLCJtZXRob2ROdW0iLCJtZXRob2RBcHBOYW1lIiwic3VtbWFyeSIsIm1ldGhvZFRpdGxlIiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeMethodList.jsx\n"));

/***/ })

});