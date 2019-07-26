import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Button, Figure, Image } from 'react-bootstrap'
import './servicesTemplate.css'
import ServiceContact from './subcomponents/ServiceContact'
import ServiceInfo from './subcomponents/ServiceInfo'

function Services(props) {
    return(
        <Container fluid="true">
            <Row >
                <Col fluid className={"column-centered pr-0 pl-0 " + props.name + "-image"} >
                <h1 className={"mb-0 pt-3 pb-3 text-white text-center " + props.name + "-opaque"}>{props.title}</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ServiceInfo name={props.name} />
                </Col>
                <Col sm={12} md={6}>
                    <ServiceContact name={props.name} color={props.name} />
                </Col>
            </Row>
        </Container>
    );
}

export default Services