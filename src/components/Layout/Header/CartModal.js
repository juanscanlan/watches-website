import { useContext } from "react";

import Modal from "react-modal";

import { CartContext } from "../../../Context/CartContext";

Modal.setAppElement("#overlays");

function CartModal(props) {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id} className="modal__box">
      <img src={item.image} alt="Cart item" />
      <div className="modal__itemContent">
        <div className="modal__itemContent-name">
          <h5>{item.name}</h5>
          <span>
            {item.description} {typeof item.amount}
          </span>
        </div>
        <div className="modal__itemContent-price">
          <select name="amountItem" id={item.id}>
            <option selected={item.amount === 1} value="1">
              1
            </option>
            <option selected={item.amount === 2} value="2">
              2
            </option>
            <option selected={item.amount === 3} value="3">
              3
            </option>
            <option selected={item.amount === 4} value="4">
              4
            </option>
            <option selected={item.amount >= 5} value="5">
              5+
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

  const cartConditionalRender =
    cartCtx.items.length === 0 ? emptyCart : cartItems;

  return (
    <Modal
      className="modal"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <ul className="modal__container">{cartConditionalRender}</ul>
      <div className="modal__total">
        <h4>Total</h4>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="modal__buttons">
        <button
          className="modal__buttons-cancel"
          onClick={props.onRequestClose}
        >
          Close
        </button>
        {cartCtx.totalAmount !== 0 && (
          <button className="modal__buttons-checkout">Checkout</button>
        )}
      </div>
    </Modal>
  );
}

export default CartModal;
