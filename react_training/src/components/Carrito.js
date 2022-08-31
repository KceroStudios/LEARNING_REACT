import { Component } from "react"
import BubbleAlert from './BubbleAlert'
import DetallesCarrito from './DetallesCarrito'

const styles = {
    carrito:{
        background:'green',
        padding:'10px',
        borderRadius:'4px',
        cursor:'pointer',
        border:'none',
        color:'#fff',
    },
    bubble:{
        position:'relative',
        left:12,
        top:15,

    }
}

class Carrito extends Component{
    render(){
        const {carrito, esCarritoVisible, mostrarCarrito} = this.props
        const cantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad!==0
                        ? <BubbleAlert value = {cantidad} />
                    : null}
                </span>
                <button onClick={mostrarCarrito} style={styles.carrito}>Carrito</button>
                {esCarritoVisible ? <DetallesCarrito carrito={carrito} /> : null}
                
            </div>
        )
    }
}

export default Carrito