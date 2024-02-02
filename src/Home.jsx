import './Home.css';
import React from 'react';
import GameCard from './Components/GameCard';

import codle from '../src/Resources/codle.png'
import wordle from '../src/Resources/wordle.png'
function Home() {
  /*
  Dificulty
    3 -> codelength 4, yellow
    4 -> codelength 4, no yellow
    5 -> codelength 6, no yellow
  */

  return (
    <div className='Home'>
      <h1 className='title'>Tuniet Games</h1>
      <div className='gamelist'>
        <div className='row'>
          <GameCard background={codle} link="codle"/>
          <GameCard background={wordle} link="wordle"/>
          </div>
      </div>

    </div>
  )
}

export default Home