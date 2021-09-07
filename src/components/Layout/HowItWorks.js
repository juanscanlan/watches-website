import circle1 from "../../assets/howItWorks/circle1.svg";
import circle2 from "../../assets/howItWorks/circle2.svg";
import circle3 from "../../assets/howItWorks/circle3.svg";
import circle4 from "../../assets/howItWorks/circle4.svg";

const HowItWorks = (props) => {
  return (
    <div className="howItWorks">
      <h3 className="howItWorks__title">How It Works</h3>
      <div className="howItWorks__container">
        <div className="howItWorks__box">
          <img src={circle1} alt="" />
          <h3>Find your favourite watch</h3>
        </div>
        <div className="howItWorks__box">
          <img src={circle2} alt="" />
          <h3>Pay via secure transaction</h3>
        </div>

        <div className="howItWorks__box">
          <img src={circle3} alt="" />
          <h3>Recieve your new watch</h3>
        </div>
        <div className="howItWorks__box">
          <img src={circle4} alt="" />
          <h3>Transaction is confirmed</h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
