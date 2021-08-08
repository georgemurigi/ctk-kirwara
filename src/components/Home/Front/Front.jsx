import React from 'react';
import './Front.scss';
import 'react-bootstrap';

const Front = () => {
    return (
        <div className='Front'>
            <h1 className="hero-text">
                Welcome to <span className='bolder-text'>CTK <br />Kirwara Boys</span>
            </h1>
            <hr />
            <p className='h-sub-text'>
                We provide a holistic education to students from all over kenya with a consistent embracement of both curricular and co-curricular activities anchored by our believe in all-rounded students.
            </p>
            <a href='#shool'>
                School Inquiry
            </a>
        </div>
    )
}

export default Front;