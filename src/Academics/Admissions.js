import React,{Component} from 'react';
import '../Contact/Contact.css';
import ReactPixel from 'react-facebook-pixel';
import axios from 'axios';
export default class ContactUs extends Component{


    componentWillMount(){
        ReactPixel.init('157395081538454');
    }

        submit(event)
    {
    ReactPixel.track('track', 'Lead')
      event.preventDefault();
       var name= document.getElementById("name");
        var phone= document.getElementById("phone");
         var email= document.getElementById("email");

         var message= document.getElementById("message");
          axios.post('http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/Central/ContactUs', {
                "name":name.value,
                "email":email.value,
                "number":phone.value,
                "message":message.value
            })
                .then(function (response) {
                    alert("Successfully submitted")
                    window.location=window.location
                })
                .catch(function (error) {
                   alert("Retry again")
                });
           
    }


    render(){
        return(
            <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Admissions</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Admissions</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7"> 

                <p></p>  
                    
                    <h3 className="title sub-heading">For admissions contact:</h3>  
                    
                      <form onSubmit={this.submit.bind(this)}>
                      <div className="form-group name">
                          <label for="name">Name<sup>*</sup></label>
                          <input id="name" type="text" className="form-control req_field" placeholder="Enter your name"/>
                      </div>
                      <div className="form-group sex">
                          <label for="name">Sex<sup>*</sup></label>
                          <input id="gender" type="text" className="form-control req_field" placeholder="Enter your Gender"/>
                      </div>
                      <div className="form-group email">
                          <label for="email">Email <span className="required">*</span></label>
                          <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email"/>
                      </div>
                      
                      <div className="form-group phone">
                          <label for="phone">Phone<sup>*</sup></label>
                          <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number"/>
                      </div>
                      <div className="form-group country">
                          <label for="phone">Country<sup>*</sup></label>
                          <input id="phone" type="tel" className="form-control" placeholder="Enter your Country Name"/>
                      </div>
                      <div className="form-group course">
                          <label for="phone">Course<sup>*</sup></label>
                          <input id="pihone" type="tel" className="form-control" placeholder="Enter your Desired Course"/>
                      </div>
                      <div className="form-group message">
                          <label for="message">Ask your Admission Related Quires<span className="required">*</span></label>
                          <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..."></textarea>
                      </div>
                      <button type="submit" className="btn btn-theme" >Submit</button>
  
                  </form>     
                  <p><br/><br/></p>                                                                          
                    <p>Finding the right school is all about finding the right environment for a child and we, at Soundarya Central School , Soundarya Nagar strive with the same goal in mind. Registration for Admission to Soundarya Central School is open to all children irrespective of caste, creed, race, region or gender.As per the policy and directive of CBSE (Central Board of Secondary Education), we have the following guidelines for admission :
                    </p><ul className="icons-list check">
                    <li>Parents have to fill up the prescribed application form and register the same in the school office before the last date.</li>
                    <li>Eligible Age: 2 years 6 months as on June of the Academic Year. For subsequent classes the eligible age would be reckoned again with reference to 01 June with proportionate increase.</li>
                    <li>Age Proof: Certificate of birth issued by competent authority for Grades Montessori  to Grade 1.</li>
                    <li>Grade 2 and above TC from the previous school duty counter signed by the competent authority such as Block Education Officer or any other authorized authority.</li>
                    <li>Documents to be submitted at the time of registration. Attested copy of Birth Certificate for Grades Montessori  to Grade 1.</li>
                    <li>Attested copy of SC, ST, OBC certificate in case of SC/ST/OBC Students.</li>
                    <li>Attested copy of TC from the previous school for the Grade 2 and above.</li>
                    <li>Proof for Residential Address:[Any one document]</li>
                    <li>Passport of the parent</li>
                    <li>Aadhaar card of the parent</li>
                    <li>Telephone bill</li>
                    <li>Driving License of the parent</li>
                    <li>Copy of the Rent Agreement</li>
</ul>
                
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                    <section className="widget has-divider">
<h3 className="title">Downloads</h3>
<p>For your benefit we have compiled in this section some of the key features you should know about Soundarya Central School.</p>
<p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/central/Soundarya-CBSE-Prospectus.pdf"><i className="fa fa-download"></i>Download Prospectus</a></p>
<p><a className="btn btn-theme" href="#"><i className="fa fa-download"></i>Download Application Form</a></p>
</section>
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                   <li><i className="fa fa-caret-right"></i><a href="/#/Facilities">Facilities</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Mission">Mission</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Infrastructure">Infrastructure</a></li>
                        </ul>
                        
                    </section>
                    <section className="widget">
                        <h3 className="title">Contact</h3>
                        <p><b>Soundarya Central School</b><br/>Soundaryanagar, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                        <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
                        <p className="email"><i className="fa fa-envelope"></i> <a href="#">soundaryacentralschool@gmail.com</a></p>
                        </section>
                </aside>
            </div>
        </div>
    </div>
</div>
        )
    }
}