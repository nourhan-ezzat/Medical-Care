import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

import '../css/header.css';
import '../css/extra-small.css';
import '../css/small.css';
import '../css/medium.css';
import '../css/large.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { login, getprofile } from '../API/user';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    setStateField = (fieldName) => (e) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }
    handleLogin = e => {
        e.preventDefault();
        const{username, password} = this.state
        login({username, password})
        .then(res =>{
            if(res){
                localStorage.setItem("userToken", res.token);
                this.props.history.push('/home/patient-profile')
            }
            else{
                this.props.history.push('/')
            }
            console.log("done")
        })
        .catch(err => {})
    }
    render() { 
        const {username, password} = this.state
        return ( 
            <div className="bg-green py-2">
                <div className="container text-white">
                    {/* Header Start */}
                    <header className="d-flex flex-row justify-content-lg-between justify-content-around">
                        {/* Icons Start */}
                        <div className="divOne" style={{lineHeight: "40px"}}>
                            <ul className="list-unstyled nav flex-column flex-lg-row" style={{alignSelf: "end"}}>
                                <li className="nav-item pr-1 mr-3 mr-lg-1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="mr-1"/>
                                    Marmora Road, Glasgow
                                </li>
                                <li className="nav-item pr-1 pl-1 mr-3 mr-lg-1">
                                    <FontAwesomeIcon icon={faPhone} size="1x" className="mr-1" rotation="90"/>
                                    +222 123 3019
                                </li>
                                <li className="nav-item pl-1 mr-lg-1">
                                    <FontAwesomeIcon icon={faEnvelope} size="1x" className="mr-1"/>
                                    info@site-name.com
                                </li>
                            </ul>
                        </div>
                        {/* Icons End */}

                        <div className="d-flex flex-lg-row flex-column header-section align-self-center">
                            {/* Patient Sign in Start */}
                            <div className="mb-3 mr-lg-2 mb-lg-0">
                                <Link role="button" className="header-btn btn font-14 text-decoration-none font-weight-bold px-3 py-2" data-toggle="modal" data-target="#inModal">Sign in</Link>
                                <div className="modal fade" id="inModal" tabindex="-1" role="dialog" aria-labelledby="inModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title text-green" id="inModalLabel">Sign in</h5>
                                            </div>

                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control contact-form" id="username" placeholder="Username"
                                                        name="username" value={username} onChange={this.setStateField('username')}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" className="form-control contact-form" id="password" placeholder="Password"
                                                        name="password" value={password} onChange={this.setStateField('password')}/>
                                                    </div>
                                                    <Link className="text-decoration-none text-white btn-green btn" to="/home/patient-profile" onClick={this.handleLogin}>Sign in</Link>
                                                </form>
                                            </div>
                                            
                                            <div className="modal-footer">
                                                <button type="button" className="px-3 py-2 bg-green text-white border-0 model-btn rounded" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Patient Sign in End */}

                            {/* Sign up Start */}
                            <div className="mb-3 mr-lg-2 mb-lg-0">
                                <Link to="/sign-up" className="header-btn btn font-14 text-decoration-none font-weight-bold px-3 py-2">Sign Up</Link>
                            </div>
                            {/* Sign up End */}
                        </div>
                    </header>
                    {/* Header End */}
                </div>
            </div>
        );
    }
}
export default withRouter(Header);
