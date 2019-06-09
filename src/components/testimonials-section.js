import React, { Component } from 'react';

class ServicesSection extends Component {
    render() { 
        return (
            <div>
                
                {/* Testimonials Start */}
                <div className="testimonials position-relative py-5">
                    <div className="testi-overlay position-absolute"></div>
                    <div className="container position-relative" style={{zIndex: 3}}>
                        <div className="text-center">
                          <h3 className="text-black font-weight-bold">WHAT PATIENTS SAY</h3>
                          <img  class="img-fluid mb-2" src="../images/line-heading.png" alt="line heading"/>
                        </div> 
                        <div id="carouselExampleIndicator" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators" style={{top:"100%", paddingBottom: "100px"}}>
                                <li data-target="#carouselExampleIndicator" data-slide-to="0" className="active bg-dark" style={{width: "10px",height: "10px",borderRadius: "100%"}}></li>
                                <li data-target="#carouselExampleIndicator" data-slide-to="1" className="bg-dark" style={{width: "10px",height: "10px",borderRadius: "100%"}}></li>
                            </ol>                                
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 text-white font-weight-bold">
                                            <div className="con-profile d-flex flex-row justify-content-start">
                                                <img src="images/testimonials-4.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                                <div className="con-info">
                                                    <h4 style={{lineHeight: "70px"}}>AMBER MILLER</h4>
                                                </div>
                                            </div>
                                            <p className="font-italic">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-6 text-white font-weight-bold">
                                            <div className="con-profile d-flex flex-row justify-content-start">
                                                <img src="images/testiminial_2.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                                <div className="con-info">
                                                    <h4 style={{lineHeight: "70px"}}>AMBER MILLER</h4>
                                                </div>
                                            </div> 
                                            <p className="font-italic">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 text-white font-weight-bold">
                                            <div className="con-profile d-flex flex-row justify-content-start">
                                                <img src="images/testimonial_1.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                                <div className="con-info">
                                                    <h4 style={{lineHeight: "70px"}}>AMBER MILLER</h4>
                                                </div>
                                            </div>
                                            <p className="font-italic">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-6 text-white font-weight-bold">
                                            <div className="con-profile d-flex flex-row justify-content-start">
                                                <img src="images/testimonials-3.jpg" className="mr-3 rounded-circle" style={{width: "70px",height: "70px"}}/>
                                                <div className="con-info">
                                                    <h4 style={{lineHeight: "70px"}}>AMBER MILLER</h4>
                                                </div>
                                            </div>
                                            <p className="font-italic">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonials End */}
            </div>
        );
    }
}

export default ServicesSection;