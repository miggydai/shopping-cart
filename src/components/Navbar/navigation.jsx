import React from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./navigation.css";

function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Col>
            <Navbar.Brand href="#home">shop</Navbar.Brand>
          </Col>
          <Col xs={7}></Col>
          <Col>
            <Nav className="me-auto" navbarScroll>
              <Button onClick={handleDrawerOpen}>Cart</Button>
            </Nav>
          </Col>
        </Container>
      </Navbar>

      <Offcanvas show={isDrawerOpen} onHide={handleDrawerClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Drawer Content Goes Here</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
