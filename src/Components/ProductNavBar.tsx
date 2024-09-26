import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ProductNavBar: React.FC = () => {
  return (
    <Navbar
    //   bg="light"
      expand="lg"
      className="mb-4"
      style={{ backgroundColor: "#d4c2d7" }}
    >
      <Navbar.Brand href="#home">Product Listing</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ProductNavBar;
