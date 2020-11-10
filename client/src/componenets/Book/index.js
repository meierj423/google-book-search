import React from "react";
import { Row, Col } from "react-bootstrap/";
import { ListItem } from "../List";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row>
        <Col>
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col>
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={title}
          />
        </Col>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
