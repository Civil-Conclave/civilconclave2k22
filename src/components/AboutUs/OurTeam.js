import React from "react";
import Details from "./details";
import contacts from "./TeamDetails.js";
import "./OurTeam.css";

function createEntry(contact) {
  console.log(contact);
  return (
    <Details
      key={contact.id}
      name={contact.name}
      position={contact.position}
      img={contact.image}
    />
  );
}
function Team() {
  return (
    // HEADER
    <div className="teamContainer">
      <div className="teamHeader">
        <div className="blueLine"></div>
        <div className="HeaderInfo">
          OUR <br></br>TEAM
        </div>
      </div>

      {/* CARDS */}
      <div className="MiddleDiv">{contacts.map(createEntry)}</div>
    </div>
  );
}
export default Team;
