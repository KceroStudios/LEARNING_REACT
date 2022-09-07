import { useState } from 'react'
import Card from './component/Card'
import Container from './component/Container'
import UserForm from './component/UserForm'


function App() {
  const [ usuarios, setUsuarios ] = useState([])

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }

  return (
    <div style={{ marginTop: '15% '}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit}/>
           
            
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map( x => 
              <li key={x.email}>{`
                ${x.name} 
                ${x.lastName}
                ${x.email}
              `}
            </li>)}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App
