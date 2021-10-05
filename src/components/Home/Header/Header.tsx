import HeaderLogo from "./HeaderLogo";
import Navitems from "./Navitems";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import CartModal from "./CartModal";

import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const clickCartHandle = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <header className="header">
      <HeaderLogo />
      <div className="navContainer">
        <Navitems />
        <MobileNav />
        <Cart onClick={clickCartHandle} />
      </div>

      <CartModal isOpen={openModal} onRequestClose={clickCartHandle} />
    </header>
  );
};

export default Header;
