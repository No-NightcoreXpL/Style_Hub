import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("productos");
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [formMode, setFormMode] = useState(""); // "add", "edit", ""

  // Datos de ejemplo para productos
  const productosEjemplo = [
    { id: 1, nombre: "Camiseta Negra", categoria: "Camisetas", precio: 29.99, stock: 50 },
    { id: 2, nombre: "Jeans Slim Fit", categoria: "Pantalones", precio: 59.99, stock: 30 },
    { id: 3, nombre: "Zapatillas Urbanas", categoria: "Calzado", precio: 89.99, stock: 15 },
  ];

  // Datos de ejemplo para usuarios
  const usuariosEjemplo = [
    { id: 1, nombre: "Usuario", email: "usuario@stylehub.com", rol: "user" },
    { id: 2, nombre: "Administrador", email: "admin@stylehub.com", rol: "admin" },
  ];

  useEffect(() => {
    // Verificar si el usuario es administrador
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.role !== "admin") {
      navigate("/");
      return;
    }

    // Cargar datos de ejemplo
    setProductos(productosEjemplo);
    setUsuarios(usuariosEjemplo);
  }, [navigate]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormMode("");
    setCurrentProduct(null);
    setCurrentUser(null);
  };

  const handleAddProduct = () => {
    setCurrentProduct({
      id: productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1,
      nombre: "",
      categoria: "",
      precio: 0,
      stock: 0
    });
    setFormMode("add");
  };

  const handleEditProduct = (product) => {
    setCurrentProduct({ ...product });
    setFormMode("edit");
  };

  const handleDeleteProduct = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      setProductos([...productos, currentProduct]);
    } else if (formMode === "edit") {
      setProductos(productos.map(p => p.id === currentProduct.id ? currentProduct : p));
    }
    setFormMode("");
    setCurrentProduct(null);
  };

  const handleAddUser = () => {
    setCurrentUser({
      id: usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1,
      nombre: "",
      email: "",
      rol: "user"
    });
    setFormMode("add");
  };

  const handleEditUser = (user) => {
    setCurrentUser({ ...user });
    setFormMode("edit");
  };

  const handleDeleteUser = (id) => {
    setUsuarios(usuarios.filter(u => u.id !== id));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (formMode === "add") {
      setUsuarios([...usuarios, currentUser]);
    } else if (formMode === "edit") {
      setUsuarios(usuarios.map(u => u.id === currentUser.id ? currentUser : u));
    }
    setFormMode("");
    setCurrentUser(null);
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: name === "precio" || name === "stock" ? parseFloat(value) : value
    });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value
    });
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>
      
      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === "productos" ? "active" : ""}`}
          onClick={() => handleTabChange("productos")}
        >
          Productos
        </button>
        <button 
          className={`tab-button ${activeTab === "usuarios" ? "active" : ""}`}
          onClick={() => handleTabChange("usuarios")}
        >
          Usuarios
        </button>
      </div>
      
      <div className="admin-content">
        {activeTab === "productos" && (
          <div className="productos-section">
            <div className="section-header">
              <h2>Gestión de Productos</h2>
              {!formMode && (
                <button className="add-button" onClick={handleAddProduct}>
                  Añadir Producto
                </button>
              )}
            </div>
            
            {formMode && (
              <div className="form-container">
                <h3>{formMode === "add" ? "Añadir Producto" : "Editar Producto"}</h3>
                <form onSubmit={handleProductSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      value={currentProduct.nombre} 
                      onChange={handleProductChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="categoria">Categoría</label>
                    <input 
                      type="text" 
                      id="categoria" 
                      name="categoria" 
                      value={currentProduct.categoria} 
                      onChange={handleProductChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input 
                      type="number" 
                      id="precio" 
                      name="precio" 
                      value={currentProduct.precio} 
                      onChange={handleProductChange} 
                      step="0.01" 
                      min="0" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input 
                      type="number" 
                      id="stock" 
                      name="stock" 
                      value={currentProduct.stock} 
                      onChange={handleProductChange} 
                      min="0" 
                      required 
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="save-button">
                      {formMode === "add" ? "Añadir" : "Guardar"}
                    </button>
                    <button 
                      type="button" 
                      className="cancel-button" 
                      onClick={() => {
                        setFormMode("");
                        setCurrentProduct(null);
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {!formMode && (
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Categoría</th>
                      <th>Precio</th>
                      <th>Stock</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map(producto => (
                      <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.categoria}</td>
                        <td>${producto.precio.toFixed(2)}</td>
                        <td>{producto.stock}</td>
                        <td>
                          <button 
                            className="edit-button" 
                            onClick={() => handleEditProduct(producto)}
                          >
                            Editar
                          </button>
                          <button 
                            className="delete-button" 
                            onClick={() => handleDeleteProduct(producto.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        
        {activeTab === "usuarios" && (
          <div className="usuarios-section">
            <div className="section-header">
              <h2>Gestión de Usuarios</h2>
              {!formMode && (
                <button className="add-button" onClick={handleAddUser}>
                  Añadir Usuario
                </button>
              )}
            </div>
            
            {formMode && (
              <div className="form-container">
                <h3>{formMode === "add" ? "Añadir Usuario" : "Editar Usuario"}</h3>
                <form onSubmit={handleUserSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      value={currentUser.nombre} 
                      onChange={handleUserChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={currentUser.email} 
                      onChange={handleUserChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select 
                      id="rol" 
                      name="rol" 
                      value={currentUser.rol} 
                      onChange={handleUserChange} 
                      required
                    >
                      <option value="user">Usuario</option>
                      <option value="admin">Administrador</option>
                    </select>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="save-button">
                      {formMode === "add" ? "Añadir" : "Guardar"}
                    </button>
                    <button 
                      type="button" 
                      className="cancel-button" 
                      onClick={() => {
                        setFormMode("");
                        setCurrentUser(null);
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {!formMode && (
              <div className="table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Rol</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map(usuario => (
                      <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.rol}</td>
                        <td>
                          <button 
                            className="edit-button" 
                            onClick={() => handleEditUser(usuario)}
                          >
                            Editar
                          </button>
                          <button 
                            className="delete-button" 
                            onClick={() => handleDeleteUser(usuario.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;