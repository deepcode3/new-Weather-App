import React from "react";
import styled from "styled-components";
import minmax from "../Assets/icon_temperature_info.svg";
import precipitation from "../Assets/icon_precipitation_info.svg";
import humidity from "../Assets/icon_humidity_info.png";
import wind from "../Assets/icon_wind_info.svg";
import visibility from "../Assets/icon_visibility_info.svg";

const WeatherFactor = (props) => {
  const { weather } = props;
  return (
    <Weatherul>
      <li className="factorli">
        <img src={minmax} alt="minmax" />
        <span className="variable">Min-Max</span>
        <span className="value">{`${parseInt(weather.main.temp_min)}-${parseInt(
          weather.main.temp_max
        )}0 C`}</span>
      </li>
      <li className="factorli">
        <img src={precipitation} alt="precipitation" />
        <span className="variable">Precipitaion</span>
        <span className="value">{`${
          parseInt(weather.main.pressure) % 100
        }%`}</span>
      </li>
      <li className="factorli">
        <img src={humidity} alt="humidity" />
        <span className="variable">Humidity</span>
        <span className="value">{`${weather.main.humidity}%`}</span>
      </li>
      <li className="factorli">
        <img src={wind} alt="wind" />
        <span className="variable">Wind</span>
        <span className="value">{`${parseInt(weather.wind.speed)}mph`}</span>
      </li>
      <li className="factorli">
        <img src={visibility} alt="visibility" />
        <span className="variable">Visibility</span>
        <span className="value">{`${
          parseInt(weather.visibility) % 1000
        } mph`}</span>
      </li>
    </Weatherul>
  );
};
export default WeatherFactor;
const Weatherul = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 15px;
  list-style-type: none;
  position: absolute;
  top: 20px;
  // background-color: red;
  .factorli {
    list-style: none;
    width: 100px;
    // background-color: brown;
    position: relative;
    margin-right: 10px;
  }
  .variable {
    height: 18px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 15px;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    //background-color: green;
  }
  .value {
    height: 25px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 25px;
    position: absolute;
    top: 20px;
    //  background-color: black;
  }
`;
