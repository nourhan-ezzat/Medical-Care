import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHome} from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './breadcrumb';

class SingleDoctorHospital extends Component {
  render() {
    return (
      <section >
        <Breadcrumb/> 
        <div className="container-fluid bg-light mb-4 ">
          
            single doctor hospital  content
            {/* <FontAwesomeIcon icon={faHome}/> */}
          
        </div> 
      </section>
    );
  }
}

export default SingleDoctorHospital;
