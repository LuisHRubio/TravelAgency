import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
    return (
        <footer>
            <div className="header ">
                <div className="row py-3 px-4">
                    <div className="col-4 text-center ">
                        <img className="headerimg" src="imgs/Rodri.png"/>
                    </div>
                    <div className="col-4 text-center ">
                        <img className="headerimg" src="imgs/imgHead.png"/>
                    </div>
                    <div className="col-4 text-center ">
                        <div>
                            <a className="footerText noDeco" href="https://twitter.com/animalcrossing?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
                        </div>
                        <div>
                            <a className="footerText noDeco" href="https://es-la.facebook.com/AnimalCrossingES/">Facebook</a>
                        </div>
                        <div>
                            <a className="footerText noDeco" href="https://www.instagram.com/animalcrossing_official/">Instagram</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
