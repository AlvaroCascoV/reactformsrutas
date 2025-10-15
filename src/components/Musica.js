import { Component } from "react";

class Musica extends Component {
    render() {
        return (<div>
            <h1 style={{ color: "red" }}>Musica!!</h1>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Balen_Minerva_among_the_Muses_%28detail%29.jpg/250px-Balen_Minerva_among_the_Muses_%28detail%29.jpg'
                style={{ width: "150px", height: "150px" }}
                alt='musica' />
        </div>)
    }
}
export default Musica