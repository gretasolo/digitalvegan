import React from 'react';
import './App.css';
// import React, { useState } from 'react';

function App() {
  return (
    <div id="everything">
    <div className="Appp">
     
       <p>Digital Vegan</p> <p>learn more</p> 
       <p>Keep the earth clean by keeping your digital life green</p>
       <p>By streaming this video your carbon footprint is x.</p>
       <p>Try Eco Mode</p>
       <p>download</p>
    </div>

    <div className="Videodisplay">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/P28mbaFf52g" frameborder="0" allow="accelerometer" autoplay="1"></iframe>
    </div>


  
  </div>


  );
}
// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );



export default App;
