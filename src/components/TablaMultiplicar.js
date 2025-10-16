import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();
    tablear = (event) => {
        event.preventDefault();
        console.log("Formulario enviado")
        let numero = parseInt(this.cajaNumero.current.value);
        let aux = [];
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({
            numeros: aux
        })
    }
    state = {
        numeros: []
    }
    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <form onSubmit={this.tablear}>
                    <label>Introduzca número </label>
                    <input type='number' ref={this.cajaNumero} />
                    <button>Mostrar Tabla</button>
                    <table border={"1px"}>
                        <thead>
                            <td>Operación</td>
                            <td>Resultado</td>
                        </thead>
                        <tbody>
                            {
                                this.state.numeros.map((num, index) => {
                                    return (
                                        <tr>
                                            <td key={index}>{this.cajaNumero.current.value}*{index+1}</td>
                                            <td key={index}>{num}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
