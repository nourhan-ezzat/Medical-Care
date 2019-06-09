import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faBicycle, faPhone, faEnvelope, faCaretRight} from '@fortawesome/free-solid-svg-icons';
 import {faFacebookF,faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-black">
        <footer className="container p-5">

          <div className="row mb-4">
            <div className="col-lg-4 col-md-6"> {/* About us */}
                <Link className="d-block mb-4" to="/">   {/* footer logo */}
                  <img className="img-fluid  mb-2" src="../../images/footer_logo.png"/>
                </Link>
                <div className="about mb-4"> {/* footer about us text*/}
                  <p className=" text-capitalize text-grey " >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="have-question text-white mb-4"> {/* footer have question */}
                  <h4 className="text-capitalize text-white mb-3">Have a Questions?</h4> 
                  <div className="row"><span className="col-md-2"><FontAwesomeIcon icon={faPhone} className="text-white" rotation="90"/></span> <p className="col-md-10">+2 392 3929 210</p></div>
                  <div className="row"><span className="col-md-2"><FontAwesomeIcon icon={faEnvelope} className="text-white "/></span> <p className="col-md-10">	info@yourdomain.com</p></div>
                </div>
                <div className="social-media "> {/* footer social media icons*/}
                  <ul class="list-inline">
                    <li class="list-inline-item mr-md-5"><Link className="text-green" to="/"><FontAwesomeIcon icon={faTwitter} className=" fa-2x"/></Link></li>
                    <li class="list-inline-item mr-md-5"><Link className="text-green" to="/"><FontAwesomeIcon icon={faFacebookF} className=" fa-2x"/></Link></li>
                    <li class="list-inline-item"><Link className="text-green" to="/"><FontAwesomeIcon icon={faInstagram} className=" fa-2x"/></Link></li>
                  </ul>

                </div>
            </div>

            <div className="col-lg-4 col-md-6 pt-2"> {/* specializations useful links*/}
                <div className="footer-heading  mb-4">
                  <h4 className="text-capitalize text-white">Specialists</h4>
                  <img className="img-fluid" src="../../images/line.png"/>
                </div>       
                <div className="row">
                  <ul class="list-unstyled col-sm-6">
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Dermatologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Dermatologist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Dentist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Dentist </Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Psychiatrist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Psychiatrist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Pediatrician"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Pediatrician</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Neurologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Neurologist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Orthopedist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Orthopedist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Gynecologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Gynecologist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Ent Doctor"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Ent Doctor</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Cardiologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Cardiologist</Link></li>
                  </ul>
                  <ul class="list-unstyled col-sm-6">
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Dermatologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Dermatologist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Dentist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Dentist </Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Psychiatrist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Psychiatrist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Pediatrician"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Pediatrician</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Neurologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Neurologist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Orthopedist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Orthopedist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Gynecologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Gynecologist</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Ent Doctor"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Ent Doctor</Link></li>
                      <li ><Link className="text-grey general-a" to="/single-specialist" title="Cardiologist"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Cardiologist</Link></li>
                  </ul>
                </div>
            </div>     

            <div className="col-lg-2 col-sm-6 pt-2"> {/* Areas*/}
              <div className="footer-heading  mb-4">
                  <h4 className="text-capitalize text-white">Areas</h4>
                  <img className="img-fluid" src="../../images/line.png"/>
              </div> 
              <ul class=" p-0 list-unstyled">
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in Heliopolis"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Heliopolis</Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in Nasr City"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Nasr City</Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in El-Maadi"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>El-Maadi </Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in New Cairo"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>New Cairo </Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in Hadayek El-Kobba"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Hadayek El-Kobba</Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in El-Obour City"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>El-Obour City</Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in El-Manyal"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>El-Manyal</Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in Shoubra"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Shoubra</Link></li>
                  <li ><Link className="text-grey general-a" to="/" title="The Best Doctors in West El-Balad"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>West El-Balad</Link></li>
              </ul>
            </div>       

            <div className="col-lg-2 col-sm-6 pt-2"> {/* Medical-care useful links*/}
              <div className="footer-heading  mb-4">
                  <h4 className="text-capitalize text-white">Medical care</h4>
                  <img className="img-fluid" src="../../images/line.png"/>
              </div>
              <ul class=" p-0 list-unstyled">
                  <li ><Link className="text-grey general-a" to="/about" title="About medical care"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>About us</Link></li>
                  <li ><Link className="text-grey general-a" to="/services/all-hospitals" title="All hospitals"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Hospitals </Link></li>
                  <li ><Link className="text-grey general-a" to="/services/all-lab-scans" title="All Labs"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Lab & Scan</Link></li>
                  <li ><Link className="text-grey general-a" to="/services/all-blood-banks" title="Blood Bank"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Blood Bank</Link></li>
                  <li ><Link className="text-grey general-a" to="/services/all-doctors" title="Blood Bank"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>All doctors</Link></li>
                  <li ><Link className="text-grey general-a" to="/contact" title="Contact with us"><FontAwesomeIcon icon={faCaretRight} className="text-green fa-1x mr-2"/>Contact us</Link></li>
              </ul>
            </div>
          </div>

          <div className="copyright row  text-center text-white"> {/*Footer copyright*/}
             <div className="col-md-12" style={{fontSize:17}}>
                <p className="m-0" >Copyright © 2019 All Rights Reserved |  <Link className="text-green general-a" to="/">Medical Care</Link></p>
             </div>
          </div>

          
        </footer>
      </div> 
    );
  }
}

export default Footer;
