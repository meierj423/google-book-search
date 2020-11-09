import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function CardComp({ title, children }) {
  console.log(children);
  return (
    <Card fluid>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="card-body">{children}</div>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
