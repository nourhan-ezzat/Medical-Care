import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../css/header.css';
import '../css/contact.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar,  faBuilding,  faMap, faPhone, faBookmark, faHeart, faFlask } from '@fortawesome/free-solid-svg-icons';

import Breadcrumb from './breadcrumb';
import FilterSinglePage from './filter-single-service';
import AddReviewSingle from './add-review-single';

class SingleLabScan extends Component {
    render() { 
        return ( 
          <section >
            <Breadcrumb/> 
            <div className="container">
              <h1 className="pt-4 text-black mb-0">Lab Scan One</h1>
              <p className="text-grey pb-4 mb-0">
                <FontAwesomeIcon icon={faPhone} className="text-green mr-1" rotation="90"/>
                1666666
              </p>
              <div className="row mt-3">
                {/* Lab Scan Info Start */}
                <div className="col-lg-8 col-md-8 pl-0 mb-4">
                  {/* Lab Scan Main Info Start */}
                  <div className="shadow">
                    <img src="../../images/counter_bg.jpg" className="img-fluid"/>
                      <div className="bg-white p-3 d-flex justify-content-between">
                        <span>
                          <FontAwesomeIcon icon={faMap} className="text-grey"/>
                          <span className="text-grey ml-1">Cairo</span>
                        </span>
                        <span>
                        <FontAwesomeIcon icon={faStar} className="text-warning"/>
                        <FontAwesomeIcon icon={faStar} className="text-warning"/>
                        <FontAwesomeIcon icon={faStar} className="text-warning"/>
                        <FontAwesomeIcon icon={faStar} className="text-grey"/>
                        <FontAwesomeIcon icon={faStar} className="text-grey"/>
                        <span className="text-grey ml-2">(145)</span>
                      </span>
                      <span style={{color: "#C0CA33"}}>
                        <FontAwesomeIcon icon={faBookmark}/>
                        <span className="ml-1">Open Now!</span>
                      </span>
                      <span style={{color: "#E91E63"}}>
                        <FontAwesomeIcon icon={faHeart}/>
                        <span className="ml-1">Save</span>
                      </span>
                      <span style={{color: "#2196F3"}}>
                        <FontAwesomeIcon icon={faFlask}/>
                        <span className="ml-1">Lab Scan</span>
                      </span>
                      </div>
                  </div>
                  {/* Lab Scan Main Info End */}

                  {/* Lab Scan Desc Start */}
                  <div className="shadow bg-white mt-4 p-4">
                    <h4 className="text-black border-bottom pb-3" style={{fontSize: "20px"}}>
                      <FontAwesomeIcon icon={faFlask} className="text-green mr-2"/>
                      About Lab Scan
                    </h4>
                    <p className="text-grey">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book. It has survived not only five centuries, but also the leap into 
                      electronic typesetting, remaining essentially unchanged. It was popularised in 
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                      and more recently with desktop publishing software like Aldus PageMaker including 
                      versions of Lorem Ipsum
                    </p>
                  </div>
                  {/* Lab Scan Desc End */}

                  {/* Lab Scan Departments Start */}
                  <div className="shadow bg-white mt-4 p-4">
                    <h4 className="text-black border-bottom pb-3" style={{fontSize: "20px"}}>
                      <FontAwesomeIcon icon={faBuilding} className="text-green mr-2"/>
                      Lab Scan Departments
                    </h4>
                    <Link to="/single-specialist" title="Single Specialist" className="text-decoration-none">
                      <span className="text-green h5 ml-1">Dentist .. </span>
                    </Link>
                    <Link to="/single-specialist" title="Single Specialist" className="text-decoration-none">
                      <span className="text-green h5 ml-1">Psychiatrist .. </span>
                    </Link>
                    <Link to="/single-specialist" title="Single Specialist" className="text-decoration-none">
                      <span className="text-green h5 ml-1">Cardiologist</span>
                    </Link>
                  </div>
                  {/* Lab Scan Departments Start */}
                  
                  {/* Lab Scan Location Start */}
                  <div className="shadow bg-white mt-4 p-4">
                    <h4 className="text-black border-bottom pb-3" style={{fontSize: "20px"}}>
                      <FontAwesomeIcon icon={faMap} className="text-green mr-2"/>
                      Lab Scan Location
                    </h4>
                    <p className="text-grey">
                      Google Map
                    </p>
                  </div>
                  {/* Lab Scan Location End */}

                  {/* Lab Scan Reviews & Rating Start */}
                  <div className="shadow bg-white mt-4 p-4">
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
                  {/* Lab Scan Reviews & Rating End */}

                  {/* Add Reviews Start */}
                  <div className="shadow bg-white mt-4 p-4">
                      <AddReviewSingle/>
                  </div>
                  {/* Add Reviews End */}
                </div>
                {/* Lab Scan Info End */}
                
                {/* Lab Scan Filter Start */}
                <div className="col-lg-4 col-md-4">
                  <FilterSinglePage/>
                </div>
                {/* Lab Scan Filter End */}
              </div>
            </div>    
          </section>  
        );
    }
}
 
export default SingleLabScan;