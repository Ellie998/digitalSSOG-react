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

/***/ "(app-client)/./components/UrlChangeDetecter.jsx":
/*!******************************************!*\
  !*** ./components/UrlChangeDetecter.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ urlChangeDetecter; }\n/* harmony export */ });\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);\n// components/UrlChangeDetecter.tsx\n// import { useEffect } from \"react\";\nvar _s = $RefreshSig$();\n\nfunction urlChangeDetecter() {\n    _s();\n    // const scrollY = localStorage.getItem(\"scrollY\");\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams)();\n    var appName = searchParams.get(\"appName\");\n    var methodId = searchParams.get(\"methodId\");\n    var descriptionId = searchParams.get(\"descriptionId\");\n    // useEffect(() => {\n    //   window.scrollTo({ top: scrollY, behavior: \"instant\" });\n    // }, [appName, methodId, descriptionId]);\n    return {\n        appName: appName,\n        methodId: methodId,\n        descriptionId: descriptionId\n    };\n}\n_s(urlChangeDetecter, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9VcmxDaGFuZ2VEZXRlY3Rlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLHFDQUFxQzs7QUFDYTtBQUVuQyxTQUFTQzs7SUFDdEIsbURBQW1EO0lBQ25ELElBQU1DLGVBQWVGLGdFQUFlQTtJQUNwQyxJQUFNRyxVQUFVRCxhQUFhRSxJQUFJO0lBQ2pDLElBQU1DLFdBQVdILGFBQWFFLElBQUk7SUFDbEMsSUFBTUUsZ0JBQWdCSixhQUFhRSxJQUFJO0lBRXZDLG9CQUFvQjtJQUNwQiw0REFBNEQ7SUFDNUQsMENBQTBDO0lBRTFDLE9BQU87UUFBRUQsU0FBU0E7UUFBU0UsVUFBVUE7UUFBVUMsZUFBZUE7SUFBYztBQUM5RTtHQVp3Qkw7O1FBRURELDREQUFlQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VybENoYW5nZURldGVjdGVyLmpzeD9mN2FmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvVXJsQ2hhbmdlRGV0ZWN0ZXIudHN4XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXJsQ2hhbmdlRGV0ZWN0ZXIoKSB7XG4gIC8vIGNvbnN0IHNjcm9sbFkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNjcm9sbFlcIik7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBhcHBOYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImFwcE5hbWVcIik7XG4gIGNvbnN0IG1ldGhvZElkID0gc2VhcmNoUGFyYW1zLmdldChcIm1ldGhvZElkXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklkID0gc2VhcmNoUGFyYW1zLmdldChcImRlc2NyaXB0aW9uSWRcIik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IHNjcm9sbFksIGJlaGF2aW9yOiBcImluc3RhbnRcIiB9KTtcbiAgLy8gfSwgW2FwcE5hbWUsIG1ldGhvZElkLCBkZXNjcmlwdGlvbklkXSk7XG5cbiAgcmV0dXJuIHsgYXBwTmFtZTogYXBwTmFtZSwgbWV0aG9kSWQ6IG1ldGhvZElkLCBkZXNjcmlwdGlvbklkOiBkZXNjcmlwdGlvbklkIH07XG59XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXJsQ2hhbmdlRGV0ZWN0ZXIiLCJzZWFyY2hQYXJhbXMiLCJhcHBOYW1lIiwiZ2V0IiwibWV0aG9kSWQiLCJkZXNjcmlwdGlvbklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/UrlChangeDetecter.jsx\n"));

/***/ })

});