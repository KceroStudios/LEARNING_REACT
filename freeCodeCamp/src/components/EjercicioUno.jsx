import Testimonio from './EjercicioUnoTestimonio'
import '../css/EjercicioUno.css'

function EjercicioUno (){
    return(
        <div className='testimoniosContenedor'>
            <h3>1.- Crear un Componente reutilizable que muestre comentarios similar al de freeCodeCamp</h3>
            <h2>Estos son Testimonios Elocuentes de Algunos Ex-Alumnos:</h2>
           
            <Testimonio 
                img='carmin' 
                nombre='Carmín Gonzales' 
                ciudad='Wakanda' 
                cargo='Ingeniera de Softwere' 
                compania='Tesla'
                 comentario='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer' />
            
            <Testimonio 
                img='violeta' 
                nombre='Violeta Ramirez' 
                ciudad='Asgar' 
                cargo='Ingeniera de Sistemas' 
                compania='Amazon' 
                comentario='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
            
            <Testimonio 
                img='rosita' 
                nombre='Rosalia Rozado' 
                ciudad='Titan' 
                cargo='Analista de Sistemas' 
                compania='Stark' 
                comentario='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'/>
        </div>
    )
}

export default EjercicioUno