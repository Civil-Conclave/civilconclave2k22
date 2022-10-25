import React from "react";
import "./Aboutus.css";
import data from "./data";

export default function Aboutusall() {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-main-container">
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
        <div className="about-main-container">
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
        <div className="about-main-container">
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
