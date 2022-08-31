import { Component } from "react"
const Style = {
    h1:{
        textAlign:'center',
        padding:'20px',
        margin:'25px',
        borderBottom:'1px solid #eee',
    }
}
class Titulo extends Component{
    render(){
        return (<h1 style={Style.h1}>Tienda de Abarrotes</h1>)
    }
}

export default Titulo