import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function CardComp({ title, children }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="card-body">{children}</div>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
