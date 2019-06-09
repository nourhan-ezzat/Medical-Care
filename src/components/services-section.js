import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHospital, faFlask, faFirstAid, faUserMd} from '@fortawesome/free-solid-svg-icons';

class ServicesSection extends Component {
    render() { 
        return (
            <div>
                {/* Services Start */}
                <div className="container my-5">
                    <div className="text-center">
                      <h3 className="text-black font-weight-bold">SERVICES</h3>
                      <img  class="img-fluid mb-2" src="../images/line-heading.png" alt="line heading"/>
                    </div> 
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <Link to="/services/all-hospitals" className="general-a">
                                            <div className="card py-2 card-hover border border-0">
                                            <FontAwesomeIcon icon={faHospital} size="4x" className="card-icon"/>
                                            <div className="card-body" className="text-center mt-2">
                                                <h5 className="card-title mb-0 text-black">Hospitals</h5>
                                                <p className="card-text text-grey">
                                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                                </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <Link to="/services/all-lab-scans" className="general-a">
                                            <div className="card py-2 card-hover border border-0">
                                            <FontAwesomeIcon icon={faFlask} size="4x" className="card-icon"/>
                                            <div className="card-body" className="text-center mt-2">
                                                <h5 className="card-title mb-0 text-black">Labs & Scans</h5>
                                                <p className="card-text text-grey">
                                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                                </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <Link to="/services/all-blood-banks" className="general-a">
                                            <div className="card py-2 card-hover border border-0">
                                            <FontAwesomeIcon icon={faFirstAid} size="4x" className="card-icon"/>
                                            <div className="card-body" className="text-center mt-2">
                                                <h5 className="card-title mb-0 text-black">Blood Banks</h5>
                                                <p className="card-text text-grey">
                                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                                </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <Link to="/services/all-doctors" className="general-a">
                                            <div className="card py-2 card-hover border border-0">
                                            <FontAwesomeIcon icon={faUserMd} size="4x" className="card-icon"/>
                                            <div className="card-body" className="text-center mt-2">
                                                <h5 className="card-title mb-0 text-black">Doctors</h5>
                                                <p className="card-text text-grey">
                                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                                </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/* Services End */}
            </div>
        );
    }
}

export default ServicesSection;