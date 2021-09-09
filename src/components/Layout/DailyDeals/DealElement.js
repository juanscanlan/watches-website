import { useContext } from "react";

import { CartContext } from "../../../Context/CartContext";

const DealElement = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const watch = {
      name: props.info.brand,
      description: props.info.description,
      price: props.info.newPrice,
    };
    setCart((currentState) => [...currentState, watch]);
  };

  return (
    <div className="dailyDeals__box">
      <img src={props.image} alt="Daily Deal 1" />
      <h3>{props.info.brand}</h3>
      <span>{props.info.description}</span>
      <div className="dailyDeals__price">
        <a>{props.info.newPrice}</a>
        <span>{props.info.oldPrice}</span>
      </div>
      <button onClick={addToCart} className="dailyDeals__button">
        Add to Cart
      </button>
    </div>
  );
};

export default DealElement;
