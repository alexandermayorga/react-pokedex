import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import PokemonStats from "../components/PokemonStats/PokemonStats";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState()
    const [pokemonSpecies, setPokemonSpecies] = useState()
    const { pokeId } = useParams();

    const [pokemonDescription, setPokemonDescription] = useState()

    useEffect(()=>{
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data)
            })
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`)
            .then(res => {
                console.log(res.data)
                setPokemonSpecies(res.data)

                let description;
                res.data.flavor_text_entries.some((entry) => {
                    if (entry.language.name === "en"){
                        description = entry.flavor_text;
                        return null;
                    };
                    
                })

                setPokemonDescription(description)

            })
        
    },[])

    if (!pokemon) return <p>Loading...</p>

    return (
        <div className="pokemon">
            <div className="container">
                <div className="row">

                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">#{pokemon.id} {pokemon.name}</h3>
                                {
                                    pokemon.types.map(t => {
                                        return <span key={t.type.name} className="label label-danger">{t.type.name}</span>
                                    })
                                }
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="img-thumbnail "/>
                                        {pokemonDescription}
                                    </div>
                                    <div className="col-sm-6">
                                        <PokemonStats stats={pokemon.stats} />
                                    </div>
                                    <div className="col-sm-12">
                                        weight: {pokemon.weight}<br />
                                    height: {pokemon.height}<br />
                                    base experience: {pokemon.base_experience}
                                    </div>
                                    <div className="col-sm-12">
                                        {
                                            pokemon.abilities.map(a => <div key={a.ability.name}>{a.ability.name}</div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
