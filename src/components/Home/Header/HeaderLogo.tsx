import watch from "../../../assets/header/watchIcon2.png";

import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="header__logo">
      <img className="header__icon" src={watch} alt="" />
      <h1 className="header__logo-text">Watch Me</h1>
      <h1 className="header__logo-textMobile">WM</h1>
    </Link>
  );
};

export default HeaderLogo;
