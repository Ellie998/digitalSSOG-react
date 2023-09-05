// components/NoScrollLink.tsx
import Link from "next/link";
// import React, { useContext, useEffect } from "react";
// import UrlContext from "./page_context/UrlContext";

const NoScrollLink = ({ children, href, tooltip }) => {
  // const { urlChangeDetecter } = useContext(UrlContext);
  // const { appName, descriptionId, methodId } = urlChangeDetecter();
  const scrollY = localStorage.getItem("scrollY");

  // appName !== null &&
  //   useEffect(() => {
  //     window.scrollTo({ top: scrollY, behavior: "instant" });
  //     console.log("prevent scroll");
  //   }, []);

  return (
    <Link
      href={href ? href : ""}
      scroll={false}
      data-tooltip={tooltip ? tooltip : null}
      onClick={() => {
        localStorage.setItem("scrollX", window.scrollX);
        localStorage.setItem("scrollY", window.scrollY);
        window.scrollTo({ top: scrollY, behavior: "instant" });
        // console.log("prevent scroll");
      }}>
      {children}
    </Link>
  );
};

export default NoScrollLink;
