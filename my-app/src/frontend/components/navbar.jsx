import React, { useState } from 'react';
import '../style/navbar.css';

export default function Navbar() {
    const [searchPokemon, setSearchPokemon] = useState('');

    const handleSearch = (search) => {
        search.preventDefault();
        if (searchPokemon) {
            window.location.href = `/pokemon/${searchPokemon}`;
        }
    };

    const handleChange = (search) => {
        setSearchPokemon(search.target.value);
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">UIN POKEDEX</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/teams">Teams</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/type">Type</a>
                    </li>
                </ul>
                <ul>                    <li>
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder='Søk etter pokemon'
                                value={searchPokemon}
                                onChange={handleChange}  
                            />
                            <img src="../public/images/file.png" alt="et bilde av et forstørrelsesglass" width="20px" height="20px"/>
                            <button type="submit">search</button>
                        </form>
                    </li>
                </ul>
            </nav>
        </>
    );
}

/*Denne koden er bygd på en chat med OpenAI sin ChatGpt 3.5 (Versjon per 21.05.24)
Logikken for hvordan hente ut datan slik at en bruker kan søke er skrevet med hjelp av/bruk av 
ChatGpt og linken til chaten er her: https://chatgpt.com/share/f412d567-4995-446a-91b0-61bf1daeed78
OpenAI ChatGpt (versjon per dags dato 21.05.2024)
*/ 