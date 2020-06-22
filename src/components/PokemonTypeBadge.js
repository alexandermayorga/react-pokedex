import React from 'react'
import './types.css'

export default function PokemonTypeBadge({type}) {
    let classType = `label label-${!type ? "default" : (type === "???" ? "unknown" : type)}`;

    return (
        <span className={classType}>{type}</span>
    )
}
