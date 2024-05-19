import React, { useEffect, useState } from 'react';
import TypeCard from '../components/type-card';

function Type() {
const [pokemonType, setPokemonType] = useState([]);

const fetchInfo = async () => {
    try {
        const typeResponse = await fetch('https://pokeapi.co/api/v2/type?limit=19');
        const typeData = await typeResponse.json();
        setPokemonType(typeData.results);
    } catch(typeError) {
        console.log('Feil ved henting av pokemon typene', typeError);
    }
};

React.useEffect(() => {
    fetchInfo();
}, []);




    return(
        <>
       <h1>Type</h1>
        <article className='pokemon-types'>
            {pokemonType.map((pokemon, index) => (
                <TypeCard
                key={index}
                name={pokemon.name}
                />
            ))}
        </article>
        </>
    )
}

export default Type;