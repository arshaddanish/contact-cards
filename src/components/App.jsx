import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return <Card
    key={contact.id}
    name={contact.name}
    src={contact.imgURL}
    tel={contact.phone}
    mail={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div >
        {contacts.map(createCard)}
      </div>
    </div>
  );
}

export default App;
