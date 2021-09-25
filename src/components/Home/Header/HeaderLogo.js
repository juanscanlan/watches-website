import watch from "../../../assets/header/watchIcon.png";

import { Link } from "react-router-dom";

const HeaderLogo = (props) => {
  return (
    <Link to="/" className="header__logo">
      <img className="header__icon" src={watch} alt="" />
      <h1 className="header__logo-text">Watch Me</h1>
    </Link>
  );
};

export default HeaderLogo;
