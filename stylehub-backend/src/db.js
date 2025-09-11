import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",          
  host: "localhost",
  database: "style-hubPro", 
  password: "jacksonx100pre",
  port: 5432,
});

// Probar conexión al iniciar
pool.connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch(err => console.error("❌ Error de conexión:", err));

export default pool;
