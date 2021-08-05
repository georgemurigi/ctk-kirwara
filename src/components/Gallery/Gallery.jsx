import React from 'react';
import './gallery.scss';

const Gallery = () => {
    return (
        <div className='gallery-page-container'>
            <div className="gallery-container">
                <div className="header-center">
                    <h3>Gallery</h3>
                    <h1>Our Recent Events</h1>
                </div>
                <div className="picture-container">
                    <h1>Pictures will be displayed here</h1>
                </div>
                <p className='gallery-btn'><a href="gallery">School Gallery</a></p>
            </div>
        </div>
    )
}

export default Gallery
