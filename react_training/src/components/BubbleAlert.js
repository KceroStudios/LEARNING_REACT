import { Component } from "react"

const styles = {
    bubble:{
        background:'red',
        padding:'0px 5px',
        borderRadius:'30px',
    }
}
class BubbleAlert extends Component{
    getNumber(n){
        if (!n){return ' '}
        return n > 9 ? '9+' : n
    }
    render(){
        const{ value } = this.props
        return(
            <span style={styles.bubble}>
               {this.getNumber(value)} 
            </span>
        )
    }
}

export default BubbleAlert