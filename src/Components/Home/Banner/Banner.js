import React from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../img/doctor1.jpg';
import doctor2 from '../../img/doctor2.jpg';
import doctor4 from '../../img/doctor4.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <Carousel className="w-100">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h3>Nordis medical center</h3>
                        <h2>We will provide our parents a healthy life</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Nordis medical center</h3>
                        <h2>We will provide our parents a healthy life.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Nordis medical center</h3>
                        <h2>We will provide our parents a healthy life.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;