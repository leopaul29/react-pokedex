import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import NavBar from "./components/layout/NavBar";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <div className="container">
            <Switch>
              <Router exact path="/" component={Dashboard} />
              <Router exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
