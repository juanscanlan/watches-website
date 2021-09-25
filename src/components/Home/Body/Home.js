import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home" id="home">
      <div className="home__text">
        <h2 className="home__text-title">High End Watches</h2>
        <p className="home__text-paragraph">
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.<br></br>
          Voluptas Accusamus Tempore Temporibus Rem Amet Laudantium Animi Optio
          Voluptatum.<br></br>
          Natus Obcaecati Unde Porro Nostrum Ipsam Itaque Impedit Incidunt Rem
          Quisquam Eos!
        </p>
        <a href="#dailyDeals">
          <button className="home__text-button">Buy a Watch</button>
        </a>

        <Link to="/SellWatch">
          <button className="home__text-button">Sell a Watch</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
