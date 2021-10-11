import React, { useState, useEffect } from "react";

function Quote() {
	const   [contactFormDetails, setcontactFormDetails] = useState({name:'',email:"",message:""});
  
	const [loader, setLoader] = useState(false);
	const { name,email,message}=contactFormDetails
	const handleChange=(e)=>{
		setcontactFormDetails({...contactFormDetails,[e.target.name]:e.target.value})
	}
	const handleSubmit = (e) => {
	  e.preventDefault();
	  // setLoader(true);
	  console.log("event",contactFormDetails)
	  
	  const { name,email,message}=contactFormDetails
   
	 const Body='Name: <b>'+name+'</b><br>Email: '+email+'<br>Subject: '+name +' <br>form details <br>Message: '+message;
			  //console.log(name, phone, email, message);
  
			  window.Email.send({
		  		SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				  To: 'support@mykcs.in',
				  From: "support@mykcs.in",
				  Subject: "New message on contact from "+name,
				  Body: Body,
			  }).then(
				  message =>{
   
					  if(message=='OK'){
					  alert('Your mail has been send. Thank you for connecting.');
					  }
					  else{
						  console.error (message);
						  alert('There is error at sending message. ')
						  
					  }})
					};
	
	return (
		<>
			<section className="content-inner" style={{ "backgroundImage": "url(images/background/bg1.png)" }}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h6 className="sub-title bgl-primary m-b20 text-primary">Contact Us</h6>
								<h2 className="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2>
							</div>
							<form className="form" method="POST" onSubmit={handleSubmit} >
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="name" type="text" required className="form-control"  placeholder="First Name" value={name} onChange={(e) => handleChange(e)} />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Last Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="email" type="email" required className="form-control" placeholder="Email Address"  value={email} onChange={(e) => handleChange(e)}  />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="phone" type="text" required className="form-control" placeholder="Phone No." />
										</div>
									</div>
								<div className="col-sm-12">
                      			<div className="input-group">
                       			 <textarea
                         			name="message"
                         			required
                         			className="form-control"
                         			placeholder="Message" value={message}
									onChange={(e) => handleChange(e)} >
								</textarea>
								</div>
								</div>
									<div className="col-sm-12 mt-2">
										<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center" ><i className="fa fa-angle-right m-r10"></i>Submit Now</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
							<div className="dlab-media cf-r-img">
								<img src="images/about/img2.png" className="move-1" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Quote;