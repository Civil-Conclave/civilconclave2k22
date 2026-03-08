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
  // Define custom row layout: 2,3,1,2,2,2,2,1 and remaining in 2s
  const rows = [
    contacts.slice(0, 2), // Row 1: 2 cards
    contacts.slice(2, 5), // Row 2: 3 cards
    contacts.slice(5, 6), // Row 3: 1 card
    contacts.slice(6, 8), // Row 4: 2 cards
    contacts.slice(8, 10), // Row 5: 2 cards
    contacts.slice(10, 12), // Row 6: 2 cards
    contacts.slice(12, 14), // Row 7: 2 cards
    contacts.slice(14, 15), // Row 8: 1 card
    contacts.slice(15, 17), // Row 9: 2 cards
    contacts.slice(17, 19), // Row 10: 2 cards
  ];

  return (
    // HEADER
    <div className="teamContainer">
      <div className="teamHeader">
        <div className="blueLine"></div>
        <div className="HeaderInfo">OUR TEAM</div>
      </div>
      <div className="MiddleDiv">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="teamRow">
            {row.map(createEntry)}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Team;
