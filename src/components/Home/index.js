import React, {useState} from "react";
import Landing from "./Landing.js";
import EventsHome from "./EventsHome.js";
import AboutConclave from "./AboutConclave.js";
import Heading from "../General/Heading.js";
import ContactUs from "../General/ContactUs.js";
import Footer from "../General/Footer";
import Sponsor from "./Sponsor/Sponsor.js";
import useScrollSnap from "react-use-scroll-snap";
import {useRef} from "react";
import Navbarnew from "../General/Navbar";
import AboutUS from "./AboutUS.js";


function Home() {
    const scrollRef = useRef(null)
    useScrollSnap({ref: scrollRef, duration: 20, delay: 5});


    return (<div className="HomeWrapper" ref={scrollRef}>
            <span>
                <Navbarnew></Navbarnew>
                <Landing></Landing>
            </span>

            <AboutConclave></AboutConclave>
            <span>
            <Heading name="Events"></Heading>
            <EventsHome></EventsHome>
            </span>
            {/* <span>
                <Heading name="Sponsors"></Heading>

             <Sponsor></Sponsor>

                </span> */}
            <span>
                     <Heading name="About Us"></Heading>
                    <AboutUS></AboutUS>
            </span>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>);
}

export default Home;
