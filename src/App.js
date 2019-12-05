import React, {useState, useEffect, useRef} from 'react';
import videojs from 'video.js';
import logo from './logo.svg';
import './App.css';

let mainContent = ["https://www.youtube.com/embed/Byl87SBFoo8?autoplay=1&lpp=1&autopause=0", "https://i.ibb.co/cDvmsyB/download.png","http://bit.ly/2qQdMws"]

function App() {
  return (
  <div>
  <Profile/>
  </div>
  );
} 

function Profile(props) {

 const [activate, setActivate] = useState("");

 const videoRef = useRef();

 function ecoMode (e) {
   setActivate (e.target.id);
   console.log(e.target.id, activate);
 }
//  function handleScroll () {
//   setActivate (e.target.id);
//   console.log(e.target.id, activate);
// }


 //condition ? thingIfTrue : thingIfFalse
  return (
    <div className="profilepage" onScroll="">
      
      <div className="firstline">

      <button id="learn" onClick>Learn More</button>
      <button id="chrome" onClick>Chrome Extension</button>
    </div>
    <div id="vegan"> <img src= "https://i.ibb.co/2jcfkzt/7cefbf7e-63b6-4843-8fbe-72afec0f5961-200x200.png" height = "260" width = "260" />
      <div className= "text"> <strong><p> "Keep your digital life clean to keep the earth green with a click of a button" </p></strong></div></div>
      
      <div className="main">
      
      <div className = 'container'>
      <div class="video"><iframe class="iframe" src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe> </div>
      {/* <img id="ecopic" src="" width="350" alt="Download Icon Png Leaf" /> */}
      <div class="video"><iframe class="iframe"  src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe> </div>
      </div>
      
      {/* <div className ="bighd">
      <div id= "hd"> <strong>HD </strong></div>
      <div id= "eco"><strong>Eco Mode</strong></div>
      </div> */}
      


      {/* <video ref={videoRef} className="video-js"></video> */}



      <div className = "clickers">
        <div id= "canyou"> <p id="line"> Can you tell the difference? </p>
        <button id = "text1" onClick={ecoMode}> <strong><p> Yes! </p></strong></button>
        <button id = "text2" onClick={ecoMode}> <strong><p> No! </p></strong></button></div>
        <p className ="displayco2">{(activate==="text1") ? "The difference is that you are saving 50kg of CO2" : ""} {(activate==="text2") ? "The difference is you are saving 50kg of CO2" : ""}</p>
        <img id="iconbutton"  src={mainContent[1]} height="200" width="100" alt="value"/>
      </div>
     

      
      <div id= "learnmore"> 
       
        <h1><strong>Learn More</strong> </h1>

        <u>Problem: </u>
 
        <p>The high amounts of data usage by data centers and the resulting carbon emissions in the environment. The unregulated amount of carbon emissions emitted per view of high-res videos and online media.</p>

        <u>Solution/ Business model:</u>

        <p>The creation of an application interface or program add-on that enables the user to conveniently shift between a low-energy consumption mode and the regular viewing setting of high-resolution videos and streaming content.</p>

        <p>Giving the users the freedom to choose to limit the amount of loadable content on their webpage through the “Eco-mode add-on”</p>
        
      </div>


      </div>
    </div>

     
    
  );
}



export default App;
