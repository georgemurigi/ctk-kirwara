import React from 'react'
import './CoCurricular.scss';
import drums from './../../images/image6.jpg';
import drama from './../../images/image7.jpg';
import sports from './../../images/image8.jpg';

const CoCurricular = () => {
    return (
        <div className="curricular-page-container">
            <div className="curricular-container">
                <div className="text-center">
                    <h1>Co-Curricular Activities</h1>
                    <p>We provide students with co-curricular activities to nurture their talents in line with our mission of bringing up all-rounded students.</p>
                </div>
                <div className='curricular-row'>
                    <div className='curricular-section'>
                        <div className='equipment-image'>
                            <img src={drums} alt="drums" />
                        </div>
                        <div className="text-section">
                            <h3>Music And Art Co-Curricular</h3>
                            <br />
                            <p>We provide students with an array of art activities to grow their talents in music and performing arts such as drama.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                    <div className='curricular-section'>
                        <div className='equipment-image'>
                            <img src={drama} alt="drama" />
                        </div>
                        <div className="text-section">
                            <h3>Student Clubs And Societies</h3>
                            <br />
                            <p>Our students' clubs are designed to foster human development skills that are complementary to academic excellence for our students.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                    <div className='curricular-section'>
                        <div className='equipment-image'>
                            <img src={sports} alt="sports" />
                        </div>
                        <div className="text-section">
                            <h3>Sports And talent Activities</h3>
                            <br />
                            <p>We promote sporting activities that are designed to foster personal and professional growth among our students.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoCurricular;
