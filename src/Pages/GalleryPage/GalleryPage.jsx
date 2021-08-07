import React from 'react';
import Contact from './../../components/Contact/Contact';
import './GalleryPage.scss';
import Images from './Images'

const GalleryPage = () => {
    return (
        <>
            <div className='Container'>
                <div className='One'>
                    <h2>From Our Events And Activities</h2>
                    <h1>School Gallery</h1>
                </div>
            </div>
            <Images />
            <Contact />   
        </>
    )
}

export default GalleryPage
