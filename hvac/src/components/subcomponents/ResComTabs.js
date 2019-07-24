import React, { useState } from 'react';
import { Tabs, Tab, Jumbotron, Image, Row, Col, Container, Button, Fade } from 'react-bootstrap'
import 'react-transition-group'
import './ResComTabs.css'
import SocialMedia from './SocialMedia'

function ResComTab() {
    // const [open, setOpen] = useState(false);
    // const [open2, setOpen2] = useState(false);
    return (
            <Row noGutters>
                <Col xs={12} md={6} xl={6}>
                    <div class="hovereffect2 border">
                        <img class="img-responsive2 w-100 h-100" src="/extras/home-residential.jpg" alt="" />
                        <div class="overlay2">
                            <h2>Residential</h2>
                            <div className="text-white font-italic info">
                                <p>
                                We are commited to keeping your family comfortable! If your home 
                                HVAC system is undergoing issues, reach out to us with the  
                                <a href="/contact" className="font-weight-bold"> contact form</a> and we'll ensure 
                                that you get the best quality service as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div class="hovereffect2 border">
                        <img class="img-responsive2 w-100 h-100" src="/extras/home-commercial.jpg" alt="" />
                        <div class="overlay2">
                            <h2>Commercial</h2>
                            <div className="text-white font-italic info">
                                <p className="w-100 h-100">
                                United has continued to provide excellent services to business owners by not compromising on 
                                quality. We're ready to tackle any HVAC and electrical problems that your business may be facing.
                                The best way to reach us is through the
                                <a href="/contact" className="font-weight-bold"> contact form</a>.
                                Don't hesitate to give us a call or send an e-mail! 
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
       
        // <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            
        // </div>

        /* 
            <Col xs={12} md={6} lg={5} className="residential mr-5 mb-3">
                <h2 className="mt-3 mb-3 text-white font-weight-bold">Residential</h2>
                <u
                    onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                    className="mt-5 mb-3 h5"
                >
                    Learn More...
                </u>
                <Fade in={open}>
                    <div className="mt-3 mb-4 text-white description">
                        <p>
                        > We are commited to keeping your family comfortable! Leave your HVAC and electrical 
                        problems to us so you and your family can get back to enjoying life. Read more about 
                        our services via the links above.
                        </p>
                        <p>
                        > United has many years of experience solving problems for single families. If your home 
                        HVAC system is undergoing issues, reach out to us with the  
                        <a href="/contact" className="font-weight-bold"> contact form</a> and we'll ensure 
                        that you get the best quality service as soon as possible.
                        </p>
                    </div>
                </Fade>
            </Col>
            <Col xs={12} md={6} lg={5} className="commercial mb-3">
                <h2 className="mt-3 mb-3 text-white font-weight-bold">Commerical</h2>
                <u
                    onClick={() => setOpen2(!open2)}
                    aria-controls="example-fade-text"
                    aria-expanded={open2}
                    className="mt-5 mb-3 h5"
                >
                    Learn More...
                </u>
                <Fade in={open2}>
                    <div className="mt-3 mb-4 text-white description">
                    <p>
                    > Protect your building from the elements! We offer a wide range of HVAC and electrical 
                    services for any type of building. Read more about our services via the links above.
                    </p>
                    <p>
                    > United has continued to provide excellent services to business owners by not compromising on 
                    quality. We're ready to tackle any HVAC and electrical problems that your business may be facing.
                    The best way to reach us is through the
                    <a href="/contact" className="font-weight-bold"> contact form</a>.
                    Don't hesitate to give us a call or send an e-mail! 
                    </p>
                    </div>
                </Fade>
            </Col> */
            

    );
}

export default ResComTab