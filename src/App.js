import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home";
import Details from "./containers/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/city">
          <Details />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
