import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/Logo-sin-eslogan-TRANSPARENTE.png';
import '../styles/components/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si hay un usuario en localStorage al cargar el componente
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implementar la búsqueda aquí
    console.log('Buscando:', searchQuery);
    // Redirigir a la página de resultados
    // navigate(`/buscar?q=${searchQuery}`);
  };

  return (
    <nav className="bg-stylehub-navy text-stylehub-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="StyleHub Logo" className="h-12 mr-3" />
            <span className="font-playfair font-bold text-2xl text-stylehub-gold navbar-brand">StyleHub</span>
          </Link>
        </div>
        
        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center flex-1 mx-8">
          <form onSubmit={handleSearch} className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-md border-2 border-stylehub-gold bg-white text-stylehub-navy font-montserrat focus:outline-none focus:ring-2 focus:ring-stylehub-gold"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-stylehub-navy"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className={`font-montserrat hover:text-stylehub-gold transition-colors duration-300 nav-link ${location.pathname === '/' ? 'font-bold' : ''}`}>Inicio</Link>
          <Link to="/catalogo" className={`font-montserrat hover:text-stylehub-gold transition-colors duration-300 nav-link ${location.pathname === '/catalogo' ? 'font-bold' : ''}`}>Categorías</Link>
          <Link to="/carrito" className={`font-montserrat hover:text-stylehub-gold transition-colors duration-300 nav-link ${location.pathname === '/carrito' ? 'font-bold' : ''}`}>
            Carrito <span className="bg-stylehub-gold text-stylehub-navy px-2 py-1 rounded-full text-xs ml-1">0</span>
          </Link>
          
          {user ? (
            <div className="relative">
              <button 
                onClick={toggleUserMenu}
                className="flex items-center bg-stylehub-gold text-stylehub-navy px-5 py-2 rounded-md hover:bg-stylehub-lightgold transition-all duration-300 font-montserrat font-medium"
              >
                <span>{user.name}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</Link>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Panel Admin</Link>
                  )}
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="bg-stylehub-gold text-stylehub-navy px-5 py-2 rounded-md hover:bg-stylehub-lightgold transition-all duration-300 font-montserrat font-medium login-button">Login</Link>
          )}
        </div>
        
        {/* Mobile Menu Button and Search Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleSearch} className="text-stylehub-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button onClick={toggleMenu} className="text-stylehub-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="md:hidden mt-4 px-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-md border-2 border-stylehub-gold bg-white text-stylehub-navy font-montserrat focus:outline-none focus:ring-2 focus:ring-stylehub-gold"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-stylehub-navy"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stylehub-navy py-3 px-4 mt-2 mobile-menu">
          <div className="flex flex-col space-y-4">
            <Link to="/" className={`font-montserrat hover:text-stylehub-gold transition-colors duration-300 ${location.pathname === '/' ? 'font-bold' : ''}`} onClick={toggleMenu}>Inicio</Link>
            <Link to="/catalogo" className={`font-montserrat hover:text-stylehub-gold transition-colors duration-300 ${location.pathname === '/catalogo' ? 'font-bold' : ''}`} onClick={toggleMenu}>Categorías</Link>
            <Link to="/carrito" className={`font-montserrat hover:text-stylehub-gold transition-colors duration-300 ${location.pathname === '/carrito' ? 'font-bold' : ''}`} onClick={toggleMenu}>
              Carrito <span className="bg-stylehub-gold text-stylehub-navy px-2 py-1 rounded-full text-xs ml-1">0</span>
            </Link>
            <Link to="/login" className="bg-stylehub-gold text-stylehub-navy px-4 py-2 rounded-md hover:bg-stylehub-lightgold transition-all duration-300 w-full text-center font-montserrat font-medium mt-2" onClick={toggleMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
