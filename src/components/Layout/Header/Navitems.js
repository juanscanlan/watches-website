import Cart from "./Cart";

const Navitems = (props) => {
  let openCondition = `${
    !props.onOpen ? "header__navitems" : "header__navitems active"
  }`;

  return (
    <nav className={openCondition}>
      <a href="#home">Home</a>
      <a href="#dailyDeals">Sale</a>
      <a href="#mostPopular">Brands</a>
      <a href="#bestSellers">Best Sellers</a>
      <a href="#reviews">Reviews</a>
      <a href="#contactUs">Contact</a>
      <Cart onClick={props.onClickCart} />
    </nav>
  );
};

export default Navitems;
