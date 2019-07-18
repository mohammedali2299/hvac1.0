import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Button, Image } from 'react-bootstrap'
import './Emergency.css'
import Carousel from './CustomCarousel'

function Emergency() {
    return(
        <Container fluid="true" className="mt-3 overflow-hidden">
            <Row>
                <Col>
                    <Jumbotron className="d-flex flex-column justify-content-center">
                        <h4 className="text-center">Fill out our emergency contact form specifying your emergency and your situation will be prioritized. You can also call us at (333) 222-4444 or email us at unitedhv@gmail.com.</h4>
                        <Col md={{ span: 4, offset: 4 }} className="mt-4">
                            <Button href="/contact" >Emergency Contact Form</Button>
                        </Col>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron>
                        <h4 className="font-weight-bold">Help is Just a Few Clicks Away!</h4>
                        <p>Our diverse team of experts can solve a large range of HVAC and Electrical emergencies. Leave the problem to us and your life will return to normal before you know it, satistfaction guaranteed.</p>
                    </Jumbotron>
                </Col>
                <Col>
                    <Image ></Image>
                </Col>
            </Row>
        </Container>
    );
}

export default Emergency