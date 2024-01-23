import { useEffect } from "react"
import { useState } from "react"

function TimerState() {
  const [startTime, setStartTime] = useState()
  useEffect(() => {
    console.log('Render TimerState component')
  })

  const start = () => {
    setStartTime(Date.now())
  }

  const end = () => {
    console.log('Time passed', Date.now() - startTime)
    setStartTime()
  }

  return (
    <>
      <h1>TimerState component</h1>
      <button onClick={start}>Start</button>
      <button onClick={end}>Console time passed</button>
    </>
  )
}

export default TimerState
