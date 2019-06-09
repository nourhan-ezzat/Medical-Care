import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faTrophy,  faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from './breadcrumb';
import Filtertion from './filteration';

class LabScan extends Component {
  render() {
    const {lab} = this.props;
    let singleLab = lab.map((labData) => {
      return(
        <section className=" d-block rounded px-3 mb-3 bg-white shadow" key={labData.id}>
          <div className="row">
              {/* Lab Image Start */}
              <div className="col-md-6 p-0">
                <Link className="d-block" to="/services/all-lab-scans/single-lab-scan" title="Single Lab">
                  <img className="img-fluid w-100" src={labData.img} alt={labData.name}/>
                </Link>
              </div>
              {/* Lab Image End */}

              {/* Lab Info Start */}
              <div className="col-md-6 pt-2">
                  {/* Lab Main Info Start */}
                  <Link to="/services/all-lab-scans/single-lab-scan" title="Single Lab" className="lab-name">
                     <h3 className="text-black d-inline-block">{labData.title}</h3>
                  </Link>
                  <p className="lab-short-description text-grey">
                     professor  of clinical  oncology at faculty of medicine, Ain Shams University 
                     <Link to="/single-specialist" title="Single Specialist" className="text-decoration-none">
                        <span className="text-green h5 ml-1">{labData.types}</span>
                     </Link>
                  </p>
                  {/* Lab Main Info End */}

                  {/* Lab Rate Start */}
                  <div className="lab-rating mb-3">
                     <span>
                       <FontAwesomeIcon icon={faStar} className="text-warning"/>
                       <FontAwesomeIcon icon={faStar} className="text-warning"/>
                       <FontAwesomeIcon icon={faStar} className="text-warning"/>
                       <FontAwesomeIcon icon={faStar} className="text-grey"/>
                       <FontAwesomeIcon icon={faStar} className="text-grey"/>
                       <span className="text-grey ml-2">(145)</span>
                     </span>
                     <span  className="ml-2"><FontAwesomeIcon icon={faTrophy} className="text-warning"/></span>
                  </div>
                  {/* Lab Rate End */}

                  {/* Lab Contacts Start */}
                  <ul class="list-unstyled">
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green fa-1x mr-3"/>
                        <span className="text-black">Address: </span>{labData.address}
                     </li>
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faPhone} className="text-green fa-1x mr-2" rotation="90"/>
                        <span className="text-black">Phone: </span>{labData.phone}
                     </li>
                  </ul>
                  {/* Lab Contacts End */}

                  {/* Lab Action Start */}
                  <ul class="list-inline">
                     <li class="list-inline-item pr-md-4 border-right m-0">
                        <Link className="text-grey general-a" to="/" title="View Map">View Map</Link>
                     </li>
                    <li class="list-inline-item pr-md-4 pl-md-4 ">
                        <Link className="text-grey general-a" to='https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361'>Direction</Link>
                     </li>
                     <li class="list-inline-item pr-md-4 pl-md-4 rounded border-green bg-green float-right">
                        <Link className="text-white general-a" to="/appointment" title="Book Now">Book Now</Link>
                     </li>
                  </ul>
                  {/* Lab Action End */}
               </div>
              {/* Lab Info Start */}
            </div>
        </section>
      );
    });
    return (
      <section>
        <Breadcrumb/> 
        <div className="pt-3 pb-3 all-labs-page">   
            <div className="container">
              <div className="row">
                    <div className="col-lg-10 col-md-10">{singleLab}</div>
                    <Filtertion/> 
              </div>
          </div>
        </div> 
      </section>
    );
  }
}

export default LabScan;
