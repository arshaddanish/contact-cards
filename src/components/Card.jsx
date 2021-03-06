import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src} />
      </div>
      <div className="bottom">
        <Detail dtl={props.tel} />
        <Detail dtl={props.mail} />
      </div>
    </div>
  );
}

export default Card;