
import './App.css';
import Header from './components/header/Header';
import Cards from './components/cards/cards';
import Contador from './components/contadorDeClicks/contador';
import Calculadora from './components/calculadora/calculadora';
import ListaDeTarea from './components/listaDeTareas/listaDeTareas';

function App() {
    return (
        <div className="App">
            <div className="agenda">
                <div className="costura">
                    <div className="col col1">
                    <Calculadora />
                    </div>
                    <div className="col col2">
                        columna2
                    </div>
                </div>
            </div>
            <div className="sombra"></div>
            
            <Header />
            <Cards />
            <Contador />
           
            <ListaDeTarea />
        </div>
    );
}

export default App;
