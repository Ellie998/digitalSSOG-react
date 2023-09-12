/* eslint-disable react/prop-types */
import Flex from "stories/phone/atoms/Flex/index";
import Icon from "stories/phone/atoms/Icon/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import Phone from "stories/phone/molecules/Phone/index";
import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import ImgSelectBox from "../../atoms/ImgSelectBox/index";
import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";
import { useState } from "react";
import ImgSelectedBox from "../../atoms/ImgSelectedBox/index";

const SelectFile = ({ num = 13, target = { send: false } }) => {
  const [choicedImgs, setChoicedImgs] = useState([]);
  const imgNum = [];
  for (let i = 0; i < num; i++) {
    imgNum.push(i);
  }
  function imgCheckHandler(event) {
    let updatedValue;
    updatedValue = event.target.id;
    event.target.checked === true &&
      setChoicedImgs((prevObject) => [...prevObject, updatedValue]);

    event.target.checked === false &&
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== updatedValue);
        return [...prevObject];
      });
  }
  return (
    <Phone>
      <StackedList_Profile
        profile={{ name: "x-lg" }}
        title={{
          content: (
            <Flex
              style={{ justifyContent: "left" }}
              items={[
                <div key="1">전체보기</div>,
                <TargetBox key="2" style={{ display: "flex" }}>
                  <div style={{ color: "rgb(138, 138, 138)" }}>{num}</div>
                  <Icon name="caret-down-fill" style={{ fontSize: "6px" }} />
                </TargetBox>,
              ]}
            />
          ),
        }}
        info={{
          content: choicedImgs.length >= 1 && (
            <TargetBox
              style={{
                display: "flex",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
              condition={target.send}>
              <div style={{ color: "rgb(255, 204, 0)", marginRight: "4px" }}>
                {choicedImgs.length}
              </div>
              <div>전송</div>
            </TargetBox>
          ),
          style: { gridColumn: "5/7", marginLeft: "auto" },
        }}
      />
      {choicedImgs.length >= 1 && (
        <NoScrollbar
          style={{ display: "flex", width: "max-content" }}
          height={"50px"}>
          {choicedImgs.map((id) => (
            <ImgSelectedBox
              style={{ margin: "5px", width: "38px" }}
              key={id}
              id={id}
              onClick={(e) => {
                setChoicedImgs((prevObject) => {
                  prevObject = prevObject.filter(
                    (item) => `choiced_` + item !== e.target.id
                  );
                  return [...prevObject];
                });
              }}
            />
          ))}
        </NoScrollbar>
      )}
      <NoScrollbar
        height={choicedImgs.length >= 1 ? "195px" : "245px"}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,auto)",
          rowGap: "4px",
        }}>
        {imgNum.map((num) => (
          <ImgSelectBox
            choicedImgs={choicedImgs}
            key={num}
            id={num}
            style={{ width: "55px", height: "55px" }}
            onChangeHandler={imgCheckHandler}
          />
        ))}
      </NoScrollbar>
      <Flex
        items={[
          <TargetBox key="1">
            <label htmlFor="group_img" style={{ display: "flex" }}>
              <input id="group_img" type="checkbox" />
              <div>사진 묶어보내기</div>
            </label>
          </TargetBox>,
          <Flex
            key="2"
            items={[
              <Icon key="1" name="magic" />,
              <Icon key="2" name="three-dots" />,
            ]}
          />,
        ]}
      />
    </Phone>
  );
};

export default SelectFile;
