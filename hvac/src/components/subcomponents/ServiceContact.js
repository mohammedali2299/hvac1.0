import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import "./ServiceContact.css"

function ServiceContact(props) {
    var h2t;
    var p1t;
    var p2t;
    var linkB = "/contact";
    
    if(props.name === "home") {
        h2t = "Get Started Today";
        p1t = "Fill out our online form or contact us via email or phone to get started. We are also happy to answer any questions about our services.";
        p2t = "note: give a description of what they should ask on the form";
    } else if(props.name === "emergency") {
        h2t = "Have an Emergency?";
        p1t = "Let United expedite your problem. Click below for more information.";
        p2t = "";
        linkB = "/emergency-services"
    } else if(props.name === "cooling") {
        h2t = "Find out how we can help you beat the heat!";
        p1t = "To get an air conditioner installed or repaired fill out our contact form, or contact us via email or phone.";
        p2t = "";
    }


    return (
        <Jumbotron fluid className={"border d-flex flex-column align-items-center mb-0 pt-3 pb-3 h-100 " + props.color + "-primary"}>
            <h2 className="mb-3 pt-2 text-center text-white pl-3 pr-3">{h2t}</h2>
            <p className="mb-3 text-center font-italic text-white pl-4 pr-4 pt-3 pb-3">{p1t}</p>
            <p className="mb-3 text-center font-italic text-white pl-4 pr-4 pt-3 pb-3">{p2t}</p>
            <Button href={linkB} className={"border-0 mb-2 btn-lg shadow " + props.color + "-secondary"}>Get Started</Button>
        </Jumbotron>
    );
}

export default ServiceContact