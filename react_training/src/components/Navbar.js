import { Component } from "react"
import Logo from './Logo'
import Carrito from './Carrito'

const styles = {
    nav:{
        background:'blue',
        background: '#2196f3',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff' ,
        position:'relative',


    }
}
class Navbar extends Component{
    render(){
        const {carrito, esCarritoVisible, mostrarCarrito} = this.props
        return(
            <nav style={styles.nav}>
                <Logo/>
                <Carrito 
                    carrito          ={carrito}
                    esCarritoVisible ={esCarritoVisible}
                    mostrarCarrito   ={mostrarCarrito}
                />
            </nav>
        )
    }
}

export default Navbar