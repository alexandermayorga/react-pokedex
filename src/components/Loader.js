import React from 'react'
import loaderSrc from '../assets/loader.gif'

export default function Loader() {
    const style = {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
        background: "hsla(0, 0%, 79%, 0.9)",
        textAlign: "center",
        fontSize: "2rem",
        paddingTop: "30%"
    }
    return (
        <div className="loading" style={style}>
            <img src={loaderSrc} alt="Loader Icon" />
        </div>
    )
}
