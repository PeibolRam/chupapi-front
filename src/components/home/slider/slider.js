import React from 'react'
import ejemplo from '../../../media/example.png'
import '../../../styles/slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// https://www.npmjs.com/package/react-responsive-carousel

const Slider = () => {
    return (
        <Carousel showThumbs={false} showStatus={false}>
            <div>
                <img src={ejemplo} alt="ejemplo"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={ejemplo} alt="ejemplo"/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={ejemplo} alt="ejemplo"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}

export default Slider;

