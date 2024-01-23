import { useEffect, useRef } from "react"

function TimerRef() {
  const startTimeRef = useRef()
  useEffect(() => {
    console.log('Render TimerRef component')
  })

  const start = () => {
    startTimeRef.current = Date.now()
  }

  const end = () => {
    console.log('Time passed', Date.now() - startTimeRef.current)
    startTimeRef.current = undefined
  }

  return (
    <>
      <h1>TimerRef component</h1>
      <button onClick={start}>Start</button>
      <button onClick={end}>Console time passed</button>
    </>
  )
}

export default TimerRef
