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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _urlChangeDetecter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlChangeDetecter */ \"(app-client)/./components/urlChangeDetecter.jsx\");\n// components/NoScrollLink.tsx\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NoScrollLink = function(param) {\n    var children = param.children, href = param.href;\n    _s();\n    var scrollY = localStorage.getItem(\"scrollY\");\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    var appName = searchParams.get(\"appName\");\n    var methodId = searchParams.get(\"methodId\");\n    var descriptionId = searchParams.get(\"descriptionId\");\n    var parmas = urlChangeDetecter();\n    console.log(parmas);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        window.scrollTo({\n            top: scrollY,\n            behavior: \"instant\"\n        });\n    }, [\n        appName,\n        methodId,\n        descriptionId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        // {...props}\n        href: href,\n        scroll: false,\n        onClick: function(e) {\n            localStorage.setItem(\"scrollX\", window.scrollX);\n            localStorage.setItem(\"scrollY\", window.scrollY);\n        // router.push(href);\n        // e.preventDefault();\n        // window.history.replaceState(\"\", \"\", href);\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/NoScrollLink.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(NoScrollLink, \"wpYCjx3Iuh0YGg4csUQIo9F8Zhk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = NoScrollLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoScrollLink);\nvar _c;\n$RefreshReg$(_c, \"NoScrollLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Ob1Njcm9sbExpbmsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhCQUE4Qjs7OztBQUNjO0FBQ0E7QUFDUTtBQUNGO0FBQ0U7QUFFcEQsSUFBTVEsZUFBZTtRQUFHQyxpQkFBQUEsVUFBVUMsYUFBQUE7O0lBQ2hDLElBQU1DLFVBQVVDLGFBQWFDLFFBQVE7SUFDckMsSUFBTUMsZUFBZVIsZ0VBQWVBO0lBQ3BDLElBQU1TLFVBQVVELGFBQWFFLElBQUk7SUFDakMsSUFBTUMsV0FBV0gsYUFBYUUsSUFBSTtJQUNsQyxJQUFNRSxnQkFBZ0JKLGFBQWFFLElBQUk7SUFDdkMsSUFBTUcsU0FBU0M7SUFDZkMsUUFBUUMsSUFBSUg7SUFFWmQsZ0RBQVNBLENBQUM7UUFDUmtCLE9BQU9DLFNBQVM7WUFBRUMsS0FBS2Q7WUFBU2UsVUFBVTtRQUFVO0lBQ3RELEdBQUc7UUFBQ1g7UUFBU0U7UUFBVUM7S0FBYztJQUVyQyxxQkFDRSw4REFBQ2xCLGtEQUFJQTtRQUNILGFBQWE7UUFDYlUsTUFBTUE7UUFDTmlCLFFBQVE7UUFDUkMsU0FBUyxTQUFDQztZQUNSakIsYUFBYWtCLFFBQVEsV0FBV1AsT0FBT1E7WUFDdkNuQixhQUFha0IsUUFBUSxXQUFXUCxPQUFPWjtRQUN2QyxxQkFBcUI7UUFFckIsc0JBQXNCO1FBQ3RCLDZDQUE2QztRQUMvQztrQkFDQ0Y7Ozs7OztBQUdQO0dBN0JNRDs7UUFFaUJGLDREQUFlQTs7O0tBRmhDRTtBQStCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05vU2Nyb2xsTGluay5qc3g/MzliZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL05vU2Nyb2xsTGluay50c3hcbmltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFVybENoYW5nZURldGVjdGVyIGZyb20gXCIuL3VybENoYW5nZURldGVjdGVyXCI7XG5cbmNvbnN0IE5vU2Nyb2xsTGluayA9ICh7IGNoaWxkcmVuLCBocmVmIH0pID0+IHtcbiAgY29uc3Qgc2Nyb2xsWSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nyb2xsWVwiKTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IGFwcE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXBwTmFtZVwiKTtcbiAgY29uc3QgbWV0aG9kSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWV0aG9kSWRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGVzY3JpcHRpb25JZFwiKTtcbiAgY29uc3QgcGFybWFzID0gdXJsQ2hhbmdlRGV0ZWN0ZXIoKTtcbiAgY29uc29sZS5sb2cocGFybWFzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsWSwgYmVoYXZpb3I6IFwiaW5zdGFudFwiIH0pO1xuICB9LCBbYXBwTmFtZSwgbWV0aG9kSWQsIGRlc2NyaXB0aW9uSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICAvLyB7Li4ucHJvcHN9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgc2Nyb2xsPXtmYWxzZX1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Nyb2xsWFwiLCB3aW5kb3cuc2Nyb2xsWCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2Nyb2xsWVwiLCB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICAgIC8vIHJvdXRlci5wdXNoKGhyZWYpO1xuXG4gICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKFwiXCIsIFwiXCIsIGhyZWYpO1xuICAgICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm9TY3JvbGxMaW5rO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJMaW5rUHJvcHMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsIlJlYWN0Tm9kZSIsInVzZUVmZmVjdCIsInVzZVNlYXJjaFBhcmFtcyIsIlVybENoYW5nZURldGVjdGVyIiwiTm9TY3JvbGxMaW5rIiwiY2hpbGRyZW4iLCJocmVmIiwic2Nyb2xsWSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZWFyY2hQYXJhbXMiLCJhcHBOYW1lIiwiZ2V0IiwibWV0aG9kSWQiLCJkZXNjcmlwdGlvbklkIiwicGFybWFzIiwidXJsQ2hhbmdlRGV0ZWN0ZXIiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInNjcm9sbCIsIm9uQ2xpY2siLCJlIiwic2V0SXRlbSIsInNjcm9sbFgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/NoScrollLink.jsx\n"));

