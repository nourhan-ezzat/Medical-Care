import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserMd, faHeartbeat, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../css/about.css';
import Breadcrumb from './breadcrumb';

class About extends Component {

  componentDidMount() {
    // Jquery here $(...)...
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 9000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  }

  render() {
    return (
      <section>
        <Breadcrumb/>
        <div className="about-page mb-4 mt-4">
        <div className="container mb-5">

          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h3 className="text-black text-capitalize font-weight-bold">WE GIVE YOU THE BEST</h3>
              <img  class="img-fluid mb-2" src="../images/line-heading.png" alt="line heading"/>
              <p className="text-grey w-75 m-auto">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                          <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active bg-green rounded-circle"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="bg-green rounded-circle"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" class="bg-green rounded-circle"></li>
                          </ol>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img class="d-block  img-fluid" src="../images/about1.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                              <img class="d-block  img-fluid" src="../images/about2.jpg" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                              <img class="d-block w-100" src="../images/about3.jpg" alt="Third slide"/>
                            </div>
                          </div>
                        </div>
            </div>

            <div className="col-md-6">
              <div id="accordion">
                <div class="card border-0  mb-3">
                  <div class="card-header p-0 border-0" id="headingOne">
                      <Link to="#" class=" d-block text-left  font-weight-bold p-3 " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         Medical Consulting
                      </Link>
                  </div>

                  <div id="collapseOne" class="collapse show border-top-0" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body row">

                      {/* <div className="col-md-4">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                          <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active bg-info rounded-circle"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="bg-info rounded-circle"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" class="bg-info rounded-circle"></li>
                          </ol>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img class="d-block  img-fluid" src="./images/about1.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                              <img class="d-block  img-fluid" src="./images/about2.jpg" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                              <img class="d-block w-100" src="./images/about3.jpg" alt="Third slide"/>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-md-12 text-grey">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>

                    </div>
                  </div>
                </div>
                <div class="card border-0  mb-3">
                  <div class="card-header border-0 p-0" id="headingTwo">
                    
                      <Link to="#" class=" d-block text-left collapsed  font-weight-bold p-3" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         Laboratory Analysis
                      </Link>
                    
                  </div>
                  <div id="collapseTwo" class="collapse border-top-0" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body row">

                      <div className="col-md-12 text-grey">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card border-0">
                  <div class="card-header border-0 p-0" id="headingThree">
                    
                      <Link to="#" class=" d-block text-left collapsed  font-weight-bold p-3" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Diagnostic Clinic
                      </Link>
                    
                  </div>
                  <div id="collapseThree" class="collapse border-top-0" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body row">
                      
                      <div className="col-md-12 text-grey">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>{/* End tab & slider container section */}

        {/* counter section */}
        <div className="container-fluid  counter_section px-0">
          <div className="counter_overlay pt-5 pb-5">
            <div className="container">
               <div className="row">

                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center " >
                    <div className="icon p-4 bg-white w-50 m-auto border-green"><FontAwesomeIcon icon={faUsers} className="text-green fa-2x mr-2"/></div>
                    <h1 className="mt-3 font-weight-bold text-black count">200</h1>
                    <h5 className="text-black">Satisfied Patients</h5>
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
                    <div className="icon p-4 bg-white w-50 m-auto border-green"><FontAwesomeIcon icon={faUserMd} className="text-green fa-2x mr-2"/></div>
                    <h1 className="mt-3 font-weight-bold text-black count">350</h1>
                    <h5 className="text-black">Doctor's Team</h5>                 
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center" >
                    <div className="icon p-4 bg-white w-50 m-auto border-green"><FontAwesomeIcon icon={faCheckCircle} className="text-green fa-2x mr-2"/></div>
                    <h1 className="mt-3 font-weight-bold text-black count">1305</h1>
                    <h5 className="text-black">Success Mission</h5>  
                 </div>
                 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center">
                    <div className="icon p-4 bg-white w-50 m-auto border-green"><FontAwesomeIcon icon={faHeartbeat} className="text-green fa-2x mr-2"/></div>
                    <h1 className="mt-3 font-weight-bold text-black count">1540</h1>
                    <h5 className="text-black">Successfull Surgeries</h5>     
                 </div>

               </div> 
            </div>
          </div>  
        </div> {/* End counter section */}

      </div>
      </section>
       
    );
  }
}

export default About;
