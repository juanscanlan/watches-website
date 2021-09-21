import { Route } from "react-router-dom";

import Header from "./components/Home/Header/Header";

import Welcome from "./pages/Welcome";
import SellWatch from "./pages/SellWatch";
import AuthForm from "./components/Auth/AuthForm";

import { CartProvider } from "./Context/CartProvider";

import "./styles/main.scss";

function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <main>
          <Route path="/index">
            <Welcome />
          </Route>
          <Route path="/SellWatch">
            <SellWatch />
          </Route>
          <Route path="/auth">
            <AuthForm />
          </Route>
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
