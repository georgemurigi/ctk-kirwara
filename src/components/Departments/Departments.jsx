import React from 'react';
import './departments.scss';
import microscope from './../../images/image2.jpg';
import books from './../../images/image3.jpg';
import academy from './../../images/image4.jpg';
import computer from './../../images/image5.jpg';

const Departments = () => {
    return (
        <div className="department-page-container">
            <div className="department-container">
                <div className="text-center">
                    <h1>Departments</h1>
                    <p>Our academic and extra-curricular activities are conducted through specialized departments that not only enhance learning but also teamwork and quality outcomes.</p>
                </div>
                <div className='department-row'>
                    <div className="section-row">
                        <div className='equipment-image'>
                            <img src={microscope} alt="microscope" />
                        </div>
                        <div className='text-section'>
                            <h3>Academic Departments</h3>
                            <br />
                            <p>We foster teamwork in our academic activities through departmentalization for quality outcomes and enhanced learning for our students.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                    <div className="section-row">
                        <div className='equipment-image'>
                            <img src={books} alt="books" />
                        </div>
                        <div className='text-section'>
                            <h3>Non-Academic Departments</h3>
                            <br />
                            <p>We provide our boys with an enabling environment outside the curriculum in line with our mission of building all-rounded students.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                    <div className="section-row">
                        <div className='equipment-image'>
                            <img src={academy} alt="academy" />
                        </div>
                        <div className='text-section'>
                            <h3>Non-Teaching Facilities</h3>
                            <br />
                            <p>We have complementary academic facilities through which we enhance the quality and practice-oriented learning for our students.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                    <div className="section-row">
                        <div className='equipment-image'>
                            <img src={computer} alt="computer" />
                        </div>
                        <div className='text-section'>
                            <h3>Academic Quality</h3>
                            <br />
                            <p>We have special departments dedicated to promoting a conducive learning environment and standardized delivery methods.</p>
                            <a href="#learn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Departments
