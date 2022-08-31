import '../css/EjercicioDos.css'
import Contador from './EjercicioDosContador'
import Botoncito from './EjercicioDosBoton'
import { useState } from 'react'

function EjercicioDos (){
    const [numClicks, setNumClicks] = useState(0);
    const manejadorDeClick = () =>{
        setNumClicks (numClicks +1) ;
    }
    const resetClick = (numClicks) => {
        setNumClicks (0) ;
    };
    return(
        <div className="contadorContenedor">
            
            <h3>2.- Crear un Contador de Clicks</h3>
            <div className='contador-container'>
                <h2>"Nunca fue tan sencillo contarlos"</h2>
            <Contador 
                numClicks={numClicks}/>
            <Botoncito
                name='Click' clkButtom={true} manejadorDeClick ={manejadorDeClick}/>
            <Botoncito
                name='reset' clkButtom={false} manejadorDeClick ={resetClick}/>
        </div> 
        </div>
    )
}

export default EjercicioDos