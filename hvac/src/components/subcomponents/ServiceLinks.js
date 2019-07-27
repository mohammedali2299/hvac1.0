import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, } from 'react-bootstrap'
import './ServiceLinks.css'


function ServiceLinks() {
    return (
            <Row noGutters>
                <Col xs={12} md={6} xl={6}>
                    <div className="hovereffect border">
                         <img className="img-responsive w-100 h-100" src="/extras/home-cooling.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="cooling">Cooling</h2>
                             <p className="info">AC not running? Need a professional to take a look? We service all makes and models of AC units.</p>
                             <a href="/cooling" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="hovereffect border">
                         <img className="img-responsive w-100 h-100" src="/extras/home-heating.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="heating">Heating</h2>
                             <p className="info">Is your furnace not working? Fill out the contact form and we'd love to help out!</p>
                             <a href="/heating" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="hovereffect border">
                         <img className="img-responsive w-100 h-100" src="/extras/home-electrical.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="electrical">Electrical</h2>
                            <p className="info">As certified electricians, we can handle any electrical problem you have.</p>
                             <a href="/electrical" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div class="hovereffect border">
                         <img className="img-responsive w-100 h-100" src="/extras/home-ducting.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="ducting">Ducting</h2>
                             <p className="info">Ducts leaking air? We're experts in installing and sealing ducts and we would
                             love to help.</p>
                             <a href="/ducting" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
            </Row>

        
        
        // {/* <Row>
        //     <Col xs={12} lg={4} className="mt-3">
        //         <Row>
        //             <Col lg={12}>
        //                 <ContactLink color="primary" />
        //             </Col>
        //             <Col lg={12}>
        //                 <Jumbotron fluid className="d-flex flex-column align-items-center mb-0 emergency">
        //                     <h2 className="text-white pt-5">Have an Emergency?</h2>
        //                     <p className="text-white font-italic pl-4">Let United expedite your problem. Click below for more information.</p>
        //                     <Button size="lg" className="mb-5" variant="primary" href="/emergency-services">Emergency Services</Button>
        //                 </Jumbotron>
        //             </Col>
        //         </Row>
        //     </Col>
        // </Row>

        // <Col xs={12} lg={8} className="mt-3">
        //     <Row noGutters>
        //         <Col xs={12} sm={12} md={6} lg={6} xl={6} className="pr-1">
        //             <div className="hovereffect">
        //                 <img className="img-responsive w-100 h-100" src="/extras/home-cooling.jpg" alt=""/>
        //                 <div className="overlay">
        //                     <h2 className="cooling">Cooling</h2>
        //                     <p className="info">Need a proffessional to take a look? We service all makes and models of AC units.</p>
        //                     <a href="/cooling" className="info">Learn More</a>
        //                 </div>
        //             </div>
        //         </Col>
        //         <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        //             <div className="hovereffect">
        //                 <img className="img-responsive w-100 h-100" src="/extras/home-heating.jpg" alt=""/>
        //                 <div className="overlay">
        //                     <h2 className="heating">Heating</h2>
        //                     <p className="info">Heat doesn't seem to work? Fill out the contact form and we'll get back to you!</p>
        //                     <a href="/heating" className="info">Learn More</a>
        //                 </div>
        //             </div>
        //         </Col>
        //         <Col xs={12} sm={12} md={6} lg={6} xl={6} className="mt-1 pr-1">
        //             <div className="hovereffect">
        //                 <img className="img-responsive w-100 h-100" src="/extras/home-electrical.jpg" alt=""/>
        //                 <div className="overlay">
        //                     <h2 className="electrical">Electrical</h2>
        //                     <p className="info">As certified electricians, we can handle any electrical problem you have.</p>
        //                     <a href="/electrical" className="info">Learn More</a>
        //                 </div>
        //             </div>
        //         </Col>
        //         <Col xs={12} sm={12} md={6} lg={6} xl={6} className="mt-1">
        //             <div class="hovereffect">
        //                 <img className="img-responsive w-100 h-100" src="/extras/home-ducting.jpg" alt=""/>
        //                 <div className="overlay">
        //                     <h2 className="ducting">Ducting</h2>
        //                     <p className="info">Ducts leaking air? We're experts in installing and sealing ducts and we would
        //                     love to help.</p>
        //                     <a href="/ducting" className="info">Learn More</a>
        //                 </div>
        //             </div>
        //         </Col>
        //     </Row>
        // </Col> */}
    );
}

export default ServiceLinks;