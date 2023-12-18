import React from "react";
import "./AboutConclave.css";
import Logo from "../../assets/aboutconclavelogo.png";
import Buildings from "../../assets/WhiteBuildings.png";

function AboutConclave() {
  return (
    <div className="aboutWrapper">
      <div className="aboutMaterial">
        <div className="aboutLogo">
          <img src={Logo} alt="Logo" className="aboutLogoImg" />
        </div>
        <div className="aboutInfo">
          <p className="info">
            The Inter-IIT Civil Conclave is an annual technical event hosted by
            the Civil Engineering Consortium,IIT Roorkee which invites
            passionate civil engineering students from across all the IITs to
            compete and showcase their expertise in varied domains of Civil
            Engineering and gives them a forum to network with Civil Engineering
            Enthusiasts sharing the same interests and aspirations.
            <br />
            <br />
            The Conclave was conducted for the first time in 2019,and with the
            first two editions receiving massive success, we're back with the
            third edition, with much more diversified and enriching events lined
            up.
            <br />
            <br />
            With a variety of innovative and exciting events, we uphold the
            legacy of conducting inter IIT Civil events with the best ideas and
            creativity from every Civil enthusiast from Best institutions of the
            nation adding more creative and mind tinkering events this year
          </p>
        </div>
      </div>
      <div className="bgBuildings">
        <img src={Buildings} className="imgBgBuildings" alt="Background" />
      </div>
    </div>
  );
}

export default AboutConclave;
