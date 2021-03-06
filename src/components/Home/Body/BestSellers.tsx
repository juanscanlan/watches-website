import bestSeller1 from "../../../assets/bestSellers/bestSeller1.png";
import bestSeller2 from "../../../assets/bestSellers/bestSeller2.png";
import bestSeller3 from "../../../assets/bestSellers/bestSeller10.png";
import bestSeller4 from "../../../assets/bestSellers/bestSeller4.png";
import bestSeller5 from "../../../assets/bestSellers/bestSeller5.png";
import bestSeller6 from "../../../assets/bestSellers/bestSeller6.png";
import bestSeller7 from "../../../assets/bestSellers/bestSeller7.png";
import bestSeller8 from "../../../assets/bestSellers/bestSeller8.png";

const BestSellers = () => {
  return (
    <div className="bestSellers" id="bestSellers">
      <h3 className="bestSellers__title">🎉 Best Sellers 🎉</h3>
      <div className="bestSellers__container">
        <div className="bestSellers__double">
          <div className="bestSellers__box">
            <img src={bestSeller1} alt="Best seller 1" />
            <div className="bestSellers__description">
              <h3>ROLEX</h3>
              <a href="#bestSellers">Submariner</a>
            </div>
          </div>
          <div className="bestSellers__box">
            <img src={bestSeller2} alt="" />
            <div className="bestSellers__description">
              <h3>ROLEX</h3>
              <a href="#bestSellers">Daytona</a>
            </div>
          </div>
        </div>
        <div className="bestSellers__double">
          <div className="bestSellers__box">
            <img src={bestSeller3} alt="" />
            <div className="bestSellers__description">
              <h3>AUDEMARS</h3>
              <a href="#bestSellers">RoyalOak</a>
            </div>
          </div>
          <div className="bestSellers__box">
            <img src={bestSeller4} alt="" />
            <div className="bestSellers__description">
              <h3>BRIETLING</h3>
              <a href="#bestSellers">Navitimer</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bestSellers__container">
        <div className="bestSellers__double">
          <div className="bestSellers__box">
            <img src={bestSeller5} alt="" />
            <div className="bestSellers__description">
              <h3>ROLEX</h3>
              <a href="#bestSellers">Datejust</a>
            </div>
          </div>
          <div className="bestSellers__box">
            <img src={bestSeller6} alt="" />
            <div className="bestSellers__description">
              <h3>ROLEX</h3>
              <a href="#bestSellers">DayDate</a>
            </div>
          </div>
        </div>
        <div className="bestSellers__double">
          <div className="bestSellers__box">
            <img src={bestSeller7} alt="" />
            <div className="bestSellers__description">
              <h3>OMEGA</h3>
              <a href="#bestSellers">Seamaster</a>
            </div>
          </div>
          <div className="bestSellers__box">
            <img src={bestSeller8} alt="" />
            <div className="bestSellers__description">
              <h3>OMEGA</h3>
              <a href="#bestSellers">Speedmaster</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
