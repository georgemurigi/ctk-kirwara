import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className="logo">
                    KIRWARA BOYS
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/school" className="nav-links">
                            Our School
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/departments" className="nav-links">
                            Departments
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/co-curricular" className="nav-links">
                            Co-curricular
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/noticeboard" className="nav-links">
                            Noticeboard
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/alumni" className="nav-links">
                            Alumni
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/gallery" className="nav-links">
                            Gallery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/journal" className="nav-links">
                                Journal
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className="nav-links">
                                Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
