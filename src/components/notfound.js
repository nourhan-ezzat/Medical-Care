import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faHome} from '@fortawesome/free-solid-svg-icons';

class NotFound extends Component {

componentDidMount(){
  console.log(this.props.match.params.myparams);
}

  render() {
    return (
      <div className="container-fluid bg-light mb-4 ">
          <div className="row">
            <div className="col-md-12">
               <p className="text-warning text-center" style={{fontSize:20}}>{this.props.match.params.myparams} 404 notfound </p>
            </div>
          </div>
           
          {/* <FontAwesomeIcon icon={faHome}/> */}
        
      </div> 
    );
  }
}

export default NotFound;
