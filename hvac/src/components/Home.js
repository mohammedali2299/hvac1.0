import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button, } from 'react-bootstrap'
import './Home.css'
import HomeCarousel from './CustomCarousel'
import ContactLink from './subcomponents/ContactLink'
import ResComTab from './subcomponents/ResComTabs'
import Services from './subcomponents/ServiceLinks'


function Home() {   
    return(
        <div className="bg-light">
            <HomeCarousel /> 
            <Container fluid>
                <Row className="mt-3">
                    <Col>
                        <Jumbotron className="col-centered mb-0" rounded>
                            <h2 className="font-weight-bold text-center text-dark mb-5">Why United?</h2>
                            <p className="h5 font-italic text-center text-black">
                                United HVAC and Electrical has been providing quality service in the Chicagoland Area since it's inception in 1996. 
                                From installing rooftop units on commercial buildings to maintaining residential hvac systems, 
                                United HVAC and Electrical Inc. exceeds the standards set by industry today and offers a reliable service for all.
                            </p>
                        </Jumbotron >
                    </Col>
                </Row>
                <Row className="mt-3">
                    <ContactLink color="info" />
                </Row>
                <Row className="mt-3">
                    <Col>
                        <ResComTab />
                    </Col>
                </Row>
                {/* <Row className="mt-3"> 
                    <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                        <Button href="/cooling" className="w-75 bg-primary border-0">
                            <h3>Cooling</h3>
                            <Image fluid src="/extras/cooling.jpg" className="serv-img" rounded></Image>
                        </Button>  
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                        <Button href="/heating" className="w-75 bg-danger border-0">
                            <h3>Heating</h3>
                            <Image fluid src="/extras/heating.jpg" className="serv-img" rounded></Image>
                        </Button>  
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                        <Button href="/ducting" className="w-75 bg-secondary border-0">
                            <h3>Ducting</h3>
                            <Image fluid src="/extras/ducting.jpg"className="serv-img" rounded></Image>
                        </Button>  
                    </Col>
                    <Col xs={12} sm={6} lg={3} className="d-flex justify-content-center">
                        <Button href="/electrical" className="w-75 bg-warning border-0">
                            <h3>Electrical</h3>
                            <Image fluid src="/extras/electrical-home.jpg"className="serv-img rounded"></Image>
                        </Button>  
                    </Col>
                </Row> */}
                <Row className="mt-3">
                    <Services />
                </Row>
            </Container>
        </div>
    );
}

export default Home