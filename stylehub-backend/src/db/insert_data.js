import pg from 'pg';
const { Pool } = pg;
const pool = new Pool();

const insertProductos = async () => {
  try {
    const query = `
      INSERT INTO productos (nombre, precio, imagen, categoria, genero, tags, descripcion, stock) VALUES
      ('Camisa Casual', 29.99, 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c', 'Camisas', 'hombre', ARRAY['casual', 'algodón', 'verano'], 'Camisa casual de algodón perfecta para el verano', 15),
      ('Pantalón Elegante', 49.99, 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80', 'Pantalones', 'hombre', ARRAY['formal', 'oficina', 'elegante'], 'Pantalón formal para ocasiones especiales', 10),
      ('Vestido de Noche', 79.99, 'https://images.unsplash.com/photo-1595777457583-95e059d581b8', 'Vestidos', 'mujer', ARRAY['elegante', 'fiesta', 'noche'], 'Vestido elegante para eventos nocturnos', 8),
      ('Chaqueta de Cuero', 99.99, 'https://images.unsplash.com/photo-1551028719-00167b16eac5', 'Chaquetas', 'hombre', ARRAY['cuero', 'otoño', 'casual'], 'Chaqueta de cuero genuino para el otoño', 5),
      ('Zapatos Formales', 59.99, 'https://images.unsplash.com/photo-1549298916-b41d501d3772', 'Calzado', 'hombre', ARRAY['formal', 'cuero', 'elegante'], 'Zapatos formales de cuero para ocasiones especiales', 12),
      ('Blusa Floral', 34.99, 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992', 'Blusas', 'mujer', ARRAY['floral', 'primavera', 'casual'], 'Blusa con estampado floral para primavera', 20),
      ('Jeans Ajustados', 45.99, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246', 'Pantalones', 'mujer', ARRAY['casual', 'denim', 'ajustado'], 'Jeans ajustados de alta calidad', 15),
      ('Sudadera con Capucha', 39.99, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7', 'Sudaderas', 'unisex', ARRAY['casual', 'deportivo', 'invierno'], 'Sudadera cómoda con capucha para el invierno', 25),
      ('Falda Midi', 42.99, 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa', 'Faldas', 'mujer', ARRAY['elegante', 'oficina', 'midi'], 'Falda midi elegante para la oficina', 10),
      ('Gorra Deportiva', 19.99, 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b', 'Accesorios', 'unisex', ARRAY['deportivo', 'casual', 'verano'], 'Gorra deportiva para actividades al aire libre', 30);
    `;
    
    await pool.query(query);
    console.log('Datos insertados correctamente en la tabla productos');
    
    // Insertar categorías
    const categoriasQuery = `
      INSERT INTO categorias (nombre, descripcion) VALUES
      ('Camisas', 'Todo tipo de camisas para hombre y mujer'),
      ('Pantalones', 'Pantalones formales y casuales'),
      ('Vestidos', 'Vestidos para toda ocasión'),
      ('Chaquetas', 'Chaquetas y abrigos para todas las estaciones'),
      ('Calzado', 'Zapatos, botas y sandalias'),
      ('Blusas', 'Blusas y tops para mujer'),
      ('Sudaderas', 'Sudaderas con y sin capucha'),
      ('Faldas', 'Faldas de diferentes estilos y largos'),
      ('Accesorios', 'Complementos para tus outfits');
    `;
    
    await pool.query(categoriasQuery);
    console.log('Datos insertados correctamente en la tabla categorias');
    
  } catch (err) {
    console.error('Error al insertar datos:', err);
  } finally {
    pool.end();
  }
};

insertProductos();