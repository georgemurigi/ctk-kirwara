import React, { useState } from 'react';
import { CoCurricular } from './DropdownItem/CoCurricular';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const CoCurricularDropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
            <ul className={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {CoCurricular.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
export default CoCurricularDropdown;