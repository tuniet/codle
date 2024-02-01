import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './Game.jsx'
import Home from './Home.jsx'
import NoPage from './NoPage.jsx'

function App() {

  const [yellow, setyellow] = useState(true);
  const [codelength, setcodelength] = useState(4);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setyellow = {setyellow}  setcodelength={setcodelength} />} />
        <Route path="game" element={<Game codelength = {codelength} yellow = {yellow} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App