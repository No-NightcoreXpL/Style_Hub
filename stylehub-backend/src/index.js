import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import pool from "./db.js"

const app = express()
app.use(cors())
app.use(express.json())

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor StyleHub funcionando 🚀")
})

// Ruta para registrar usuario
app.post("/api/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body

    // Verificar si ya existe
    const existe = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email])
    if (existe.rows.length > 0) {
      return res.status(400).json({ error: "El email ya está registrado" })
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardar en BD
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3) RETURNING id, nombre, email",
      [nombre, email, hashedPassword]
    )

    res.json({ message: "Usuario creado con éxito 🎉", user: result.rows[0] })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Error en el servidor" })
  }
})

app.listen(5000, () => {
  console.log("Servidor backend corriendo en http://localhost:5000")
})
