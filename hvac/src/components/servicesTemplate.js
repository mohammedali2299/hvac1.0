import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
            <Row >
                <Col xs={{ order: 2}} className="mt-3 mb-5">
                    <ServiceInfo name={props.name} />
                </Col>
                <Col xs={12} xl={4} className="mt-3 mb-5">
                    <ServiceContact name={props.name} color={props.name} />
                </Col>
            </Row>
        </Container>
    );
}

export default Services