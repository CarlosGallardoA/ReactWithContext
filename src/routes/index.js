import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Four from "../views/404";
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../components/ScrollToTop"
function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pokemon/:id">
            <PokeDetail />
        </Route>
        <Route path="/404">
            <Four/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
