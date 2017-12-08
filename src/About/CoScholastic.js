import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class CoScholastic extends Component{
    render(){
        return(
<div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Co Curricular Activities</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Co Scholastic</li>
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
                <li data-target="#myCarousel" data-slide-to="6" className=""></li>
               
                </ol><div className="carousel-inner">
                         <div className="item  active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359967/next_to_15_o6vqgj_fail6m.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359965/Horse_riding_qlpthk.jpg" alt=""/></div>
                
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359964/DSC07159_bmosmq.jpg" alt=""/></div>
                
                            <div className="item  "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359964/DSC07133_wfb3ql.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359964/DSC07097_xxkztc.jpg" alt=""/></div>
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359964/Creative_Art_rbufo1.jpg" alt=""/></div>
                            <div className="item"><img src=" http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359964/9L2A7795_jqvbtp.jpg" alt=""/></div>
                           
                             </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span></a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span></a>
                            </div>   

                        <p>Pedagogy in the classroom is not a staid and insipid event in Soundarya Central School due to innovative activities which alive the process of learning. Success in school as in life depends on multiplicity of factors- social and emotional intelligence, self understanding, self control, assertiveness, decision making, empathy, and connection to community. Overall activities are carefully designed to bring out the innate potential of every individual student.
                    </p>
                    
                    <h3 className="title" style={{"margin-top":"30px"}}>Creative Art:</h3>

                   <blockquote className="custom-quote">
                        <b>“Art and music stimulates a totally different part of the students intellect and imagination”</b>
                        <p>Art is an expressive medium of communicating creativity to allow free expression of ideas. Children are introduced to drawing and painting at a very early age. To enhance eye-hand coordination and five muscle coordination activities like clay modeling. Origami, craft and shading with colours are introduced in the primary level.</p>
					</blockquote>
                   <h3 className="title" style={{"margin-top": "30px"}}>Music</h3>
                   <blockquote className="custom-quote">

						<p>Music is an integral part of our curriculum. Children are introduced to classical music as well as songs of various language , seasons and festivals are also taught.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>Dance</h3>
                   <blockquote className="custom-quote">

                        <p>Dance is a type of art that generally involves movement of the body often rhythmic and to music. Dance is introduced to help children develop a sense of rhythm to various beats of music.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>Literary Club</h3>
                   <blockquote className="custom-quote">

                        <p>The Literature Club engages the students to improve and focus on language- both oral and written which make children aware of the functional, formal and spoken language and their differences. Each module has specific language tasks and related activities. For example, under oral the module contains announcements, speech, lectures, news and conversation.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>Shloka Chanting</h3>
                   <blockquote className="custom-quote">

                        <p>Shlokas or Sanskrit verses are good indicators of Indian culture and values. Shloka chanting helps in better pronunciation of letters and words, thereby influencing the respective mother tongue that improves memory and concentration.</p>
                        <p>Children learn more about their culture through various stotras and about values through subhashitas.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>Science Club</h3>
                   <blockquote className="custom-quote">

                        <p>The excitement of doing science comes from pursuing the unknown .Working in the lab gives students an opportunity to explore beyond their text books to satisfy their inquisitive nature and kindle scientific temper in them. Conceptual understanding is complete when students experience what they learn.</p>
                        <p>The school is well equipped with Physics, Chemistry and Biology Labs, which cater to the National Curriculum Framework. Learning science concepts, with simple kits provided by an external agency - Curiosity Ltd has helped students to understand science in our everyday life.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>The Math Club</h3>
                   <blockquote className="custom-quote">

                        <p>The Math lab activities reinforce concepts learnt in classroom. Mindspark is a computer based self-learning programme that helps the child improve his/her skills in Mathematics and implemented in middle school. A key advantage of Mind spark is the fact that successfully harnesses the power of new technologies to bolster learning. An intelligent computer system uses a complex adaptive logic to decide what problem to serve up to a student, based on the response to the current problem and previous. The student not only learns at his or her pace but is allowed to clear doubts with the help of explanations where needed.</p>
                    </blockquote>
                    <h3 className="title" style={{"margin-top": "30px"}}>House system</h3>
                   <blockquote className="custom-quote">

                        <p>The House system is an integral part of public schools.Students are grouped into houses namely Isaac Newton, Albert Einstein, C.V Raman, Thomas Alwa Edison to encourage greater participation in sports, cultural and other activities. Belonging to a particular house generates teamwork, leadership, camaraderie, motivation, enthusiasm and a healthy spirit of competition in the students. Students will be allotted different school Houses from Pre KG onward which comes under House Master who are directly responsible for the discipline and general well-being of the members of the House.Leader of the house is elected by members of the house.</p>
                        <p>Regular Inter-House competitions are held throughout the year in various co-curricular and extra-curricular activities which foster healthy competitive spirit, keep the house flag aloft and win the coveted House trophy.</p>
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