import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Titulo from './components/Titulo'
import Navbar from './components/Navbar'
class App extends Component {
  state = {
    productos: [
      {name: 'Aceite de oliva', price: 250, img: '/productos/oliva.jpg'},
      {name: 'Maiz Enlatado', price: 250, img: '/productos/maiz.jpg'},
      {name: 'Atún', price: 250, img: '/productos/tuna.jpg'},
    ],
    carrito: [],
    esCarritoVisible: false,
  }

  agregarAlCarrito = (producto) =>{

    const { carrito } = this.state
    if (carrito.find(x => x.name === producto.name)){
      const newCarrito = carrito.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({carrito : newCarrito})
    }
    return this.setState({
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarrito = () => {
    if(!this.state.carrito.length){
      return
    }
    this.setState({esCarritoVisible: !this.state.esCarritoVisible})
  }

  render() {
    const{esCarritoVisible} = this.state
    return (
      <div>
        <Navbar 
          carrito          = {this.state.carrito}
          esCarritoVisible = {esCarritoVisible}
          mostrarCarrito   = {this.mostrarCarrito}
        />
        <Layout>
          <Titulo/>
          <Productos
            agregarAlCarrito={this.agregarAlCarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
