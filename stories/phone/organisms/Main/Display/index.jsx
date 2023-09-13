/* eslint-disable react/prop-types */

import UrlContext from "components/page_context/UrlContext";
import { useContext } from "react";

import Default from "stories/phone/organisms/Main/Default/index";

import { default as Calls_Basic } from "stories/phone/organisms/Main/Display/Basic/Calls/index";
import { default as Chats_Basic } from "stories/phone/organisms/Main/Display/Basic/Chats/index";
import { default as Calls_KakaoTalk } from "stories/phone/organisms/Main/Display/KakaoTalk/Calls/index";
import { default as Chats_KakaoTalk } from "stories/phone/organisms/Main/Display/KakaoTalk/Chats/index";

function Display() {
  const {
    functionName,
    myAppName,
    myMethodId,
    myDescriptionId,
    //
    appName_basic,
    appName_kakaotalk,
    //
    functionName_makeCall,
    functionName_getCall,
    functionName_makeVideoCall,
    functionName_changeName,
    //
    functionName_sendMessage,
    functionName_seeMessage,
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    //
    functionName_groupChat,
    functionName_leaveChat,
    functionName_chatRoomNameChange,
    functionName_chatRoomImgChange,
    //
    functionName_kakaotalk_groubChatLeave_rejectInvitation,
    functionName_kakaotalk_groubChatLock,
    functionName_kakaotalk_groubChatLeave_quietly,
  } = useContext(UrlContext);

  const appName = myAppName;
  const methodId = myMethodId.toString();
  const descriptionId = myDescriptionId.toString();

  const findFunctionCategory = () => {
    if (
      functionName === functionName_getCall ||
      functionName === functionName_makeCall ||
      functionName === functionName_makeVideoCall ||
      functionName === functionName_changeName
    )
      return "Calls";
    if (
      functionName === functionName_sendMessage ||
      functionName === functionName_seeMessage ||
      functionName === functionName_resendMessage ||
      functionName === functionName_reserveMessage ||
      functionName === functionName_sendImg ||
      functionName === functionName_sendAudio ||
      functionName === functionName_sendPhoneNum ||
      functionName === functionName_kakaotalk_groubChatLeave_rejectInvitation ||
      functionName === functionName_kakaotalk_groubChatLock ||
      functionName === functionName_kakaotalk_groubChatLeave_quietly ||
      functionName === functionName_groupChat ||
      functionName === functionName_leaveChat ||
      functionName === functionName_chatRoomImgChange ||
      functionName === functionName_chatRoomNameChange
    )
      return "Chats";
  };

  const functionCategory = findFunctionCategory();

  switch (appName) {
    case appName_basic:
      return (
        <>
          {functionCategory === "Calls" && (
            <Calls_Basic
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
          {functionCategory === "Chats" && (
            <Chats_Basic
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
        </>
      );
    case appName_kakaotalk:
      return (
        <>
          {functionCategory === "Calls" && (
            <Calls_KakaoTalk
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
          {functionCategory === "Chats" && (
            <Chats_KakaoTalk
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
        </>
      );
    default:
      return <Default />;
  }
}

export default Display;
