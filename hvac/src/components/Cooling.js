import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Cooling.css'

function Cooling() {
    return(
        <Container fluid="true" className="body">
            <Row>
                <Image src="/extras/cooling-main.jpeg" className="img-fluid w-100"></Image>
                <Col xs={{ span: 6, offset: 6 }}>
                    <h2 className="text-light font-weight-bold image-cap bg-primary  rounded">Air Conditioning</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Cooling