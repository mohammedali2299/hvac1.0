import React from 'react';
import { Tabs, Tab, Jumbotron, Image, Row, Col } from 'react-bootstrap'
import './ResComTabs.css'

function ResComTab() {
    return (
        <Jumbotron className="mb-0">
            <h2 className="mb-4">We do both Residential and Commercial!</h2>
            <Tabs defaultActiveKey="commercial" className="border-0">
                <Tab eventKey="residential" title="Residential" className="bg-white shadow border" >
                    <Row noGutters>
                        <Col xs={12} lg={6} xl={8} className="pt-3">
                            <p className="ml-3 mr-2">We are commited to keeping your family comfortable! Leave your HVAC and electrical problems to us so you and your family can get back to enjoying life. Read more about our services via the links below.</p>
                        </Col>
                        <Col xs={12} lg={6} xl={4}>
                            <Image src="/extras/home-residential.jpg" className="w-100" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="commercial" title="Commercial" className="bg-white shadow border" >
                    <Row noGutters>
                        <Col xs={12} lg={6} xl={8} className="pt-3">
                            <p className="ml-3 mr-2">Protect your building from the elements! We offer a wide range of HVAC and electrical services for any type of building. Read more about our services via the links below.</p>
                        </Col>
                        <Col xs={12} lg={6} xl={4}>
                            <Image src="/extras/home-commercial.jpg" className="w-100" />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Jumbotron>
    );
}

export default ResComTab