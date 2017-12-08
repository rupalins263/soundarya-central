import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class CodeOfConduct extends Component{
    render(){
        return(
            <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Code Of Conduct</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Code Of Conduct</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">                         
                    
	                 
                    
                    <h3 className="title" style={{"margin-top": "30px"}}>Students</h3>                   
                   <blockquote className="custom-quote">
                        <p>To aim at the standards set by SCS we expect the highest order of discipline and conduct from our students. The student is responsible for behaving in a manner that does not interfere with the rights of others.</p>

						<ul className="icons-list star">
                            <li>Abiding by the rules and regulations, guidelines and expectations established by the school.</li>
                            <li>Attending school regularly and punctually.</li>
                            <li>Adhering to the principles of respect, responsibility, integrity and performance.</li>
                            <li>In the event of the student breaking the rules of conduct, the disciplinary committee will issue a warming or censure, which may lead to suspension or dismissal from school.</li>
                        </ul>
					</blockquote>
                   <h3 className="title" style={{"margin-top": "30px"}}>Parents &amp; Guardian</h3>
                   <blockquote className="custom-quote">

						<p>Children and their future are a common cause and goal for parents and SCS. The vision and mission of SCS cannot met without the co-operation of parents. The parent is responsible for:</p>
                        <ul className="icons-list star">
                            <li>Making sure the student attends school daily and on time, properly attired in full uniform and equipped for effective learning.</li>
                            <li>Co-operating with school authorities regarding matter of discipline.</li>
                            <li>Reading and reviewing school expectations, guidelines, rules and regulations.</li>
                            <li>Supervising and ensuring the completion of homework and other assignments and for providing an appropriate environment of learning at home.</li>
                            <li>Promoting healthy lifestyles of their children.</li>
                            <li>Expect decent dress code for parents during school visit.</li>
                        </ul> 
                        <p>We look forward to your extreme co-operation in our mission.</p>
                                           </blockquote>
                    
                    
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
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