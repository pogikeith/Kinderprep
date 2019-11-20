import React from "react";
import Pencil from '../images/pencils.png';

import { Link } from "react-router-dom";


   
class Policies extends React.Component {
    render(){
        
      return (
    
        <header>
      
    
      <div className = "Policies" >
             Class Policies
             </div>

        <div className = "policies-body">
          <h2>Registration Fee</h2>
          In order to reserve a spot in preschool, a $40 registration/materials fee is required at the time of enrollment. This is refundable up to two 
          weeks before school starts. After that time the registration fee becomes non-refundable.

          <br/><br/>

          <h2>School Supplies</h2>

          Please don’t buy school supplies for your child as they will be provided by the preschool. Each child will be provided with a KinderPrep 
          Preschool T-Shirt and a homework binder that will have all of the supplies they need to be able to complete their homework at home. If you 
          would like to purchase a backpack for your student, that is great, but backpacks are optional.<br/><br/>
        
          <h2>Snacks</h2>

          Parents are responsible to provide the snack for preschool once every two months. The snack calendar will be listed on the bulletin each month. Snacks 
          should be healthy and can include items such as: fruit, veggies, raisins, crackers, cheese, etc. As a general rule please avoid snacks with nut products 
          in them.   <br/><br/> 
            
          <h2>Illnesses</h2>

          If your child comes down with a sickness or illness, please let me know immediately so other parents can be notified. Please do not bring a child to 
          preschool if you know they are contagious. Some illnesses, such as pink eye, require a 48 hour symptom free waiting period before your child can
          return to school.  <br/><br/>   
        
          <h2>Potty Trained</h2>
          All children enrolled in KinderPrep Preschool must be toilet-trained. Of course there are facilities to take care of the occasional 
          accident. <br/><br/>   

          <h2>Immunizations</h2>
          Before they can attend, all children enrolled in KinderPrep Preschool must have current immunizations according to the Arizona School/Child 
          Care Immunization Law (there is a copy in your packet). <br/><br/>   
          
                
            </div>    
             <img src={Pencil} div className= "Pencil-pol"  alt="logo" />
        </header>
 
       
 );
 }
} 
    



export default Policies;
