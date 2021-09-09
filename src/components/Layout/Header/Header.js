import HeaderLogo from "./HeaderLogo";
import Navitems from "./Navitems";
import Burger from "./Burger";

import { useState } from "react";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const openBurger = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <HeaderLogo />
      <Navitems onOpen={open} />
      <Burger onOpenBurger={openBurger} />
    </header>
  );
};

export default Header;
