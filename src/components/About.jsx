import React from 'react';
import ten from "../photos/10th.jpeg";
import twel from "../photos/12.webp";
import bt from "../photos/bt.png";
const About = () => {
  return (
    <>
    <div id="qf"><h1>QUALIFICATION</h1></div>
    <div class="about">
   <div class="box">
    <h3>matriculation</h3>
   <img class="imgg" src={ten} alt="ten"/>
   </div>

  <div class="box">
   <h3> Intermediate</h3>
  <img class="imgg" src={twel} alt="tel"/>
   </div>

   <div class="box">
  <h3>PURSUING B.TECH</h3>
   <img class="imgg" src={bt} alt="btech"/>
    </div>
     
    </div>
    </>
  )
}

export default About