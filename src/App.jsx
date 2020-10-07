import React, {useState} from 'react';
import './App.css';
import ListPokemon from './components/ListPokemon';
import PokemonControler from './components/PokemonController';

const App = () => {

    const [pokemons, setPokemons] = useState([]);

    function handleControllerChange(data) {
        setPokemons(data);
    }

    return (
        <>
            <PokemonControler onChange={handleControllerChange}/>
            <ListPokemon pokemons={pokemons}/>
        </>
    );
}

export default App;
