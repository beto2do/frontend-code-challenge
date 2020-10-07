import React from 'react';

const PokemonDetail = (props) => {

    let info = <div className="info"><h1 className="no-results">No results</h1></div>;

    info = (<div className="info">
                <h1><span className="hl"> </span>{props.name}</h1>
                <span className="type electric">type electric</span>
                <span className="type normal">type normal</span>
            </div>);

    return info;
}

export default PokemonDetail;