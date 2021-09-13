import Header from "./components/Layout/Header/Header";
import Home from "./components/Layout/Body/Home";
import HomeFooter from "./components/Layout/Body/HomeFooter";
import DailyDeals from "./components/Layout/DailyDeals/DailyDeals";
import MostPopular from "./components/Layout/Body/MostPopular";
import BestSellers from "./components/Layout/Body/BestSellers";
import HowItWorks from "./components/Layout/Body/HowItWorks";
import Reviews from "./components/Layout/Body/Reviews";
import ContactUs from "./components/Layout/Body/ContactUs";
import Footer from "./components/Layout/Footer/Footer";

import { CartProvider } from "./Context/CartProvider";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Home />
        <HomeFooter />
        <DailyDeals />
        <MostPopular />
        <BestSellers />
      </CartProvider>
      <HowItWorks />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
