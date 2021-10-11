import Link from 'next/link';
function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/bg10.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>+91 9694395555<br/>support@mykcs.in</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							<div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="https://goo.gl/maps/Nr71i7TJ9dPdwksQ6" className="icon-cell">
										<i className="flaticon-location"></i>
									</a> 
								</div>
								<div className="icon-content">
									<p>Bestech City Center Mall, Dharuhera Rewari - 123106  (Haryana)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">About KCS</h5>
							<p>You can't grow your business without effective technology. We love to help you to use your time for most important tasks.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
									<li><a className="fa fa-linkedin" href="https://www.linkedin.com"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/about-us-1">About Us</a></li>
								<li><a href="/services-1">Services</a></li>
								<li><a href="/services-details-1">Products</a></li>
								<li><Link href="/career"><a>Careers</a></Link></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="javascript:void(0);">CRM & ERM</a></li>
								<li><a href="javascript:void(0);">Development</a></li>
								<li><a href="javascript:void(0);">Design</a></li>
								<li><a href="javascript:void(0);">Support & Data Entry</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="1.0s">
						<div className="widget widget_getintuch">
							<h5 className="footer-title">Contact Us</h5>
							<ul>
								<li>
									<i className="fa fa-phone gradient"></i>
									<span>+91 969-439-5555</span> 
								</li>
								<li>
									<i className="fa fa-envelope gradient"></i> 
									<span>support@mykcs.in </span>
								</li>
								<li>
									<i className="fa fa-map-marker gradient"></i>
									<span>Bestech City Center Mall, Dharuhera Rewari - 123106  (Haryana)</span>
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2021 <a href="https://mykcs.in/" target="_blank">Kataria Consultancy</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;