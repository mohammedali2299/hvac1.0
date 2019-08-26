import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './ServiceLinks.css'


function ServiceLinks() {
    return (
            <Row noGutters >
                <Col xs={12} md={6} xl={6} className="p-3">
                    <div className="hovereffect">
                         <img className="img-responsive w-100 h-100" src="/extras/home-cooling.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="cooling">Cooling</h2>
                             <p className="info">AC not running? Need a professional to take a look? We service all makes and models of AC units.</p>
                             <a href="/cooling" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="p-3">
                    <div className="hovereffect">
                         <img className="img-responsive w-100 h-100" src="/extras/home-heating.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="heating">Heating</h2>
                             <p className="info">Is your furnace not working? Fill out the contact form and we'd love to help out!</p>
                             <a href="/heating" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="p-3">
                    <div className="hovereffect">
                         <img className="img-responsive w-100 h-100" src="/extras/home-electrical.jpg" alt=""/>
                         <div className="overlay">
                             <h2 className="electrical">Electrical</h2>
                            <p className="info">As certified electricians, we can handle any electrical problem you have.</p>
                             <a href="/electrical" className="info">Learn More</a>
                         </div>
                     </div>
                </Col>
                <Col xs={12} md={6} xl={6} className="p-3">
                    <div class="hovereffect">
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
    );
}

export default ServiceLinks;
