import React, { useState, useEffect } from "react";

function Quote3() {

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
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-media">
                  <img src="images/about/img3.png" className="move-3" alt="" />
                </div>
              </div>
              <div
                className="col-xl-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <form
                  className="dlab-form dzForm"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="name"
                          required
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          value={name} onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[last_name"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="email"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                          value={email} onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[phone]"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone No."
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[project_title]"
                          required
                          type="text"
                          className="form-control"
                          placeholder="Project Title"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="dzOther[choose_service]"
                          className="form-control"
                          required
                        >
                          <option selected>Choose Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">Web Design</option>
                          <option value="3">Apps & Services</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group">
                        <textarea
                          name="message"
                          required
                          className="form-control"
                           placeholder="Description" value={message}
                          onChange={(e) => handleChange(e)}>
                          </textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          name="dzOther[estimated_buget]"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Estimated Buget"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <select
                          name="dzOther[priority]"
                          className="form-control"
                          required
                        >
                          <option selected>Country</option>
                          <option value="1">India</option>
                          <option value="2">USA</option>
                          <option value="3">UK</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-corner gradient btn-primary"
                      >Send Us
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
		</>
	)
}

export default Quote3;