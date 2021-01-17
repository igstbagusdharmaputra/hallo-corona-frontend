import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./_store";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

import Profile from "./pages/Profile";
import AddArticle from "./dokter/AddArticle";
import DokterHome from "./dokter/Home";

import Reservation from "./pages/Reservation";

import NotFound from "./pages/404";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./assets/main.scss";

import * as serviceWorker from "./serviceWorker";

const role = localStorage.getItem("role");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {role > 0 ? (
          <Route exact path="/" component={DokterHome} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Route path="/profile" component={Profile} />
        <Route path="/add" component={AddArticle} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/article/:id" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
