import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button, } from 'react-bootstrap'
import './Home.css'
import HomeCarousel from './CustomCarousel'
import ContactLink from './subcomponents/ContactLink'
import ResComTab from './subcomponents/ResComTabs'



function Home() {   
    return(
        <div className="bg-light body">
            <HomeCarousel /> 
            <Container fluid>
                <Row className="mt-3">
                    <Col className="col-centered pt-5 pb-5 title">
                        <h2 className="font-weight-bold text-center text-white mb-4">Why United?</h2>
                        <p className="h5 font-italic text-center text-white mr-5 ml-5">
                            United HVAC and Electrical has been providing quality service in the Chicagoland Area since it's inception in 2006. 
                            From installing rooftop units on commercial buildings to maintaining residential hvac systems, 
                            United HVAC and Electrical Inc. exceeds the standards set by industry today and offers a reliable service for all.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4} className="mt-3">
                        <Row>
                            <Col lg={12}>
                                <ContactLink color="info" />
                            </Col>
                            <Col lg={12} className="mt-3">
                                <Jumbotron className="d-flex flex-column align-items-center mb-0">
                                    <h2>Have an Emergency?</h2>
                                    <p>Get your problem solved fast. Click below for more information.</p>
                                    <Button size="lg" variant="info" className="btn-block" href="/emergency-services">Emergency Services</Button>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={8} className="mt-3">
                        <ResComTab />
                    </Col>
                </Row>
                <Row className="mt-3" noGutters>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="hovereffect">
                            <img className="img-responsive w-100 h-100" src="/extras/home-cooling.jpg" alt=""/>
                            <div className="overlay">
                                <h2 className="cooling">Cooling</h2>
                                <p className="info">Need a proffessional to take a look? We service all makes and models of AC units.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="hovereffect">
                            <img className="img-responsive w-100 h-100" src="/extras/home-heating.jpg" alt=""/>
                            <div className="overlay">
                                <h2 className="heating">Heating</h2>
                                <p className="info">Heat doesn't seem to work? Fill out the contact form and we'll get back to you!</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className="hovereffect">
                            <img className="img-responsive w-100 h-100" src="/extras/home-electrical.jpg" alt=""/>
                            <div className="overlay">
                                <h2 className="electrical">Electrical</h2>
                                <p className="info">As certified electricians, we can handle any electrical problem you have.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div class="hovereffect">
                            <img className="img-responsive w-100 h-100" src="/extras/home-ducting.jpg" alt=""/>
                            <div className="overlay">
                                <h2 className="ducting">Ducting</h2>
                                <p className="info">Is your ducting leaking air? We're experts in installing and sealing ducts and we would love to help.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home