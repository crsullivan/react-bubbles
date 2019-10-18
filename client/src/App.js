import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage';
import PrivateRoute from "./components/PrivateRoute";
import NavBar from './components/NavBar';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/bubble-page" component={BubblePage} />
        </Switch>
    </Router>
  );
}

export default App;
