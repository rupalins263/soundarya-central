import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class Primary extends Component{
    render(){
        return(
           
    <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Primary</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Primary</li>
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
                            <div className="item  active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511358927/DSC06956_rcuz4r.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511358927/DSC06934_vjyr0c.jpg" alt=""/></div>
                
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511358928/9L2A8321_mlrle1.jpg" alt=""/></div>
                
                            <div className="item  "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511358929/9L2A8320_mv9rju.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511358928/9L2A8253_wysqlx.jpg" alt=""/></div>
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511358929/9L2A8161_m53wqj.jpg" alt=""/></div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span></a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span></a>
                            </div>           
                    
                    <h3 className="title" style={{"margin-top": "30px"}}>Curriculum (Grade I to V)</h3>                   
                   <blockquote className="custom-quote">
                        <b>‘The mind is not  a vessel to be filled, but a fire to be kindled’</b>
                        <p>The above quote is the guiding principle of the work, that is done at the primary level ( I to V) of Soundarya Central School. The curriculum is based on the NCERT frame work as per CBSE. The medium of instruction is English.</p>

						<p>The syllabus becomes more broad based at this level and gradually the young learner is exposed to a wide range of subjects and study material which is suitably graded in accordance with the CCE.. Apart from Maths, English, Kannada, Hindi, E.V.S. and Computer Education subjects like General Knowledge are also taught. As early as class I, students learn to work on computers in the Multimedia Lab which has been especially equipped to meet the needs of the young learners. A plethora of choices are given to the students for their Work Experience classes ranging from pottery to public speaking, cookery to clay modelling. Last but not the least, in order to inculcate moral values and general awareness of the students, inter-active sessions are held in the Life Skills classes.The teaching of all the subjects is done using the TATA Class Edge Smart boards. This makes learning a joyful experience for students.</p>
					</blockquote>
                   <h3 className="title" style={{"margin-top": "30px"}}>Assessment &amp; Evaluation</h3>
                   <blockquote className="custom-quote">

						<p>Assessment system is designed in a manner that is stress-free for the child. Continuous assessment considers the child’s performance throughout the academic year in the following areas:</p>
                        <p>Written class work, Home assignments, unit tests, worksheets, planned activities, hands-on activities on science topics and class room discussions.</p>
                        <p>Grades based on continuous assessments are entered in the assessment report for skills in languages, number work, environmental studies, science, social science, computers, art &amp; craft, games and physical education. 5 point rating scale has been formulated to assess skills in various subjects. Skills in languages include reading, writing, speaking and listening. Subjects like maths and science include concept development too. Skill assessment is continuous and is reported twice in a year.</p>
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