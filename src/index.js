import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

//import db from "./components/Firebase/Firebase";

import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
