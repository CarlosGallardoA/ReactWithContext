import React from 'react'
import PokemonListItem from './PokemonListItem'

function PokemonList({ pokemons }) {
    return (
        <>
            {pokemons?.map((pokemon, index) => (
                <PokemonListItem key={index} {...pokemon}/>
            ))}
        </>
    )
}

export default PokemonList
