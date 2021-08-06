import React from 'react';
import './AlumniPage.scss';
import Contact from './../../components/Contact/Contact';

const AlumniPage = () => {
    return (
        <>
            <div className='container'>
                <div className="one">
                    <h3>Kirwara Boys</h3>
                    <h1>Alumni Program</h1>
                    <p>Kirwara Boys Alumni program is part of our effort to bring together the Old Boys of our institution to tap into our strongholds and build a better institution for our present and future boys.</p>
                    <a href="join">Join the program</a>
                </div>
                <div className="two">
                    <div className="two-cointainer">
                        <h2>Why Join Our Alumni Program</h2>
                        <p>Joining the Kirwara Boys Alumni Programs will help you in a number of ways including.</p>
                        <ol>
                            <li>Get an opportunity to impact young boys and mold them into men of the future.</li>
                            <li>Get an opportunity to regularly motivate our students.</li>
                            <li>Get the chance to impact students today and in future through sponsoring school projects.</li>
                            <li>Get the opportunity to play group sports with other old boys and our students for team building.</li>
                        </ol>
                        <a href="join">Join the program</a>
                    </div>
                </div> 
            </div>
            <Contact />
        </>
    )
}

export default AlumniPage;
