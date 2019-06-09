import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faTrophy,  faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from './breadcrumb';
import Filtertion from './filteration';

class BloodBank extends Component {
  render() {
  
      const {blood} = this.props;
      let singleBloodBank = blood.map((bloodbankData) => {
        return(
          <section className=" d-block rounded px-3 mb-3 bg-white shadow" key={bloodbankData.id}>
            <div className="row">
                {/* BloodBank Image Start */}
                <div className="col-md-6 p-0">
                  <Link className="d-block" to="/services/all-blood-banks/single-blood-bank" title="Single blood">
                    <img className="img-fluid w-100" src={bloodbankData.img} alt={bloodbankData.title}/>
                  </Link>
                </div>
                {/* BloodBank Image End */}
  
                {/* BloodBank Info Start */}
                <div className="col-md-6 pt-2">
                    {/* BloodBank Main Info Start */}
                    <Link to="/services/all-blood-banks/single-blood-bank" title="Single BloodBank" className="bloodBank-name">
                       <h3 className="text-black d-inline-block">{bloodbankData.title}</h3>
                    </Link>
                    <p className="bloodBank-short-description text-grey">
                       {bloodbankData.desc}
                       <Link to="/single-specialist" title="Single Specialist" className="text-decoration-none">
                          <span className="text-green h5 ml-1">{bloodbankData.types}</span>
                       </Link>
                    </p>
                    {/* BloodBank Main Info End */}
  
                    {/* BloodBank Rate Start */}
                    <div className="bloodBank-rating mb-3">
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
                    {/* BloodBank Rate End */}
  
                    {/* BloodBank Contacts Start */}
                    <ul class="list-unstyled">
                       <li className="text-grey">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green fa-1x mr-3"/>
                          <span className="text-black">Address: </span>{bloodbankData.address}
                       </li>
                       <li className="text-grey">
                          <FontAwesomeIcon icon={faPhone} className="text-green fa-1x mr-2" rotation="90"/>
                          <span className="text-black">Phone: </span>{bloodbankData.phone}
                       </li>
                    </ul>
                    {/* BloodBank Contacts End */}
  
                    {/* BloodBank Action Start */}
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
                    {/* BloodBank Action End */}
                 </div>
                {/* BloodBank Info Start */}
              </div>
          </section>
        );
      });
      return (
        <section>
           <Breadcrumb/> 
           <div className="pt-3 pb-3 all-bloodBanks-page">   
                 <div className="container">
                    <div className="row">
                       <div className="col-lg-10 col-md-10">{singleBloodBank}</div>
                       <Filtertion/>
                 </div>
              </div>
           </div> 
        </section> 
      );
  }
}

export default BloodBank;
