import './Wordle.css';
import React, { useState, useEffect } from 'react';
import HowtoPlay from './Components/HowToPlay';
import DropdownSelect from './Components/DropdownSelect';
import UsedLetters from './Components/UsedLetters'
const letterList = [
  {letter: "q" , color: "none"},
  {letter: "w" , color: "none"},
  {letter: "e" , color: "none"},
  {letter: "r" , color: "none"},
  {letter: "t" , color: "none"},
  {letter: "y" , color: "none"},
  {letter: "u" , color: "none"},
  {letter: "i" , color: "none"},
  {letter: "o" , color: "none"},
  {letter: "p" , color: "none"},
  {letter: "a" , color: "none"},
  {letter: "s" , color: "none"},
  {letter: "d" , color: "none"},
  {letter: "f" , color: "none"},
  {letter: "g" , color: "none"},
  {letter: "h" , color: "none"},
  {letter: "j" , color: "none"},
  {letter: "k" , color: "none"},
  {letter: "l" , color: "none"},
  {letter: "z" , color: "none"},
  {letter: "x" , color: "none"},
  {letter: "c" , color: "none"},
  {letter: "v" , color: "none"},
  {letter: "b" , color: "none"},
  {letter: "n" , color: "none"},
  {letter: "m" , color: "none"},

]
function Wordle() {

  const [selectedDiff, setSelected] = useState("Medium");
  const [codelength, setcodelength] = useState(5);
  const [codetrys, setcodetrys] = useState(5);
  const [currentrys, setcurrenttrys] = useState(0);
  const [code, setcode] = useState([]);
  const [inputcode, setinputcode] = useState([]);
  const [inputid, setinputid] = useState(0);
  const [listofcodes, setlistofcodes] = useState([]);
  const [usedletters, setUsedLetters] = useState(letterList);

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
  }, [codelength]);
  useEffect(() => {
    changediff(selectedDiff)
  }, [selectedDiff]);

  function changediff(diff){
    switch(diff){
      case "Easy":
        setcodelength(4)
        console.log("ez")
        break
      case "Medium":
        setcodelength(5)
        break
      case "Hard":
        setcodelength(6)
        break
      default:
        //nothing
    }
  }

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
      colorLetterList()
      handleClearInput()
    }
  }

  function setlistcolor(l){
    let color = l.color;
    inputcode.map((c) => {
      if(c.letter === l.letter){
        color = c.color
      }
    }) 
    return color
  }

  function colorLetterList(){
    setUsedLetters(usedletters.map((l) => {
      return {letter : l.letter, color: setlistcolor(l)}
    }))
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
    else if(yellow) {return "orange"}
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

  return (
    <div className='Wordle' data-theme="">
      <div className='buttonss'>
        <p>Difficulty: </p>
        <DropdownSelect
        title=""
        options={["Easy", "Medium", "Hard"]}
        placeholder={selectedDiff}
        setSelected = {setSelected}
        />
        <UsedLetters usedletters = {usedletters}/>
        <HowtoPlay />
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
        {console.log(usedletters)}
    </div>
    
  );
}
   
export default Wordle;