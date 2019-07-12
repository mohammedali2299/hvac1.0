import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Cooling.css'
import IRMbutton from './subcomponents/IRMbuttons'

function Cooling() {
    return(
        <Container fluid="true" className="body overflow-hidden">
            <Row>
                <Image src="/extras/cooling-main.jpeg" className="img-fluid w-100 overflow-hidden"></Image>
                <Col xs={{ span: 5, offset: 6 }}>
                    <h2 className="text-center text-truncate text-light font-weight-bold image-cap bg-primary rounded">Air Conditioning</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron className="rounded p-10">
                        <h4 className="font-weight-bold">We do both commercial and residential!</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Pick up snacks at the concession stand today! Half price popcorn for all kids under the age of 12. We now have cinamon pretzels with frosting on top of our original salty pretzel with cheese. I am trying to make a third line of words. Almost there. Cool.</h5>
                    </Jumbotron>
                </Col>
            </Row>
            <IRMbutton/>
            {/* <Row>
                <Col xs={4}>
                    <Button href="/install" className="shadow bg-primary w-100 shadow">Install</Button>
                </Col >
                <Col xs={4}>
                    <Button href="/repair" className="shadow bg-primary w-100 shadow">Repair</Button>
                </Col>
                <Col xs={4}>
                    <Button href="/maintain" className="shadow bg-primary w-100 shadow-lg">Maintain</Button>
                </Col>
            </Row> */}
        </Container>
    );
}

export default Cooling