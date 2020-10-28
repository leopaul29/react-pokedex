import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import NavBar from "./components/layout/NavBar";
import Pokemon from "./components/pokemon/Pokemon";

// import "../node_modules/bulma/css/bulma.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
