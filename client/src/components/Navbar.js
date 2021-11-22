import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <div className="row">
                <div className="col-2 text-center ">
                    <h3>Dodo Airlines</h3>

                </div>
                <div className="col-7">
                    <a className="HGAA noDeco" href="/index.html">Home</a>
                    <a className="HGAA noDeco" href="/Gallery.html">Most popular choices</a>
                    <a className="HGAA noDeco" href="/articles.html">Articles</a>
                    <a className="HGAA noDeco" href="/aboutUs.html">About us</a>

                </div>
                <div className="col-3 text-center ">
                    <button className="RegisterButt">Register</button>
                    <button className="LogInButt">Log In</button>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
