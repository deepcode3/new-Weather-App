import React from "react";
import "./App.css";
//import WeatherState from "./Context/contextState";
//import MainStar from "./StarWars/starMain";
//import Demo from "./Demo/Demo";
import MainBody from "./Containers/MainBody";
//import MainContext from "./contextExample/MainContext";
//import MainLogin from "./LogContext/MainLogin";

//working context
//import MainCartContext from "./CartContext/MainCartContext";

const App = () => {
  return (
    <div className="App">
      {/* <MainStar />
     <Demo />
      <MainLogin />
      <MainContext />
      <MainCartContext />
    */}
      <MainBody />
    </div>
  );
};
export default App;
