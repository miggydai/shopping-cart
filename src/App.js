import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navbar/navigation";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Cards from "./components/Cards/cards";
import sneakers from "./data";

function App() {
  return (
    <>
      <Navigation />

      <section id="hero" className="banner">
        <h1>Welcome to My Landing Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button variant="primary">Get Started</Button>
      </section>

      <h2>Products</h2>
      <section id="features" className="products">
        {sneakers.map((e) => (
          <Cards
            image={e.image}
            name={e.name}
            alt="shoe"
            price={e.price}
            brand={e.brand}
          />
        ))}
      </section>
    </>
  );
}

export default App;
