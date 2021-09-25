import Home from "../components/Home/Body/Home";
import HomeFooter from "../components/Home/Body/HomeFooter";
import DailyDeals from "../components/Home/Body/DailyDeals/DailyDeals";
import MostPopular from "../components/Home/Body/MostPopular";
import BestSellers from "../components/Home/Body/BestSellers";
import HowItWorks from "../components/Home/Body/HowItWorks";
import Reviews from "../components/Home/Body/Reviews";
import ContactUs from "../components/Home/Body/ContactUs";
import Footer from "../components/Home/Footer/Footer";

import Stocks from "../components/Home/Stocks/Stocks";

function Welcome() {
  return (
    <div>
      <Home />
      <HomeFooter />
      <DailyDeals />

      <MostPopular />
      <BestSellers />
      <Stocks />
      <HowItWorks />
      <Reviews />
      <ContactUs />
    </div>
  );
}

export default Welcome;
