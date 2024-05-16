import CartWidget from "./CartWidget"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {

    return (
        <div className="navbar">
            <Link to="/">
                <img className="brand logo" src="https://static.vecteezy.com/system/resources/previews/015/639/640/original/jiu-jitsu-martial-art-illustration-perfect-for-t-shirt-design-and-martial-art-training-club-logo-design-vector.jpg" alt="" />
            </Link>

            <ul className="categorias">
                <Link to="/category/kimonos" className="categoria" >Kimonos</Link>
                <Link to="/category/nogi" className="categoria">Nogi</Link>
                <Link to="/category/street" className="categoria">Street</Link>
                <Link to="/category/accesorios" className="categoria">Accesorios</Link>
            </ul>
            <CartWidget />
        </div>

    )
}

export default Navbar