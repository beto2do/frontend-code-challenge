import React, { useState, useEffect } from 'react';
import util from '../util';

const PokemonController = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [isMaxCP, setIsMaxCP] = useState(false);

    useEffect(() => {
        util.getPokemos().then(data => {
            setPokemons(data);
        });
    }, []);

    function handleInputChange(event) {
        const keyword = event.target.value;
        let filteredPokemons = util.filterByNameOrType(keyword, [...pokemons]);
        let sortedPokemons = isMaxCP ? util.sortByMaxCP(filteredPokemons): util.sortByNameAndType(keyword, filteredPokemons);
        if(sortedPokemons.length > 4) {
            sortedPokemons = sortedPokemons.slice(0,4);
        }
        props.onChange({
            pokemons: sortedPokemons,
            keyword: keyword
        });
    }

    function handleMaxCPToogle(event) {
        setIsMaxCP(event.target.checked);
    }

    return <>
        <label htmlFor="maxCP" className="max-cp">
            <input type="checkbox" id="maxCP" onChange={handleMaxCPToogle}/>
            <small>
                Maximum Combat Points
            </small>
        </label>
        <input type="text" className="input" placeholder="Pokemon or type" onChange={handleInputChange}/>
        <div className="loader"></div>
    </>;
}

export default PokemonController;