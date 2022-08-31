import { Component } from "react"
const styles = {
    logo: {
        fontWeight: '700',
        border: '1px solid rgb(238, 238, 238)',
        padding: '2px 10px',
        borderRadius: '4px'     
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                LogoTipo
            </div>
        )
    }
}



export default Logo