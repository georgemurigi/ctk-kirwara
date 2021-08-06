import React from 'react'
import './DepartmentPage.scss';
import Contact from './../../components/Contact/Contact';
import Departments from './../../components/Departments/Departments';

const DepartmentPage = () => {
    return (
        <>
            <div className='Container'>
                <div className="One">
                    <p>Get To Know About Our</p>
                    <br />
                    <h1>Departments</h1>
                    <br />
                    <p>Our academic and extra-curricular activities are conducted through specialized departments that not only enhance learning but also teamwork and quality outcomes. Our departments are structured to facilitate both the academic and non-academic welfare of our students.</p>
                </div>
            </div>
            <Departments />
            <Contact />   
        </>
    )
}

export default DepartmentPage