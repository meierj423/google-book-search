import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";
import CardComp from "../componenets/Card";
import FormComp from "../componenets/Form";

class Home extends Component {
  state = { query: "", books: [], message: "Search for a book to begin" };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ query: value });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then((res) => this.setState({ books: res.data }))
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
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
