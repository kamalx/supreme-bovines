import React, { useState, useEffect } from 'react';
// import logo from '../assets/react.svg'
const Home = () => {
  // console.log(`Home sweet home`)
  const [ secretNumber, setSecretNumber ] = useState(generateSecretNumber());
  const [ guess, setGuess ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ attempts, setAttempts ] = useState(0);

  useEffect(() => {
    document.title = "Cows and Bulls Game"
  }, [])

  // Gen 4-digit secret number with no repeating digits
  function generateSecretNumber() {
    let number = ''
    while (number.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString()
      if(!number.includes(digit)) {
        number += digit
      }
    }
    return number
  }

  // Handle guess submission
  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault()
    if( guess.length !== 4 || !/^\d+$/.test(guess) ) {
      setMessage('Please enter a valid 4-digit number.')
      return;
    }

    const { bulls, cows } = checkGuess(guess, secretNumber)
    setAttempts(attempts + 1)

    if(bulls === 4) {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`)
      resetGame()
    } else {
      setMessage(`${bulls} bulls and ${cows} cows. Another guess?`)
      setGuess('')
    }
  }

  const resetGame = () => {
    setSecretNumber(generateSecretNumber())
    setGuess('')
    setAttempts(0)
  }

  const checkGuess = (guess: string, secret: string) => {
    let bulls = 0, cows = 0;

    for(let i = 0; i < 4; i++) {
      if(guess[i] === secret[i]) {
        bulls++;
      } else if( secret.includes(guess[i]) ) {
        cows++;
      }
    }

    return { bulls, cows }
  }


  return (
    <>
      <h3>Cows and Bulls</h3>
      <p>Guess my 4-digit number. No repeating digits</p>
      <p><a href="/about">What is this?</a></p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={4}
          placeholder='Enter your guess' />
        <button type="submit">Submit</button>
      </form>

      <p>{ message }</p>
    </>
  );
}

export default Home
