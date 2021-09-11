import { useContext } from "react";

import { CartContext } from "../../../Context/CartContext";

const DealElement = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.info.id,
      name: props.info.brand,
      description: props.info.description,
      amount: 1,
      newPrice: props.info.newPrice,
      oldPrice: props.info.oldPrice,
      image: props.image,
    });
  };

  // const [cart, setCart] = useContext(CartContext);

  // const addToCart = () => {
  //   const watch = {
  //     id: props.info.id,
  //     name: props.info.brand,
  //     description: props.info.description,
  //     newPrice: props.info.newPrice,
  //     oldPrice: props.info.oldPrice,
  //     image: props.image,
  //   };
  //   setCart((currentState) => [...currentState, watch]);
  // };

  return (
    <div className="dailyDeals__box">
      <img src={props.image} alt="Daily Deal 1" />
      <h3>{props.info.brand}</h3>
      <span>{props.info.description}</span>
      <div className="dailyDeals__price">
        <p>${props.info.newPrice}</p>
        <span>${props.info.oldPrice}</span>
      </div>
      <button onClick={addToCartHandler} className="dailyDeals__button">
        Add to Cart
      </button>
    </div>
  );
};

export default DealElement;
