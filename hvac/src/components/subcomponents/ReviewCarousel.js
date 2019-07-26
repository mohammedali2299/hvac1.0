import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../CustomCarousel.css'


class ReviewCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="review-carousel">
        <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} fade={true}>
          <Carousel.Item>
            <img className="reviewimg" src="/extras/review3.jpg" alt="First slide"/>
            <Carousel.Caption>
                <h3>Satisfied Customer</h3>
                <p className="font-italic">"This is truly an all-inclusive HVAC and electrical solution provider. 
                  They just don't throw parts or fix issues, they provide solutions with guidance. 
                  It has been a true pleasure to have this company work at my home. 
                  I had my Furnace, Humidifier, Air Conditioner and Thermostat changed. 
                  They got me a state of the art Smart thermostat and installed a high efficiency Furnace and AC 
                  at a very reasonable cost (trust me I shopped). I saw significant savings in my utility bills. 
                  I don't usually put in ratings and reviews but did take my time to put this in because these guys 
                  are truly great."</p>
                <p>Click here to see more 
                <a className="font-weight-bold yellow-text" href="https://www.google.com/search?q=google+reviews+united+hvac+west+chicago&rlz=1C1GCEB_enUS760US760&oq=goog&aqs=chrome.0.69i59j0j69i60j69i57j0l2.1252j0j4&sourceid=chrome&ie=UTF-8#lrd=0x880eff0af146c8bb:0x486eef7a5d48d4b6,1,,,"> customer reviews</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="reviewimg" src="/extras/review3.jpg" alt="Second slide"/>
            <Carousel.Caption className="mb-5">
                <h3>Satisfied Customer</h3>
                <p className="mt-3 font-italic">"This is a great service! Anytime I needed work done on my A/C or heat, 
                    I was assisted right away. On top of that, the quality of work is excellent."</p>
                <p className="mt-3">Click here to see more 
                <a className="font-weight-bold yellow-text" href="https://www.google.com/search?q=google+reviews+united+hvac+west+chicago&rlz=1C1GCEB_enUS760US760&oq=goog&aqs=chrome.0.69i59j0j69i60j69i57j0l2.1252j0j4&sourceid=chrome&ie=UTF-8#lrd=0x880eff0af146c8bb:0x486eef7a5d48d4b6,1,,,"> customer reviews</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="reviewimg" src="/extras/review3.jpg" alt="Third slide"/>
            <Carousel.Caption className="mb-2">
              <h3>Satisfied Customer</h3>
              <p className="font-italic">"Imran was not only the first one to respond to my calls but was at my place immediately 
                  as I was having a furnace emergency on the coldest day of the year.  
                  His dedication to his work and level of quality in his service is commendable.  
                  He knows his stuff and will get to the root of the problem to permanently fix it.  
                  A bonus is that he's so much more affordable than others I called.  
                  He's reliable and very professional. Would recommend him any day!"
              </p>
              <p>Click here to see more 
            <a className="font-weight-bold yellow-text" href="https://www.google.com/search?q=google+reviews+united+hvac+west+chicago&rlz=1C1GCEB_enUS760US760&oq=goog&aqs=chrome.0.69i59j0j69i60j69i57j0l2.1252j0j4&sourceid=chrome&ie=UTF-8#lrd=0x880eff0af146c8bb:0x486eef7a5d48d4b6,1,,,"> customer reviews</a></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ReviewCarousel