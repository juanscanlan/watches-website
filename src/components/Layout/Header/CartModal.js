import item1 from "../../../assets/dailyDeals/dailyDeal2.jpg";

import { useContext } from "react";

import Modal from "react-modal";

import { CartContext } from "../../../Context/CartContext";

function CartModal(props) {
  const [cart, setCart] = useContext(CartContext);

  const cartTotal = cart.reduce((s, a) => s + a.newPrice, 0);

  let itemCounter = {};

  cart.forEach(function (obj) {
    var key = JSON.stringify(obj.id);
    itemCounter[key] = (itemCounter[key] || 0) + 1;
  });
  console.log(itemCounter);

  const filteredCart = cart.filter((item) => {});

  const cartItems = cart.map((item) => (
    <li className="modal__box">
      <img src={item.image} alt="Cart item" />
      <div className="modal__itemContent">
        <div className="modal__itemContent-name">
          <h5>{item.name}</h5>
          <span>{item.description}</span>
        </div>
        <div className="modal__itemContent-price">
          <select name="amountItem" id={item.id}>
            <option select={itemCounter[item.id] == 1} value="1">
              1
            </option>
            <option select={itemCounter[item.id] == 2} value="2">
              2
            </option>
            <option select={itemCounter[item.id] == 3} value="3">
              3
            </option>
            <option select={itemCounter[item.id] >= 4} value="4">
              4
            </option>
          </select>
          <div className="modal__priceDiv">
            <p className="modal__priceDiv-oldPrice">${item.oldPrice}</p>
            <p className="modal__priceDiv-newPrice">${item.newPrice}</p>
          </div>
        </div>
      </div>
    </li>
  ));

  const emptyCart = (
    <div className="modal__empty">
      <h4>The cart is empty!</h4>
    </div>
  );

  const cartConditionalRender = cart.length === 0 ? emptyCart : cartItems;

  return (
    <Modal
      className="modal"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <ul className="modal__container">{cartConditionalRender}</ul>
      <div className="modal__total">
        <h4>Total</h4>
        <span>${cartTotal}</span>
      </div>
      <div className="modal__buttons">
        <button
          className="modal__buttons-cancel"
          onClick={props.onRequestClose}
        >
          Cancel
        </button>
        <button className="modal__buttons-checkout">Checkout</button>
      </div>
    </Modal>
  );
}

export default CartModal;
