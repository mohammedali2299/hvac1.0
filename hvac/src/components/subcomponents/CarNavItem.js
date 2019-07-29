import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'

function CarNavItem(props) {
    
    return (
        <div className="m-0 p-2">
            {props.name}
        </div>
    );
}

export default CarNavItem;