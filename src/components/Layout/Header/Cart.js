import cartImg from "../../../assets/header/cart.png";

import { CartContext } from "../../../Context/CartContext";

import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const onClickHandler = (event) => {
    props.onClick();
  };

  return (
    <div className="header__navitems-cart" onClick={onClickHandler}>
      <img src={cartImg} alt="Shopping Cart" />
      <p>Cart</p>
      <span>{numberOfCartItems}</span>
    </div>
  );
};

export default Cart;
