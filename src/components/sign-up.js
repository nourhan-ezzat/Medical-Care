import React, { Component } from 'react';
import $ from 'jquery';

import '../css/contact.css';

import Breadcrumb from './breadcrumb';

class SignUp extends Component {
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
        $("#city_selection").change(function() {
            var city = $(this).val(); 
            switch(city){
                case 'select-city':
                    cityList(empty);
                    break;
                case 'cairo':
                    cityList(cairo);
                    break;
                case 'giza':
                    cityList(giza);
                    break;
                default:
                    $("#area_selection").html("");	 
                    break;
            }
        });   
        function cityList (array_list) {
            $("#area_selection").html(""); 
            $(array_list).each(function (i) {
                $("#area_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
            });
        }      
        
        var vendors = [
                        {display: "Hospital", value: "hospital"},
                        {display: "Lab Scan", value: "lab-scan"},
                        {display: "Blood Bank", value: "blood-bank"}
                      ]
        $("#user_selection").change(function() {
            var vendor = $(this).val(); 
            switch(vendor){
                case 'vendor':
                    $("#vendor_selection").show();
                    userList(vendors);
                    break;
                case 'select-user':
                case 'patient':
                case 'doctor':
                    $("#vendor_selection").hide();
                    break;
                default:
                    $("#vendor_selection").html("");	 
                    break;
            }
        });   
        function userList (array_list) {
            $("#vendor_selection").html(""); 
            $(array_list).each(function (i) {
                $("#vendor_selection").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
            });
        }
    }
    render() { 
        return ( 
            <section>
                <Breadcrumb/> 
                <div className="container my-5">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" id="username" placeholder="Username"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="password" className="form-control contact-form" id="password" placeholder="Password"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" id="fullName" placeholder="Full Name"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="number" className="form-control contact-form" id="age" placeholder="Age"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" id="gender" placeholder="Gender"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" id="phone" placeholder="Phone"/>
                        </div>
                        
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" id="address" placeholder="Address"/>
                        </div>
                        
                        <div className="form-group">
                            <select name="city_selection" id="city_selection" className="form-control contact-form">
                                <option value="select-city">Select City</option>
                                <option value="cairo">Cairo</option>
                                <option value="giza">Giza</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select name="area_selection" id="area_selection" className="form-control contact-form">
                                <option value="select-area">Select Area</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select name="user_selection" id="user_selection" className="form-control contact-form">
                                <option value="select-user">Select User</option>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                                <option value="vendor">Vendor</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select name="vendor_selection" id="vendor_selection" className="form-control contact-form" style={{display: "none"}}>
                                <option value="select-vendor">Select Vendor</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-green text-white">Sign up</button>                                  
                    </form>
                </div>
            </section>    
         );
    }
}
 
export default SignUp;