import React from "react";
import Main from '../images/homemain.gif';


import { Link } from "react-router-dom";


   
class Home extends React.Component {
    render(){
        
      return (
       
        <header>

          <div className="Text-Home"> Welcome to KinderPrep Preschool
          </div>

          <div className="Home-Image">  
                  
                <img src={Main}  alt="logo" />

                
            </div>
    

    

        </header>
        
       
 );
 }
} 
    



export default Home;
