import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["https://www.youtube.com/embed/Byl87SBFoo8?autoplay=1&lpp=1&autopause=0", "https://i.ibb.co/Cmg4mk8/leaf-icon-png-7066.png","https://i.ibb.co/0FXLnVV/google.jpg","http://bit.ly/2qQdMws"]

function App() {
  return (
  <div>
  <Profile/>
  </div>
  );
} 


function Profile(props) {

 const [activate, setActivate] = useState("firstpic");

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
      <p>
      <div className = 'container'>
      <div id= "video"><iframe width="520" height="315" src={mainContent[0]} frameborder="0" allow="autoplay" mute ></iframe> </div>
      {/* <img id="ecopic" src="" width="350" alt="Download Icon Png Leaf" /> */}
      <img id="firstpic" src={(activate==="firstpic") ? mainContent[2] : mainContent[3]} height="315" width="520" alt="value"></img> 
      </div>
      <div className= "text"> <p> Try Eco Mode to reduce your carbon footprint from online video streaming by 96.5% </p></div>
      <img id="iconbutton" onClick={ecoMode} src={mainContent[1]} height="200" width="100" alt="value"/>
      <div className="text"><p>Eco Mode</p></div>
      <div className= "text1"> <strong><p> Download </p></strong></div>
      </p> </div></div>

     
    
  );
}



export default App;
