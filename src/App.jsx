import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ComponentePadre from "./components/Examples/ComponentePadre";
import EjemploContador from "./components/Examples/EjemploContador";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import './App.css'


function App() {

 
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo = "Bienvenidos a Jiu Jitsu Store" />
      <ItemDetailContainer />



     </div>
  )
}

export default App
