/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import { useState } from "react";
import Flex from "stories/phone/atoms/Flex/index";

import Icon from "stories/phone/atoms/Icon/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import IconBottom from "stories/phone/molecules/IconBottom/index";
import IconBottom_Option from "stories/phone/molecules/IconBottom_Option/index";
import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";

const Container = styled.div``;
const BtnContainer = styled.div`
  border: 1px solid rgb(223, 223, 223);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
`;

const ShareModalContent_Default = ({
  onClick,
  content,
  target = { kakaotalk: false },
}) => {
  const friendListContents = [
    {
      backgroundColor: "rgb(244,244,244)",
      name: "나와의 채팅",
    },
    {
      backgroundColor: "var(--kakao-purple)",
      name: "영희",
    },
    {
      backgroundColor: "var(--kakao-blue)",
      name: "철수",
    },
  ];
  const shareAppList = [
    {
      name: "arrow-right-circle",
      backgroundColor: "rgb(95, 31, 197)",
      description: "Quick Share",
      color: "white",
    },
    {
      name: "chat-fill",
      backgroundColor: "rgb(255, 225, 0)",
      description: "카카오톡",
      color: "rgb(36, 25, 4)",
      target: {
        condition: target.kakaotalk && !isOptionOpen,
        isNextTriger: false,
      },
      option: {
        content: (
          <>
            <TargetBox
              condition={target.kakaotalk}
              style={{ padding: "2px 0" }}>
              카카오톡
            </TargetBox>
            <div style={{ padding: "2px 0" }}>{`카카오톡> 나에게`}</div>
          </>
        ),
        style: { top: "95px" },
      },
    },
    {
      name: "browser-chrome",
      backgroundColor: "white",
      description: "Chrome",
      color: "",
    },
    {
      name: "lock-fill",
      backgroundColor: "rgb(63, 16, 163)",
      description: "보안 폴더",
      color: "white",
    },
    {
      content: "N",
      backgroundColor: "rgb(123, 226, 59)",
      description: "Naver",
      color: "white",
    },
    {
      name: "chat-dots-fill",
      backgroundColor: "rgb(82, 146, 230)",
      description: "메시지",
      color: "white",
    },
    {
      name: "instagram",
      backgroundColor: "rgb(231, 63, 206)",
      description: "Instargram",
      color: "white",
    },
    {
      name: "three-dots",
      backgroundColor: "rgb(233, 233, 233)",
      description: "더보기",
      color: "rgb(100,100,100)",
    },
  ];
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const setOptionClose = () => {
    setIsOptionOpen(false);
  };

  return (
    <Container id="shareModal_content" onClick={onClick}>
      <StackedListWrap onClick={setOptionClose}>
        <Flex
          style={{ fontSize: "0.85rem", justifyContent: "left" }}
          items={[
            <Icon
              name="list"
              key="list"
              style={{
                border: "1px solid rgb(223, 223, 223)",
                padding: "4px",
                borderRadius: "8px",
              }}
            />,
            <div key="share_content">{content}</div>,
          ]}></Flex>
        <Flex
          style={{
            fontSize: "0.85rem",
            justifyContent: "left",
            margin: "10px 0 5px 0",
          }}
          items={[
            <BtnContainer key="copy">복사</BtnContainer>,
            <BtnContainer key="nearby_share">Nearby Share</BtnContainer>,
          ]}></Flex>
      </StackedListWrap>

      <StackedListWrap>
        <NoScrollBar
          style={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "center",
          }}>
          {friendListContents.map((info, i) => (
            <>
              <IconBottom
                style={{ width: "40px" }}
                icon={{
                  name: i !== 0 && "person-fill",
                  content: i === 0 && "나",
                  style: {
                    color: i === 0 ? "rgb(23,23,23)" : "white",
                    backgroundColor: info.backgroundColor,
                    fontSize: "1rem",
                    padding: "4px",
                    width: "24px",
                    height: "24px",
                  },
                }}
                description={{
                  content: info.name,
                  style: { fontSize: "6px", width: "40px" },
                }}></IconBottom>
            </>
          ))}
        </NoScrollBar>
      </StackedListWrap>

      <StackedListWrap
        style={{ paddingTop: "12px", border: "none", display: "flex" }}>
        <NoScrollBar
          style={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "center",
          }}>
          {shareAppList.map((info, i) => (
            <IconBottom_Option
              key={i}
              onClick={() => {
                setIsOptionOpen(true);
              }}
              style={info.option && info.option.style}
              icon={{
                name: null || info.name,
                content: null || info.content,
                backgroundColor: info.backgroundColor,
                color: info.color,
              }}
              description={info.description}
              target={null || info.target}>
              {isOptionOpen && info.option && info.option.content}
            </IconBottom_Option>
          ))}
        </NoScrollBar>
      </StackedListWrap>
    </Container>
  );
};
export default ShareModalContent_Default;