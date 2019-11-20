import React from "react";
import Teacher from '../images/amber.jpg';
import Teacher1 from '../images/jill.jpg';
import Room1 from '../images/room1.jpg';
import Room2 from '../images/room2.jpg';
import Room3 from '../images/room3.jpg';
import Crayon from '../images/Crayons.jpg';

import { Link } from "react-router-dom";


   
class About extends React.Component {
    render(){
        
      return (
    
        <header>

      <img src={Teacher} div className= "Amber"  alt="logo" />
   

      <div className = "heading-about">
              Fostering development. Building self-esteem. Sparking imagination. <br/>
              Guiding children’s first steps toward a life-long love of learning.
            </div>
        <div className = "about-teacher">
          <h2>Mrs. Amber:</h2>
          I recieved a Bachelor’s Degree in Elementary Education and a Teaching Certificate from the State of Arizona. I have multiple years of experience 
          with children as a volunteer teacher, substitute teacher, and have been teaching preschool for 10 years.<br/><br/>While I was studying at the University of 
          Arizona, to 
          become a teacher, I always said I would never teach children younger than 3rd grade. Then I started 
          teaching preschool and I fell in love. Three to Five year olds are amazing, their potential and excitement to learn is limitless. I love traching 
          these 
          students and now I wouldn’t have it any other way. I believe in preparing these children for success in their future education and instilling in 
          them a 
          love for learning. Giving your child a head start will create a confident young learner who can start kindergarten with all of the skills necessary for 
          success.<br/><br/>

          <h2>Mrs. Jill:</h2>

            I earned a Bachelor’s Degree in both English and Music from Brigham Young University. I also hold a current Teaching Certificate and Reading 
            Endorsement from the State of Arizona. I have taught both public and private school for over 16 years now, have worked with children of all 
            ages, and am passionate about what I do! This will be my 9th year of teaching preschool.<br/><br/>

            I believe preschoolers are excited, enthusiastic learners and that all children can learn successfully. As a teacher, my goals are to instill 
            a lifelong love for learning in the children that I teach and to create confident, young learners who will be better prepared for their future 
            education and can start kindergarten with the tools and skills necessary to be successful.<br/><br/>
      <img src={Teacher1} div className= "Jill"  alt="logo" />
        
        
          <h2>The Parent:</h2>

            As parents, you’re an integral part of the process. Regular communications from the teacher will keep you updated on how your child is 
            progressing. As you work with your child at home on their homework you help reinforce the skills your child is learning at KinderPrep and 
            ultimately play a key role in how much your child learns while they are with us. And should you have any questions or suggestions, we hope 
            that you will communicate with us.    
            <h2>The School:</h2>

The ultimate goal of KinderPrep Preschool is to have a learning atmosphere ideal for early childhood education where children can feel safe 
and loved while they develop socially as well as intellectually. Because the Kindergarten curriculum and environment can be overwhelming for 
some young learners, KinderPrep focuses on introducing its age-specific curriculum with a fun, hands-on approach that will prepare your child 
to successfully enter kindergarten in two years. We also focus on introducing much of the scheduling and activities that will make the transition 
to kindergarten an easy one. 
Our program helps children to develop the social, critical thinking, and problem-solving skills they need to succeed in kindergarten, school and 
life.  
<br/>

<br/>
Established in 2007, KinderPrep Preschool is located in Rancho Sahuarita. Visit KinderPrep Preschool today to talk with either Mrs. Amber or 
Mrs. Jill, learn more about our unique curriculum, or to experience the security and warmth provided by the in-home preschool environment.<br/><br/>   
                
                
        </div>
        <img src={Crayon} div className= "Crayon"  alt="logo" />

        <div className = "threepics">
                <img src={Room1} div className= "Room1"  alt="logo" />
                <img src={Room2} div className= "Room2"  alt="logo" />
                <img src={Room3} div className= "Room3"  alt="logo" />
        </div>

        </header>
           
       
 );
 }
} 
    



export default About;
