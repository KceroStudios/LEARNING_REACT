import Imput from './Imput'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
    const [ formulario, handleChange, reset ] = useFormulario({
        name: '',
        lastName: '',
        email: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return(
        <form onSubmit={handleSubmit}>
            <Imput 
            placeholder='Nombre'
            label='nombre' 
            name='name'
            value={formulario.name} 
            onChange={handleChange} 
            />
            <Imput 
            placeholder='Apellido'
            label='apellido' 
            name='lastName' 
            value={formulario.lastName} 
            onChange={handleChange} 
            />
            <Imput 
            placeholder='email'
            label='Correo' 
            name='email' 
            value={formulario.email} 
            onChange={handleChange} 
            />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm