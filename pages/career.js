import Link from "next/link";
import BasicPagination from "../component/pagination";
import Career from "../element/get-in-touch";
import Footer from "../layout/footer";
import Header from "../layout/header-3";
import { useState } from "react";
import React from 'react'

function career() {
	const [open, setOpen] = useState("p2")
    return (
        <>
         <Header/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Career</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Careers</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
			<section className="content-inner" style={{"backgroundImage":"url(images/background/bg1.png)"}}>
			<div className="container">
				<div className="row">
					
				<div className="col-lg-4 col-md-6 m-b30">
                        <aside className="side-bar sticky-top">
                            <div className="widget style-1">
                                <div className="search-bx style-1">
                                    <form role="search" method="post">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-search"></i></span>
											</div>
											<input name="text" className="form-control" placeholder="Search" type="text"/>
                                            <span className="input-group-btn">
												<button type="submit" className="btn btn-primary gradient"><i className="la la-long-arrow-right"></i></button>
                                            </span> 
										</div>
                                    </form>
                                </div>
                            </div>
							<div className="widget widget_archive style-1">
                                <h2 className="widget-title">Category</h2>
                                <ul>
                                    <li><a href="javascript:void(0);">Design<span>08</span></a></li>
                                    <li><a href="javascript:void(0);">Development<span>12</span></a></li>
                                    <li><a href="javascript:void(0);">SEO<span>03</span></a></li>
                                    <li><a href="javascript:void(0);">App Development<span>02</span></a></li>
                                    <li><a href="javascript:void(0);">Data Entry<span>22</span></a></li>
                                </ul>
                            </div>
                            <div className="widget recent-posts-entry style-1">
                                <h2 className="widget-title">Recent Job Posts</h2>
                                <div className="widget-post-bx">
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic1.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic2.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/"><a>Fusce mollis felis quis tristique</a></Link></h4>
											<div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                    <div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic3.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
									<div className="widget-post clearfix">
                                        <div className="dlab-media"> 
											<Link href="blog-details-3"><a><img src="images/blog/recent-blog/pic3.jpg" alt=""/></a></Link>
										</div>
                                        <div className="dlab-info">
											<h4 className="title"><Link href="/"><a>Fusce mollis felis quis tristique</a></Link></h4>
                                            <div className="dlab-meta">
												<ul>
													<li className="post-date"> 7 March, 2020 </li>
												</ul>
											</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
							<div className="widget widget_archive style-1">
                                <h2 className="widget-title">Date</h2>
                                <ul>
                                    <li><a href="javascript:void(0);">January<span>05</span></a></li>
                                    <li><a href="javascript:void(0);">Fabruary<span>25</span></a></li>
                                    <li><a href="javascript:void(0);">March<span>20</span></a></li>
                                    <li><a href="javascript:void(0);">April<span>08</span></a></li>
                                    <li><a href="javascript:void(0);">May<span>22</span></a></li>
                                    <li><a href="javascript:void(0);">Jun<span>11</span></a></li>
                                    <li><a href="javascript:void(0);">July<span>19</span></a></li>
                                </ul>
                            </div>
							<div className="widget widget_tag_cloud style-1">
                                <h2 className="widget-title">Tags</h2>
                                <div className="tagcloud"> 
									<a href="javascript:void(0);">UI/UX</a>
									<a href="javascript:void(0);">Administrator</a>
									<a href="javascript:void(0);">Linux</a>
									<a href="javascript:void(0);">Flutter</a>
									<a href="javascript:void(0);">Java</a>
									<a href="javascript:void(0);">Data Mining</a>
									<a href="javascript:void(0);">AWS</a>
									<a href="javascript:void(0);">Networking</a>
								</div>
                            </div>
                        </aside>
                    </div>
					<div className="col-xl-8 col-lg-8 m-b30">
					<Link href="/careerdetail">
						<div className={`${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p2")}>
							
							<div className="icon-bx-md radius bg shadow-green"> 
								<a href="" className="icon-cell">
								<Link href="/"><a><img src="images/icon/sale.png" alt=""/></a></Link>
								</a> 
							</div>
							<div className="icon-content">
							<h4 className="dlab-title">Sales Head</h4>
								<h6>Eligibility</h6>
								<p>5 years of experience</p>
								<p1>Basic Knowledge of SEO, Marketing, presentation and pitching skills</p1>
                            </div>
							<a className="btn gradient btn-secondary">Apply Now</a>
						</div>
						</Link>
						<div className={`${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-md radius bg shadow-green"> 
								<a href="javascript:void(0);" className="icon-cell">
								<Link href="/"><a><img src="images/icon/computer.png" alt=""/></a></Link>
								</a> 
							</div>
							<div className="icon-content">
								<h4 className="dlab-title">UI/UX Designer</h4>
								<h6>Eligibility</h6>
								<p>1 years of experience</p>
								<p1>Basic Knowledge of Figma, Adobe, Photoshop</p1>
							</div>
							<Link href="/"><a className="btn gradient btn-secondary">Apply Now</a></Link>
						</div>
						<div className={`${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-md radius bg shadow-red"> 
								<a href="javascript:void(0);" className="icon-cell">
								<Link href="/"><a><img src="images/icon/java.png" alt=""/></a></Link>
								</a> 
							</div>
							<div className="icon-content">
							<h4 className="dlab-title">Java </h4>
								<h6>Eligibility</h6>
								<p>2 years of experience</p>
								<p1>Basic Knowledge of Spring, Hibernate</p1>
							</div>
							<Link href="/"><a className="btn gradient btn-secondary">Apply Now</a></Link>
						</div>
						<div className={`${open === "p4" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-md radius bg shadow-green"> 
								<a href="javascript:void(0);" className="icon-cell">
								<Link href="/"><a><img src="images/icon/cloud-service.png" alt=""/></a></Link>
								</a> 
							</div>
							<div className="icon-content">
							<h4 className="dlab-title">DevOps Engineer</h4>
								<h6>Eligibility</h6>
								<p>1 years of experience</p>
								<p1>Basic Knowledge of AWS, Azure, Linux</p1>
							</div>
							<Link href="/"><a className="btn gradient btn-secondary">Apply Now</a></Link>
						</div>
						<BasicPagination />
					</div>
				</div>
			</div>
		</section>
		
		{/* <!-- Get A Career--> */}
        </div>
	<Footer/>   
        </>
    )
}

export default career

