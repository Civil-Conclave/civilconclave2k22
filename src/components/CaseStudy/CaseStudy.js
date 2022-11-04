import React from "react";
import FSI from "../../assets/Forest.jpeg";
import FloodDesign from "../../assets/FloodDesign.jpeg";
import "./CaseStudy.css";

export default function CaseStudyleft() {
  function onPress(e) {
    window.open(
      "https://drive.google.com/file/d/1gd-mEHXP10-ft1SlHPPRWssC6lwUmLzC/view?usp=sharing"
    );
  }
  function onPressFlood(e) {
    window.open(
      "https://drive.google.com/file/d/1N74REMpL-o1b93x3xwovsL7APjLruSMM/view?usp=sharing"
    );
  }
  function onPressRules(e) {
    window.open(
      "https://drive.google.com/file/d/14ZDl0AAlQv-qXGa-hP7NMDHIyWBGcYcq/view?usp=sharing"
    );
  }
  return (
    <>
      <div className="casestudy-wrapper">
        <div className="casestudy-main Left">
          <div className="casestudy1">
            <div className="casestudy_context">
              <p className="casestudy_heading">REVAMPING INDIAN FORESTS</p>
              <p className="casestudy_heading2">In association with FSI</p>
              <p className="casestudy_main_write">
                Forest Survey of India (FSI), is the premier national
                organisation under the Union Ministry of Environment and
                Forests, responsible for the task of assessment and monitoring
                of the forest resources of the country on a regular basis. The
                contingents will be provided with a problem related to inventory
                generation , easing out road network inside indian forests, and
                the economic factors related to industrial projects .
              </p>
            </div>
            <div className="casestudy_image">
              <img src={FSI} className="imgg"></img>
            </div>
          </div>
          <div className="casestudy2">
            <button className="casestudy-btn" onClick={onPress}>
              PROBLEM STATEMENT
            </button>
            <button className="text-casestudy" onClick={onPressRules}>
              RULE BOOK
            </button>
          </div>
        </div>
        <div className="casestudy-main Right">
          <div className="casestudy1">
            <div className="casestudy_context">
              <p className="casestudy_heading">
                URBAN FLOOD MANAGEMENT - CHICAGO
              </p>
              <p className="casestudy_heading2">
                In association with Department of Hydrology, IIT Roorkee
              </p>
              <p className="casestudy_main_write">
                Chicago is the third most populous city in the United States of
                America and one of the 40 largest urban areas in the world with
                a 2.7 million population (2020). The city receives an average
                rainfall of 35 inches per year and thunderstorms bring most of
                the city’s rainfall. The case study involves demanding solutions
                related to flood control problems in chicago and the cost
                associated with it.
              </p>
            </div>
            <div className="casestudy_image">
              <img src={FloodDesign} className="imgg"></img>
            </div>
          </div>
          <div className="casestudy2">
            <button className="casestudy-btn" onClick={onPressFlood}>
              PROBLEM STATEMENT
            </button>
            <button className="text-casestudy" onClick={onPressRules}>
              RULE BOOK
            </button>
          </div>
        </div>
        {/* <div className="casestudy-main Left">
          <div className="casestudy1">
            <div className="casestudy_context">
              <p className="casestudy_heading">CHOPRA</p>
              <p className="casestudy_heading2">In association with FSI</p>
              <p className="casestudy_main_write">
                Forest Survey of India (FSI), is the premier national
                organisation under the Union Ministry of Environment and
                Forests, responsible for the task of assessment and monitoring
                of the forest resources of the country on a regular basis. The
                contingents will be provided with a problem related to inventory
                generation , easing out road network inside indian forests, and
                the economic factors related to industrial projects .
              </p>
            </div>
            <div className="casestudy_image">
              <img src={FSI} className="imgg"></img>
            </div>
          </div>
          <div className="casestudy2">
            <button className="casestudy-btn" onClick={onPress}>
              PROBLEM STATEMENT
            </button>
            <button className="text-casestudy" onClick={onPressRules}>
              RULE BOOK
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}
