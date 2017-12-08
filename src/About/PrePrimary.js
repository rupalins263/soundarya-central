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
								<ol className="carousel-indicators">
									<li data-target="#myCarousel" data-slide-to="0" className=""></li>
									<li data-target="#myCarousel" data-slide-to="1" className="active"></li>
									<li data-target="#myCarousel" data-slide-to="2" className=""></li>
									<li data-target="#myCarousel" data-slide-to="3" className=""></li>
									{/*<li data-target="#myCarousel" data-slide-to="4" className=""></li>
									<li data-target="#myCarousel" data-slide-to="5" className=""></li>
									<li data-target="#myCarousel" data-slide-to="6" className=""></li>
									<li data-target="#myCarousel" data-slide-to="7" className=""></li>
									<li data-target="#myCarousel" data-slide-to="8" className=""></li>*/}
									</ol><div className="carousel-inner">
											<div className="item  active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511356358/9L2A4979_evqwvo.jpg" alt=""/></div>
										<div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511356359/9L2A5163_coslou.jpg" alt=""/></div>
							
										<div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511356358/9L2A5158_czo2ux.jpg" alt=""/></div>
							
										<div className="item  "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511356360/9L2A5198_pysnaz.jpg" alt=""/></div>
									</div>
										<a className="left carousel-control" href="#myCarousel" data-slide="prev">
											<span className="glyphicon glyphicon-chevron-left"></span>
											<span className="sr-only">Previous</span></a>
											<a className="right carousel-control" href="#myCarousel" data-slide="next">
												<span className="glyphicon glyphicon-chevron-right"></span>
												<span className="sr-only">Next</span></a>
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
						<h2 className="title" style={{"margin-top": "30px"}}> <strong>Exercise of practical life:</strong></h2>
						   <p><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511355864/Practical_Life_sdfinb.jpg" alt=""/></p>   
						<blockquote className="custom-quote">
							<p>With the use of child-size materials, children learn everyday skills that enhance motor control, hand-eye coordination and  co-ordination of movements large and small.   This group of activities helps the child grow in independence in terms of taking care of oneself, his environment and social behavior.  Concentration is a natural consequence of these activities as the child chooses an activity, gets involved in performing it and repeating it.  Specific social behavior activities are introduced to the child like saying Namaste, offering things, how to cough/sneeze, talking softly, etc.</p>
						</blockquote>
						<h2 className="title" style={{"margin-top": "30px"}}><strong>Sensorial:</strong></h2>
						   <p><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511355865/Sensorial_k8jfkg.jpg" alt=""/></p>   
						<blockquote className="custom-quote">
							<p>This group of activities is performed using the senses which are the gateways of intelligence.  The senses such as vision, hearing, touch, smell, taste, kinesthetic etc are used to perform these activities.  These activities indirectly prepare the child for reading and writing.</p>
						</blockquote>
						<h2 className="title" style={{"margin-top": "30px"}}><strong>Language:</strong></h2>
						   <p><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511355864/Language_nax3i6.jpg" alt=""/></p>   
						<blockquote className="custom-quote">
							<p>Language is offered based on phonetics.  Child is offered many activities orally to enrich his vocabulary quantitatively and qualitatively and materials like the sandpaper letters or movable alphabets help the child work with sounds.  Grammar activities are also offered with material and orally. </p>
							<p>Stories, rhymes, and conversations help improve the child’s speaking and listening skills.</p>
						</blockquote>
						<h2 className="title" style={{"margin-top": "30px"}}><strong>Arithmetic:</strong></h2>
						   <p><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511355864/Arthametic_p0119s.jpg" alt=""/></p>   
						<blockquote className="custom-quote">
							<p>Activities for numbers 1 to 10 which include counting, recognition of numbers, and quantities are offered to lay a strong foundation in arithmetic.  Decimal system of numeration is offered through materials which help the child understand place value with the associated quantity.  Arithmetic operations like addition, subtraction, multiplication and division are offered through material in the later stages around the age of 5 years.</p>
							<p>More items of human culture such as geography, science, botany, zoology etc are offered through activities at their level of understanding.  Conversation skills are developed through nature walk.  Children are involved in many activities like sowing, watering, weeding, etc.  Life cycle of a butterfly, frog etc are explained and shown to the child.   Children work with the globe, continents, land and water forms, map puzzles etc.  Many simple science experiments like magnet, magnifying glass, sink and float, air experiments are among the science activities shown to the child.</p>
						</blockquote>
					</div>
                </article>                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
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