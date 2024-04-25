import { useState } from "react"

const EjemploContador = () => {
    //hook de estado: useState o variable de estado
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <p> Contador: {contador} </p>
            <button onClick={aumentar} >+</button>
        </div>
    )
}
export default EjemploContador