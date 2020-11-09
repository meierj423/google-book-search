import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <JumbotronComp />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
