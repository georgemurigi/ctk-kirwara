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
                    <div>
                        <div className='equipment-image'>
                            <img src={microscope} alt="microscope" />
                        </div>
                        <br />
                        <h2>Academic Departments</h2>
                        <br />
                        <p>We foster teamwork in our academic activities through departmentalization for quality outcomes and enhanced learning for our students.</p>
                        <br /><br />
                        <a href="#learn">Learn More</a>
                    </div>
                    <div>
                        <div className='equipment-image'>
                            <img src={books} alt="books" />
                        </div>
                        <br />
                        <h2>Non-Academic Departments</h2>
                        <br />
                        <p>We provide our boys with an enabling environment outside the curriculum in line with our mission of building all-rounded students.</p>
                        <br /><br />
                        <a href="#learn">Learn More</a>
                    </div>
                    <div>
                        <div className='equipment-image'>
                            <img src={academy} alt="academy" />
                        </div>
                        <br />
                        <h2>Non-Teaching Facilities</h2>
                        <br />
                        <p>We have complementary academic facilities through which we enhance the quality and practice-oriented learning for our students.</p>
                        <br /><br />
                        <a href="#learn">Learn More</a>
                    </div>
                    <div>
                        <div className='equipment-image'>
                            <img src={computer} alt="computer" />
                        </div>
                        <br />
                        <h2>Academic Quality</h2>
                        <br />
                        <p>We have special departments dedicated to promoting a conducive learning environment and standardized delivery methods.</p>
                        <br /><br />
                        <a href="#learn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Departments
