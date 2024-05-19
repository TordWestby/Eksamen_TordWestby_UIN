import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/pokemon-card';
import TypeCard from '../components/type-card';

//Henter ut de 9 første pokemonene!
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


    //Henter ut pokemon typene!
    const [Pokemontype, setPokemonType] = useState([]);

    const fetchInfo = async () => {
        try {
            const typeResponse = await fetch('https://pokeapi.co/api/v2/type');
            const typeData = await typeResponse.json();
            setPokemonType(typeData.results);
        } catch(typeError) {
            console.log('Feil ved henting av pokemon typene', typeError);
        }
    };

    React.useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <>
        <article id='home'>
            <h1>Main Pokemons</h1>
            <article className='main-pokemons'>
            {pokemonData.map((pokemon, index) => (
                <PokemonCard
                key={index}
                name={pokemon.name}
                />
            ))}
            </article>
            <h1>Type</h1>
            <article className='pokemon-types'>
                {Pokemontype.map((pokemon, index) => (
                    <TypeCard
                    key={index}
                    name={pokemon.name}
                    />
                ))}
            </article>
        </article>
        </>
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