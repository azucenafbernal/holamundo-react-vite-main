import { useState } from 'react'
import Saludo from './components/Saludo'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Logo de Vite" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="Logo de React" />
        </a>
      </div>
      <h2>Vite + React</h2>

      {/* Nuestro componente Saludo */}
      <Saludo />

      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Has pulsado {count} {count === 1 ? 'vez' : 'veces'}
      </button>
      <p className="nota">
        Edita <code>src/components/Saludo.jsx</code>, guarda y observa el HMR.
      </p>
    </div>
  )
}

export default App
