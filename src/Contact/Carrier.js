import React,{Component} from 'react';
import './Contact.css';

export default class Carrier extends Component{
    render(){
        return(
           
           <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">New Vacancies</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Careers</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <div className="jobs-wrapper col-md-8 col-sm-7">  

                    <img  style={{width:"100%"}} src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506077424/Recruitment_b0dzjc.jpg"/><br/><br/>

                    <img   style={{width:"100%"}} src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506077467/careers_wpwrwl.jpg"/><br/>
                    
                    
                                                         
                </div>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                    
                    <section className="widget">
                    <h3 className="title">Contact</h3>
                    <p><b>Soundarya Central School</b><br/>Soundaryanagar, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                    <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
                    <p className="email"><i className="fa fa-envelope"></i> <a href="mailto:soundaryacentralschool@gmail.com">soundaryacentralschool@gmail.com</a></p>
                    </section>
                </aside>
            </div>
        </div>
    </div>
</div>
        )
    }
}