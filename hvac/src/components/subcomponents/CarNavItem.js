import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import './InteractiveCarousel.css'

function CarNavItem(props) {
    
    return (
        <div onMouseEnter={(e) => this.handleMouseEnter(1, e)} className={"m-0 p-3 text-center text-white border item " + " item-" + props.name}>
            {props.name}
        </div>
    );
}

export default CarNavItem;