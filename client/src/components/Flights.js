import React,{Component} from "react";
import axios from 'axios';

class Flights extends React.Component {

    state = {
        datos: []
    }

    async componentDidMount() {
        const res = await axios.get("/api/flights");
        this.setState({datos:res.data})


    }


    render(){
        console.log(this.state.datos);
        return (
            <div className="row adjustCard mb-4">
                {
                    this.state.datos.map(dato =>(
                        <div className="bg-light my-2 p-4 col-3 mx-3 tarjeta row">
                            <div className="col-lg-6">
                                <p className="ciudad">{dato.city}</p>
                                <p>{dato.price}</p>
                                <p>{dato.date}</p>
                                <p className="text-muted">{dato.flight}</p>
                            </div>
                            <div className="col-lg-6">
                                <img src={`/imgs/Cities/${dato.city.replace(/ /g, "")}.jpg`} className="imagenesCiudades"/>
                            </div>

                        </div>
                    ))
                }
            </div>
        );
    }

}

export default Flights;