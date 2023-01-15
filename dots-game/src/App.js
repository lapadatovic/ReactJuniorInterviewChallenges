import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState([]);

  useEffect(()=> {
    const handleMouseMove = (event) => {
      setPoints(oldPoints => [...oldPoints, {
        x: event.clientX,
        y: event.clientY
      }])
    };
    window.addEventListener('click', handleMouseMove); 
  },[])
  
  

  
  return (
    <div className='game-container'>
      <div className="dots">
        {points.map((point,index) =>{
          console.log(point.x, point.y)
          return(
            <div key={index} className='dot' style={{top:`${point.y}px`,left:`${point.x}px`}}></div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
