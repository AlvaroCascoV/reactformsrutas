import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
    selectNumero = React.createRef();
    generarSelect = (event) => {
        event.preventDefault();
        console.log("select generado")
        let aux = []
        for (let i = 0; i <= 5; i++) {
            let aleatorio = parseInt((Math.random() * 100) + 1)
            aux.push(aleatorio)
        }
        console.log(aux)
        this.setState({
            select: aux
        })
    }
    generarTabla = (event) => {
        event.preventDefault();
        let aux = [];
        let numero = parseInt(this.selectNumero.current.value);
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
    state={
        tabla:[],
        select:[]
    }
    render() {
        return (
            <div>
                <h1>Tabla de multiplicar V2</h1>
                <form onSubmit={this.generarTabla}>
                    <button onClick={this.generarSelect}>select</button>
                    <label>Introduzca número </label>
                    <select ref={this.selectNumero}>
                        <option />
                        {
                            this.state.select.map((num, index) => {
                                return (<option key={index}>{num}</option>)
                            })
                        }
                    </select>
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
