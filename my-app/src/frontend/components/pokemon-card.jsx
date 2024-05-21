import React from 'react';

function PokemonCard({ name}) {
    return(
        <div className='border-box'>
            <p>{name}</p>
        </div>
    )
}

export default PokemonCard;