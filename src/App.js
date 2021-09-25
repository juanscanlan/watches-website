import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";

import Welcome from "./pages/Welcome";
import SellWatch from "./pages/SellWatch";
import AuthForm from "./components/Auth/AuthForm";

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
            {authCtx.isLoggedIn ? (
              <Route path="/SellWatch">
                <SellWatch />
              </Route>
            ) : (
              <Route path="/auth">
                <AuthForm targetPage="SellWatch" />
              </Route>
            )}

            {!authCtx.isLoggedIn && (
              <Route path="/auth">
                <AuthForm />
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
