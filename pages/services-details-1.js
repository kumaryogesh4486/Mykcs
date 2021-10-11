import Footer from '../layout/footer';
import Header from '../layout/header-3';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import AllServices from '../element/all-services';
import Link from 'next/link';


function ServicesDetails1() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
    <Header/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>TMS Live</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Products</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Services Details --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="dlab-media m-b30 rounded-md">
							<img src="images/blog/default/thum1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="m-b40">
								<h3>Product Description</h3>
								<p>Tms Live is rich with features to ensure the satisfaction level of our customers with maximum alteration on customer level.</p>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<p>Customised reports and modules, flexible to your requirements</p>
									<ul className="list-arrow primary m-b30">
										<li>AUTO ACCOUNTING</li>
										<li>CUSTOMIZED DASHBOARD</li>
										<li>3RD PART API INTEGRATION</li>
										<li>EASY & REAL TIME OPERATIONS</li>
										<li>INTEGRATED FASTAG</li>
										<li>INTEGRATED VEHICLE TRACKING</li>
										<li>TALLY INTEGRATION</li>
										<li>HR TRIP & DRIVER MANAGEMENT</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<div className="video-bx style-3">
										<img src="images/video/pic3.jpg" alt=""/>
										<div className="video-btn">
										<a href="http://tmslive.in" className="popup-youtube" onClick={()=> setOpen(false)}><i className="flaticon-play"></i></a>
										</div>
										<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Service --> 
		<AllServices/>
		*/}
		{/* <!-- Call To action --> */}
		<section style={{"backgroundImage":"url(images/background/bg5.jpg)","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row action-box style-1 align-items-center">
					<div className="col-xl-7 col-lg-8 col-md-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">More With Us</h6>
							<h2 className="title">Get A Free Quote</h2>
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

export default ServicesDetails1;