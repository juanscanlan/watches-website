import { useContext } from "react";

import AuthContext from "../../../Context/AuthContext";

import { Link } from "react-router-dom";

const MobileNav = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const loggoutHandler = () => {
    authCtx.logout();
  };

  // const onClickHandler = (event) => {
  //   props.onOpenBurger();
  // };

  return (
    <div className="header__burger">
      {!isLoggedIn && (
        <Link to="/auth">
          <i class="fas fa-sign-in-alt"></i>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/Profile">
          <i class="fas fa-user"></i>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/" onClick={loggoutHandler}>
          <i class="fas fa-sign-out-alt"></i>
        </Link>
      )}
      {/* <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div> */}
    </div>
  );
};

export default MobileNav;
