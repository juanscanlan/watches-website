import watch from "../../../assets/header/watchIcon.png";

const HeaderLogo = (props) => {
  return (
    <div className="header__logo">
      <img className="header__icon" src={watch} alt="" />
      <h1 className="header__logo-text">Watch Me</h1>
    </div>
  );
};

export default HeaderLogo;
