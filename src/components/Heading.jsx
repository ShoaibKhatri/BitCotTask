import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Heading = ({ heading }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="shadow-lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#">{heading}</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
