import Link from 'next/link';
import { useState } from 'react';

import React from 'react'

function Careerdetails() {
    
	const [isOpen, setOpen] = useState(false)
    return (
        <>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Job Description </h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Job/Intership <span>/</span>Java Developer</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2">
			<div className="container">
            <Link href="/careerform"><a className="btn gradient btn-secondary">Apply Now</a></Link>
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/blog/default/thum1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="row align-items-center m-b30">
								<div className="col-lg-6 m-b30">
									<h3>Sales Head</h3>
									<p>Key Responsibilities:</p>
									<ul className="list-arrow primary">
										<li>To generate organization revenue through FCT, Non FCT, Delta clients and Web Radio by content integration, show sponsorships, Local properties and Digital.</li>
										<li>To ensure consistent revenue achievement through focus markets of the organization</li>
										<li>To acquire and negotiate with new corporate clients and upgrade existing clients by studying and understanding their requirements and preparing presentations, proposals accordingly</li>
										<li>To prepare sales reports including daily call reports, weekly reports, sales projection reports, monthly sales plan etc through competition tracking & market analysis</li>
										<li>To closely work with creative team by effectively communicating the client brief to them.</li>
										<li>To work closely with collections team to ensure timely collections</li>
                                        <li>To Manage the team</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">Market Strategy</span>
											<span className="progress-value">80%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"80%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">Field Experience</span>
											<span className="progress-value">90%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"90%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden mb-3">
										<div className="progress-info">
											<span className="title">Basic Computer</span>
											<span className="progress-value">60%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"60%"}}></div>
										</div>
									</div>
									<div className="progress-bx overflow-hidden">
										<div className="progress-info">
											<span className="title">Marketing</span>
											<span className="progress-value">70%</span>
										</div>
										<div className="progress mb-3">
											<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"70%"}}></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        {/*  More Details Section
        <section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <Accordion_sm/>
                    </div>
					<div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <Accordion_sm/>
                    </div>
				</div>
			</div>
		</section>
        */}
	</div>
     </>
    )
}

export default Careerdetails
