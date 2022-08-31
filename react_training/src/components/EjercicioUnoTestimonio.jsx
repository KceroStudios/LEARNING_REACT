
function Testimonio (props){
  return(
    <div className='testimonios'>
      <img className='testimonios-img' src= {require(`../image/testimonio-${props.img}.jpg`)} />
      <div className='testimonios-texto'>
        <p className='testimonios-nombre'><strong>{props.nombre}</strong> de {props.ciudad}</p>
        <p className='testimonios-cargo'>{props.cargo} en <b>{props.compania}</b></p>
        <p className='testimonios-testimonio'>"{props.comentario}"</p>
      </div>
    </div>
  )
}

export default Testimonio