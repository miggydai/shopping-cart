import React from "react";
import sneakers from "../../data";
import Cards from "../Cards/cards";
import Footer from "../footer/footer";
import "./products.css";

function Products({ handleClick }) {
  return (
    <>
      <h2>Products</h2>

      <section id="features" className="products">
        {sneakers.map((e) => (
          <Cards key={e.id} items={e} handleClick={handleClick} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Products;
