import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nothing from "../Assets/icon_nothing.svg";
import weatherIcon from "../Assets/icon_rain_big.svg";
import icon_favorite_Active from "../Assets/icon_favourite_Active.svg";

const Favorite = (props) => {
  const { favcount, setFavcount, w } = props;
  const [favList, setFavlist] = useState([]);

  const Data = JSON.parse(localStorage.getItem("Fav"));

  // setFavlist(...favList, Data);
  console.log("Data", Data);

  console.log("favlist", favList);

  //  const data = localStorage.getItem("Favourite");
  //const Data = JSON.parse(data);
  //const Table = [];
  //Table.push(Data);
  //const Table = [];
  //  Table.push(weather);

  const Remover = () => {
    localStorage.removeItem("Fav");
    setFavcount(0);
  };
  const ex = [
    {
      name: "john",
      age: 76,
      tall: false,
    },
    {
      name: "john",
      age: 76,
      tall: false,
    },
    {
      name: "john",
      age: 76,
      tall: false,
    },
  ];

  let exs = Data.slice(1).map((e, key) => {
    return (
      <div className="favBox" key={key}>
        <span className="place">{`${e.name},Karnataka`}</span>
        <img src={weatherIcon} alt="weatherIcon" className="wicon" />
        <div className="temp">
          <span className="val">31</span>
          <span className="unit">o C</span>
        </div>
        <span className="place">Mostly sunny</span>
        <img src={icon_favorite_Active} alt="favHeart" />
      </div>
    );
  });
  console.log("favcount", favcount);
  //console.log("weather Type", typeof weather);
  return (
    <Div>
      {favcount === 0 ? (
        <div className="nothing">
          <img src={Nothing} alt="nothing" />
        </div>
      ) : (
        <div>
          <div className="headding">
            <span className="favcity">{`${favcount} cities added as favorites`}</span>
            <span className="favcity" onClick={Remover}>
              Remove All
            </span>
          </div>
          {exs}
          {/*{ex.map((data) => {
            <div className="favBox">
               <span className="place">{`${data.name},Karnataka`}</span>
              <img src={weatherIcon} alt="weatherIcon" className="wicon" />
              <div className="temp">
                <span className="val">31</span>
                <span className="unit">o C</span>
              </div>
              <span className="place">Mostly sunny</span>
              <img src={icon_favorite_Active} alt="favHeart" /> 
            </div>
          })}*/}
        </div>
      )}
    </Div>
  );
};
export default Favorite;
const Div = styled.div`
  position: relative;
  height: 410px;
  top: 162px;
  display: flex;
  flex-direction: column;
  // background-color: gray;
  .headding {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 70px;
  }
  .favcity {
    height: 15px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 15px;
    padding: 4px;
  }
  .favBox {
    height: 73px;
    width: 960px;
    //  opacity: 0.2;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
  .place {
    height: 19px;
    width: 300px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 19px;
    display: flex;
  }
  .wicon {
    height: 38px;
    width: 36px;
  }
  .temp {
    display: flex;
    height: 38px;
    width: 70px;
  }
  .val {
    height: 38px;
    width: 37px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 38px;
  }
  .unit {
    color: #ffffff;
    font-family: Roboto;
    font-size: 17px;
    font-weight: 200;
    letter-spacing: 0;
    line-height: 20px;
  }
  .nothing {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
