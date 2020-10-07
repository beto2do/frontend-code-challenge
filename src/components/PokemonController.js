import React, { useState, useEffect, useRef } from 'react';
import util from '../util';

const PokemonController = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [isMaxCP, setIsMaxCP] = useState(false);
    const [isLoading, setIsloading] = useState(true);
    const refInput = useRef('');

    useEffect(() => {
        util.getPokemos().then(data => {
            setPokemons(data);
            setIsloading(false);
        });
    }, []);

    function getPokemons(keyword) {
        let filteredPokemons = util.filterByNameOrType(keyword, [...pokemons]);
        let sortedPokemons = isMaxCP ? util.sortByMaxCP(filteredPokemons): util.sortByNameAndType(keyword, filteredPokemons);
        if(sortedPokemons.length > 4) {
            sortedPokemons = sortedPokemons.slice(0,4);
        }
        return sortedPokemons;
    }

    function handleInputChange(event) {
        const keyword = event.target.value;
        const sortedPokemons = getPokemons(keyword);
        props.onChange({
            pokemons: sortedPokemons,
            keyword: keyword
        });
    }

    function handleMaxCPToogle(event) {
        const keyword = refInput.current.value;
        const sortedPokemons = getPokemons(keyword);
        setIsMaxCP(event.target.checked);
        props.onChange({
            pokemons: sortedPokemons,
            keyword: keyword
        });
    }

    const loader = isLoading ? <div className="loader"></div>: '';
    return <>
        <label htmlFor="maxCP" className="max-cp">
            <input type="checkbox" id="maxCP" onChange={handleMaxCPToogle}/>
            <small>
                Maximum Combat Points
            </small>
        </label>
        <input ref={refInput} type="text" className="input" placeholder="Pokemon or type" onChange={handleInputChange}/>
        {loader}
    </>;
}

export default PokemonController;