/***/ }),

/***/ "(app-client)/./components/urlChangeDetecter.jsx":
/*!******************************************!*\
  !*** ./components/urlChangeDetecter.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);\n// components/UrlChangeDetecter.tsx\n// import { useEffect } from \"react\";\nvar _s = $RefreshSig$();\n\nfunction urlChangeDetecter() {\n    _s();\n    // const scrollY = localStorage.getItem(\"scrollY\");\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams)();\n    var appName = searchParams.get(\"appName\");\n    var methodId = searchParams.get(\"methodId\");\n    var descriptionId = searchParams.get(\"descriptionId\");\n    // useEffect(() => {\n    //   window.scrollTo({ top: scrollY, behavior: \"instant\" });\n    // }, [appName, methodId, descriptionId]);\n    return {\n        appName: appName,\n        methodId: methodId,\n        descriptionId: descriptionId\n    };\n}\n_s(urlChangeDetecter, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (urlChangeDetecter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy91cmxDaGFuZ2VEZXRlY3Rlci5qc3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQW1DO0FBQ25DLHFDQUFxQzs7QUFDYTtBQUVsRCxTQUFTQzs7SUFDUCxtREFBbUQ7SUFDbkQsSUFBTUMsZUFBZUYsZ0VBQWVBO0lBQ3BDLElBQU1HLFVBQVVELGFBQWFFLElBQUk7SUFDakMsSUFBTUMsV0FBV0gsYUFBYUUsSUFBSTtJQUNsQyxJQUFNRSxnQkFBZ0JKLGFBQWFFLElBQUk7SUFFdkMsb0JBQW9CO0lBQ3BCLDREQUE0RDtJQUM1RCwwQ0FBMEM7SUFFMUMsT0FBTztRQUFFRCxTQUFTQTtRQUFTRSxVQUFVQTtRQUFVQyxlQUFlQTtJQUFjO0FBQzlFO0dBWlNMOztRQUVjRCw0REFBZUE7OztBQVl0QywrREFBZUMsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXJsQ2hhbmdlRGV0ZWN0ZXIuanN4PzllZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9VcmxDaGFuZ2VEZXRlY3Rlci50c3hcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5mdW5jdGlvbiB1cmxDaGFuZ2VEZXRlY3RlcigpIHtcbiAgLy8gY29uc3Qgc2Nyb2xsWSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2Nyb2xsWVwiKTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IGFwcE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXBwTmFtZVwiKTtcbiAgY29uc3QgbWV0aG9kSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWV0aG9kSWRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGVzY3JpcHRpb25JZFwiKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsWSwgYmVoYXZpb3I6IFwiaW5zdGFudFwiIH0pO1xuICAvLyB9LCBbYXBwTmFtZSwgbWV0aG9kSWQsIGRlc2NyaXB0aW9uSWRdKTtcblxuICByZXR1cm4geyBhcHBOYW1lOiBhcHBOYW1lLCBtZXRob2RJZDogbWV0aG9kSWQsIGRlc2NyaXB0aW9uSWQ6IGRlc2NyaXB0aW9uSWQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXJsQ2hhbmdlRGV0ZWN0ZXI7XG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXJsQ2hhbmdlRGV0ZWN0ZXIiLCJzZWFyY2hQYXJhbXMiLCJhcHBOYW1lIiwiZ2V0IiwibWV0aG9kSWQiLCJkZXNjcmlwdGlvbklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/urlChangeDetecter.jsx\n"));

/***/ })

});