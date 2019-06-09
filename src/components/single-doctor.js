import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUser,faStar, faTrophy,  faMapMarkerAlt, faMoneyBillWave, faClock, faPhone, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from './breadcrumb';
import AddReviewSingle from './add-review-single';

import '../css/single-doctor.css';

class SingleDoctor extends Component {
  render() {
    return (
      <section >
        <Breadcrumb/> 
        <div className="container-fluid  single-doctor-page">
           <div className="container mt-5 mb-5">
              <div className="row">

                {/* Start doctor info section    */} 
                <div className="col-md-3">
                  <div className="rounded-lg shadow border">
                    <div>
                      <div className="doctor-img ">
                        <img className="img-fluid" src="../../images/doctor.jpg"/>
                      </div>
                    </div>
                    <div className="border-bottom">
                      <div className="doctor-info w-100 text-center py-3">
                        <span className="text-warning d-block mb-2">Professor</span>
                        <h4 className="text-black mb-2">DR. Julia Jhones</h4>
                        <div className="doctor-rating mb-2">
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
                        <div className="mb-3">
                          <span className="text-grey ">Specialized in :</span>
                          <Link className="general-a " to="/single-specialist" title="Single Specialist">
                            <span className="text-green h5 ml-1 general-a">Dentist</span>
                          </Link>
                        </div>
                        <ul className="list-inline">
                          <li className="list-inline-item btn-small-padding rounded bg-green text-white">854 Reviews</li>
                          <li className="list-inline-item btn-small-padding rounded bg-green text-white">124 Patients</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-bottom">
                      <div className="doctor-details w-100 col-md-12 py-3">
                          <ul class="list-unstyled">
                            <li className="text-grey mb-2">
                                <p className="text-black m-0">
                                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green fa-1x mr-3"/>Address:
                                </p>
                                <p className=" mb-0 ml-4">Heliopolis Elkhalifa elmamon</p>
                            </li>
                            <li className="text-grey mb-2">
                                <FontAwesomeIcon icon={faMoneyBillWave} className="text-green fa-1x mr-2" />
                                <span className="text-black">Fees: </span>300
                            </li>
                            <li className="text-grey mb-2">
                                <FontAwesomeIcon icon={faClock} className="text-green fa-1x mr-2"/>
                                <span className="text-black">Waiting Time: </span>44 minutes
                            </li>
                            <li className="text-grey mb-2">
                                <FontAwesomeIcon icon={faPhone} className="text-green fa-1x mr-2" rotation="90"/>
                                <span className="text-black">Phone: </span>166666
                            </li>
                          </ul>
                      </div>
                    </div>
                    <div className="row">
                    <div className="doctor-location-book w-100 text-center col-md-12 py-3">
                        <ul class="list-inline mb-4">
                          <li class="list-inline-item pr-md-4 border-right m-0">
                              <Link className="text-grey general-a" to="/" title="View Map">View Map</Link>
                          </li>
                          <li class="list-inline-item pr-md-4 pl-md-4 ">
                              <Link className="text-grey general-a" to='https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361'>Direction</Link>
                          </li>
                        </ul>
                        
                              <Link className="text-white btn-small-padding rounded border-green bg-green general-a" to="/appointment" title="Book Now">Book Now</Link>
                        
                    </div>
                  </div>
                  </div>
                </div>
                {/* End doctor info section    */}

                {/* Start tabs section    */}
                <div className="col-md-9 ">
                  <div className="shadow border rounded">

                    {/* start tabs item nav section    */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active text-green px-4 py-3" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General Info</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-green px-4 py-3" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Reviews & Rating</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-green px-4 py-3" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Book An Appointment</a>
                      </li>
                    </ul>
                    {/* End  tabs item nav section    */}

                    {/* Start All tabs content section    */}
                    <div className="tab-content" id="myTabContent">

                      {/* Start First tab content section    */} 
                      <div className="tab-pane fade show active bg-white px-4 py-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row  border-bottom">
                           <div className="col-md-1">
                              <FontAwesomeIcon icon={faUser} className="text-green fa-2x "/>
                           </div>
                           <div className="col-md-11">
                              <h3 className="mb-0">Professional statement</h3>
                              <small className="d-block mb-3 text-grey">Mussum ipsum cacilds, vidis litro abertis.</small>
                              <div class="wrapper_indent">
                                  <p className="text-grey">Professor of clinical oncology at faculty of medicine,
                                    Ain Shams University, Professor of clinical oncology at faculty of medicine,
                                    Ain Shams University,Professor of clinical oncology at faculty of medicine,
                                    Ain Shams University,Professor of clinical oncology at faculty of medicine,
                                    Ain Shams University.
                                  </p>
                                  <h6 className="font-weight-bold">Specializations</h6>
                                  <div class="row">
                                    <div class="col-lg-6">
                                      <ul class="bullets">
                                        <li>Abdominal Radiology</li>
                                        <li>Addiction Psychiatry</li>
                                        <li>Adolescent Medicine</li>
                                        <li>Cardiothoracic Radiology </li>
                                      </ul>
                                    </div>
                                    <div class="col-lg-6">
                                      <ul class="bullets">
                                        <li>Abdominal Radiology</li>
                                        <li>Addiction Psychiatry</li>
                                        <li>Adolescent Medicine</li>
                                        <li>Cardiothoracic Radiology </li>
                                      </ul>
                                    </div>
                                  </div>
                              </div>
                           </div>
                        </div>
                        <div className="row  pt-4">
                           <div className="col-md-1">
                              <FontAwesomeIcon icon={faNewspaper} className="text-green fa-2x "/>
                           </div>
                           <div className="col-md-11">
                              <h3 className="mb-0">Education</h3>
                              <small className="d-block mb-3 text-grey">Mussum ipsum cacilds, vidis litro abertis.</small>
                              <div class="wrapper_indent">
                                  <p className="text-grey">
                                     Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                                     dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque 
                                     aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.
                                  </p>
                                  <h6 className="font-weight-bold">Curriculum</h6>
                                  <ul class="bullets">
                                      <li className="text-black">New York Medical College - <span className="text-grey">Doctor of Medicine</span></li>
                                      <li className="text-black">Montefiore Medical Center - <span className="text-grey">Residency in Internal Medicine</span></li>
                                      <li className="text-black">New York Medical College - <span className="text-grey">Master Internal Medicine</span></li>
                                  </ul>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-1"></div>
                           <div className="col-md-11"></div>
                        </div>
                      </div>
                      {/* End First tab content section    */} 

                      {/* Start second tab content section    */} 
                      <div className="tab-pane fade bg-white px-4 py-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row border-bottom">
                          <div className="col-md-12">


                            {/* Hospital Reviews & Rating Start */}
                            <div className="">
                              <h4 className="text-black border-bottom pb-3 mb-3" style={{fontSize: "20px"}}>
                                <FontAwesomeIcon icon={faStar} className="text-green mr-2"/>
                                Reviews & Rating
                              </h4>
                              <div className="row border-bottom mb-3">
                                <div className="col-lg-2 col-md-2 pr-0">
                                  <img src="../../images/testimonials-4.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                </div>
                                <div className="col-lg-10 col-md-10 pl-0">
                                  <h5 className="text-black mb-0">Bakhita alrawi</h5>
                                  <p className="text-grey mb-2">
                                    Date:
                                    <span className="text-green">15-3-2019</span>
                                  </p>
                                  <span>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-grey"/>
                                    <FontAwesomeIcon icon={faStar} className="text-grey"/>
                                  </span>
                                  <p className="text-grey">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                    layout.
                                  </p>
                                </div>
                              </div>
                            
                              <div className="row border-bottom mb-3">
                                <div className="col-lg-2 col-md-2 pr-0">
                                  <img src="../../images/testimonial_1.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                </div>
                                <div className="col-lg-10 col-md-10 pl-0">
                                  <h5 className="text-black mb-0">Rabie Elkheir</h5>
                                  <p className="text-grey mb-2">
                                    Date:
                                    <span className="text-green">15-2-2019</span>
                                  </p>
                                  <span>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-grey"/>
                                    <FontAwesomeIcon icon={faStar} className="text-grey"/>
                                  </span>
                                  <p className="text-grey">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                    layout.
                                  </p>
                                </div>
                              </div>
                            
                              <div className="row">
                                <div className="col-lg-2 col-md-2 pr-0">
                                  <img src="../../images/testimonials-3.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                </div>
                                <div className="col-lg-10 col-md-10 pl-0">
                                  <h5 className="text-black mb-0">Adel Alsaeed</h5>
                                  <p className="text-grey mb-2">
                                    Date:
                                    <span className="text-green">10-3-2019</span>
                                  </p>
                                  <span>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-warning"/>
                                    <FontAwesomeIcon icon={faStar} className="text-grey"/>
                                    <FontAwesomeIcon icon={faStar} className="text-grey"/>
                                  </span>
                                  <p className="text-grey">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                    layout.
                                  </p>
                                </div>
                              </div>
                            
                            </div>
                            {/* Hospital Reviews & Rating End */}

                            {/* Add Reviews Start */}
                            <div className="mt-2 p-4">
                                <AddReviewSingle/>
                            </div>
                            {/* Add Reviews End */}


                          </div>
                        </div>
                      </div>
                      {/* End second tab content section    */} 

                      {/* Start third tab content section    */} 
                      <div className="tab-pane fade bg-white px-4 py-4 " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row border-bottom">
                        
                          <div class="col-md-12"><div id="1" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#1" data-slide-to="0" class="bg-green rounded-circle"></li><li data-target="#1" data-slide-to="1" class="bg-green rounded-circle active"></li><li data-target="#1" data-slide-to="2" class="bg-green rounded-circle"></li></ol><div class="carousel-inner"><div class="carousel-item"><div class="row pl-3 pr-3"><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Today</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Tomorrow</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Monday</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div></div></div><div class="carousel-item active"><div class="row pl-3 pr-3"><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Today</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Tomorrow</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Monday</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div></div></div><div class="carousel-item"><div class="row pl-3 pr-3"><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Today</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Tomorrow</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div><div class="col-md-4 text-center rounded border"><div class="day-heading border-bottom row text-white bg-warning pt-1 pb-1"><p class="w-100 m-0">Monday</p></div><div class="day-body bg-white pt-3 pb-3"><a class="text-black d-block" href="/appointment"><small>03:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>04:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>05:00 pm</small></a><a class="text-black d-block" href="/appointment"><small>06:00 pm</small></a></div><a class=" bg-green text-white row d-block pt-1 pb-1" href="/appointment">Book</a></div></div></div></div></div>
                          </div>
                                                
                        </div>
                      </div>
                      {/* End third tab content section    */}   

                    </div>
                    {/* End  All tabs content section    */}

                  </div>  
                </div>
                {/* End tabs section    */}  

              </div>
           </div>
        </div> 

      </section>   
    );
  }
}

export default SingleDoctor;
