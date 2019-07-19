import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Owner.css'



function Owner() {
    return(
        <Container className="body">
            {/* <h2 className="mt-3 d-flex font-italic">A Passion for Quality</h2> */}
            <Row className="mt-3 d-flex flex-row">
                <Col xs={8} className="d-flex">
                    <Image src="/extras/owner.jpg" className="w-50 d-flex flex-fill" rounded></Image>
                </Col>
                <Col xs={4}>
                    <h3 className="d-flex pt-2 pb-2">CEO/Owner: Imran Ali</h3>
                    <p className="font-italic text-muted">
                        Imran's family has been in the HVAC and Electrical business for the past 3 generations. Through hard work and 
                        a strong emphasis on customer satisfaction has helped him expand the family business. 
                    </p>
                    <p className="font-italic text-muted">
                        He started working with his father when he was in high school and learned to install and service HVAC systems 
                        the city of Chicago. Since then, his expertise in the field has grown immensely along with his attention to 
                        care and detail. 
                    </p>
                    <p className="font-italic text-muted">
                        Today, United HVAC and Electrical Inc. is able to help so many families and businesses in the Chicagoland area 
                        because of Imran's relentless work ethic and personability. He doesn't rest till his clients are not just satisfied 
                        but are truly happy with the his service.
                    </p>
                </Col> 
                {/* <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Image src="/extras/owner.jpg" className="w-100 h-100" rounded></Image>
                </Col> */}
                {/* <Col xs={12} md={6}>
                    <h2 className="h4 d-flex pt-2">CEO/Owner: Imran Ali</h2>
                    <p className="font-italic text-muted">Imran's family has been in the HVAC and Electrical business for the past 3 generations. Through hard work and 
                        a strong emphasis on customer satisfaction has helped him expand his business and expertise. 
                    </p>
                </Col> */}
            </Row> 
                 
        </Container>
    );
}

export default Owner