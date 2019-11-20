import React from "react";
import Pencil from '../images/pencils.png';
import Dinodig from '../images/dinodig.jpg';
import Dinodig2 from '../images/dinodig2.jpg';
import Dinodig3 from '../images/dinodig3.jpg';

import { Link } from "react-router-dom";


   
class Curriculum extends React.Component {
    render(){
        
      return (
    
        <header>

        

        <div className = "header-cur">
        KinderPrep Preschool uses a combination of the
        Zoo-Phonics and SRA DISTAR Reading Programs
        to teach students the beginning skills necessary
        to start reading, spelling, and writing.
        </div>

        <div className = "header-cur-body">
        KinderPrep Preschool accepts students ages 3-5. At KinderPrep Preschool we believe that younger students can learn from watching and listening 
        to older students. Although these ages are all combined into one class the students learning is individualized to suit the needs of each student. 
        Younger children focus on building social, verbal, cognitive, fine motor, gross motor, and physical skills through activities that engage children 
        and help prepare them for the year they attend preschool before going to kindergarten. Older students increase their focus on math, science, 
        reading, and writing to help prepare them to enter kindergarten but we also keep the students actively engaged in their learning with fun, hands-on 
        educational activities.
        </div>

        <img src={Pencil} div className= "Pencilc"  alt="logo" />
          
        <ul className= "list1">
            <h2>Math</h2>
            <li>Identify/Recognize Numbers</li>
            <li>Number Value</li> 
            <li>Tracing/Printing Numbers</li>
            <li>Counting in Number Order</li>
            <li>Patterning</li>
            <li>Graphing</li>
            <li>Greater Than/Less Than</li>
            <li>Basic Addition</li>
            <li>Before/After</li>

        </ul>

        <ul className= "list2">
              <h2>Reading Readiness</h2>
            <li>Identify/Recognize Letters</li>
            <li>Tracing/Printing Numbers</li> 
            <li>Sound-Symbol Association</li>
            <li>Sight Words</li>
            <li>Decoding (Sounding out Words)</li>
            <li>Rhyming Words</li>
            <li>Sequencing</li>
            <li>Visual Discrimination (ex. Find the brown dog with a red collar.)</li>
        </ul>
    
        <ul className= "list3">
        <h2>Play and Socialize</h2>
            <li>Puppet and Dramatic Play</li>
            <li>Social Awareness</li> 
            <li>Educational Manipulatives</li>
            <li>Puzzles</li>
            <li>Art Projects</li>
            <li>Student of the Week</li>
            <li>Show and Tell</li>
        </ul>

        <ul className= "list4">
        <h2>Basic Concepts</h2>
            <li>Identify Basic Colors</li>
            <li>Identify Simple Shapes</li> 
            <li>Follow Simple Directions</li>
            <li>Following Routines</li>
            <li>Art Projects</li>
            <li>Student of the Week</li>
            <li>Show and Tell</li>
        </ul>

        <ul className= "list5">
        <h2>Circle Time</h2>
            <li>Calendar</li>
            <li>Days of the Week</li> 
            <li>Months</li>
            <li>Weather</li>
            <li>Patterns</li>
            <li>Letter/Number Introduction</li>
            <li>Sound Introduction</li>
            <li>Homework Review</li>
            <li>Music and Singing</li>
        </ul>
             
        <div className = "Zoo-Phonics">
        <b>Zoophonics</b>
        <br/><br/>
        The Zoo-phonics Multisensory Language Arts Program is a kinesthetic, multi-modal approach to learning all aspects of language arts, including 
        vocabulary development and articulation, based on phonics and phonemic awareness.<br/><br/>

        The principle of Zoo-phonics maximizes understanding, memory, utilization and transference to all areas of the reading, spelling and writing 
        process in a playful and concrete manner.<br/><br/>
        Zoo-phonics is a method developed to make children strong readers and spellers using a “phono” (hearing), “oral” (speaking), “visual” (seeing), 
        “kinesthetic” (moving), and tactile (touching)—whole brain approach. Students actually learn the sounds of the alphabet and advanced phonemic 
        concepts through an easily understood, concrete method of presentation.<br/><br/>

        Zoo-phonics uses animals drawn in the shapes of the letters for ease in memory. A related body movement is given for each letter. This concrete 
        approach cements the sounds to the shapes of the letters. Lowercase letters and their sounds are taught first (needed 95% of the time in text), 
        capital letters and letter names are taught later.<br/><br/>

        Zoo-phonics also provides a springboard for all other academia such as math, art, music, cooking/nutrition, social studies, science, grooming, 
        physical education and sensory/drama.<br/><br/>
        Every aspect of the program has been field-tested and found to be effective. Educational research repeatedly supports the focus of phonics in 
        early reading programs, as well as the educational benefits of pictorial mnemonics and kinesthetic approaches to learning that are unique to 
        Zoo-phonics.<br/><br/>

        Currently Zoo-phonics is used throughout the United States and internationally as a highly effective language arts program.<br/><br/>

 
        </div>

        <div className = "DISTAR">
        <b>SRA DISTAR Reading Program:</b><br/><br/>
        The SRA DISTAR reading program that is specifically written to teaching three-and-a-half or four-year-olds how to read. Of course, this program 
        can be used for older children as well, but it is particularly aimed at children who have not yet learned to read. The manual uses an altered 
        orthographic code. This code uses sounds that are read such as "sh" for words like "she" and "shop" and "wh" for words like "where" and "what". 
        This altered orthography is a modified form of the standard long and short sounds of the alphabet. I found this system particularly useful when 
        trying to teach larger reading words that are more difficult to sound out. The child learns what sound the two letters make together after 
        learning what each letter sounds like individually, thus instructing the child to read the word through sounds instead of guessing what the word 
        really is or associating it with a picture. It is the fundamentals of letter sounds that help a child learn to read correctly from the very 
        beginning of their instruction.<br/><br/>

         Those who complete the program can read, spell, write, and comprehend the short storybooks they are given, making this program by far very 
        effective in teaching the fundamentals of reading.
        Reading is one of the most important social, academic, and fundamental skills a child will ever develop, so the sooner you can introduce your 
        child to the concept, the smarter and happier they will be!


        
        </div>
      

        <div className = "dinodig">
          <b>Dinosaur Dig</b><br/>
          Step 1: Dig up the Bones
        <img src={Dinodig} div className= "Dinodig"  alt="logo" />
        Step 2: Make Sure You Found All 17 Pieces
        <img src={Dinodig2} div className= "Dinodig2"  alt="logo" />
        Step 3: Build Your Dinosaur
        <img src={Dinodig3} div className= "Dinodig3"  alt="logo" />
        </div>
      </header>
 
      );
 }
} 
    



export default Curriculum;