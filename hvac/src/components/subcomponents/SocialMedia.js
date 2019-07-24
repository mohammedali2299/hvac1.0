import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './SocialMedia.css'


function SocialMedia() {
    return(
        <Col xs={12} md={{span: 4, offset: 1}}>
            <div class="hovereffect3">
                {/* <img class="img-responsive w-100 h-100" src="http://placehold.it/350x200" alt="" /> */}
                <div class="overlay3">
                    <h2>Social Media</h2>
                    <div class="rotate">
                        <p class="group1">
                            <a href="#">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </p>
                            <hr/>
                            <hr/>
                        <p class="group2">
                            <a href="#">
                                <i class="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-dribbble"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Col>            
    
    );

}

export default SocialMedia