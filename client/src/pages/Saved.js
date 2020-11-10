import React, { Component } from "react";
import JumbotronComp from "../componenets/Jumbotron";
import CardComp from "../componenets/Card";
import { List } from "../componenets/List";
import Book from "../componenets/Book";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap/";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
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
            <CardComp title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </CardComp>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
