import { useContext, useEffect } from "react";
import shallow from "zustand/shallow";
import Loading from "../../components/Loading";
//import PokemonContext from '../../context/pokemons'
import PokemonList from "./components/PokemonList";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonsStore from "../../zustand/stores/pokemons";
function Home() {
  //const { getPokemons, pokemons, isLoading, hasError, errorMessage } = useContext(PokemonContext);
  //shallow se usa para no renderizar componentes hay cambios
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    usePokemonsStore((state) => ({
      getPokemons: state.getPokemons,
      pokemons: state.pokemons,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.ErrorMessage,
    }),shallow);
  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Cargando resultados ..." />;
  }

  return (
    <>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}

export default Home;
