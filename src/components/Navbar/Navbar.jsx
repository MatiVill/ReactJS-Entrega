import CartWidget from "./CartWidget"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {

    return (
        <div className="nav-bar">
            <div>
                <img style={{ width: "140px" }} src="https://static.vecteezy.com/system/resources/previews/015/639/640/original/jiu-jitsu-martial-art-illustration-perfect-for-t-shirt-design-and-martial-art-training-club-logo-design-vector.jpg" alt="" />
            </div>

            <ul>
                <Link to="/category/kimonos" className="category" >Kimonos</Link>
                <Link to="/category/nogi" className="category">Nogi</Link>
                <Link to="/category/street" className="category">Street</Link>
                <Link to="/category/accesorios" className="category">Accesorios</Link>
            </ul>
            <CartWidget />
        </div>

    )
}

export default Navbar