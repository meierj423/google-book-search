import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style.css";

function JumbotronComp() {
  return (
    <Jumbotron fluid>
      <Container>
        <div className="jumbotron-text">
          <h1>Google Books Search</h1>
          <p>Search for and save books of interest</p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronComp;
