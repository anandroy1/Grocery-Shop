import React from "react";
import ProductList from "../data/data";
import Card from "../Card";
import "./Grocery.css";

const Grocery = ({ onAdd }) => {
  return (
    <section>
      {ProductList.map((item) => (
        <Card key={item.id} item={item} onAdd={onAdd} />
      ))}
    </section>
  );
};

export default Grocery;
