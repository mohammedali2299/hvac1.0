import React from 'react'
import { Carousel } from 'react-bootstrap'


class ImageGallery extends React.Component {
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
        <div>
          <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/residential2.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/residential3.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/residential4.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/residential5.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/residential6.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/residential7.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial2.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial3.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial4.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial5.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial6.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial7.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial8.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial9.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial10.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial11.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial12.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial13.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial14.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial15.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial16.jpg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial17.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial18.jpeg" alt="gallery pic"/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50 h-50 m-auto" src="/extras/commercial19.jpeg" alt="gallery pic"/>
            </Carousel.Item>

          </Carousel>
          
        </div>
      );
    }
  }
  
  export default ImageGallery