import React from 'react'
import { Container, Row, Col, Jumbotron, Carousel } from 'react-bootstrap';
import CarNavItem from './CarNavItem'
import './InteractiveCarousel.css'


// function InteractiveCarousel() {
//     return (
//         <div className="car-container shadow-element d-flex flex-column align-items-end">
//             <div className="car-imgs">
//                 <img src='/extras/home-flag.jpg' className="w-100 h-100" id="img1"/>
//             </div>
            


            
//         </div>
//     );

// }

class InteractiveCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    
        this.state = {
            index: 0,
            direction: null,


        };
    }

    handleMouseEnter(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    handleMouseLeave(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    
    }

    


    render() {
        const { index, direction } = this.state;

       
        // handleStyling(index) {
        //     return(
        //         {"shadow-element"}
        //     );
        // }

        return(
            <div>
                <Carousel activeIndex={index} direction={direction} controls={false} indicators={false} interval={2000}>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="/extras/home-flag.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="/extras/services.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block" src="/extras/review3.jpg" alt="Second slide"/>
                        <Carousel.Caption className="mb-5">
                            <h3>Satisfied Customer</h3>
                            <p className="mt-3 font-italic">"This is a great service! Anytime I needed work done on my A/C or heat, 
                                I was assisted right away. On top of that, the quality of work is excellent."</p>
                            <p className="mt-3">Click here to see more 
                            <a className="font-weight-bold yellow-text" href="https://www.google.com/search?q=google+reviews+united+hvac+west+chicago&rlz=1C1GCEB_enUS760US760&oq=goog&aqs=chrome.0.69i59j0j69i60j69i57j0l2.1252j0j4&sourceid=chrome&ie=UTF-8#lrd=0x880eff0af146c8bb:0x486eef7a5d48d4b6,1,,,"> customer reviews</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <div className="overlay d-flex">
                        <div onMouseEnter={(e) => this.handleMouseEnter(0, e)} className={"m-0 p-3 flex-fill text-center text-white border item item-United"}>
                            Why United
                        </div>
                        <div onMouseEnter={(e) => this.handleMouseEnter(1, e)} className={"m-0 p-3 flex-fill text-center text-white border item item-United"}>
                            Services
                        </div>
                        <div onMouseEnter={(e) => this.handleMouseEnter(2, e)} className={"m-0 p-3 flex-fill text-center text-white border item item-United"}>
                            Satisfaction
                        </div>
                    </div>

                </Carousel>
                
            </div>
            
                
                

            
        );
    }





    

}





export default InteractiveCarousel;