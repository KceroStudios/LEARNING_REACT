import { Component } from 'react'
const styles = {
    detallesCarrito:{
        background: 'rgb(255, 255, 255)',
        position: 'absolute',
        boxShadow: 'rgba(0, 0, 0, 0.3) 1px 5px 5px',
        borderRadius: '5px',
        width:'300px',
        color: 'rgb(119, 119, 119)',
        right: '30px',
        top: '62px'
    },
    ul:{
        margin: '0',
        padding: '0'
    },
    li:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #eee',
        padding: '10px 20px',

    },
}

class DetallesCarrito extends Component{
    render(){
        const {carrito} = this.props
        console.log(carrito)
        return(
        <div style={styles.detallesCarrito}>
            <ul style={styles.ul}>
              {carrito.map(x=>
                <li style={styles.li} key={x.name}>
                    <img alt={x.name} src={x.img} width='50'/>
                    {x.name}
                    <b>{x.cantidad}</b>
                </li>) }
            </ul>
        </div>
        )
    }
}

export default DetallesCarrito