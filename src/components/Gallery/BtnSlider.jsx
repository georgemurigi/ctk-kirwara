import React from 'react';
import './slider.css';
import leftArrow from './icons/left-arrow.png';
import rightArrow from './icons/right-arrow.png';

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <>
          <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
              <img src={direction === 'next' ? rightArrow : leftArrow} alt="icon" />
            </button> 
        </>
    )
}

export default BtnSlider
