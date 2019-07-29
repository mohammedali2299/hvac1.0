import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import InteractiveCarousel from './subcomponents/InteractiveCarousel'
import './ResComTemplate.css'

function ResComTemplate(props) {
    var title = props.name + " HVAC Services";
    var mainText;
    
    if(props.name === "residential") {
        mainText = "We do houses."
    } else if(props.name === "commercial") {
        mainText = "We do businesses."
    }

    
    return(
        <Container className="body">
            <Row>
                <Col xs={12} lg={6} className="mt-4">
                    <Jumbotron fluid className="p-0 bg-white shadow-element">
                        <h2 className="title-color text-white pt-3 pb-3 text-center w-100">{title.toUpperCase()}</h2>
                        <p className="m-3">{mainText}</p>
                        <Button href="/contact" className="button-color shadow-element btn-lg border-0 m-3">Get Started</Button>
                    </Jumbotron>
                </Col>
                
                <Col xs={12} lg={6} className="mt-4">
                    <InteractiveCarousel styling={props.name} />
                </Col>
            </Row>
        </Container>
    );
}

export default ResComTemplate