import React, { useState, useEffect } from 'react';
import util from '../util';

const PokemonController = (props) => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        util.getPokemos().then(data => {
            setPokemons(data);
        });
    }, []);

    function handleInputChange(event) {
        const keyword = event.target.value;
        let filteredPokemons = util.filterByNameOrType(keyword, [...pokemons]);
        let sortedPokemons = util.sortByNameAndType(keyword, filteredPokemons)
        if(sortedPokemons.length > 4) {
            sortedPokemons = sortedPokemons.slice(0,4);
        }
        props.onChange(sortedPokemons);
    }

    return <>
        <label htmlFor="maxCP" className="max-cp">
            <input type="checkbox" id="maxCP" />
            <small>
                Maximum Combat Points
            </small>
        </label>
        <input type="text" className="input" placeholder="Pokemon or type" onChange={handleInputChange}/>
        <div className="loader"></div>
    </>;
}

export default PokemonController;