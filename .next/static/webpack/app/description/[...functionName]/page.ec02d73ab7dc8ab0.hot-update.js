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

/***/ "(app-client)/./components/NoScrollLink.jsx":
/*!*************************************!*\
  !*** ./components/NoScrollLink.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n// components/NoScrollLink.tsx\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar NoScrollLink = function(param) {\n    var children = param.children, href = param.href, tooltip = param.tooltip;\n    _s();\n    var urlChangeDetecter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).urlChangeDetecter;\n    var _urlChangeDetecter = urlChangeDetecter(), appName = _urlChangeDetecter.appName, descriptionId = _urlChangeDetecter.descriptionId, methodId = _urlChangeDetecter.methodId;\n    var scrollY = localStorage.getItem(\"scrollY\");\n    appName !== null && (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.scrollTo({\n            top: scrollY,\n            behavior: \"instant\"\n        });\n        console.log(\"prevent scroll\");\n    }, [\n        appName,\n        descriptionId,\n        methodId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href ? href : \"\",\n        scroll: false,\n        \"data-tooltip\": tooltip ? tooltip : null,\n        onClick: function(e) {\n            localStorage.setItem(\"scrollX\", window.scrollX);\n            localStorage.setItem(\"scrollY\", window.scrollY);\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/NoScrollLink.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(NoScrollLink, \"3EO9Z6znc3yHPf+zRDn70yF2/WI=\");\n_c = NoScrollLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoScrollLink);\nvar _c;\n$RefreshReg$(_c, \"NoScrollLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ob1Njcm9sbExpbmsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw4QkFBOEI7Ozs7QUFDRDtBQUN3QjtBQUNGO0FBRW5ELElBQU1LLGVBQWU7UUFBR0MsaUJBQUFBLFVBQVVDLGFBQUFBLE1BQU1DLGdCQUFBQTs7SUFDdEMsSUFBTSxvQkFBd0JOLGlEQUFVQSxDQUFDRSxnRUFBVUEsRUFBM0NLO0lBQ1IsSUFBNkNBLHFCQUFBQSxxQkFBckNDLFVBQXFDRCxtQkFBckNDLFNBQVNDLGdCQUE0QkYsbUJBQTVCRSxlQUFlQyxXQUFhSCxtQkFBYkc7SUFDaEMsSUFBTUMsVUFBVUMsYUFBYUMsUUFBUTtJQUVyQ0wsWUFBWSxRQUNWUCxnREFBU0EsQ0FBQztRQUNSYSxPQUFPQyxTQUFTO1lBQUVDLEtBQUtMO1lBQVNNLFVBQVU7UUFBVTtRQUNwREMsUUFBUUMsSUFBSTtJQUNkLEdBQUc7UUFBQ1g7UUFBU0M7UUFBZUM7S0FBUztJQUV2QyxxQkFDRSw4REFBQ1osa0RBQUlBO1FBQ0hPLE1BQU1BLE9BQU9BLE9BQU87UUFDcEJlLFFBQVE7UUFDUkMsZ0JBQWNmLFVBQVVBLFVBQVU7UUFDbENnQixTQUFTLFNBQUNDO1lBQ1JYLGFBQWFZLFFBQVEsV0FBV1YsT0FBT1c7WUFDdkNiLGFBQWFZLFFBQVEsV0FBV1YsT0FBT0g7UUFDekM7a0JBQ0NQOzs7Ozs7QUFHUDtHQXZCTUQ7S0FBQUE7QUF5Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ob1Njcm9sbExpbmsuanN4PzM5YmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Ob1Njcm9sbExpbmsudHN4XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXJsQ29udGV4dCBmcm9tIFwiLi9wYWdlX2NvbnRleHQvVXJsQ29udGV4dFwiO1xuXG5jb25zdCBOb1Njcm9sbExpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiwgdG9vbHRpcCB9KSA9PiB7XG4gIGNvbnN0IHsgdXJsQ2hhbmdlRGV0ZWN0ZXIgfSA9IHVzZUNvbnRleHQoVXJsQ29udGV4dCk7XG4gIGNvbnN0IHsgYXBwTmFtZSwgZGVzY3JpcHRpb25JZCwgbWV0aG9kSWQgfSA9IHVybENoYW5nZURldGVjdGVyKCk7XG4gIGNvbnN0IHNjcm9sbFkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjcm9sbFlcIik7XG5cbiAgYXBwTmFtZSAhPT0gbnVsbCAmJlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHNjcm9sbFksIGJlaGF2aW9yOiBcImluc3RhbnRcIiB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwicHJldmVudCBzY3JvbGxcIik7XG4gICAgfSwgW2FwcE5hbWUsIGRlc2NyaXB0aW9uSWQsIG1ldGhvZElkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgaHJlZj17aHJlZiA/IGhyZWYgOiBcIlwifVxuICAgICAgc2Nyb2xsPXtmYWxzZX1cbiAgICAgIGRhdGEtdG9vbHRpcD17dG9vbHRpcCA/IHRvb2x0aXAgOiBudWxsfVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY3JvbGxYXCIsIHdpbmRvdy5zY3JvbGxYKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY3JvbGxZXCIsIHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vU2Nyb2xsTGluaztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiVXJsQ29udGV4dCIsIk5vU2Nyb2xsTGluayIsImNoaWxkcmVuIiwiaHJlZiIsInRvb2x0aXAiLCJ1cmxDaGFuZ2VEZXRlY3RlciIsImFwcE5hbWUiLCJkZXNjcmlwdGlvbklkIiwibWV0aG9kSWQiLCJzY3JvbGxZIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsIiwiZGF0YS10b29sdGlwIiwib25DbGljayIsImUiLCJzZXRJdGVtIiwic2Nyb2xsWCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/NoScrollLink.jsx\n"));

/***/ })

});