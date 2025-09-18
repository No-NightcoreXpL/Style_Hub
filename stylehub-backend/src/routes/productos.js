import express from "express";
import pool from "../db.js";

const router = express.Router();

// Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

// Obtener un producto por ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM productos WHERE id = $1", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener el producto" });
  }
});

// Crear un nuevo producto
router.post("/", async (req, res) => {
  try {
    const { nombre, precio, imagen, categoria, genero, tags, descripcion, stock } = req.body;
    
    const result = await pool.query(
      "INSERT INTO productos (nombre, precio, imagen, categoria, genero, tags, descripcion, stock) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [nombre, precio, imagen, categoria, genero, tags, descripcion, stock]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

// Actualizar un producto
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, imagen, categoria, genero, tags, descripcion, stock } = req.body;
    
    const result = await pool.query(
      "UPDATE productos SET nombre = $1, precio = $2, imagen = $3, categoria = $4, genero = $5, tags = $6, descripcion = $7, stock = $8 WHERE id = $9 RETURNING *",
      [nombre, precio, imagen, categoria, genero, tags, descripcion, stock, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

// Eliminar un producto
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query("DELETE FROM productos WHERE id = $1 RETURNING *", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    
    res.json({ message: "Producto eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

// Filtrar productos por género
router.get("/genero/:genero", async (req, res) => {
  try {
    const { genero } = req.params;
    const result = await pool.query("SELECT * FROM productos WHERE genero = $1", [genero]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al filtrar productos por género" });
  }
});

// Buscar productos por nombre o categoría
router.get("/buscar/:query", async (req, res) => {
  try {
    const { query } = req.params;
    const result = await pool.query(
      "SELECT * FROM productos WHERE nombre ILIKE $1 OR categoria ILIKE $1",
      [`%${query}%`]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al buscar productos" });
  }
});

export default router;