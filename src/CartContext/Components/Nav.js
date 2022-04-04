import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";
import img3 from "../../Assets/icon_rain_big.svg";

const Nav = () => {
  const { items } = useContext(CartContext);
  return (
    <nav>
      <Link to="/">Wear</Link>
      <Link to="/checkout">
        <img src={img3} alt="image" />
        <span>{items.length}</span>
      </Link>
    </nav>
  );
};
export default Nav;
