import { useEffect, useRef } from "react"

function CounterRef() {
  const countRef = useRef(0)

  useEffect(() => {
    console.log('Render CounterRef component')
  })

  return (
    <>
      <h1>CounterRef component</h1>
      <button onClick={() => countRef.current = (countRef.current + 1)}>+</button>
      <button onClick={() => alert(countRef.current)}>Alert count</button>
    </>
  )
}

export default CounterRef
