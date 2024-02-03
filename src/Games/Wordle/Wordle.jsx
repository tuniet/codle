import './Wordle.css';
import React, { useState, useEffect } from 'react';
import HowtoPlay from './Components/HowToPlay';
function Wordle() {

  const [codelength, setcodelength] = useState(5)
  const [codetrys, setcodetrys] = useState(5)
  const [currentrys, setcurrenttrys] = useState(0)
  const [code, setcode] = useState([])
  const [inputcode, setinputcode] = useState([]);
  const [inputid, setinputid] = useState(0);
  const [listofcodes, setlistofcodes] = useState([]);

  useEffect(() => {
      fetch(`https://random-word-api.herokuapp.com/word?length=${codelength}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data[0]);
            setcode(data[0]);
         })
         .catch((err) => {
            console.log(err.message);
         });
  }, [codelength]);

  function init(){
    //start input, start list & create code
    const newArr = [];
    const newList = [];
    for(let i = 0; i < codelength; i++){
      newArr.push({id: i, letter:" ", color: "black"});
    }
    for(let i = 0; i < codetrys; i++){
      newList.push({id: i, word: newArr})
    }
    setinputcode(newArr);
    setlistofcodes(newList)
    setcurrenttrys(0)
  }

  useEffect(() => {
    init();
  }, [codelength, codetrys]);

  document.onkeydown = function(e) {
    if(e.which >= 65 && e.which <= 90 && inputid < codelength){
      handleinputchange(inputid, e.key)
      setinputid(inputid + 1)
    }
    else if(e.code === "Backspace" && inputid > 0){
      handleinputchange(inputid - 1, " ")
      setinputid(inputid - 1)
    }
    else if(e.code === "Enter" && inputid === codelength){
      handleaddrow()
      handleVictory()
      handleClearInput()
    }
  }

  function handleinputchange(ind, lett){
    const newinputcode = inputcode.map((c) => {
      if (c.id === ind) {
        return {id: ind, letter: lett, color: calcColor(ind, lett)};
      } else {
        return c;
      }
    });
    setinputcode(newinputcode);
  }

  function calcColor(ind, l){
    let green = false;
    let yellow = false;
    for(let i = 0; i < codelength; i++){
      if (code[i] === l) {
        if(i === ind) green = true
        else yellow = true
      }
    }
    if(green) {return "green"}
    else if(yellow) {return "yellow"}
    else {return "red"}
  }

  function handleaddrow(){
    const nextlist = listofcodes.map((c, i) => {
      return {id: i + 1, word: c.word}
    })
    setlistofcodes([{id: 0, word: inputcode}, ...nextlist.filter(w => w.id !== codetrys)])
    setcurrenttrys(currentrys + 1)
  }

  function handleClearInput(){
    let newArr = []
    for(let i = 0; i < codelength; i++){
      newArr.push({id: i, letter:" "});
    }
    setinputcode(newArr)
    setinputid(0)
  }

  function handleVictory(){
    if(currentrys === codetrys){
      alert("YOU LOSE!")
      init()
    }
    else{
    let green = 0   
    inputcode.map((c) => {
      if (c.color === "green") {
        green++
      }
      return c
    })
    if(green === codelength){
      alert("¡YOU WIN!")
      init();
    }
    }
  }

  function handlereload(){
    setcodelength(8)
  }

  return (
    <div className='Wordle' data-theme="">
      <div className='buttonss'>
        <HowtoPlay />
        <button onClick={handlereload}>reload</button>
      </div>
      <h1 className='title'>WORDLE</h1>
      <div className='inputcode'>
      {inputcode.map((letter) =>
        <span key = {letter.id} className='cell'>{letter.letter}</span>)}
      </div>
      {listofcodes.map((c, i) =>
      <div key={i} className='code'>
        <div className='code-wrapper'>
        {c.word.map((number) =>
        <span key = {number.id} className='cell' style={{color: number.color}}>{number.letter}</span>)}
        </div>
      </div>
        )}
    </div>
    
  );
}
   
export default Wordle;