import React, { Component } from "react";
import axios from "axios";
import Chip from "@material-ui/core/Chip";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

export default class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: "",
    },
    height: "",
    weight: "",
    eggGroup: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: "",
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    // Urls for pokemon informations
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;

    // Get pokemonInfo
    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
    pokemonRes.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
      }
    });
    // converts to cm
    const height = pokemonRes.data.height * 10;
    // converts to kg
    const weight = pokemonRes.data.weight * 10;
    const types = pokemonRes.data.types.map((type) => type.type.name);
    const abilities = pokemonRes.data.abilities.map((ability) => {
      return ability.ability.name;
    });
    const evs = pokemonRes.data.stats
      .filter((stat) => {
        return stat.effort > 0;
      })
      .map((stat) => {
        return `${stat.effort} ${stat.stat.name}`;
      });

    this.setState({
      imageUrl,
      pokemonIndex,
      name,
      types,
      state: { hp, attack, defense, speed, specialAttack, specialDefense },
      height,
      weight,
      abilities,
      evs,
    });

    // Get Pokemon Description, Catch Rate, EggGroups, Gender Ratio, Hatch Steps
    await axios.get(pokemonSpeciesUrl).then((res) => {
      let description = "";
      res.data.flavor_text_entries.some((flavor) => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return;
        }
      });

      const femaleRate = res.data["gender_rate"];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round((100 / 255) * res.data["capture_rate"]);

      const eggGroups = res.data["egg_groups"].map((group) => {
        return group.name;
      });

      const hatchSteps = 255 * (res.data["hatch_counter"] + 1);

      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroups,
        hatchSteps,
      });
    });
  }

  render() {
    return (
      <div className="pokemonCard">
        <div className="pokemonCard__header">
          <div className="pokemonCard__headerLeft">
            <h5>{this.state.pokemonIndex}</h5>
          </div>
          <div className="pokemonCard__headerRight">
            {this.state.types.map((type) => (
              <Chip
                size="small"
                label={type}
                key={type}
                style={{
                  backgroundColor: `#${TYPE_COLORS[type]}`,
                  color: "white",
                }}
              />
            ))}
          </div>
        </div>
        <div className="pokemonCard__body">
          <div className="pokemonCard__image">
            <img src={this.state.imageUrl} alt="" />
          </div>
          <div className="pokemonCard__description">
            <h4>{this.state.name}</h4>
          </div>
        </div>
      </div>
    );
  }
}
