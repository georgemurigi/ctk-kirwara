import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import { toggleClass } from 'dom-helpers';
//import SchoolDropdown from '../../Dropdown/SchoolDropdown';
//import DepartmentDropdown from '../../Dropdown/DepartmentDropdown';
//import CoCurricularDropdown from '../../Dropdown/CoCurricularDropdown';
//import NoticeboardDropdown from '../../Dropdown/NoticeboardDropdown';

const NavBar = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    }
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__active');
    } else {
        boxClassSubMenu.push('');
    }

    
    return (
        <>
            <header className='header__middle'>
                <div className="container">
                    <div className="row">
                        {/* Add Logo */}
                        <div className="header__middle__logo">
                            <Link to='/' exact activeClassName='is-active'>
                                {/*<img src="" alt="" />*/}
                                KIRWARA BOYS
                            </Link>
                        </div>
                        <div className="header__middle__menus">
                            <nav className='main-nav'>
                                {/* Responsive Menu Button */}
                                {isResponsiveclose === true ? <>
                                <span className='menubar__button' style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle /> </span>
                                </> : <>
                                <span className='menubar__button' style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight /> </span>
                                </>}
                                <ul className={boxClass.join(' ')}>
                                    <li className="menu-item">
                                        <Link to='/' exact activeClassName='is-active' onClick={toggleClass} >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="menu-item sub__menus__arrows" onClick={toggleSubmenu}>
                                        <Link to='/school' exact activeClassName='is-active' onClick={toggleClass} >
                                            Our School <FiChevronDown />
                                        </Link>
                                        {/*
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Our leadership
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    About CTK Kirwara
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    School's Impact
                                                </Link>
                                            </li>
                                        </ul>
                                        */}
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/departments' exact activeClassName='is-active' onClick={toggleClass} >
                                            Departments <FiChevronDown />
                                        </Link>
                                        {/*
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Academic Departments
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Non-academic Departments
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Non-teaching Departments
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    How We Promote Quality Education
                                                </Link>
                                            </li>
                                        </ul>
                                        */}
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/co-curricular' exact activeClassName='is-active' onClick={toggleClass} >
                                            Co-curricular <FiChevronDown />
                                        </Link>
                                        {/*
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Music and Art Activities
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Sporting and Talent Activities
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Student Clubs and Societies
                                                </Link>
                                            </li>
                                        </ul>
                                        */}
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/noticeboard' exact activeClassName='is-active' onClick={toggleClass} >
                                            Noticeboard <FiChevronDown />
                                        </Link>
                                        {/*
                                        <ul className={boxClassSubMenu.join(' ')}>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Events and Notices
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='' onClick={toggleClass} activeClassName='is-active'>
                                                    Tenders
                                                </Link>
                                            </li>
                                        </ul>
                                        */}
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/alumni' exact activeClassName='is-active' onClick={toggleClass} >
                                            Alumni
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/gallery' exact activeClassName='is-active' onClick={toggleClass} >
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/journal' exact activeClassName='is-active' onClick={toggleClass} >
                                            Journal
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to='/contact' exact activeClassName='is-active' onClick={toggleClass} >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;
