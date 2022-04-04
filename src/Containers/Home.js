import React, { useEffect, useState, useContext } from "react";
//import WeatherContext from "../Context/Wcontext";
//import styled from "styled-components";
import "../Containers/styles/Home.css";
import WeatherFactor from "../Components/WeatherFactors";
import WeatherIcon from "../Components/WeatherIcons";
//images
import icon_favorite from "../Assets/icon_favourite.png";
import icon_favorite_Active from "../Assets/icon_favourite_Active.svg";
import weatherIcon from "../Assets/icon_mostly_sunny.svg";
import clear_night_small from "../Assets/icon_clear_night_small.svg";
import clear_night from "../Assets/icon_clear_night.svg";
import mostly_cloudy_small from "../Assets/icon_mostly_cloudy_small.svg";
import mostly_cloudy_big from "../Assets/icon_mostly_cloudy_big.svg";
import mostly_sunny_small from "../Assets/icon_mostly_sunny_small.svg";
import mostly_sunny from "../Assets/icon_mostly_sunny.svg";
import partly_cloudy_small from "../Assets/icon_partly_cloudy_small.svg";
import partially_cloudy_big from "../Assets/icon_partially_cloudy_big.svg";
import rain_small from "../Assets/icon_rain_small.svg";
import rain_big from "../Assets/icon_rain_big.svg";
import thunderstrom_big from "../Assets/icon_thunderstorm_big.svg";
import thunderstrom_small from "../Assets/icon_thunderstorm_small.svg";
import { WeatherContext } from "../Context/Wcontext";

const Home = (props) => {
  const {
    weather,
    setUnit,
    unit,
    icon,
    addfav,
    setAddfav,
    favcount,
    setFavcount,
  } = useContext(WeatherContext);

  // const {
  //   weather,
  //   setUnit,
  //   unit,
  //   icon,
  //   addfav,
  //   setAddfav,
  //   favcount,
  //   setFavcount,
  // } = props;
  const [favList, setFavlist] = useState([]);

  const handlefavClick = () => {
    setAddfav((prevstate) => !prevstate);
    if (addfav === true) {
      setFavcount(favcount - 1);
    } else {
      setFavcount(favcount + 1);
      localStorage.setItem("Favourite", JSON.stringify(weather));
    }
  };
  useEffect(() => {
    localStorage.setItem("FavCount", JSON.stringify(favcount));
  }, [addfav]);
  console.log("weather", weather);
  // console.log("weather Home", weather);
  // console.log("favcount", favcount);
  //console.log("addfav", addfav);
  let Icon = null;
  let smallIcon = null;
  if (typeof weather.main != "undefined") {
    if (icon.main == "Clouds") {
      Icon = mostly_cloudy_big;
      smallIcon = mostly_cloudy_small;
    } else if (icon.main == "Thunderstorm") {
      Icon = thunderstrom_big;
      smallIcon = thunderstrom_small;
    } else if (icon.main == "Drizzle") {
      Icon = partially_cloudy_big;
      smallIcon = partly_cloudy_small;
    } else if (icon.main == "Rain") {
      Icon = rain_big;
      smallIcon = rain_small;
    } else if (icon.main == "Snow") {
      Icon = clear_night;
      smallIcon = clear_night_small;
    } else {
      Icon = mostly_sunny;
      smallIcon = mostly_sunny_small;
    }
  } else {
    return <div>.......Loading</div>;
  }

  return (
    <div className="homediv">
      <div className="leftdisplay">
        <span className="place">
          {`${weather.name} ,${weather?.sys?.country}`},
        </span>
        <div className="fav" onClick={handlefavClick}>
          <img
            src={addfav ? icon_favorite_Active : icon_favorite}
            alt="heart"
          />
          <span className="addfav">Add to favorite</span>
        </div>
      </div>
      <div className="centerdisplay">
        <div className="CenterDiv">
          <img src={Icon} alt="icon" className="up" />
          <div className="middle">
            <span className="temp">{parseInt(weather?.main?.temp)}</span>
            <div className="tempBox">
              <div
                className="valueC"
                onClick={() => {
                  setUnit("metric");
                }}
                style={
                  unit === "metric"
                    ? { backgroundColor: " #ffffff" }
                    : { backgroundColor: "transparent" }
                }
              >
                <span
                  className="font"
                  style={
                    unit === "metric"
                      ? { color: "#E32843" }
                      : { color: "#ffffff" }
                  }
                >
                  o C
                </span>
              </div>
              <div
                className="valueF"
                onClick={() => {
                  setUnit("imperial");
                }}
                style={
                  unit === "imperial"
                    ? { backgroundColor: " #ffffff" }
                    : { backgroundColor: "transparent" }
                }
              >
                <span
                  className="font"
                  style={
                    unit === "imperial"
                      ? { color: "#E32843" }
                      : { color: "#ffffff" }
                  }
                >
                  o F
                </span>
              </div>
            </div>
          </div>
          <span className="down">{icon.description}</span>
        </div>
      </div>
      <hr className="line" style={{ top: "510px" }} />
      <div className="weatherFactors">
        <WeatherFactor weather={weather} />
      </div>
    </div>
  );
};
export default Home;

