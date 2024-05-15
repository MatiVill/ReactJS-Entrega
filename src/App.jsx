import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ComponentePadre from "./components/Examples/ComponentePadre";
import EjemploContador from "./components/Examples/EjemploContador";
import ItemCount from "./components/ItemCount/ItemCount";
import './App.css'


function App() {

 
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo = "Bienvenidos a Jiu Jitsu Store" />
      <ItemCount stock={10} />
      <ItemCount stock={4} />


     </div>
  )
}

export default App
