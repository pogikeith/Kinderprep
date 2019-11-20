import React, { Component } from 'react'
import Crayon from '../images/Crayons.jpg';

class Table extends Component {
  
   constructor(props) {
    
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { Time: '8:30-9:30 (20 Minutes)', Activity: 'Welcome Songs/Circle Time/Show Tell', Description: 'Circle time is used to introduce and spark student interest in the theme for the week.' },
            { Time:'8:50-9:40 (50 Minutes)', Activity: 'Free Play/Homework/Centers', Description: 'I review the previous class day’s homework one on one with each student. Students also rotate through skills centers.' },
            { Time: '9:40-9:55 (15 min)', Activity: 'Story Time/Reading', Description: 'Stories, songs and fingerplays are usually related to the theme of the week. Students will also get to recite poetry every other week.' },
            { Time: '9:55-10:20 \n (25 min)', Activity: 'Crafts/Projects/Discovery Learning', Description: 'Arts, Crafts, and/or Science projects are related to the theme of the week.' },
            { Time: '10:20-10:55 (35 min)', Activity: 'Outside Play/Snack', Description: '' },
            { Time: '10:55-11:20 (25 min)', Activity: 'Circle Time', Description: 'We focus on the Calendar, Patterns, Weather, Letter, Letter Sound, Number and the Color or Shape of the Week.' },
            { Time: '11:20-11:40 (20 min)', Activity: 'Table Time', Description: 'During table time, students learn how to write their first and last name. We practice tracing and free hand writing. We also practice math skills and have a color or shape of the week project.' },
            { Time: '11:40-11:55 (15 min)', Activity: 'Reading Skills/Listening', Description: 'Includes phonics practice, phonemic awareness games/activities, learning word families, sight words, etc. Also includes stories, rhymes, reading comprehension, and learning to follow directions.' },
            { Time: '11:55-12:00', Activity: 'Line-Up/Farewell Song', Description: 'Students get ready for pick-up.' }
         ]
      }
   }


   

   renderTableData() {
    return this.state.students.map((student, index) => {
       const { Time, Activity, Description } = student //destructuring
       return (
        
          <tr key={Time}>
            
             <td>{Time}</td>
             <td>{Activity}</td>
             <td>{Description}</td>
             
             
          </tr>
        
          
         
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table dfdafdgsgsfgs</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
 renderTableHeader() {
  let header = Object.keys(this.state.students[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

render() {
  return (
     <div>
        <h4 id='title'>Your Child's Day at a Glance: 8:30am - 12:00pm</h4>
        <table id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
        <img src={Crayon} div className= "Crayon"  alt="logo" /> 
     </div>
  )
  
}     
   
}



export default Table 