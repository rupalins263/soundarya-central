import React,{Component}  from 'react';
import '../Contact/Contact.css';
export default class Privacy extends Component{
    render(){
        return(
                    <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Facilitators</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Facilitators</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">   
                    <b>“At Soundarya Central School, we value the most invaluable resource-Our Teachers”</b>

                    <p>Facilitators are the backbone of any school. The in -service training helps the teachers to make their className room teaching interesting and also helps to keep themselves abreast of the latest changes in the curriculum. The professional development programmes have enabled them to elevate the children to a higher plane of learning and critical thinking.</p>

                    <p>This academic community not only imparts instructions through the regular teaching period; it also engages students in a variety of other ways, whether it is a morning assembly, arrange and participate in cultural shows, competitions or bring out school publications. All teachers are involved in school activities such as House activities, editorial board, cultural department, various committees or sports etc.</p>
                 
                    
                   
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider" style={{"display":"none"}}>
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
