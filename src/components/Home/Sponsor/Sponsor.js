import React, {useState} from "react";
import "./sponsor.css";
import datasponsor from "./datasponsor";
import {useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Sponsor = () => {
    const [sponno, setSponno] = useState(0);
    if (sponno === 12) {
        setSponno(0);
    }
    setTimeout(() => {
      setSponno(sponno + 1);
    }, 3000);
    return (
        <div className="sponsorWrapper">
            <div className="sponsor">SPONSORS</div>

            <div className="sponsor-wrapper">
                <div className="sponsor-wholecontainer1">
                  <div className="sponsor-wholecontainer1img">
                    <img src={datasponsor[sponno].url} alt="" />
                  </div>
                  <div className="sponsor-body">
                    <div className="sponsor-info">
                      {" "}
                      <h1>{datasponsor[sponno].spontitle}</h1>
                      <p>{datasponsor[sponno].sponbody}</p>
                      <button className="know-morebtn">Know more</button>
                    </div>
                  </div>
                </div>
                <div className="sponsor-wholecontainer2">
                  <div className="sponsor-wholecontainer1img">
                    <img src={datasponsor[sponno + 1].url} alt="" />
                  </div>
                  <div className="sponsor-body">
                    <div className="sponsor-info2">
                      {" "}
                      <h1>{datasponsor[sponno + 1].spontitle}</h1>
                      <p>{datasponsor[sponno + 1].sponbody}</p>
                      <button className="know-morebtn">Know more</button>
                    </div>
                  </div>
                </div>

                {/*<div className="sponsor-wholecontainer1">*/}
                {/*    <div className="sponsor-wholecontainer1img">*/}
                {/*        <img className="sponsimg" src={datasponsor[sponno].url} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="sponsor-body">*/}
                {/*        <div className="sponsor-info">*/}
                {/*            {" "}*/}
                {/*            <h1>{datasponsor[sponno].spontitle}</h1>*/}
                {/*            <p>{datasponsor[sponno].sponbody}</p>*/}
                {/*            <button className="know-morebtn">Know more</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="sponsor-wholecontainer1">*/}
                {/*    <div className="sponsor-wholecontainer1img">*/}
                {/*        <img src={datasponsor[sponno+1].url} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="sponsor-body">*/}
                {/*        <div className="sponsor-info">*/}
                {/*            {" "}*/}
                {/*            <h1>{datasponsor[sponno+1].spontitle}</h1>*/}
                {/*            <p>{datasponsor[sponno+1].sponbody}</p>*/}
                {/*            <button className="know-morebtn">Know more</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div><div className="sponsor-wholecontainer1">*/}
                {/*    <div className="sponsor-wholecontainer1img">*/}
                {/*        <img src={datasponsor[sponno+2].url} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="sponsor-body">*/}
                {/*        <div className="sponsor-info">*/}
                {/*            {" "}*/}
                {/*            <h1>{datasponsor[sponno+2].spontitle}</h1>*/}
                {/*            <p>{datasponsor[sponno+2].sponbody}</p>*/}
                {/*            <button className="know-morebtn">Know more</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div><div className="sponsor-wholecontainer1">*/}
                {/*    <div className="sponsor-wholecontainer1img">*/}
                {/*        <img src={datasponsor[sponno+3].url} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="sponsor-body">*/}
                {/*        <div className="sponsor-info">*/}
                {/*            {" "}*/}
                {/*            <h1>{datasponsor[sponno+3].spontitle}</h1>*/}
                {/*            <p>{datasponsor[sponno+3].sponbody}</p>*/}
                {/*            <button className="know-morebtn">Know more</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </div>
    );
};

export default Sponsor;
