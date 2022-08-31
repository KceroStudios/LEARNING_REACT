import '../../css/header.css'
function Header (){
    return(
        <div className="header">
            <img className='react-img' src= {require(`../../image/logo192.png`)} />
            <h1>EJERCICIOS DE REACT</h1>
        </div>
    )
}

export default Header