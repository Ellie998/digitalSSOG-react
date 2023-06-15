import { useContext, useState } from "react";
import classes from "./SetReservation.module.css";
import { NavLink } from "react-router-dom";
import { PageContext } from "../../../sections/AppMain";

function SetReservation() {
  const {
    functionName,
    appName,
    methodId,
    urlContent,
    descriptionId,
    realFunctionName,
  } = useContext(PageContext);
  const [inputClicked, setInputClicked] = useState(false);

  return (
    <>
      <section className={classes.appMain}>
        <div className={classes.appHeader}>
          <div className={classes.firstNameBox}>홍</div>
          <div className={classes.nameBox}>홍길동</div>
          <div>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className={classes.messages}>
          <div className={classes.sendMessage}>
            <div>오전 10:12</div>
            <div>어디에 계신가요?</div>
          </div>
          <div className={classes.getMessage}>
            <div>사거리 앞에 있습니다.</div>
            <div>오전 10:13</div>
          </div>
        </div>
      </section>
      <div className={classes.backdrop}></div>
      <div className={classes.resBox}>
        <div className={classes.boxTitle}>메시지 예약 전송</div>
        <div className={classes.boxTime}>
          <div className={classes.messageDate}>
            <label>날짜</label>
            <input type="date"></input>
          </div>
          <div className={classes.messageTime}>
            <label>시각</label>
            <input type="time"></input>
          </div>
        </div>
        <div className={classes.boxOption}>
          <input id="reserveLater" type="radio"></input>
          <label htmlFor="reserveLater">전송 시간을 나중에 예약</label>
        </div>
        <div className={classes.boxNav}>
          <div>취소</div>
          <NavLink to={`${urlContent}/${methodId}/${+descriptionId + 1}`}>
            <div data-tooltip="클릭!">완료</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SetReservation;
