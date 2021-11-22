import React from 'react';
import ReactDOM from 'react-dom';


import Caroussel from './components/Caroussel';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Flights from './components/Flights';
import Navbar from './components/Navbar';

ReactDOM.render(
    <React.StrictMode>

        <Header/>


    </React.StrictMode>,
    document.getElementById('hder2')
);
ReactDOM.render(
    <React.StrictMode>
        <Navbar/>
        <Caroussel />
        <SearchBar />



    </React.StrictMode>,
    document.getElementById('root')
);
ReactDOM.render(
    <React.StrictMode>

        <Footer/>

    </React.StrictMode>,
    document.getElementById('fter')
);
