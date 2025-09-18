import { Link } from 'react-router-dom';

function Carrito() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stylehub-dark mb-4 text-center font-playfair">Tu Carrito de Compras</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center py-8">
          <svg className="w-20 h-20 text-stylehub-gray mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <h2 className="text-2xl font-semibold text-stylehub-darkgray mb-2 font-playfair">Tu carrito está vacío</h2>
          <p className="text-stylehub-gray mb-6 font-montserrat">Parece que aún no has agregado productos a tu carrito</p>
          <Link to="/catalogo" className="bg-stylehub-gold text-stylehub-navy px-6 py-3 rounded-md hover:bg-stylehub-lightgold transition-all duration-300 font-montserrat font-medium">
            Explorar Categorías
          </Link>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-4 text-stylehub-darkgray font-playfair">Recomendaciones para ti</h3>
          <p className="text-stylehub-gray mb-4 font-montserrat">Basado en tus preferencias, estos productos podrían interesarte:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c" alt="Camisa Casual" className="w-full h-40 object-cover rounded mb-2" />
              <h4 className="font-semibold text-stylehub-darkgray">Camisa Casual</h4>
              <p className="text-stylehub-gold font-bold">$29.99</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5" alt="Chaqueta de Cuero" className="w-full h-40 object-cover rounded mb-2" />
              <h4 className="font-semibold text-stylehub-darkgray">Chaqueta de Cuero</h4>
              <p className="text-stylehub-gold font-bold">$99.99</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8" alt="Vestido de Noche" className="w-full h-40 object-cover rounded mb-2" />
              <h4 className="font-semibold text-stylehub-darkgray">Vestido de Noche</h4>
              <p className="text-stylehub-gold font-bold">$79.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
