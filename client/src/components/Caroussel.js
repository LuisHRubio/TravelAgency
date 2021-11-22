import React from 'react';
import ReactDOM from 'react-dom';

function Caroussel() {
  return (
      <div className="row py-3 px-4">
        <div className="col-12  text-align-center my-3 ">
          <div id="carouselExampleDark" className="carousel carousel-dark slide col-md-12" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="/imgs/blue3.jpg" className="d-block w-100 carouselImg" alt="..."/>
                  <div className="carousel-caption d-none d-md-block row">
                    <div className="col">
                      <p className="carouselFont">ICELAND</p>
                      <p className="descCarouselFont">Diverse landscapes, a fantastic way to experience the unique
                        nature</p>
                    </div>

                  </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="/imgs/boraBora2.jpg" className="d-block w-100 carouselImg" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <p className="carouselFont">BORA BORA</p>
                    <p className="descCarouselFont "> Turquoise lagoons, soft white sands and deep sunsets</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="/imgs/japan.jpg" className="d-block w-100 carouselImg" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <p className="carouselFont">JAPAN</p>
                    <p className="descCarouselFont">island country lying off the east coast of Asia.</p>
                  </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>
  );
}


export default Caroussel;