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
          <button className="home__text-button">View Collection</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
