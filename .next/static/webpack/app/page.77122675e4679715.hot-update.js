"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/IndexFunctionList/MakeCategory.jsx":
/*!*******************************************************!*\
  !*** ./components/IndexFunctionList/MakeCategory.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MakeCategory_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MakeCategory.module.css */ \"(app-client)/./components/IndexFunctionList/MakeCategory.module.css\");\n/* harmony import */ var _MakeCategory_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MakeCategory_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction MakeCategory(param) {\n    var FunctionOrApp = param.FunctionOrApp, ListObjects = param.ListObjects;\n    var _this = this;\n    var linkClickHandler = function linkClickHandler(e) {\n        e.preventDefault();\n        console.log(window.scrollX);\n        console.log(window.scrollY);\n    };\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    var _$param = searchParams.get(\"tab\");\n    var categorys = [\n        \"\\uD83C\\uDF31 새로운 기능\",\n        \"\\uD83D\\uDD25 인기있는 기능\",\n        \"\\uD83D\\uDCDE 전화, 문자\",\n        \"❤️ sns\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_MakeCategory_module_css__WEBPACK_IMPORTED_MODULE_4___default().layout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"카테고리 : \"\n                }, void 0, false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/IndexFunctionList/MakeCategory.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/IndexFunctionList/MakeCategory.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            categorys.map(function(categoryName) {\n                var categoryRealName = categoryName.slice(3, categoryName.length);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        onClick: linkClickHandler,\n                        href: {\n                            query: {\n                                tab: categoryRealName\n                            }\n                        },\n                        className: _$param === categoryRealName ? (_MakeCategory_module_css__WEBPACK_IMPORTED_MODULE_4___default().clicked) : \"\",\n                        id: categoryName,\n                        children: categoryName !== categorys[categorys.length - 1] ? \"\".concat(categoryName, \" ,\") : categoryName\n                    }, void 0, false, {\n                        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/IndexFunctionList/MakeCategory.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this)\n                }, categoryRealName, false, {\n                    fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/IndexFunctionList/MakeCategory.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/IndexFunctionList/MakeCategory.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(MakeCategory, \"A57ZQKsSKoH4xi482IWIv7kTTfs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = MakeCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeCategory);\nvar _c;\n$RefreshReg$(_c, \"MakeCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9JbmRleEZ1bmN0aW9uTGlzdC9NYWtlQ2F0ZWdvcnkuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ2dDO0FBRWI7QUFFaEQsU0FBU0ssYUFBYSxLQUE4QjtRQUE1QkMsZ0JBQUYsTUFBRUEsZUFBZUMsY0FBakIsTUFBaUJBOztRQVU1QkMsbUJBQVQsU0FBU0EsaUJBQWlCQyxDQUFDO1FBQ3pCQSxFQUFFQztRQUNGQyxRQUFRQyxJQUFJQyxPQUFPQztRQUNuQkgsUUFBUUMsSUFBSUMsT0FBT0U7SUFDckI7O0lBYkEsSUFBTUMsU0FBU2QsMERBQVNBO0lBQ3hCLElBQU1lLGVBQWVkLGdFQUFlQTtJQUNwQyxJQUFNZSxVQUFRRCxhQUFhRSxJQUFJO0lBQy9CLElBQU1DLFlBQVk7UUFDaEI7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQU1ELHFCQUNFLDhEQUFDQztRQUFHQyxXQUFXbEIsd0VBQWNtQjs7MEJBQzNCLDhEQUFDQzswQkFDQyw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7O1lBRUxMLFVBQVVNLElBQUksU0FBQ0M7Z0JBQ2QsSUFBSUMsbUJBQW1CRCxhQUFhRSxNQUFNLEdBQUdGLGFBQWFHO2dCQUMxRCxxQkFDRSw4REFBQ047OEJBQ0MsNEVBQUN2QixrREFBSUE7d0JBQ0g4QixTQUFTdkI7d0JBQ1R3QixNQUFNOzRCQUFFQyxPQUFPO2dDQUFFQyxLQUFLTjs0QkFBaUI7d0JBQUU7d0JBQ3pDTixXQUFXSixZQUFVVSxtQkFBbUJ4Qix5RUFBZStCLEdBQUc7d0JBQzFEQyxJQUFJVDtrQ0FDSEEsaUJBQWlCUCxTQUFTLENBQUNBLFVBQVVVLFNBQVMsRUFBRSxHQUM3QyxHQUFnQixPQUFiSCxjQUFhLFFBQ2hCQTs7Ozs7O21CQVJDQzs7Ozs7WUFZYjs7Ozs7OztBQUdOO0dBdENTdkI7O1FBQ1FILHNEQUFTQTtRQUNIQyw0REFBZUE7OztLQUY3QkU7QUF3Q1QsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmRleEZ1bmN0aW9uTGlzdC9NYWtlQ2F0ZWdvcnkuanN4P2E5NWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NYWtlQ2F0ZWdvcnkubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBNYWtlQ2F0ZWdvcnkoeyBGdW5jdGlvbk9yQXBwLCBMaXN0T2JqZWN0cyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KFwidGFiXCIpO1xuICBjb25zdCBjYXRlZ29yeXMgPSBbXG4gICAgXCLwn4yxIOyDiOuhnOyatCDquLDriqVcIixcbiAgICBcIvCflKUg7J246riw7J6I64qUIOq4sOuKpVwiLFxuICAgIFwi8J+TniDsoITtmZQsIOusuOyekFwiLFxuICAgIFwi4p2k77iPIHNuc1wiLFxuICBdO1xuICBmdW5jdGlvbiBsaW5rQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFgpO1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGF5b3V0fT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgzPuy5tO2FjOqzoOumrCA6IDwvaDM+XG4gICAgICA8L2xpPlxuICAgICAge2NhdGVnb3J5cy5tYXAoKGNhdGVnb3J5TmFtZSkgPT4ge1xuICAgICAgICBsZXQgY2F0ZWdvcnlSZWFsTmFtZSA9IGNhdGVnb3J5TmFtZS5zbGljZSgzLCBjYXRlZ29yeU5hbWUubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeVJlYWxOYW1lfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xpbmtDbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgIGhyZWY9e3sgcXVlcnk6IHsgdGFiOiBjYXRlZ29yeVJlYWxOYW1lIH0gfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXJhbSA9PT0gY2F0ZWdvcnlSZWFsTmFtZSA/IGNsYXNzZXMuY2xpY2tlZCA6IFwiXCJ9XG4gICAgICAgICAgICAgIGlkPXtjYXRlZ29yeU5hbWV9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnlOYW1lICE9PSBjYXRlZ29yeXNbY2F0ZWdvcnlzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgPyBgJHtjYXRlZ29yeU5hbWV9ICxgXG4gICAgICAgICAgICAgICAgOiBjYXRlZ29yeU5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ha2VDYXRlZ29yeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJjbGFzc2VzIiwiTWFrZUNhdGVnb3J5IiwiRnVuY3Rpb25PckFwcCIsIkxpc3RPYmplY3RzIiwibGlua0NsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxYIiwic2Nyb2xsWSIsInJvdXRlciIsInNlYXJjaFBhcmFtcyIsInBhcmFtIiwiZ2V0IiwiY2F0ZWdvcnlzIiwidWwiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJsaSIsImgzIiwibWFwIiwiY2F0ZWdvcnlOYW1lIiwiY2F0ZWdvcnlSZWFsTmFtZSIsInNsaWNlIiwibGVuZ3RoIiwib25DbGljayIsImhyZWYiLCJxdWVyeSIsInRhYiIsImNsaWNrZWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/IndexFunctionList/MakeCategory.jsx\n"));

/***/ })

});