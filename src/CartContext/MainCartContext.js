import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Checkout from "./Components/Checkout";
import Nav from "./Components/Nav";
import Products from "./Components/Products";

const MainCartContext = () => {
  return (
    <div>
      <CartProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
};
export default MainCartContext;
