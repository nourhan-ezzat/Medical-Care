import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
import $ from 'jquery';

class Filtertion extends Component {

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
    return (
<div className=" col-lg-2 col-sm-12 filteration-section  text-center">{/*Start filteration section */}
              
                <div className="day-heading border-bottom row text-white bg-warning pt-2 pb-2">
                  <h5 className="w-100 m-0">Filter</h5>
                </div>
                <div className="day-body row pb-3 bg-white  rounded border shadow">
                  <div class="accordion w-100" id="accordionExample">
                    <div class="card border-top-0 border-bottom">
                      <div class="card-header p-0" id="headingOne"> 
                          <Link class="d-block text-green p-3 general-a"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Title
                          </Link> 
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                           <ul class="list-unstyled " id="filters">
                              <li className="text-grey row"> 
                                <input className=" col-md-3  mt-1" type="checkbox" name="professor" value="professor" id="professor" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Professor</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" name="lecturer" value="lecturer" id="lecturer" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Lecturer</span> 
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" name="consultant" value="consultant" id="consultant" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Consultant</span> 
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" name="specialist" value="specialist" id="specialist" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Specialist</span>
                              </li>
                           </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card border-top-0 border-bottom">
                      <div class="card-header p-0" id="headingTwo">
                          <Link class="d-block text-green p-3 collapsed general-a"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Gender
                          </Link>       
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                           <ul class="list-unstyled">
                              <li className="text-grey row">
                                <input className=" col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Female</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Male</span> 
                              </li>
                           </ul>
                        </div>
                      </div>
                    </div>

                    <div class="card border-top-0 border-bottom">
                      <div class="card-header p-0" id="headingThree">
                        
                          <Link class="d-block text-green p-3 collapsed general-a"  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Availability
                          </Link>
                        
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                           <ul class="list-unstyled">
                              <li className="text-grey row">
                                <input className=" col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Today</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Tomorrow</span> 
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Any day</span> 
                              </li>
                           </ul>
                        </div>
                      </div>
                    </div>

                    <div class="card border-top-0 border-bottom">
                      <div class="card-header p-0" id="headingFour">
                        
                          <Link class="d-block text-green p-3 collapsed general-a"  data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Speciality
                          </Link>
                        
                      </div>
                      <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                           <ul class="list-unstyled">
                              <li className="text-grey row">
                                <input className=" col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Dermatologist</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Dentist</span> 
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/>
                                <span className="col-md-9 text-left">Psychiatrist</span> 
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Ent Doctor</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Orthopedist</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Gynecologist</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Neurologist</span>
                              </li>
                              <li className="text-grey row">
                                <input className="col-md-3  mt-1" type="checkbox" id="myCheck" onclick="myFunction()"/> 
                                <span className="col-md-9 text-left">Cardiologist</span>
                              </li>
                           </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
        
 </div>/*End filteration section */
 
    );
  }
}

export default Filtertion;
