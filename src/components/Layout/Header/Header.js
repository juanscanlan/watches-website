import HeaderLogo from "./HeaderLogo";
import Navitems from "./Navitems";
import Burger from "./Burger";

import { CartContext } from "../../../Context/CartContext";

import { useState, useContext } from "react";

import Modal from "react-modal";

const Header = (props) => {
  const [showBurgerNav, setShowBurgerNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useContext(CartContext);

  console.log(cart);

  const openBurger = () => {
    setShowBurgerNav((prevState) => !prevState);
  };

  const clickCartHandle = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <header className="header">
      <HeaderLogo />
      <Navitems onOpen={showBurgerNav} onClickCart={clickCartHandle} />
      <Burger onOpenBurger={openBurger} />
      <Modal
        className="modal"
        isOpen={openModal}
        onRequestClose={clickCartHandle}
      >
        <div className="modal__box">
          {cart.map((item) => (
            <div>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>${item.price}</div>
              <br></br>
            </div>
          ))}
        </div>
      </Modal>
    </header>
  );
};

export default Header;
