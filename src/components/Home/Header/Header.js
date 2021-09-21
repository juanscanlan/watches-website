import HeaderLogo from "./HeaderLogo";
import Navitems from "./Navitems";
import Burger from "./Burger";
import CartModal from "./CartModal";

import { useState } from "react";

const Header = (props) => {
  const [showBurgerNav, setShowBurgerNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
      <CartModal isOpen={openModal} onRequestClose={clickCartHandle} />
    </header>
  );
};

export default Header;