import { useState } from "react";
import AppCallback from "./callback/AppCallback"

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Modo oscuro
      </label>
      <AppCallback
        userId={'0001'}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  )
}

export default App
