import { useFormik } from 'formik'

const validate = (values) => {
  const errors = {}
  if(!values.name) {
    errors.name = 'Requerido'
  } else if(values.name.length < 5){
    errors.name = 'muy corto'
  }

  if(!values.lastname) {
    errors.lastname = 'Requerido'
  } else if(values.lastname.length < 5){
    errors.lastname = 'muy corto'
  }

  if(!values.email) {
    errors.email = 'Requerido'
  } else if(values.email.length < 5){
    errors.email = 'muy corto'
  }

  return errors
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={ formik.hamdleSubmit}>
      <label>Nombre</label>
      <input
        name='name'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <br/>
      <label>Apellido</label>
      <input
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

      <br/>
      <label>Email</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <button type='submit'>Enviar</button>
    </form>
  );
    
}

export default App;
