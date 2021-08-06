import React from 'react';
import './ContactPage.scss';
import Contact from './../../components/Contact/Contact';

const ContactPage = () => {
    return (
        <>
            <div className='ContactContainer'>
                <div className="One">
                    <h4>Get In Touch</h4>
                    <h1>Contact <br />CTK Kirwara Boys</h1>
                </div>
                <div className="Two">
                    <div className="TwoContainer">
                        <div className="divOne">
                            <div className='call'>
                                <div className="icon">
                                    <p>Phone</p>
                                </div>
                                <div className="text">
                                    <h2>Call Us Directly</h2>
                                    <p>+254 727 045 261</p>
                                </div>
                            </div>
                            <div className="mail">
                                <div className="icon">
                                    <p>mail</p>
                                </div>
                                <div className="text">
                                    <h2>Reach Us Through Mail</h2>
                                    <p>Email: <span>kirwarahs@gmail.com</span></p>
                                    <p>P.O Box: <span>880 - 01000, Thika</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="divTwo">
                            <div className="visit">
                                <div className="icon">
                                    <p>location</p>
                                </div>
                                <div className="text">
                                    <h2>Visit Us</h2>
                                    <p>We are located 18km from Thika town along Thika - Gatura Road, few meters AlongKirwara - Kigio road from Kirwara Shopping centre</p>
                                </div>
                            </div>
                            <div className="socialMedia">
                                <h2>Follow Us On Social Media</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Three">
                    <div className='threeContainer'>
                        <div className="image">
                            <p>Image goes here</p>
                        </div>
                        <div className="form">
                            <form>
                                <p>Fill The Contact Form</p>
                                <label>
                                    <input type="text" placeholder="Name" />
                                </label>
                                <label>
                                    <input type="email" placeholder="Email" />
                                </label>
                                <label>
                                    <select name="choose">
                                        <option value="media" selected>Media</option>
                                        <option value="admission">Admission</option>
                                        <option value="inquiry">General Inquiry</option>
                                    </select>
                                </label>
                                <label>
                                    <textarea name="" id="" cols="30" rows="10">Give us more details</textarea>
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="Four">
                    <p>Map will go here</p>
                </div>
            </div>
            <Contact />   
        </>
    )
}

export default ContactPage
