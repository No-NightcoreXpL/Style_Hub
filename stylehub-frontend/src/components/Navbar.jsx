import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">StyleHub 🛍️</h2>
      <ul className="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Carrito 🛒</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
