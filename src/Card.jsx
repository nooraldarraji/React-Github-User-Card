import React from 'react';

const Card = props => {
    console.log(props)
    return (
        <div>
            <h3>{props.login}</h3>
        </div>
    );
};

export default Card;
