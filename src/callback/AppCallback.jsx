import './appCallback.css'
import { memo, useCallback, useEffect } from "react";

export default function AppCallback({ userId, theme }) {
  const onSubmit = useCallback((greeting) => {
    console.log('post to server', { greeting, userId })
  }, [userId])


  return (
    <div className={theme}>
      <h1>AppCallback component</h1>
      <MemoChild
        onSubmit={onSubmit}
      />
    </div>
  )
}

function Child({ onSubmit }) {

  useEffect(() => {
    console.log('Render Child')
  })

  console.log('starting slow process');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // No hacer nada durante 500 ms para emular un código extremadamente lento
  }
  console.log('finishing slow process');

  return (
    <div>
      <button onClick={() => onSubmit('hello')}>Hello!</button>
      <button onClick={() => onSubmit('bye')}>Bye!</button>
    </div>
  )
}

const MemoChild = memo(Child)