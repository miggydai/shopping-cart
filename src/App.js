import "./App.css";
import Navigation from "./components/Navbar/navigation";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/banner";
import Products from "./components/Products/products";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <Navigation cart={cart} setCart={setCart} handleChange={handleChange} />
      <Banner />
      <Products handleClick={handleClick} />
    </>
  );
}

export default App;
