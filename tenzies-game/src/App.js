import React from "react"
import Die from "./components/Die";
import Navbar from "./components/Navbar";
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = React.useState(CreateDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [dot, setDot] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    const allholdDices = dice.every(die => die.isHeld)
    const firstDiceValue = dice[0].value
    const alldiceValue = dice.every(die => die.value === firstDiceValue)
    if (allholdDices && alldiceValue) {
      setTenzies(true)
    }
  }, [dice])

  function NewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function CreateDice() {
    const newDices = []
    for (let index = 0; index < 10; index++) {
      newDices.push(NewDice())
    }
    return newDices
  }

  function holldDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld }
        : die
    }))
  }

  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holldDice={() => holldDice(die.id)}
      dot={dot}
    />
  ))

  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : NewDice()
      }))
      changeCount()
    } else {
      setTenzies(false)
      changeCount()
      setDice(CreateDice())
    }
  }

  function changeCount() {
    if (!tenzies) { setCount(prevCount => prevCount = prevCount + 1) }
    else { setCount(prevCount => prevCount = 0) }
  }

  function ChangeDots() {
    setDot(prevDot => !prevDot)
  }

  function ChangeDarkMode(){
    setDarkMode(prevdarkmode => prevdarkmode =!darkMode)
  }

  return (
    <div>
      {tenzies && <Confetti />}
      <Navbar count={count} changeCount={changeCount} checked={darkMode} onChange={ChangeDarkMode} />
      <main style={{background: darkMode ? "black": ""}}>
        <div className="real-dot">
          <img src="./images/5.png" style={{background: "white"}} alt="photo" />
          <input type="checkbox" className="dot--input" checked={dot} onChange={ChangeDots} />
        </div>
        <h1 className={tenzies ? "animate__animated animate__hinge title" : "title"}>Tenzies</h1>
        <p className="instructions animate__animated animate__fadeIn">Roll until all dice are the same.
          Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    </div>
  );

}

export default App;
