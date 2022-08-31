import CardsContent from './cardsContent'
import '../../css/cards.css'

function Cards (){
    return(
        <div className='cardsContainer'>
            <h3>1.- Crear un Componente reutilizable que muestre comentarios similar al de freeCodeCamp</h3>
            <h2>Estos son Testimonios Elocuentes de Algunos Ex-Alumnos:</h2>
           
            <CardsContent 
                img='carmin' 
                name='Carmín Gonzales' 
                city='Wakanda' 
                position='Ingeniera de Softwere' 
                company='Tesla'
                description='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer' 
            />
            
            <CardsContent 
                img='violeta' 
                name='Violeta Ramirez' 
                city='Asgar' 
                position='Ingeniera de Sistemas' 
                company='Amazon' 
                description='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' 
            />
            
            <CardsContent 
                img='rosita' 
                name='Rosalia Rozado' 
                city='Titan' 
                position='Analista de Sistemas' 
                company='Stark' 
                description='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
            />
        </div>
    )
}

export default Cards