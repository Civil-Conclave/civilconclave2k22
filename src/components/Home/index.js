import React from "react";
import Landing from "./Landing.js";
import EventsHome from "./EventsHome.js";
import AboutConclave from "./AboutConclave.js";
import Heading from "../General/Heading.js";

function index() {
  return (
    <div className="HomeWrapper">
      <Landing></Landing>
      <AboutConclave></AboutConclave>
      <Heading name="Events"></Heading>
      <EventsHome></EventsHome>
      <Heading name="Sponsors"></Heading>
    </div>
  );
}

export default index;
