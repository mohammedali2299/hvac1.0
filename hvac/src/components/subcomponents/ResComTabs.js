import React from 'react';
import { Tabs, Tab, Jumbotron, Image, Row, Col } from 'react-bootstrap'

function ResComTab() {
    return (
        <Jumbotron className="mb-0">
            <h3 className="mb-4">We do both residential and commercial buildings!</h3>
            <Tabs defaultActiveKey="residential" className="border-0">
                <Tab eventKey="residential" title="Residential" className="bg-white shadow border rounded" >
                    <Row>
                        <Col xs={12} md={7} className="pt-2 ml-3">
                            <p>We are commited to keeping your family comfortable. With our fast and efficient installation process, you and your family will be able to beat the heat in the summer and keep warm and cozy in the winter in no time at all! We install and repair all major brands of home air-conditioners and furnaces. We also provide quality ducting services to keep your HVAC systems running efficiently and your entire house as comfortable as possible saving you money in the long run. Having electrical issues? Our trained electricians can fix or replace any broken residential electrical systems. Read more about our services via the links below.</p>
                            <p>To get started simply fill out our service order form describing your situation and in no time a proffesional will be at your door with a solution. You can also contact us via email or phone, our contact information is found at the bottom of the page.</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src="/extras/heating.jpg" />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="commercial" title="Commercial" className="bg-white shadow border rounded" >
                    <Row>
                        <Col xs={12} md={7} className="pt-2 ml-3">
                            <p>Protect your building from the elements! We offer a wide range of HVAC and electrical services for any type of building, whether you need the best heating and cooling systems in industry installed in your apartment buildings, your office buildings wired by state of the art electricians, or your warehouse ducting installed by our trained experts. Need a speedy HVAC or electrical repair? Leave it to us and you'll be back to normal operations in no time. Read more about our services via the links below.</p>
                            <p>Now its easier than ever to order our services! Simply fill out our service order form on the contact page of this website and we will get back to you as soon as possible. You can also contact us via email or phone, our contact information is found at the bottom of the page.</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <Image src="/extras/heating.jpg" />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Jumbotron>
    );
}

export default ResComTab