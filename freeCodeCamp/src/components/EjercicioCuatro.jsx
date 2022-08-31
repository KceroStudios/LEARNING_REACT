import '../css/EjercicioCuatro.css'
import ListaDeTareas from './ListadoTareas'
function EjercicioCuatro (){
    return(
        <div className="listaDeTareas">
            <div className='ListaDeTareasContenedor'>
                <h1>Mis Tareas</h1>
                
                <ListaDeTareas />
           </div>
        </div>
    )
}

export default EjercicioCuatro;