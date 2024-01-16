import React, { useState } from "react";
import "./AboutUS.css";
import data from "./dataabout.js";
import { Link } from "react-router-dom";


function AboutUS(){

  const [Index, setIndex] = useState(0);
  
  setTimeout(() => {
    if (Index!==2) {
      setIndex(Index + 1);
    }
    else{
      setIndex(0)
    }
  }, 4500);
  // if (Index > 3) {
  //   setIndex(0);
  //   // console.log('ho to rha h ')
  // }
 

    return (
      <div className="AboutusWrapper">
        {/*<div className="Aboutusmainheading">ABOUT US</div>*/}

        <div className="Aboutus-wrapper">
          <div className="Aboutus-vision">
            <div className="Aboutus-body">
              <div className="Aboutus-info">

                <h1>{data[Index]?.title}</h1>
                <p>{data[Index]?.context}</p>
               <Link to={'/aboutus'}><button className="know-morebtn">Learn more </button>
               </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default AboutUS;
