
import React from "react";
import { Container,Navbar } from "react-bootstrap";

const Nav=()=>{
  return(
    <Container>
    <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/pizzalogo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </Container>
  )
}
 
export default Nav;
