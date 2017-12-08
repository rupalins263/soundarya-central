import React,{Component} from 'react';
import './Footer.css';
export default class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                    <div className="footer-content">
                            <div className="container">
                                <div className="row">
                                <div className="footer-col col-md-2 col-sm-3 about">
                                    <div className="footer-col-inner">
                                        <h3>About</h3>
                                        <ul>
                                            <li><a href="/#/About"><i className="fa fa-caret-right"></i>About us</a></li>
                                            <li><a href="/#/PrePrimary"><i className="fa fa-caret-right"></i>Pre Primary School</a></li>
                                            <li><a href="/#/Primary"><i className="fa fa-caret-right"></i>Primary School</a></li>
                                            <li><a href="/#/MiddleSchool"><i className="fa fa-caret-right"></i>Middle School</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col col-md-2 col-sm-3 about">
                                    <div className="footer-col-inner">
                                        <h3>More Links</h3>
                                        <ul>
                                            <li><a href="/#/CoScholastic"><i className="fa fa-caret-right"></i>Co Scholastic</a></li>
                                            <li><a href="/#/Extended"><i className="fa fa-caret-right"></i>Extended Learning</a></li>
                                            <li><a href="/#/InfraStructure"><i className="fa fa-caret-right"></i>Infrastructure</a></li>
                                            <li><a href="/#/Facilities"><i className="fa fa-caret-right"></i>Facilities</a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="footer-col col-md-2 col-sm-3 about">
                                    <div className="footer-col-inner">
                                        <h3>&nbsp;</h3>
                                        <ul>
                                            <li><a href="/#/Admission"><i className="fa fa-caret-right"></i>Admissions</a></li>
                                            <li><a href="/#/CodeOfConduct"><i className="fa fa-caret-right"></i>Code of Conduct</a></li>
                                            <li><a href="/#/Interaction"><i className="fa fa-caret-right"></i>Interaction Training</a></li>
                                            <li><a href="/#/Privacy"><i className="fa fa-caret-right"></i>Privacy Policy</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>

                                <div className="footer-col col-md-4 col-sm-3 contact">
                                        <h3>Contact us</h3>
                                        <div className="row">
                                            <p className="adr clearfix col-md-12 col-sm-4">
                                                <i className="fa fa-map-marker pull-left"></i>        
                                                <span className="adr-group">       
                                                    <span className="street-address">Soundarya Central School<br/>
                                                    <i style={{"visibility": "hidden"}} className="fa fa-map-marker pull-left"></i>  Soundaryanagar, Sidedahalli,<br/>
                                                    <i className="fa fa-map-marker pull-left" style={{"visibility": "hidden"}}></i> Nagasandra Post, Bangalore-560073<br/>
                                                    <i className="fa fa-phone"></i>080-28391115 / +91 9740420115&nbsp;<br/>
                                                    <i className="fa fa-envelope"></i><a href="#">soundaryacentralschool@gmail.com</a>  
                                                    </span>
                                                    
                                                </span>
                                            </p>                           
                                        </div> 
                                           
                                </div>  
                                <div className="footer-col col-md-2 col-sm-3 contact">
                                    <p>&nbsp;</p>
                                    <div className="row text-right">
                                        <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1505979470/lms-jas_pwafdo.jpg" style={{"max-width":"100%","max-height":"141px"}}/>
                                    </div> 
                                        
                                </div>  
                                </div>   
                            </div>        
                        </div>

                        <div className="bottom-bar">
                        <div className="container">
                            <div className="row">
                                <small className="copyright col-md-6 col-sm-12 col-xs-12">Copyright @ 2017. All Rights Reserved.</small>
                                <div className="col-md-6 col-sm-12 col-xs-12 pull-right" style={{"margin-top":"8px"}}><small className="pull-right">Designed by <a style={{color:"#FFF"}} href="http://zenopsys.com/">Zenopsys technologies</a></small></div>
                                
                            </div>
                        </div>
                    </div>
                        
                 </footer>
        )
    }
}