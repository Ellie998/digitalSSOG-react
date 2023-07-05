import { useContext, useState } from "react";
import { PageContext } from "../../sections/AppMain";

import classes from "./KakaoAppMain.module.css";
import MakeList from "../Basic/components/MakeList";
import Link from "next/link";
import UrlContext from "../../../page_context/UrlContext";
import NextDescriptionLink from "../../../NextDescriptionLink";

function KakaoAppMain({ navTriger, tab }) {
  const { urlContent } = useContext(UrlContext);
  const [tabName, setTabName] = useState(tab);

  const friendListContents = [
    <MakeList
      listStyle={"grid_oneLine"}
      item1={{
        className: "iconWrap_background--skyBlue",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "진수",
      }}
      item3={{
        className: "subInfo_border--grey",
        content: "상태메시지 올리기",
      }}></MakeList>,
    <MakeList
      listStyle={"grid_twoLine"}
      item1={{
        className: "iconWrap_background--purple",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "영희",
      }}
      subItem2={{
        className: "subTitle",
        content: "행복하세요",
      }}></MakeList>,
    <MakeList
      listStyle={"grid_oneLine"}
      item1={{
        className: "iconWrap_background--blue",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "철수",
      }}
      item3={{
        className: "profile_musicBox",
        content: "밤이 깊었네-노..",
      }}></MakeList>,
  ];
  const chatListContents = [
    <MakeList
      listStyle={"grid_twoLine"}
      item1={{
        className: "iconWrap_background--purple",
        content: <i className="bi bi-people-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "그룹채팅방1",
      }}
      item3={{
        className: "info",
        content: "오전 8:09",
      }}
      subItem2={{
        className: "subTitle",
        content: "퇴사합니다.",
      }}></MakeList>,
    <MakeList
      listStyle={"grid_twoLine"}
      item1={{
        className: "iconWrap_background--purple",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "영희",
      }}
      item3={{
        className: "info",
        content: "오후 2:05",
      }}
      subItem2={{
        className: "subTitle",
        content: "네.",
      }}
      subItem3={{
        className: "subInfo",
        content: "1",
      }}></MakeList>,
    <MakeList
      listStyle={"grid_twoLine"}
      item1={{
        className: "iconWrap_background--purple",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "철수",
      }}
      item3={{
        className: "info",
        content: "오전 9:42",
      }}
      subItem2={{
        className: "subTitle",
        content: "아모티콘을 보냈습니다.",
      }}></MakeList>,
  ];

  return (
    <div className={classes.layout}>
      <div className={classes.mainLayout}>
        <div className={classes.main_header}>
          {tabName === "friend" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "친구" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-search"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-person-plus"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-music-note-beamed"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "chat" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "채팅" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-search"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-plus-circle"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "openChat" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "오픈채팅" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-plus-circle"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-chat"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "shopping" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "쇼핑" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-bag-check"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "ETC" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "더보기" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-search"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-upc-scan"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
        </div>
        {/* main */}
        {tabName === "friend" && (
          <div className={classes.list}>
            <div className={classes.border_topbottom}>
              {friendListContents[0]}
            </div>
            <div className={classes.profile_message}>친구 2</div>
            {
              <NextDescriptionLink nextOption={navTriger === "profile_friend"}>
                {friendListContents[1]}
              </NextDescriptionLink>
            }
            {
              <NextDescriptionLink nextOption={navTriger === "profile_friend"}>
                {friendListContents[2]}
              </NextDescriptionLink>
            }
          </div>
        )}
        {tabName === "chat" && (
          <div className={classes.list}>
            {navTriger === "chatList_group" && (
              <NextDescriptionLink nextOption={navTriger === "chatList_group"}>
                {chatListContents[0]}
              </NextDescriptionLink>
            )}
            {chatListContents[1]}
            {chatListContents[2]}
          </div>
        )}
        {tabName === "openChat" && <div className={classes.list}></div>}
        {tabName === "shopping" && <div className={classes.list}></div>}
        {tabName === "ETC" && <div className={classes.list}></div>}
      </div>
      <div className={classes.navAppLayout}>
        <div onClick={() => setTabName("friend")}>
          <i
            className={
              tabName === "friend" ? "bi bi-person-fill" : "bi bi-person"
            }></i>
        </div>
        <div onClick={() => setTabName("chat")}>
          <i
            className={
              tabName === "chat" ? "bi bi-chat-fill" : "bi bi-chat"
            }></i>
        </div>
        <div onClick={() => setTabName("openChat")}>
          <i
            className={
              tabName === "openChat"
                ? "bi bi-chat-heart-fill"
                : "bi bi-chat-heart"
            }></i>
        </div>
        <div onClick={() => setTabName("shopping")}>
          <i
            className={
              tabName === "shopping" ? "bi bi-handbag-fill" : "bi bi-handbag"
            }></i>
        </div>
        <div onClick={() => setTabName("ETC")}>
          <i
            className={
              tabName === "ETC" ? "bi bi-three-dots" : "bi bi-three-dots"
            }></i>
        </div>
      </div>
    </div>
  );
}

export default KakaoAppMain;
