
import Link from 'next/link';
import { useState } from 'react';

function Header4() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header  text-black mo-left">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link href="contact-us-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/logo.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li className={`${open === "home" ? "open" : ""}`}><a  onClick={() => setOpen("home")}><span>Home</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/"><a>KCS</a></Link></li>
										
                                    </ul>
                                </li>
                                <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li className={`${open === "aboutsub1" ? "open" : ""}`}><a  onClick={() => setOpen("aboutsub1")}>About Us <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu">
                                                <Link href="/about-us-1"><a>About </a></Link>
                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link href="/services-1"><a>Services</a></Link></li>
								<li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Products</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                       <li><Link href="/services-details-1"><a>TMS Live</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/contact-us-1"><a>Contact Us </a></Link></li>
                                
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
  
  export default Header4;

  