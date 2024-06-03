import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"



const ItemDetailContainer = () => {
const [product, setProduct] = useState({});
const { idProduct } = useParams()

const getProduct = () => {
    const productRef = doc(db, "products", idProduct)
    getDoc(productRef)
        .then((productDb)=> {
            const data = {id: productDb.id, ...productDb.data()}
            setProduct(data)
        })
}

useEffect (() => {
    getProduct()
}, []);


    return (
    <ItemDetail product={product}/>
    );
}
export default ItemDetailContainer