const Burger = (props) => {
  const onClickHandler = (event) => {
    props.onOpenBurger();
  };

  return (
    <div className="header__burger" onClick={onClickHandler}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
};

export default Burger;
