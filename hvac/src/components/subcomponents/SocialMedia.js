import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css'



function SocialMedia() {
    return(
        <div>
            <a href="https://www.facebook.com" target="_blank" className="m-2 ">
                <FontAwesomeIcon icon={faFacebookSquare} size="3x"/>
            </a>
            <a href="https://www.instagram.com" target="_blank" className="m-2">
                <FontAwesomeIcon icon={faInstagram} size="3x"/>
            </a>
            <a href="https://www.twitter.com" target="_blank" className="m-2">
                <FontAwesomeIcon icon={faTwitterSquare} size="3x"/>
            </a>     
        </div>
    );

}

export default SocialMedia