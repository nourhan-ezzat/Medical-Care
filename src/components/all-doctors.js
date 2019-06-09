import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faTrophy,  faMapMarkerAlt, faMoneyBillWave, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

import '../css/all-doctors.css';

import Breadcrumb from './breadcrumb';
import Filtertion from './filteration';

import $ from 'jquery';

class Doctors extends Component {

   // componentDidMount(){

   //    $(function(){
   //      var $containers= $('#containers'),
   //      $checkboxes = $('#filters input');
 
   //      $containers.isotope({
   //        itemSelector: '.itema'
   //      });
 
   //      $checkboxes.change(function(){
   //        var filters = [];
   //        // get checked checkboxes values
   //        $checkboxes.filter(':checked').each(function(){
   //          filters.push( this.value );
   //       });
   //        // ['.red', '.blue'] -> '.red, .blue'
   //        filters = filters.join(', ');
   //       $containers.isotope({ filter: filters });
   //      });
 
   //    });
 
   // }
   
  render() {
   const {doctor} = this.props;
   let singleDoctor = doctor.map((doctorData) => {
      return(
         <section className={doctorData.class + " d-block rounded p-3 mb-3 bg-white shadow "} key={doctorData.id}>
            <div className=" row">
               {/* Doctor Image Start */}
               <div className="col-md-2">
                  <Link className="d-block mb-3" to="/services/all-doctors/single-doctor" title="Single Doctor">
                     <img className="img-fluid w-100 d-block rounded-circle mb-2" src={doctorData.img} alt={doctorData.name}/>
                  </Link>
                  <p className="text-black text-center">Sponsored</p>
               </div>
               {/* Doctor Image End */}

               {/* Doctor Info Start */}
               <div className="col-md-6">
                  {/* Doctor Main Info Start */}
                  <Link to="/services/all-doctors/single-doctor" title="Single Doctor" className="doctor-name">
                     <small className="mr-1 h6 text-warning">{doctorData.degree}</small>
                     <h3 className="text-black d-inline-block">{doctorData.name}</h3>
                  </Link>
                  <p className="doctor-short-description text-grey">
                     Professor  of clinical  oncology at faculty of medicine, Ain Shams University , Specialized in
                     <Link to="/single-specialist" title="Single Specialist">
                        <span className="text-green h5 ml-1">{doctorData.department}</span>
                     </Link>
                  </p>
                  {/* Doctor Main Info End */}

                  {/* Doctor Rate Start */}
                  <div className="doctor-rating mb-3">
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
                  {/* Doctor Rate End */}

                  {/* Doctor Contacts Start */}
                  <ul class="list-unstyled">
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green fa-1x mr-3"/>
                        <span className="text-black">Address: </span>{doctorData.address}
                     </li>
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-green fa-1x mr-2" />
                        <span className="text-black">Fees: </span>{doctorData.fees}
                     </li>
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faClock} className="text-green fa-1x mr-2"/>
                        <span className="text-black">Waiting Time: </span>{doctorData.waitingTime}
                     </li>
                     <li className="text-grey">
                        <FontAwesomeIcon icon={faPhone} className="text-green fa-1x mr-2" rotation="90"/>
                        <span className="text-black">Phone: </span>{doctorData.phone}
                     </li>
                  </ul>
                  {/* Doctor Contacts End */}

                  {/* Doctor Action Start */}
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
                  {/* Doctor Action End */}
               </div>
               {/* Doctor Info End */}

               {/* Appointments Start */}
               <div className="col-md-4">
                  <div id={doctorData.id} class="carousel slide" data-ride="carousel">
                     <ol class="carousel-indicators">
                       <li data-target={"#"+doctorData.id} data-slide-to="0" class="active bg-green rounded-circle"></li>
                       <li data-target={"#"+doctorData.id} data-slide-to="1" class="bg-green rounded-circle"></li>
                       <li data-target={"#"+doctorData.id} data-slide-to="2" class="bg-green rounded-circle"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div className="row pl-3 pr-3">
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Today</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                 <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className="bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Tomorrow</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                  <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Monday</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                 <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div className="row pl-3 pr-3">
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Today</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                 <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Tomorrow</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                  <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Monday</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                 <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div className="row pl-3 pr-3">
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Today</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                 <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                 <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                              <div className="col-md-4 text-center rounded border">
                              {/* Day Start */}
                              <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                 <p className="w-100 m-0">Tomorrow</p>
                              </div>
                              {/* Day End */}

                              {/* Date Start */}
                              <div className="day-body bg-white pt-3 pb-3">
                                  <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                  <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                              </div>
                              {/* Date End */}
                              <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                           </div>
                              <div className="col-md-4 text-center rounded border">
                                 {/* Day Start */}
                                 <div className="day-heading border-bottom row text-white bg-warning pt-1 pb-1">
                                    <p className="w-100 m-0">Monday</p>
                                 </div>
                                 {/* Day End */}

                                 {/* Date Start */}
                                 <div className="day-body bg-white pt-3 pb-3">
                                    <Link className="text-black d-block general-a" to="/appointment"><small>03:00 pm</small></Link>
                                    <Link className="text-black d-block general-a" to="/appointment"><small>04:00 pm</small></Link>
                                    <Link className="text-black d-block general-a" to="/appointment"><small>05:00 pm</small></Link>
                                    <Link className="text-black d-block general-a" to="/appointment"><small>06:00 pm</small></Link>
                                 </div>
                                 {/* Date End */}
                                 <Link className=" bg-green text-white row d-block pt-1 pb-1 general-a" to="/appointment">Book</Link>
                              </div>
                           </div>
                        </div>
                     </div> 
                  </div>
               </div>
               {/* Appointments End */}
            </div>
         </section>
      );
   });
    return (
      <section>
         <Breadcrumb/>  
         <div className="pt-3 pb-3 all-doctors-page">   
            <div className="container">
               <div className="row">
                  <div className="col-lg-10 col-sm-12" id="containers">{singleDoctor}</div>
                  <Filtertion/>   
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default Doctors;
