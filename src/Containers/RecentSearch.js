import React, { useContext } from "react";
import "../Containers/styles/Rec.css";
//import styled from "styled-components";
import Nothing from "../Assets/icon_nothing.svg";
import weatherIcon from "../Assets/icon_rain_big.svg";
import icon_favorite from "../Assets/icon_favourite.png";

//images
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

const RecentSearch = (props) => {
  const { weather } = useContext(WeatherContext);
  // const { weather, setCity } = props;
  const Data = JSON.parse(localStorage.getItem("Rec"));
  console.log("Data", Data);

  const Clearer = () => {
    localStorage.removeItem("Rec");
  };

  let Recent = Data.slice(1).map((e, key) => {
    let Icon = null;
    let smallIcon = null;
    if (typeof e.main != "undefined") {
      if (e.weather[0].main == "Clouds") {
        Icon = mostly_cloudy_big;
        smallIcon = mostly_cloudy_small;
      } else if (e.weather[0] == "Thunderstorm") {
        Icon = thunderstrom_big;
        smallIcon = thunderstrom_small;
      } else if (e.weather[0].main == "Drizzle") {
        Icon = partially_cloudy_big;
        smallIcon = partly_cloudy_small;
      } else if (e.weather[0].main == "Rain") {
        Icon = rain_big;
        smallIcon = rain_small;
      } else if (e.weather[0].main == "Snow") {
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
      <div className="RecBox" key={key}>
        <span className="Recplacename">{`${e.name},${e.sys.country}`}</span>
        <img src={smallIcon} alt="weatherIcon" className="Recwicon" />
        <div className="Rectemp">
          <span className="Recval">{`${parseInt(e.main.temp)}`}</span>
          <span className="Recunit">o C</span>
        </div>
        <span className="Recplacename">{`${e.weather[0].description}`}</span>
        <img src={icon_favorite} alt="favHeart" />
      </div>
    );
  });
  console.log("Data", Data);
  // console.log("e.weather[0]?.description", Data[1].weather[0].description);
  return (
    <div className="RecDiv">
      {weather.name === undefined ? (
        <div className="Recnothing">
          <img src={Nothing} alt="nothing" />
        </div>
      ) : (
        <div>
          <div className="Recheadding">
            <span className="Reccity">You Recently searched for</span>
            <span className="Reccity" onClick={Clearer}>
              Clear All
            </span>
          </div>
          {Recent}
        </div>
      )}
    </div>
  );
};
export default RecentSearch;

// const Div = styled.div`
//   position: relative;
//   height: 410px;
//   top: 162px;
//   display: flex;
//   flex-direction: column;
//   // background-color: gray;
//   .heading {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     align-items: center;
//     height: 70px;
//   }
//   .favcity {
//     height: 15px;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 13px;
//     letter-spacing: 0;
//     line-height: 15px;
//     padding: 4px;
//   }
//   .favBox {
//     height: 73px;
//     width: 960px;
//     //  opacity: 0.2;
//     background-color: rgba(0, 0, 0, 0.2);
//     margin: 0 auto;
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     justify-content: space-around;
//   }
//   .place {
//     height: 19px;
//     width: 300px;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 16px;
//     font-weight: 500;
//     letter-spacing: 0;
//     line-height: 19px;
//     display: flex;
//   }
//   .wicon {
//     height: 38px;
//     width: 36px;
//   }
//   .temp {
//     display: flex;
//     height: 38px;
//     width: 70px;
//   }
//   .val {
//     height: 38px;
//     width: 37px;
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 32px;
//     font-weight: 500;
//     letter-spacing: 0;
//     line-height: 38px;
//   }
//   .unit {
//     color: #ffffff;
//     font-family: Roboto;
//     font-size: 17px;
//     font-weight: 200;
//     letter-spacing: 0;
//     line-height: 20px;
//   }
// `;
