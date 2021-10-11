import { useContext, useEffect } from 'react'
import Loading from '../../components/Loading';
import PokemonContext from '../../context/pokemons'
import PokemonList from './components/PokemonList';
import ErrorMessage from '../../components/ErrorMessage'
function Home() {
    const { getPokemons, pokemons, isLoading, hasError, errorMessage } = useContext(PokemonContext);
    useEffect(() => {
        getPokemons().catch(null);
    },[]);

    if(isLoading){
        return <Loading title="Cargando resultados ..."/>;
    }

    return (
        <>
        {hasError ? <ErrorMessage message={errorMessage} /> :  <PokemonList pokemons={pokemons} /> }
        </>
    )
}

export default Home
