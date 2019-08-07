import React from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'
import './Gallery.css'


class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = { left: 0, mid: 1, right: 2};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBackwards = this.handleChangeBackwards.bind(this);
    }


    handleChange() {
        var nextRight = this.state.right + 1;
        nextRight = nextRight === this.props.images.imageList.length ? 0 : nextRight;
        var nextLeft = this.state.mid;
        var nextMid = this.state.right;
        this.setState({
            left: nextLeft,
            mid: nextMid,
            right: nextRight
        });
    }
    
    handleChangeBackwards() {
        var nextLeft = this.state.left - 1;
        nextLeft = nextLeft === -1 ? (this.props.images.imageList.length - 1) : nextLeft;
        var nextRight = this.state.mid;
        var nextMid = this.state.left;
        this.setState({
            left: nextLeft,
            mid: nextMid,
            right: nextRight
        });
    }

    tick() {
        this.handleChange();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 4000) 
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <Row className="gallery-background pt-5 pb-5">
                    <Col xs={{offset: 1, span: 2}} className="d-flex align-items-center">
                        <Image onClick={this.handleChangeBackwards} className="w-100 switchers gallery-img" src={this.props.images.imageList[this.state.left]} />
                    </Col>
                    <Col xs={{offset: 1, span: 4}} className="d-flex align-items-center">
                        <Image className="w-100 main-img gallery-img" src={this.props.images.imageList[this.state.mid]} />
                    </Col>
                    <Col xs={{offset: 1, span: 2}} className="d-flex align-items-center">
                        <Image onClick={this.handleChange} className="w-100 switchers gallery-img" src={this.props.images.imageList[this.state.right]} />
                    </Col>
                </Row>
            </div>

            
        );
    }

}

export default Gallery;