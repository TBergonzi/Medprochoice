import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import correo from './assets/fondo_correo.png'
import ApartadoEstados from './components/ApartadoEstados/ApartadoEstados.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Contenido'>
        <ApartadoEstados className='ApartadoEstados'/>
        <img src={correo} className='Fondo'/>
      </div>
      
    </div>
  );
}

export default App;
