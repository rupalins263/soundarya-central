import React, { Component } from 'react';
import {Switch,Link,Route}from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import HomeIndex from './Home/HomeIndex';
import Facilitaor from './Home/Facilitaor';
import Privacy from './Home/Privacy';
import ContactUs from './Contact/Contact';
import Carrier from './Contact/Carrier';
import Alumni from './Contact/Alumni';
import Media from './Contact/Media';
import Admission from './Academics/Admissions';
import Mission from './About/Mission';
import InfraStructure from './Academics/InfraStructure';
import NewsSingle from './Contact/NewsSingle';
import About from './About/About';
import Primary from './About/Primary';
import PrePrimary from './About/PrePrimary';
import Kider from './About/Kider';
import MiddleSchool from './About/MiddleSchool';
import CoScholastic from './About/CoScholastic';
import Extended from './About/Extended';
import Downloads from './Contact/Downloads';
import Facilities from './Academics/Facilities';
import CodeOfConduct from './Academics/CodeOfConduct';
import Celebrations from './Academics/Celebrations';
import Faculty from './Academics/Faculty';
import Calender from './Academics/Calender';
import Video from './Academics/Video';
import Interaction from './Academics/Interaction';
import Gallery from './Gallery/Gallery';
import './App.css';

class App extends Component {
   
  render() {
    return (
      <div>
       <Nav/>
       <Switch>
               
                <Route exact path="/ContactUs" component={ContactUs}/>
                <Route exact path="/Carrier" component={Carrier}/>
                <Route exact path="/Alumni" component={Alumni}/>
                <Route exact path="/Media" component={Media}/>
                <Route exact path="/Admission" component={Admission}/>
                <Route exact path="/Mission" component={Mission}/>
                  <Route exact path="/InfraStructure" component={InfraStructure}/>
                   <Route exact path="/About" component={About}/>
                      <Route exact path="/Primary" component={Primary}/>
                    <Route exact path="/PrePrimary" component={PrePrimary}/>
                   <Route exact path="/MiddleSchool" component={MiddleSchool}/>
                     <Route exact path="/CoScholastic" component={CoScholastic}/>
                      <Route exact path="/Extended" component={Extended}/>
                   <Route exact path="/Downloads" component={Downloads}/>
                     <Route exact path="/Facilities" component={Facilities}/>
                     <Route exact path="/CodeOfConduct" component={CodeOfConduct}/>
                   <Route exact path="/Celebrations" component={Celebrations}/>
                   <Route exact path="/Calender" component={Calender}/>
                    <Route exact path="/Video" component={Video}/>
                   <Route exact path="/Interaction" component={Interaction}/>
                       <Route exact path="/Kider" component={Kider}/>
                          <Route exact path="/Privacy" component={Privacy}/>
                              <Route exact path="/Facilitator" component={Facilitaor}/>
                                  <Route exact path="/Gallery" component={Gallery}/>
                              <Route  path="/NewsSingle" component={NewsSingle}/>
                          <Route exact path="/Faculty" component={Faculty}/>
                           <Route  path="/" component={HomeIndex}/>
       </Switch>
       <Footer/>
      </div>
    );
  }
}

export default App;
