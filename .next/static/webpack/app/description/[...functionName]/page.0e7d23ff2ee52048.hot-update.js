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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MakeDescriptionList.module.css */ \"(app-client)/./components/FunctionDescription/MakeDescriptionList.module.css\");\n/* harmony import */ var _MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _NoScrollLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NoScrollLink */ \"(app-client)/./components/NoScrollLink.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar numEmogi = [\n    \" 0️⃣\",\n    \" 1️⃣\",\n    \" 2️⃣\",\n    \" 3️⃣\",\n    \"4️⃣\",\n    \"5️⃣\",\n    \" 6️⃣\",\n    \" 7️⃣\",\n    \" 8️⃣\",\n    \" 9️⃣\",\n    \"\\uD83D\\uDD1F\"\n];\nfunction MakeDescriptionList(param) {\n    var functionMethod = param.functionMethod, dataAppName = param.dataAppName, dataMethodId = param.dataMethodId;\n    var _this = this;\n    var changeUrlQueryStateHandler = function changeUrlQueryStateHandler() {\n        setMyAppName(dataAppName);\n        setMyMethodId(dataMethodId);\n        setMyDescriptionId(num.toString());\n    };\n    var _functionMethod_methodContent;\n    _s();\n    var num = 0;\n    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), functionName = _useContext.functionName, myAppName = _useContext.myAppName, myMethodId = _useContext.myMethodId, myDescriptionId = _useContext.myDescriptionId, setMyAppName = _useContext.setMyAppName, setMyMethodId = _useContext.setMyMethodId, setMyDescriptionId = _useContext.setMyDescriptionId, urlChangeDetecter = _useContext.urlChangeDetecter;\n    /**appName is string, methodId is string, desctiptionId is string */ var _urlChangeDetecter = urlChangeDetecter(), appName = _urlChangeDetecter.appName, methodId = _urlChangeDetecter.methodId, descriptionId = _urlChangeDetecter.descriptionId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_5___default().listWrap),\n        children: (_functionMethod_methodContent = functionMethod.methodContent) === null || _functionMethod_methodContent === void 0 ? void 0 : _functionMethod_methodContent.map(function(methodDescription) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: appName == dataAppName && +methodId === dataMethodId && +descriptionId === num ? (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_5___default().list_active) : (_MakeDescriptionList_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),\n                onClick: function() {\n                    changeUrlQueryStateHandler;\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoScrollLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/description/\".concat(functionName, \"/?appName=\").concat(dataAppName, \"&methodId=\").concat(dataMethodId, \"&descriptionId=\").concat(num.toString()),\n                    children: [\n                        numEmogi[num++],\n                        \" \",\n                        methodDescription\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, _this)\n            }, methodDescription, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/FunctionDescription/MakeDescriptionList.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeDescriptionList, \"p0B5W4w43vVNDxobBKwkvjJecQY=\");\n_c = MakeDescriptionList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeDescriptionList);\nvar _c;\n$RefreshReg$(_c, \"MakeDescriptionList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9GdW5jdGlvbkRlc2NyaXB0aW9uL01ha2VEZXNjcmlwdGlvbkxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUVaO0FBQ2E7QUFDSjtBQUNGO0FBRWxELElBQU1PLFdBQVc7SUFDZjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxTQUFTQyxvQkFBb0IsS0FBNkM7UUFBM0NDLGlCQUFGLE1BQUVBLGdCQUFnQkMsY0FBbEIsTUFBa0JBLGFBQWFDLGVBQS9CLE1BQStCQTs7UUFnQmpEQyw2QkFBVCxTQUFTQTtRQUNQQyxhQUFhSDtRQUNiSSxjQUFjSDtRQUNkSSxtQkFBbUJDLElBQUlDO0lBQ3pCO1FBSUtSOztJQXZCTCxJQUFJTyxNQUFNO0lBQ1YsSUFTSWQsY0FBQUEsaURBQVVBLENBQUNHLGdFQUFVQSxHQVJ2QmEsZUFRRWhCLFlBUkZnQixjQUNBQyxZQU9FakIsWUFQRmlCLFdBQ0FDLGFBTUVsQixZQU5Ga0IsWUFDQUMsa0JBS0VuQixZQUxGbUIsaUJBQ0FSLGVBSUVYLFlBSkZXLGNBQ0FDLGdCQUdFWixZQUhGWSxlQUNBQyxxQkFFRWIsWUFGRmEsb0JBQ0FPLG9CQUNFcEIsWUFERm9CO0lBR0Ysa0VBQWtFLEdBQ2xFLElBQTZDQSxxQkFBQUEscUJBQXJDQyxVQUFxQ0QsbUJBQXJDQyxTQUFTQyxXQUE0QkYsbUJBQTVCRSxVQUFVQyxnQkFBa0JILG1CQUFsQkc7SUFRM0IscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVczQixpRkFBZ0I0QjtrQkFDNUJuQixDQUFBQSxnQ0FBQUEsZUFBZW9CLDJCQUFmcEIsMkNBQUFBLEtBQUFBLElBQUFBLDhCQUE4QnFCLElBQUksU0FBQ0M7aUNBQ2xDLDhEQUFDQztnQkFFQ0wsV0FDRUosV0FBV2IsZUFDWCxDQUFDYyxhQUFhYixnQkFDZCxDQUFDYyxrQkFBa0JULE1BQ2ZoQixvRkFBbUJpQyxHQUNuQmpDLDZFQUFZa0M7Z0JBRWxCQyxTQUFTO29CQUNQdkI7Z0JBQ0Y7MEJBQ0EsNEVBQUNYLHFEQUFZQTtvQkFDWG1DLE1BQU0sZ0JBQXlDMUIsT0FBekJRLGNBQWEsY0FBb0NQLE9BQXhCRCxhQUFZLGNBQTBDTSxPQUE5QkwsY0FBYSxtQkFBZ0MsT0FBZkssSUFBSUM7O3dCQUN4R1YsUUFBUSxDQUFDUyxNQUFNO3dCQUFDO3dCQUFFZTs7Ozs7OztlQWJoQkE7Ozs7Ozs7Ozs7O0FBbUJmO0dBN0NTdkI7S0FBQUE7QUErQ1QsK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Z1bmN0aW9uRGVzY3JpcHRpb24vTWFrZURlc2NyaXB0aW9uTGlzdC5qc3g/ZTg1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWtlRGVzY3JpcHRpb25MaXN0Lm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IE5vU2Nyb2xsTGluayBmcm9tIFwiLi4vTm9TY3JvbGxMaW5rXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXJsQ29udGV4dCBmcm9tIFwiLi4vcGFnZV9jb250ZXh0L1VybENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuY29uc3QgbnVtRW1vZ2kgPSBbXG4gIFwiIDDvuI/ig6NcIixcbiAgXCIgMe+4j+KDo1wiLFxuICBcIiAy77iP4oOjXCIsXG4gIFwiIDPvuI/ig6NcIixcbiAgXCI077iP4oOjXCIsXG4gIFwiNe+4j+KDo1wiLFxuICBcIiA277iP4oOjXCIsXG4gIFwiIDfvuI/ig6NcIixcbiAgXCIgOO+4j+KDo1wiLFxuICBcIiA577iP4oOjXCIsXG4gIFwi8J+Un1wiLFxuXTtcblxuZnVuY3Rpb24gTWFrZURlc2NyaXB0aW9uTGlzdCh7IGZ1bmN0aW9uTWV0aG9kLCBkYXRhQXBwTmFtZSwgZGF0YU1ldGhvZElkIH0pIHtcbiAgbGV0IG51bSA9IDA7XG4gIGNvbnN0IHtcbiAgICBmdW5jdGlvbk5hbWUsXG4gICAgbXlBcHBOYW1lLFxuICAgIG15TWV0aG9kSWQsXG4gICAgbXlEZXNjcmlwdGlvbklkLFxuICAgIHNldE15QXBwTmFtZSxcbiAgICBzZXRNeU1ldGhvZElkLFxuICAgIHNldE15RGVzY3JpcHRpb25JZCxcbiAgICB1cmxDaGFuZ2VEZXRlY3RlcixcbiAgfSA9IHVzZUNvbnRleHQoVXJsQ29udGV4dCk7XG5cbiAgLyoqYXBwTmFtZSBpcyBzdHJpbmcsIG1ldGhvZElkIGlzIHN0cmluZywgZGVzY3RpcHRpb25JZCBpcyBzdHJpbmcgKi9cbiAgY29uc3QgeyBhcHBOYW1lLCBtZXRob2RJZCwgZGVzY3JpcHRpb25JZCB9ID0gdXJsQ2hhbmdlRGV0ZWN0ZXIoKTtcblxuICBmdW5jdGlvbiBjaGFuZ2VVcmxRdWVyeVN0YXRlSGFuZGxlcigpIHtcbiAgICBzZXRNeUFwcE5hbWUoZGF0YUFwcE5hbWUpO1xuICAgIHNldE15TWV0aG9kSWQoZGF0YU1ldGhvZElkKTtcbiAgICBzZXRNeURlc2NyaXB0aW9uSWQobnVtLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8b2wgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXcmFwfT5cbiAgICAgIHtmdW5jdGlvbk1ldGhvZC5tZXRob2RDb250ZW50Py5tYXAoKG1ldGhvZERlc2NyaXB0aW9uKSA9PiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGtleT17bWV0aG9kRGVzY3JpcHRpb259XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGFwcE5hbWUgPT0gZGF0YUFwcE5hbWUgJiZcbiAgICAgICAgICAgICttZXRob2RJZCA9PT0gZGF0YU1ldGhvZElkICYmXG4gICAgICAgICAgICArZGVzY3JpcHRpb25JZCA9PT0gbnVtXG4gICAgICAgICAgICAgID8gY2xhc3Nlcy5saXN0X2FjdGl2ZVxuICAgICAgICAgICAgICA6IGNsYXNzZXMubGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VVcmxRdWVyeVN0YXRlSGFuZGxlcjtcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8Tm9TY3JvbGxMaW5rXG4gICAgICAgICAgICBocmVmPXtgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfS8/YXBwTmFtZT0ke2RhdGFBcHBOYW1lfSZtZXRob2RJZD0ke2RhdGFNZXRob2RJZH0mZGVzY3JpcHRpb25JZD0ke251bS50b1N0cmluZygpfWB9PlxuICAgICAgICAgICAge251bUVtb2dpW251bSsrXX0ge21ldGhvZERlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvTm9TY3JvbGxMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFrZURlc2NyaXB0aW9uTGlzdDtcbiJdLCJuYW1lcyI6WyJjbGFzc2VzIiwiTm9TY3JvbGxMaW5rIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXJsQ29udGV4dCIsInVzZVNlYXJjaFBhcmFtcyIsIm51bUVtb2dpIiwiTWFrZURlc2NyaXB0aW9uTGlzdCIsImZ1bmN0aW9uTWV0aG9kIiwiZGF0YUFwcE5hbWUiLCJkYXRhTWV0aG9kSWQiLCJjaGFuZ2VVcmxRdWVyeVN0YXRlSGFuZGxlciIsInNldE15QXBwTmFtZSIsInNldE15TWV0aG9kSWQiLCJzZXRNeURlc2NyaXB0aW9uSWQiLCJudW0iLCJ0b1N0cmluZyIsImZ1bmN0aW9uTmFtZSIsIm15QXBwTmFtZSIsIm15TWV0aG9kSWQiLCJteURlc2NyaXB0aW9uSWQiLCJ1cmxDaGFuZ2VEZXRlY3RlciIsImFwcE5hbWUiLCJtZXRob2RJZCIsImRlc2NyaXB0aW9uSWQiLCJvbCIsImNsYXNzTmFtZSIsImxpc3RXcmFwIiwibWV0aG9kQ29udGVudCIsIm1hcCIsIm1ldGhvZERlc2NyaXB0aW9uIiwibGkiLCJsaXN0X2FjdGl2ZSIsImxpc3QiLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/FunctionDescription/MakeDescriptionList.jsx\n"));

/***/ })

});