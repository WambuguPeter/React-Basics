import { useState } from 'react'
import './App.css'

function App() {
  const[number, setNumber] = useState(10);

  const handleIncrease = () =>{
    setNumber(number + 1)
  }

  const handleDecrease = () =>{
    setNumber(number - 1)
  }
  
  return (
    <>
     <div className="counter">
      <h2>Simple Counter App</h2>

      <div className="counter-card">
        <button onClick={handleIncrease}>+</button>
        <h3>Current Number : {number}</h3>
        <button onClick={handleDecrease}>-</button>
      </div>
     </div>
    </>
  )
}

export default App
