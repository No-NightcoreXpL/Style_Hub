-- Tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  genero VARCHAR(20) NOT NULL,
  tags TEXT[],
  descripcion TEXT,
  stock INTEGER DEFAULT 10,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar productos de ejemplo
INSERT INTO productos (nombre, precio, imagen, categoria, genero, tags, descripcion, stock) VALUES
('Camisa Casual', 29.99, 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c', 'Camisas', 'hombre', ARRAY['casual', 'algodón', 'verano'], 'Camisa casual de algodón perfecta para el verano', 15),
('Pantalón Elegante', 49.99, 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80', 'Pantalones', 'hombre', ARRAY['formal', 'oficina', 'elegante'], 'Pantalón formal para ocasiones especiales', 10),
('Vestido de Noche', 79.99, 'https://images.unsplash.com/photo-1595777457583-95e059d581b8', 'Vestidos', 'mujer', ARRAY['elegante', 'fiesta', 'noche'], 'Vestido elegante para eventos nocturnos', 8),
('Chaqueta de Cuero', 99.99, 'https://images.unsplash.com/photo-1551028719-00167b16eac5', 'Chaquetas', 'hombre', ARRAY['cuero', 'otoño', 'casual'], 'Chaqueta de cuero genuino para el otoño', 5),
('Zapatos Formales', 59.99, 'https://images.unsplash.com/photo-1549298916-b41d501d3772', 'Calzado', 'hombre', ARRAY['formal', 'cuero', 'elegante'], 'Zapatos formales de cuero para ocasiones especiales', 12);