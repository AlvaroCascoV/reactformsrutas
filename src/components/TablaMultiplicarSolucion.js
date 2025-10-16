import React, { Component } from 'react'

export default class TablaMultiplicarSolucion extends Component {
    cajaNumero = React.createRef();
    generarTabla = (event) => {
        event.preventDefault();
        let aux = [];
        let numero = parseInt(this.cajaNumero.current.value);
        for (let i = 1; i <= 10; i++) {
            var operacion = numero + " * " + i;
            var resultado = numero * i;
            let dato = {
                operacion: operacion,
                resultado: resultado
            }
            aux.push(dato);
        }
        this.setState({
            tabla: aux
        })
    }
    state = {
        tabla: []
    }
    render() {
        return (
            <div>
                <h1>Tabla de multiplicar (Solucion)</h1>
                <form onSubmit={this.generarTabla}>
                    <label>Introduzca número </label>
                    <input type='number' ref={this.cajaNumero} />
                    <button>Mostrar Tabla</button>
                    <table border={"1px"}>
                        <thead>
                            <tr>
                                <th>Operación</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tabla.map((fila, index) => {
                                    return (<tr key={index}>
                                        <td>{fila.operacion}</td>
                                        <td>{fila.resultado}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
