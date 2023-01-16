import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState([]);
  const [deletedPoints, setDeletedPoints] = useState([])

  const handleMouseClick = (event) => {
    setPoints([...points, {
      x: event.clientX,
      y: event.clientY
    }])
  };

  function handleUndo(){
    let deletedPoints = [...points]
    let lastDeleted = deletedPoints.pop();
    if(!lastDeleted) return;
    setPoints(deletedPoints);
    setDeletedPoints(oldDPs => [...oldDPs, {
      ...lastDeleted
    }])
  } 

  function handleRedo(){
    let lastDeletedPoints = [...deletedPoints];
    const LDP = lastDeletedPoints.pop();
    if(!LDP) return;
    setPoints(oldPoints => [...oldPoints, {
      ...LDP
    }])
    setDeletedPoints(lastDeletedPoints);
  }

  return (
    <div className='app-container'>
      <div className='game-container'>
        <div className='buttons-area'>
            <button className='btn' onClick={handleUndo}>Undo</button>
            <button disable={deletedPoints.length === 0} className='btn' onClick={handleRedo}>Redo</button>
        </div>
        <div className="dots" onClick={(e)=>handleMouseClick(e)}>
          {points.map((point,index) =>{
            return(
              <div key={index} className='dot' style={{top:`${point.y}px`,left:`${point.x}px`}}></div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
