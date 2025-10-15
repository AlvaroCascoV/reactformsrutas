import { Component } from 'react'

export class Home extends Component {
    render() {
        return (<div>
            <h1>Estoy en Home</h1>
            <img
                src='https://s.w-x.co/UP.jpg'
                style={{ width: "150px", height: "150px" }}
                alt='casa' />
        </div>)
    }
}

export default Home