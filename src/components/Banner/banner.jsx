import React from "react";
import { Button } from "react-bootstrap";
import "./banner.css";

function Banner() {
  return (
    <>
      <section id="hero" className="banner">
        <h1>Welcome to My Landing Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button variant="primary">Get Started</Button>
      </section>
    </>
  );
}

export default Banner;
