import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'


class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = { left: 0, mid: 1, right: 2};

        

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var nextRight = this.state.right + 1;
        nextRight = nextRight === this.props.images.length ? 0 : nextRight;
        var nextLeft = this.state.mid;
        var nextMid = this.state.right;
        this.setState({
            left: nextLeft,
            mid: nextMid,
            right: nextRight
        });
    }
    
    render() {
        return (
            <Row>
                <Col xs={{offset: 1, span: 2}}>
                    <Image className="w-100 " src={this.props.images.imageList[this.state.left]} />
                </Col>
                <Col xs={{offset: 1, span: 4}}>
                    <Image className="w-100" src={this.props.images.imageList[this.state.mid]} />
                </Col>
                <Col xs={{offset: 1, span: 2}}>
                    <Image className="w-100" src={this.props.images.imageList[this.state.right]} />
                </Col>
            </Row>
        );
    }

}

export default Gallery;