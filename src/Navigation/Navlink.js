import React from "react";
import { Link } from "react-router-dom";
import Sun2 from '../images/sun.jpg';
import Girl from '../images/girl.jpg';
import Boy from '../images/boy.jpg';
import Girl2 from '../images/girlchild.jpg';
import Boy2 from '../images/boychild.jpg';
import Copy from '../images/copyright.jpg';

import MainLogo from '../images/KinderPrep.jpg';

class Nav extends React.Component {
    render(){
      return (
      <div className="App">
        <header className="App-header">

                
                <img src={Sun2} div className= "Sun1"  alt="logo" />

                <img src={Girl} div className= "GirlL" alt="logo" />
                     
                <img src={Boy} div className= "BoyL" alt="logo" />
              
                <img src={Girl2}  div className= "GirlR" alt="logo" />
         
                <img src={Boy2} div className= "BoyR" alt="logo" />

               <img src={MainLogo} className="App-logo" alt="logo" />

            

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
                    to ="/Reviews"> References
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
        <body>
        <img src={Copy} div className= "CopyR"  alt="logo" />
            <h1>Copyright 2020 KinderPrep Preschools of Arizona</h1>
        </body>
      </div> 
      );
  
}
} 
export default Nav;