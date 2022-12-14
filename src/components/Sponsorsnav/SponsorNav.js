import React from "react";
import sponnavdata from "./datasponsornav";
import "./sponsornav.css";
const SponsorNav = () => {
  return (
    <div className="sponsornavWrapper">
      <div className="sponsornav-header">
        <h1>SPONSORS</h1>
        <div className="spon-line line1"></div>
        <div className="spon-line line2"></div>
      </div>
      <div className="sponnav-container">
        {sponnavdata.map((e) => {
          return (
            <>
              <div className="sponnavbody">
                <div className="sponnavbody-img">
                  <img src={e.url} alt="" />
                </div>
                <h1>{e.title}</h1>
                <p>{e.body}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorNav;
