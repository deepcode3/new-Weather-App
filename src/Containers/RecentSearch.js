import React from "react";
import styled from "styled-components";
import weatherIcon from "../Assets/icon_rain_big.svg";
import icon_favorite_Active from "../Assets/icon_favourite_Active.svg";

const RecentSearch = () => {
  return (
    <Div>
      <div className="heading">
        <span className="favcity">You Recently searched for</span>
        <span className="favcity"> Clear All</span>
      </div>
      <div className="favBox">
        <span className="place">Udupi,Karnataka</span>
        <img src={weatherIcon} alt="weatherIcon" className="wicon" />
        <div className="temp">
          <span className="val">31</span>
          <span className="unit">o C</span>
        </div>
        <span className="place">Mostly sunny</span>
        <img src={icon_favorite_Active} alt="favHeart" />
      </div>
    </Div>
  );
};
export default RecentSearch;
const Div = styled.div`
  position: relative;
  height: 410px;
  top: 162px;
  display: flex;
  flex-direction: column;
  // background-color: gray;
  .heading {
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
    margin: 0 auto;
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
`;
