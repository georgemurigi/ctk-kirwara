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
                    <h1>CTK Kirwara Loop</h1>
                    <p>Be updated about our school affairs today.</p>
                </div>
                <div className='loop-row'>
                    <div>
                        <div className='svg'>
                            <img src={event} alt="event" />
                        </div>
                        <br />
                        <h2>Events and Notices</h2>
                        <br />
                        <p>Get updated about what's happening at our school from events to meetings.</p>
                        <br /><br />
                        <a href="#learn">Noticeboard</a>
                    </div>
                    <div>
                        <div className='svg'>
                            <img src={alumni} alt="alumni" />
                        </div>
                        <br />
                        <h2>Alumni Program</h2>
                        <br />
                        <p>Join our database of former students who are dedicated to impacting our students.</p>
                        <br /><br />
                        <a href="#learn">Join Program</a>
                    </div>
                    <div>
                        <div className='svg'>
                            <img src={tender} alt="tender" />
                        </div>
                        <br />
                        <h2>Tender Portal</h2>
                        <br />
                        <p>Explore our database of school tenders with real-time updates from the school.</p>
                        <br /><br />
                        <a href="#learn">Explore Tenders</a>
                    </div>
                    <div>
                        <div className='svg'>
                            <img src={journal} alt="Journal" />
                        </div>
                        <br />
                        <h2>School Journal</h2>
                        <br />
                        <p>Get insights from articles and blogs written by our team, from students to staff.</p>
                        <br /><br />
                        <a href="#learn">View Journal</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loop
