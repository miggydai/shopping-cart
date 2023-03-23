import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./cards.css";

function Cards({ items, handleClick }) {
  const { id, name, brand, price, image } = items;
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
        <img src={image} alt="shoe" className="card-img" />
        <div className="card-info">
          <h3>{name}</h3>
          <h5>{brand}</h5>
          <p>Php {price}</p>

          {/* <div className="quantity">
            <Button onClick={subtract}>-</Button>
            {quantity}
            <Button onClick={add}>+</Button>
          </div> */}
          <br />
          <Button onClick={() => handleClick(items)}>add to cart</Button>
        </div>
      </div>
    </>
  );
}

export default Cards;
