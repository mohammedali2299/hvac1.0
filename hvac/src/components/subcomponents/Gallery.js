import React from 'react'
import { Container } from 'react-bootstrap'
import ImageGallery from './ImageGallery'

function Gallery() {
    return(
        <Container className="body">
            <ImageGallery />
        </Container>
    );
}

export default Gallery