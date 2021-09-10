import cartImg from "../../../assets/header/cart.png";

import { CartContext } from "../../../Context/CartContext";

import { useContext } from "react";

const Cart = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const onClickHandler = (event) => {
    props.onClick();
  };

  return (
    <div className="header__navitems-cart" onClick={onClickHandler}>
      <img src={cartImg} alt="Shopping Cart" />
      <a>Cart</a>
      <span>{cart.length}</span>
    </div>
  );
};

export default Cart;
