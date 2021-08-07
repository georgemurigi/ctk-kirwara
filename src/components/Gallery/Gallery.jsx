import React from 'react';
import './gallery.scss';
import Slider from './Slider';

const Gallery = () => {
    return (
        <div className='GalleryContainer'>
            <div className="gallery-page-container">
                <div className="header-center">
                    <h5>Gallery</h5>
                    <h2>Our Recent Events</h2>
                </div>
                <Slider />
                <a href="gallery">School Gallery</a>
            </div>
        </div>
    )
}

export default Gallery
