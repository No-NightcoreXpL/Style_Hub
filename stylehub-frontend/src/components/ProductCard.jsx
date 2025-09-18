import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-stylehub-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.genre && (
          <div className="absolute top-2 left-2">
            <span className="bg-stylehub-navy text-white px-2 py-1 rounded-md text-xs font-montserrat">
              {product.genre.charAt(0).toUpperCase() + product.genre.slice(1)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link to={`/producto/${product.id}`} className="bg-stylehub-white text-stylehub-navy px-4 py-2 rounded-md font-montserrat text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Ver detalles
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-playfair text-lg font-semibold mb-2 text-stylehub-darkgray">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 font-montserrat">{product.category}</p>
        
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.map((tag, index) => (
              <span key={index} className="bg-stylehub-gray text-stylehub-darkgray px-2 py-1 rounded-md text-xs font-montserrat">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-stylehub-navy font-bold font-montserrat">${product.price.toFixed(2)}</span>
          <button className="bg-stylehub-gold text-stylehub-navy px-4 py-2 rounded-md hover:bg-stylehub-lightgold transition-all duration-300 font-montserrat text-sm font-medium shadow-sm hover:shadow">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;