import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import EjemploFormulario from "./components/Examples/EjemploFormulario";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer  />} />
          <Route path="/category/:idCategory" element={<ItemListContainer  />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/ejemplos" element={<EjemploFormulario />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </CartProvider>
    </BrowserRouter>

  )
}

export default App
