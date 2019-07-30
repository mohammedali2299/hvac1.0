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
        <Container fluid className="body m-0 pl-0 pr-0">
            <Row noGutters fluid className="m-0" >
                <Col xs={12} lg={12} className="mt-0">
                    <InteractiveCarousel name={props.name} />
                </Col>
                <Col xs={12} lg={12} className="mt-4 mb-4 pl-3 pr-3">
                    <Jumbotron fluid className="p-0 m-0 bg-white shadow-element">
                        <h2 className="title-color text-white pt-3 pb-3 text-center w-100">{title.toUpperCase()}</h2>
                        <p className="m-3">{mainText}</p>
                        <Button href="/contact" className="button-color shadow-element btn-lg border-0 m-3">Get Started</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default ResComTemplate