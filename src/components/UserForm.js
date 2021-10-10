import './UserForm.css'
import Button from './Button'
import Input from './Input'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname:'',
        email: ''
    })

    const handleSubmint = (e) => {
        e.preventDefault() //esto es para evitar que haga el evento que tiene por defecto, como actualizar la pág
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmint}>
          <Input
            label="Nombre"
            name="name"
            value={formulario.name}
            onChange={handleChange}
          />
          <Input
            label="Apellido"
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange}
          />
          <Input
            label="E-mail"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
          <Button>Enviar</Button>
        </form>
    )
}

export default UserForm