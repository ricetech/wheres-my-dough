import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./_AppNavbar.module.scss";

const AppNavbar = () => (
  <Navbar bg="light" expand="lg" id="navbar" className={styles.AppNavbar}>
    <Container>
      <Navbar.Brand as={Link} to="/">
        Where's My Dough?
      </Navbar.Brand>
      <Navbar.Collapse id="navbar--nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
