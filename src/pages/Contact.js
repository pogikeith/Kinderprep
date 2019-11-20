import React from "react";
import Crayon from '../images/Crayons.jpg';

import { Link } from "react-router-dom";


   
class Contact extends React.Component {
    render(){
        
      return (

        <header>
           <div className = "contactus-body">
          
            For general questions, schedule a visit, to start the registration
            process, or to put your child’s name on a waiting list:<br></br><br></br>Contact us using the form below or call us @ 520-305-9083
            KinderPrep Preschool  <br></br>
          </div>

        <div className="Contact-Form">
        <h3>Contact Us</h3>
        <div>
        <form action="/action_page.php">
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label>Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
    
    
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />
    
    
        <label>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
        <img src={Crayon} div className= "Crayon"  alt="logo" />
        </header>
      );
    }
  }

  export default Contact;