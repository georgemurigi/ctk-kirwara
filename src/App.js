import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AlumniPage from './Pages/AlumniPage/AlumniPage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import JournalPage from './Pages/JournalPage/JournalPage';
import ContactPage from './Pages/ContactPage/ContactPage'; 


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/*<Route path="/school" component={SchoolPage} />*/}
        {/*<Route path="/departments" component={DepartmentPage} />*/}
        {/*<Route path="/co-curricular" component={CoCurricularPage} />*/}
        {/*<Route path="/noticeboard" component={NoticeboardPage} />*/}
        <Route path="/alumni" component={AlumniPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/journal" component={JournalPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  )
}

export default App;
