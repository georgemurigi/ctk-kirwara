import React from 'react';
import './about.scss';

const About = () => {
    return (
        <div className='about-page-container'>
            <div className="about-container">
                <div className='center'>
                    <h3>About</h3>
                    <h1>Christ The King <br /> Kirwara Boys</h1>
                </div>
                <div className='about-row'>
                    <div>
                        <h3>School History</h3>
                        <p>CTK Kirwara Boys is situated 18km from Thika town along Thika - Gatura Road. The school is situated a few meters from Kirwara Shopping Center along Kirwara - Kigio road.</p>
                    </div>
                    <div>
                        <h3>Our Vision</h3>
                        <p>CTK Kirwara Boys aims to be the region's best boy's school. We embrace core values such as respect, teamwork, continuous learning, innovativeness, discipline, and professionalism.</p>
                    </div>
                    <div>
                        <h3>Our Mission</h3>
                        <p>Our Mision is to produce a self-reliant man through holistic education, professionalism and effective management of the available resources.</p>
                    </div>
                </div>
                <a className='p-btn' href='btn'><p >Learn more about us</p></a>
            </div>
        </div>
    )
}

export default About
