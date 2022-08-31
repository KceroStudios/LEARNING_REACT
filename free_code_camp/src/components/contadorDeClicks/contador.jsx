import Cuenta from './cuenta'
import Botoncito from './contadorBoton'
import { useState } from 'react'
import '../../css/contador.css'

function Contador (){
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
            <Cuenta 
                numClicks={numClicks}/>
            <Botoncito
                name='Click' clkButtom={true} manejadorDeClick ={manejadorDeClick}/>
            <Botoncito
                name='reset' clkButtom={false} manejadorDeClick ={resetClick}/>
        </div> 
        </div>
    )
}

export default Contador