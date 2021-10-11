import React, { useState } from "react";
import PokemonContext from "./index";
import apiCall from "../../api";
function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState([false]);
  const [errorMessage, setErrorMessage] = useState([""]);
  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonsResult = await apiCall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
      setErrorMessage("Algun error ocurrio");
      setHasError(true); 
    }finally{
      setIsLoading(false);
    }
  };
  const getPokemonDetail = async (id) => {
    if(!id) Promise.reject("ID es requerido");
    try {
      setIsLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonDetail = await apiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      })
      setPokemonDetail(pokemonDetail)
    }catch (error){
      setPokemonDetail([])
      setErrorMessage("Algo paso loco");
      setHasError(true);
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <PokemonContext.Provider value={{ getPokemons, pokemons, getPokemonDetail, pokemonDetail, isLoading, errorMessage, hasError}}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
