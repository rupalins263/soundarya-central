import React,{Component} from 'react';
import '../Contact/Contact.css';

export default class Video extends Component{

   
    render(){
        return(
         <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">Video Gallery</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">Video Gallery</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">     
			<div className="row page-row">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/ImVRbtPLvTw?rel=0" frameborder="0" allowfullscreen=""></iframe>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/pFEFJnKnU9A?rel=0" frameborder="0" allowfullscreen=""></iframe>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/oJBQiJwpBqQ?rel=0" frameborder="0" allowfullscreen=""></iframe>
				</div>
			</div>
			<div className="row page-row">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/F1XtkOpu1bM?rel=0" frameborder="0" allowfullscreen=""></iframe>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-12">
					<iframe width="100%" height="315" src="https://www.youtube.com/embed/F23Fo1bR34o?rel=0" frameborder="0" allowfullscreen=""></iframe>
				</div>
			</div>
		</div>
    </div>
</div>
        )
    }
}