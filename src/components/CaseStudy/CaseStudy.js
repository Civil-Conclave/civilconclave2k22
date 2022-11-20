import React from "react";
import FSI from "../../assets/Forest.jpeg";
import FloodDesign from "../../assets/FloodDesign.jpeg";
import SoilCaseStudy from "../../assets/SoilCaseStudy.jpeg";
import Structural from "../../assets/Structural.jpeg";
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
  function onPressStructural(e) {
    window.open(
      "https://drive.google.com/file/d/1I74RTYqsM97QSh8mCbWOIi058q0TfQpi/view?usp=sharing"
    );
  }
  function onPressGril(e) {
    window.open(
      "https://drive.google.com/file/d/1vo9bdQ2YqIqYFWJiGnPZqhPdNNpZIT_j/view?usp=sharing"
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
        <div className="casestudy-main Left">
          <div className="casestudy1">
            <div className="casestudy_context">
              <p className="casestudy_heading">
                SAFE BEARING CAPACITY ANALYSIS
              </p>
              <p className="casestudy_heading2">In association with GRIL</p>
              <p className="casestudy_main_write">
                Quality is not an act; it's a habit. The difficulties
                encountered in constructing infrastructure start from the
                foundations. With confidence, it is critical for an engineer to
                build a firm foundation before designing and executing concepts.
                Although reliable, conventional methods for ground improvement
                do not always fit into the time equation. Given the large domain
                and number of projects on the horizon, the magnitude of the
                viability of integrating innovative methodologies is worth
                emphasizing. GRI anticipates newer and innovative ideas from
                future Industry wizards.
              </p>
            </div>
            <div className="casestudy_image">
              <img src={SoilCaseStudy} className="imgg"></img>
            </div>
          </div>
          <div className="casestudy2">
            <button className="casestudy-btn" onClick={onPressGril}>
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
              <p className="casestudy_heading">ON SITE CONCRETE TECHNOLOGY</p>
              <p className="casestudy_heading2">In association with ONGC</p>
              <p className="casestudy_main_write">
                Concrete is the principal material used in all building
                procedures. Concrete strength is critical to the structure's
                longevity. Have you ever considered the scope and volume of
                on-site manual interventions, such as monitoring and even
                completing specific trivial but vital tasks? Manual requirements
                might be unpredictable, displaying a lack of confidence while
                taxing financial and time resources. Developing on-site
                solutions that eliminate manual interventions utilizing newer
                technology such as I.O.T will gain traction in the future. The
                Civil Conclave provides you with the platform to develop
                industry-relevant, innovative ideas with a focus on technology.
              </p>
            </div>
            <div className="casestudy_image">
              <img src={Structural} className="imgg"></img>
            </div>
          </div>
          <div className="casestudy2">
            <button className="casestudy-btn" onClick={onPressStructural}>
              PROBLEM STATEMENT
            </button>
            <button className="text-casestudy" onClick={onPressRules}>
              RULE BOOK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
