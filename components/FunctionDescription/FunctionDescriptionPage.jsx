"use client";
import { useContext, useEffect, useState } from "react";

import MakeAppList from "./MakeAppList";
import DisplayBox from "../DisplayBox/DisplayBox";
import UrlContext from "../page_context/UrlContext";
import classes from "./FunctionDescriptionPage.module.css";
import HeadMeta from "../HeadMeta";

const data = require("/public/data/functionData.json");

function FunctionDescriptionPage() {
  const { functionName, setMyAppName } = useContext(UrlContext);
  const [detailFunctionObject, setData] = useState([]);

  useEffect(() => {
    data.forEach((categoryObject) => {
      if (
        categoryObject.category !== "new" &&
        categoryObject.category !== "hot"
      ) {
        categoryObject.objects?.forEach((ObjectInArray) => {
          if (
            ObjectInArray.name.slice(2) === functionName.replace("%2C", ",")
          ) {
            setData(ObjectInArray);
            return;
          }
        });
      }
    });
  }, []);

  return (
    <main>
      <HeadMeta
        title={`${functionName} 기능 사용법 - 디지털쏙`}
        description={`${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`}
        url={`https://ssog.pages.dev/description/${functionName}`}></HeadMeta>
      <section className={classes.main_header}>
        <h1 className={classes.title}>
          <b>{detailFunctionObject.name}</b> 기능 소개
        </h1>
        <ul>
          <li className={classes.listBox}>
            <h2>특징</h2>
            <p>{detailFunctionObject.charateristic}</p>
          </li>
          <li className={classes.listBox}>
            <h2>관련 어플</h2>
            <ul>
              {detailFunctionObject.app?.map((dataAppName) => (
                <li
                  key={Math.random()}
                  onClick={() => setMyAppName(dataAppName)}>
                  {dataAppName}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      <section className={classes.main}>
        <h2>
          <b className={classes.title}>{detailFunctionObject.name}</b> 기능 실행
          방법
        </h2>
        <MakeAppList functionMethods={detailFunctionObject.method} />
        <div className={classes.displayBox}>
          <p className={classes.subTitle}>
            ❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든
            화면입니다.
          </p>
          <DisplayBox></DisplayBox>
          <div className={classes.flexWrap}></div>
        </div>
      </section>
    </main>
  );
}

export default FunctionDescriptionPage;