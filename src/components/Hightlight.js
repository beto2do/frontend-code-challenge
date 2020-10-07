import React from 'react';
import util from '../util';

const Highlight = (props) => {
    const parts = util.splitName(props.keyword, props.name);

    return  parts.map(word => {
        const className = word === props.keyword ? 'hl': '';
        return <span key={word} className={className}>{word}</span>;
    })
}

export default Highlight;