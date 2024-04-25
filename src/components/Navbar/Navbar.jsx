import CartWidget from "./CartWidget"
import "./Navbar.css"

const Navbar = () => {

    return (
        <div className="nav-bar">
            <div>
                <img style={{ width: "140px" }} src="https://static.vecteezy.com/system/resources/previews/015/639/640/original/jiu-jitsu-martial-art-illustration-perfect-for-t-shirt-design-and-martial-art-training-club-logo-design-vector.jpg" alt="" />
            </div>

            <ul>
                <li>Kimonos</li>
                <li>Nogi</li>
                <li>Street</li>
                <li>Accesorios</li>
            </ul>
            <CartWidget />
        </div>

    )
}

export default Navbar