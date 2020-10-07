import React from 'react';

const PokemonDetail = (props) => {

    let info = <div className="info"><h1 className="no-results">No results</h1></div>;
    const types = props.types ? props.types.map(type => {
                    const classes = `type ${type.toLowerCase()}`;
                    return (<span className={classes}>type {type}</span>);
                }) : [];
    info = (<div className="info">
                <h1><span className="hl"> </span>{props.name}</h1>
                {types}
            </div>);

    return info;
}

export default PokemonDetail;