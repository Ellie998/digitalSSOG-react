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

/***/ "(app-client)/./components/page_context/UrlContextProvider.jsx":
/*!********************************************************!*\
  !*** ./components/page_context/UrlContextProvider.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UrlContextProvider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _UrlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlContext */ \"(app-client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nvar appName_basic = \"기본\";\nvar appName_call = \"전화\";\nvar appName_message = \"메시지\";\nvar appName_kakaotalk = \"카카오톡\";\n//\nvar functionName_makeCall = \"전화걸기(발신)\";\nvar functionName_getCall = \"전화받기(수신)\";\nvar functionName_makeVideoCall = \"영상통화 발신\";\nvar functionName_sendMessage = \"문자 발신\";\nvar functionName_seeMessage = \"문자 수신\";\nvar functionName_resendMessage = \"문자 전달\";\nvar functionName_reserveMessage = \"예약 문자 발송\";\nvar functionName_sendImg = \"이미지, 동영상 전송\";\nvar functionName_sendAudio = \"오디오 전송\";\nvar functionName_sendPhoneNum = \"연락처 공유\";\nvar functionName_kakaotalk_groubChatLeave_RejectInvitation = \"그룹채팅방 초대거부 및 나가기\";\nvar functionName_kakaotalk_groubChatLock = \"그룹채팅방 채팅 입력창 잠금하기\";\nfunction urlChangeDetecter() {\n    _s();\n    var searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    var appName = searchParams.get(\"appName\");\n    var methodId = searchParams.get(\"methodId\");\n    var descriptionId = searchParams.get(\"descriptionId\");\n    return {\n        appName: appName,\n        methodId: methodId,\n        descriptionId: descriptionId\n    };\n}\n_s(urlChangeDetecter, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\nfunction UrlContextProvider(param) {\n    var children = param.children;\n    _s1();\n    var params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    var functionName = decodeURI(params.functionName.replace(\"%2C\", \",\"));\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), myAppName = _useState[0], setMyAppName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), myMethodId = _useState1[0], setMyMethodId = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), myDescriptionId = _useState2[0], setMyDescriptionId = _useState2[1];\n    (myAppName !== \"\" && myDescriptionId === \"\" && myMethodId === \"\") & (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.history.replaceState(\"\", \"\", \"\".concat(\"/description/\".concat(functionName, \"/?appName=\").concat(myAppName, \"&methodId=1&descriptionId=0\")));\n    }, [\n        myAppName\n    ]);\n    myDescriptionId !== \"\" & (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.history.replaceState(\"\", \"\", \"\".concat(myDescriptionId !== \"\" ? \"/description/\".concat(functionName, \"/?appName=\").concat(myAppName, \"&methodId=\").concat(myMethodId, \"&descriptionId=\").concat(myDescriptionId.toString()) : \"/description/\".concat(functionName)));\n    }, [\n        myDescriptionId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UrlContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n        value: {\n            functionName: functionName,\n            myAppName: myAppName,\n            myMethodId: myMethodId,\n            myDescriptionId: myDescriptionId,\n            setMyAppName: setMyAppName,\n            setMyMethodId: setMyMethodId,\n            setMyDescriptionId: setMyDescriptionId,\n            urlChangeDetecter: urlChangeDetecter,\n            //\n            functionName_makeCall: functionName_makeCall,\n            functionName_getCall: functionName_getCall,\n            functionName_makeVideoCall: functionName_makeVideoCall,\n            functionName_sendMessage: functionName_sendMessage,\n            functionName_seeMessage: functionName_seeMessage,\n            functionName_resendMessage: functionName_resendMessage,\n            functionName_reserveMessage: functionName_reserveMessage,\n            functionName_sendImg: functionName_sendImg,\n            functionName_sendAudio: functionName_sendAudio,\n            functionName_sendPhoneNum: functionName_sendPhoneNum,\n            //\n            functionName_kakaotalk_groubChatLeave_RejectInvitation: functionName_kakaotalk_groubChatLeave_RejectInvitation,\n            functionName_kakaotalk_groubChatLock: functionName_kakaotalk_groubChatLock,\n            //\n            appName_basic: appName_basic,\n            appName_kakaotalk: appName_kakaotalk,\n            appName_message: appName_message,\n            appName_call: appName_call\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/page_context/UrlContextProvider.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s1(UrlContextProvider, \"kDegq+zi6lnXi9m3WDka6czs/jk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams\n    ];\n});\n_c = UrlContextProvider;\nvar _c;\n$RefreshReg$(_c, \"UrlContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wYWdlX2NvbnRleHQvVXJsQ29udGV4dFByb3ZpZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ2lCO0FBRTdELElBQU1LLGdCQUFnQjtBQUN0QixJQUFNQyxlQUFlO0FBQ3JCLElBQU1DLGtCQUFrQjtBQUN4QixJQUFNQyxvQkFBb0I7QUFDMUIsRUFBRTtBQUNGLElBQU1DLHdCQUF3QjtBQUM5QixJQUFNQyx1QkFBdUI7QUFDN0IsSUFBTUMsNkJBQTZCO0FBQ25DLElBQU1DLDJCQUEyQjtBQUNqQyxJQUFNQywwQkFBMEI7QUFDaEMsSUFBTUMsNkJBQTZCO0FBQ25DLElBQU1DLDhCQUE4QjtBQUNwQyxJQUFNQyx1QkFBdUI7QUFDN0IsSUFBTUMseUJBQXlCO0FBQy9CLElBQU1DLDRCQUE0QjtBQUNsQyxJQUFNQyx5REFDSjtBQUNGLElBQU1DLHVDQUF1QztBQUU3QyxTQUFTQzs7SUFDUCxJQUFNQyxlQUFlbEIsZ0VBQWVBO0lBQ3BDLElBQU1tQixVQUFVRCxhQUFhRSxJQUFJO0lBQ2pDLElBQU1DLFdBQVdILGFBQWFFLElBQUk7SUFDbEMsSUFBTUUsZ0JBQWdCSixhQUFhRSxJQUFJO0lBQ3ZDLE9BQU87UUFBRUQsU0FBU0E7UUFBU0UsVUFBVUE7UUFBVUMsZUFBZUE7SUFBYztBQUM5RTtHQU5TTDs7UUFDY2pCLDREQUFlQTs7O0FBT3ZCLFNBQVN1QixtQkFBbUIsS0FBWTtRQUFaLGlCQUFFQzs7SUFDM0MsSUFBTUMsU0FBUzFCLDBEQUFTQTtJQUN4QixJQUFNMkIsZUFBZUMsVUFBVUYsT0FBT0MsYUFBYUUsUUFBUSxPQUFPO0lBRWxFLElBQWtDOUIsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQXBDK0IsWUFBMkIvQixjQUFoQmdDLGVBQWdCaEM7SUFDbEMsSUFBb0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF0Q2lDLGFBQTZCakMsZUFBakJrQyxnQkFBaUJsQztJQUNwQyxJQUE4Q0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQWhEbUMsa0JBQXVDbkMsZUFBdEJvQyxxQkFBc0JwQztJQUU3QytCLENBQUFBLGNBQWMsTUFBTUksb0JBQW9CLE1BQU1GLGVBQWUsRUFBQyxJQUM3RGxDLGdEQUFTQSxDQUFDO1FBQ1JzQyxPQUFPQyxRQUFRQyxhQUNiLElBQ0EsSUFDQSxHQUFtRixPQUFoRixnQkFBeUNSLE9BQXpCSCxjQUFhLGNBQXNCLE9BQVZHLFdBQVU7SUFFMUQsR0FBRztRQUFDQTtLQUFVO0lBQ2ZJLG9CQUFvQixLQUNuQnBDLGdEQUFTQSxDQUFDO1FBQ1JzQyxPQUFPQyxRQUFRQyxhQUNiLElBQ0EsSUFDQSxHQUlDLE9BSENKLG9CQUFvQixLQUNoQixnQkFBeUNKLE9BQXpCSCxjQUFhLGNBQWtDSyxPQUF0QkYsV0FBVSxjQUF3Q0ksT0FBNUJGLFlBQVcsbUJBQTRDLE9BQTNCRSxnQkFBZ0JLLGNBQzNHLGdCQUE2QixPQUFiWjtJQUcxQixHQUFHO1FBQUNPO0tBQWdCO0lBRXRCLHFCQUNFLDhEQUFDckMsbURBQVVBLENBQUMyQztRQUNWQyxPQUFPO1lBQ0xkLGNBQWNBO1lBQ2RHLFdBQVdBO1lBQ1hFLFlBQVlBO1lBQ1pFLGlCQUFpQkE7WUFDakJILGNBQWNBO1lBQ2RFLGVBQWVBO1lBQ2ZFLG9CQUFvQkE7WUFDcEJqQixtQkFBbUJBO1lBQ25CLEVBQUU7WUFDRlosdUJBQUFBO1lBQ0FDLHNCQUFBQTtZQUNBQyw0QkFBQUE7WUFDQUMsMEJBQUFBO1lBQ0FDLHlCQUFBQTtZQUNBQyw0QkFBQUE7WUFDQUMsNkJBQUFBO1lBQ0FDLHNCQUFBQTtZQUNBQyx3QkFBQUE7WUFDQUMsMkJBQUFBO1lBQ0EsRUFBRTtZQUNGQyx3REFBQUE7WUFDQUMsc0NBQUFBO1lBQ0EsRUFBRTtZQUNGZixlQUFBQTtZQUNBRyxtQkFBQUE7WUFDQUQsaUJBQUFBO1lBQ0FELGNBQUFBO1FBQ0Y7a0JBQ0NzQjs7Ozs7O0FBR1A7SUEvRHdCRDs7UUFDUHhCLHNEQUFTQTs7O0tBREZ3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0UHJvdmlkZXIuanN4PzQ4MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVybENvbnRleHQgZnJvbSBcIi4vVXJsQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IGFwcE5hbWVfYmFzaWMgPSBcIuq4sOuzuFwiO1xuY29uc3QgYXBwTmFtZV9jYWxsID0gXCLsoITtmZRcIjtcbmNvbnN0IGFwcE5hbWVfbWVzc2FnZSA9IFwi66mU7Iuc7KeAXCI7XG5jb25zdCBhcHBOYW1lX2tha2FvdGFsayA9IFwi7Lm07Lm07Jik7YahXCI7XG4vL1xuY29uc3QgZnVuY3Rpb25OYW1lX21ha2VDYWxsID0gXCLsoITtmZTqsbjquLAo67Cc7IugKVwiO1xuY29uc3QgZnVuY3Rpb25OYW1lX2dldENhbGwgPSBcIuyghO2ZlOuwm+q4sCjsiJjsi6ApXCI7XG5jb25zdCBmdW5jdGlvbk5hbWVfbWFrZVZpZGVvQ2FsbCA9IFwi7JiB7IOB7Ya17ZmUIOuwnOyLoFwiO1xuY29uc3QgZnVuY3Rpb25OYW1lX3NlbmRNZXNzYWdlID0gXCLrrLjsnpAg67Cc7IugXCI7XG5jb25zdCBmdW5jdGlvbk5hbWVfc2VlTWVzc2FnZSA9IFwi66y47J6QIOyImOyLoFwiO1xuY29uc3QgZnVuY3Rpb25OYW1lX3Jlc2VuZE1lc3NhZ2UgPSBcIuusuOyekCDsoITri6xcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9yZXNlcnZlTWVzc2FnZSA9IFwi7JiI7JW9IOusuOyekCDrsJzshqFcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9zZW5kSW1nID0gXCLsnbTrr7jsp4AsIOuPmeyYgeyDgSDsoITshqFcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9zZW5kQXVkaW8gPSBcIuyYpOuUlOyYpCDsoITshqFcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9zZW5kUGhvbmVOdW0gPSBcIuyXsOudveyymCDqs7XsnKBcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9rYWthb3RhbGtfZ3JvdWJDaGF0TGVhdmVfUmVqZWN0SW52aXRhdGlvbiA9XG4gIFwi6re466O57LGE7YyF67CpIOy0iOuMgOqxsOu2gCDrsI8g64KY6rCA6riwXCI7XG5jb25zdCBmdW5jdGlvbk5hbWVfa2FrYW90YWxrX2dyb3ViQ2hhdExvY2sgPSBcIuq3uOujueyxhO2MheuwqSDssYTtjIUg7J6F66Cl7LC9IOyeoOq4iO2VmOq4sFwiO1xuXG5mdW5jdGlvbiB1cmxDaGFuZ2VEZXRlY3RlcigpIHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IGFwcE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXBwTmFtZVwiKTtcbiAgY29uc3QgbWV0aG9kSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWV0aG9kSWRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGVzY3JpcHRpb25JZFwiKTtcbiAgcmV0dXJuIHsgYXBwTmFtZTogYXBwTmFtZSwgbWV0aG9kSWQ6IG1ldGhvZElkLCBkZXNjcmlwdGlvbklkOiBkZXNjcmlwdGlvbklkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVybENvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IGRlY29kZVVSSShwYXJhbXMuZnVuY3Rpb25OYW1lLnJlcGxhY2UoXCIlMkNcIiwgXCIsXCIpKTtcblxuICBjb25zdCBbbXlBcHBOYW1lLCBzZXRNeUFwcE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtteU1ldGhvZElkLCBzZXRNeU1ldGhvZElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbXlEZXNjcmlwdGlvbklkLCBzZXRNeURlc2NyaXB0aW9uSWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgKG15QXBwTmFtZSAhPT0gXCJcIiAmJiBteURlc2NyaXB0aW9uSWQgPT09IFwiXCIgJiYgbXlNZXRob2RJZCA9PT0gXCJcIikgJlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIGAke2AvZGVzY3JpcHRpb24vJHtmdW5jdGlvbk5hbWV9Lz9hcHBOYW1lPSR7bXlBcHBOYW1lfSZtZXRob2RJZD0xJmRlc2NyaXB0aW9uSWQ9MGB9YFxuICAgICAgKTtcbiAgICB9LCBbbXlBcHBOYW1lXSk7XG4gIChteURlc2NyaXB0aW9uSWQgIT09IFwiXCIpICZcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBgJHtcbiAgICAgICAgICBteURlc2NyaXB0aW9uSWQgIT09IFwiXCJcbiAgICAgICAgICAgID8gYC9kZXNjcmlwdGlvbi8ke2Z1bmN0aW9uTmFtZX0vP2FwcE5hbWU9JHtteUFwcE5hbWV9Jm1ldGhvZElkPSR7bXlNZXRob2RJZH0mZGVzY3JpcHRpb25JZD0ke215RGVzY3JpcHRpb25JZC50b1N0cmluZygpfWBcbiAgICAgICAgICAgIDogYC9kZXNjcmlwdGlvbi8ke2Z1bmN0aW9uTmFtZX1gXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH0sIFtteURlc2NyaXB0aW9uSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxVcmxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBmdW5jdGlvbk5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgbXlBcHBOYW1lOiBteUFwcE5hbWUsXG4gICAgICAgIG15TWV0aG9kSWQ6IG15TWV0aG9kSWQsXG4gICAgICAgIG15RGVzY3JpcHRpb25JZDogbXlEZXNjcmlwdGlvbklkLFxuICAgICAgICBzZXRNeUFwcE5hbWU6IHNldE15QXBwTmFtZSxcbiAgICAgICAgc2V0TXlNZXRob2RJZDogc2V0TXlNZXRob2RJZCxcbiAgICAgICAgc2V0TXlEZXNjcmlwdGlvbklkOiBzZXRNeURlc2NyaXB0aW9uSWQsXG4gICAgICAgIHVybENoYW5nZURldGVjdGVyOiB1cmxDaGFuZ2VEZXRlY3RlcixcbiAgICAgICAgLy9cbiAgICAgICAgZnVuY3Rpb25OYW1lX21ha2VDYWxsLFxuICAgICAgICBmdW5jdGlvbk5hbWVfZ2V0Q2FsbCxcbiAgICAgICAgZnVuY3Rpb25OYW1lX21ha2VWaWRlb0NhbGwsXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9zZW5kTWVzc2FnZSxcbiAgICAgICAgZnVuY3Rpb25OYW1lX3NlZU1lc3NhZ2UsXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9yZXNlbmRNZXNzYWdlLFxuICAgICAgICBmdW5jdGlvbk5hbWVfcmVzZXJ2ZU1lc3NhZ2UsXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9zZW5kSW1nLFxuICAgICAgICBmdW5jdGlvbk5hbWVfc2VuZEF1ZGlvLFxuICAgICAgICBmdW5jdGlvbk5hbWVfc2VuZFBob25lTnVtLFxuICAgICAgICAvL1xuICAgICAgICBmdW5jdGlvbk5hbWVfa2FrYW90YWxrX2dyb3ViQ2hhdExlYXZlX1JlamVjdEludml0YXRpb24sXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9rYWthb3RhbGtfZ3JvdWJDaGF0TG9jayxcbiAgICAgICAgLy9cbiAgICAgICAgYXBwTmFtZV9iYXNpYyxcbiAgICAgICAgYXBwTmFtZV9rYWthb3RhbGssXG4gICAgICAgIGFwcE5hbWVfbWVzc2FnZSxcbiAgICAgICAgYXBwTmFtZV9jYWxsLFxuICAgICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9VcmxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlVybENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsImFwcE5hbWVfYmFzaWMiLCJhcHBOYW1lX2NhbGwiLCJhcHBOYW1lX21lc3NhZ2UiLCJhcHBOYW1lX2tha2FvdGFsayIsImZ1bmN0aW9uTmFtZV9tYWtlQ2FsbCIsImZ1bmN0aW9uTmFtZV9nZXRDYWxsIiwiZnVuY3Rpb25OYW1lX21ha2VWaWRlb0NhbGwiLCJmdW5jdGlvbk5hbWVfc2VuZE1lc3NhZ2UiLCJmdW5jdGlvbk5hbWVfc2VlTWVzc2FnZSIsImZ1bmN0aW9uTmFtZV9yZXNlbmRNZXNzYWdlIiwiZnVuY3Rpb25OYW1lX3Jlc2VydmVNZXNzYWdlIiwiZnVuY3Rpb25OYW1lX3NlbmRJbWciLCJmdW5jdGlvbk5hbWVfc2VuZEF1ZGlvIiwiZnVuY3Rpb25OYW1lX3NlbmRQaG9uZU51bSIsImZ1bmN0aW9uTmFtZV9rYWthb3RhbGtfZ3JvdWJDaGF0TGVhdmVfUmVqZWN0SW52aXRhdGlvbiIsImZ1bmN0aW9uTmFtZV9rYWthb3RhbGtfZ3JvdWJDaGF0TG9jayIsInVybENoYW5nZURldGVjdGVyIiwic2VhcmNoUGFyYW1zIiwiYXBwTmFtZSIsImdldCIsIm1ldGhvZElkIiwiZGVzY3JpcHRpb25JZCIsIlVybENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwicGFyYW1zIiwiZnVuY3Rpb25OYW1lIiwiZGVjb2RlVVJJIiwicmVwbGFjZSIsIm15QXBwTmFtZSIsInNldE15QXBwTmFtZSIsIm15TWV0aG9kSWQiLCJzZXRNeU1ldGhvZElkIiwibXlEZXNjcmlwdGlvbklkIiwic2V0TXlEZXNjcmlwdGlvbklkIiwid2luZG93IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRvU3RyaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/page_context/UrlContextProvider.jsx\n"));

/***/ })

});