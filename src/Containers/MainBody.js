import React, { useEffect, useState } from "react";
import { WeatherContext } from "../Context/Wcontext";
//import WeatherState from "../Context/contextState";
//import styled from "styled-components";
import "../Containers/styles/MainBody.css";
import logo from "../Assets/logo_web.svg";
import searchIcon from "../Assets/icon_search_white.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Date from "../Components/Date";
import Routing from "../Router/Routing";
import nothing from "../Assets/icon_nothing.svg";

//images

const MainBody = () => {
  const [city, setCity] = useState("udupi");
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({});
  const [unit, setUnit] = useState("metric");
  const [addfav, setAddfav] = useState(false);
  const [favcount, setFavcount] = useState(0);

  const [fav, setFav] = useState([]);

  const [rec, setRec] = useState([]);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=2c4838d1d400345df0010c064351315b`
      );
      setWeather(res.data);
      setIcon(res.data.weather[0]);
      setAddfav(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [unit]);

  useEffect(() => {
    if (weather) {
      setFav([...fav, weather]);
    }
  }, [favcount]);

  useEffect(() => {
    if (weather) {
      setRec([...rec, weather]);
    }
  }, [weather]);

  localStorage.setItem("Fav", JSON.stringify(fav));
  localStorage.setItem("Rec", JSON.stringify(rec));

  console.log("fav", fav);
  console.log("rec", rec);

  return (
    <div className="main-headder">
      <img src={logo} alt="logo" className="imagelogo" />
      <div className="textbox">
        <>
          <input
            type="text"
            placeholder="Search"
            className="Box"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </>
        <img
          src={searchIcon}
          alt="searchIcon"
          className="imagesearchIcon"
          onClick={fetchWeather}
        />
      </div>
      <hr className="line" style={{ top: "160px" }} />
      <ul className="Navul">
        <NavLink className="NavLinks" to="/">
          <li className="Navli">Home</li>
        </NavLink>
        <NavLink className="NavLinks" to="/Favorite">
          <li className="Navli">Favorites</li>
        </NavLink>
        <NavLink className="NavLinks" to="/RecentSearch">
          <li className="Navli">Recent Search</li>
        </NavLink>
      </ul>
      <div className="DatePosition">
        <Date />
      </div>
      {weather === undefined ? (
        <img src={nothing} alt="nothing" />
      ) : (
        <div>
          <WeatherContext.Provider
            value={{
              weather,
              setUnit,
              unit,
              icon,
              addfav,
              setAddfav,
              favcount,
              setFavcount,
              setCity,
              weather,
              setWeather,
            }}
          >
            <Routing
            // weather={weather}
            // setWeather={setWeather}
            // setUnit={setUnit}
            // unit={unit}
            // icon={icon}
            // addfav={addfav}
            // setAddfav={setAddfav}
            // favcount={favcount}
            // setFavcount={setFavcount}
            // setCity={setCity}
            />
          </WeatherContext.Provider>
        </div>
      )}
    </div>
  );
};
export default MainBody;
// const Div = styled.div`
//   //height:100%;
//   width: 80%;
//   // background-color:gray;
//   position: relative;
//   .imagelogo {
//     position: absolute;
//     left: 10px;
//     top: 30px;
//   }
//   .textbox {
//     position: absolute;
//     display: flex;
//     flex-direction: row;
//     height: 45px;
//     width: 458px;
//     right: 20px;
//     top: 30px;
//     // background-color:white;
//   }
//   .imagesearchIcon {
//     height: 25px;
//     width: 25px;
//     margin: auto;
//     position: relative;
//     left: -30px;
//   }
//   .line {
//     position: absolute;
//     box-sizing: border-box;
//     height: 1px;
//     width: 100%;
//     border: 1px solid #ffffff;
//     opacity: 0.3;
//   }
//   .DatePosition {
//     position: absolute;
//     top: 140px;
//     right: 20px;
//   }
//   .Navul {
//     display: flex;
//     height: 15px;
//     list-style-type: none;
//     text-align: center;
//     align-items: center;
//     position: absolute;
//     top: 140px;
//     left: 16px;
//   }
//   .Navli {
//     list-style: none;
//   }
// `;

// const TextDiv = styled.div`
//   .Box {
//     box-sizing: border-box;
//     height: 45px;
//     width: 445px;
//     border: 1px solid hsl(180, 2%, 84%);
//     // opacity: 0.3;
//     padding-left: 10px;
//     border-radius: 3px;
//     font-family: Roboto;
//     font-size: 20px;
//     font-weight: 500;
//     letter-spacing: 0;
//     line-height: 24px;
//     color: hsl(29, 90%, 73%);
//     background-color: rgba(255, 255, 255, 0.3);
//     ::placeholder,
//     ::-webkit-input-placeholder {
//       color: #ffffff;
//       font-family: Roboto;
//       font-size: 20px;
//       font-weight: 500;
//       letter-spacing: 0;
//       line-height: 24px;
//     }
//     :-ms-input-placeholder {
//       color: red;
//     }
//   }
// `;
// const NavLinks = styled(NavLink)`
//   color: #ffffff;
//   font-family: Roboto;
//   font-size: 13px;
//   font-weight: 500;
//   letter-spacing: 0;
//   line-height: 15px;
//   text-decoration: none;
//   align-items: center;
//   z-index: 1;
//   position: relative;
//   padding: 4px;
//   &:hover:after {
//     content: "";
//     height: 2px;
//     width: 100%;
//     bottom: -4px;
//     left: 0;
//     position: absolute;
//     background-color: #ffd639;
//     boder-radius: 2px;
//   }
// `;
