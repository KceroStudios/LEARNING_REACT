
import '../../css/tareas.css'
import Tareas from './tareas'
function ListaDeTarea (){
    return(
        <div className="listaDeTareas">
            <div className='ListaDeTareasContenedor'>
                <h1>Mis Tareas</h1>    
                <Tareas />
           </div>
        </div>
    )
}

export default ListaDeTarea;