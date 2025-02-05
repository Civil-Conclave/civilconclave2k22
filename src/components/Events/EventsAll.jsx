import React, { useState, useRef, useEffect } from "react";
import "./EventsAll.css";
import data from "./data";
import { motion, useScroll } from "framer-motion";
import Scroller from "./Scroller.js";
import HeaderEvents from "./HeaderEvents.js";
import { useInView } from "react-intersection-observer";
import Footer from "../General/Footer.js";
import NewFooter from "../General/newFooter.js";
const Events = (props) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  const headerProps = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };
  const footerProps = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const callbackFunction = (entries) => {
    const [entry] = entries;
    // console.log("myRef kth is ", entry);
    if (entry.isIntersecting) {
      setCurrevent(entry.target.textContent);
      // yeh textContent vaali cheez console se nikal li maine
    }
  };

  const callbackFunctionHeader = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setHeaderView(true);
      setShow(true);
    } else {
      setHeaderView(false);
      if (footerView) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  const callbackFunctionFooter = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setFooterView(true);
    } else {
      setFooterView(false);
    }
  };

  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);
  const myRef7 = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [currevent, setCurrevent] = useState("");
  const [headerView, setHeaderView] = useState(true);
  const [footerView, setFooterView] = useState(false);
  const [show, setShow] = useState(false);
  console.log("footerView is ", footerView);
  console.log(footerRef);

  useEffect(() => {
    const observer1 = new IntersectionObserver(callbackFunction, options);
    if (myRef1.current) observer1.observe(myRef1.current);
    return () => {
      if (myRef1.current) observer1.unobserve(myRef1.current);
    };
  }, [myRef1, options]);

  useEffect(() => {
    const observer2 = new IntersectionObserver(callbackFunction, options);
    if (myRef2.current) observer2.observe(myRef2.current);

    return () => {
      if (myRef2.current) observer2.unobserve(myRef2.current);
    };
  }, [myRef2, options]);

  useEffect(() => {
    const observer3 = new IntersectionObserver(callbackFunction, options);
    if (myRef3.current) {
      observer3.observe(myRef3.current);
    }
    return () => {
      if (myRef3.current) observer3.unobserve(myRef3.current);
    };
  }, [myRef3, options]);
  useEffect(() => {
    const observer4 = new IntersectionObserver(callbackFunction, options);
    if (myRef4.current) observer4.observe(myRef4.current);

    return () => {
      if (myRef4.current) observer4.unobserve(myRef4.current);
    };
  }, [myRef4, options]);
  useEffect(() => {
    const observer5 = new IntersectionObserver(callbackFunction, options);
    if (myRef5.current) observer5.observe(myRef5.current);

    return () => {
      if (myRef5.current) observer5.unobserve(myRef5.current);
    };
  }, [myRef5, options]);

  useEffect(() => {
    const observer6 = new IntersectionObserver(callbackFunction, options);
    if (myRef6.current) observer6.observe(myRef6.current);

    return () => {
      if (myRef6.current) observer6.unobserve(myRef6.current);
    };
  }, [myRef6, options]);
  useEffect(() => {
    const observer7 = new IntersectionObserver(callbackFunction, options);
    if (myRef7.current) observer7.observe(myRef7.current);

    return () => {
      if (myRef7.current) observer7.unobserve(myRef7.current);
    };
  }, [myRef7, options]);
  useEffect(() => {
    const observerHeader = new IntersectionObserver(
      callbackFunctionHeader,
      headerProps
    );
    if (headerRef.current) observerHeader.observe(headerRef.current);

    return () => {
      if (headerRef.current) observerHeader.unobserve(headerRef.current);
    };
  }, [headerRef, headerProps]);
  useEffect(() => {
    const observerFooter = new IntersectionObserver(
      callbackFunctionFooter,
      footerProps
    );
    if (footerRef.current) observerFooter.observe(footerRef.current);

    return () => {
      if (footerRef.current) observerFooter.unobserve(footerRef.current);
    };
  }, [footerRef, footerProps]);

  function handleClick(e) {
    window.open("https://drive.google.com/file/d/1DMGycWmHIU7tcl3nMmq7r1WgAx2sPpkL/view?usp=drive_link");
  }
  function handleClickCaseS(e) {
    window.open(
      "https://drive.google.com/file/d/10Pav9-7jL8W-tLVCWAD-egoq7mgr4EPG/view?usp=sharing"
    );
  }
  function handleClickResearch(e) {
    window.open(
      "https://drive.google.com/file/d/10V00FgfXxbAtlWfVn0fbhkM6JHx5ZmdP/view?usp=sharing"
    );
  }
  function handleClickStcg(e) {
    window.open(
      "https://drive.google.com/file/d/10KI4KZLCDN-vmyeAJY7rbMLhFaMDA1zN/view?usp=sharing"
    );
  }
  function handleClickDesign(e) {
    window.open(
      "https://drive.google.com/file/d/10I_MAmfnE_jH1YXDGT13e_deMDXCjfBv/view?usp=sharing"
    );
  }
  function innovistasubmit(e) {
    window.open(
      "https://drive.google.com/file/d/10mZWZepxH2vLqTrmYXirGAtmSBgela4M/view?usp=sharing"
    );
  }

  function handleSubmitDesign(e) {
    window.open("https://drive.google.com/file/d/1HdOr9lgIozWbaqj5gT5CZjwrXNGrqSgG/view?usp=drive_link");
  }

  function casesubmit(e) {
    window.open(
      "https://drive.google.com/file/d/1Z4AJG3qBc-vFTxQ4hh2bNWye64_pGFDT/view?usp=sharing"
    );
  }
  function handleClickCase6(e) {
    window.open(
      "https://drive.google.com/file/d/1ii4OiGwNJd8gx6kgIh50iAHLjMbGbtrf/view?usp=drive_link"
    );
  }
  function handleClickCaseStudy(e) {
    window.open(
      "/casestudy"
    );
  }
  return (
    <div className="wholeEventsContainer">
      <div className="headerContainer" ref={headerRef}>
        <HeaderEvents
          ref1={myRef1}
          ref2={myRef2}
          ref3={myRef3}
          ref4={myRef4}
          ref5={myRef5}
          ref6={myRef6}
        ></HeaderEvents>
      </div>
      <div className="EventsAllWrapper">
        <div className="Scroller" style={{ display: show ? "none" : "block" }}>
          <Scroller currevent={currevent}></Scroller>
        </div>
        <div className="allEvents" id="allEvents">
          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[0].title}</h3>
              <p>
                {data[0].body1}
                <br />
                <br />
                {data[0].body2}
                <br />
                <br />
                {data[0].body3}
                <br />
                <br />
                {data[0].body4}
              </p>
              <div className="caseStudyButtons">
                <button style={{ cursor: 'pointer' }} className="submitButton" onClick={handleClickCaseS}>
                  Rulebook
                </button>
                {/* <button style={{cursor:'pointer'}} className="submitButton" onClick={handleClickCaseStudy}>
                  View Problem Statements
                </button> */}
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="rightImg">
              <h1 ref={myRef1}>{data[0].imgtitle}</h1>
              <img src={data[0].url} alt="" style={{ height: '16rem', width: '22rem', objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>
          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[1].title}</h3>
              <p>
                {data[1].body1}
                <br />
                <br />
                {data[1].body2}
                <br />
                <br />
                {data[1].body3}
                <br />
                <br />
                {data[1].body4}
              </p>
            </div>
            <div className="vertical-line"></div>
            <div className="rightImg">
              <h1 ref={myRef2}>{data[1].imgtitle}</h1>
              <img src={data[1].url} alt="" style={{ height: '16rem', width: '16rem', objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>
          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[2].title}</h3>
              <p>
                {data[2].body1}
                <br />
                <br />
                {data[2].body2}
                <br />
                <br />
                {data[2].body3}
                <br />
                <br />
                {data[2].body4}
              </p>
              <div className="caseStudyButtons">
                <button style={{ cursor: 'pointer' }} className="submitButton" onClick={handleClickResearch}>
                  Rulebook
                </button>
                {/* <button style={{cursor:'pointer'}}
                  className="submitButton"
                  onClick={handleClickResearchSubmit}
                >
                  Click here to Submit
                </button> */}
              </div>
            </div>
            <div className="rightImg">
              <h1 ref={myRef3}>{data[2].imgtitle}</h1>
              <img src={data[2].url} alt="" style={{ height: '16rem', width: '16rem', objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>
          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[3].title}</h3>
              <p>
                {data[3].body1}
                <br />
                <br />
                {data[3].body2}
                <br />
                <br />
                {data[3].body3}
                <br />
                <br />
                {data[3].body4}
              </p>
              {/* <button style={{cursor:'pointer'}} className="submitButton" onClick={handleClickStcg}>
                Rulebook
              </button> */}
            </div>
            <div className="vertical-line"></div>
            <div className="rightImg">
              <h1 ref={myRef4}>{data[3].imgtitle}</h1>
              <img src={data[3].url} alt="" style={{ height: '16rem', width: '16rem', objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>
          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[4].title}</h3>
              <p>
                {data[4].body1}
                <br />
                <br />
                {data[4].body2}
                <br />
                <br />
                {data[4].body3}
                <br />
                <br />
                {data[4].body4}
              </p>
              <div className="caseStudyButtons">
                <button style={{ cursor: 'pointer' }} className="submitButton" onClick={handleSubmitDesign}>
                  Rulebook
                </button>

                {/* <button style={{cursor:'pointer'}}
                  className="submitButton"
                  onClick={handleProblemStatements}
                >
                  View Problem Statements
                </button> */}
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="rightImg">
              <h1 ref={myRef5}>{data[4].imgtitle}</h1>
              <img src={data[4].url} alt="" style={{ height: '16rem', width: '16rem', objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>
          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[5].title}</h3>
              <p>
                {data[5].body1}
                <br />
                <br />
                {data[5].body2}
                <br />
                <br />
                {data[5].body3}
                <br />
                <br />
                {data[5].body4}
              </p>
              <div className="caseStudyButtons">
                <button style={{ cursor: 'pointer' }} className="submitButton" onClick={handleClickDesign}>
                  Rulebook
                </button>
                {/* <button style={{cursor:'pointer'}} className="submitButton" onClick={handleClick}>
                  View Problem Statements
                </button>
                <button style={{cursor:'pointer'}} className="submitButton" onClick={handleClickDesign}>
                  Submit Here
                </button> */}
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="rightImg">
              <h1 ref={myRef6}>{data[5].imgtitle}</h1>
              <img src={data[5].url} alt="" style={{ height: '16rem', width: '16rem', objectFit: 'contain', borderRadius: 12 }}  />
            </div>
          </div>


          <div className="whole-eventscontainer">
            <div className="eventHeadingNew">
              <h3>{data[6].title}</h3>
              <p>
                {data[6].body1}
                <br />
                <br />
                {data[6].body2}
                <br />
                <br />
                {data[6].body3}
                <br />
                <br />
                {data[6].body4}
              </p>
              <div className="caseStudyButtons">
                {/* <button style={{cursor:'pointer'}} className="submitButton" onClick={innovistasubmit}>
                  Click Here to Submit
                </button> */}
                <button style={{ cursor: 'pointer' }} className="submitButton" onClick={innovistasubmit}>
                  Rulebook
                </button>
                {/* <button style={{cursor:'pointer'}} className="submitButton" onClick={handleClick}>
                  View Problem Statements
                </button> */}
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="rightImg">
              <h1 ref={myRef7}>{data[6].imgtitle}</h1>
              <img src={data[6].url} alt="" style={{ height: '16rem', width: '16rem', objectFit: 'contain', borderRadius: 12 }} />
            </div>
          </div>

        </div>
      </div>
      <div className="contentFooter" ref={footerRef}>
        {/* <Footer></Footer> */}
        <NewFooter/>
      </div>
    </div>
  );
};
export default Events;
