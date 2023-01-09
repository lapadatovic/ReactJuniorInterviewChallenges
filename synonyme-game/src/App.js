import './App.css';
import React, { useEffect, useState } from 'react';
function App() {

  const [word,setWord] = useState('')
  const [synonyms, setSynonyms] = useState([])
  console.log(word)

  useEffect(()=>{
    handleFetchSynonyms();
  },[])

  function handleFetchSynonymClick(clickedSynony){
    setWord(clickedSynony.word)
    handleFetchSynonyms(clickedSynony);
  }

  function handleFetchSynonyms(word) {
    if(!word)
      return;
    fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
    .then((res) => res.json())
    .then((data) =>  setSynonyms(data)) 
  }

  return (
    <div className="app-container">
      <div className="game-container">
        <div className='form-container'>
          <form className='word-input-form'>
            <label for='word-input'>Your word</label>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              id='word-input' 
              className='word-input' 
              type="text" 
              placeholder='Your Word'
            />
          </form>
          <button 
            className='submit-button'
            onClick={() => handleFetchSynonyms(word)}
            >
            Submit
          </button>
        </div>
        <div className='listed-synonyms-container'>
          <ul>
            {synonyms.filter((synonyms) => synonyms.score > 600).map(
              (synonym) => {
                return(
                  <li
                    onClick={()=> handleFetchSynonymClick(synonym)}
                    key={synonym.word}
                  >
                    {synonym.word}
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;