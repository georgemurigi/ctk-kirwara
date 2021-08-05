import React from 'react';
import './nav.scss';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    //const [click, setClick] = useState(false);
    //const [dropdown, setDropdown] = useState(false);
    //const handleClick = () => setClick(!click);
    //const closeMobileMenu = () => setClick(false);
    return (
        <div className='NavBar'>
            <nav className='nav'>
                <div className="logo">
                    <p>KIRWARA BOYS</p>
                </div>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/school" exact activeClassName="active">
                            Our School
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/departments" exact activeClassName="active">
                            Departments
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/co-curricular" exact activeClassName="active">
                            Co-curricular
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/noticeboard" exact activeClassName="active">
                            Noticeboard
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/alumni" exact activeClassName="active">
                            Alumni
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/gallery" exact activeClassName="active">
                            Gallery
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/journal" exact activeClassName="active">
                            Journal
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                {/*for mobile view */}
                {/*<div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}> menu</i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                </ul>*/}
            </nav>
        </div>
    )
}

export default Nav
