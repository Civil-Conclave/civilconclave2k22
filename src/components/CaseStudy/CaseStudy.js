import React from "react";
import FSI from "../../assets/Forest.jpeg";
import "./CaseStudy.css";

export default function CaseStudyleft() {
  return (
    <>
      <div className="casestudy-wrapper">
        <div className="casestudy-main">
          <div className="casestudy1">
            <div className="casestudy_context">
              <p className="casestudy_heading">
                RESOLVING THE EFFECT OF VEHICULAR LOADINGS
              </p>
              <p className="casestudy_heading2">In association with XYZ</p>
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
            <button className="casestudy-btn">PROBLEM STATEMENT</button>
            <text className="text-casestudy">RULE BOOK</text>
          </div>
        </div>
      </div>
    </>
  );
}
