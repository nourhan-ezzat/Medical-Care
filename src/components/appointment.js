import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../css/contact.css';

import Breadcrumb from './breadcrumb';

class BookDetails extends Component {
  render() {
    return (
      <section>
        <Breadcrumb/> 
        <div className="container">
          <div className="row my-3">
            {/* Reservation Info Start */}
            <div className="col-lg-6 col-lg-6">
              <div className="bg-light p-3">
                <div className="row">
                  <div className="col-lg-3 col-md-3 mb-3">
                    <img src="../images/doctor_listing_2.jpg" className="img-fluid rounded-circle"/>
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <h4 className="text-black">Doctor One</h4>
                    <p className="text-grey">Assistant professor of Urology</p>
                  </div>
                </div>
                <h6 className="text-grey">
                  Tomorrow, 8:30 <span className="text-black">Appointment Reservation</span>
                </h6>
              </div>
            </div>
            {/* Reservation Info End */}
            
            {/* Patient Rservation Info Start */}
            <div className="col-lg-6 col-lg-6 bg-light px-0">
              <h6 className="text-white bg-green text-center py-1 mb-2" style={{borderTopLeftRadius: ".25rem",borderTopRightRadius: ".25rem"}}>Enter Your Info</h6>
              <div className="px-3">
                <form>
                  <input type="text" className="form-control contact-form" placeholder="Full Name"/>
                  <input type="text" className="form-control contact-form mt-5" placeholder="Phone"/>
                  <div className="form-group mt-5">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <button className="btn-green btn text-white form-control">Book</button>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <button className="btn-danger btn text-white form-control">Cancel</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Patient Rservation Info End */}
          </div>
        </div> 
      </section>
    );
  }
}

export default BookDetails;
