import { Link } from "react-router-dom"
import "./Auth.css"

function Login() {
  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form className="auth-form">
        <label>
          Email:
          <input type="email" placeholder="tuemail@ejemplo.com" required />
        </label>

        <label>
          Contraseña:
          <input type="password" placeholder="********" required />
        </label>

        <button type="submit">Ingresar</button>
      </form>

      <p>
        ¿No tienes cuenta?{" "}
        <Link to="/register">Crea una aquí</Link>
      </p>
    </div>
  )
}

export default Login
