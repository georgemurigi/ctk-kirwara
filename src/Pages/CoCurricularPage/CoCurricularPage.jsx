import React from 'react'
import './CoCurricularPage.scss';
import Contact from './../../components/Contact/Contact';
import CoCurricular from './../../components/Co-Curricular/CoCurricular';

const CoCurricularPage = () => {
    return (
        <>
            <div className='Container'>
                <div className="One">
                    <h2>We Nurture Talents Through</h2>
                    <br />
                    <h1>Co-Curricular Activities</h1>
                </div>
            </div>
            <CoCurricular />
            <Contact />   
        </>
    )
}

export default CoCurricularPage