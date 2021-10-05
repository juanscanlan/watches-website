import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__text">
        <h2 className="home__text-title" data-testid="home-title">
          High End Watches
        </h2>
        <p className="home__text-paragraph" data-testid="home-paragraph">
          Explore our collection of the most popular watches in the world.
          <br></br>
          Sell your own watches to our large collection of users.
        </p>
        <a href="#dailyDeals">
          <button className="home__text-buttonBuy" data-testid="home-btn-buy">
            Buy a Watch
          </button>
        </a>

        <Link to="/SellWatch">
          <button className="home__text-buttonSell" data-testid="home-btn-sell">
            Sell a Watch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
