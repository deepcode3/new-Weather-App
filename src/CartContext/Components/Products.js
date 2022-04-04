import React from "react";
import Card from "./Card";

const Products = () => {
  const P = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 70 },
    { name: "Sweater", price: 20 },
    { name: "tshirt", price: 10 },
    { name: "jumper", price: 60 },
  ];
  return (
    <div>
      {P.map((p) => {
        return <Card name={p.name} price={p.price} />;
      })}
    </div>
  );
};
export default Products;
