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

/***/ "(sc_client)/./components/page_context/UrlContextProvider.jsx":
/*!********************************************************!*\
  !*** ./components/page_context/UrlContextProvider.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UrlContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(sc_client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _UrlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlContext */ \"(sc_client)/./components/page_context/UrlContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(sc_client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(sc_client)/./node_modules/next/navigation.js\");\n\n\n\n\nconst appName_basic = \"기본\";\nconst appName_call = \"전화\";\nconst appName_message = \"메시지\";\nconst appName_kakaotalk = \"카카오톡\";\n//\nconst functionName_makeCall = \"전화걸기(발신)\";\nconst functionName_getCall = \"전화받기(수신)\";\nconst functionName_makeVideoCall = \"영상통화 발신\";\nconst functionName_sendMessage = \"문자 발신\";\nconst functionName_seeMessage = \"문자 수신\";\nconst functionName_resendMessage = \"문자 전달\";\nconst functionName_reserveMessage = \"예약 문자 발송\";\nconst functionName_sendImg = \"이미지, 동영상 전송\";\nconst functionName_sendAudio = \"오디오 전송\";\nconst functionName_sendPhoneNum = \"연락처 공유\";\nconst functionName_kakaotalk_groubChatLeave_RejectInvitation = \"그룹채팅방 초대거부 및 나가기\";\nconst functionName_kakaotalk_groubChatLock = \"그룹채팅방 채팅 입력창 잠금하기\";\nfunction urlChangeDetecter() {\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const appName = searchParams.get(\"appName\");\n    const methodId = searchParams.get(\"methodId\");\n    const descriptionId = searchParams.get(\"descriptionId\");\n    return {\n        appName: appName,\n        methodId: methodId,\n        descriptionId: descriptionId\n    };\n}\nfunction UrlContextProvider({ children }) {\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n    const functionNameTemp = decodeURI(params.functionName.replace(\"%2C\", \",\"));\n    console.log(functionNameTemp);\n    function functionNameFilter() {\n        if (functionNameTemp.split(\"/\").length !== 1) {\n            console.log(\"return functionNameTemp.split('/')[0];\");\n            return functionNameTemp.split(\"/\")[0];\n        }\n        if (functionNameTemp.includes(\"%2F\")) {\n            console.log(\"%2F\");\n            const temp = functionNameTemp.split(\"%2F\");\n            return temp[0];\n        }\n        if (functionNameTemp.includes(\"%2f\")) {\n            console.log(\"%2F\");\n            f;\n            const temp = functionNameTemp.split(\"%2f\");\n            return temp[0];\n        }\n        if (functionNameTemp.includes(\"/\")) {\n            console.log(\"/\");\n            const temp = functionNameTemp.split(\"/\");\n            return temp[0];\n        }\n        return functionNameTemp;\n    }\n    const functionName = functionNameFilter();\n    // const functionName =\n    //   functionNameTemp.split(\"/\").length !== 1\n    //     ? functionNameTemp.split(\"/\")[0]\n    //     : functionNameTemp;\n    const [myAppName, setMyAppName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [myMethodId, setMyMethodId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [myDescriptionId, setMyDescriptionId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    myDescriptionId !== \"\" & (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.history.replaceState(\"\", \"\", `${myDescriptionId !== \"\" ? `/description/${functionName}/${myAppName}/${myMethodId}/${myDescriptionId}` : `/description/${functionName}`}`);\n    }, [\n        myDescriptionId\n    ]);\n    // when back or forehead btn clicked, function trigered in root page\n    window.onpopstate = function(e) {\n        // http://localhost:3000/?tab=새로운 기능\n        const url = decodeURI(window.location);\n        router.push(url, {\n            scroll: false\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UrlContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Provider, {\n        value: {\n            functionName: functionName,\n            myAppName: myAppName,\n            myMethodId: myMethodId,\n            myDescriptionId: myDescriptionId,\n            setMyAppName: setMyAppName,\n            setMyMethodId: setMyMethodId,\n            setMyDescriptionId: setMyDescriptionId,\n            urlChangeDetecter: urlChangeDetecter,\n            //\n            functionName_makeCall,\n            functionName_getCall,\n            functionName_makeVideoCall,\n            functionName_sendMessage,\n            functionName_seeMessage,\n            functionName_resendMessage,\n            functionName_reserveMessage,\n            functionName_sendImg,\n            functionName_sendAudio,\n            functionName_sendPhoneNum,\n            //\n            functionName_kakaotalk_groubChatLeave_RejectInvitation,\n            functionName_kakaotalk_groubChatLock,\n            //\n            appName_basic,\n            appName_kakaotalk,\n            appName_message,\n            appName_call\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kim-yerim/Documents/project/digital-ssog-react/digitalssog/components/page_context/UrlContextProvider.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNjX2NsaWVudCkvLi9jb21wb25lbnRzL3BhZ2VfY29udGV4dC9VcmxDb250ZXh0UHJvdmlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUM0QjtBQUV4RSxNQUFNTSxnQkFBZ0I7QUFDdEIsTUFBTUMsZUFBZTtBQUNyQixNQUFNQyxrQkFBa0I7QUFDeEIsTUFBTUMsb0JBQW9CO0FBQzFCLEVBQUU7QUFDRixNQUFNQyx3QkFBd0I7QUFDOUIsTUFBTUMsdUJBQXVCO0FBQzdCLE1BQU1DLDZCQUE2QjtBQUNuQyxNQUFNQywyQkFBMkI7QUFDakMsTUFBTUMsMEJBQTBCO0FBQ2hDLE1BQU1DLDZCQUE2QjtBQUNuQyxNQUFNQyw4QkFBOEI7QUFDcEMsTUFBTUMsdUJBQXVCO0FBQzdCLE1BQU1DLHlCQUF5QjtBQUMvQixNQUFNQyw0QkFBNEI7QUFDbEMsTUFBTUMseURBQ0o7QUFDRixNQUFNQyx1Q0FBdUM7QUFFN0MsU0FBU0M7SUFDUCxNQUFNQyxlQUFlbEIsZ0VBQWVBO0lBQ3BDLE1BQU1tQixVQUFVRCxhQUFhRSxHQUFHLENBQUM7SUFDakMsTUFBTUMsV0FBV0gsYUFBYUUsR0FBRyxDQUFDO0lBQ2xDLE1BQU1FLGdCQUFnQkosYUFBYUUsR0FBRyxDQUFDO0lBQ3ZDLE9BQU87UUFBRUQsU0FBU0E7UUFBU0UsVUFBVUE7UUFBVUMsZUFBZUE7SUFBYztBQUM5RTtBQUVlLFNBQVNDLG1CQUFtQixFQUFFQyxRQUFRLEVBQUU7SUFDckQsTUFBTUMsU0FBUzFCLDBEQUFTQTtJQUN4QixNQUFNMkIsU0FBUzVCLDBEQUFTQTtJQUN4QixNQUFNNkIsbUJBQW1CQyxVQUFVRixPQUFPRyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPO0lBRXRFQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1osU0FBU007UUFDUCxJQUFJTixpQkFBaUJPLEtBQUssQ0FBQyxLQUFLQyxNQUFNLEtBQUssR0FBRztZQUM1Q0osUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT0wsaUJBQWlCTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkM7UUFDQSxJQUFJUCxpQkFBaUJTLFFBQVEsQ0FBQyxRQUFRO1lBQ3BDTCxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNSyxPQUFPVixpQkFBaUJPLEtBQUssQ0FBQztZQUNwQyxPQUFPRyxJQUFJLENBQUMsRUFBRTtRQUNoQjtRQUNBLElBQUlWLGlCQUFpQlMsUUFBUSxDQUFDLFFBQVE7WUFDcENMLFFBQVFDLEdBQUcsQ0FBQztZQUNaTTtZQUNBLE1BQU1ELE9BQU9WLGlCQUFpQk8sS0FBSyxDQUFDO1lBQ3BDLE9BQU9HLElBQUksQ0FBQyxFQUFFO1FBQ2hCO1FBQ0EsSUFBSVYsaUJBQWlCUyxRQUFRLENBQUMsTUFBTTtZQUNsQ0wsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTUssT0FBT1YsaUJBQWlCTyxLQUFLLENBQUM7WUFDcEMsT0FBT0csSUFBSSxDQUFDLEVBQUU7UUFDaEI7UUFDQSxPQUFPVjtJQUNUO0lBQ0EsTUFBTUUsZUFBZUk7SUFFckIsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3Qyx1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBRTFCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHM0MsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDNEMsWUFBWUMsY0FBYyxHQUFHN0MsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDOEMsaUJBQWlCQyxtQkFBbUIsR0FBRy9DLCtDQUFRQSxDQUFDO0lBRXREOEMsb0JBQW9CLEtBQ25CL0MsZ0RBQVNBLENBQUM7UUFDUmlELE9BQU9DLE9BQU8sQ0FBQ0MsWUFBWSxDQUN6QixJQUNBLElBQ0EsQ0FBQyxFQUNDSixvQkFBb0IsS0FDaEIsQ0FBQyxhQUFhLEVBQUVkLGFBQWEsQ0FBQyxFQUFFVSxVQUFVLENBQUMsRUFBRUUsV0FBVyxDQUFDLEVBQUVFLGdCQUFnQixDQUFDLEdBRTVFLENBQUMsYUFBYSxFQUFFZCxhQUFhLENBQUMsQ0FDbkMsQ0FBQztJQUVOLEdBQUc7UUFBQ2M7S0FBZ0I7SUFDdEIsb0VBQW9FO0lBQ3BFRSxPQUFPRyxVQUFVLEdBQUcsU0FBVUMsQ0FBQztRQUM3QixvQ0FBb0M7UUFDcEMsTUFBTUMsTUFBTXRCLFVBQVVpQixPQUFPTSxRQUFRO1FBRXJDMUIsT0FBTzJCLElBQUksQ0FBQ0YsS0FBSztZQUFFRyxRQUFRO1FBQU07SUFDbkM7SUFFQSxxQkFDRSw4REFBQzFELG1EQUFVQSxDQUFDMkQsUUFBUTtRQUNsQkMsT0FBTztZQUNMMUIsY0FBY0E7WUFDZFUsV0FBV0E7WUFDWEUsWUFBWUE7WUFDWkUsaUJBQWlCQTtZQUNqQkgsY0FBY0E7WUFDZEUsZUFBZUE7WUFDZkUsb0JBQW9CQTtZQUNwQjNCLG1CQUFtQkE7WUFDbkIsRUFBRTtZQUNGWjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBLEVBQUU7WUFDRkM7WUFDQUM7WUFDQSxFQUFFO1lBQ0ZmO1lBQ0FHO1lBQ0FEO1lBQ0FEO1FBQ0Y7a0JBQ0NzQjs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlX2NvbnRleHQvVXJsQ29udGV4dFByb3ZpZGVyLmpzeD80ODAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcmxDb250ZXh0IGZyb20gXCIuL1VybENvbnRleHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IGFwcE5hbWVfYmFzaWMgPSBcIuq4sOuzuFwiO1xuY29uc3QgYXBwTmFtZV9jYWxsID0gXCLsoITtmZRcIjtcbmNvbnN0IGFwcE5hbWVfbWVzc2FnZSA9IFwi66mU7Iuc7KeAXCI7XG5jb25zdCBhcHBOYW1lX2tha2FvdGFsayA9IFwi7Lm07Lm07Jik7YahXCI7XG4vL1xuY29uc3QgZnVuY3Rpb25OYW1lX21ha2VDYWxsID0gXCLsoITtmZTqsbjquLAo67Cc7IugKVwiO1xuY29uc3QgZnVuY3Rpb25OYW1lX2dldENhbGwgPSBcIuyghO2ZlOuwm+q4sCjsiJjsi6ApXCI7XG5jb25zdCBmdW5jdGlvbk5hbWVfbWFrZVZpZGVvQ2FsbCA9IFwi7JiB7IOB7Ya17ZmUIOuwnOyLoFwiO1xuY29uc3QgZnVuY3Rpb25OYW1lX3NlbmRNZXNzYWdlID0gXCLrrLjsnpAg67Cc7IugXCI7XG5jb25zdCBmdW5jdGlvbk5hbWVfc2VlTWVzc2FnZSA9IFwi66y47J6QIOyImOyLoFwiO1xuY29uc3QgZnVuY3Rpb25OYW1lX3Jlc2VuZE1lc3NhZ2UgPSBcIuusuOyekCDsoITri6xcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9yZXNlcnZlTWVzc2FnZSA9IFwi7JiI7JW9IOusuOyekCDrsJzshqFcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9zZW5kSW1nID0gXCLsnbTrr7jsp4AsIOuPmeyYgeyDgSDsoITshqFcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9zZW5kQXVkaW8gPSBcIuyYpOuUlOyYpCDsoITshqFcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9zZW5kUGhvbmVOdW0gPSBcIuyXsOudveyymCDqs7XsnKBcIjtcbmNvbnN0IGZ1bmN0aW9uTmFtZV9rYWthb3RhbGtfZ3JvdWJDaGF0TGVhdmVfUmVqZWN0SW52aXRhdGlvbiA9XG4gIFwi6re466O57LGE7YyF67CpIOy0iOuMgOqxsOu2gCDrsI8g64KY6rCA6riwXCI7XG5jb25zdCBmdW5jdGlvbk5hbWVfa2FrYW90YWxrX2dyb3ViQ2hhdExvY2sgPSBcIuq3uOujueyxhO2MheuwqSDssYTtjIUg7J6F66Cl7LC9IOyeoOq4iO2VmOq4sFwiO1xuXG5mdW5jdGlvbiB1cmxDaGFuZ2VEZXRlY3RlcigpIHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IGFwcE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiYXBwTmFtZVwiKTtcbiAgY29uc3QgbWV0aG9kSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWV0aG9kSWRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGVzY3JpcHRpb25JZFwiKTtcbiAgcmV0dXJuIHsgYXBwTmFtZTogYXBwTmFtZSwgbWV0aG9kSWQ6IG1ldGhvZElkLCBkZXNjcmlwdGlvbklkOiBkZXNjcmlwdGlvbklkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVybENvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBmdW5jdGlvbk5hbWVUZW1wID0gZGVjb2RlVVJJKHBhcmFtcy5mdW5jdGlvbk5hbWUucmVwbGFjZShcIiUyQ1wiLCBcIixcIikpO1xuXG4gIGNvbnNvbGUubG9nKGZ1bmN0aW9uTmFtZVRlbXApO1xuICBmdW5jdGlvbiBmdW5jdGlvbk5hbWVGaWx0ZXIoKSB7XG4gICAgaWYgKGZ1bmN0aW9uTmFtZVRlbXAuc3BsaXQoXCIvXCIpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXR1cm4gZnVuY3Rpb25OYW1lVGVtcC5zcGxpdCgnLycpWzBdO1wiKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbk5hbWVUZW1wLnNwbGl0KFwiL1wiKVswXTtcbiAgICB9XG4gICAgaWYgKGZ1bmN0aW9uTmFtZVRlbXAuaW5jbHVkZXMoXCIlMkZcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiJTJGXCIpO1xuICAgICAgY29uc3QgdGVtcCA9IGZ1bmN0aW9uTmFtZVRlbXAuc3BsaXQoXCIlMkZcIik7XG4gICAgICByZXR1cm4gdGVtcFswXTtcbiAgICB9XG4gICAgaWYgKGZ1bmN0aW9uTmFtZVRlbXAuaW5jbHVkZXMoXCIlMmZcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiJTJGXCIpO1xuICAgICAgZjtcbiAgICAgIGNvbnN0IHRlbXAgPSBmdW5jdGlvbk5hbWVUZW1wLnNwbGl0KFwiJTJmXCIpO1xuICAgICAgcmV0dXJuIHRlbXBbMF07XG4gICAgfVxuICAgIGlmIChmdW5jdGlvbk5hbWVUZW1wLmluY2x1ZGVzKFwiL1wiKSkge1xuICAgICAgY29uc29sZS5sb2coXCIvXCIpO1xuICAgICAgY29uc3QgdGVtcCA9IGZ1bmN0aW9uTmFtZVRlbXAuc3BsaXQoXCIvXCIpO1xuICAgICAgcmV0dXJuIHRlbXBbMF07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbk5hbWVUZW1wO1xuICB9XG4gIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uTmFtZUZpbHRlcigpO1xuXG4gIC8vIGNvbnN0IGZ1bmN0aW9uTmFtZSA9XG4gIC8vICAgZnVuY3Rpb25OYW1lVGVtcC5zcGxpdChcIi9cIikubGVuZ3RoICE9PSAxXG4gIC8vICAgICA/IGZ1bmN0aW9uTmFtZVRlbXAuc3BsaXQoXCIvXCIpWzBdXG4gIC8vICAgICA6IGZ1bmN0aW9uTmFtZVRlbXA7XG5cbiAgY29uc3QgW215QXBwTmFtZSwgc2V0TXlBcHBOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbXlNZXRob2RJZCwgc2V0TXlNZXRob2RJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW215RGVzY3JpcHRpb25JZCwgc2V0TXlEZXNjcmlwdGlvbklkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIChteURlc2NyaXB0aW9uSWQgIT09IFwiXCIpICZcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBgJHtcbiAgICAgICAgICBteURlc2NyaXB0aW9uSWQgIT09IFwiXCJcbiAgICAgICAgICAgID8gYC9kZXNjcmlwdGlvbi8ke2Z1bmN0aW9uTmFtZX0vJHtteUFwcE5hbWV9LyR7bXlNZXRob2RJZH0vJHtteURlc2NyaXB0aW9uSWR9YFxuICAgICAgICAgICAgOiAvLyA/IGAvZGVzY3JpcHRpb24vJHtmdW5jdGlvbk5hbWV9Lz9hcHBOYW1lPSR7bXlBcHBOYW1lfSZtZXRob2RJZD0ke215TWV0aG9kSWR9JmRlc2NyaXB0aW9uSWQ9JHtteURlc2NyaXB0aW9uSWR9YFxuICAgICAgICAgICAgICBgL2Rlc2NyaXB0aW9uLyR7ZnVuY3Rpb25OYW1lfWBcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfSwgW215RGVzY3JpcHRpb25JZF0pO1xuICAvLyB3aGVuIGJhY2sgb3IgZm9yZWhlYWQgYnRuIGNsaWNrZWQsIGZ1bmN0aW9uIHRyaWdlcmVkIGluIHJvb3QgcGFnZVxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwLz90YWI97IOI66Gc7Jq0IOq4sOuKpVxuICAgIGNvbnN0IHVybCA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24pO1xuXG4gICAgcm91dGVyLnB1c2godXJsLCB7IHNjcm9sbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VXJsQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgICAgIG15QXBwTmFtZTogbXlBcHBOYW1lLFxuICAgICAgICBteU1ldGhvZElkOiBteU1ldGhvZElkLFxuICAgICAgICBteURlc2NyaXB0aW9uSWQ6IG15RGVzY3JpcHRpb25JZCxcbiAgICAgICAgc2V0TXlBcHBOYW1lOiBzZXRNeUFwcE5hbWUsXG4gICAgICAgIHNldE15TWV0aG9kSWQ6IHNldE15TWV0aG9kSWQsXG4gICAgICAgIHNldE15RGVzY3JpcHRpb25JZDogc2V0TXlEZXNjcmlwdGlvbklkLFxuICAgICAgICB1cmxDaGFuZ2VEZXRlY3RlcjogdXJsQ2hhbmdlRGV0ZWN0ZXIsXG4gICAgICAgIC8vXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9tYWtlQ2FsbCxcbiAgICAgICAgZnVuY3Rpb25OYW1lX2dldENhbGwsXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9tYWtlVmlkZW9DYWxsLFxuICAgICAgICBmdW5jdGlvbk5hbWVfc2VuZE1lc3NhZ2UsXG4gICAgICAgIGZ1bmN0aW9uTmFtZV9zZWVNZXNzYWdlLFxuICAgICAgICBmdW5jdGlvbk5hbWVfcmVzZW5kTWVzc2FnZSxcbiAgICAgICAgZnVuY3Rpb25OYW1lX3Jlc2VydmVNZXNzYWdlLFxuICAgICAgICBmdW5jdGlvbk5hbWVfc2VuZEltZyxcbiAgICAgICAgZnVuY3Rpb25OYW1lX3NlbmRBdWRpbyxcbiAgICAgICAgZnVuY3Rpb25OYW1lX3NlbmRQaG9uZU51bSxcbiAgICAgICAgLy9cbiAgICAgICAgZnVuY3Rpb25OYW1lX2tha2FvdGFsa19ncm91YkNoYXRMZWF2ZV9SZWplY3RJbnZpdGF0aW9uLFxuICAgICAgICBmdW5jdGlvbk5hbWVfa2FrYW90YWxrX2dyb3ViQ2hhdExvY2ssXG4gICAgICAgIC8vXG4gICAgICAgIGFwcE5hbWVfYmFzaWMsXG4gICAgICAgIGFwcE5hbWVfa2FrYW90YWxrLFxuICAgICAgICBhcHBOYW1lX21lc3NhZ2UsXG4gICAgICAgIGFwcE5hbWVfY2FsbCxcbiAgICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXJsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJVcmxDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJhcHBOYW1lX2Jhc2ljIiwiYXBwTmFtZV9jYWxsIiwiYXBwTmFtZV9tZXNzYWdlIiwiYXBwTmFtZV9rYWthb3RhbGsiLCJmdW5jdGlvbk5hbWVfbWFrZUNhbGwiLCJmdW5jdGlvbk5hbWVfZ2V0Q2FsbCIsImZ1bmN0aW9uTmFtZV9tYWtlVmlkZW9DYWxsIiwiZnVuY3Rpb25OYW1lX3NlbmRNZXNzYWdlIiwiZnVuY3Rpb25OYW1lX3NlZU1lc3NhZ2UiLCJmdW5jdGlvbk5hbWVfcmVzZW5kTWVzc2FnZSIsImZ1bmN0aW9uTmFtZV9yZXNlcnZlTWVzc2FnZSIsImZ1bmN0aW9uTmFtZV9zZW5kSW1nIiwiZnVuY3Rpb25OYW1lX3NlbmRBdWRpbyIsImZ1bmN0aW9uTmFtZV9zZW5kUGhvbmVOdW0iLCJmdW5jdGlvbk5hbWVfa2FrYW90YWxrX2dyb3ViQ2hhdExlYXZlX1JlamVjdEludml0YXRpb24iLCJmdW5jdGlvbk5hbWVfa2FrYW90YWxrX2dyb3ViQ2hhdExvY2siLCJ1cmxDaGFuZ2VEZXRlY3RlciIsInNlYXJjaFBhcmFtcyIsImFwcE5hbWUiLCJnZXQiLCJtZXRob2RJZCIsImRlc2NyaXB0aW9uSWQiLCJVcmxDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInJvdXRlciIsInBhcmFtcyIsImZ1bmN0aW9uTmFtZVRlbXAiLCJkZWNvZGVVUkkiLCJmdW5jdGlvbk5hbWUiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsImZ1bmN0aW9uTmFtZUZpbHRlciIsInNwbGl0IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ0ZW1wIiwiZiIsIm15QXBwTmFtZSIsInNldE15QXBwTmFtZSIsIm15TWV0aG9kSWQiLCJzZXRNeU1ldGhvZElkIiwibXlEZXNjcmlwdGlvbklkIiwic2V0TXlEZXNjcmlwdGlvbklkIiwid2luZG93IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIm9ucG9wc3RhdGUiLCJlIiwidXJsIiwibG9jYXRpb24iLCJwdXNoIiwic2Nyb2xsIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(sc_client)/./components/page_context/UrlContextProvider.jsx\n");

/***/ })

});