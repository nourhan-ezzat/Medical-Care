import React, {Component} from 'react';

import '../css/contact.css';

import Breadcrumb from './breadcrumb';

class EditAppointment extends Component {
    render() { 
        return ( 
            <section>
                <Breadcrumb/>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <input type="date" className="form-control contact-form"/>
                        </div>
                        <div className="form-group">
                            <input type="time" className="form-control contact-form"/>
                        </div>
                    </form>
                </div>
            </section>
         );
    }
}
 
export default EditAppointment;