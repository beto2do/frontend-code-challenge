import React, {useState} from 'react';
import './App.css';
import ListPokemon from './components/ListPokemon';
import PokemonControler from './components/PokemonController';

const App = () => {

    const [pokemons, setPokemons] = useState([]);
    const [keyword, setKeyword] = useState('');

    function handleControllerChange(data) {
        setPokemons(data.pokemons);
        setKeyword(data.keyword);
    }

    return (
        <>
            <PokemonControler onChange={handleControllerChange}/>
            <ListPokemon pokemons={pokemons} keyword={keyword}/>
        </>
    );
}

export default App;
