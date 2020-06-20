import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-main">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Pokedex</Link>
                </div>
            </div>
        </nav>
    )
}
