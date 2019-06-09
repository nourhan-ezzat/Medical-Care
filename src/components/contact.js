import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../css/contact.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faMap, faLink, faPhone} from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from './breadcrumb';

class Contact extends Component {
    render() { 
        return ( 
            <section >
                <Breadcrumb/> 
                <div className="container mt-5 mb-5">
                    <div className="row">
                        {/* Contact From Start */}
                        <div className="col-lg-6 col-md-6">
                            <h1 className="text-black">Contact us</h1>
                            <p className="text-grey">We will be happy to receive your inquiries and suggestions.</p>
                            <form>
                                <div className="row mb-4">
                                    <div className="col-lg-6 col-md-6 mb-2 mb-lg-0">
                                        <input type="text" className="form-control contact-form" placeholder="Full Name" style={{height: "50px"}}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <input type="email" className="form-control contact-form" placeholder="Email" style={{height: "50px"}}/>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-lg-6 col-md-6 mb-2 mb-lg-0">
                                        <input type="text" className="form-control contact-form" placeholder="Phone" style={{height: "50px"}}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <input type="text" className="form-control contact-form" placeholder="Subject" style={{height: "50px"}}/>
                                    </div>
                                </div>
                                
                                <textarea className="form-control contact-form" placeholder="Message" rows="8"></textarea>

                                <button type="button" class="btn btn-green text-white mt-4 mb-2 mb-lg-0">Send</button>
                            </form>
                        </div>
                        {/* Contact From End */}

                        {/* Our Info Start */}
                        <div className="col-lg-6 col-md-6 text-info">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-2 mb-lg-0 pl-md-0">
                                    <Link to="maiilto:info@site-name.com" className="general-a">
                                        <div className="card py-5 card-hover">
                                        <FontAwesomeIcon icon={faEnvelope} size="4x" className="card-icon"/>
                                        <div className="card-body" className="text-center mt-2">
                                            <h5 className="card-title mb-0 text-black">Email</h5>
                                            <p className="card-text text-grey">info@site-name.com</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                
                                <div className="col-lg-6 col-md-6 pr-md-0">
                                    <Link to="https://www.google.com/maps" className="general-a">
                                        <div className="card py-5 card-hover">
                                        <FontAwesomeIcon icon={faMap} size="4x" className="card-icon"/>
                                        <div className="card-body" className="text-center mt-2">
                                            <h5 className="card-title mb-0 text-black">Address</h5>
                                            <p className="card-text text-grey">Marmora Road, Glasgow</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col-lg-6 col-md-6 mb-2 mb-lg-0 pl-md-0">
                                    <Link to="/" className="general-a">
                                        <div className="card py-5 card-hover">
                                        <FontAwesomeIcon icon={faLink} size="4x" className="card-icon"/>
                                        <div className="card-body" className="text-center mt-2">
                                            <h5 className="card-title mb-0 text-black">Website</h5>
                                            <p className="card-text text-grey">www.medical-care.com</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                
                                <div className="col-lg-6 col-md-6 pr-md-0">
                                    <Link to="tel:+2221233019" className="general-a">
                                        <div className="card py-5 card-hover">
                                        <FontAwesomeIcon icon={faPhone} size="4x" className="card-icon"/>
                                        <div className="card-body" className="text-center mt-2">
                                            <h5 className="card-title mb-0 text-black">Phone</h5>
                                            <p className="card-text text-grey">+222 123 3019</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Our Info End */}
                    </div>
                </div>
            </section>    
        );
    }
}
  
export default Contact;