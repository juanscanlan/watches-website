import Header from "./components/Layout/Header/Header";
import Home from "./components/Layout/Home";
import HomeFooter from "./components/Layout/HomeFooter";
import DailyDeals from "./components/Layout/DailyDeals/DailyDeals";
import MostPopular from "./components/Layout/MostPopular";
import BestSellers from "./components/Layout/BestSellers";
import HowItWorks from "./components/Layout/HowItWorks";
import Reviews from "./components/Layout/Reviews";
import ContactUs from "./components/Layout/ContactUs";
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
