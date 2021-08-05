import React from 'react';
import './Home.scss';
import 'react-bootstrap';
import Front from './Front/Front';

const Home = () => {
    return (
        <div className='HomePage' id='home'>
            <Front />
        </div>
    )
}

export default Home;