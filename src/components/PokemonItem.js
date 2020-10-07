import React from 'react';
import PokemonDetail from './PokemonDetail';

const PokemonItem = (props) => {

    const imgSrc = props.img ? props.img: 'https://cyndiquil721.files.wordpress.com/2014/02/missingno.png';

    return (
        <li>
            <img src={imgSrc} alt={props.name} />
            <PokemonDetail name={props.name} types={props.types}/>
        </li>
    );
}

export default PokemonItem;