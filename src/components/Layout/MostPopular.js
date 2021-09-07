import popular1 from "../../assets/mostPopular/rolex2.jpg";
import popular2 from "../../assets/mostPopular/tagHeuer1.jpg";
import popular3 from "../../assets/mostPopular/omega1.jpg";
import popular4 from "../../assets/mostPopular/cartier1.jpg";
import popular5 from "../../assets/mostPopular/grandSeiko1.jpg";
import popular6 from "../../assets/mostPopular/hermes1.jpg";

const MostPopular = (props) => {
  return (
    <div className="mostPopular" id="mostPopular">
      <h3 className="mostPopular__title">Most Popular Brands</h3>
      <a className="mostPopular__allBrands" href="index.html">
        View All Brands {">"}
      </a>
      <div className="mostPopular__container">
        <div className="mostPopular__box">
          <img src={popular1} alt="" />
          <h3>ROLEX</h3>
          <button>Explore Collection</button>
        </div>
        <div className="mostPopular__box">
          <img src={popular2} alt="" />
          <h3>TAG HEUER </h3>
          <button>Explore Collection</button>
        </div>

        <div className="mostPopular__box">
          <img src={popular3} alt="" />
          <h3>OMEGA</h3>
          <button>Explore Collection</button>
        </div>
        <div className="mostPopular__box">
          <img src={popular4} alt="" />
          <h3>CARTIER</h3>
          <button>Explore Collection</button>
        </div>
        <div className="mostPopular__box">
          <img src={popular5} alt="" />
          <h3>GRAND SEIKO</h3>
          <button>Explore Collection</button>
        </div>
        <div className="mostPopular__box">
          <img src={popular6} alt="" />
          <h3>HERMES </h3>
          <button>Explore Collection</button>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
