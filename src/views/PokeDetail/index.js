import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
//import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import usePokemonsStore from '../../zustand/stores/pokemons'
function PokeDetail() {
  const { id } = useParams();
  //const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);
  const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = usePokemonsStore(state => ({getPokemonDetail: state.getPokemonDetail, pokemonDetail: state.pokemonDetail, isLoading: state.isLoading, hasError: state.hasError, errorMessage: state.errorMessage}))
  //Cuando cargue la pantalla o cambie el id solicitar el detalle del pokemon
  useEffect(() => {
    getPokemonDetail(id).catch(null);
  }, []);
  if (isLoading) {
    return <Loading title="Cargando pokemon ... " />;
  }
  return (
    <div>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <h3 style={{ marginTop: 15, marginBottom: 15 }}>Info General</h3>
          <p>{`Name: ${pokemonDetail?.name}`}</p>
          <p>{`Weight: ${pokemonDetail?.weight} Kgs.`}</p>
          <p>{`Height: ${pokemonDetail?.height} Cms.`}</p>
          <div>
            <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </>
      )}
    </div>
  );
}

export default PokeDetail;
