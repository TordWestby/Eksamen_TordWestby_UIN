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
                    <a href="/teams">Teams</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/type">Type</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/pokemon">Pokemons</a>
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