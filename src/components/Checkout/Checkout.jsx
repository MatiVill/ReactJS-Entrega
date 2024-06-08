import { useState } from "react";
import Formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });
    const [idOrden, setIdOrden] = useState(null)
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })

    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        //formato a los datos a subir
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal()
        };
        try {
            //validar formulario
            const response = await validateForm(datosForm)
            if (response.status === "success") {
                generateOrder(orden);
            } else {
                toast.warning(response.message)
            }
        } catch (error) {
            toast.error("Orden no enviada")
        }
    };

    const generateOrder = (orden) => {
        const ordenesRef = collection(db, "orders");
        addDoc(ordenesRef, orden)
            .then((respuesta) => setIdOrden(respuesta.id))
            .catch((error) => console.log(error))
            .finally(() => {
                updateStock()
                vaciarCarrito()
            })
    };

    const updateStock = () => {
        carrito.map((productoCarrito) => {
            let quantity = productoCarrito.quantity
            delete productoCarrito.quantity

            const productoRef = doc(db, "products", productoCarrito.id)
            setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity })
                .then(() => console.log("Stock actualizado correctamente"))
                .catch((error) => console.log(error))
        })
    }

    return (
        <div>
            {
                idOrden ? (
                    <div>
                        <h2>Orden generada con éxito</h2>
                        <p>Guarde el id de su orden: {idOrden} </p>
                    </div>
                ) : (
                    <Formulario
                        datosForm={datosForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm} />
                )
            }
        </div>
    )
}

export default Checkout