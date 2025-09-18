import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
// Usamos directamente los productos locales
import { default as productData } from '../data/products';

function ProductGrid({ limit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = limit || 6;
  
  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);
  
  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-stylehub-dark mb-8 text-center">Productos Destacados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
      
      <div className="mt-8">
        <Pagination 
          productsPerPage={productsPerPage}
          totalProducts={productData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default ProductGrid;