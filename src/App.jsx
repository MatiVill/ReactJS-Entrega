import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import EjemploFormulario from "./components/Examples/EjemploFormulario";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<ItemListContainer  />} />
          <Route path="/category/:idCategory" element={<ItemListContainer  />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/ejemplos" element={<EjemploFormulario />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}> </Route>

        </Routes>
      </CartProvider>
    </BrowserRouter>

  )
}

export default App
