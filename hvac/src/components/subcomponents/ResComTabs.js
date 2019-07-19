import React from 'react';
import { Tabs, Tab, Jumbotron, Image, Row, Col } from 'react-bootstrap'
import './ResComTabs.css'

function ResComTab() {
    return (
        <Jumbotron className="mb-0">
            <h3 className="mb-4">We do both residential and commercial buildings!</h3>
            <Tabs defaultActiveKey="residential" className="border-0">
                <Tab eventKey="residential" title="Residential" className="bg-white shadow border" >
                    <Row noGutters>
                        <Col xs={12} lg={6} xl={8} className="pt-2">
                            <p className="ml-3 mr-2">We are commited to keeping your family comfortable. With our fast and efficient installation process, you and your family will be able to beat the heat in the summer or stay warm and cozy in the winter in no time at all! We install and repair all major brands of home air-conditioners and furnaces and provide quality ducting services to keep your HVAC systems running efficiently, saving you money in the long run. Having electrical issues? Our trained electricians are here to help. Read more about our services via the links below.</p>
                            <p className="ml-3 mr-2">To get started simply fill out our service order form or contact us via phone or email found at the bottom of the page.</p>
                        </Col>
                        <Col xs={12} lg={6} xl={4}>
                            <Image src="/extras/home-residential-1.jpg" className="w-100" />
                            {/* <Image src="/extras/home-residential-2.jpg" className="w-100" /> */}
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="commercial" title="Commercial" className="bg-white shadow border" >
                    <Row noGutters>
                        <Col xs={12} lg={6} xl={8} className="pt-2">
                            <p className="ml-3 mr-2">Protect your building from the elements! We offer a wide range of HVAC and electrical services for any type of building, whether you need the best heating and cooling systems in industry installed in your apartment buildings, your office buildings wired by state of the art electricians, or your warehouse ducting installed by our trained experts. Something not working correctly? No need to worry, we also offer repair services for your HVAC or electrical systems. Read more about our services via the links below.</p>
                            <p className="ml-3 mr-2">To get started simply fill out our service order form or contact us via phone or email found at the bottom of the page.</p>
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