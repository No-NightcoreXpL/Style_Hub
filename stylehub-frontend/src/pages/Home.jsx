import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="bg-stylehub-gray min-h-screen">
      {/* Carousel Section */}
      <Carousel />

      {/* Featured Products Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-stylehub-navy mb-2">Productos Destacados</h2>
          <div className="w-24 h-1 bg-stylehub-gold mx-auto"></div>
        </div>
        <ProductGrid limit={4} />
        <div className="text-center mt-8">
          <Link
            to="/catalogo"
            className="text-stylehub-navy font-montserrat font-medium hover:text-stylehub-gold transition-all duration-300 inline-flex items-center"
          >
            Ver todo el catálogo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Géneros Section */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-stylehub-navy mb-2">Explora por Géneros</h2>
          <div className="w-24 h-1 bg-stylehub-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Link to="/genero/hombre" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Moda Hombre" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-playfair font-bold">Hombre</h3>
            </div>
          </Link>
          <Link to="/genero/mujer" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
              alt="Moda Mujer" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-playfair font-bold">Mujer</h3>
            </div>
          </Link>
          <Link to="/genero/ninos" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80" 
              alt="Moda Niños" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-playfair font-bold">Niños</h3>
            </div>
          </Link>
          <Link to="/genero/accesorios" className="group relative overflow-hidden rounded-lg shadow-lg h-48">
            <img 
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" 
              alt="Accesorios" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-xl font-playfair font-bold">Accesorios</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-8 bg-stylehub-gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-stylehub-navy mb-2">¿Por qué elegirnos?</h2>
          <div className="w-24 h-1 bg-stylehub-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-stylehub-gold mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-bold text-stylehub-navy mb-2">Calidad Premium</h3>
            <p className="text-gray-700 font-montserrat">Seleccionamos cuidadosamente cada prenda para garantizar la mejor calidad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-stylehub-gold mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-bold text-stylehub-navy mb-2">Envío Rápido</h3>
            <p className="text-gray-700 font-montserrat">Entregamos tus pedidos en tiempo récord para que disfrutes de tus compras cuanto antes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-stylehub-gold mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-bold text-stylehub-navy mb-2">Compra Segura</h3>
            <p className="text-gray-700 font-montserrat">Tu seguridad es nuestra prioridad. Todas las transacciones están protegidas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;