import React,{Component} from 'react';
import './Nav.css';
class Nav extends Component{

    render(){
        return(
        <div>
         <header className="header">  
            <div className="top-bar">
                <div className="container" style={{"text-align":"right"}}>              
                    <div className="pull-left other-branch"><p>Affiliation No : 830587</p></div>
                    {/*<div className="other-branch"><a href="/PrePrimary">MONTESSORI</a></div>
                    <div className="other-branch"><a href="/Kider">KINDERGARTEN</a></div>*/}
                    <div className="other-branch"><a href="http://school.soundaryainstitutions.in">SOUNDARYA SCHOOL</a></div>     
                    <div className="other-branch"><a href="http://puc.soundaryainstitutions.in">SOUNDARYA PU COLLEGE</a></div>
                    <div className="other-branch"><a href="http://sims.soundaryainstitutions.in">SIMS</a></div>
                    <div className="other-branch"><a href="#">|</a></div>
                    <div className="other-branch"><a href="#" style={{"color":"#666"}}>Social Connect</a></div>
                    <div className="other-branch"><a href="https://www.facebook.com/Soundarya-Central-School" target="_blank"><i className="fa fa-facebook"></i></a></div>
                    <div className="other-branch"><a href="https://www.facebook.com/Soundarya-Central-School" target="_blank"><i className="fa fa-linkedin"></i></a></div>
                    <div className="other-branch"><a href="https://www.facebook.com/Soundarya-Central-School" target="_blank"><i className="fa fa-google-plus"></i></a></div>
                     
                </div>      
            </div>
            <div className="header-main container">
                <h1 className="logo col-md-7 col-sm-6">
                    <a href="/" style={{"text-decoration": "none"}}>
                        <img id="logo" src="http://res.cloudinary.com/dzrelou7q/image/upload/v1503155295/Logo_dts0t4.jpg" alt="soundarya-central-Logo"/>
                        <h1 style={{"display":"inline-block","margin-top":"8%","font-size":"30px"}}>Soundarya Central School</h1>
                    </a>
                </h1>     
                <div className="info col-md-5 col-sm-6">
                    <ul className="menu-top navbar-right hidden-xs" style={{"display":"none"}}>
                        <li><a href="#">Social Connect :</a></li>
                        <li><a href="https://www.facebook.com/Soundarya-Central-School" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.facebook.com/Soundarya-Central-School"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com/Soundarya-Central-School"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                    <div className="contact pull-right">
                        <p className="phone"><i className="fa fa-phone"></i>Call us today 080-28391115</p> <br/>
                        <p className="email"><i className="fa fa-envelope"></i><a href="mailto:soundaryacentralschool@gmail.com">soundaryacentralschool@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </header>
        <div className="container" style={{"padding-left":"30px","padding-right":"0px","margin-bottom":"30px"}} >
        <nav className="main-nav" role="navigation" style={{"margin-bottom":"5px"}}>
            <div className="container" >
                <div className="navbar-header">
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>      
                <div className="navbar-collapse collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav">                              
                        
        
            
        <li className="active nav-item"><a href="/">Home</a></li>
    
			
        
        <li className="nav-item"><a href="/#/About">About</a></li>
    
                        <li style={{"display":"none"}} className="nav-item" id="about"><a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="about.mako#group">About<i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">                                
                                
        
        <li className="nav-item"><a href="/#/About">About Soundaryans</a></li>
    
                                
        
        <li className="nav-item"><a href="/#/About">Vision and Mission</a></li>
    
    
       
                            </ul> 
                         </li>                             
                         <li className="nav-item dropdown" id="academics">
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Academics <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">

    
                                        
        <li className="menu-item dropdown dropdown-Ssubmenu">
           
             <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Scholastic</a>
              <ul className="dropdown-menu">
                    <li className="menu-item dropdown dropdown-Ssubmenu">
           
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Pre Primary</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/#/PrePrimary">Montessori</a></li>
                                <li className="nav-item"><a href="/#/Kider">Kindergarten</a></li>

                             </ul>
                        </li>
                <li className="nav-item"><a href="/#/Primary">Primary</a></li>
            
                                                
                
                <li className="nav-item"><a href="/#/MiddleSchool">Middle School</a></li>
                                        
                                        
                
     
                </ul>
         </li>
                                
        
        <li className="nav-item"><a href="/#/Extended">Extended Learning</a></li>
                   <li className="nav-item"><a href="/#/CoScholastic">Co Scholastic</a></li>
    

                            </ul>
                         </li>   
                         <li className="nav-item"><a href="/#/Admission">Admissions</a></li>
                        
                         <li className="nav-item dropdown" id="campus">
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Campus Life <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">
                                
        
        <li className="nav-item"><a href="/#/InfraStructure">Infrastructure</a></li>
    
                                
        
        <li className="nav-item"><a href="/#/Facilities">Facilities Offered</a></li>
        <li className="nav-item"><a href="/#/CodeOfConduct">Code of Conduct</a></li>
    
                            </ul>
                         </li> 
                         <li className="nav-item dropdown" id="facilitators">
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Facilitators <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">
                                
        
                                        <li className="nav-item"><a href="/#/Facilitator">Facilitators</a></li>
                                    
                                                                
                                        
                                        <li className="nav-item"><a href="/#/Interaction">Interaction Training</a></li>
                                    
                            </ul>
                         </li> 
                                                                                                                  
                        
        
        

                             <li className="nav-item dropdown" id="facilitators">
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Events <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">
                                
        
       {/*<li className="nav-item"><a href="/Celebrations">Celebrations</a></li>*/}
    
								
        
        <li className="nav-item"><a href="/#/Calender">Calendar</a></li>
    
								
        
        {/*<li className="nav-item"><a href="/Video">Videos</a></li>*/}
    
                            </ul>
                         </li> 

                         
                         
                        
        {/*<li className="nav-item"><a href="/Gallery">Gallery</a></li>*/}
                <li className="nav-item dropdown" id="facilitators">
                            <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#">Gallery <i className="fa fa-angle-down"></i></a>
                            <ul className="dropdown-menu">
                                
        
                                        <li className="nav-item"><a href="/#/Gallery">Photos</a></li>
                                    
                                                                
                                        
                                        <li className="nav-item"><a href="/#/Video">Videos</a></li>
                                    
                            </ul>
                         </li> 
        <li className="nav-item"><a href="/#/Downloads">Downloads</a></li>
    
                        
        
        <li className="nav-item"><a href="/#/Carrier">Careers</a></li>
    
						
        
        <li className="nav-item"><a href="/#/ContactUs">Contact Us</a></li>
                                                                            
                        </ul>
                </div>
            </div>
        </nav>
		</div>
  </div>
       )
    }
}


export default Nav;