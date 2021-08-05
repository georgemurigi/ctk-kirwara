import React from 'react';
import './homepage.scss';
import 'react-bootstrap';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <header className="hero">
                <h1 className="hero-text">
                    Welcome to CTK <br /> Kirwara Boys
                </h1>
                <hr />
                <p className='h-sub-text'>
                    We provide a holistic education to students from all over kenya with a consistent embracement of both curricular and co-curricular activities anchored by our believe in all-rounded students.
                </p>
                <div className='button'>
                    <button className='btn btn-default'>
                        School Inquiry <span><i className='fas fa-thumbs-up'></i></span>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
