import React from 'react'
import PokemonsCard from './PokemonsCard/PokemonsCard'

export default function PokemonList({pokemons}) {
    return (
        pokemons.map((pokemon => {
            return <PokemonsCard  key={pokemon.name}pokemon={pokemon}/>
        }))
    )
}
