import React from 'react';
import './Home.scss';
import 'react-bootstrap';
import Front from './Front/Front';
import Greetings from '../Greetings/Greetings';
import About from '../About/About';
import Departments from '../Departments/Departments';
import CoCurricular from '../Co-Curricular/CoCurricular';
import Loop from '../Loop/Loop';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <div className='Home'>
                <Front />
            </div>
            <Greetings />
            <About />
            <Departments />
            <CoCurricular />
            <Loop />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Home;