import React, { Component } from 'react';

import '../css/home.css';
import '../css/contact.css';

import '../css/extra-small.css';
import '../css/small.css';
import '../css/medium.css';
import '../css/large.css';

import ServicesSection from './services-section';
import HowToBookSection from './how-to-book-section';
import TestimonialsSection from './testimonials-section';
import AboutSection from './about-section';

class Home extends Component {
    render() { 
        return (
          <div className="w-100 px-0" style={{overflowX: "hidden"}}>             
            <ServicesSection/>
            <HowToBookSection/>
            <TestimonialsSection/>
            <AboutSection/>
          </div>                
        );
    }
}
  
export default Home;