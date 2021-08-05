import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import SchoolDropdown from '../../Dropdown/SchoolDropdown';
import DepartmentDropdown from '../../Dropdown/DepartmentDropdown';
import CoCurricularDropdown from '../../Dropdown/CoCurricularDropdown';
import NoticeboardDropdown from '../../Dropdown/NoticeboardDropdown';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 700) {
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 700) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
    };
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className="logo" onClick={closeMobileMenu}>
                    KIRWARA BOYS
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-items' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/school" className="nav-links" onClick={closeMobileMenu}>
                            Our School <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <SchoolDropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/departments" className="nav-links" onClick={closeMobileMenu}>
                            Departments <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <DepartmentDropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/co-curricular" className="nav-links" onClick={closeMobileMenu}>
                            Co-curricular <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <CoCurricularDropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/noticeboard" className="nav-links" onClick={closeMobileMenu}>
                            Noticeboard <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <NoticeboardDropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to="/alumni" className="nav-links" onClick={closeMobileMenu}>
                            Alumni
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/journal" className="nav-links" onClick={closeMobileMenu}>
                                Journal
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
