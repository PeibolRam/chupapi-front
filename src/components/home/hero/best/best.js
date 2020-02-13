import React, { Component } from 'react';
import axios from 'axios'
import '../../../../styles/bests.css'

class Best extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        axios.get('http://165.227.1.54:5000/drinks')
        .then((res) =>{
            let reversed = res.data.reverse();
            let lastD = reversed.slice(reversed.length-5)
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
            <div className="bests_drinks">
                <h1>Últimas bebidas</h1>
                <div className="drinks">
                {this.state.data.map(item => (
                    <div key={item._id} className="drink_card">
                        <img src={item.imagen} alt=""/>
                        <h2>{item.nombre}</h2>
                        <p>{item.descripcion}</p>
                    </div>   
                ))}
                </div>   
            </div>
        );
    }
}

export default Best;