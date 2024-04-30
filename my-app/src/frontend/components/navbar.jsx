import React from 'react';
import '../style/navbar.css'

export default function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/teams">teams</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/searchresults">Searchresults</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/pokemons">Pokemons</a>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="text" name="search-bar" id="search-bar" placeholder='Søk her...'/>
                </li>
            </ul>
        </nav>
        </>
    )
}