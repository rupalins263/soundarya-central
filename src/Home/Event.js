import React,{Component} from 'react';
import './Home.css';
import axios from 'axios';
export default class Event extends Component{
    constructor(){
        super();
        this.state={
            events:[]
        }
    }
    componentWillMount(){
           axios.get(`http://198.12.154.44:3333/Central/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })
    }
    render()
    {


         let events="";
        if(this.state.events.length>0){
            events=this.state.events.map((item,index)=>{
                if(index<2){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                          var href=`/#/NewsSingle?id=${item.eventid}`;
                    return(
                        <div className="event-item">
                                        <p className="date-label">
                                            <span className="month">{month}</span>
                                            <span className="date-number">{day}</span>
                                        </p>
                                        <div className="details">
                                            <h2 className="title">
                                                <a href={href}>{item.eventname}</a>
                                            </h2>
                                            <p className="location"><i className="fa fa-map-marker"></i>Soundarya School</p>                            
                                        </div>
                                </div>
              
                                 )
                          }
                     
                        else{
                            return (<div></div>)

                            }
                
             
                           
            })
        }
        return(
    <div className="container" style={{marginTop:"50px",}}>
     <div className="row cols-wrapper">
                <div className="col-md-3">
			
                    <section className="events">
                        <h1 className="section-heading text-highlight"><span className="line">Events</span></h1>
                        <div className="section-content">
                              {events}
                            <a className="read-more"  style={{marginBottom:"30px"}}href="/Calender">All events<i className="fa fa-chevron-right"></i></a>
                        </div>
                    </section>

		    <section className="widget has-divider" style={{"background":"#FFF"}}>
                        <iframe width="280" height="310" src="https://www.youtube.com/embed/BQMYd0dIqhU" frameborder="0" allowfullscreen=""></iframe>
                    </section>
					
					<section className="widget has-divider" style={{"background":"#FFF","display":"none"}}>
					   <h1 className="section-heading text-highlight"><span className="line">Photo Gallery</span></h1>
					   
						<a className="prettyphoto col-md-6 bg-pad" rel="prettyPhoto[gallery]" title="Learning at Soundarya Central School" href="assets/images/gallery/gallery-1.jpg">                    
						<img className="img-responsive bg-img" src="assets/images/gallery/gallery-1.jpg" alt="central-schools-in-peenya"/>                                                                                                         
						</a>                        

						<a className="prettyphoto col-md-6 bg-pad" rel="prettyPhoto[gallery]" title="Activities at Soundarya Central School" href="assets/images/gallery/gallery-2.jpg">                    
						<img className="img-responsive bg-img" src="assets/images/gallery/gallery-2.jpg" alt="middle-school-near-Laggere"/>                                                                                                         
						</a>                        

						<a className="prettyphoto col-md-6 bg-pad" rel="prettyPhoto[gallery]" title="Horse Riding classNamees at Soundarya Central School" href="assets/images/gallery/gallery-12.jpg">                    
						<img className="img-responsive bg-img" src="assets/images/gallery/gallery-12.jpg" alt="cbse-schools"/>                                                                                                         
						</a>  
						
						<a className="prettyphoto col-md-6 bg-pad" rel="prettyPhoto[gallery]" title="Swimming classNamees at Soundarya Central School" href="assets/images/gallery/gallery-9.jpg">                    
						<img className="img-responsive bg-img" src="assets/images/gallery/gallery-9.jpg" alt="schools-near-Jalahalli"/>                                                                                                         
						</a>
						
						<a className="prettyphoto col-md-6 bg-pad" rel="prettyPhoto[gallery]" title="Kids play area" href="assets/images/gallery/gallery-14.jpg">                    
						<img className="img-responsive bg-img" src="assets/images/gallery/gallery-14.jpg" alt="best-schools-peenya"/>                                                                                                         
						</a>  
					   
						<a className="prettyphoto col-md-6 bg-pad" rel="prettyPhoto[gallery]" title="Lab Facilities at Soundarya Central School" href="assets/images/gallery/gallery-15.jpg">                    
						<img className="img-responsive bg-img" src="assets/images/gallery/gallery-15.jpg" alt="best-school"/>                                                                                                         
						</a>                                                    
					
					</section>
                </div>
                <div className="col-md-5 text-justify">						
					<p style={{"font-size":"14px"}}>True education does not limit itself to grades and marks; instead it builds the confidence in the child to embark on a never ending journey of enquiry. Education equips a child to become a world citizen whose horizon is the universe. A student thus educated with the universe in mind is spurred to enhance the quality of life on the universe. Such a child is empowered to bring dramatic changes which help in the very evolution of mankind. Students geared to revolutionize the earth perceive and achieve good results as mere by products of their larger goal.</p>
					<p style={{"font-size":"14px"}}>I wish the Newsletter <b>"The soaring Falcon"</b> will be an informative &amp; creative platform to exhibit the latent talents of the young students of our institution.</p>
					<div className="col-md-12 col-xs-12" style={{"padding-left":"0","height":"370px","overflow":"auto","margin-top":"10px"}}>
						<h4 style={{"margin-bottom":"10px","padding":"10px 0"}}>Ants Summer Camp</h4>
						<iframe width="100%" height="315" src="https://www.youtube.com/embed/ImVRbtPLvTw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
						<h4 style={{"margin-bottom":"10px","padding":"10px 0"}}>3rd Annual Day - 2017</h4>
						<iframe width="100%" height="315" src="https://www.youtube.com/embed/pFEFJnKnU9A?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
						<h4 style={{"margin-bottom":"10px","padding":"10px 0"}}>3rd Annaual Day Part 2</h4>
						<iframe width="100%" height="315" src="https://www.youtube.com/embed/oJBQiJwpBqQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
						<h4 style={{"margin-bottom":"10px","padding":"10px 0"}}>Speech on Mahatma Gandhiji.</h4>
						<iframe width="100%" height="315" src="https://www.youtube.com/embed/F1XtkOpu1bM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
						<h4 style={{"margin-bottom":"10px","padding":"10px 0"}}>Soundarya Aquatic Center</h4>
						<iframe width="100%" height="315" src="https://www.youtube.com/embed/F23Fo1bR34o?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
					</div>
				</div>
                <div className="col-md-4">
                    <section className="links">
                      
                        
                        <div className="widget facebooklikebox-2 widget_FacebookLikeBox" style={{"padding-top":"0px"}}>
                        <script type="text/javascript" src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script>
                        <span style={{"vertical-align": "bottom", "width": "100%", "height":"630px"}}>
                        <iframe style={{"visibility": "visible", "width": "100%","height":"630px"}} title="fb:like_box Facebook Social Plugin" name="f32edf47a343e32" src="http://www.facebook.com/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D28%23cb%3Df2dcaef3d4633f%26domain%3Dwww.soundaryainstitutions.in%26origin%3Dhttp%253A%252F%252Fwww.soundaryainstitutions.in%252Ff37e2d61b1b2702%26relation%3Dparent.parent&amp;header=true&amp;href=https%3A%2F%2Fwww.facebook.com%2FSoundarya-Central-School-1441884222795577%2F&amp;locale=en_US&amp;sdk=joey&amp;show_faces=true&amp;stream=true&amp;width=360&amp;height=620" height="620" width="100%" frameborder="0" scrolling="no"></iframe></span></div>                        
                       

                    </section>
                </div>
          </div>
        </div>
        )
    }
}

