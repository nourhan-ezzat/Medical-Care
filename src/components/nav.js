import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import '../css/header.css';
import '../css/nav.css';

class Nav extends Component {

    componentDidMount(){
        $(function () {
            $(document).scroll(function () {
            var $nav = $(".sticky-top");
            $nav.toggleClass('scrolled-nav-background shadow', $(this).scrollTop() > $nav.height());
            });
        });        
    }
    
    render() { 
        return (
            <div className="sticky-top" style={{backgroundColor: "#cac8c878"}}>
                <div className="container">
                    <div className="d-flex flex-row justify-content-between py-2">
                        {/* Logo Start */}
                        <div>
                            <img src="../../images/footer_logo.png"/>
                        </div>
                        {/* Logo End */}
                        
                        {/* Nav Start */}
                        <div className="align-self-center">
                            <nav className="navbar navbar-expand-lg px-0">
                                <button className="navbar-toggler btn-green" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <FontAwesomeIcon icon={faBars} className="navbar-toggler-icon text-white"/>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active mx-1">
                                            <Link className="nav-link pl-0 font-weight-bold text-green general-a mb-0" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item mx-1">
                                            <Link className="nav-link font-weight-bold text-green general-a mb-0" to="/services/all-hospitals">Hospitals</Link>
                                        </li>
                                        <li className="nav-item mx-1">
                                            <Link className="nav-link font-weight-bold text-green general-a mb-0" to="/services/all-lab-scans">Lab Scans</Link>
                                        </li>
                                        <li className="nav-item mx-1">
                                            <Link className="nav-link font-weight-bold text-green general-a mb-0" to="/services/all-blood-banks">Blood Banks</Link>
                                        </li>
                                        <li className="nav-item mx-1">
                                            <Link className="nav-link font-weight-bold text-green general-a mb-0" to="/services/all-doctors">Doctors</Link>
                                        </li>
                                        <li className="nav-item mx-1">
                                            <Link className="nav-link font-weight-bold text-green general-a mb-0" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item ml-1">
                                            <Link className="nav-link font-weight-bold text-green general-a mb-0" to="/contact">Contact</Link>
                                        </li>
                                    </ul>   
                                </div>
                            </nav>
                        </div>
                        {/* Nav End */}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Nav;