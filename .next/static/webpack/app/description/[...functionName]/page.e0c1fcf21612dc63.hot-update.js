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

/***/ "(app-client)/./components/DisplayBox/DisplayBox.jsx":
/*!**********************************************!*\
  !*** ./components/DisplayBox/DisplayBox.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _sections_AppHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/AppHeader */ \"(app-client)/./components/DisplayBox/sections/AppHeader.jsx\");\n/* harmony import */ var _sections_AppMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/AppMain */ \"(app-client)/./components/DisplayBox/sections/AppMain.jsx\");\n/* harmony import */ var _sections_AppNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/AppNav */ \"(app-client)/./components/DisplayBox/sections/AppNav.jsx\");\n/* harmony import */ var _DisplayBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayBox.module.css */ \"(app-client)/./components/DisplayBox/DisplayBox.module.css\");\n/* harmony import */ var _DisplayBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DisplayBox_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction DisplayBox(param) {\n    var appName = param.appName, methodId = param.methodId, descriptionId = param.descriptionId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_DisplayBox_module_css__WEBPACK_IMPORTED_MODULE_4___default().DisplayBox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_AppHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/DisplayBox/DisplayBox.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_AppMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                appName: appName,\n                methodId: methodId,\n                descriptionId: descriptionId\n            }, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/DisplayBox/DisplayBox.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_AppNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/DisplayBox/DisplayBox.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/DisplayBox/DisplayBox.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = DisplayBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayBox);\nvar _c;\n$RefreshReg$(_c, \"DisplayBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9EaXNwbGF5Qm94L0Rpc3BsYXlCb3guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ0o7QUFDRjtBQUVPO0FBQzlDLFNBQVNJLFdBQVcsS0FBb0M7UUFBbENDLFVBQUYsTUFBRUEsU0FBU0MsV0FBWCxNQUFXQSxVQUFVQyxnQkFBckIsTUFBcUJBO0lBQ3ZDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTiwwRUFBa0JDOzswQkFDaEMsOERBQUNKLDJEQUFTQTs7Ozs7MEJBQ1YsOERBQUNDLHlEQUFPQTtnQkFDTkksU0FBU0E7Z0JBQ1RDLFVBQVVBO2dCQUNWQyxlQUFlQTs7Ozs7OzBCQUVqQiw4REFBQ0wsd0RBQU1BOzs7Ozs7Ozs7OztBQUdiO0tBWlNFO0FBY1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EaXNwbGF5Qm94L0Rpc3BsYXlCb3guanN4PzE4MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcEhlYWRlciBmcm9tIFwiLi9zZWN0aW9ucy9BcHBIZWFkZXJcIjtcbmltcG9ydCBBcHBNYWluIGZyb20gXCIuL3NlY3Rpb25zL0FwcE1haW5cIjtcbmltcG9ydCBBcHBOYXYgZnJvbSBcIi4vc2VjdGlvbnMvQXBwTmF2XCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0Rpc3BsYXlCb3gubW9kdWxlLmNzc1wiO1xuZnVuY3Rpb24gRGlzcGxheUJveCh7IGFwcE5hbWUsIG1ldGhvZElkLCBkZXNjcmlwdGlvbklkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5EaXNwbGF5Qm94fT5cbiAgICAgIDxBcHBIZWFkZXIgLz5cbiAgICAgIDxBcHBNYWluXG4gICAgICAgIGFwcE5hbWU9e2FwcE5hbWV9XG4gICAgICAgIG1ldGhvZElkPXttZXRob2RJZH1cbiAgICAgICAgZGVzY3JpcHRpb25JZD17ZGVzY3JpcHRpb25JZH1cbiAgICAgIC8+XG4gICAgICA8QXBwTmF2IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlCb3g7XG4iXSwibmFtZXMiOlsiQXBwSGVhZGVyIiwiQXBwTWFpbiIsIkFwcE5hdiIsImNsYXNzZXMiLCJEaXNwbGF5Qm94IiwiYXBwTmFtZSIsIm1ldGhvZElkIiwiZGVzY3JpcHRpb25JZCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/DisplayBox/DisplayBox.jsx\n"));

/***/ })

});