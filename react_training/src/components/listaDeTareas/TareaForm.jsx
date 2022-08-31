import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

function TareaForm (props){
    const [input, setInput] = useState('')
    const manejarCambio = e => {
        setInput(e.target.value)
    }
    const manejarEnvio = e =>{
        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false,
        }

        props.onSubmit(tareaNueva)
    }
    return(
        <form 
            className="tareaForm"
            onSubmit={manejarEnvio}
        >
            <input 
                className="tareaInput"
                name="texto"
                type="text" 
                placeholder="Escribe una Tarea"
                onChange={manejarCambio}
            />
            <button>Agregar Tarea</button>
        </form>
    )

}

export default TareaForm 