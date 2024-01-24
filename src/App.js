import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let code = ["1", "2", "3", "4"]
  const [inputcode, setinputcode] = useState([]);
  const [inputid, setinputid] = useState(0)
  document.onkeydown = function(e) {
    if(e.key.charCodeAt(0) >= 48 && e.key.charCodeAt(0) <= 57 && inputid <= 3){
      setinputcode([
        ...inputcode,
        {id: inputid, number: e.key}
      ]);
      setinputid(inputid + 1)
      console.log(inputid)
    }
    else if(e.key.charCodeAt(0) === 66 && inputid > 0){
      console.log("remove")
      setinputcode(
        inputcode.filter(c => c.id !== inputid - 1)
      );
      setinputid(inputid - 1)
    }
    else if(e.key.charCodeAt(0) === 69){
      console.log("submit")
    }
  }

  return (
    <div>
      {inputcode.map((input) =>
      <span>{input.number}</span>)}
    </div>
  );
}

export default App;
