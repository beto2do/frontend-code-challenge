import React from 'react';
import PokemonItem from './PokemonItem';

const ListPokemon = (props) => {

    let pokemons =  <PokemonItem />;

    if(props.pokemons.length > 0) {
        pokemons = props.pokemons.map(pokemon => {
            return (
                <PokemonItem key={pokemon.Number} 
                            name={pokemon.Name} 
                            img={pokemon.img} 
                            types={pokemon.Types} 
                            keyword={props.keyword}/>
            )
        });
    }

    return (
        <ul className="suggestions">
            {pokemons}
        </ul>
    );
}

export default ListPokemon;