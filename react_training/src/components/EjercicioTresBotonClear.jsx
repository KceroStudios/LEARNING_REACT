
const BotonClear = (props) => (
    <div
        className="botonClear"
        onClick={ props.clear}>
        {props.children}
    </div>
)

export default BotonClear