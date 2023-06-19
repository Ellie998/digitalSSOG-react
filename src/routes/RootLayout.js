import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

import classes from "./RootLayout.module.css";

function RootLayout({ children }) {
  const htmlElement = document.querySelector("html");
  const sizes = [
    "10px",
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "22px",
    "24px",
    "26px",
  ];
  const divRef = useRef();
  const [fontSize, setfontSize] = useState("16px");

  const location = useLocation();
  const pathArray = location.pathname.split("/");

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollToTopCondition = () => {
      location.search === "" &&
        pathArray.length !== 6 &&
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
    };
    scrollToTopCondition();
  }, [location, pathArray.length]);

  function bigFontBtnClickHandler() {
    const index = sizes.findIndex((element) => element === fontSize);
    console.log(index);
    index !== 8 && setfontSize(sizes[index + 1]);
    index === 8 && setfontSize(sizes[8]);
  }
  function smallFontBtnClickHandler() {
    const index = sizes.findIndex((element) => element === fontSize);
    index !== 0 && setfontSize(sizes[index - 1]);
    index === 0 && setfontSize(sizes[0]);
    console.log(index);
  }
  useEffect(() => {
    htmlElement.style.fontSize = fontSize;
  }, [fontSize, htmlElement.style]);
  return (
    <div className={classes.layout} id="pcScrollTarget" ref={divRef}>
      <Header />
      <Outlet />
      {children}
      <Footer />
      <button
        className={classes.upBtn}
        aria-label="font size up button"
        onClick={scrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
      <button
        className={classes.bigBtn}
        aria-label="font size down button"
        onClick={bigFontBtnClickHandler}>
        <i className="bi bi-plus-circle"></i>
      </button>
      <button
        className={classes.smallBtn}
        aria-label="page scroll to top button"
        onClick={smallFontBtnClickHandler}>
        <i className="bi bi-dash-circle"></i>
      </button>
    </div>
  );
}

export default RootLayout;
