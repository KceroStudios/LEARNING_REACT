
import { AiOutlineCloseSquare } from "react-icons/ai";
function Tarea ({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={completada ? "tareaContenedor completada" : "tareaContenedor"  }>
            <div 
                onClick={()=> completarTarea(id)}
                className="tareaTexto">
                {texto}
            </div>
            <div className="tareaContenedorIcono">
                <AiOutlineCloseSquare 
                    onClick={()=>eliminarTarea(id)}
                    className="tareaIcono"/>
            </div>
        </div>
    )
}

export default Tarea