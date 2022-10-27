import React from "react";
import Scroller from "./Scroller.js";
import HeaderEvents from "./HeaderEvents.js";
import EventsAll from "./EventsAll.jsx";

function Events() {
  return (
    <div className="eventsWrapper">
      <HeaderEvents></HeaderEvents>
      <EventsAll></EventsAll>
    </div>
  );
}

export default Events;
