import React, { useState, useEffect } from "react";

function GetInTouch3() {


    const   [contactFormDetails, setcontactFormDetails] = useState({name:'',email:"",message:"", file:"",phone:""});
   const [loader, setLoader] = useState(false);
	const { name,email,message,file, phone}=contactFormDetails
	const handleChange=(e)=>{
		setcontactFormDetails({...contactFormDetails,[e.target.name]:e.target.value})
	}
	const handleSubmit = (e) => {
	  e.preventDefault();
	  // setLoader(true);
	  console.log("event",contactFormDetails)
	  
	  const { name,email,message,file ,phone}=contactFormDetails
   
	 const Body='Name: <b>'+name+'</b><br>Email: '+email+'<br>Subject: '+name +'</br>Message: '+message + '</br>Resume File: &nbsp;&nbsp;'+file+ '</br> phone: &nbsp;&nbsp;' +phone ;
			  //console.log(name, phone, email, message);
  
			  window.Email.send({
		  		SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				  To: 'deepu855305@gmail.com',
				  From: "deepu855305@gmail.com",
				  Subject: "Job Apply "+name+"<",
				  Body: Body,
			  }).then(
				  message =>{
   
					  if(message=='OK'){
					  alert('Thanks for apply , We will contact soon');
					  }
					  else{
						  console.error (message);
						  alert('There is error at sending message. ')
						  
					  }})
					};
    return (
      <>
        {/* <!-- Contact Form --> */}
<section className="content-inner">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-media">
                    <img src="images/about/img8.png" className="move-1" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                <form className="dlab-form style-1 dzForm" method="POST"  onSubmit={handleSubmit} action='http://localhost:8000/upload' method='post' encType="multipart/form-data" >
                    <div className="section-head style-3">
                        <h2 className="title m-t10">Get In Touch With Us</h2>
                        <div className="dlab-separator style-2 bg-primary"></div>
                    </div>
                    <div className="dzFormMsg"></div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="name" type="text" required className="form-control" placeholder="Full Name"  value={name} onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="email" type="text" required className="form-control" placeholder="Email Address" value={email} onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <input name="phone" type="text" required className="form-control" placeholder="Phone No." value={phone} onChange={(e) => handleChange(e)}/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <input name="experience" type="text" required className="form-control" placeholder="Experience"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="input-group">
                                <select name="dzOther[choose_service]" className="form-control" required>
                                    <option>Looking For</option>
                                    <option value="1">Development</option>
                                    <option value="2">Design</option>
                                    <option value="3">Apps & Services</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12">
                      <div className="input-group">
                        <input
                          name="file"
                          type="file"
                          required
                          className="form-control custom-file-input"
                          value={file} onChange={(e) => handleChange(e)}
                        />
                        <label className="custom-file-label"  >Choose file</label>
                      </div>
                    </div>
                        <div className="col-sm-12">
                            <div className="input-group">
                                <textarea name="message"
                         			 required
                         			 className="form-control"
                         			  placeholder="Cover Letter" value={message}
									  onChange={(e) => handleChange(e)} ></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-corner gradient btn-block btn-primary">Submit Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
      </>
    )
  }
  
  export default GetInTouch3;
