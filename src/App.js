import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubCorner from "react-github-corner";

import "./App.css";
import Dashboard from "./components/layout/Dashboard";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <GithubCorner
            href="https://github.com/leopaul29/react-pokedex"
            target="_blank"
            rel="noopener noreferrer"
            bannerColor="#CC0000"
            octoColor="#fff"
            size={80}
            direction="right"
          />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
