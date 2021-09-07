import Header from "./components/Layout/Header";
//import Body from "./components/Layout/Body";
import Home from "./components/Layout/Home";
import DailyDeals from "./components/Layout/DailyDeals";
import MostPopular from "./components/Layout/MostPopular";
import BestSellers from "./components/Layout/BestSellers";
import HowItWorks from "./components/Layout/HowItWorks";
import Reviews from "./components/Layout/Reviews";
import ContactUs from "./components/Layout/ContactUs";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <hr></hr>
      <DailyDeals />
      <hr></hr>
      <MostPopular />
      <hr></hr>
      <BestSellers />
      <HowItWorks />
      <Reviews />
      <ContactUs />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
