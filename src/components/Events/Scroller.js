import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Scroller.css";
import BackCircle from "../../assets/BackCircle.png";
import BlueCircle from "../../assets/Bluecircle.png";
import { CalcScroll } from "../General/CalcScroll.js";

import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

function Scroller(props) {
  const [scroll, setScroll] = React.useState("");

  function getScrollPercent() {
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";

    var scrollPercent = Math.round(
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    );

    setScroll(isNaN(scrollPercent) ? "" : scrollPercent);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", getScrollPercent);

    return () => {
      window.removeEventListener("scroll", getScrollPercent);
    };
  }, []);
  // const [percentY, setPercentY] = useState(0);
  // const { scrollX, scrollY } = CalcScroll();
  // console.log(scrollX, scrollY);
  // const [width, height] = useWindowSize();

  // console.log(scroll, "scrollPercent");
  return (
    <div className="fixedScrollWrapper">
      <div className="scrollWrapper">
        <img src={BackCircle} className="backCircle" alt="/" />
        <div className="eventType">{props.currevent}</div>
        <img
          src={BlueCircle}
          className="blueCircle1"
          id="bc1"
          alt="/"
          style={{
            left: props.scrollval,
            width: "20%",
          }}
        /> 
        <img src={BlueCircle} className="blueCircle2" alt="/" />
         <img src={BlueCircle} className="blueCircle3" alt="/" />
      </div>
    </div>
  );
}

export default Scroller;
