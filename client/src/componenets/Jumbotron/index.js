import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container'
import "./style.css";

function JumbotronComp() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronComp;
