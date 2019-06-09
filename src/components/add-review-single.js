import React, {Component} from 'react';

import '../css/contact.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class AddReviewSingle extends Component {
    render() { 
        return ( 
            <div>
                <h4 className="text-black border-bottom pb-3 mb-3" style={{fontSize: "20px"}}>
                    <FontAwesomeIcon icon={faStar} className="text-green mr-2"/>
                    Add Reviews
                </h4>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <input type="text" className="form-control contact-form" placeholder="Full Name"/>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <input type="text" className="form-control contact-form" placeholder="Email"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control contact-form" placeholder="Comment" row="6"></textarea>
                    </div>
                    <button className="form-control btn btn-green text-white">Add Now!</button>
                </form>
            </div>
         );
    }
}
 
export default AddReviewSingle;