import React from 'react';
import './contact.scss';

const Contact = () => {
    return (
        <div className='contact-page-container'>
           <div className="contact-container">
               <div className="contact-center">
                   <h4 className='uppercase'>contact</h4>
                   <h1>Have A Concern? Talk To Us</h1>
                   <button><a href="link">Talk to us today</a></button>
               </div>
               <div className='contact-row'>
                   <div className='contact-section'>
                       <h4 id="hhh"><a href="ctc">Kirwara High School</a></h4>
                       <div className="one">
                            <div>
                                    <ul>
                                        <li><a href="#departments">Departments</a></li>
                                        <li><a href="#co-curricular">Co-curricular Activities</a></li>
                                        <li><a href="#leadership">Leadership</a></li>
                                        <li><a href="#journal">School Journal</a></li>
                                        <li><a href="#gallery">School Gallery</a></li>
                                    </ul>
                            </div>
                            <div>
                                    <ul>
                                        <li><a href="#responsibility">Social Responsibility</a></li>
                                        <li><a href="#history">School History</a></li>
                                        <li><a href="#contact">Contact us</a></li>
                                        <li><a href="#terms">Terms of Use</a></li>
                                        <li><a href="#policy">Privacy Policy</a></li>
                                    </ul>
                            </div>
                       </div>
                   </div>
                   <div className='contact-section'>
                       <h4>Important Links</h4>
                       <ul>
                           <li><a href="https://education.go.ke">Ministy of Education</a></li>
                           <li><a href="www.knec.ac.ke">Kenya National Examinations Council</a></li>
                           <li><a href="www.tsc.go.ke">Teachers Service Commision</a></li>
                           <li><a href="https://education.go.ke/index.php/media-center/ministry-calendar-of-events">Ministry Calendar of Events</a></li>
                           <li><a href="www.kicd.ac.ke">Kenya Institute of Curriculum Development</a></li>
                       </ul>
                   </div>
               </div>
               <div className='footer contact-center'>
                    <p><a href="ctk.convenience.co.ke">&copy Kirwara High School 2021</a></p>
                    <p>Conveniently Crafted By <a href='https://convenience.co.ke/education-solutions'>Convenience Designs</a></p>
               </div>
            </div> 
        </div>
    )
}

export default Contact
