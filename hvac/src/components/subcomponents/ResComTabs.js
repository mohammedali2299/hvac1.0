import React from 'react';
import { Row, Col } from 'react-bootstrap'
import 'react-transition-group'
import './ResComTabs.css'
import SocialMedia from './SocialMedia'

function ResComTab() {
    // const [open, setOpen] = useState(false);
    // const [open2, setOpen2] = useState(false);
    return (
            <Row noGutters>
                <Col xs={12} md={6} xl={6} className="pr-3 pl-3">
                    <div class="hovereffect2">
                        <img class="img-responsive2 w-100 h-100" src="/extras/home-residential.jpg" alt="" />
                        <div class="overlay2">
                            <a href="/residential"><h2>Residential</h2></a>
                            <div className="text-white font-italic info">
                                <p>
                                We are commited to keeping your family comfortable! If your home 
                                HVAC system is undergoing issues, reach out to us with the  
                                <a href="/contact" className="font-weight-bold yellow-text"> contact form</a> and we'll ensure 
                                that you get the best quality service as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="pl-3 pr-3">
                    <div class="hovereffect2">
                        <img class="img-responsive2 w-100 h-100" src="/extras/commercial-home.jpeg" alt="" />
                        <div class="overlay2">
                            <a href="/commercial"><h2>Commercial</h2></a>

                            <div className="text-white font-italic info">
                                <p className="w-100 h-100">
                                United has continued to provide excellent services to business owners by not compromising on 
                                quality. We're ready to tackle any HVAC and electrical problems that your business may be facing.
                                The best way to reach us is through the
                                <a href="/contact" className="font-weight-bold yellow-text"> contact form</a>.
                                Don't hesitate to give us a call or send an e-mail! 
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
    );
}

export default ResComTab