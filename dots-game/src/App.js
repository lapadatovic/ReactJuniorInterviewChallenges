import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('click', handleMouseMove);
    return () => {
      window.removeEventListener(
        'click',
        handleMouseMove
      );
    };
  }, []);


  return (
    <div className="App">
      <div className="game-container">
        <div>
          The mouse is at position{' '}
          <b>
            ({mousePosition.x}, {mousePosition.y})
          </b>
        </div>
      </div>
    </div>
    
  );
}

export default App;
