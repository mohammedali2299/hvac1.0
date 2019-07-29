import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import CarNavItem from './CarNavItem'
import './InteractiveCarousel.css'


function InteractiveCarousel() {
    return (
        <div className="car-container shadow-element d-flex flex-column align-items-end">
            
            <CarNavItem name="United" />
            <CarNavItem name="Services" />
            <CarNavItem name="Satisfaction" />
            <div className="car-back">

            </div>
        </div>
    );

}

export default InteractiveCarousel;