import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonsList from "../components/PokemonsList";
import Pagination from '../components/Pagination';

export default function Pokemons() {
    const [currentPageURI, setcurrentPageURI] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokemons, setPokemons] = useState([])
    const [previousPageURI, setPreviousPageURI] = useState();
    const [nextPageURI, setNextPageURI] = useState();
    const [loading, setLoading] = useState(true);    

    function clickPrevious() {
        setcurrentPageURI(previousPageURI)
    }
    function clickNext() {
        setcurrentPageURI(nextPageURI)
    }

    useEffect(() => {
        setLoading(true)
        let cancel

        axios.get(currentPageURI, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setPreviousPageURI(res.data.previous)
            setNextPageURI(res.data.next)
            setPokemons(res.data.results.map(pokemon => pokemon))
        })

        //Cancel Old requests if new requests are made. This way old data doesn't load if old request finishes after new request
        return () => cancel();

    }, [currentPageURI])

    if (loading) return "Loading..."

    return (
        <div className="container">
            <div className="row">
                <Pagination 
                    clickPrevious={previousPageURI ? clickPrevious : null}
                    clickNext={nextPageURI ? clickNext : null}
                />
            </div>
            <div className="row">
                <PokemonsList pokemons={pokemons} />
            </div>
        </div>
    )
}
