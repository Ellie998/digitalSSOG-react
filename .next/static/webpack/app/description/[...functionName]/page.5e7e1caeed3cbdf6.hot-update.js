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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n// components/NoScrollLink.tsx\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar NoScrollLink = function(param) {\n    var children = param.children, href = param.href, tooltip = param.tooltip;\n    _s();\n    var urlChangeDetecter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).urlChangeDetecter;\n    var _urlChangeDetecter = urlChangeDetecter(), appName = _urlChangeDetecter.appName, descriptionId = _urlChangeDetecter.descriptionId, methodId = _urlChangeDetecter.methodId;\n    var scrollY = localStorage.getItem(\"scrollY\");\n    // appName !== null &&\n    //   useEffect(() => {\n    //     window.scrollTo({ top: scrollY, behavior: \"instant\" });\n    //     console.log(\"prevent scroll\");\n    //   }, [appName, descriptionId, methodId]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href ? href : \"\",\n        scroll: false,\n        \"data-tooltip\": tooltip ? tooltip : null,\n        onClick: function(e) {\n            localStorage.setItem(\"scrollX\", window.scrollX);\n            localStorage.setItem(\"scrollY\", window.scrollY);\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/NoScrollLink.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(NoScrollLink, \"klkFlB282TKeCub+1zpSA1cAiNw=\");\n_c = NoScrollLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoScrollLink);\nvar _c;\n$RefreshReg$(_c, \"NoScrollLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ob1Njcm9sbExpbmsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw4QkFBOEI7Ozs7QUFDRDtBQUN3QjtBQUNGO0FBRW5ELElBQU1LLGVBQWU7UUFBR0MsaUJBQUFBLFVBQVVDLGFBQUFBLE1BQU1DLGdCQUFBQTs7SUFDdEMsSUFBTSxvQkFBd0JOLGlEQUFVQSxDQUFDRSxnRUFBVUEsRUFBM0NLO0lBQ1IsSUFBNkNBLHFCQUFBQSxxQkFBckNDLFVBQXFDRCxtQkFBckNDLFNBQVNDLGdCQUE0QkYsbUJBQTVCRSxlQUFlQyxXQUFhSCxtQkFBYkc7SUFDaEMsSUFBTUMsVUFBVUMsYUFBYUMsUUFBUTtJQUVyQyxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDhEQUE4RDtJQUM5RCxxQ0FBcUM7SUFDckMsNENBQTRDO0lBRTVDLHFCQUNFLDhEQUFDZixrREFBSUE7UUFDSE8sTUFBTUEsT0FBT0EsT0FBTztRQUNwQlMsUUFBUTtRQUNSQyxnQkFBY1QsVUFBVUEsVUFBVTtRQUNsQ1UsU0FBUyxTQUFDQztZQUNSTCxhQUFhTSxRQUFRLFdBQVdDLE9BQU9DO1lBQ3ZDUixhQUFhTSxRQUFRLFdBQVdDLE9BQU9SO1FBQ3pDO2tCQUNDUDs7Ozs7O0FBR1A7R0F2Qk1EO0tBQUFBO0FBeUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTm9TY3JvbGxMaW5rLmpzeD8zOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTm9TY3JvbGxMaW5rLnRzeFxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVybENvbnRleHQgZnJvbSBcIi4vcGFnZV9jb250ZXh0L1VybENvbnRleHRcIjtcblxuY29uc3QgTm9TY3JvbGxMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYsIHRvb2x0aXAgfSkgPT4ge1xuICBjb25zdCB7IHVybENoYW5nZURldGVjdGVyIH0gPSB1c2VDb250ZXh0KFVybENvbnRleHQpO1xuICBjb25zdCB7IGFwcE5hbWUsIGRlc2NyaXB0aW9uSWQsIG1ldGhvZElkIH0gPSB1cmxDaGFuZ2VEZXRlY3RlcigpO1xuICBjb25zdCBzY3JvbGxZID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY3JvbGxZXCIpO1xuXG4gIC8vIGFwcE5hbWUgIT09IG51bGwgJiZcbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBzY3JvbGxZLCBiZWhhdmlvcjogXCJpbnN0YW50XCIgfSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcInByZXZlbnQgc2Nyb2xsXCIpO1xuICAvLyAgIH0sIFthcHBOYW1lLCBkZXNjcmlwdGlvbklkLCBtZXRob2RJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGhyZWY9e2hyZWYgPyBocmVmIDogXCJcIn1cbiAgICAgIHNjcm9sbD17ZmFsc2V9XG4gICAgICBkYXRhLXRvb2x0aXA9e3Rvb2x0aXAgPyB0b29sdGlwIDogbnVsbH1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Nyb2xsWFwiLCB3aW5kb3cuc2Nyb2xsWCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Nyb2xsWVwiLCB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb1Njcm9sbExpbms7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlVybENvbnRleHQiLCJOb1Njcm9sbExpbmsiLCJjaGlsZHJlbiIsImhyZWYiLCJ0b29sdGlwIiwidXJsQ2hhbmdlRGV0ZWN0ZXIiLCJhcHBOYW1lIiwiZGVzY3JpcHRpb25JZCIsIm1ldGhvZElkIiwic2Nyb2xsWSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzY3JvbGwiLCJkYXRhLXRvb2x0aXAiLCJvbkNsaWNrIiwiZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJzY3JvbGxYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/NoScrollLink.jsx\n"));

/***/ })

});