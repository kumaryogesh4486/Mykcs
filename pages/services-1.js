import Footer from '../layout/footer';
import Header from '../layout/header-3';
import { useState } from "react";
import AllServices from '../element/all-services';
import Link from 'next/link';


function Services1() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Our Top Services</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Services</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services --> */}
		<AllServices/>
		
		{/* <!-- Newsletter --> */}
		<section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media m-b30">
							<img src="images/about/img9.png" className="move-2" alt=""/>
						</div>
					</div>
					<div className="col-lg-8 col-md-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 text-white">
							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
							<h2 className="title m-b30">Subscribe To Our Newsletter For Latest Update Of Finanical Services </h2>
							<p>We provide 24/7 customer support. Please feel free to contact us for emergency case.</p>
						</div>
						<div className="dlab-subscribe style-2 max-w500">
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group">
									<div className="input-group">
										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
										<div className="input-group-addon">
											<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>	
		
		{/* <!-- Fetures --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-7 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Fetures</h6>
							<h2 className="title">Our Working Process To Help Your Boost Your Business</h2>
						</div>
						<div className="section-wraper-one">
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-red"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-idea"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Idea & Analysis Gathering</h4>
									<p> analyzing the collected requirements to understand the correctness and feasibility of converting these requirements.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-yellow"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-line-graph"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Designing & Developing</h4>
									<p>UI/UX Design, design review, development, evaluation, requirements, specifications, integratin, validation, verification</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-green"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-rocket"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">Testing & Lunching</h4>
									<p>Bug tracking and test management tools like JIRA, Bugzilla, Quality Center, Clearquest, Rational Quality Manager, Microsoft Test</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-5 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-media">
							<img src="images/about/img5.png" className="move-2" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- Call To action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">You Want To Join With Us</h2>
						</div>
					</div>
					<div className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<a href="/contact-us-1" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Join Now</a>
					</div>
				</div>
			</div>
		</section>
		
	</div>
    <Footer/>
    </>
  )
}

export default Services1;