import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../componenets/Jumbotron";
import CardComp from "../componenets/Card";
import FormComp from "../componenets/Form";
import { List } from "../componenets/List";
import Book from "../componenets/Book";

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

  handleBookSave = (id) => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
  };

  render() {
    console.log(this.state.books);
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
        <Row>
          <Col>
            <CardComp title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </CardComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
