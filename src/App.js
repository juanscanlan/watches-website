import Header from "./components/Layout/Header/Header";
import Home from "./components/Layout/Home";
import DailyDeals from "./components/Layout/DailyDeals/DailyDeals";
import MostPopular from "./components/Layout/MostPopular";
import BestSellers from "./components/Layout/BestSellers";
import HowItWorks from "./components/Layout/HowItWorks";
import Reviews from "./components/Layout/Reviews";
import ContactUs from "./components/Layout/ContactUs";

import { CartProvider } from "./Context/CartContext";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <Home />

        <DailyDeals />
        <MostPopular />
        <BestSellers />
      </CartProvider>
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
