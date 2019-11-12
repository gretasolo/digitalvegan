import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["https://www.youtube.com/embed/P28mbaFf52g?autoplay=1&lpp=1&autopause=0", "http://bit.ly/2WYqaX0","https://ampr.gs/33zv8fh","http://bit.ly/2O5M32H"]

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
      <button id="digitalvegan" onClick>Digital Vegan</button>
      <button id="learn" onClick>Learn More</button>
      <button id="chrome" onClick>Chrome Extension</button>
    </div>
    <div className="main">
      <p>
      <iframe width="520" height="315" src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe>
      <img id="iconbutton" onClick={ecoMode} src={mainContent[1]} height="200" width="100" alt="value"/>
      <img id="firstpic" src={(activate==="firstpic") ? mainContent[2] : mainContent[3]} height="315" width="520" alt="value"></img>
      </p>
      </div>
    </div>
  );
}



export default App;
