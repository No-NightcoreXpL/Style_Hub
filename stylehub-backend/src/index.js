import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import pool from "./db.js"
import dotenv from "dotenv"
import productosRoutes from "./routes/productos.js"

dotenv.config() // 

const app = express()
app.use(cors())
app.use(express.json())

// Rutas de productos
app.use("/api/productos", productosRoutes)

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor StyleHub funcionando 🚀")
})

// Ruta para registrar usuario
app.post("/api/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body

    // Verificar si ya existe
    const [existe] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email])
    if (existe.length > 0) {
      return res.status(400).json({ error: "El email ya está registrado" })
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardar en BD
    const [result] = await pool.query(
      "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, 'user')",
      [nombre, email, hashedPassword]
    )

    res.json({ 
      message: "Usuario creado con éxito 🎉", 
      user: { 
        id: result.insertId, 
        nombre, 
        email 
      } 
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Error en el servidor" })
  }
})

// Ruta para login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Buscar usuario
    const [usuarios] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email])
    
    if (usuarios.length === 0) {
      return res.status(401).json({ error: "Credenciales incorrectas" })
    }

    const usuario = usuarios[0]
    
    // Verificar contraseña
    const passwordMatch = await bcrypt.compare(password, usuario.password)
    
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" })
    }

    // Enviar respuesta exitosa
    res.json({
      message: "Login exitoso",
      user: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Error en el servidor" })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`)
})
