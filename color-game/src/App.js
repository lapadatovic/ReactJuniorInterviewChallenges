import {React, useEffect, useState} from 'react';
import './App.css';

// TODO: Create color state,
//       Genereate random color for backgroud
//       Make answears buttons

function App() {
  const [color, setColor] = useState('')
  const [answear, setAnswear] = useState([])
  const [isTrue, setIsTrue] = useState(false)
  
  const resetQuizz = () => {
    let actualColor = generateRandomColor();
    setColor(actualColor);
    setAnswear([actualColor,generateRandomColor(),generateRandomColor()].sort(() => (0.5 - Math.random())))
  }

  useEffect(()=>{
    resetQuizz();
  },[])

  function generateRandomColor() {
    var x=Math.round(0xffffff * Math.random()).toString(16);
    var y=(6-x.length);
    var z='000000';
    var z1 = z.substring(0,y);
    var color= '#' + z1 + x;
    return color
  }

  const handleClick = (clickedAnswear) => {
    if(clickedAnswear === color){
      console.log('right' +clickedAnswear)
      setIsTrue(true)
      resetQuizz();
    }else{
      setIsTrue(false)
    }
  }

  const answearButtons = answear.map((answear) => {
    return(
      <button
        key={(answear)}
        className='button'
        onClick={()=>handleClick(answear)}
      >
        {answear}
      </button >
    )
  })

  return (
    <div className="game-container">
      <div className="color-div" style={ {backgroundColor:color} }></div>
      <div className="buttons-div">
        {/* Buttons here */}
        {answearButtons}
      </div>
      <div className='answear-message'>
        {isTrue && <span className='correct'> Answear Correct</span>}
        {!isTrue && <span className='wrong'> Answear Wrong</span>}
      </div>
    </div>
  );
}
export default App;
