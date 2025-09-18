// Base de datos de productos con imágenes, géneros y etiquetas
const products = [
  {
    id: 1,
    name: "Camisa Casual",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    category: "Camisas",
    genre: "hombre",
    tags: ["casual", "algodón", "verano"]
  },
  {
    id: 2,
    name: "Pantalón Elegante",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    category: "Pantalones",
    genre: "hombre",
    tags: ["formal", "oficina", "elegante"]
  },
  {
    id: 3,
    name: "Vestido de Noche",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=783&q=80",
    category: "Vestidos",
    genre: "mujer",
    tags: ["elegante", "fiesta", "noche"]
  },
  {
    id: 4,
    name: "Chaqueta de Cuero",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    category: "Chaquetas",
    genre: "hombre",
    tags: ["cuero", "otoño", "casual"]
  },
  {
    id: 5,
    name: "Zapatos Formales",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80",
    category: "Calzado",
    genre: "hombre",
    tags: ["formal", "cuero", "elegante"]
  },
  {
    id: 6,
    name: "Blusa Floral",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Blusas",
    genre: "mujer",
    tags: ["floral", "primavera", "casual"]
  },
  {
    id: 7,
    name: "Vestido Casual",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Vestidos",
    genre: "mujer",
    tags: ["casual", "diario", "verano"]
  },
  {
    id: 8,
    name: "Jeans Slim Fit",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Pantalones",
    genre: "mujer",
    tags: ["jeans", "casual", "diario"]
  },
  {
    id: 9,
    name: "Camiseta Estampada",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Camisetas",
    genre: "hombre",
    tags: ["casual", "estampado", "verano"]
  },
  {
    id: 10,
    name: "Falda Midi",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80",
    category: "Faldas",
    genre: "mujer",
    tags: ["elegante", "oficina", "primavera"]
  },
  {
    id: 11,
    name: "Sudadera con Capucha",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    category: "Sudaderas",
    genre: "hombre",
    tags: ["casual", "deportivo", "invierno"]
  },
  {
    id: 12,
    name: "Zapatillas Deportivas",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Calzado",
    genre: "unisex",
    tags: ["deportivo", "casual", "running"]
  },
  {
    id: 13,
    name: "Conjunto Infantil",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Infantil",
    genre: "ninos",
    tags: ["casual", "verano", "algodón"]
  },
  {
    id: 14,
    name: "Reloj Elegante",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    category: "Accesorios",
    genre: "unisex",
    tags: ["elegante", "formal", "accesorio"]
  },
  {
    id: 15,
    name: "Bolso de Cuero",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    category: "Accesorios",
    genre: "mujer",
    tags: ["cuero", "elegante", "accesorio"]
  },
  {
    id: 16,
    name: "Gorra Deportiva",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
    category: "Accesorios",
    genre: "unisex",
    tags: ["deportivo", "casual", "verano"]
  },
  {
    id: 17,
    name: "Pijama Infantil",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80",
    category: "Infantil",
    genre: "ninos",
    tags: ["dormir", "cómodo", "algodón"]
  },
  {
    id: 18,
    name: "Traje Formal",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Trajes",
    genre: "hombre",
    tags: ["formal", "elegante", "oficina"]
  },
  {
    id: 19,
    name: "Bufanda de Lana",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Accesorios",
    genre: "unisex",
    tags: ["invierno", "lana", "cálido"]
  },
  {
    id: 20,
    name: "Vestido de Fiesta",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Vestidos",
    genre: "mujer",
    tags: ["fiesta", "elegante", "noche"]
  }
];

export default products;