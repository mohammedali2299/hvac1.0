import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'

function ServiceLinks() {
    return(
        <div>
            <Row>
                <Col className="cooling">
                    <p>Cooling</p>
                </Col>
                <Col className="heating">
                    <p>Heating</p>
                </Col>
                <Col className="electrical">
                    <p>Electrical</p>
                </Col>
                <Col className="ducting">
                    <p>Ducting</p>
                </Col>
            </Row>
        </div>
    );
}

export default ServiceLinks