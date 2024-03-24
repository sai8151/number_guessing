import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [userGuess, setuserguess] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [GuessedValues, setGuessedValues] = useState([]);
  const [number, setnumber] = useState(0);
  const [numberValues, setnumberValues] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [GuessedValues]);

  const HandelValueChange = (e) => {
    setuserguess(e.target.value);
  }
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };
  const SubmitHandler = () => {
    // alert(userGuess)
    setUserCount(userCount + 1)
    setGuessedValues([...GuessedValues, userGuess])
    setnumberValues([...numberValues, number])
    setnumber(randomNumberInRange(1, 20))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess the number (1 to 20):</h1>
        <input
          type="range"
          value={userGuess}
          onChange={HandelValueChange}
          min='1'
          max='20'
          className="slider"
          id="range"
        />
        <p>Value: {userGuess}</p>


        <button onClick={SubmitHandler}>Submit</button>
        <p>Number of guesses : {userCount}</p>
        <p>userGuess :
          <span id="guesses" ref={scrollRef} className="scroll-container">
            {GuessedValues?.map((item, index) => {
              if (item == numberValues[index]) {
                return (
                  <h6 id="correct" key={index}>Congratulations! You guessed {item} correctly!</h6>
                );
              } else {
                return (
                  <h6 id="incorrect" key={index}>You guessed {item}, but the number is {numberValues[index]}</h6>
                );
              }
            })}
          </span>
        </p>
      </header>
    </div>
  );
}

export default App;
