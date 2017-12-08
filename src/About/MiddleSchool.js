import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class MiddleSchool extends Component{
    render(){
        return(

               <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Middle School</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Middle School</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">                         
                     
                   <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                <li data-target="#myCarousel" data-slide-to="4" className=""></li>
                <li data-target="#myCarousel" data-slide-to="5" className=""></li>

               
                </ol><div className="carousel-inner">
                         <div className="item  active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7802_-_Copy_oclvnu.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7846_e3tizt.jpg" alt=""/></div>
                
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7873_k4ujby.jpg" alt=""/></div>
                
                            <div className="item  "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7940_xnddgg.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359499/9L2A8016_rbzpr9.jpg" alt=""/></div>
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359497/DSC06559_jqdnna.jpg" alt=""/></div>
                             </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span></a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span></a>
                            </div>           
                    <h3 className="title" style={{"margin-top": "30px"}}>Curriculum (VI - VIII)</h3>                   
                   <blockquote className="custom-quote">
                        <p>Children need to become self- reliant and independent learners as they go into middle school. The process of transition begins from Class V onwards. Teachers use methods like peer group learning, co-operative learning, project methods and other different media like theatre and newspapers to facilitate learning. Rote learning is not encouraged. Children are instead trained in various study skills by the respective subject teachers and this helps them learn and understand better. From Class VII onwards, children are slowly trained to handle larger portions to make their transition to high school easier.</p>

						<p>In Middle school the curriculum of all the academic subjects as well as a variety of co-curricular activities encourages creativity, aesthetics and adventure. All students study English, Kannada,Hindi, Mathematics, Science (Physics, Chemistry and Biology), Social Studies (History, Civics and Geography) and Co-curricular activities include Socially Useful &amp; Productive Work (Art, Music, Dance, , Science Club, Social Club, Literary Club), Physical and Health Education and Computer Education.</p>
					</blockquote>
                   <h3 className="title" style={{"margin-top": "30px"}}>Assessment &amp; Evaluation</h3>
                   <blockquote className="custom-quote">

						<p>The school has implemented the scheme of Continuous and Comprehensive Evaluation (C.C.E.) The C.C.E. scheme envisages that every learner is to be evaluated over the entire period of learning schedule rather than a one-slot three hour examination at the end of a course of learning.</p>
                        <p>There are going to be two types of Assessments :- Formative &amp; Summative. The formative assessments in each semester will comprise of tests, activities, oral assessments, quizzes, debates, projects, etc These assessments are to be carried out to provide continuous feedback to both the teachers and the learners to take decisions regarding appropriate modifications in the transactional procedures and learning activities.</p>
                        <p>The summative assessment which is a pen and paper examination carried out at the end of each Semester, measures or 'sums up' how much a student has learnt from the prescribed course. Evaluation of the Scholastic Aspect will be conducted according to the C.B.S.E. guidelines which are tabulated below:</p>
                        <center><img alt="" src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506077225/tablemiddle_wkd9ut.jpg" style={{"width": "450px","height": "323px"}}/></center>
                        <p>C.B.S.E through C.C.E. is aiming at a system of evaluation which does not just mean measurement of the level of learning outcomes but more over an approach for further improving the system. It needs to be diagnostic and formative in nature to provide remedial help to the students. We hope that with the cooperation and support of the parents, we shall be able to make a success of this system which is a path-breaking initiative taken by the C.B.S.E. to aspire holistic development of the students in a conducive environment.</p>
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