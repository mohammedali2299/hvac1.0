import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Owner.css'



function Owner() {
    return(
        <Container fluid className="body">
            {/* <h2 className="mt-3 d-flex font-italic">A Passion for Quality</h2> */}
            <Row className="mt-3 d-flex flex-row">
                <Col xs={{span: 8, offset: 2, order: 2}} lg={{span: 5, offset: 1}} xl={{span: 3, offset: 1}} className="shadow-element mb-3 p-0">
                    <Image src="/extras/owner.jpg" className="w-100"></Image>
                </Col>
                <Col xs={{span: 10, offset: 1, order: 1}} md={{ span: 8, offset: 2 }} lg={{span: 4, offset: 1}} xl={{span: 4, offset: 2}} className="shadow-element mb-3">
                    <h3 className="pt-3 pb-3">CEO/Owner: Imran Ali</h3>
                    <p className="font-italic text-muted">
                        Imran's family has been in the HVAC and Electrical business for the past 3 generations. Through hard work and 
                        a strong emphasis on customer satisfaction he has been able to expand the family business. 
                    </p>
                    <p className="font-italic text-muted">
                        He started working with his father when he was in high school and learned to install and service HVAC systems 
                        in the city of Chicago. Since then, his expertise in the field has grown immensely along with his attention to 
                        care and detail. 
                    </p>
                    <p className="font-italic text-muted">
                        Today, United HVAC and Electrical Inc. is able to help so many families and businesses in the Chicagoland area 
                        because of Imran's relentless work ethic and personability. He doesn't rest till his clients are not just satisfied 
                        but are truly happy with the his service.
                    </p>
                </Col> 
            </Row> 
        </Container>
    );
}

export default Owner