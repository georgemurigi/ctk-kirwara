import React from 'react'
import './JournalPage.scss';
import Contact from './../../components/Contact/Contact';
import CoCurricular from './../../components/Co-Curricular/CoCurricular';

const JournalPage = () => {
    return (
        <>
            <div className='JournalContainer'>
                <div className="One">
                    <h1>Our Journal</h1>
                    <p>Ideas and thoughts shared by our students and teachers.</p>
                </div>
            </div>
            <CoCurricular />
            <Contact />   
        </>
    )
}

export default JournalPage
