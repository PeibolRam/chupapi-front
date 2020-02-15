import React, { Component } from 'react';
import '../../../styles/slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';

// https://www.npmjs.com/package/react-responsive-carousel

class Slider extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        axios.get('http://localhost:5000/drinks')
        .then((res) =>{
            // let reversed = res.data.reverse();
            let lastD = res.data.slice(res.data.length-6, res.data.length-3)
            this.setState({
                data: lastD
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return (
            <Carousel showThumbs={false} showStatus={false}>
                {this.state.data.map(item => (
                    <div key={item._id} className="slider_drink">
                        <img src={item.imagen} alt="ejemplo"/>
                        <div className="legend">
                            <h2>{item.nombre}</h2>
                            <p>{item.descripcion}</p>
                        </div>
                    </div>  
                ))}
            </Carousel>
        )
    }
}

export default Slider;

