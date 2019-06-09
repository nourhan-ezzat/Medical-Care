import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faTrophy,  faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from './breadcrumb';
import Filtertion from './filteration';

class Hospitals extends Component {
  render() {
    const {hospital} = this.props;
    let singleHospital = hospital.map((hospitalData) => {
      return(
        <section className=" d-block rounded px-3 mb-3 bg-white shadow" key={hospitalData.id}>
          <div className="row">
              {/* Hospital Image Start */}
              <div className="col-md-6 p-0">
                <Link className="d-block" to="/services/all-hospitals/single-hospital" title="Single Hospital">
                  <img className="img-fluid w-100" src={hospitalData.img} alt={hospitalData.title}/>
                </Link>
              </div>
              {/* Hospital Image End */}

              {/* Hospital Info Start */}
              <div className="col-md-6 pt-2">
                  {/* Hospital Main Info Start */}
                  <Link to="/services/all-hospitals/single-hospital" title="Single Hospital" className="hospital-name">
                     <h3 className="text-black d-inline-block">{hospitalData.title}</h3>
                  </Link>
                  <p className="hospital-short-description text-grey">
                     {hospitalData.desc} 
                     <Link to="/single-specialist" title="Single Specialist" className="text-decoration-none">
                        <span className="text-green h5 ml-1">{hospitalData.departments}</span>
                     </Link>
                  </p>
                  {/* Hospital Main Info End */}

                  {/* Hospital Rate Start */}
                  <div className="hospital-rating mb-3">
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
                  {/* Hospital Rate End */}

                  {/* Hospital Contacts Start */}
                  <ul class="list-unstyled">
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green fa-1x mr-3"/>
                        <span className="text-black">Address: </span>{hospitalData.address}
                     </li>
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faPhone} className="text-green fa-1x mr-2" rotation="90"/>
                        <span className="text-black">Phone: </span>{hospitalData.phone}
                     </li>
                  </ul>
                  {/* Hospital Contacts End */}

                  {/* Hospital Action Start */}
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
                  {/* Hospital Action End */}
               </div>
              {/* Hospital Info Start */}
            </div>
        </section>
      );
    });
    return (
      <section>
         <Breadcrumb/> 
         <div className="pt-3 pb-3 all-hospitals-page">   
               <div className="container">
                  <div className="row">
                     <div className="col-lg-10 col-md-10">{singleHospital}</div>
                     <Filtertion/>
               </div>
            </div>
         </div> 
      </section> 
    );
  }
}

export default Hospitals;
