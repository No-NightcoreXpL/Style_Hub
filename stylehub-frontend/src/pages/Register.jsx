import { Link } from "react-router-dom"
import "./Register.css"

function Register() {
  return (
    <div className="register-page">
      {/* Lado izquierdo con imagen o fondo */}
      <div className="register-left">
        <h1>Únete a StyleHub</h1>
        <p>Explora las mejores tendencias y crea tu cuenta gratis.</p>
        {/* Aquí puedes poner una imagen de fondo o un logo */}
      </div>

      {/* Lado derecho con formulario */}
      <div className="register-right">
        <h2>Crea tu cuenta</h2>
        <form className="register-form">
          <label>
            Nombre de usuario
            <input type="text" placeholder="Tu nombre" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="tuemail@ejemplo.com" required />
          </label>

          <label>
            Contraseña
            <input type="password" placeholder="********" required />
          </label>

          <label>
            País
            <select required>
              <option value="">Selecciona tu país</option>
              <option value="pe">Perú</option>
              <option value="mx">México</option>
              <option value="ar">Argentina</option>
              <option value="cl">Chile</option>
              <option value="es">España</option>
            </select>
          </label>

          <label className="checkbox">
            <input type="checkbox" /> Recibir novedades y promociones
          </label>

          <button type="submit">Crear cuenta</button>
        </form>

        <p className="login-link">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
