import React, { Component } from "react";
import "./PokemonCard.css";

import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pkoemonIndex: "",
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="pokemonCard">
        <div className="pokemonCard__header">
          <h5>{this.state.pokemonIndex}</h5>
        </div>
        <div className="pokemonCard__body">
          {this.state.imageLoading ? <CircularProgress /> : null}
          <Sprite
            className="pokemonCard__header__image"
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            src={this.state.imageUrl}
            style={
              this.state.toManyRequests
                ? { display: "none" }
                : this.state.imageLoading
                ? null
                : { display: "block" }
            }
          />
          {this.state.toManyRequests ? (
            <h6>
              <span>To Many Request</span>
            </h6>
          ) : null}
          <h6 className="pokemonCard__title">{this.state.name}</h6>
        </div>
      </div>
    );
  }
}
