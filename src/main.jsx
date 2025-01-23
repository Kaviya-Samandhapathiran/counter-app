import { useState } from 'react'
import { createRoot } from 'react-dom/client'


const root = createRoot(document.getElementById("root"))

function CounterApp() {
  var [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div style={{ textAlign: "center", margin: "8rem 5rem 0rem 25rem", border: "2px solid black", width: "fit-content", padding: "4rem" }}>
      <h1 style={{margin:"-2rem 0rem 2rem 0rem"}}>Counter App</h1>
      <h1 style={{ border: "1px solid black" }}>{count}</h1>
      <button style={{
        marginRight: "5rem", backgroundColor: "green", padding: "1rem", outline: "none",
        border: "none", cursor: "pointer", borderRadius: "2rem", color:"white"
      }} onClick={increment}>Increment</button>
      <button style={{
        marginRight: "5rem",padding: "1rem", backgroundColor: "red", outline: "none",
        border: "none", cursor: "pointer", borderRadius: "2rem", color:"white"
      }} onClick={decrement}>Decrement</button>
            <button style={{
        padding: "1rem", backgroundColor: "black", outline: "none",
        border: "none", cursor: "pointer", borderRadius: "2rem", color:"white"
      }} onClick={reset}>Reset Count</button>
    </div>
  )

}


root.render(<CounterApp />)
