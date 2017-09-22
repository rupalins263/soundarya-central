import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class Kider extends Component{
    render(){
        return(
      <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Kindergarten</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Kindergarten</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">
                    <div className="col-md-12" style={{"padding":"0"}}>
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075029/mont5_gdywn5.jpg" alt=""/>
								</div>
								<div className="item active">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075059/mont6_i7llsd.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506074887/mont3_mnxvzg.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075029/mont5_gdywn5.jpg" alt=""/>
								</div>
								<div className="item ">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075059/mont6_i7llsd.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506074887/mont3_mnxvzg.jpg" alt=""/>
								</div>
							</div>
							<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
								<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
								<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>
					<div className="col-md-12" style={{"padding":"0"}}>
						<h3 className="quote" style={{"font-style":"italic","margin": "20px 0 10px"}}><i className="fa fa-quote-left"></i>  The goal of early childhood education should be to activate the child’s natural desire to learn. <i className="fa fa-quote-right"></i></h3>
						<h3 className="title text-right">– Dr. Maria Montessori</h3>
						<blockquote className="custom-quote">
							<p>The Kindergarten consists of Junior Kg and Senior Kg. The curriculum aims at the holistic development of the child in a child-centric environment where the child feels happy, safe and secure and it caters to the needs of the early years of learning</p>
							<p>Language through phonetics, basic arithmetic concepts, activities for gross and fine motor skills, physical fitness, social skills, emotional literacy, good habits, values are all part of the Kindergarten curriculum. Kannada language is introduced in the Senior Kg.</p>
							<p>Free hand drawing, colouring, painting and craft activities are done on a weekly basis. Stories, rhymes, songs, conversations and puppet shows are all aimed at equipping the child with a good vocabulary which is both qualitative and quantitative. Listening skills, speaking skills, comprehension are enhanced through various activities. Our focus is helping the child become an articulate, confident, independent and responsible member in the society</p>
							<p>The school year is divided into two semesters for the Kindergarten. Assessments with a very diagnostic purpose are conducted throughout the year in the form of written and oral worksheet assessment and group activities. Cognitive, motor, social, emotional, and physical developments are recorded through close observation by the teacher. Regular parent-teacher meetings ensure open communication</p>
						</blockquote>
						
					</div>
                </article>                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                                <li><i className="fa fa-caret-right"></i><a href="/About">About Us</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/About">Mission</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/About">Vision</a></li>
                        </ul>
                    </section>> 

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