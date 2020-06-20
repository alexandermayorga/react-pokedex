import React from 'react'
import PokemonStatsProgressBar from '../PokemonStatsProgressBar'

export default function PokemonStats({stats}) {
    return (

        stats.map(stat => {
            return <PokemonStatsProgressBar key={stat.stat.name} base={stat.base_stat} name={stat.stat.name}/>
        })

    )
}
