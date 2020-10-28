import React, { Component } from "react";
import "./PokemonCard.css";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pkoemonIndex: "",
    imageLoading: true,
    toManyRequests: false,
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
        <Link to={`pokemon/${this.state.pokemonIndex}`}>
          <div class="pokemonCard__content">
            <div class="pokemonCard__front">
              {this.state.imageLoading ? <CircularProgress /> : null}
              <img
                className="pokemonCard__image"
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
            </div>
            <div class="pokemonCard__back">
              <p>No:{this.state.pokemonIndex}</p>
              <p className="pokemonCard__title">{this.state.name}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
