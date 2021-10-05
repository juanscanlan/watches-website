import { useContext } from "react";

import AuthContext from "../../../Context/AuthContext";

import { Link } from "react-router-dom";

const Navitems = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const loggoutHandler = () => {
    authCtx.logout();
  };

  let openCondition = `${
    !props.onOpen ? "header__navitems" : "header__navitems active"
  }`;

  return (
    <nav className={openCondition}>
      {!isLoggedIn && <Link to="/auth">Login</Link>}
      {isLoggedIn && <Link to="/Profile">Profile</Link>}
      {isLoggedIn && (
        <Link to="/" onClick={loggoutHandler}>
          Logout
        </Link>
      )}
    </nav>
  );
};

export default Navitems;
