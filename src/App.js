import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';

import './App.css';
import './css/breadcrumb.css';

import Header from './components/header';
import Nav from './components/nav';
import BannerSection from './components/banner-section';

import SignUp from './components/sign-up';

import PatientProfile from './components/patient-profile';
import DoctorProfile from './components/doctor-profile';
import LabScanProfile from './components/lab-scan-profile';
import HospitalProfile from './components/hospital-profile';
import BloodBankProfile from './components/blood-bank-profile';

import EditAppointment from './components/edit-appointment';

import Home from './components/home';
import About from './components/about';

import Hospitals from './components/all-hospitals';
import LabScans from './components/all-lab-scans';
import BloodBanks from './components/all-blood-banks';
import Doctors from './components/all-doctors';

import SingleHospital from './components/single-hospital';
import SingleLabScan from './components/single-lab-scan';
import SingleBloodBank from './components/single-blood-bank';
import SingleDoctor from './components/single-doctor';
import SingleSpecialist from './components/single-specialist';

import BookDetails from './components/appointment';
import Contact from './components/contact';
// import NotFound from './components/notfound';
import Footer from './components/footer';

class App extends Component {
  state = {
    hospitals: 
    [
      {
        id: 1,
        img: "../images/counter_bg.jpg", 
        title: "Hospitsl One", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        departments: ["Dentist - ", "Cardiologist"]
      },
      {
        id: 2,
        img: "../images/counter_bg.jpg", 
        title: "Hospitsl Two", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        departments: ["Ent Doctor - ", "Neurologist"]
      },
      {
        id: 3,
        img: "../images/counter_bg.jpg", 
        title: "Hospitsl Three", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        departments: ["Dentist - ", "Cardiologist"]
      },
      {
        id: 4,
        img: "../images/counter_bg.jpg", 
        title: "Hospitsl Four", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        departments: ["Ent Doctor - ", "Neurologist"]
      }
    ],
    doctors:
    [
      {
        id: 1,
        img: "../images/doctor.jpg",
        name: "DR. Julia Jhones",
        department: "Dentist",
        degree: "Professor",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        fees: 300,
        waitingTime: "44 minutes"
      },
      {
        id: 2,
        img: "../images/doctor_listing_1.jpg",
        name: "Doctor Two",
        department: "Neurologist",
        degree: "Professor",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        fees: 300,
        waitingTime: "44 minutes"
      },
      {
        id: 3,
        img: "../images/doctor.jpg",
        name: "Doctor Three",
        department: "Dentist",
        degree: "Professor",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        fees: 300,
        waitingTime: "44 minutes"
      },
      {
        id: 4,
        img: "../images/doctor_listing_1.jpg",
        name: "Doctor Four",
        department: "Neurologist",
        degree: "Professor",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        fees: 300,
        waitingTime: "44 minutes"
      }
    ],
    labs:
    [
      {
        id:1,
        img: "../images/counter_bg.jpg", 
        title: "Lab One", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["Total Bilirubin", "Epstein Barr Virus (EBV)"]
      },
      {
        id:2,
        img: "../images/counter_bg.jpg", 
        title: "Lab Two", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["Total Protein", "SGOT/ALT"]
      },
      {
        id:3,
        img: "../images/counter_bg.jpg", 
        title: "Lab Three", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["Total Bilirubin", "Epstein Barr Virus (EBV)"]
      },
      {
        id:4,
        img: "../images/counter_bg.jpg", 
        title: "Lab Four", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["Total Protein", "SGOT/ALT"]
      }
    ],
    blood:
    [
      {
        id:1,
        img: "../images/counter_bg.jpg", 
        title: "Blood Bank One", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["A+", "AB+"]
      },
      {
        id:2,
        img: "../images/counter_bg.jpg", 
        title: "Blood Bank Two", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["O-", "B+"]
      },
      {
        id:3,
        img: "../images/counter_bg.jpg", 
        title: "Blood Bank Three", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["A+", "AB+"]
      },
      {
        id:4,
        img: "../images/counter_bg.jpg", 
        title: "Blood Bank Four", 
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 166666,
        types: ["O-", "B+"]
      }
    ],
    single_specialist:
    [
      {
        id: 1,
        img: "../images/hospital.jpg", 
        name: "Hospitsl One", 
        url:"/services/all-hospitals/single-hospital",
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        type: "Hospital",
        className: "hospital",
        address: "Heliopolis Elkhalifa elmamon",
        phone: 15656,
        fees: 100,
        waitingTime: "30 minutes",
        extra_specialists: ["Dentist - ", "Cardiologist"]
      },
      {
        id: 2,
        img: "../images/doctor.jpg",
        name: "DR. Julia Jhones",
        url:"/services/all-doctors/single-doctor",
        desc: "Professor of Dermatology Faculty of medicine- Alexandria university ",
        type: "Professor",
        className:"doctor",
        address: "Shoubra Elkhalifa elmamon",
        phone: 16666,
        fees: 300,
        waitingTime: "44 minutes",
        extra_specialists: "Dentist"
      },
      {
        id: 3,
        img: "../images/hospital.jpg", 
        name: "Hospitsl Two", 
        url:"/services/all-hospitals/single-hospital",
        desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibht henhn id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
        type: "Hospital",
        className: "hospital",
        address: "Nasr City Elkhalifa elmamon",
        phone: 15656,
        fees: 100,
        waitingTime: "30 minutes",
        extra_specialists: ["Ent Doctor - ", "Neurologist"]
      },
      {
        id: 4,
        img: "../images/doctor_listing_1.jpg",
        name: "Doctor Four",
        url:"/services/all-doctors/single-doctor",
        desc: "Professor of Dermatology Faculty of medicine- Alexandria university ",
        type: "Professor",
        className:"doctor",
        address: "El-Maadi Elkhalifa elmamon",
        phone: 16666,
        fees: 300,
        waitingTime: "44 minutes",
        extra_specialists: "Neurologist"
      }
    ]
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid p-0 m-0">
          <Header/>
          <Nav/>
          <BannerSection/>

          {/* <Route exact path='https://www.google.com/maps'/> */}

          <Route exact path='/sign-up' component={SignUp}/> 

          <Route exact path='/home/patient-profile' component={PatientProfile}/>
          <Route exact path='/home/doctor-profile' component={DoctorProfile}/>
          <Route exact path='/home/lab-scan-profile' component={LabScanProfile}/>
          <Route exact path='/home/hospital-profile' component={HospitalProfile}/>
          <Route exact path='/home/blood-bank-profile' component={BloodBankProfile}/>

          <Route exact path='/edit-appointment' component={EditAppointment}/>

          <Route exact path='/' component={Home}/> 
          <Route exact path='/about' component={About}/> 

          <Route exact path='/services/all-hospitals' render={()=><Hospitals hospital={this.state.hospitals}/>}/>
          <Route exact path='/services/all-lab-scans' render={()=><LabScans lab={this.state.labs}/>}/>
          <Route exact path='/services/all-blood-banks' render={()=><BloodBanks blood={this.state.blood}/>}/>
          <Route exact path='/services/all-doctors' render={()=><Doctors doctor={this.state.doctors}/>}/>

          <Route exact path='/services/all-hospitals/single-hospital' component={SingleHospital}/>
          <Route exact path='/services/all-lab-scans/single-lab-scan' component={SingleLabScan}/>
          <Route exact path='/services/all-blood-banks/single-blood-bank' component={SingleBloodBank}/> 
          <Route exact path='/services/all-doctors/single-doctor' component={SingleDoctor}/>
          <Route exact path='/single-specialist' render={()=><SingleSpecialist single_specialist={this.state.single_specialist}/>}/>

          {/* <Route path='/privacy-policy' component={() => { window.location = 'https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361'; return null;} }/> */}

          <Route exact path='/appointment' component={BookDetails}/>
          <Route exact path='/contact' component={Contact}/>
          {/* <Route exact path='/:myparams' component={NotFound}/> */}
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
