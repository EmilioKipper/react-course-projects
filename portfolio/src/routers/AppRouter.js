import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio/:id?" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
