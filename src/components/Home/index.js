import React from "react";
import Landing from "./Landing.js";
import EventsHome from "./EventsHome.js";
import AboutConclave from "./AboutConclave.js";
import Heading from "../General/Heading.js";
import ContactUs from "../General/ContactUs.js";
import Footer from "../General/Footer";
import Sponsor from "./Sponsor/Sponsor.js";


function index() {
  return (
    <div className="HomeWrapper">
      <Landing></Landing>
      <AboutConclave></AboutConclave>
      <Heading name="Events"></Heading>
      <EventsHome></EventsHome>
<Sponsor></Sponsor>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default index;
