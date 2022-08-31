
function Botoncito ({name, clkButtom, manejadorDeClick}){  
    return(
        <button 
            className={(clkButtom ? 'clkButtom' : 'resetButtom')}
            onClick = {manejadorDeClick}
            >
            {name}
        </button>
    )
}

export default Botoncito