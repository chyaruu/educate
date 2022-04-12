import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer'
import Home from './Home';
import {News} from './News';
import {Honor} from './Honor';
import {Homework} from './Homework';
import Student from './Student';
import {Parent} from './Parent';
import  Navbar  from './Navbar';
import {Hwupdate} from './Hwupdate';
import {Toteacher} from './Toteacher';
import {SchoolLife} from './SchoolLife';
import {Interact} from './Interact';
import {Download} from './Download';


const App = (props) => {
    
  return (
      

    <React.Fragment>
      <div>
        <div >
          <Navbar/>
          <Route path="/" exact component={Home} />
          <Route path="/News" component={News} />
          <Route path="/Honor" component={Honor} />
          <Route path="/Homework" exact component={Homework} />
          <Route path="/Student" component={Student} />
          <Route path="/Parent" component={Parent} />
          <Route path="/Hwupdate" component={Hwupdate} />
          <Route path="/Toteacher" exact component={Toteacher} />
          <Route path="/SchoolLife" component={SchoolLife} />
          <Route path="/Interact" component={Interact} />
          <Route path="/Download" component={Download} />
        </div>
        
        <Footer/>
      </div>
    </React.Fragment>


      
  )
}

export default App;
