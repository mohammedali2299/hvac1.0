import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import HomeCarousel from './CustomCarousel'
import ContactLink from './subcomponents/ContactLink'
import ResComTab from './subcomponents/ResComTabs'
import ReviewCarousel from './subcomponents/ReviewCarousel'
import ServiceLinks from './subcomponents/ServiceLinks'
import SocialMedia from './subcomponents/SocialMedia'

function Home() {   
    return(
        <div className="body">
            {/* <HomeCarousel />  */}
            <Container fluid className="homepage">
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
                <Row className="mt-4">
                    <ServiceLinks />
                </Row>
                <Row noGutters className="mt-4">
                    <ResComTab />
                    <SocialMedia />
                </Row>
                

                <Row className="mt-3">
                    <ReviewCarousel/>
                </Row>
            </Container>
        </div>
    );
}

export default Home