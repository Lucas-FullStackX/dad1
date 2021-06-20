import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, HashRouter as Router } from "react-router-dom";
import cards from "./componets/cards";
import card from "./componets/card";
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/cards" component={cards} />
    <Route path="/cards" component={card} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
