import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './About.css'
import { continueStatement } from '@babel/types';

function About() {
    const about = 
        <Container>
            <Row> 
                <p>As a top tier 3rd generation mechanical contracting business, 
                We have been serving the Midwest suburbs & the greater Chicagoland area for the past 14 years. 
                Our services are detail oriented, providing peace of mind for years to come. 
                Specializing in complete forced air HVAC service including boilers, and tankless technology.  
                We offer a wide variety of services for both commercial and residential clients which include the following:</p>
            </Row>
            <Row className="mt-3 font-weight-lighter">
                <Col xs={6}>
                    <ul className="list-unstyled text-uppercase">
                        <li>
                            <p>A/C Installation & Repair</p>
                        </li>
                        <li>
                            <p>Air Duct Installation & Repair</p>
                        </li>
                        <li>
                            <p>Boiler Services</p>
                        </li>
                        <li>
                            <p>Ductless A/C Services</p>
                        </li>
                        <li>
                            <p>Electric Furnace Installation & Repair</p>
                        </li>
                        <li>
                            <p>Custom Sheet Metal</p>
                        </li>
                    </ul>
                </Col>
                <Col xs={6}>
                    <ul className="list-unstyled text-uppercase">
                        <li>
                            <p>Emergency Services</p>
                        </li>
                        <li>
                            <p>Flame Sensor Repair</p>
                        </li>
                        <li>
                            <p>Gas Furnace Installation & Repair</p>
                        </li>
                        <li>
                            <p>Heater Installation & Repair</p>
                        </li>
                        <li>
                            <p>Thermostat Repair</p>
                        </li>
                        <li>
                            <p>Rooftop units</p>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <p>These are just a few of the services that we provide. 
                    We pride ourselves on being experts for all brands and providing expemplary service whatever the job may be.</p>
            </Row>
        </Container>
        

    return(
        <Container className="body">
            <Jumbotron className="col-centered">
            <h2 className="pb-3 text-center font-italic heading">Providing Quality Service since 2006</h2>
            <Row className="pl-4 pr-4">
                <div>
                    {about}
                </div>
            </Row>
            <hr/>
            <p>To learn more about the owner, follow the link below</p>
            <Button href="/owner" className="btn-dark">Read more</Button>
            <Row className="pl-4 pr-4 d-flex flex-row">
                {/* <Col>
                    <Button href="/owner" className="bg-white shadow border-0">
                        <h4 className="text-center text-dark">CEO/Owner: Imran Ali Mirza</h4>
                        <Image src="/extras/owner.jpg" className="owner-img" rounded></Image>
                    </Button>
                </Col> */}
                {/* <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Image src="/extras/owner.jpg" className="w-100 h-100" rounded></Image>
                </Col>
                <Col xs={12} md={6}>
                    <a href="/owner" className="h4 d-flex pt-2">CEO/Owner: Imran Ali</a>
                    <p className="font-italic">Imran's family has been in the HVAC and Electrical business for the past 3 generations. Through hard work and 
                        a strong emphasis on customer satisfaction has helped him expand his business and expertise. 
                    </p>
                </Col> */}
            </Row>
            </Jumbotron>
        </Container>
    );
}

export default About