// const HomeDiv = styled.div`
//   position: relative;
//   height: 630px;
//   top: 162px;
//   display: flex;
//   flex-wrap: nowrap;
//   background-color: gray;
//   .leftdisplay {
//     display: flex;
//     text-align: center;
//     height: 100%;
//     width: 41%;
//   }
//   .place {
//     position: absolute;
//     top: 45px;
//     height: 24px;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 20px;
//     font-weight: 500;
//     letter-spacing: 0;
//     line-height: 24px;
//     text-align: center;
//   }
//   .fav {
//     position: absolute;
//     top: 70px;
//   }
//   .addfav {
//     height: 15px;
//     width: 94px;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 13px;
//     font-weight: 500;
//     letter-spacing: 0;
//     line-height: 15px;
//   }
//   .centerdisplay {
//     //     // position: absolute;
//     //     // background-color: black;
//     height: 250px;
//     width: 200px;
//     display: flex;
//     margin: auto 0;
//     text-align: center;
//     //top: 120px;
//     //left: 440px;
//   }
//   .line {
//     position: absolute;
//     box-sizing: border-box;
//     height: 1px;
//     width: 100%;
//     border: 1px solid #ffffff;
//     opacity: 0.3;
//   }
//   .weatherFactors {
//     //  background-color: pink;
//     height: 100px;
//     width: 100%;
//     position: absolute;
//     top: 520px;
//     display: flex;
//     justify-content: center;
//   }
// `;
// const CenterDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   .up {
//     height: 84px;
//     width: 80px;
//     display: flex;
//   }
//   .middle {
//     height: 75px;
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     //  background-color: pink;
//   }
//   .temp {
//     height: 75px;
//     width: 73px;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 64px;
//     font-weight: 500;
//     letter-spacing: 0;
//     line-height: 75px;
//     display: flex;
//   }
//   .tempBox {
//     height: 30px;
//     width: 55px;
//     display: flex;
//   }
//   .valueC {
//     box-sizing: border-box;
//     height: 30px;
//     width: 28px;
//     border: 1px solid #ffffff;
//     border-radius: 2px 0 0 2px;
//   }
//   .valueF {
//     box-sizing: border-box;
//     height: 30px;
//     width: 28px;
//     border: 1px solid #ffffff;
//     border-radius: 2px;
//   }
//   .font {
//     height: 19px;
//     width: 11px;
//     font-family: Roboto;
//     font-size: 16px;
//     letter-spacing: 0;
//     line-height: 19px;
//   }
//   .down {
//     height: 25px;
//     width: 100%;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 22px;
//     letter-spacing: 0;
//     line-height: 25px;
//     text-align: center;
//     display: flex;
//   }
// `;
