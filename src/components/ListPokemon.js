import React from 'react';
import PokemonItem from './PokemonItem';

const ListPokemon = (props) => {

    const pokemons = props.pokemons? props.pokemons: [];

    return (
        <ul className="suggestions">
            {pokemons.map(pokemon => <PokemonItem key={pokemon.Number} name={pokemon.Name} img={pokemon.img}/>)}
        </ul>
    );
}

export default ListPokemon;