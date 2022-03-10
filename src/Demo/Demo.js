import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Demo = () => {
  const [city, setCity] = useState("London");
  const [search, setSearch] = useState({});
  const [w, setW] = useState({});

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c4838d1d400345df0010c064351315b`
      );
      setSearch(res.data);
      setW(res.data.weather[0]);
      console.log(res.data);
      console.log("main", res.data.weather[0].main);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);

  let Icon = null;
  if (typeof search.main != "undefined") {
    if (w.main == "Clouds") {
      Icon = mostly_cloudy_big;
    } else if (w.main == "Thunderstorm") {
      Icon = thunderstrom_big;
    } else if (w.main == "Drizzle") {
      Icon = rain_big;
    } else if (w.main == "Rain") {
      Icon = rain_small;
    } else if (w.main == "Snow") {
      Icon = clear_night;
    } else {
      Icon = mostly_sunny;
    }
  } else {
    return <div>.......Loading</div>;
  }

  return (
    <div>
      <input
        placeholder="search"
        type="text"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="button" onClick={fetchWeather}>
        Search
      </button>
      <div>
        <img src={Icon} alt="icon" />
      </div>
      <br />
      {search === undefined ? (
        <span>Nothing</span>
      ) : (
        <span>
          {search.name},{search?.weather[0].main},{w.main}
        </span>
      )}
      <br />
    </div>
  );
};
export default Demo;
