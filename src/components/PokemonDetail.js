import React from 'react';
import Hightlight from './Hightlight';

const PokemonDetail = (props) => {
    

    let info = <div className="info"><h1 className="no-results">No results</h1></div>;
    const types = props.types ? props.types.map(type => {
                    const classes = `type ${type.toLowerCase()}`;
                    return (<span key={type} className={classes}>type {type}</span>);
                }) : [];

    info = (<div className="info">
                <h1><Hightlight name={props.name} keyword={props.keyword}/></h1>
                {types}
            </div>);

    return info;
}

export default PokemonDetail;