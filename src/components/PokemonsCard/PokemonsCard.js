import React from 'react'
import './main.css'
import { capitalize } from '../../Helpers'
import { Link } from 'react-router-dom'

export default function PokemonsCard({pokemon}) {

    const pokeID = pokemon.url.split('/pokemon/')[1].split('/')[0];
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`

    return (
        <div className="col-xs-6 col-sm-4 col-md-3">
            <Link to={`/pokemon/${pokeID}`}>
                <div className="thumbnail thumbnail--light-grey" style={{ cursor: "pointer" }}>
                    <img src={imageSrc} alt={pokemon.name} />
                    <div className="caption">
                        <h3 className="text-center" style={{ marginTop: 0 }}>{capitalize(pokemon.name)}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}
