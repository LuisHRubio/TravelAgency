import React from 'react';
import ReactDOM from 'react-dom';
import Flights from './Flights'

const destino = "Look up Flights";

function SearchBar() {
    return (
        <>
            <hr className="text-muted"></hr>
            <div className="row margAuto text-center microAjusteBarra">
                <div className="pb-3 col-2 text-center searchPlace">
                    <img className="imgCanelita" src="/imgs/rafa.png"/>
                    <img className="globo" src="/imgs/globo.png"/>
                    <span className="globoTexto">Wanna fly with us?</span>
                </div>
            </div>

            <div className="row text-center my-4">
                <h1>Look at our available flights!</h1>
            </div>

            <hr className="text-muted"></hr>


        </>
    );
}


export default SearchBar;

