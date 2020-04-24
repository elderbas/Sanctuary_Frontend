import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Trips from "./components/Trips";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Main from "./components/Main";

ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={App} />
      </React.StrictMode>
    </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
