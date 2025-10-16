import React, { Component } from 'react'

export default class TablaMultiplicarv2Solucion extends Component {
    selectNumero = React.createRef();
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
    numeros= [8, 4, 6, 9]
    generarRandoms = () => {
        console.log("select generado")
        for (let i = 0; i <= 5; i++) {
            let random = parseInt((Math.random() * 50) + 1)
            this.numeros.push(random)
        }
    }
    state = {
        tabla: [],
    }
    render() {
        return (
            <div>
                <h1 style={{color:"red"}}>Tabla de multiplicar V2 Solucion</h1>
                {()=>this.generarRandoms()}
                <form onSubmit={this.generarTabla}>
                    <label>Seleccione número </label>
                    <select ref={this.selectNumero}>
                        <option />
                        {
                            this.numeros.map((num, index) => {
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
