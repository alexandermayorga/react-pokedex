import React from 'react'
import { Switch, Route } from "react-router-dom";
import Pokemons from "../containers/Pokemons";
import Pokemon from '../containers/Pokemon';

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Pokemons} />
            <Route path="/pokemon/:pokeId" component={Pokemon} />
        </Switch>
    )
}
