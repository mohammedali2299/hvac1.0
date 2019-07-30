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
    
        // this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        // this.handleSlideEnd = this.handleSlideEnd.bind(this);
    
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

    // handleMouseLeave(selectedIndex, e) {
    //     this.setState({
    //         index: selectedIndex,
    //         direction: e.direction,
    //     });
    
    // }

    handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }

    // handleSlideEnd(selectedIndex, e) {
    //     if(selectedIndex === 2) {
    //         this.handleSelect(0, e);
    //     }
    // }

    


    render() {
        const { index, direction } = this.state;

        return(
            <div className="p-0 m-0">
                <Carousel activeIndex={index} direction={direction} controls={false}  onSelect={this.handleSelect} indicators={false} interval={6000}>
                    <Carousel.Item >
                        <Carousel.Caption className="w-75 mb-5" >
                            <h1 className="font-weight-bold text-center text-white mb-4 pl-0 pr-0 pt-0 mt-0">Why United?</h1>
                            <p className="h6 font-italic text-center text-white pl-0 pr-0 mr-0 ml-0 mb-0">
                                United HVAC and Electrical Inc. has been providing quality heating and cooling service in the Chicago Area since it's 
                                inception in 2006. From installing rooftop units on commercial buildings to home AC repair, 
                                United exceeds the standards set by industry today and offers a reliable service for all.
                            </p>
                        </Carousel.Caption>
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
                        <img className="d-block" src="/extras/review3.jpg" alt="Third slide"/>
                        <Carousel.Caption className="mb-5">
                            <h3>Satisfied Customer</h3>
                            <p className="mt-3 font-italic">"This is a great service! Anytime I needed work done on my A/C or heat, 
                                I was assisted right away. On top of that, the quality of work is excellent."</p>
                            <p className="mt-3">Click here to see more 
                            <a className="font-weight-bold yellow-text" href="https://www.google.com/search?q=google+reviews+united+hvac+west+chicago&rlz=1C1GCEB_enUS760US760&oq=goog&aqs=chrome.0.69i59j0j69i60j69i57j0l2.1252j0j4&sourceid=chrome&ie=UTF-8#lrd=0x880eff0af146c8bb:0x486eef7a5d48d4b6,1,,,"> customer reviews</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="overlay d-flex ">
                    <div onMouseEnter={(e) => this.handleMouseEnter(0, e)} id={"keep-hover0" + index} className={"m-0 p-2 w-100 text-center text-white border item "}>
                        Why United
                    </div>
                    <div onMouseEnter={(e) => this.handleMouseEnter(1, e)} id={"keep-hover1" + index} className={"m-0 p-2 w-100 text-center text-white border item "}>
                        Services
                    </div>
                    <div onMouseEnter={(e) => this.handleMouseEnter(2, e)} id={"keep-hover2" + index} className={"m-0 p-2 w-100 text-center text-white border item "}>
                        Satisfaction
                    </div>
                </div>
            </div>
            
                
                

            
        );
    }





    

}





export default InteractiveCarousel;