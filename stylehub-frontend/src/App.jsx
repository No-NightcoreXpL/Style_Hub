import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Carrito from "./pages/Carrito"
import Login from "./pages/Login"
import Register from "./pages/Register"

function AppLayout() {
  const location = useLocation()

  // rutas donde no queremos navbar
  const hideNavbar = ["/login", "/register"]

  return (
    <>
      {!hideNavbar.includes(location.pathname) && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
