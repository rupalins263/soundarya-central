import React,{Component} from 'react';
import './Contact.css';
import logo from '../close.png'
import axios from 'axios';
import ReactPixel from 'react-facebook-pixel';

export default class ContactUs extends Component{

        constructor(){
            super();
            this._changeToNormal=this._changeToNormal.bind(this);
            this.state={
                display:"none",
                res:false,
                connecting:false
            }
        }
        componentWillMount(){
            ReactPixel.init('157395081538454');
        }

        submit(event)
    {
        event.preventDefault();
       var name= document.getElementById("name");
        var phone= document.getElementById("phone");
         var email= document.getElementById("email");
         var _that=this;
         var message= document.getElementById("message");
         this.setState({
             connecting:true,
             display:"block"
         })
          axios.post('http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/Central/ContactUs', {
                "name":name.value,
                "email":email.value,
                "number":phone.value,
                "message":message.value
            })
                .then(function (response) {
                    
                    _that.setState({
                        res:true,
                        display:"block",
                        connecting:false
                    })
                  
                })
                .catch(function (error) {
                      _that.setState({
                        res:false,
                        display:"block",
                        connecting:false
                    })
                });
           
    }
    _changeToNormal(){
        this.setState({
            display:"none",
            connecting:false
        })
        document.getElementById("myForm").reset();
    }
    render()
    {
        let conectionCompo="";
         let val="";
        if(this.state.connecting)
        {
            conectionCompo=<div style={{background:"white",margin:"0 auto",textAlign:"center",height:400,width:400,cursor:"pointer"}}><div style={{width:"100%",height:"50%",backgroundColor:"#33b7a0"}}><p style={{padding:50,fontFamily:'serif',fontSize:25,fontWeight:900,color:"white"}}><img src={logo}/></p></div><div><p style={{padding:50,fontFamily:'serif',fontSize:25,fontWeight:900}}> Sending Message <br/>Please wait</p></div></div>;
        }
        else{
               {ReactPixel.track('track', 'Lead')}
                if(this.state.res)
                {
                    val=<div style={{background:"white",margin:"0 auto",textAlign:"center",height:400,width:400,cursor:"pointer"}}><div style={{width:"100%",height:"50%",backgroundColor:"#33b7a0"}}><p style={{padding:50,fontFamily:'serif',fontSize:25,fontWeight:900,color:"white"}}><img src={logo}/></p></div><div><p style={{padding:50,fontFamily:'serif',fontSize:25,fontWeight:900}}>Thanks!<br/>
                        We appreciate that you’ve taken the time to write us. We’ll get back to you very soon</p></div></div>;
                }
                else{
                val= <div style={{background:"white",margin:"0 auto",textAlign:"center",height:400,width:400,cursor:"pointer"}}><div style={{width:"100%",height:"50%",backgroundColor:"#33b7a0"}}><p style={{padding:50,fontFamily:'serif',fontSize:25,fontWeight:900,color:"white"}}><img src={logo}/></p></div><div><p style={{padding:50,fontFamily:'serif',fontSize:25,fontWeight:900}}>Oh Snap <br/>Please Try Submitting Again</p></div></div>;
            }
        }
                 
        return(

       <div className="content container">
          <div onClick={this._changeToNormal} style={{"background-color":"rgba(24, 24, 24, 0.72)",
                        width:"100%",
                        height: "100%",
                        position: "fixed",
                        zIndex: 23,
                        left: 0,
                        top: 0,
                        display:this.state.display}}>
                     <p style={{textAlign:"center",marginTop:100}}> 
                        {val}
                        {conectionCompo}
                     </p>
                  
                    
                 
        </div>
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Contact</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Contact Us</li>
                </ul>
            </div>
        </header> 
      
        <div className="page-content">
            <div className="row">
                <article className="contact-form col-md-8 col-sm-7  page-row">                            
                    <h3 className="title">Get in touch</h3>"
                    
                    <p>We’d love to hear from you. Please fill in the form below and we will get in touch with you at the earliest.</p>
                    
                    <form onSubmit={this.submit.bind(this)} id="myForm">
                        <div className="form-group name">
                            <label for="name">Name<span className="required">*</span></label>
                            <input id="name" type="text" className="form-control req_field" placeholder="Enter your name" required/>
                        </div>
                        <div className="form-group email">
                            <label for="email">Email<span className="required">*</span></label>
                            <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email" required/>
                        </div>
                        
                        <div className="form-group phone">
                            <label for="phone">Phone</label>
                            <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number" required/>
                        </div>
                        <div className="form-group message">
                            <label for="message">Message<span className="required">*</span></label>
                            <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-theme">Send message</button>
                    </form>       
                     <article className="map-section">
                    <h3 className="title">Our Location</h3>
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.451174182569!2d77.4917798!3d13.0705677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae233f45196057%3A0x4c77a9fddff38740!2sSoundarya+Central+School!5e0!3m2!1sen!2sin!4v1455883461939" width="100%" height="315" frameborder="0" style={{"border":"0"}} allowfullscreen=""></iframe>
                    </div>
                </article>
                </article>

               
            
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
                    <section className="widget has-divider">
<h3 className="title">Downloads</h3>
<p>For your benefit we have compiled in this section some of the key features you should know about Soundarya Central School.</p>
<p><a className="btn btn-theme" href="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506081340/Soundarya-CBSE-Prospectus_qshta2.pdf"><i className="fa fa-download"></i>Download Prospectus</a></p>

</section>
                    <section className="widget has-divider">
                        <h3 className="title">Postal Address</h3>
                        <p className="adr">
                            <span className="adr-group">       
                                <span className="street-address"><b>Soundarya Central School</b></span><br/>
                                <span className="region">Soundaryanagar, Sidedahalli,</span><br/>
                                <span className="postal-code">Nagasandra Post, Near 8th Mile,</span><br/>
                                <span className="country-name">Bangalore-560073</span>
                            </span>
                        </p>
                    </section>
                    
                    <section className="widget">
                        <h3 className="title">All Enquiries</h3>
                        <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
                        <p className="email"><i className="fa fa-envelope"></i> <a href="#">soundaryacentralschool@gmail.com</a></p>
                    </section>   

                    <section className="widget">
                        <h3 className="title">Our Institutions</h3>
                        <p><a href="http://school.soundaryainstitutions.in">Soundarya School</a></p>
                        <p><a href="http://puc.soundaryainstitutions.in">Soundarya Composite PU College</a></p>
                        <p><a href="http://sims.soundaryainstitutions.in">Soundarya Institute of Management &amp; Science</a></p>
                        <p><a href="/">Soundarya Central School (CBSE)</a></p>
                    </section>   

                </aside>
            </div>
            
        </div>
    </div>
</div>
        )
    }
}