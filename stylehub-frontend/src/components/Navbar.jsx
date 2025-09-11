import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../assets/logo.svg"   

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="StyleHub Logo" />
      </Link>

      <ul className="menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/carrito">Carrito 🛒</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
