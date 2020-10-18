import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonList";
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <PokemonList />
      </div>
    );
  }
}
