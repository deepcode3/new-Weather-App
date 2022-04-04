import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Favorite from "../Containers/Favorites";
import RecentSearch from "../Containers/RecentSearch";

const Routing = (props) => {
  // const {
  //   weather,
  //   setUnit,
  //   unit,
  //   icon,
  //   addfav,
  //   setAddfav,
  //   favcount,
  //   setFavcount,
  //   setWeather,
  //   setCity,
  // } = props;
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
            // weather={weather}
            // setUnit={setUnit}
            // unit={unit}
            // addfav={addfav}
            // setAddfav={setAddfav}
            // icon={icon}
            // favcount={favcount}
            // setFavcount={setFavcount}
            />
          }
        />

        <Route
          path="/Favorite"
          element={
            <Favorite
            // favcount={favcount}
            // weather={weather}
            // setWeather={setWeather}
            // setFavcount={setFavcount}
            />
          }
        />

        <Route
          path="/RecentSearch"
          element={
            <RecentSearch
            // weather={weather} setCity={setCity}
            />
          }
        />
      </Routes>
    </>
  );
};
export default Routing;
