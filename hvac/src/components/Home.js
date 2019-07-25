import React from 'react'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'
import './Home.css'
import ResComTab from './subcomponents/ResComTabs'
import ReviewCarousel from './subcomponents/ReviewCarousel'
import ServiceLinks from './subcomponents/ServiceLinks'
import SocialMedia from './subcomponents/SocialMedia'
import { cpus } from 'os';
import ServiceContact from './subcomponents/ServiceContact'

function Home() {   
    return(
        <div className="body">
            {/* <HomeCarousel />  */}
            <Container fluid className="homepage pl-0 pr-0">
                <Row>
                    <Col className="col-centered pt-5 pb-5 title">
                        <h2 className="font-weight-bold text-center text-white mb-4">Why United?</h2>
                        <p className="h5 font-italic text-center text-white mr-5 ml-5">
                            United HVAC and Electrical has been providing quality service in the Chicagoland Area since it's inception in 2006. 
                            From installing rooftop units on commercial buildings to maintaining residential hvac systems, 
                            United HVAC and Electrical Inc. exceeds the standards set by industry today and offers a reliable service for all.
                        </p>
                    </Col>
                </Row>
                <Row noGutters className="mt-4">
                    <Col xs={12} xl={4} className="pr-3 pl-3">
                        <ServiceContact name="home" color="cooling" />
                    </Col>
                    <Col xl={{ span: 8, offset: 0}} className="mt-0 pr-3 pl-3">
                        <ServiceLinks />
                    </Col>    
                </Row>
                <Row noGutters className="mt-4">
                    <Col xs={12} xl={8} className="pr-3 pl-3">
                        <ResComTab />
                    </Col>
                    <Col xs={12} xl={4} className="pr-3 pl-3">
                        {/* <Jumbotron fluid className="border d-flex flex-column align-items-center mb-0 emergency h-100 pt-3 pb-3">
                            <h2 className="text-white text-center pt-2 pl-2 pr-2">Have an Emergency?</h2>
                            <p className="text-white text-center font-italic pl-2 pr-2 pt-3 pb-3">Let United expedite your problem. Click below for more information.</p>
                            <Button size="lg" className="border-0 mb-2 emergency-button" href="/emergency-services">Emergency Services</Button>
                        </Jumbotron> */}
                        <ServiceContact name="emergency" color="heating" />
                        
                    </Col>
                    
                    <SocialMedia/>
                    
                </Row>
                

                <Row className="mt-4">
                    <ReviewCarousel/>
                </Row>
            </Container>
        </div>
    );
}

export default Home