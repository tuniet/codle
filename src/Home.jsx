import './Home.css';
import React, { useState } from 'react';
import GameCard from './Components/GameCard';
import codle from '../src/Resources/codle.png'
import wordle from '../src/Resources/wordle.png'
function Home() {

  
  return (
    <div className='Home'>
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