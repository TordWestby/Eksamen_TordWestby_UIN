import React, { useEffect, useState } from 'react';

function PokemonCard({ name, types}) {
    return(
        <div className='border-box'>
            <h2>Name: {name}</h2>
        </div>
    )
}

export default PokemonCard;