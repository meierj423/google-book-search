import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";
import CardComp from "../componenets/Card";
import FormComp from "../componenets/Form";

class Home extends Component {
  state = { query: "" };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`The book you are searching for is: ${this.state.query}`);
  };

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
              <FormComp
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                query={this.state.query}
              />
            </CardComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
