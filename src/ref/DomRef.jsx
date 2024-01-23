import { useEffect, useRef } from "react"

// Interactuar con el DOM de manera imperativa

function DomRef() {
  const inputRef = useRef()

  useEffect(() => {
    console.log('Render DomRef component')
  })

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <h1>DomRef component</h1>
      <button onClick={focus}>Focus</button>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default DomRef
