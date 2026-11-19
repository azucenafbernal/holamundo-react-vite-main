import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Punto de entrada: monta el componente App en <div id="root">
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function Saludo() {
  return (
    <div className="saludo">
    <h1>¡Hola Mundo!</h1>
    <p>Esta es mi primera aplicación
    React con Vite</p>
    </div>
  )
}
export default Saludo