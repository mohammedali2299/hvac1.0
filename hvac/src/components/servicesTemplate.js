import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './servicesTemplate.css'
import IRMbutton from './subcomponents/IRMbuttons'

function Services(props) {
    var h2Class = "text-center text-truncate text-light font-weight-bold image-cap rounded" + " bg-" + props.color;
    return(
        <Container fluid="true" className="body overflow-hidden">
            <Row>
                <Image src={props.imgsrc} className="img-fluid w-100 overflow-hidden" ></Image>
                <Col xs={{ span: 5, offset: 6 }}>
                    <h2 className={h2Class} >{props.title}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Jumbotron className="rounded p-10 mt-3 mb-0">
                        <h4 className="font-weight-bold">We do both commercial and residential!</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Pick up snacks at the concession stand today! Half price popcorn for all kids under the age of 12. We now have cinamon pretzels with frosting on top of our original salty pretzel with cheese. I am trying to make a third line of words. Almost there. Cool.</h5>
                    </Jumbotron>
                </Col>
            </Row >
            <IRMbutton color={props.color}/>
            <Row>
                <Col>
                <Jumbotron className="rounded p-10 mt-3 mb-0">
                    <h4 className="font-weight-bold">We do both commercial and residential!</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Pick up snacks at the concession stand today! Half price popcorn for all kids under the age of 12. We now have cinamon pretzels with frosting on top of our original salty pretzel with cheese. I am trying to make a third line of words. Almost there. Cool.</h5>
                    <Button href="/contact" className={"border-0 btn-lg btn-block shadow hoverable " + "bg-" + props.color}>Get Started</Button>
                </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Services