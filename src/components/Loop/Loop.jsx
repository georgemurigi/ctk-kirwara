import React from 'react';
import './loop.scss';
import event from './../../images/image9.jpg';
import alumni from './../../images/image10.jpg';
import tender from './../../images/image11.jpg';
import journal from './../../images/image12.jpg';

const Loop = () => {
    return (
        <div className="loop-page-container">
            <div className="loop-container">
                <div className="text-center">
                    <h4>CTK Kirwara Loop</h4>
                    <p>Be updated about our school affairs today.</p>
                </div>
                <div className='loop-row'>
                    <div className='loop-section'>
                        <div className='svg'>
                            <img src={event} alt="event" />
                        </div>
                        <div className="text-section">
                            <h3>Events and Notices</h3>
                            <br />
                            <p>Get updated about what's happening at our school from events to meetings.</p>
                            <a href="#learn">Noticeboard</a>
                        </div>
                    </div>
                    <div className='loop-section'>
                        <div className='svg'>
                            <img src={alumni} alt="alumni" />
                        </div>
                        <div className="text-section">
                            <h3>Alumni Program</h3>
                            <br />
                            <p>Join our database of former students who are dedicated to impacting our students.</p>
                            <a href="#learn">Join Program</a>
                        </div>
                    </div>
                    <div className='loop-section'>
                        <div className='svg'>
                            <img src={tender} alt="tender" />
                        </div>
                        <div className="text-section">
                            <h3>Tender Portal</h3>
                            <br />
                            <p>Explore our database of school tenders with real-time updates from the school.</p>
                            <a href="#learn">Explore Tenders</a>
                        </div>
                    </div>
                    <div className='loop-section'>
                        <div className='svg'>
                            <img src={journal} alt="Journal" />
                        </div>
                        <div className="text-section">
                            <h3>School Journal</h3>
                            <br />
                            <p>Get insights from articles and blogs written by our team, from students to staff.</p>
                            <a href="#learn">View Journal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loop
