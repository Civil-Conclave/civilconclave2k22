/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import joshimath from "../../assets/joshimath.svg";
import strategicplanning from "../../assets/strategic_planning.svg";
import climatecrisis from "../../assets/climate_crisis.svg";
import safety from "../../assets/intersection.svg";
import "./CaseStudy.css";


import Ellipse from "../../assets/Ellipse1.png";


export default function CaseStudyleft() {
    function onPressForest(e) {
        window.open(

            "https://drive.google.com/file/d/1ABMZ2DE6XX6DlABiRqMLUB2wlVp4ZMKh/view?usp=drive_link"

        );
    }

    function onPressFlood(e) {
        window.open(

            "https://drive.google.com/file/d/1dyAgx-hBhWzAdDCby8nvk_aLgpxrdTF4/view?usp=drive_link"

        );
    }

    function onPressStructural(e) {
        window.open(
            "https://drive.google.com/drive/folders/1iETHhNwjdhTBgHli0bxiM8Vac-hYPUnI?usp=drive_link"
        );
    }

    function onPressGril(e) {
        window.open(

            "https://drive.google.com/file/d/16pSa9YSEPP6tHoNU_lb5yF9I_GYjc7Mo/view?usp=drive_link"

        );
    }

    function onPressForestInfo(e) {
        window.open(
            "https://drive.google.com/file/d/17YvoUxYPaU4Elrc4YQByRQtn8yTkHJOR/view?usp=sharing"
        );
    }

    function onPressFloodInfo(e) {
        window.open(
            "https://drive.google.com/file/d/1bjdYPzC7HK2q2XAwoVJWfoQhKULbxcX0/view?usp=sharing"
        );
    }

    function onPressSoilInfo(e) {
        window.open(
            "https://drive.google.com/file/d/1pgY9O7Jfv8yBKvX8CySI7_4mJsDT6Zbs/view?usp=sharing"
        );
    }

    function onPressConcreteInfo(e) {
        window.open(
            "https://drive.google.com/file/d/1Smmcyw0Q6vijxeDckRN14RGODu6QMod3/view?usp=sharing"
        );
    }


    function onPressLast(e) {
        window.open(
            "https://drive.google.com/file/d/1tzPdjM9J5taDD-lBVIEEkrNEEJjbtNgO/view?usp=drive_link"
        );
    }
    
    function onPressLast_Rule(e) {
        window.open(
            "https://drive.google.com/file/d/1xR7QdVMLkuGZ6R3NUZm6_HopkLKZBb6_/view?usp=drive_link"
        );
    }

    return (
        <>

            <div className="eventContainer">
                <div className="ellipse">
                    <div className="headerInfo">
                        <div className="headerEventHeading">EVENTS</div>
                        <hr className="headline"/>
                        <div className="eventDes">CASE STUDY</div>
                    </div>
                    <img src={Ellipse} className="ellipseImg"></img>
                </div>
                <div className="leftStripes">
                    <div className="stripes1"></div>
                    <div className="space"></div>
                    <div className="stripes1"></div>
                </div>
                <div className="rightStripes">
                    {/* <div className="stripes2"></div> */}
                    <div className="space"></div>
                    <div className="stripes2"></div>
                </div>
            </div>


            <div className="casestudy-wrapper">
                <div className="casestudy-main Left">
                    <div className="casestudy1">
                        <div className="casestudy_context">
                            <p className="casestudy_heading">Strategic Planning: Healthcare Services</p>
                            {/*<p className="casestudy_heading2">In association with FSI</p>*/}
                            <p className="casestudy_main_write">
                                Assume that AIIMS Rishikesh is contemplating the establishment of a new sub-branch along
                                the Delhi-Meerut
                                Road in Modinagar town, aiming to enhance accessibility to healthcare services in the
                                new region.
                                Recognizing the importance of improved connectivity, this strategic decision reflects
                                the institution's
                                commitment to extending quality healthcare beyond its central location. The proposed
                                sub-branch is poised to
                                serve as a vital healthcare hub, catering to the medical needs of residents along the
                                highway corridor and
                                neighboring areas. This expansion aligns with AIIMS Rishikesh's mission to make
                                healthcare more accessible
                                and ensures that individuals in these regions have prompt access to specialized medical
                                facilities. The initiative
                                not only addresses the healthcare demands of the local population but also contributes
                                to the overall
                                development of the healthcare infrastructure in the region, fostering a healthier and
                                more resilient community.

                            </p>
                        </div>
                        <div className="casestudy_image">

                            <img src={strategicplanning} className="imgg"></img>

                        </div>
                    </div>
                    <div className="casestudy2">
                        <button className="casestudy-btn" onClick={onPressForestInfo}>
                            PROBLEM STATEMENT
                        </button>
                        <button className="text-casestudy" onClick={onPressForest}>
                            RULE BOOK
                        </button>
                    </div>
                </div>
                <div className="casestudy-main Right">
                    <div className="casestudy1">
                        <div className="casestudy_context">
                            <p className="casestudy_heading">
                                Reviving Joshimath: Engineering Solutions
                            </p>
                            {/*<p className="casestudy_heading2">*/}
                            {/*    In association with Department of Hydrology, IIT Roorkee*/}
                            {/*</p>*/}
                            <p className="casestudy_main_write">
                                Joshimath, situated in the Chamoli district of Uttarakhand, is a mountainous town along
                                the
                                Rishikesh-Badrinath National Highway (NH-7). This town plays a crucial role as a rest
                                point for
                                tourists on their way to destinations like Badrinath, Auli, Valley of Flowers, and
                                Hemkund Sahib.
                                It is a hub for both religious and tourist activities in the region. Joshimath, located
                                in the
                                high-risk seismic Zone-V, is crossed by swift streams with a steep gradient originating
                                from
                                Vishnuprayag, where the Dhauliganga and Alaknanda rivers converge.

                            </p>
                        </div>
                        <div className="casestudy_image">

                            <img src={joshimath} className="imgg"></img>

                        </div>
                    </div>
                    <div className="casestudy2">
                        <button className="casestudy-btn" onClick={onPressFloodInfo}>
                            PROBLEM STATEMENT
                        </button>
                        <button className="text-casestudy" onClick={onPressFlood}>
                            RULE BOOK
                        </button>
                    </div>
                </div>
                <div className="casestudy-main Left">
                    <div className="casestudy1">
                        <div className="casestudy_context">
                            <p className="casestudy_heading">
                                Navigating Climate Crisis
                            </p>
                            {/*<p className="casestudy_heading2">In association with GRIL</p>*/}
                            <p className="casestudy_main_write">
                                In December 2015, global leaders convened in Paris, signing an agreement to limit the
                                long-term rise in global temperatures, emphasizing the importance of keeping it below
                                2°C and striving for 1.5°C. Despite these efforts, an alarming trend has emerged, with
                                an
                                increasing number of days breaching the 1.5°C mark, raising concerns about the
                                proximity to the long-term warming limit. As of October 2, 2023, data from the
                                Copernicus Climate Change Service indicates that 86 days this year have surpassed the
                                1.5°C threshold. This acceleration in climate extremes necessitates unprecedented action
                                worldwide.

                            </p>
                        </div>
                        <div className="casestudy_image">

                            <img src={climatecrisis} className="imgg"></img>

                        </div>
                    </div>
                    <div className="casestudy2">
                        <button className="casestudy-btn" onClick={onPressSoilInfo}>
                            PROBLEM STATEMENT
                        </button>
                        <button className="text-casestudy" onClick={onPressGril}>
                            RULE BOOK
                        </button>
                    </div>
                </div>

                <div className="casestudy-main Right">
                    <div className="casestudy1">
                        <div className="casestudy_context">
                            <p className="casestudy_heading">
                                Tackling Pedestrian Safety
                            </p>
                            {/*<p className="casestudy_heading2">*/}
                            {/*    In association with Department of Hydrology, IIT Roorkee*/}
                            {/*</p>*/}
                            <p className="casestudy_main_write">
                            Presenting you all with the last case study for this edition of civil conclave on Tackling Pedestrian Safety.
India demands our attention and collective effort towards Pedestrian accidents and the stark reality is that 32,825 precious lives were lost in 2025 alone, and it's a call for us to come together for change. Let's raise awareness and pave the way for change and make our streets safer for everyone.


                            </p>
                        </div>
                        <div className="casestudy_image">
                            <img src={safety} className="imgg"></img>
                        </div>
                    </div>
                    <div className="casestudy2">
                        <button className="casestudy-btn" onClick={onPressLast}>
                            PROBLEM STATEMENT
                        </button>
                        <button className="text-casestudy" onClick={onPressLast_Rule}>
                            RULE BOOK
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}
