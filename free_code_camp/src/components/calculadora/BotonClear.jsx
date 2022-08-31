
const BotonClear = (props) => (
    <button
        className="botonClear botonCalculador"
        onClick={ props.clear}>
        {props.children}
    </button>
)

export default BotonClear