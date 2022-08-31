import { Component } from "react"

const styles = {
    layout:{
        backgroundColor: '#eee',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    container:{
        width:'80%',
        backgroundColor:'#fff',
        borderRadius:'10px',
        margin: ' 20px 0',
       
    }
}

class Layout extends Component {
    render() {
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout