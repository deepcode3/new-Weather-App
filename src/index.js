import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import WeatherState from "./Context/contextState";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
