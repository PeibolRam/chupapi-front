import React, { Component } from 'react'
import axios from 'axios'
import '../../../styles/drink.css'

export default class Drink extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get(`https://apistear-drinks.herokuapp.com/drinks/id/${this.props.id}`)
        .then((res) =>{
            this.setState({
                data: res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {this.state.data.map(item => ( 
                    <div key={item._id} className="drink_info">
                        <img src={item.imagen} alt=""/>
                        <div className="drink_info_desc">
                            <h1>{item.nombre}</h1>
                            <p>{item.descripcion}</p>
                            <p>Se recomienda acompañar con {item.recomendacion}. </p>
                            <p>Una buena ocación para preparla es en {item.situacion}</p>
                            <p>Esta bebida nació en {item.base}</p>
                            <h2>Receta:</h2>
                            <h3>Ingredientes:</h3>
                            <ul>
                                {item.ingredientes.map(ingrediente => ( 
                                    <li key={ingrediente._id}>
                                        <p>{ingrediente.cantidad} {ingrediente.nombre}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3>Instrucciones</h3>
                            <ol>
                                {item.instrucciones.map(instruccion => ( 
                                    <li key={instruccion._id}>
                                        <p> {instruccion.paso}</p>
                                    </li>
                                ))}
                            </ol>
                            
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}


  