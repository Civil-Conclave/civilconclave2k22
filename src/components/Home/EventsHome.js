import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Event1 from "../../assets/casestudy.png";
import Event2 from "../../assets/research.png";
import Event3 from "../../assets/stgc.png";
import Event4 from "../../assets/Event4.png";
import Event5 from "../../assets/Event5.png";
import Event6 from "../../assets/workshop.png";
import Event7 from "../../assets/unsplash_gcsNOsPEXfs.png";
import "./EventsHome.css";

function Events() {
  const ref = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    console.log("uselayout triggered")
    console.log("width:",width);
  }, []);



  const [prevPos, setPrevPos] = useState(0.1 * width);
  const [nextPos, setNextPos] = useState(0.9 * width);
  useEffect(() => {
    setPrevPos(0.05 * width);
    setNextPos(0.9 * width);
    console.log("useeffect triggered")
  }, [width]);

  const scrollerPrev = (scrollOffset) => {
    // console.log("prevpos is: ", prevPos)
    if (prevPos < 76) {
      return;
    }
    console.log(ref.current.scrollLeft);
    ref.current.scrollLeft += scrollOffset;
    console.log("scrollLeft is", ref.current.scrollLeft);
    setPrevPos(prevPos - width / 4);
    setNextPos(nextPos - width / 4);
    setIsActive(true);
  };
  const scrollerNext = (scrollOffset) => {
    if (nextPos === 1.4000000000000001 * width) {
      return;
    }
    console.log(nextPos / width);
    console.log(ref.current);
    ref.current.scrollLeft += scrollOffset;
    console.log("scrollLeft is", ref.current.scrollLeft);
    setPrevPos(prevPos + width / 4);
    setNextPos(nextPos + width / 4);
    setIsActive(true);
  };

  return (
    <div className="bigcontainer" ref={ref}>
      <button
        className="prevButton"
        style={{
          left: prevPos,
        }}
        onClick={() => scrollerPrev(-width / 4)}
      ></button>
      <button
        className="nextButton"
        style={{
          left: nextPos,
        }}
        onClick={() => scrollerNext(width / 4)}
      ></button>
      <div className="eventHomeContainer">
        <div className="sec sec1">
          <img className="eventImages" src={Event1} alt="/" />
          <div className="eventName event1"><span className="bullet">•</span> Case Study</div>
        </div>
        <div className="sec 2">
          <img className="eventImages" src={Event2} alt="/" />
          <div className="eventName event2"><span className="bullet">•</span> Research Renaissance</div>
        </div>
        <div className="sec 3">
          <img className="eventImages" src={Event3} alt="/" />
          <div className="eventName event3"><span className="bullet">•</span> Seek the civil geek</div>
        </div>
        <div className="sec 4">
          <img className="eventImages" src={Event4} alt="/" />
          <div className="eventName event4"><span className="bullet">•</span> Design Different</div>
        </div>
        <div className="sec 5">
          <img className="eventImages" src={Event5} alt="/" />
          <div className="eventName event5"><span className="bullet">•</span> Guest Lectures</div>
        </div>
        <div className="sec 6">
          <img className="eventImages" src={Event7} alt="/" />
          <div className="eventName event6"><span className="bullet">•</span> Innovista</div>
        </div>
        <div className="sec 7">
          <img className="eventImages" src={Event6} alt="/" />
          <div className="eventName event7"><span className="bullet">•</span> Workshop</div>
        </div>
      </div>
    </div>
  );
}

export default Events;
