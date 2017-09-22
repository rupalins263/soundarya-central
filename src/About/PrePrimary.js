import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class Primary extends Component{
    render(){
        return(
      <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Montessori</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Pre Primary</li>
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
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506074815/mont1_xuinlj.jpg" alt=""/>
								</div>
								<div className="item active">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506074851/mont2_ffsqhk.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506074887/mont3_mnxvzg.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506074918/mont4_ql5xxx.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075029/mont5_gdywn5.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075059/mont6_i7llsd.jpg" alt=""/>
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
							<p>The Montessori method of education was developed by Dr. Maria Montessori.  It is a child-centered educational approach based on scientific observations of children from birth to six years.  Dr. Montessori’s method has been successful for over 100 years in diverse cultures throughout the world.  Madam Montessori discovered that education was not something which the teacher does, but that it was a natural process which develops spontaneously in the human being. It is not acquired by listening to words, but in virtue of experiences in which the child acts on his environment.</p>
							<p>The teacher also called the adult of the classroom carefully prepares the classroom environment.  She then directs the activity of the classroom, but it is the child who learns. Dr. Montessori observed that children are motivated through the work itself and that children, like adults, learn best by doing rather than being filled with facts. The use of Montessori materials fosters concentration, coordination, determination, a sense of order, independence, self-discipline and problem-solving skills, further when these are established in early childhood lead to successful and confident learning later in life. In Montessori classrooms, children learn how to observe, think, and evaluate and experience the joy of learning.  Through this, the child develops intelligence as well as physical and psychological abilities.  It is a different way of learning which is designed to prepare children for success in the complex world.  Independence, freedom within limits and respect for the child are the core of Montessori method.</p>
							<p>Children in the age group of 2-1/2 to 6 learn through sensory-motor activities, working with materials that help them develop cognitive powers through experience of seeing, touching, hearing, smelling, tasting and movement.</p>
							<p>The various groups of activities are:</p>
						</blockquote>
						<h3 className="title" style={{"margin-top": "30px"}}> <strong>Exercise of practical life:</strong></h3>
						<blockquote className="custom-quote">
							<p>With the use of child-size materials, children learn everyday skills that enhance motor control, hand-eye coordination and  co-ordination of movements large and small.   This group of activities helps the child grow in independence in terms of taking care of oneself, his environment and social behavior.  Concentration is a natural consequence of these activities as the child chooses an activity, gets involved in performing it and repeating it.  Specific social behavior activities are introduced to the child like saying Namaste, offering things, how to cough/sneeze, talking softly, etc.</p>
						</blockquote>
						<h3 className="title" style={{"margin-top": "30px"}}><strong>Sensorial:</strong></h3>
						<blockquote className="custom-quote">
							<p>This group of activities is performed using the senses which are the gateways of intelligence.  The senses such as vision, hearing, touch, smell, taste, kinesthetic etc are used to perform these activities.  These activities indirectly prepare the child for reading and writing.</p>
						</blockquote>
						<h3 className="title" style={{"margin-top": "30px"}}><strong>Language:</strong></h3>
						<blockquote className="custom-quote">
							<p>Language is offered based on phonetics.  Child is offered many activities orally to enrich his vocabulary quantitatively and qualitatively and materials like the sandpaper letters or movable alphabets help the child work with sounds.  Grammar activities are also offered with material and orally. </p>
							<p>Stories, rhymes, and conversations help improve the child’s speaking and listening skills.</p>
						</blockquote>
						<h3 className="title" style={{"margin-top": "30px"}}><strong>Arithmetic:</strong></h3>
						<blockquote className="custom-quote">
							<p>Activities for numbers 1 to 10 which include counting, recognition of numbers, and quantities are offered to lay a strong foundation in arithmetic.  Decimal system of numeration is offered through materials which help the child understand place value with the associated quantity.  Arithmetic operations like addition, subtraction, multiplication and division are offered through material in the later stages around the age of 5 years.</p>
							<p>More items of human culture such as geography, science, botany, zoology etc are offered through activities at their level of understanding.  Conversation skills are developed through nature walk.  Children are involved in many activities like sowing, watering, weeding, etc.  Life cycle of a butterfly, frog etc are explained and shown to the child.   Children work with the globe, continents, land and water forms, map puzzles etc.  Many simple science experiments like magnet, magnifying glass, sink and float, air experiments are among the science activities shown to the child.</p>
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
			<div className="row page-row">
				<div className="col-md-8">
					<h1 className="title">Kindergarten</h1>
				</div>
				<article className="welcome col-md-8 col-sm-7">
					<div className="col-md-12" style={{"padding":"0"}}>
						<div id="myCarousel2" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075099/kind-1_pairs8.jpg" alt=""/>
								</div>
								<div className="item active">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075138/kind-2_vdkeou.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075168/kind-3_nbs2s5.jpg" alt=""/>
								</div>
								<div className="item">
									<img src="https://res.cloudinary.com/dvl9i5pry/image/upload/v1506075199/kind-4_cjpqwi.jpg" alt=""/>
								</div>
							</div>
							<a className="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">
								<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a className="right carousel-control" href="#myCarousel2" role="button" data-slide="next">
								<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span className="sr-only">Next</span>
							</a>
						</div>
					</div>
					<div className="col-md-12" style={{"padding":"0"}}>
						<blockquote className="custom-quote">
							<p>The Kindergarten consists of Junior Kg and Senior Kg.  The curriculum aims at the holistic development of the child in a child-centric environment where the child feels happy, safe and secure and it caters to the needs of the early years of learning.</p>
							<p>Language through phonetics, basic arithmetic concepts, activities for gross and fine motor skills, physical fitness, social skills, emotional literacy, good habits, values are all part of the Kindergarten curriculum. Kannada language is introduced in the Senior Kg.</p>
							<p>Free hand drawing, colouring, painting and craft activities are done on a weekly basis.  Stories, rhymes, songs, conversations and puppet shows are all aimed at equipping the child with a good vocabulary which is both qualitative and quantitative.  Listening skills, speaking skills, comprehension are enhanced through various activities.  Our focus is helping the child become an articulate, confident, independent and responsible member in the society.</p>
							<p> The school year is divided into two semesters for the Kindergarten.  Assessments with a very diagnostic purpose are conducted throughout the year in the form of written and oral worksheet assessment and group activities.  Cognitive, motor, social, emotional, and physical developments are recorded through close observation by the teacher.  Regular parent-teacher meetings ensure open communication.   </p>
						</blockquote>
					</div>
				</article>
			</div>
        </div>
    </div> 
</div>
            )
                           
                           
         }
    }