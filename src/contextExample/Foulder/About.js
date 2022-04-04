import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../../Context/Wcontext";

const About = () => {
  const a = useContext(WeatherContext);
  useEffect(() => {
    return a.update();
  }, []);

  return <h1>{`This is the ${a.state.name} and ${a.state.class}`}</h1>;
};
export default About;
