import Cart from "./Cart";

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
      {/* <a href="#home">Home</a>
      <a href="#dailyDeals">Sale</a>
      <a href="#mostPopular">Brands</a>
      <a href="#bestSellers">Best Sellers</a>
      <a href="#reviews">Reviews</a>
      <a href="#contactUs">Contact</a> */}
      {!isLoggedIn && <Link to="/auth">Login</Link>}
      {isLoggedIn && <Link to="/auth">Profile</Link>}
      {isLoggedIn && (
        <Link to="/" onClick={loggoutHandler}>
          Logout
        </Link>
      )}

      <Cart onClick={props.onClickCart} />
    </nav>
  );
};

export default Navitems;
