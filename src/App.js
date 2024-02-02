import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Codle from './Games/Codle/Game.jsx'
import Wordle from './Games/Wordle/Game.jsx'
import Home from './Home.jsx'
import NoPage from './NoPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="codle" element={<Codle />} />
        <Route path="wordle" element={<Wordle />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App