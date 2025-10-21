import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Register.css"
import "../components/Toast.css"
import { ToastContainer } from "../components/Toast"

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    newsletter: false
  });
  const [error, setError] = useState("");
  const [toasts, setToasts] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // Intentar conectar con el backend
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al registrar usuario');
      }

      // Mostrar mensaje de éxito
      addToast('¡Cuenta creada con éxito! Redirigiendo...', 'success');
      
      // Guardar usuario en localStorage (solo para demostración)
      localStorage.setItem("user", JSON.stringify({
        name: formData.username,
        email: formData.email,
        role: "user"
      }));

      // Redirigir a login después de un breve retraso para mostrar el mensaje
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error('Error:', err);
      // Si hay error de conexión con el backend, usar el método de simulación
      addToast('Registro simulado (sin conexión al backend)', 'info');
      
      // Guardar usuario en localStorage (solo para demostración)
      localStorage.setItem("user", JSON.stringify({
        name: formData.username,
        email: formData.email,
        role: "user"
      }));

      // Redirigir a login después de un breve retraso
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="register-page">
      {/* Contenedor de mensajes toast */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      
      {/* Lado izquierdo con imagen o fondo */}
      <div className="register-left">
        <h1>Únete a StyleHub</h1>
        <p>Explora las mejores tendencias y crea tu cuenta gratis.</p>
        {/* Aquí puedes poner una imagen de fondo o un logo */}
      </div>

      {/* Lado derecho con formulario */}
      <div className="register-right">
        <div className="register-form-container">
          <h2>Crea tu cuenta</h2>
          
          {error && <div className="auth-error">{error}</div>}
          
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input 
                id="username"
                name="username"
                type="text" 
                placeholder="Tu nombre" 
                required 
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="tuemail@ejemplo.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input 
                id="password"
                name="password"
                type="password" 
                placeholder="********" 
                required 
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar contraseña</label>
              <input 
                id="confirmPassword"
                name="confirmPassword"
                type="password" 
                placeholder="********" 
                required 
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">País</label>
              <select 
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Selecciona tu país</option>
                <option value="pe">Perú</option>
                <option value="mx">México</option>
                <option value="ar">Argentina</option>
                <option value="cl">Chile</option>
                <option value="es">España</option>
              </select>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox">
                <input 
                  type="checkbox" 
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                /> 
                Recibir novedades y promociones
              </label>
            </div>

            <button type="submit" className="register-button">Crear cuenta</button>
          </form>

          <p className="login-link">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
