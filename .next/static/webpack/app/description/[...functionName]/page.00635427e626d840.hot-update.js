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

/***/ "(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx":
/*!****************************************************************!*\
  !*** ./components/FunctionDescription/MakeDescriptionList.jsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_type_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_type_of */ \"(app-client)/./node_modules/@swc/helpers/esm/_type_of.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MakeDescriptionList.module.css */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.module.css\");\n/* harmony import */ var _MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar numEmogi = [\n    \" 0️⃣\",\n    \" 1️⃣\",\n    \" 2️⃣\",\n    \" 3️⃣\",\n    \"4️⃣\",\n    \"5️⃣\",\n    \" 6️⃣\",\n    \" 7️⃣\",\n    \" 8️⃣\",\n    \" 9️⃣\",\n    \"\\uD83D\\uDD1F\"\n];\nfunction MakeDescriptionList(param) {\n    var functionMethod = param.functionMethod, dataAppName = param.dataAppName, dataMethodId = param.dataMethodId;\n    var _this = this;\n    var _functionMethod_methodContent;\n    _s();\n    var num = 0;\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), functionName = _useContext.functionName, setAppName = _useContext.setAppName, setMethodId = _useContext.setMethodId, setDescriptionId = _useContext.setDescriptionId, urlChangeDetecter = _useContext.urlChangeDetecter;\n    var _urlChangeDetecter = urlChangeDetecter(), appName = _urlChangeDetecter.appName, methodId = _urlChangeDetecter.methodId, descriptionId = _urlChangeDetecter.descriptionId;\n    // function listClickHandler() {\n    //   setAppName(dataAppName);\n    //   setMethodId(dataMethodId);\n    //   setDescriptionId(num.toString());\n    //   setDescriptionPageId(num.toString());\n    //   setMethodPageId(dataMethodId);\n    // }\n    // const [descriptionPageId, setDescriptionPageId] = useState(descriptionId);\n    // const [methodPageId, setMethodPageId] = useState(methodId);\n    console.log(typeof methodId === \"undefined\" ? \"undefined\" : (0,_swc_helpers_type_of__WEBPACK_IMPORTED_MODULE_5__._)(methodId));\n    console.log(typeof dataMethodId === \"undefined\" ? \"undefined\" : (0,_swc_helpers_type_of__WEBPACK_IMPORTED_MODULE_5__._)(dataMethodId));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default().listWrap),\n        children: (_functionMethod_methodContent = functionMethod.methodContent) === null || _functionMethod_methodContent === void 0 ? void 0 : _functionMethod_methodContent.map(function(methodDescription) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: // methodPageId === dataMethodId &&\n                // descriptionPageId === num.toString()\n                +methodId === dataMethodId && +descriptionId === num ? (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default().list_active) : (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(dataAppName, \"&methodId=\").concat(dataMethodId, \"&descriptionId=\").concat(num.toString()),\n                    children: [\n                        numEmogi[num++],\n                        \" \",\n                        methodDescription\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, _this)\n            }, methodDescription, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeDescriptionList, \"92PMwjoyx9XvJsT0nj6aUViHMYU=\");\n_c = MakeDescriptionList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeDescriptionList);\nvar _c;\n$RefreshReg$(_c, \"MakeDescriptionList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VEZXNjcmlwdGlvbkxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBRVo7QUFDYTtBQUNKO0FBQ0Y7QUFFbEQsSUFBTU8sV0FBVztJQUNmO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELFNBQVNDLG9CQUFvQixLQUE2QztRQUEzQ0MsaUJBQUYsTUFBRUEsZ0JBQWdCQyxjQUFsQixNQUFrQkEsYUFBYUMsZUFBL0IsTUFBK0JBOztRQTBCckRGOztJQXpCTCxJQUFJRyxNQUFNO0lBQ1YsSUFNSVYsY0FBQUEsaURBQVVBLENBQUNHLGdFQUFVQSxHQUx2QlEsZUFLRVgsWUFMRlcsY0FDQUMsYUFJRVosWUFKRlksWUFDQUMsY0FHRWIsWUFIRmEsYUFDQUMsbUJBRUVkLFlBRkZjLGtCQUNBQyxvQkFDRWYsWUFERmU7SUFHRixJQUE2Q0EscUJBQUFBLHFCQUFyQ0MsVUFBcUNELG1CQUFyQ0MsU0FBU0MsV0FBNEJGLG1CQUE1QkUsVUFBVUMsZ0JBQWtCSCxtQkFBbEJHO0lBRTNCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLElBQUk7SUFDSiw2RUFBNkU7SUFDN0UsOERBQThEO0lBRTlEQyxRQUFRQyxJQUFJLE9BQU9ILHlDQUFQLHdEQUFPQTtJQUNuQkUsUUFBUUMsSUFBSSxPQUFPWCw2Q0FBUCx3REFBT0E7SUFDbkIscUJBQ0UsOERBQUNZO1FBQUdDLFdBQVd4QixpRkFBZ0J5QjtrQkFDNUJoQixDQUFBQSxnQ0FBQUEsZUFBZWlCLDJCQUFmakIsMkNBQUFBLEtBQUFBLElBQUFBLDhCQUE4QmtCLElBQUksU0FBQ0M7aUNBQ2xDLDhEQUFDQztnQkFFQ0wsV0FDRSxtQ0FBbUM7Z0JBQ25DLHVDQUF1QztnQkFDdkMsQ0FBQ0wsYUFBYVIsZ0JBQWdCLENBQUNTLGtCQUFrQlIsTUFDN0NaLG9GQUFtQjhCLEdBQ25COUIsNkVBQVkrQjswQkFLbEIsNEVBQUM5QixxREFBWUE7b0JBQ1grQixNQUFNLGdCQUF5Q3RCLE9BQXpCRyxjQUFhLGNBQW9DRixPQUF4QkQsYUFBWSxjQUEwQ0UsT0FBOUJELGNBQWEsbUJBQWdDLE9BQWZDLElBQUlxQjs7d0JBQ3hHMUIsUUFBUSxDQUFDSyxNQUFNO3dCQUFDO3dCQUFFZ0I7Ozs7Ozs7ZUFiaEJBOzs7Ozs7Ozs7OztBQW1CZjtHQS9DU3BCO0tBQUFBO0FBaURULCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VEZXNjcmlwdGlvbkxpc3QuanN4P2U4NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFrZURlc2NyaXB0aW9uTGlzdC5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBOb1Njcm9sbExpbmsgZnJvbSBcIi4uL05vU2Nyb2xsTGlua1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVybENvbnRleHQgZnJvbSBcIi4uL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IG51bUVtb2dpID0gW1xuICBcIiAw77iP4oOjXCIsXG4gIFwiIDHvuI/ig6NcIixcbiAgXCIgMu+4j+KDo1wiLFxuICBcIiAz77iP4oOjXCIsXG4gIFwiNO+4j+KDo1wiLFxuICBcIjXvuI/ig6NcIixcbiAgXCIgNu+4j+KDo1wiLFxuICBcIiA377iP4oOjXCIsXG4gIFwiIDjvuI/ig6NcIixcbiAgXCIgOe+4j+KDo1wiLFxuICBcIvCflJ9cIixcbl07XG5cbmZ1bmN0aW9uIE1ha2VEZXNjcmlwdGlvbkxpc3QoeyBmdW5jdGlvbk1ldGhvZCwgZGF0YUFwcE5hbWUsIGRhdGFNZXRob2RJZCB9KSB7XG4gIGxldCBudW0gPSAwO1xuICBjb25zdCB7XG4gICAgZnVuY3Rpb25OYW1lLFxuICAgIHNldEFwcE5hbWUsXG4gICAgc2V0TWV0aG9kSWQsXG4gICAgc2V0RGVzY3JpcHRpb25JZCxcbiAgICB1cmxDaGFuZ2VEZXRlY3RlcixcbiAgfSA9IHVzZUNvbnRleHQoVXJsQ29udGV4dCk7XG5cbiAgY29uc3QgeyBhcHBOYW1lLCBtZXRob2RJZCwgZGVzY3JpcHRpb25JZCB9ID0gdXJsQ2hhbmdlRGV0ZWN0ZXIoKTtcblxuICAvLyBmdW5jdGlvbiBsaXN0Q2xpY2tIYW5kbGVyKCkge1xuICAvLyAgIHNldEFwcE5hbWUoZGF0YUFwcE5hbWUpO1xuICAvLyAgIHNldE1ldGhvZElkKGRhdGFNZXRob2RJZCk7XG4gIC8vICAgc2V0RGVzY3JpcHRpb25JZChudW0udG9TdHJpbmcoKSk7XG4gIC8vICAgc2V0RGVzY3JpcHRpb25QYWdlSWQobnVtLnRvU3RyaW5nKCkpO1xuICAvLyAgIHNldE1ldGhvZFBhZ2VJZChkYXRhTWV0aG9kSWQpO1xuICAvLyB9XG4gIC8vIGNvbnN0IFtkZXNjcmlwdGlvblBhZ2VJZCwgc2V0RGVzY3JpcHRpb25QYWdlSWRdID0gdXNlU3RhdGUoZGVzY3JpcHRpb25JZCk7XG4gIC8vIGNvbnN0IFttZXRob2RQYWdlSWQsIHNldE1ldGhvZFBhZ2VJZF0gPSB1c2VTdGF0ZShtZXRob2RJZCk7XG5cbiAgY29uc29sZS5sb2codHlwZW9mIG1ldGhvZElkKTtcbiAgY29uc29sZS5sb2codHlwZW9mIGRhdGFNZXRob2RJZCk7XG4gIHJldHVybiAoXG4gICAgPG9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V3JhcH0+XG4gICAgICB7ZnVuY3Rpb25NZXRob2QubWV0aG9kQ29udGVudD8ubWFwKChtZXRob2REZXNjcmlwdGlvbikgPT4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBrZXk9e21ldGhvZERlc2NyaXB0aW9ufVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAvLyBtZXRob2RQYWdlSWQgPT09IGRhdGFNZXRob2RJZCAmJlxuICAgICAgICAgICAgLy8gZGVzY3JpcHRpb25QYWdlSWQgPT09IG51bS50b1N0cmluZygpXG4gICAgICAgICAgICArbWV0aG9kSWQgPT09IGRhdGFNZXRob2RJZCAmJiArZGVzY3JpcHRpb25JZCA9PT0gbnVtXG4gICAgICAgICAgICAgID8gY2xhc3Nlcy5saXN0X2FjdGl2ZVxuICAgICAgICAgICAgICA6IGNsYXNzZXMubGlzdFxuICAgICAgICAgIH0+XG4gICAgICAgICAgey8qIC8vIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAvLyAgIGxpc3RDbGlja0hhbmRsZXI7XG4gICAgICAgICAgLy8gfX0+ICovfVxuICAgICAgICAgIDxOb1Njcm9sbExpbmtcbiAgICAgICAgICAgIGhyZWY9e2AvZGVzY3JpcHRpb24vJHtmdW5jdGlvbk5hbWV9Lz9hcHBOYW1lPSR7ZGF0YUFwcE5hbWV9Jm1ldGhvZElkPSR7ZGF0YU1ldGhvZElkfSZkZXNjcmlwdGlvbklkPSR7bnVtLnRvU3RyaW5nKCl9YH0+XG4gICAgICAgICAgICB7bnVtRW1vZ2lbbnVtKytdfSB7bWV0aG9kRGVzY3JpcHRpb259XG4gICAgICAgICAgPC9Ob1Njcm9sbExpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L29sPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWtlRGVzY3JpcHRpb25MaXN0O1xuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJOb1Njcm9sbExpbmsiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVcmxDb250ZXh0IiwidXNlU2VhcmNoUGFyYW1zIiwibnVtRW1vZ2kiLCJNYWtlRGVzY3JpcHRpb25MaXN0IiwiZnVuY3Rpb25NZXRob2QiLCJkYXRhQXBwTmFtZSIsImRhdGFNZXRob2RJZCIsIm51bSIsImZ1bmN0aW9uTmFtZSIsInNldEFwcE5hbWUiLCJzZXRNZXRob2RJZCIsInNldERlc2NyaXB0aW9uSWQiLCJ1cmxDaGFuZ2VEZXRlY3RlciIsImFwcE5hbWUiLCJtZXRob2RJZCIsImRlc2NyaXB0aW9uSWQiLCJjb25zb2xlIiwibG9nIiwib2wiLCJjbGFzc05hbWUiLCJsaXN0V3JhcCIsIm1ldGhvZENvbnRlbnQiLCJtYXAiLCJtZXRob2REZXNjcmlwdGlvbiIsImxpIiwibGlzdF9hY3RpdmUiLCJsaXN0IiwiaHJlZiIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\n"));

/***/ })

});