import cart from "../../assets/header/cart.png";
import watch from "../../assets/header/watchIcon.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__title">
        <img className="header__icon" src={watch} alt="" />
        <h1 className="header__title-text">WatchMe</h1>
      </div>
      <nav className="header__navbar">
        <a href="#">Home</a>
        <a className="anchor" href="#dailyDeals">
          Sale
        </a>
        <a href="#mostPopular">Brands</a>
        <a href="#bestSellers">Best Sellers</a>
        <a href="#reviews">Reviews</a>
        <a href="#contactUs">Contact</a>
        <div className="header__navbar-cart">
          <img src={cart} alt="" />
          <a>Cart</a>
          <span>0</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
