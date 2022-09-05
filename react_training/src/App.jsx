import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: 'por defecto', 
    texto: '', 
    select: '', 
    check: false,
    estado: 'opcion1'
  })

  const handleChange = ({target}) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))
  }

console.log(value)
  return(
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input type='text' name="normal" value={value.normal} onChange={handleChange}/>
      <textarea name="texto" onChange={handleChange} value={value.texto}/>
      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''> -- Seleccione -- </option>
        <option value='Opcion 1'> Opcion 1 </option>
        <option value='Opcion 2'> Opcion 2</option>
        <option value='Opcion 3'> Opcion 3 </option>
        <option value='Opcion 4'> Opcion 4 </option>
        <option value='Opcion 5'> Opcion 5 </option>
        <option value='Opcion 6'> Opcion 6 </option>
      </select>

      <input
        type='checkbox'
        name="check"
        onChange={handleChange}
        checked={value.check}
        />

        <div>
          <label>Opciones:</label>
          <input
            onChange={handleChange}
            type='radio'
            value='opcion1'
            name="estado"
            checked={value.estado === 'opcion1'}
          /> Opción 1
          <input
            onChange={handleChange}
            type='radio'
            value='opcion2'
            name="estado"
            checked={value.estado === 'opcion2'}
          /> Opción 2
          <input
            onChange={handleChange}
            type='radio'
            value='opcion3'
            name="estado"
            checked={value.estado === 'opcion3'}
          /> Opción 3
    
        </div>
    </div>

  )
}

export default App;
