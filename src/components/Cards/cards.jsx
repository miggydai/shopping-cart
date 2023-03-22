import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./cards.css";

function Cards(props) {
  const [quantity, setQuantity] = useState(0);

  const add = () => {
    setQuantity(quantity + 1);
  };

  const subtract = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="cards">
        <img src={props.image} alt={props.alt} className="card-img" />
        <div className="card-info">
          <h3>{props.name}</h3>
          <h5>{props.brand}</h5>
          <p>Php {props.price}</p>

          <div className="quantity">
            <Button onClick={subtract}>-</Button>
            {quantity}
            <Button onClick={add}>+</Button>
          </div>

          <Button>add to cart</Button>
        </div>
      </div>
    </>
  );
}

export default Cards;
