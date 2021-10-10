import { useState } from "react"

/**
 * Lo que se hace aquí es crear un hooks propio. Este hooks es para manejar el estado del formulario.
 *  Se recibe por parametro el estado inicial del formulario
 */

const useFormulario = ( inicial ) => {
    const [ formulario, setFormulario ] = useState(inicial) //se hace un destructuring de useState

    /*
    Se crea la funcion que se va a encargar de manejar los cambios en los elementos del formulario.
    Se le pasan por parametro los eventos.

    A la función que configura el estado ( setFormulario ), se le pasa por parametro un obj
    que tendra como primera propiedad una copia del estado actual,
    luego se cambia el valor que se desee, para esto se usa [e.target.name] esto lo que permite es crear y modificar las propiedades del objeto
    de forma dinamica, según el name que tenga cada elemento del formulario a eso se le pasa el valor con e.target.value, quien se encarga de tomar el valor del campo.

    Si se necesita manejar elementos de tipo checkbox, entonces debemos usar e.target.checked en vez de e.target.value
    
    */
    const handleChange = (e) =>{

        setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
        })

    }

    const reset = () => {
        setFormulario(inicial) // setea el formulario a su estado inicial
    }

    return [formulario, handleChange, reset]    //se retorna el obj formulario, con la función que maneja los cambios, y otra función que lo devuelve a su estado inicial

}

export default useFormulario // esto es para que se exporte por defecto esta función 