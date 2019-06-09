import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

import '../css/patient-profile.css';
import '../css/contact.css';

class HospitalProfile extends Component {
    // componentDidMount(){
    //     $('#data-table').DataTable();
    // }

    render() { 
        return (

            <div className="container">
                <div className="row my-5">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills border" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{borderRadius: ".25rem"}}>
                            <a className="nav-link active profile-nav" id="v-pills-appointments-tab" data-toggle="pill" href="#v-pills-appointments" role="tab" aria-controls="v-pills-appointments" aria-selected="true">
                                Patients' Appointments
                            </a>
                            <a className="nav-link profile-nav" id="v-pills-edit-profile-tab" data-toggle="pill" href="#v-pills-edit-profile" role="tab" aria-controls="v-pills-edit-profile" aria-selected="false">
                                Edit Profile
                            </a>
                            <a className="nav-link profile-nav" id="v-pills-scheduals-tab" data-toggle="pill" href="#v-pills-scheduals" role="tab" aria-controls="v-pills-scheduals" aria-selected="false">
                                Doctors' Schedual
                            </a>
                            <a className="nav-link profile-nav" id="v-pills-departments-tab" data-toggle="pill" href="#v-pills-departments" role="tab" aria-controls="v-pills-departments" aria-selected="false">
                                Departments
                            </a>
                            <a className="nav-link profile-nav" id="v-pills-out-tab" data-toggle="pill" href="#v-pills-out" role="tab" aria-controls="v-pills-out" aria-selected="false">
                                Log out
                            </a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content border" id="v-pills-tabContent" style={{borderRadius: ".25rem"}}>
                            <h6 className="text-white bg-green text-center py-2" style={{borderTopLeftRadius: ".25rem",borderTopRightRadius: ".25rem"}}>
                                Manage Profile
                            </h6>
                            <div className="tab-pane fade show active px-2" id="v-pills-appointments" role="tabpanel" aria-labelledby="v-pills-appointments-tab">
                                <div className="table-responsive">
                                    <table  id="data-table" className="table table-bordered text-black text-center">
                                        <tr>
                                            <th>Appointment ID</th>
                                            <th>Patient Name</th>
                                            <th>Age</th>
                                            <th>Doctor Name</th>
                                            <th>Department Name</th>
                                            <th>Appointment Date</th>
                                            <th>Appointment Time</th>
                                            <th>Edit</th>
                                            <th>Cancel</th>
                                        </tr>
                                        <tr>
                                            <td>APT001</td>
                                            <td>Nour</td>
                                            <td>25</td>
                                            <td>Ahmed Samy</td>
                                            <td>Cardiology</td>
                                            <td>19 May 2019</td>
                                            <td>11:00 am</td>
                                            <td>
                                                <Link className="btn btn-green text-white" to="/edit-appointment">Edit</Link>
                                            </td>
                                            <td>
                                                <Link className="btn btn-green text-white">Cancel</Link>
                                            </td>    
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane px-2" id="v-pills-edit-profile" role="tabpanel" aria-labelledby="v-pills-edit-profile-tab">
                                <form>
                                    <div className="form-group">
                                        <div className="row mb-3">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" className="form-control contact-form" placeholder="Username"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" className="form-control contact-form" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" className="form-control contact-form" placeholder="Full Name"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" className="form-control contact-form" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <input type="text" className="form-control contact-form" placeholder="Address"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane px-2" id="v-pills-scheduals" role="tabpanel" aria-labelledby="v-pills-scheduals-tab">
                                <div className="table-responsive">
                                    <table className="table table-bordered text-black text-center">
                                        <tr>
                                            <th>Doctor Phote</th>
                                            <th>Doctor Name</th>
                                            <th>Department Name</th>
                                            <th>Available Days</th>
                                            <th>Available Time</th>
                                            <th>Edit</th>
                                            <th>Cancel</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="../images/doctor-thumb-03.jpg" class="rounded-circle"/>
                                            </td>
                                            <td className="align-middle">Nourhan</td>
                                            <td className="align-middle">Cardiology</td>
                                            <td className="align-middle">Sunday, Monday</td>
                                            <td className="align-middle">11:00 am</td>
                                            <td className="align-middle">
                                                <Link className="btn btn-green text-white" to="/edit-appointment">Edit</Link>
                                            </td>
                                            <td className="align-middle">
                                                <Link className="btn btn-green text-white">Cancel</Link>
                                            </td>    
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade px-2" id="v-pills-departments" role="tabpanel" aria-labelledby="v-pills-departments-tab">
                                <div className="table-responsive">
                                    <table className="table table-bordered text-black text-center">
                                        <tr>
                                            <th>#</th>
                                            <th>Department Name</th>
                                            <th>Edit</th>
                                            <th>Cancel</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Cardiology</td>
                                            <td>
                                                <Link className="btn btn-green text-white" to="/edit-appointment">Edit</Link>
                                            </td>
                                            <td>
                                                <Link className="btn btn-green text-white">Cancel</Link>
                                            </td>    
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade px-2 py-2 text-center" id="v-pills-out" role="tabpanel" aria-labelledby="v-pills-out-tab">
                                <button className="btn btn-green text-white">Log out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
 
export default HospitalProfile;