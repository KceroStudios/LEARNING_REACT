import { Component } from 'react'

const styles = {
    button:{
        backgroundColor:'#8bc34a',
        border: 'none',
        borderRadius: '4px',
        padding:'7px 4px',
        color: '#fff',
    }
}

class Button extends Component {
    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button
