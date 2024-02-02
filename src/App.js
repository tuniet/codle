import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Codle from './Games/Codle/Codle.jsx'
import Wordle from './Games/Wordle/Wordle.jsx'
import Home from './Home.jsx'
import NoPage from './NoPage.jsx'
import Navbar from './Components/Navbar.jsx';
function App() {

  const [isDark, setisdark] = useState(false)

  return (
    <div data-theme={isDark ? "dark" : "light"}>
    <BrowserRouter>
    <Navbar setisdark = {setisdark} isDark = {isDark}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="codle" element={<Codle />} />
        <Route path="wordle" element={<Wordle />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App