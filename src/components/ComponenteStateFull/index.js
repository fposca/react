import React, { useState } from "react";
import "./styles.css"

const ComponenteStateFull = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1) 
    if (counter <= 1) {
      setCounter(counter + 0)
    }
  }
  
  return (
    <div className="card">
  
      <div className="buttons">
      <button className="button button4"  onClick={handleClick2}>-</button>
        <div className="counter"> {counter}</div>
        <button className="button button5" onClick={handleClick1}>+</button>
      </div>
    </div>
  )
}
export default ComponenteStateFull;