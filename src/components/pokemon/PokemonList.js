import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";
import Pagination from "./Pagination";
import { LinearProgress } from "@material-ui/core";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [pervPageUrl, setPervPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        // cancel request if we do a new one
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setPokemon(res.data.results);
        setNextPageUrl(res.data.next);
        setPervPageUrl(res.data.previous);
      });

    return () => cancel();
  }, [currentPageUrl]);

  if (loading) {
    return <LinearProgress />;
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(pervPageUrl);
  }

  return (
    <>
      {pokemon ? (
        <>
          <div className="pokemonList">
            {pokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="pokemonList__loading"></div>
      )}
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={pervPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default PokemonList;
