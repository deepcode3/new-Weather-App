import React from "react";
import { WeatherContext } from "../Context/Wcontext";
import WeatherState from "../Context/contextState";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Foulder/Navbar";
import Home from "./Foulder/Home";
import About from "./Foulder/About";

const MainContext = () => {
  return (
    <>
      <WeatherState>
        <Navbar />
        <Routes>
          <Route exact path="/a" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </WeatherState>
    </>
  );
};
export default MainContext;
