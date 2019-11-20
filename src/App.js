import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Link } from "react-router-dom";

import Nav from './Navigation/Navlink';
import Home from './pages/Home'; 
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Contact from "./pages/Contact";
import Curriculum from "./pages/Curriculum";
import Policies from "./pages/Policies";
import Register from "./pages/Register";
import Reviews from "./pages/Reviews";
import Schedule from "./pages/Schedule";



import './App.css';



class App extends Component {
  constructor(props){
    super(props)

    // icons()
  }
  render() {
    return (
      
      <Router>
          <div>
            <Nav />

        

          <Switch>
            
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/curriculum' component={Curriculum}/>
            <Route path='/policies' component={Policies}/>
            <Route path='/register' component={Register}/>
            <Route path='/reviews' component={Reviews}/>
            <Route path='/schedule' component={Schedule}/>
            
          </Switch>

          

          </div>
      </Router>
      
      

    
    );
  }
}

export default App;
