import React, { useState } from 'react';
import './slider.css';
import BtnSlider from './BtnSlider';

const images = [
    { id: '1', imageName: 'image1.jpg'},
    { id: '2', imageName: 'image2.jpg'},
    { id: '3', imageName: 'image3.jpg'},
    { id: '4', imageName: 'image4.jpg'},
    { id: '5', imageName: 'image5.jpg'},
    { id: '6', imageName: 'image6.jpg'},
    { id: '7', imageName: 'image7.jpg'},
    { id: '8', imageName: 'image8.jpg'},
    { id: '9', imageName: 'image9.jpg'},
    { id: '10', imageName: 'image10.jpg'},
    { id: '11', imageName: 'image11.jpg'},
    { id: '12', imageName: 'image12.jpg'},
    { id: '13', imageName: 'image13.jpg'},
    { id: '14', imageName: 'image14.jpg'},
    { id: '15', imageName: 'image15.jpg'},
    { id: '16', imageName: 'image16.jpg'},
    { id: '17', imageName: 'image17.jpg'},
    { id: '18', imageName: 'image18.jpg'},
    { id: '19', imageName: 'image19.jpg'},
    { id: '20', imageName: 'image20.jpg'}
];

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if(slideIndex !== images.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === images.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(images.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider">
            <div className="">{images.map(image => 
                <div key={image.id} className={slideIndex === image + 1 }>
                    <img className='image' src={`/image/${image.imageName}`} alt="" />
                </div>)}
            </div>
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

            <div className='container-dots'>
                {Array.from({length: 20}).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    )
}

export default Slider
