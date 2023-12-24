import React, { useState } from "react";
import "./AboutUS.css";
import data from "./dataabout.js";


function AboutUS(){

  const [Index, setIndex] = useState(0);
  
  setTimeout(() => {
    setIndex(Index + 1);
  }, 3000);
  if (Index === 3) {
    setIndex(0);
    console.log('ho to rha h ')
  }
 

    return (
      <div className="AboutusWrapper">
        <div className="Aboutusmainheading">ABOUT US</div>

        <div className="Aboutus-wrapper">
          <div className="Aboutus-vision">
            <div className="Aboutus-body">
              <div className="Aboutus-info">

                <h1>{data[Index].title}</h1>
                <p>{data[Index].context}</p>
                <button className="know-morebtn">Learn more </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default AboutUS;
