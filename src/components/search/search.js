import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        axios.get('https://apistear-drinks.herokuapp.com/drinks')
        .then((res) =>{
            let withOut = res.data.length-1
            let lastD = res.data.slice(res.data.length-withOut)
            this.setState({
                data: lastD
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>Todos los drinks:</h1>
                <div className="drinks">
                    {this.state.data.map(item => ( 
                        <div key={item._id} className="drink_card">
                            <Link to={`/drinks/id/${item._id}`} >
                                <div className="drink_card_img" style={{backgroundImage:`url(${item.imagen})`}}></div>
                                <div className="drink_card_desc">
                                    <h2>{item.nombre}</h2>
                                    <p>{item.descripcion}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                    
                </div>
            </div>
        )
    }
}

