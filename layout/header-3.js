
import Link from 'next/link';
import { useState } from 'react';
function Header3() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/">
								<a>
									<img className="custom-logo-white" src="images/logo-white.png" alt="" />
									<img className="custom-logo" src="images/logo.png" alt="" />
								</a>
							</Link>
							
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
								<li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/about-us-1"><a>About Us</a></Link></li>
                                <li><Link href="/services-1"><a>Services</a></Link></li>
								<li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Products</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                       <li><Link href="/services-details-1"><a>TMS Live</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/contact-us-1"><a>Contact Us</a></Link></li>
                                <li>
                            <div className="extra-cell">
                                <Link href="quote"><a className="btn btn-corner gradient btn-primary"><i className="fa fa-angle-right m20"></i>Get A Quote</a></Link>
                            </div>
                                </li>
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <Link href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></Link>
                                    <Link href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></Link>
                                    <Link href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></Link>
                                    <Link href="https://www.instagram.com/"><a className="fa fa-instagram"></a></Link>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header3;

  