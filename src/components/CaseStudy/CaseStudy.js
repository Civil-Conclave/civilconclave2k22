import React from "react";
import map from "../../assets/map.png";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                faucibus felis, fermentum et eu. Auctor viverra ligula dictum
                lorem sed sed amet, eu. Dictum eu diam mattis odio enim nibh
                placerat consequat.
              </p>
            </div>
            <div className="casestudy_image">
              <img src={map} className="imgg"></img>
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
export function CaseStudyright() {
  return (
    <>
      <div className="casestudy-wrapper">
        <div className="casestudy-main">
          <div className="casestudy1">
            <div className="casestudy_image">
              <img src={map} className="imggr"></img>
            </div>
            <div className="casestudy_context">
              <p className="casestudy_heading">
                RESOLVING THE EFFECT OF VEHICULAR LOADINGS
              </p>
              <p className="casestudy_heading2">In association with XYZ</p>
              <p className="casestudy_main_write">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                faucibus felis, fermentum et eu. Auctor viverra ligula dictum
                lorem sed sed amet, eu. Dictum eu diam mattis odio enim nibh
                placerat consequat.
              </p>
            </div>
          </div>
          <div className="casestudy2">
            <text className="text-casestudyr">RULE BOOK</text>
            <button className="casestudy-btnr">PROBLEM STATEMENT</button>
          </div>
        </div>
      </div>
    </>
  );
}
