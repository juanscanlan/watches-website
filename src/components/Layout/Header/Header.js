import HeaderLogo from "./HeaderLogo";
import Navitems from "./Navitems";
import Burger from "./Burger";

const Header = (props) => {
  return (
    <header className="header">
      <HeaderLogo />
      <Navitems />
      <Burger />
    </header>
  );
};

export default Header;
