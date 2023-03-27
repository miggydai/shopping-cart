import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import sneakers from "../../data";
import Cards from "../Cards/cards";
import Footer from "../footer/footer";
import "./products.css";

function Products({ handleClick }) {
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredSneakers(
      sneakers.filter(
        (sneaker) =>
          sneaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sneaker.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(searchQuery);
  };
  return (
    <>
      <div className="header">
        <h2>Products</h2>

        <Form className="search-form">
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="Search Items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button size="sm" onClick={handleSearch} variant="outline-info">
              Search
            </Button>
          </InputGroup>
        </Form>
      </div>

      <section id="features" className="products">
        {filteredSneakers.map((e) => (
          <Cards key={e.id} items={e} handleClick={handleClick} />
        ))}
        <Footer />
      </section>
    </>
  );
}

export default Products;
