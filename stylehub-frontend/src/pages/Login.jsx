import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Auth.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    // Simulación de autenticación (esto se conectará con el backend más adelante)
    if (email === "admin@stylehub.com" && password === "admin123") {
      // Usuario administrador
      localStorage.setItem("user", JSON.stringify({
        email,
        name: "Administrador",
        role: "admin"
      }));
      navigate("/");
    } else if (email === "usuario@stylehub.com" && password === "user123") {
      // Usuario normal
      localStorage.setItem("user", JSON.stringify({
        email,
        name: "Usuario",
        role: "user"
      }));
      navigate("/");
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <h1>StyleHub</h1>
          <p>Tu destino de moda favorito</p>
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-form-container">
          <h2>Bienvenido de nuevo</h2>
          <p className="login-subtitle">Inicia sesión para continuar</p>
          
          {error && <div className="auth-error">{error}</div>}
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="tuemail@ejemplo.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                id="password"
                type="password" 
                placeholder="********" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forgot-password">
                <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
              </div>
            </div>

            <button type="submit" className="login-button">Iniciar Sesión</button>
          </form>

          <p className="register-link">
            ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
