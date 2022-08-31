import { findByLabelText } from '@testing-library/react'
import { Component } from 'react'
import Button from './Button'


const styles = {
    producto: {
        border: '1px #eee solid',
        borderRadius: '7px',
        width:'20%',
        padding: '20px',
        margin: '10px',
        boxShadow: '0 0 3px #ccc',
        display: 'flex',
        flexDirection:'column',
    },

    image:{
        width:'100%'
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarrito } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.image} alt={producto.name} src={producto.img}/>
                <h3> {producto.name} </h3>
                <b> {producto.price} </b>
                <Button onClick={() => agregarAlCarrito(producto)}>
                    Agregar al Carrito
                </Button>
            </div>
           
    
        )
    }
}

export default Producto

