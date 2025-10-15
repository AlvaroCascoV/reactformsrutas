import { Component } from "react";

class Cine extends Component {
    render() {
        return (<div>
            <h1 style={{color:"blue"}}>Esto es Cine</h1>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sala_de_cine.jpg/500px-Sala_de_cine.jpg'
                style={{ width: "150px", height: "150px" }}
                alt='cine' />
        </div>)
    }
}
export default Cine