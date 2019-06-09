import React, { Component } from 'react';
import {Link , NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLifeRing, faHeadset, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

class HowToBookSection extends Component {
    render() { 
        return (
        /* Start how to book section */
        <section className="py-5" style={{backgroundColor:'#eee'}}>
			<div class="container margin_120_95">
			
				{/* start title div */}
				<div className="main_title text-center mb-5">
					<h2>Discover the <strong>online</strong> appointment!</h2>
					<img  class="img-fluid mb-2" src="../images/line-heading.png" alt="line heading"/>
					<p className="text-grey w-75 m-auto">
					  Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.
					  Sed ad debet sanctus no. Suas  sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.
					  Sed ad debet scaevola, ne mel.
					</p>
				</div>
				{/* End title div */}

				{/* start content how to book div */}
				<div class="row add_bottom_30">
					<div class="col-lg-4">
						<div class="box_content text-center py-5 px-4 bg-white position-relative">
						    <img  class="img-fluid mb-4" src="../images/method-draw-image1.svg" alt="line heading"/>
							<span className="position-absolute border-grey rounded-circle "></span>
							<h3 className="text-green">Find a Doctor</h3>
							<p className="text-grey">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="box_content text-center py-5 px-4 bg-white position-relative">
						    <img  class="img-fluid mb-4" src="../images/method-draw-image2.svg" alt="line heading"/>
							<span className="position-absolute border-grey rounded-circle"></span>
							<h3 className="text-green">View profile</h3>
							<p className="text-grey">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="box_content text-center py-5 px-4 bg-white position-relative">
						    <img  class="img-fluid mb-4" src="../images/method-draw-image3.svg" alt="line heading"/>
							<h3 className="text-green">Book a visit</h3>
							<p className="text-grey">Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri. In eum omnes molestie.</p>
						</div>
					</div>
				</div>
				{/* End content how to book div */}
				{/* Start booking div */}
				<div className="text-center mt-5"><Link to="/services/all-doctors" class="btn btn-green text-white">Find Doctor</Link></div>
				{/* End booking div */}

			</div>
		</section>

        /* End how to book section */
        );
    }
}

export default HowToBookSection;