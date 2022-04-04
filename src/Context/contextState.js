import React, { useState } from "react";
//import { WeatherContext } from "./Wcontext";

const WeatherState = (props) => {
  const s1 = {
    name: "harry",
    class: "sd",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "larry",
        class: "se",
      });
    }, 1000);
  };

  return (
    <h1>HELLO</h1>
    // <WeatherContext.Provider value={{ state: state, update: update }}>
    //   {props.childern}
    // </WeatherContext.Provider>
  );
};
export default WeatherState;
