// Servicio para conectar con el backend
const API_URL = 'http://localhost:5000/api';

// Función para obtener todos los productos
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/productos`);
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

// Función para obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/productos/${id}`);
    if (!response.ok) {
      throw new Error('Producto no encontrado');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

// Función para obtener productos por género
export const getProductsByGenre = async (genre) => {
  try {
    const response = await fetch(`${API_URL}/productos/genero/${genre}`);
    if (!response.ok) {
      throw new Error('Error al obtener productos por género');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

// Función para buscar productos
export const searchProducts = async (query) => {
  try {
    const response = await fetch(`${API_URL}/productos/buscar/${query}`);
    if (!response.ok) {
      throw new Error('Error al buscar productos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};