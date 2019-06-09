import React, { Component } from 'react';
 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLifeRing, faHeadset, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

class AboutSection extends Component {
    render() { 
        return (
        <div>
            {/* About us Start */}
            <div className="container my-5">
                <div className="text-center">
                    <h3 className="text-black font-weight-bold">ABOUT US</h3>
                    <img  class="img-fluid mb-2" src="../images/line-heading.png" alt="line heading"/>
                </div> 
                <div className="row">
                    <div className="col-lg-4 col-md-4 mb-lg-0 mb-3">
                        <div className="card py-4 card-hover">
                            <FontAwesomeIcon icon={faLifeRing} size="4x" className="card-icon"/>
                            <div className="card-body" className="text-center mt-2">
                                <h5 className="card-title mb-0 text-text-black">H24 Support</h5>
                                <p className="card-text text-grey">
                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mb-lg-0 mb-3">
                        <div className="card py-4 card-hover">
                            <FontAwesomeIcon icon={faHeadset} size="4x" className="card-icon"/>
                            <div className="card-body" className="text-center mt-2">
                                <h5 className="card-title mb-0 text-black">Help Direct Line</h5>
                                <p className="card-text text-grey">
                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="card py-4 card-hover">
                            <FontAwesomeIcon icon={faCalendarAlt} size="4x" className="card-icon"/>
                            <div className="card-body" className="text-center mt-2">
                                <h5 className="card-title mb-0 text-black">Instant Booking</h5>
                                <p className="card-text text-grey">
                                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About us End */}
        </div>
        );
    }
}

export default AboutSection;