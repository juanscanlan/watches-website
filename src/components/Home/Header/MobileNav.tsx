import { useContext } from "react";

import AuthContext from "../../../Context/AuthContext";

import { Link } from "react-router-dom";

const MobileNav = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const loggoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className="header__burger">
      {!isLoggedIn && (
        <Link to="/auth">
          <i className="fas fa-sign-in-alt"></i>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/Profile">
          <i className="fas fa-user"></i>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/" onClick={loggoutHandler}>
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
