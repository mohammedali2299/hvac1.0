import React from 'react'
import { Container } from 'react-bootstrap'
import ImageGallery from './ImageGallery'

function Gallery() {
    return(
        <div>
            <h1 className="page-title d-flex justify-content-center mt-4 mb-4 w-100 text-white pt-3 pb-3 cooling-primary">Gallery</h1>
            <Container className="body">
                <ImageGallery />
            </Container>
        </div>
    );
}

export default Gallery