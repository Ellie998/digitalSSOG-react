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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MakeDescriptionList.module.css */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.module.css\");\n/* harmony import */ var _MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar numEmogi = [\n    \" 0️⃣\",\n    \" 1️⃣\",\n    \" 2️⃣\",\n    \" 3️⃣\",\n    \"4️⃣\",\n    \"5️⃣\",\n    \" 6️⃣\",\n    \" 7️⃣\",\n    \" 8️⃣\",\n    \" 9️⃣\",\n    \"\\uD83D\\uDD1F\"\n];\nfunction MakeDescriptionList(param) {\n    var functionMethod = param.functionMethod, dataAppName = param.dataAppName, dataMethodId = param.dataMethodId;\n    var _this = this;\n    var _functionMethod_methodContent;\n    _s();\n    var num = 0;\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), functionName = _useContext.functionName, setAppName = _useContext.setAppName, setMethodId = _useContext.setMethodId, setDescriptionId = _useContext.setDescriptionId, urlChangeDetecter = _useContext.urlChangeDetecter;\n    var _urlChangeDetecter = urlChangeDetecter(), appName = _urlChangeDetecter.appName, methodId = _urlChangeDetecter.methodId, descriptionId = _urlChangeDetecter.descriptionId;\n    // function listClickHandler() {\n    //   setAppName(dataAppName);\n    //   setMethodId(dataMethodId);\n    //   setDescriptionId(num.toString());\n    //   setDescriptionPageId(num.toString());\n    //   setMethodPageId(dataMethodId);\n    // }\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(descriptionId), 2), descriptionPageId = _useState[0], setDescriptionPageId = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(methodId), 2), methodPageId = _useState1[0], setMethodPageId = _useState1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default().listWrap),\n        children: (_functionMethod_methodContent = functionMethod.methodContent) === null || _functionMethod_methodContent === void 0 ? void 0 : _functionMethod_methodContent.map(function(methodDescription) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: methodPageId === dataMethodId && descriptionPageId === num.toString() ? (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default().list_active) : (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),\n                onClick: function() {\n                    listClickHandler;\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(dataAppName, \"&methodId=\").concat(dataMethodId, \"&descriptionId=\").concat(num.toString()),\n                    children: [\n                        numEmogi[num++],\n                        \" \",\n                        methodDescription\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, _this)\n            }, methodDescription, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeDescriptionList, \"wRfFcmVqza/JBcpesuXRS8CymrY=\");\n_c = MakeDescriptionList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeDescriptionList);\nvar _c;\n$RefreshReg$(_c, \"MakeDescriptionList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VEZXNjcmlwdGlvbkxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBRVo7QUFDYTtBQUNKO0FBQ0Y7QUFFbEQsSUFBTU8sV0FBVztJQUNmO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELFNBQVNDLG9CQUFvQixLQUE2QztRQUEzQ0MsaUJBQUYsTUFBRUEsZ0JBQWdCQyxjQUFsQixNQUFrQkEsYUFBYUMsZUFBL0IsTUFBK0JBOztRQXdCckRGOztJQXZCTCxJQUFJRyxNQUFNO0lBQ1YsSUFNSVYsY0FBQUEsaURBQVVBLENBQUNHLGdFQUFVQSxHQUx2QlEsZUFLRVgsWUFMRlcsY0FDQUMsYUFJRVosWUFKRlksWUFDQUMsY0FHRWIsWUFIRmEsYUFDQUMsbUJBRUVkLFlBRkZjLGtCQUNBQyxvQkFDRWYsWUFERmU7SUFHRixJQUE2Q0EscUJBQUFBLHFCQUFyQ0MsVUFBcUNELG1CQUFyQ0MsU0FBU0MsV0FBNEJGLG1CQUE1QkUsVUFBVUMsZ0JBQWtCSCxtQkFBbEJHO0lBRTNCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHNDQUFzQztJQUN0QywwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLElBQUk7SUFDSixJQUFrRGhCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQ2dCLG9CQUFwREMsb0JBQTJDakIsY0FBeEJrQix1QkFBd0JsQjtJQUNsRCxJQUF3Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDZSxlQUExQ0ksZUFBaUNuQixlQUFuQm9CLGtCQUFtQnBCO0lBRXhDLHFCQUNFLDhEQUFDcUI7UUFBR0MsV0FBVzFCLGlGQUFnQjJCO2tCQUM1QmxCLENBQUFBLGdDQUFBQSxlQUFlbUIsMkJBQWZuQiwyQ0FBQUEsS0FBQUEsSUFBQUEsOEJBQThCb0IsSUFBSSxTQUFDQztpQ0FDbEMsOERBQUNDO2dCQUVDTCxXQUNFSCxpQkFBaUJaLGdCQUNqQlUsc0JBQXNCVCxJQUFJb0IsYUFDdEJoQyxvRkFBbUJpQyxHQUNuQmpDLDZFQUFZa0M7Z0JBRWxCQyxTQUFTO29CQUNQQztnQkFDRjswQkFDQSw0RUFBQ25DLHFEQUFZQTtvQkFDWG9DLE1BQU0sZ0JBQXlDM0IsT0FBekJHLGNBQWEsY0FBb0NGLE9BQXhCRCxhQUFZLGNBQTBDRSxPQUE5QkQsY0FBYSxtQkFBZ0MsT0FBZkMsSUFBSW9COzt3QkFDeEd6QixRQUFRLENBQUNLLE1BQU07d0JBQUM7d0JBQUVrQjs7Ozs7OztlQVpoQkE7Ozs7Ozs7Ozs7O0FBa0JmO0dBNUNTdEI7S0FBQUE7QUE4Q1QsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZURlc2NyaXB0aW9uTGlzdC5qc3g/ZTg1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWtlRGVzY3JpcHRpb25MaXN0Lm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IE5vU2Nyb2xsTGluayBmcm9tIFwiLi4vTm9TY3JvbGxMaW5rXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXJsQ29udGV4dCBmcm9tIFwiLi4vcGFnZV9jb250ZXh0L1VybENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuY29uc3QgbnVtRW1vZ2kgPSBbXG4gIFwiIDDvuI/ig6NcIixcbiAgXCIgMe+4j+KDo1wiLFxuICBcIiAy77iP4oOjXCIsXG4gIFwiIDPvuI/ig6NcIixcbiAgXCI077iP4oOjXCIsXG4gIFwiNe+4j+KDo1wiLFxuICBcIiA277iP4oOjXCIsXG4gIFwiIDfvuI/ig6NcIixcbiAgXCIgOO+4j+KDo1wiLFxuICBcIiA577iP4oOjXCIsXG4gIFwi8J+Un1wiLFxuXTtcblxuZnVuY3Rpb24gTWFrZURlc2NyaXB0aW9uTGlzdCh7IGZ1bmN0aW9uTWV0aG9kLCBkYXRhQXBwTmFtZSwgZGF0YU1ldGhvZElkIH0pIHtcbiAgbGV0IG51bSA9IDA7XG4gIGNvbnN0IHtcbiAgICBmdW5jdGlvbk5hbWUsXG4gICAgc2V0QXBwTmFtZSxcbiAgICBzZXRNZXRob2RJZCxcbiAgICBzZXREZXNjcmlwdGlvbklkLFxuICAgIHVybENoYW5nZURldGVjdGVyLFxuICB9ID0gdXNlQ29udGV4dChVcmxDb250ZXh0KTtcblxuICBjb25zdCB7IGFwcE5hbWUsIG1ldGhvZElkLCBkZXNjcmlwdGlvbklkIH0gPSB1cmxDaGFuZ2VEZXRlY3RlcigpO1xuXG4gIC8vIGZ1bmN0aW9uIGxpc3RDbGlja0hhbmRsZXIoKSB7XG4gIC8vICAgc2V0QXBwTmFtZShkYXRhQXBwTmFtZSk7XG4gIC8vICAgc2V0TWV0aG9kSWQoZGF0YU1ldGhvZElkKTtcbiAgLy8gICBzZXREZXNjcmlwdGlvbklkKG51bS50b1N0cmluZygpKTtcbiAgLy8gICBzZXREZXNjcmlwdGlvblBhZ2VJZChudW0udG9TdHJpbmcoKSk7XG4gIC8vICAgc2V0TWV0aG9kUGFnZUlkKGRhdGFNZXRob2RJZCk7XG4gIC8vIH1cbiAgY29uc3QgW2Rlc2NyaXB0aW9uUGFnZUlkLCBzZXREZXNjcmlwdGlvblBhZ2VJZF0gPSB1c2VTdGF0ZShkZXNjcmlwdGlvbklkKTtcbiAgY29uc3QgW21ldGhvZFBhZ2VJZCwgc2V0TWV0aG9kUGFnZUlkXSA9IHVzZVN0YXRlKG1ldGhvZElkKTtcblxuICByZXR1cm4gKFxuICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdyYXB9PlxuICAgICAge2Z1bmN0aW9uTWV0aG9kLm1ldGhvZENvbnRlbnQ/Lm1hcCgobWV0aG9kRGVzY3JpcHRpb24pID0+IChcbiAgICAgICAgPGxpXG4gICAgICAgICAga2V5PXttZXRob2REZXNjcmlwdGlvbn1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgbWV0aG9kUGFnZUlkID09PSBkYXRhTWV0aG9kSWQgJiZcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uUGFnZUlkID09PSBudW0udG9TdHJpbmcoKVxuICAgICAgICAgICAgICA/IGNsYXNzZXMubGlzdF9hY3RpdmVcbiAgICAgICAgICAgICAgOiBjbGFzc2VzLmxpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgbGlzdENsaWNrSGFuZGxlcjtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8Tm9TY3JvbGxMaW5rXG4gICAgICAgICAgICBocmVmPXtgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfS8/YXBwTmFtZT0ke2RhdGFBcHBOYW1lfSZtZXRob2RJZD0ke2RhdGFNZXRob2RJZH0mZGVzY3JpcHRpb25JZD0ke251bS50b1N0cmluZygpfWB9PlxuICAgICAgICAgICAge251bUVtb2dpW251bSsrXX0ge21ldGhvZERlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvTm9TY3JvbGxMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZURlc2NyaXB0aW9uTGlzdDtcbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiTm9TY3JvbGxMaW5rIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXJsQ29udGV4dCIsInVzZVNlYXJjaFBhcmFtcyIsIm51bUVtb2dpIiwiTWFrZURlc2NyaXB0aW9uTGlzdCIsImZ1bmN0aW9uTWV0aG9kIiwiZGF0YUFwcE5hbWUiLCJkYXRhTWV0aG9kSWQiLCJudW0iLCJmdW5jdGlvbk5hbWUiLCJzZXRBcHBOYW1lIiwic2V0TWV0aG9kSWQiLCJzZXREZXNjcmlwdGlvbklkIiwidXJsQ2hhbmdlRGV0ZWN0ZXIiLCJhcHBOYW1lIiwibWV0aG9kSWQiLCJkZXNjcmlwdGlvbklkIiwiZGVzY3JpcHRpb25QYWdlSWQiLCJzZXREZXNjcmlwdGlvblBhZ2VJZCIsIm1ldGhvZFBhZ2VJZCIsInNldE1ldGhvZFBhZ2VJZCIsIm9sIiwiY2xhc3NOYW1lIiwibGlzdFdyYXAiLCJtZXRob2RDb250ZW50IiwibWFwIiwibWV0aG9kRGVzY3JpcHRpb24iLCJsaSIsInRvU3RyaW5nIiwibGlzdF9hY3RpdmUiLCJsaXN0Iiwib25DbGljayIsImxpc3RDbGlja0hhbmRsZXIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\n"));

/***/ })

});