import React from "react";
import Pencil from '../images/pencils.png';
import Fire from '../images/fire.jpg';
import Fire1 from '../images/fire1.jpg';
import Fire2 from '../images/fire2.jpg';

import { Link } from "react-router-dom";


   
class Calendar extends React.Component {
    render(){
        
      return (
    
        <header>
          
          <img src={Pencil} div className= "Pencilc"  alt="logo" />

      <div className = "heading-calendar">
             KinderPrep Preschool follows the Sahuarita School District<br></br>
              Calendar for School Days and Holidays
            </div>

            <div className = "heading-events">
           2019-2020 Calendar and Events
            </div>
          
            <button> <a href='https://susd30.us/wp-content/uploads/2018/10/2019.2020-calendar-final.pdf'>See District Calendar Here </a>  </button>


          <div className = 'firepics'>
            <img src={Fire} div className= "fire"  alt="logo" />
            <img src={Fire1} div className= "fire1"  alt="logo" />
            <img src={Fire2} div className= "fire2"  alt="logo" />
            </div>


            <div className = "calendar-dates">
            September - School Starts<br></br><br></br> October - TBD <br></br><br></br>November – TBD<br></br><br></br> December - TBD <br></br><br></br>January – TBD <br></br><br></br>
            February - TBD <br></br><br></br>March - TBD<br></br><br></br> April - TBD<br></br><br></br> May – School Ends<br></br><br></br>




            </div>   
        </header>
 
       
 );
 }
} 
    



export default Calendar;
