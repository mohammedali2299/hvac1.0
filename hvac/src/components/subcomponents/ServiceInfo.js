import React from 'react'
import { Jumbotron } from 'react-bootstrap'

function ServiceInfo(props) {
    var title;
    var install;
    var repair;

    if(props.name === "cooling") {
        title = "All of your Air-Conditioning Needs"
        repair = "We can get your air conditioning system back up and running in no time. We have experience working with all major-brand air conditioning units. We can diagnose the problem and offer you the most cost efficient solution. Air conditioners may begin to slow down or stop working when the system is overburdened. If this happens, you can contact us and we will send an HVAC technician for a full inspection of the unit." 
        install = "Often times your air conditioner may be beyond repair or running inefficiently for your building size. An air conditioner that is too powerful for your home may be wasting money on electricity, on the other hand you may own a system that is not powerful enough to keep your house cool. No need to worry, our expert HVAC technicians can give you a recommendation on the best system to suit your needs. After that we can install your new air conditioner for a fair price! Our installation services include: inside controls, air conditioner set-up and testing, and much more. Feel free to contact us via our service form to find out how we can best help you."
       

    } else if(props.name === "heating") {
        title = "All of your Heating Concerns"
        repair = "Often times, the reason your home is not feeling the effects of the heating system is because your furnace is facing issues. These are problems that United has been solving for years and doing so in the highest level of professionalism. Each case is different so it's important to contact us when you think you need a repair done and we'll be able to further help you with the issue. We strive to work in a way that helps people the most in the long run by using high quality parts and exceptional service."
        install = "It's hard to decide wether you want to invest in a new HVAC system for your home or office but with United that decision becomes very easy. We have the long time experience necessary to provide a solution that will help your building in the short and long term. It's as easy as using the contact form to schedule an appointment and we will not only provide the best decision, but also the best experience."
        
    
    } else if(props.name === "electrical") {
        title = "Need an Electrician?"
        repair = "Falty or out of date electrical systems can be a hazard to fix on your own. Avoid the hassle in dealing with wiring and circuit breakers, we have years of experience dealing with the electrical issues that you may face in both residential and commercial buildings. We offer a wide range of electrical services so feel free to leave your specific problem in our contact form to find out how we can help you specifically."
        install = "Need a building wired by a professional? Ensure your building's electrical system runs efficiently and lasts as long as possible by employing our electrical installation services. We have experience wiring both residential and commercial buildings according to industry standards of safety and efficiency."
    } else if(props.name === "ducting") {
        
    }



    return(
        <Jumbotron fluid className="mb-0 pt-5">
            <h3 className="mb-5 ml-3 mr-3">{title}</h3>
            <h6 className="ml-3 mr-3 text-uppercase">Repair</h6>
            <p className="ml-3 mr-3 font-italic">{repair}</p>
            <h6 className="ml-3 mr-3 text-uppercase">Install</h6>
            <p className="ml-3 mr-3 font-italic">{install}</p>
            <p className="ml-3 mr-3 text-muted">If you have any more questions about the services we provide, reach out to us by pressing "Get Started" or send us an email or phone call.</p>
        </Jumbotron>
    );
}

export default ServiceInfo