import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Button, Figure } from 'react-bootstrap'
import './servicesTemplate.css'
import IRMtab from './subcomponents/IRMtab'
import ContactLink from './subcomponents/ContactLink'

function Services(props) {
    var captionClass = "text-center text-light font-weight-bold image-cap" + " bg-" + props.color;
    return(
        <Container fluid="true" className="overflow-hidden">
            <Row>
                <Figure className="mb-0">
                    <Figure.Image
                        fluid={true}
                        src={props.imgsrc}
                    />
                    <Figure.Caption className={captionClass}>
                        {props.title}
                    </Figure.Caption>
                </Figure>
            </Row>
            <Row className="mt-3">
                <Col sm={12} md={6}>
                    <Jumbotron className="rounded mb-0">
                        <h4 className="font-weight-bold">We do both commercial and residential!</h4>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla porttitor. Pick up snacks at the concession stand today! Half price popcorn for all kids under the age of 12. We now have cinamon pretzels with frosting on top of our original salty pretzel with cheese. I am trying to make a third line of words. Almost there. Cool.</h5>
                    </Jumbotron>
                </Col>
                <Col sm={12} md={6}>
                    <IRMtab />
                </Col>
            </Row>
            <Row className="mt-3">
                <ContactLink color={props.color}/>
            </Row>
        </Container>
    );
}

export default Services