import './../css/Imput.css'
const Imput = ({ label, ...rest }) =>{
    return(
        <div className="field">
            <label>{ label }</label>
            <input {...rest} />
        </div>
    )
}

export default Imput