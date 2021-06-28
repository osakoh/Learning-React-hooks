import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import LoginState from "./store/login/LoginState";
// import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <LoginState>
    <App />,
  </LoginState>,
  document.getElementById("root")
);
