
import './App.css'
import Header from './components/Header'
import EjercicioUno from './components/EjercicioUno'
import EjercicioDos from './components/EjercicioDos'
import EjercicioTres from './components/EjercicioTres'
import EjercicioCuatro from './components/EjercicioCuatro'

function App() {
    
    return (
        <div className="App">
            <Header />
            <EjercicioUno />   
            <EjercicioDos />
            <EjercicioTres />
            <EjercicioCuatro />
    </div>
  );
}

export default App;
