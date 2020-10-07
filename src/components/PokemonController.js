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
        let filteredPokemons = util.filterByNameOrType(event.target.value, [...pokemons]);
        if(filteredPokemons.length > 4) {
            filteredPokemons = filteredPokemons.slice(0,4);
        }
        props.onChange(filteredPokemons);
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