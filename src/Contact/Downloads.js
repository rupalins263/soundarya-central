import React,{Component} from 'react';
import './Contact.css';
export default class ContactUs extends Component{
    render()
    {
        return(
       <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Downloads</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Downloads</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                                                
                            <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/central/downloads/CBSE-Cluster-TT-Tournament-17-18%20(2).pdf"><i className="fa fa-download"></i>CBSE Cluster – VIII/IX Table Tennis Tournament 2017-2018</a></p>
                            <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/central/downloads/NEWSLETTER-17.pdf"><i className="fa fa-download"></i>Download Newsletter - 2016-17</a></p>
                            <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/central/downloads/NEWSLETTER-7.pdf"><i className="fa fa-download"></i>Download Newsletter - June 2016</a></p>
                        </article>
                        
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
									 <li><i className="fa fa-caret-right"></i><a href="/#/Facilities">Facilities</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Mission">Mission</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/#/Infrastructure">Infrastructure</a></li>     </ul>
                   
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