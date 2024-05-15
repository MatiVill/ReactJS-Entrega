import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ComponentePadre from "./components/Examples/ComponentePadre";
import EjemploContador from "./components/Examples/EjemploContador";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App() {

 
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo = "Bienvenidos a Jiu Jitsu Store" />} />
        <Route path="/category/:idCategory" element={<ItemListContainer saludo = "Bienvenidos a Jiu Jitsu Store" />} />

        
        
      </Routes>
 
    </BrowserRouter>
  )
}

export default App
