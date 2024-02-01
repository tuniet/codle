import './Game.css';
import React, { useState, useEffect } from 'react';

function Game(props) {

  const yellowact = props.yellow
  const rep = props.rep
  const codelength = props.codelength
  
  const [debug, setdebug] = useState(false)
  const forcedcode = []
  const [code, setcode] = useState([])
  const [inputcode, setinputcode] = useState([]);
  const [inputid, setinputid] = useState(0);
  const [listofcodes, setlistofcodes] = useState([]);


  function init(){
    //start input, start list & create code
    const newArr = [];
    const newCode = []
    for(let i = 0; i < codelength; i++){
      newArr.push({id: i, number:" ", color: "black"});
      newCode.push({id: i, number: getRandomInt(10)} )
    }
    setinputcode(newArr);
    setcode(newCode)
    const newList = [{code: [], red: 0, green: 0, yellow: 0}];
    setlistofcodes(newList)

    //used only in debug mode
    forcecode();
  }

  function forcecode(){
    if(forcedcode.length > 0){
      let newCode = []
      for(let i = 0; i < forcedcode.length; i++){
        newCode.push({id: i, number: forcedcode[i]})
      }
      setcode(newCode)
      setdebug(true);
    }
  }

  useEffect(() => {
    init();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  document.onkeydown = function(e) {
    if(e.key.charCodeAt(0) >= 48 && e.key.charCodeAt(0) <= 57 && inputid < codelength){
      handleinputchange(inputid, e.key.charCodeAt(0) - 48)
      setinputid(inputid + 1)
    }
    else if(e.key.charCodeAt(0) === 66 && inputid > 0){
      handleinputchange(inputid - 1, " ")
      setinputid(inputid - 1)
    }
    else if(e.key.charCodeAt(0) === 69 && inputid === codelength){
      handleaddrow()
      handleVictory()
      handleClearInput()
    }
  }

  function handleinputchange(ind, num){
    const newinputcode = inputcode.map((c) => {
      if (c.id === ind) {
        return {id: ind, number: num, color: calcColor(ind, num)};
      } else {
        return c;
      }
    });
    setinputcode(newinputcode);

  }

  function calcColor(i, n){
    let green = false;
    let yellow = false;
    code.map((c) => {
      if (c.number === n) {
        if(c.id === i) green = true
        else if(yellowact)yellow = true
      }
      return c
    })
    if(green) {return "green"}
    else if(yellow) {return "yellow"}
    else {return "red"}
  }

  function handleaddrow(){
    const insertAt = 0;
    let green = 0
    let yellow = 0
    let red = 0

    inputcode.map((c) => {
      console.log(c.color)
      if (c.color === "green") {
        green++
      }
      else if(c.color === "yellow"){
        yellow++;
      }
      else if(c.color === "red"){
        red++
      }
      return c
    })

    const nexlist = [
      ...listofcodes.slice(0, insertAt),
      {code: inputcode, red: red, green: green, yellow: yellow},
      ...listofcodes.slice(insertAt)
    ];
    setlistofcodes(nexlist);
  }

  function handleClearInput(){
    let newArr = []
    for(let i = 0; i < codelength; i++){
      newArr.push({id: i, number:" "});
    }
    setinputcode(newArr)
    setinputid(0)
  }

  function handleVictory(){
    let green = 0   
    if(!debug){
    inputcode.map((c) => {
      console.log(c.color)
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
    <div className='Game'>
        <h1 className='title'>CODLE</h1>
      <div className='code'>
      {inputcode.map((number) =>
        <span key = {number.id} className='cell'>{number.number}</span>)}
      </div>
      {listofcodes.map((c, i) =>
      <div key={i} className='code'>
        {c.code.map((number) =>
        <span key = {number.id} className='cell' style={{color: number.color}}>{number.number}</span>)}
        <div> 
          <span>Red: {c.red}</span>
          {yellowact &&
            <span>Yellow: {c.yellow}</span>
          }
          <span>Green: {c.green}</span>
        </div>
      </div>
      )}   
    </div>
  );
}

export default Game;