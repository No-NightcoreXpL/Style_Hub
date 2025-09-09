import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Carrito from "./pages/Carrito"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Routes>
          {/* Home real */}
          <Route path="/" element={<Home />} />

          {/* Redirige /home -> / */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Otras páginas */}
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />

          {/* Si ponen cualquier ruta inválida, también al inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
