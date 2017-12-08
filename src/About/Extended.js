import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class Extended extends Component{
    render(){
        return(
    <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Extended Learning</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Extended Learning</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">                         
                   <p><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359874/Extended_Learning_xcukl0.jpg" alt=""/></p>
                     <center>Extended learning to enhance Concept Understanding to the optimum.
                    </center>
                    
                    <h3 className="title" style={{"margin-top": "30px"}}>Mindspark</h3>
                   <blockquote className="custom-quote">
                        <b>“Every brilliant idea starts with a spark”</b>
                        <p>Mindspark is a computer based self-learning programme that helps the child improve her skills in Maths. The interactive interface ensures that the student is not learning passively by listening to someone, or viewing ready-made solutions, but learning by answering questions of progressively increasing complexity levels.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>Tata Edge Class</h3>
                   <blockquote className="custom-quote">
                        <b>“Transforming mode of teaching through the power of technology“</b>
                        <p>Tata Class Edge is an integrated learning solution for schools, designed to help teachers deliver high quality instruction with an effective blend of classroom activities and interactive multimedia.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>Curiositi</h3>
                   <blockquote className="custom-quote">
                        <b>“Explore SCIENCE with CURIOSITI”</b>
                        <p>Simple kits provided by an external agency- Curiosity Ltd has helped students to understand science in our everyday life.</p>
                    </blockquote>
                   
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                                <li><i className="fa fa-caret-right"></i><a href="/#/About">About Us</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/#/About#mission">Mission</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/#/About#vision">Vision</a></li>
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