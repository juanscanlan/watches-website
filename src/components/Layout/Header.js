const Header = (props) => {
  return (
    <header className="header">
      <div className="header__title">
        <i class="far fa-clock header__title-icon"></i>
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
        <a href="#contactUs">Contact Us</a>
        <i class="fas fa-shopping-cart header__navbar-button"> Cart</i>
      </nav>
    </header>
  );
};

export default Header;
