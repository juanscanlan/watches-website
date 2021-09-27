import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";

import Welcome from "./pages/Welcome";
import SellWatch from "./pages/SellWatch";
import Auth from "./pages/Auth";
import Profile from "./components/Profile/Profile";

import { CartProvider } from "./Context/CartProvider";

import AuthContext from "./Context/AuthContext";

import "./styles/main.scss";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <CartProvider>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/SellWatch">
              {authCtx.isLoggedIn ? <SellWatch /> : <Redirect to="/auth" />}
            </Route>
            <Route path="/Profile">
              {authCtx.isLoggedIn ? <Profile /> : <Redirect to="/auth" />}
            </Route>

            {!authCtx.isLoggedIn && (
              <Route path="/auth">
                <Auth />
              </Route>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
