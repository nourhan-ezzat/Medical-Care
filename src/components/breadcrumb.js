import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
import $ from 'jquery';

class Breadcrumb extends Component {

// componentDidMount(){

//   $('.navbar-nav a').on('click', function() {
//     var $this = $(this),
//         $bc = $('<li className="list-inline-item item"></li>');
  
//     $this.parents('li').each(function(n, li) {
//         var $a = $(li).children('a').clone();
//         $bc.prepend(' / ', $a);
//     });
//       $('.breadcrumb-list').html( $bc.prepend('<a href="#home">Home</a>') );
//       return false;
//   }) 

// }

  render() {
    return (
    <div class="breadcrumb-section w-100 h-100 position-relative">
        <div class="breadcrumb-overlay position-absolute"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="breadcrumb-content">
                            {/* <h1 className="text-capitalize font-weight-bold">about us </h1> */}
                            <ul className="breadcrumb-list list-inline bg-white p-3 my-3 d-inline-block rounded">
                                <li className="list-inline-item item"><a className="text-green" href="index.html">Home</a>
                                </li>
                                <li className="list-inline-item">about us</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Breadcrumb;
