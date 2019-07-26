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
                        <h1 className="font-weight-bold text-center text-white mb-4">Why United?</h1>
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
                        <ServiceContact name="emergency" color="heating" />
                    </Col>
                    
                    {/* <SocialMedia/> */}
                </Row>

                <Row className="mt-4">
                    <ReviewCarousel/>
                </Row>
            </Container>
        </div>
    );
}

export default Home