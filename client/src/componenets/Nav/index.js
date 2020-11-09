import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function NavBar() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Navbar.Brand href="/search">
        <div className="brand">Search</div>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="link" href="/saved">
          <div className="link">Saved</div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
