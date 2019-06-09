import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faSearch} from '@fortawesome/free-solid-svg-icons';

class FilterSinglePage extends Component {
    render() { 
        return( 
            <div>
                {/* Work Time Start */}
                <div style={{borderRadius: "10px", backgroundColor: "#22a98b"}}>
                    <h3 className="pt-3 px-2 text-white">
                        <FontAwesomeIcon icon={faClock} className="mr-2"/>
                        Work Time
                    </h3>
                    <div className="pb-2">
                        <table className="table text-white text-center">
                        <tr>
                            <td className="border-top-0" className="border-top-0">Monday</td>
                            <td className="border-top-0" className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        <tr className="bg-green">
                            <td className="border-top-0">Tuesday</td>
                            <td className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <td className="border-top-0">Wednesday</td>
                            <td className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        <tr className="bg-green">
                            <td className="border-top-0">Thursday</td>
                            <td className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <td className="border-top-0">Friday</td>
                            <td className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        <tr className="bg-green">
                            <td className="border-top-0">Saturday</td>
                            <td className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <td className="border-top-0">Sunday</td>
                            <td className="border-top-0">10:00 AM - 5:00 PM</td>
                        </tr>
                        </table>
                    </div>
                </div>
                {/* Work Time End */}

                {/* Filter Start */}
                <div className="bg-light mt-4 p-4 shadow" style={{borderRadius: "10px"}}>
                    <h3 className="text-black">
                        <FontAwesomeIcon icon={faSearch} className="mr-2 text-green"/>
                        Search
                    </h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" placeholder="keywords.."/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control contact-form" placeholder="All Regions"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control contact-form">
                                <option>Select Services</option>
                                <option>Hospital</option>
                                <option>Lab Scan</option>
                                <option>Blood Bank</option>
                                <option>Doctor</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control contact-form">
                                <option>Select Specialists</option>
                                <option>Dentist</option>
                                <option>Pediatrician</option>
                                <option>Neurologist</option>
                                <option>Gynecologist</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-green text-white form-control">Search Now</button>
                        </div>
                    </form>
                </div>
                {/* Filter End */}
          </div>
        );
    }
}
 
export default FilterSinglePage;