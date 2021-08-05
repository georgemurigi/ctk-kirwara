import React from 'react';
import './greetings.scss';
import principal from './../../images/image1.jpg';

const Greetings = () => {
    return (
        <div className='greetings-page-container'>
            <h1>From The Principal</h1>
            <div className="greetings-container">
                <div className='greetings'>
                    <p>Warm greetings,</p>
                    <br />
                    <p>For several decades now, CTK Kirwara Boys has been an epitome of quality of education not only in Gatanga Sub-county but also in the larger Murang'a County. We are firm believers in our students' abilities, the reason why we always strive to afford our students the right guidance, teaching, and skills to be revered men of the future generations.</p>
                    <br />
                    <p>My team and I are always delighted to engage with our students both in and outside the classroom to ensure that we impart them both curricular and co-curricular skills. We always welcome members of our society and former students to join hands with us in motivating and supporting our boys.</p>
                    <br />
                    <p>I welcome you to collaborate with us to continue making Kirwara the best boys' school in Murang'a Region.</p>
                    <br />
                    <p className='name'>Mr. Mbothu J.M</p>
                    <br />
                    <p className='name'>School Principal</p>
                    <br />
                </div>
                <div className='image'>
                    <img src={principal} alt="principal" />
                </div>
            </div>
            <p className="p-link"><a href="leadership">School Leadership</a></p>
        </div>
    )
}

export default Greetings;
