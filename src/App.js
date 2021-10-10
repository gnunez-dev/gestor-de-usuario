import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UserForm from './components/UserForm'

function App() {

  const [usuarios, setUsuarios] = useState([]);
 

  const submit = usuario => {

    setUsuarios([
      ...usuarios,
      usuario,
    ])

  }

  console.log(usuarios)

  return (
    <Container>
      <h1>App Gestor de Usuarios</h1>
      <Card>
        <UserForm submit={submit}/>
      </Card>
      <Card>
        <ul>
          {usuarios.map( x => {
              return <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
          })}

        </ul>
      </Card>
    </Container>
  );
}

export default App;
