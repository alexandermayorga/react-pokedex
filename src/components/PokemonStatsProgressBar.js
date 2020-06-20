import React from 'react'

export default function PokemonStatsProgressBar({base, name}) {

    let progressBarColor;
    if (base < 20) { progressBarColor = "progress-bar-danger" }
    else if (base > 19 && base < 70) { progressBarColor = "progress-bar-warning" }
    else if (base > 70) { progressBarColor = "progress-bar-success" }

    return (
        <div className="pokemon__statProgressBar">
            <div className="pokemon__statProgressBarName"><strong>{name}</strong></div>
            <div className="progress">
                <div className={`progress-bar ${progressBarColor}`} role="progressbar" aria-valuenow={base} aria-valuemin="0" aria-valuemax="100" style={{ width: `${base}%` }}>
                    <span className="sr-only">{base}% Complete</span>
                    {base}
                </div>
            </div>
        </div>
    )
}
