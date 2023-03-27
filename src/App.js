import "./App.css";
import Navigation from "./components/Navbar/navigation";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/banner";
import Products from "./components/Products/products";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
function App() {
  const [cart, setCart] = useState([cartFromLocalStorage]);

  //get state
  useEffect(() => {
    // const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);
    }
  }, []);

  //set state
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) {
      arr[ind].quantity = 1;
      arr.splice(ind, 1);
    }
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navigation cart={cart} setCart={setCart} handleChange={handleChange} />
      <Banner />
      <Products handleClick={handleClick} />
    </React.Fragment>
  );
}

export default App;
