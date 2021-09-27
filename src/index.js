import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

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
