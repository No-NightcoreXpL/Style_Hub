import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config() 

// Verificar que todas las variables de entorno estén definidas
const requiredEnvVars = ['DB_USER', 'DB_HOST', 'DB_NAME', 'DB_PORT'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error(`❌ Error: Faltan variables de entorno: ${missingEnvVars.join(', ')}`);
  console.error('Por favor, crea un archivo .env con las variables necesarias');
}

// Crear pool de conexiones MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'stylehubPro',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Probar conexión al iniciar
pool.getConnection()
  .then(connection => {
    console.log("✅ Conectado a MySQL");
    connection.release();
  })
  .catch(err => {
    console.error("❌ Error de conexión a MySQL:", err.message);
    console.log("🔄 Asegúrate de que MySQL esté en ejecución y que las credenciales sean correctas");
    console.log("📝 Verifica el archivo .env con la configuración correcta");
  });

export default pool;
