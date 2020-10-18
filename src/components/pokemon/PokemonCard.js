import React, { Component } from "react";
import "./PokemonCard.css";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pkoemonIndex: "",
  };

  render() {
    const {name, url} = this.props;

    return (
      <div className="pokemonCard">
        <div className="pokemonCard__header">
          <h1>{name}</h1>
        </div>
        <div className="pokemonCard__body">card body</div>
      </div>
    );
  }
}
