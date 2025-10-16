import { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (<div>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/multiple'>Seleccion Multiple</a>
                </li>
                <li>
                    <a href='/tablamultiplicarv2'>Tabla de Multiplicar V2</a>
                </li>
                <li>
                    <a href='/tablamultiplicar'>Tabla de Multiplicar</a>
                </li>
                <li>
                    <a href='/collatz'>Collatz</a>
                </li>
                <li>
                    <a href='/formsimple'>Form Simple</a>
                </li>
                <li>
                    <a href='/cine'>Cine</a>
                </li>
                <li>
                    <a href='/musica'>Musica</a>
                </li>
            </ul>
        </div>)
    }
}
