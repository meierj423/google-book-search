import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";
import CardComp from "../componenets/Card";
import FormComp from "../componenets/Form";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <JumbotronComp />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardComp title="Book Search">
              <FormComp />
            </CardComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
