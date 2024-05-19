import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Teams from '../pages/teams';
import SearchResults from '../pages/searchresults';
import Pokemons from '../pages/pokemons';
import Type from '../pages/type';

const Layout = () => {
    return (
        <Router>
            <Navbar />
            <main className='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/teams' element={<Teams />} />
                    <Route path='/searchresults' element={<SearchResults />} />
                    <Route path='/pokemons' element={<Pokemons />} />
                    <Route path='/type' element={<Type />} />
                </Routes>
            </main>
        </Router>
    );
};

export default Layout;


//Denne koden er bygd på denne artikkelen fra blog.logorocket.com av Chinwike Maduabuchi  https://blog.logrocket.com/create-responsive-navbar-react-css/ 