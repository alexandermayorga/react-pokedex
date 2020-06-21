import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Pokemons from "../containers/Pokemons";
import Pokemon from '../containers/Pokemon';

export default function Main() {
    return (
        <Switch>
            {/* <Route exact path="/" component={Pokemons} /> */}
            <Route path="/pokemon/:pokeId" component={Pokemon} />
            <Redirect exact from='/' to='/0' />
            <Route path="/:pageId" component={Pokemons} />
        </Switch>
    )
}
