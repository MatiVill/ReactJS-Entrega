import { useState, useEffect } from "react"

const EjemploContador = () => {
    console.log("Se monto o se actualizo el componente")
    //hook de estado: useState o variable de estado
    const [contador, setContador] = useState(0)
    const [ switchButton, setSwitchButton] = useState(true)

    const aumentar = () => {
        setContador(contador + 1)
    }

    useEffect( ()=> {

        const fetchApi =() => {
            fetch("https://fakestoreapi.com/products")
            .then( (response)=> response.json() )
            .then((data) => console.log(data))
        }
    
        fetchApi()

    }, [] )

const cambiarToggle = () => {
    setSwitchButton( !switchButton )
}
    //Se ejecuta solo al montar el componente
    //ej: Llamadas a api, suscripciones a eventListener
useEffect( ()=> {
    console.log("1er useEffect")
}, [] )

    //Se ejecuta en el montaje y cada vez que el contador se actualice
    //ej: para realizar acciones especificas cuando una variable cambie
useEffect( ()=> {
    console.log("2do useEffect")
}, [contador] )

    //Se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
    //ej: para operaciones globales de monitoreo o registro, actualizaciones generales del componente
useEffect ( () => {
    console.log("3er useEffect")
} )

    return (
        <div>
            <p> Contador: {contador} </p>
            <button onClick={aumentar} >+</button>
            <p> Valor del toggle: { switchButton.toString() } </p>
            <button onClick={cambiarToggle} >Cambiar valor toggle</button>
        </div>
    )
}
export default EjemploContador