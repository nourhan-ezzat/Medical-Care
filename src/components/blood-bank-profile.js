import React, {Component} from 'react';

import '../css/patient-profile.css';
import '../css/contact.css';

class BloodBankProfile extends Component {
    render() { 
        return (

            <div className="container">
                <div className="row my-5">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills border" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{borderRadius: ".25rem"}}>
                            <a className="nav-link active profile-nav" id="v-pills-appointments-tab" data-toggle="pill" href="#v-pills-appointments" role="tab" aria-controls="v-pills-appointments" aria-selected="true">
                                My Appointments blood
                            </a>
                            <a className="nav-link profile-nav" id="v-pills-edit-profile-tab" data-toggle="pill" href="#v-pills-edit-profile" role="tab" aria-controls="v-pills-edit-profile" aria-selected="false">
                                Edit Profile
                            </a>
                            <a className="nav-link profile-nav" id="v-pills-info-tab" data-toggle="pill" href="#v-pills-info" role="tab" aria-controls="v-pills-info" aria-selected="false">
                                My Information
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
                                <table className="table table-bordered text-black text-center">
                                    <tr>
                                        <th>Service Category</th>
                                        <th>Service Name</th>
                                        <th>Day</th>
                                        <th>Time</th>
                                        <th>Examination Fees</th>
                                        <th>Edit</th>
                                        <th>Cancel</th>
                                    </tr>
                                    <tr>
                                        <td>Hospital</td>
                                        <td>Hospital One</td>
                                        <td>12/5/2019</td>
                                        <td>12:00 PM</td>
                                        <td>200 EGP</td>
                                        <td><button className="btn btn-green text-white">Edit</button></td>
                                        <td><button className="btn btn-green text-white">Cancel</button></td>
                                    </tr>
                                    <tr>
                                        <td>Lab Scan</td>
                                        <td>Lab One</td>
                                        <td>12/6/2019</td>
                                        <td>11:00 PM</td>
                                        <td>150 EGP</td>
                                        <td><button className="btn btn-green text-white">Edit</button></td>
                                        <td><button className="btn btn-green text-white">Cancel</button></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="tab-pane  px-2" id="v-pills-edit-profile" role="tabpanel" aria-labelledby="v-pills-edit-profile-tab">
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
                            <div className="tab-pane fade px-2" id="v-pills-info" role="tabpanel" aria-labelledby="v-pills-info-tab">
                                <form>
                                    <div className="form-group">
                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-3">
                                                <label className="text-black d-block">Username</label>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <input type="text" className="form-control contact-form" value="Nourty"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-3">
                                                <label className="text-black">Full Name</label>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <input type="text" className="form-control contact-form" value="Nourhan Mohamed"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-3">
                                                <label className="text-black">Phone</label>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <input type="text" className="form-control contact-form" value="01152626567"/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-3">
                                                <label className="text-black">Address</label>
                                            </div>
                                            <div className="col-lg-9 col-md-9">
                                                <input type="text" className="form-control contact-form" value="Haram, Giza"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
 
export default BloodBankProfile;