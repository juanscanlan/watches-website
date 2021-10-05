import { useContext } from "react";

import { CartContext } from "../../../../Context/CartContext";

type DealProps = {
  key: string;
  image: string;
  info: {
    id: string;
    brand: string;
    description: string;
    newPrice: number;
    oldPrice: number;
  };
};

const DealElement: React.FunctionComponent<DealProps> = (props: DealProps) => {
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

  return (
    <div className="dailyDeals__box">
      <img src={props.image} alt="Daily Deal 1" />
      <h3>{props.info.brand}</h3>
      <span>{props.info.description}</span>
      <div className="dailyDeals__price">
        <span className="dailyDeals__price-new">${props.info.newPrice}</span>
        <span className="dailyDeals__price-old">${props.info.oldPrice}</span>
      </div>
      <button onClick={addToCartHandler} className="dailyDeals__button">
        Add to Cart
      </button>
    </div>
  );
};

export default DealElement;
