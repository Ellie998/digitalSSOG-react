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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UrlChangeDetecter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UrlChangeDetecter */ \"(app-client)/./components/UrlChangeDetecter.jsx\");\n/* harmony import */ var _page_context_UrlContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page_context/UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n// components/NoScrollLink.tsx\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NoScrollLink = function(param) {\n    var children = param.children, href = param.href;\n    _s();\n    var scrollY = localStorage.getItem(\"scrollY\");\n    // const searchParams = useSearchParams();\n    // const appName = searchParams.get(\"appName\");\n    // const methodId = searchParams.get(\"methodId\");\n    // const descriptionId = searchParams.get(\"descriptionId\");\n    var urlChangeDetecter = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_page_context_UrlContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).urlChangeDetecter;\n    var parmas = urlChangeDetecter();\n    // console.log(parmas);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        window.scrollTo({\n            top: scrollY,\n            behavior: \"instant\"\n        });\n    }, [\n        parmas\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        // {...props}\n        href: href,\n        // scroll={false}\n        onClick: function(e) {\n            localStorage.setItem(\"scrollX\", window.scrollX);\n            localStorage.setItem(\"scrollY\", window.scrollY);\n        // router.push(href);\n        // e.preventDefault();\n        // window.history.replaceState(\"\", \"\", href);\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/NoScrollLink.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(NoScrollLink, \"3EO9Z6znc3yHPf+zRDn70yF2/WI=\");\n_c = NoScrollLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoScrollLink);\nvar _c;\n$RefreshReg$(_c, \"NoScrollLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ob1Njcm9sbExpbmsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4QkFBOEI7Ozs7QUFDYztBQUNBO0FBQ29CO0FBQ2Q7QUFDTTtBQUNMO0FBRW5ELElBQU1VLGVBQWU7UUFBR0MsaUJBQUFBLFVBQVVDLGFBQUFBOztJQUNoQyxJQUFNQyxVQUFVQyxhQUFhQyxRQUFRO0lBQ3JDLDBDQUEwQztJQUMxQywrQ0FBK0M7SUFDL0MsaURBQWlEO0lBQ2pELDJEQUEyRDtJQUMzRCxJQUFNLG9CQUF3QlYsaURBQVVBLENBQUNJLGdFQUFVQSxFQUEzQ087SUFDUixJQUFNQyxTQUFTRDtJQUNmLHVCQUF1QjtJQUV2QlYsZ0RBQVNBLENBQUM7UUFDUlksT0FBT0MsU0FBUztZQUFFQyxLQUFLUDtZQUFTUSxVQUFVO1FBQVU7SUFDdEQsR0FBRztRQUFDSjtLQUFPO0lBRVgscUJBQ0UsOERBQUNqQixrREFBSUE7UUFDSCxhQUFhO1FBQ2JZLE1BQU1BO1FBQ04saUJBQWlCO1FBQ2pCVSxTQUFTLFNBQUNDO1lBQ1JULGFBQWFVLFFBQVEsV0FBV04sT0FBT087WUFDdkNYLGFBQWFVLFFBQVEsV0FBV04sT0FBT0w7UUFDdkMscUJBQXFCO1FBRXJCLHNCQUFzQjtRQUN0Qiw2Q0FBNkM7UUFDL0M7a0JBQ0NGOzs7Ozs7QUFHUDtHQTlCTUQ7S0FBQUE7QUFnQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ob1Njcm9sbExpbmsuanN4PzM5YmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9Ob1Njcm9sbExpbmsudHN4XG5pbXBvcnQgTGluaywgeyBMaW5rUHJvcHMgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFVybENoYW5nZURldGVjdGVyIH0gZnJvbSBcIi4vVXJsQ2hhbmdlRGV0ZWN0ZXJcIjtcbmltcG9ydCBVcmxDb250ZXh0IGZyb20gXCIuL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0XCI7XG5cbmNvbnN0IE5vU2Nyb2xsTGluayA9ICh7IGNoaWxkcmVuLCBocmVmIH0pID0+IHtcbiAgY29uc3Qgc2Nyb2xsWSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nyb2xsWVwiKTtcbiAgLy8gY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIC8vIGNvbnN0IGFwcE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXBwTmFtZVwiKTtcbiAgLy8gY29uc3QgbWV0aG9kSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWV0aG9kSWRcIik7XG4gIC8vIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGVzY3JpcHRpb25JZFwiKTtcbiAgY29uc3QgeyB1cmxDaGFuZ2VEZXRlY3RlciB9ID0gdXNlQ29udGV4dChVcmxDb250ZXh0KTtcbiAgY29uc3QgcGFybWFzID0gdXJsQ2hhbmdlRGV0ZWN0ZXIoKTtcbiAgLy8gY29uc29sZS5sb2cocGFybWFzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsWSwgYmVoYXZpb3I6IFwiaW5zdGFudFwiIH0pO1xuICB9LCBbcGFybWFzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgLy8gey4uLnByb3BzfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIC8vIHNjcm9sbD17ZmFsc2V9XG4gICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjcm9sbFhcIiwgd2luZG93LnNjcm9sbFgpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjcm9sbFlcIiwgd2luZG93LnNjcm9sbFkpO1xuICAgICAgICAvLyByb3V0ZXIucHVzaChocmVmKTtcblxuICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShcIlwiLCBcIlwiLCBocmVmKTtcbiAgICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vU2Nyb2xsTGluaztcbiJdLCJuYW1lcyI6WyJMaW5rIiwiTGlua1Byb3BzIiwidXNlUm91dGVyIiwiUmVhY3QiLCJSZWFjdE5vZGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU2VhcmNoUGFyYW1zIiwiVXJsQ2hhbmdlRGV0ZWN0ZXIiLCJVcmxDb250ZXh0IiwiTm9TY3JvbGxMaW5rIiwiY2hpbGRyZW4iLCJocmVmIiwic2Nyb2xsWSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmxDaGFuZ2VEZXRlY3RlciIsInBhcm1hcyIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJvbkNsaWNrIiwiZSIsInNldEl0ZW0iLCJzY3JvbGxYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/NoScrollLink.jsx\n"));

/***/ })

});