import React,{Component}  from 'react';
import '../Contact/Contact.css';
export default class Privacy extends Component{
    render(){
        return(
                        <div className="content container">
                    <div className="page-wrapper">
                        <header className="page-heading clearfix">
                            <h1 className="heading-title pull-left">Privacy Policy</h1>
                            <div className="breadcrumbs pull-right">
                                <ul className="breadcrumbs-list">
                                    <li className="breadcrumbs-label">You are here:</li>
                                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                                    <li className="current">Privacy Policy</li>
                                </ul>
                            </div>
                        </header> 
                        <div className="page-content">
                            <div className="row">
                                <article className="contact-form col-md-8 col-sm-7  page-row">                                                  
                                    <p>central.soundaryainstitutions.in values the privacy of its customers. We do not use or disclose information about your visits or any information you may give us, such as your name, address, e-mail identity or telephone number, to any third parties. We do not disclose any personal information to advertisers for marketing and promotional purposes that could be used to personally identify you. This includes your password and other confidential information.</p>                                      
                                    <h3 className="title"><b>Disclaimers:</b></h3>
                                    <p>We are not responsible for any errors, omissions or representations on any of our pages or on any links on any of our pages. We do not endorse in anyway any advertisers on our web pages. Please verify the veracity of all information on your own before undertaking any purchase, or any transaction, commercial or otherwise with any of the advertisers. The linked sites are not under our control and we are not responsible for the contents of any linked site or any link contained in a linked site, or any changes or updates to such sites. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site. We hereby expressly disclaim any implied warranties imputed by the laws of any jurisdiction. We consider ourselves and intend to be subject to the jurisdiction only of the Indian law. We reserve the right to make changes to our site and these disclaimers, terms, and conditions at any time.</p>
                                </article>                             
                                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
                                    <section className="widget has-divider">
                <h3 className="title">Downloads</h3>
                <p>For your benefit we have compiled in this section some of the key features you should know about Soundarya Central School.</p>
                <p><a className="btn btn-theme" href="send_attachment.mako?attachment_type=prospectus"><i className="fa fa-download"></i>Download Prospectus</a></p>
                <p><a className="btn btn-theme" href="#"><i className="fa fa-download"></i>Download Application Form</a></p>
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
                                        <p><a href="#">Soundarya Central School (CBSE)</a></p>
                                    </section>   

                                </aside>
                            </div>
                            
                        </div>
                    </div>
                </div>
        )
    }
}
