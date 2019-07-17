import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import './Emergency.css'
import Carousel from './CustomCarousel'

function Emergency() {
    return(
        <Container fluid="true" className="mt-3 overflow-hidden">
            <Row className="mt-3">
                <Col sm>
                    <Jumbotron>
                        <h4 className="font-weight-bold">Help is Just a Few Clicks Away!</h4>
                        <p>Our diverse team of experts can solve a large range of HVAC and Electrical emergencies. Leave the problem to us and your life will return to normal before you know it, satistfaction guaranteed.</p>
                    </Jumbotron>
                </Col>
                <Col sm>
                    <Jumbotron>
                        <h3 className="text-center">Fill out the emergency contact form below and we will prioritize your situation.</h3>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Emergency