import React, { Component } from "react";
import "./PokemonCard.css";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  // transition: all 0, s cubic-bezier(0.25, 0.8, 0.25, 1);
  // &:hover {
  //   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  // }
  // -moz-user-sekect: none;
  // -webkit-user-select: none;
  // user-select: none;
  // -o-user-select: none;
`;

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
      <div className="pokemonCard__frame tile is-3">
        <Link to={`pokemon/${this.state.pokemonIndex}`}>
          <Card className="pokemonCard card">
            <div className="pokemonCard__body">
              {this.state.imageLoading ? <CircularProgress /> : null}
              <Sprite
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
              <h5>No:{this.state.pokemonIndex}</h5>
              <h6 className="pokemonCard__title title">{this.state.name}</h6>
            </div>
          </Card>
        </Link>
      </div>
    );
  }
}
