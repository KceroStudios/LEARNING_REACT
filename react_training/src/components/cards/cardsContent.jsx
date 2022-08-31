
function CardsContent (props){
  return(
    <div className='content'>
      <img className='contentImg' src= {require(`../../image/testimonio-${props.img}.jpg`)} />
      <div className='contentTxt'>
        <p className='contentName'><strong>{props.name}</strong> de {props.city}</p>
        <p className='contentPosition'>{props.position} en <b>{props.company}</b></p>
        <p className='contentDescription'>"{props.description}"</p>
      </div> 

    </div>
  )
}

export default CardsContent