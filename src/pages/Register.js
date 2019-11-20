import React from "react";
import Crayon from '../images/Crayons.jpg';
import Registration from '../images/Registration.jpg';
import Registration2 from '../images/Registration2.jpg';

import { Link } from "react-router-dom";


   
class Register extends React.Component {
    render(){
        
      return (
    
        <header>
       <div className = "heading-about">
              Now Enrolling for <br/>
              2019 – 2020 Classes
            </div>
          <div className = "policies-body">
          <h2>Accepting Ages 3 - 5</h2>
          Class Size is limited so please contact me today to start the registration process or<br></br> to put your name on a waiting list
          </div>

          <div className = "policies-body">
          <h2>There are 2 separate classes being offered</h2>
          Monday and Wednesday Time: 8:30 - 12:00pm Cost: $120 per month<br></br> Tuesday and Thursday Time: 8:30 - 12:00pm. Cost: $120 per month 
          <br></br> Call or email for pricing on Monday - Thursday classes<br></br>
          </div>

          <div className = "policies-body">
          <h2>General Questions</h2>
          If you have general questions, would like to schedule a visit, start the registration<br></br> process, or put your child’s name on a waiting 
          list:<br></br> 
          <br></br>Call or Text us at 520-305-9083 or Contact us by e-mail<br></br> 
          <br></br><div className = "contact1"> <Link to ="/Contact"> Email Us
                  </Link>
          </div>
          </div>
          
    
            <img src={Crayon} div className= "Crayon"  alt="logo" />
            <img src={Registration} div className= "Registration"  alt="logo" />
            <img src={Registration2} div className= "Registration2"  alt="logo" />
        </header>
 
       
 );
 }
} 
    



export default Register;