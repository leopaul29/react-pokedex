import React from "react";

function PokedexView() {
  return (
    <div>
      <h5>test</h5>
      <div className="pokedexFrame">
        <img src={pokedex} alt="" />
        <div className="pokedexFrame__image">
          <img src={this.state.imageUrl} alt="" />
        </div>
        <div className="pokedexFrame__index">
          <h5>{this.state.pokemonIndex}</h5>
        </div>
        <div className="pokedexFrame__name">
          <h4>{this.state.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default PokedexView;
