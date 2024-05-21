import React, { useState } from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState(null);


        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Feil ved henting av pokemonen', error);
            }
        };

        React.useEffect(() => {
            fetchPokemonData();
        }, []);

    return (
        <>
            {pokemonData && (
                <ul className="pokemon-stats">
                    <li id="id_1">
                        <h2>{pokemonData.name}</h2>
                        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    </li>
                    <li id="id_2">
                        <h2>Type(S)</h2>
                        {pokemonData.types.map((type, index) => (
                            <p key={index}>{type.type.name}</p>
                        ))}
                    </li>
                    <li id="id_3">
                        <h2>Stats</h2>
                        {pokemonData.stats.map((stat, index) => (
                            <p key={index}>{stat.stat.name}: {stat.base_stat}</p>
                        ))}
                    </li>
                    <li id="id_4">
                        <h2>Abilities</h2>
                        {pokemonData.abilities.map((abilities, index) => (
                            <p key={index}>{abilities.ability.name}</p>
                        ))}
                    </li>
                </ul>
            )}
        </>
    );
};

export default SearchResults;
