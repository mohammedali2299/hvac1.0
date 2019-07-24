import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Button, Figure, Image } from 'react-bootstrap'
import './servicesTemplate.css'
import ServiceContact from './subcomponents/ServiceContact'

function Services(props) {
    return(
        <Container fluid="true" className="">
            <Row >
                <Col fluid className={"column-centered pr-0 pl-0 " + props.name + "-image"} >
                <h2 className={"mb-0 pt-3 pb-3 text-white text-center " + props.name + "-opaque"}>{props.title}</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Jumbotron fluid>
                        <h3 className="mb-5 ml-3 mr-3">All of your Air-Conditioning Needs</h3>
                        <h6 className="ml-3 mr-3">Repair</h6>
                        <p className="ml-3 mr-3 font-italic">We can get your air conditioning system back up and running in no time. We have experience working with all major-brand air conditioning units. We diagnose the problem and offer you the most cost efficient solution. Air conditioners may begin to slow down or stop working when the system is overburdened. If this happens, you can contact us and we will send an HVAC technician for a full inspection of the unit. We will then offer our solutions to your problem to get you back to enjoying a cool house or business.</p>
                        <h6 className="ml-3 mr-3">Install</h6>
                        <p className="ml-3 mr-3 font-italic">Often times your air conditioner may be beyond repair or running inefficiently for your building size. An air conditioner that is too powerful for your home may be wasting money on electricity, on the other hand you may own a system that is not powerful enough to keep your house cool. No need to worry, our expert HVAC technicians can give you a recommendation on the best system to suit your needs. After that we can install your new air conditioner for a fair price! Our installation services include inside controls, air conditioner set-up and testing, and even ducting to maximize the efficiency of your new unit.</p>
                        <p className="ml-3 mr-3 font-italic">If you have any more questions about what kind of services we provide for air conditioning and much more, contact us via our form or send us an email or phone call.</p>
                    </Jumbotron>
                </Col>
                <Col sm={12} md={6}>
                    {/* <Jumbotron fluid className={"mb-0 d-flex flex-column align-items-center " + props.name + "-primary"}>
                        <h3 className="text-white text-center mb-4">Find out how we can help you beat the heat!</h3>
                        <p className="text-white text-center pr-5 pl-5 font-italic" >To get an air conditioner installed or repaired fill out our contact form, or contact us via email or phone.</p>
                        <Button href="/contact" className={"border-0 btn-lg shadow " + props.name + "-secondary"} >Get Started</Button>
                    </Jumbotron> */}
                    <ServiceContact name={props.name} color={props.name} />
                </Col>
            </Row>
        </Container>
    );
}

export default Services