import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/pokemon-card';

export default function Home() {
    const [pokemonData, setPokemonData] = useState([]);

    const fetchData = async () => {
        try  {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
            const data = await response.json();
            setPokemonData(data.results);
        } catch(error) {
            console.error('Feil ved henting av data', error);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='pokecard'>
            {pokemonData.map((pokemon, index) => (
                <PokemonCard
                key={index}
                name={pokemon.name}
                />
            ))}
        </div>
    );
}
/*
Denne koden er basert på denne innleveringen jeg leverte i en tidligere oblig i faget UIN. https://github.com/TordWestby/uin23ak4_booksearch_Westby/blob/Delivery/my-app/src/components/home.jsx
*/

{/*
    todo:
        1. Få hentet ut navnet på alle pokemonene for å få en E...✔️
        2. Hente ut alle pokemon typene i henhold til skissen (samme punkt)
        3. 

*/}