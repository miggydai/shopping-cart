import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./navigation.css";

function Navigation({ cart, setCart, handleChange }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>quantity</td>
                  <td>{item.price}</td>
                  {/* <td>{props.}</td> */}
                  <td>
                    <Button onClick={() => handleRemove(item.id)}>
                      {" "}
                      Remove{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <span>Rs - {price}</span>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
