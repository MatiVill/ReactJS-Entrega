import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"



const ItemDetailContainer = () => {
const [product, setProduct] = useState({});
const { idProduct } = useParams();


const getProduct = () => {
    const productRef = doc(db, "products", idProduct)
    getDoc(productRef)
        .then((productDb)=> {
            const data = {id: productDb.id, ...productDb.data()}
            setProduct(data)
        })
        .catch((error) => {
            // Manejar el error
            console.error("Error al obtener el producto: ", error);
            if (error.code === "not-found") {
                console.error("Producto no encontrado");
                // Aquí puedes mostrar un mensaje al usuario indicando que el producto no fue encontrado
                // Por ejemplo, si estás trabajando con un componente React, podrías actualizar el estado para mostrar un mensaje de error
                // setError("Producto no encontrado");
            }
        });
};

useEffect (() => {
    getProduct()
}, []);


    return (
    <ItemDetail product={product}/>
    );
}
export default ItemDetailContainer