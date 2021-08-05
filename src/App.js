import React, { useState } from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Greetings from './components/Greetings/Greetings';
import About from './components/About/About';
import Departments from './components/Departments/Departments';
import CoCurricular from './components/Co-Curricular/CoCurricular';
import Loop from './components/Loop/Loop';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Nav />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Greetings />
        <About />
        <Departments />
        <CoCurricular />
        <Loop />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
