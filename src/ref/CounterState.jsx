import { useEffect } from "react"
import { useState } from "react"

function CounterState() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Render CounterState component')
  })

  return (
    <>
      <h1>CounterState component</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => alert(count)}>Alert count</button>
    </>
  )
}

export default CounterState
