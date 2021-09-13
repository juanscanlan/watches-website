import { useContext, Fragment } from "react";

import Modal from "react-modal";

import { CartContext } from "../../../Context/CartContext";

Modal.setAppElement("#overlays");

function CartModal(props) {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
    //console.log(item);
  };

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
          <div
            className="modal__removeItem"
            value={item.id}
            onClick={() => removeItemHandler(item.id)}
          >
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </li>
  ));

  const fullCart = (
    <Fragment>
      <ul className="modal__container">{cartItems}</ul>
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
        <button className="modal__buttons-checkout">Checkout</button>
      </div>
    </Fragment>
  );

  const emptyCart = (
    <Fragment>
      <div className="modal__empty">
        <h4>The cart is empty!</h4>
      </div>
      <div className="modal__buttons">
        <button
          className="modal__buttons-cancel"
          onClick={props.onRequestClose}
        >
          Close
        </button>
      </div>
    </Fragment>
  );

  const cartConditionalRender =
    cartCtx.items.length === 0 ? emptyCart : fullCart;

  return (
    <Modal
      className="modal"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      {cartConditionalRender}
    </Modal>
  );
}

export default CartModal;
