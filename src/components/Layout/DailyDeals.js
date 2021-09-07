import dailyDeal1 from "../../assets/dailyDeal1.jpg";
import dailyDeal2 from "../../assets/dailyDeal2.jpg";
import dailyDeal3 from "../../assets/dailyDeal3.jpg";
import dailyDeal4 from "../../assets/dailyDeal4.jpg";
import dailyDeal5 from "../../assets/dailyDeal5.jpg";

const DailyDeals = (props) => {
  return (
    <div className="dailyDeals" id="dailyDeals">
      <h3 className="dailyDeals__title">Daily Sale</h3>
      <div className="dailyDeals__container">
        <div className="dailyDeals__double">
          <div className="dailyDeals__box">
            <img src={dailyDeal2} alt="" />
            <h3>TISSOT</h3>
            <span>Chemin des Tourelles</span>
            <div className="dailyDeals__price">
              <a>$59.99</a>
              <span>$79.99</span>
            </div>
          </div>
          <div className="dailyDeals__box">
            <img src={dailyDeal3} alt="" />
            <h3>MIDO</h3>
            <span>Multifort</span>
            <div className="dailyDeals__price">
              <a>$59.99</a>
              <span>$79.99</span>
            </div>
          </div>
        </div>
        <div className="dailyDeals__double">
          <div className="dailyDeals__box">
            <img src={dailyDeal4} alt="" />
            <h3>TISSOT</h3>
            <span>Tour De France</span>
            <div className="dailyDeals__price">
              <a>$59.99</a>
              <span>$79.99</span>
            </div>
          </div>
          <div className="dailyDeals__box">
            <img src={dailyDeal5} alt="" />
            <h3>SEIKO</h3>
            <span>Silver Open Heart</span>
            <div className="dailyDeals__price">
              <a>$59.99</a>
              <span>$79.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
