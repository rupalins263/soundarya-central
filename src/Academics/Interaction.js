import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Interaction extends Component{
    render(){
        return(
          <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Interaction Training</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Interaction Training</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">

                    <div className="welcome col-md-12 col-sm-12" style={{marginBottom:50}}>
                            <article className="welcome col-md-6 col-sm-12" style={{marginTop:30}}>                         
                                                
                            
                            <h2 className="title" >Parent – Teacher Meeting</h2>
                        <blockquote className="custom-quote">
                                <p>We have always believed interaction with parents regularly helps to encourage and accelerate the child’s progress in our school system. We work in tendon with parents so that there is proper co-ordination between the teachers and the parents. In view of this parent-teacher meetings are held in a month. Parents have the unique opportunity to discuss personally the progress of children.</p>
                            </blockquote>
                            </article>
                            <article className="welcome col-md-6 col-sm-12" style={{"text-align": "center"}}>                         
                                <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1511348415/Parent_Teacher_meeting_1_axy6yk.jpg"  style={{width:"70%",height:200,marginTop:40}}    />           
                                <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1511349964/Parent_Teacher_meeting_2_bepfv3.jpg"  style={{width:"70%",height:200,marginTop:40}}    />           
                        
                        </article>
                   </div>
                    <div className="welcome col-md-12 col-sm-12" style={{marginBottom:50}}>
                            <article className="welcome col-md-6 col-sm-12">                         
                                   
                            <h2 className="title" style={{"margin-top": "30px"}}>Teacher’s Workshop</h2>
                        <blockquote className="custom-quote">
                                <b>“ A society is known by the way it takes care of its teachers.”</b>
                                <p>Not only do teachers produce responsible citizens of tomorrow, but they also weave the moral fabric our children will be enveloped in for life.</p>
                                <p>The in -service training helps the teachers to make their class room teaching interesting and also helps to keep themselves abreast of the latest changes in the curriculum. The professional development programmes have enabled them to elevate the children to a higher plane of learning and critical thinking.</p>
                                <p>The school is committed to increasing its teacher development programme, both academic and Non-academic. Orientation workshops by CBSE empanelled agencies are regular features.</p>
                            </blockquote>
                        </article>
                            <article className="welcome col-md-6 col-sm-12" style={{"text-align": "center"}}>
                                               
                                <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1511350213/Teacher_traning_program_1_bfttou.jpg"  style={{width:"70%",height:200,marginTop:40}}    />           
                                  <img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1511350223/Teacher_traning_program_2_hgkcn1.jpg"  style={{width:"70%",height:200,marginTop:40}}    />           
                             
                           </article>
                   </div>
                  
                   <div className="welcome col-md-12 col-sm-12" style={{marginBottom:50}}>
                    <article className="welcome col-md-12 col-sm-12">                         
                                         
                    <h3 className="title" style={{"margin-top": "30px"}}>Orientation Programme</h3>
                   <blockquote className="custom-quote">
                        <ul className="list-roman">
                            <li>The management of Soundarya Central School, Bangalore has organized two orientation programme for its teachers to provide training regarding continuous and comprehensive evaluation and professional development.The details are as follows:
                                <ul className="list-number">
                                    <li>First training was conducted on 16th &amp; 17thJune 2014 by learning Links Foundation,# 21,Brigade Square,2ndFloor,CambridgeRoad,Ulsoor,Bangalore.</li>
                                    <li>The Resource person was Mrs. Ritu Bhatia.She enlightened our teachers on various modules such as
                                        <ul className="list-roman-lower">
                                            <li>Meaning &amp; Understanding CCE</li>
                                            <li>Formative assessment tools and techniques.</li>
                                        </ul>
                                    </li>
                                    <li>Subject specific Techniques in formative Assessment and integrated curriculum planning.</li>
                                    <li>Summative Assessment features &amp; Tools</li>
                                    <li>Tools used in formative Assessment.</li>
                                    <li>Implications of Co-Scholastic</li>
                                    <li>Documenting and Record keeping</li>
                                </ul>
                            </li>
                            <li>2ND TRAINING PROGRAMME was organized on 13th and 14th October 2014 in our school premises. The session was conducted by NIIT LTD., an empanelled agency of CBSE, Delhi. The resource person was Mr. Antony Francis Sajan. The training program was on Capacity Building Program on Co-Scholastic Aspects of CCE. He covered comprehensively the tools and techniques of conducting and assessment of Co-Scholastic areas such as Life Skills, Attitudes and values, Physical and Health education, Co-curricular activities.</li>
                        </ul>
                        <p>The session was an eye-opener for teachers .The management is looking forward to organize more sessions for teacher’s empowerment and implementing CCE in its true spirit for the overall development of children.</p>
                    </blockquote>
                     </article>
                    </div>
                    <section className="widget" style={{marginTop:30,paddingLeft:80}}>
                        <h3 className="title">Contact</h3>
                        <p><b>Soundarya Central School</b><br/>Soundaryanagar, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                        <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
                        <p className="email"><i className="fa fa-envelope"></i> <a href="mailto:soundaryacentralschool@gmail.com">soundaryacentralschool@gmail.com</a></p>
                    </section>
                   
               
                {/*<aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                               <li><i className="fa fa-caret-right"></i><a href="/Facilities">Facilities</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/Mission">Mission</a></li>
									<li><i className="fa fa-caret-right"></i><a href="/Infrastructure">Infrastructure</a></li> 
                        </ul>
                    </section>

                    <section className="widget">
                        <h3 className="title">Contact</h3>
                        <p><b>Soundarya Central School</b><br/>Soundaryanagar, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                        <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
                        <p className="email"><i className="fa fa-envelope"></i> <a href="#">soundaryacentralschool@gmail.com</a></p>
                    </section>
                </aside>*/}
            </div>
        </div>
    </div>
</div>
        )
    }
}