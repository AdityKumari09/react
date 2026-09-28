import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  const[counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const subtractValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>My counter app</h1>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={subtractValue}>Subtract value: {counter}</button>
    </>
  )
}

export default App
