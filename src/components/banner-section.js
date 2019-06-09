import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class BannerSection extends Component {
    componentDidMount(){
        var cairo = [
                        {display: "Nasr City", value: "nasr-city"},
                        {display: "New Cairo", value: "new-cairo"}
                    ]
        var giza = [
                        {display: "Dokki", value: "dokki"},
                        {display: "Haram", value: "haram"}
                   ]
        var empty = [
                        {display: "Select Area", value: "select-area"}
                    ]
        $("#parent_selection").change(function() {
            var parent = $(this).val(); 
            switch(parent){
                case 'select-city':
                    list(empty);
                    break;
                case 'cairo':
                    list(cairo);
                    break;
                case 'giza':
                    list(giza);
                    break;
                default:
                    $("#child_selection").html("");	 
                    break;
            }
        });   
        function list (array_list) {
            $("#child_selection").html(""); 
            $(array_list).each(function (i) {
                $("#child_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
            });
        }                
    }
    render() { 
        return (
            <div>
                {/* Banner Start */}
                <div className="home-video position-relative" style={{width: "100%"}}>
                    <div className="container position-relative home-content">
                        <form className="text-center">
                            <h2 className="text-white mb-lg-4 text-capitalize">total health care solution</h2>
                            <div className="form-group">
                                <select className="form-control-lg mr-2 contact-form smallSelect">
                                    <option>Choose Speciality</option>
                                    <option>Dermatologist</option>
                                    <option>Orthopedist</option>
                                    <option>Scan Center</option>
                                    <option>Oncologist</option>
                                </select>
                                <select name="parent_selection" id="parent_selection" className="form-control-lg mr-2 contact-form smallSelect">
                                    <option value="select-city">Select City</option>
                                    <option value="cairo">Cairo</option>
                                    <option value="giza">Giza</option>
                                </select>
                                <select name="child_selection" id="child_selection" className="form-control-lg mr-2 contact-form smallSelect">
                                    <option value="select-area">Select Area</option>
                                </select>
                                <input type="search" className="form-control-lg mr-2 contact-form smallSelect" placeholder="Type Doctor Name"/>
                                <Link className="btn btn-green text-white" to="/services/all-doctors">Search</Link>
                            </div>
                        </form>
                        {/* start all services buttons */}
                        <div className="row mt-lg-4"> 
                            <ul class="list-inline d-block w-100 text-center text-white mb-md-0 ulSmall">
                                <li class="list-inline-item"><Link className="btn  btn-green text-white" to="/services/all-doctors">Doctors</Link></li>
                                <li class="list-inline-item"><Link className="btn  btn-green text-white" to="/services/all-hospitals">Hospitals</Link></li>
                                <li class="list-inline-item"><Link className="btn  btn-green text-white" to="/services/all-lab-scans">Lab scans</Link></li>
                                <li class="list-inline-item"><Link className="btn  btn-green text-white" to="/services/all-blood-banks">Blood Banks</Link></li>
                            </ul>
                        </div>
                        {/* End all services buttons */}
                    </div>
                    <video className="position-absolute backgorund-video w-100" autoPlay loop>
                        <source src="../../images/intro.mp4"/>
                    </video>
                </div>
                {/* Banner End */}
            </div>
        );
    }
}

export default BannerSection;