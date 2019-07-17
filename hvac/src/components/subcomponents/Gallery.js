import React from 'react'
import { Container } from 'react-bootstrap'
import ImageGallery from './ImageGallery'

function Gallery() {
    return(
        <div>
            <h1 className="page-title">Gallery</h1>
            <Container className="body">
                <ImageGallery />
            </Container>
        </div>
        
    );
}

export default Gallery