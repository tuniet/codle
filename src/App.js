import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Codle from './Codle'
function App() {

  const [isDark, setisdark] = useState(false)

  return (
    <div data-theme={isDark ? "dark" : "light"}>
    <Codle setisdark = {setisdark} isDark = {isDark}/>
    </div>
  )
}

export default App