import { Maquina } from './components/Maquina'
import './App.css'

function App() {


  return (
    <main className='fondo-arcade'>
      <div className="titulo-fabuloso">
        <strong>!</strong>
        <strong>B</strong>
        <strong>i</strong>
        <strong>e</strong>
        <strong>n</strong>
        <strong>v</strong>
        <strong>e</strong>
        <strong>n</strong>
        <strong>i</strong>
        <strong>d</strong>
        <strong>o</strong>
        <strong>s </strong>
       
        <strong>a </strong>
       
        <strong>l</strong>
        <strong>a </strong>
    
        <strong>M</strong>
        <strong>á</strong>
        <strong>q</strong>
        <strong>u</strong>
        <strong>i</strong>
        <strong>n</strong>
        <strong>a </strong>

        <strong>A</strong>
        <strong>r</strong>
        <strong>c</strong>
        <strong>a</strong>
        <strong>d</strong>
        <strong>e</strong>
        <strong>!</strong>
      </div>
      <section className='maquina'>
        <Maquina />
      </section>
      <section className="controles">
        <div className="boton">Botón</div>
        <div className="palanca">Palanca</div>
      </section>
      <section className="informacion">
        <div className="pantalla">Pantalla</div>
        <div className="puntuacion">Puntuación</div>
        <div className="vidas">Vidas</div>
      </section>
      
    </main>
  )
}

export default App
