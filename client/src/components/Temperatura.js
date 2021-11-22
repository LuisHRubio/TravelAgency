import React,{Component} from "react";
import axios from 'axios';

class Temperatura extends React.Component {

    state = {
        datos: []
    }

    async componentDidMount() {
        const res = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=Zapopan,mx&APPID=4140f86e8a20f39d4f478cf5fb5f48ac&units=metric");
        this.setState({datos:res.data})


    }


    render(){
        console.log(this.state.datos.main); //I do not know why it is not recognizing the .temp param.
        return (
            <div className="temperatura">
                <p>{`Current temperature is: ${parseInt(this.state.datos.main)}°C`}</p>
            </div>
        );
    }

}

export default Temperatura;