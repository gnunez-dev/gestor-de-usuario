import './Input.css'

const Input = ({ label, ...rest }) =>{
    return (

        <div className="filed">
            <label>{label}</label>
            <input {...rest}/>

        </div>

       
    )
}

export default Input

    