import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { capitalize } from '../Helpers'
import { useParams, useHistory } from "react-router-dom"
import PokemonStats from "../components/PokemonStats/PokemonStats";
import Pagination from '../components/Pagination';
import PokemonTypeBadge from '../components/PokemonTypeBadge'
import Loader from "../components/Loader"

export default function Pokemon() {
    const { pokeId } = useParams();
    const [pokemonId, setpokemonId] = useState()
    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(false)

    const history = useHistory();

    function clickPrevious() {
        const newId = parseInt(pokeId) - 1;
        history.push(`${newId}`);
        setpokemonId(newId)
    }
    function clickNext() {
        const newId = parseInt(pokeId) + 1;
        history.push(`${newId}`);
        setpokemonId(newId)
    }
    function getPokemon() {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    }
    function getPokemonSpecies() {
        return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`)
    }

    useEffect(()=>{
        setLoading(true)
        axios.all([getPokemon(), getPokemonSpecies()])
            .then(axios.spread(function (pokemon, pSpecies) {
                // Both requests are now complete
                console.log("Dukies",pokemon,pSpecies)
                const pokemonData = pokemon.data;

                pokemonData['description'] = pSpecies.data.flavor_text_entries.find(entry => entry.language.name === "en").flavor_text
                setPokemon(pokemonData)
                setLoading(false)

            }));
        
    }, [pokemonId])

    if (!pokemon) return <Loader />

    return (
        <div className="pokemon">
            <div className="container">

                <div className="row">
                    <Pagination
                        clickPrevious={clickPrevious}
                        clickNext={clickNext}
                    />
                </div>

                <div className="row">

                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h3 className="panel-title">#{pokemon.id} {capitalize(pokemon.name)}</h3>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="text-right">
                                            {
                                                pokemon.types.map(t => {
                                                    // return <span key={t.type.name} className="label label-danger">{t.type.name}</span>
                                                    return <PokemonTypeBadge key={t.type.name} type={t.type.name} />

                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                
                                {  loading  && <Loader /> }
                                
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img style={{width: "130px"}} src={pokemon.sprites.front_default} alt={pokemon.name} className="img-thumbnail center-block"/>
                                        <div>{pokemon.description}</div>
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
                                        <h3>Abilities</h3>
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
