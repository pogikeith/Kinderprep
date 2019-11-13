import React from "react";
import { Link } from "react-router-dom";
import Sun from '../images/sun.jpg';

import Logo from '../images/KinderPrep.jpg';

class Nav extends React.Component {
    render(){
      return (
      <div className="App">
        <header className="App-header">

        <div className="Sun">          
                <img src={Sun}  alt="logo" />
            </div>
            <img src={Logo} className="App-logo" alt="logo" />

            

            <div className= "heading-main">  OF RANCHO SAHUARITA </div>

           
              
            <div className="nav-link-wrapper">

          
              
                  <Link to = "/" > Home
                  </Link>
      
                  <Link to ="/About"> About Us
                  </Link>
      
                  <Link to ="/Curriculum"> Curriculum
                  </Link>
      
                  <Link
                    to ="/Schedule"> Daily Schedule
                  </Link>

                  <Link
                    to ="/Calendar"> Calendar
                  </Link>
           
                  <Link
                    to ="/Referenes"> References
                  </Link>

                  <Link
                    to ="/Policies"> Policies
                  </Link>

                  <Link
                    to ="/Register"> Registration
                  </Link>

                  <Link
                    to ="/Contact"> Contact Us
                  </Link>
              
            </div>  
           
     
        
        
        
  
      </header>
     </div> 
      );
  
}
} 
export default Nav;