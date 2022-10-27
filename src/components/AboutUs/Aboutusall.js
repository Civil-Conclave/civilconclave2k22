import React, { useRef, useEffect } from "react";
import "./Aboutus.css";
import data from "./data";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Aboutusall() {
  const control = useAnimation();
  const { scrollYProgress } = useScroll();
  const [lastRef, inView] = useInView();
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
      scaleX: scrollYProgress,
    },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      console.log("View mein hai");
      control.start("visible");
    } else {
      console.log("View mein nhi hai");
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <div className="about-wrapper">
        <div className="about-main-container leftSide">
          <motion.div
            className="aboutBackground fillLeft"
            style={{ scaleX: scrollYProgress }}
          ></motion.div>
          <div className="about-context">
            <div className="about-heading-main">
              <h1 className="about-heading">{data[0].title}</h1>
            </div>
            <p className="about-information">{data[0].context}</p>
          </div>
          <div className="about-image">
            <img src={data[0].image} className="about-png"></img>
          </div>
        </div>
        <div className="about-main-container rightSide">
          <motion.div
            className="aboutBackground fillRight"
            style={{ scaleX: scrollYProgress }}
          ></motion.div>
          <div className="about-context">
            <div className="about-heading-main">
              <h1 className="about-heading">{data[1].title}</h1>
            </div>
            <p className="about-information">{data[1].context}</p>
          </div>
          <div className="about-image">
            <img src={data[1].image} className="about-png"></img>
          </div>
        </div>
        <div className="about-main-container leftSide" ref={lastRef}>
          <motion.div
            className="aboutBackground fillLeft"
            style={{ scaleX: scrollYProgress }}
          ></motion.div>
          <div className="about-context">
            <div className="about-heading-main">
              <h1 className="about-heading">{data[2].title}</h1>
            </div>
            <p className="about-information">{data[2].context}</p>
          </div>
          <div className="about-image">
            <img src={data[2].image} className="about-png"></img>
          </div>
        </div>
      </div>
    </>
  );
}
