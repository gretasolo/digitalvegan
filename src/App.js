import React, {useState} from 'react';
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

 const [activate, setActivate] = useState("firstvideo");

 function ecoMode (e) {
   setActivate (e.target.id);
   console.log(e.target.id, activate);
 }
 //condition ? thingIfTrue : thingIfFalse
  return (
    <div className="profilepage">
      
      <div className="firstline">
      <div id="vegan"><img id="digitalvegan" onClick src= "https://i.ibb.co/2jcfkzt/7cefbf7e-63b6-4843-8fbe-72afec0f5961-200x200.png"/></div>
      <button id="learn" onClick>Learn More</button>
      <button id="chrome" onClick>Chrome Extension</button>
    </div>

      <div className="main">
      
      <div className= "text"> <p> Keep your digital life clean to keep the earth green with a click of a button </p></div>
      <div className = 'container'>
      <div id= "video"><iframe width="520" height="315" src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe> </div>
      {/* <img id="ecopic" src="" width="350" alt="Download Icon Png Leaf" /> */}
      <iframe id="firstvideo" src={(activate==="firstvideo") ? mainContent[0] : mainContent[3]} height="315" width="520" frameborder="0" allow="autoplay" mute alt="vid" ></iframe> 
      </div>
      <div className= "canyou"> <p> Can you tell the difference? </p></div>
      <div className = "clickers">
      <button id = "text1"> <strong><p> Yes! </p></strong></button>
      <button id = "text2"> <strong><p1> No! </p1></strong></button>
      </div>
      <img id="iconbutton" onClick={ecoMode} src={mainContent[1]} height="200" width="100" alt="value"/>
      </div></div>

     
    
  );
}



export default App;
