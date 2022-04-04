import React, { useContext } from "react";
import Img1 from "../../Assets/icon_mostly_sunny_small.svg";
import Img2 from "../../Assets/icon_thunderstorm_small.svg";
import CartContext from "../CartContext";

const Card = ({ name, price }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div onClick={() => addItem(name, price)}>
      <img src={Img1} alt="Image1" />
      <div>
        <h1>{name}</h1>
        <img src={Img2} alt="Image2" />
      </div>
      <h2>{price}</h2>
    </div>
  );
};
export default Card;
