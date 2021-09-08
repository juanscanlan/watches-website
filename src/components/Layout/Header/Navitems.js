import cart from "../../../assets/header/cart.png";

const Navitems = (props) => {
  return (
    <nav className="header__navitems">
      <a href="#">Home</a>
      <a className="anchor" href="#dailyDeals">
        Sale
      </a>
      <a href="#mostPopular">Brands</a>
      <a href="#bestSellers">Best Sellers</a>
      <a href="#reviews">Reviews</a>
      <a href="#contactUs">Contact</a>
      <div className="header__navitems-cart">
        <img src={cart} alt="" />
        <a>Cart</a>
        <span>0</span>
      </div>
    </nav>
  );
};

export default Navitems;
