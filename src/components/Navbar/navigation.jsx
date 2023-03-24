import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">
            <span>shop</span>
          </Navbar.Brand>
          <Button variant="outline-success" onClick={handleDrawerOpen}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </Container>
      </Navbar>

      {/* right drawer */}
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
                  <td className="quan">
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => handleChange(item, 1)}
                    >
                      +
                    </Button>
                    <Button size="sm" variant="secondary">
                      {item.quantity}
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => handleChange(item, -1)}
                    >
                      -
                    </Button>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      {" "}
                      Remove{" "}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total">
            <span>Total</span>
            <span>Php {price}</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
