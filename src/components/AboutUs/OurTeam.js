import React from "react";
import Details from "./details";
import contacts from "./TeamDetails.js";
import "./OurTeam.css";

function createEntry(contact) {
  return (
    <Details
      key={contact.id}
      name={contact.name}
      position={contact.position}
      img={contact.image}
    />
  );
}

function groupContacts(array, groupSizes) {
  let result = [];
  let startIndex = 0;

  for (let size of groupSizes) {
    result.push(array.slice(startIndex, startIndex + size));
    startIndex += size;
  }

  return result;
}

function Team() {
  const groups = groupContacts(contacts, [2, 4, 1, 3, 8, 1]); // Adjust group sizes as needed

  return (
    <div className="teamContainer">
      <div className="teamHeader">
        <div className="blueLine"></div>
        <div className="HeaderInfo">OUR TEAM</div>
      </div>
      <div className={`MiddleDiv ${contacts.slice(0, 2).length < 4 ? 'center' : ''}`}>
        {contacts.slice(0, 2).map(createEntry)}
      </div>
      <div className="MiddleDiv">
        {contacts.slice(2, 6).map(createEntry)}
      </div>
      <div className={`MiddleDiv ${contacts.slice(6, 7).length < 4 ? 'center' : ''}`}>
        {contacts.slice(6, 7).map(createEntry)}
      </div>
      <div className="MiddleDiv">
        {contacts.slice(7, 10).map(createEntry)}
      </div>
      <div className="MiddleDiv">
        {contacts.slice(10, 18).map(createEntry)}
      </div>
      <div className={`MiddleDiv ${contacts.slice(18, 19).length < 4 ? 'center' : ''}`}>
        {contacts.slice(18, 19).map(createEntry)}
      </div>
    </div>
  );
}




export default Team;
