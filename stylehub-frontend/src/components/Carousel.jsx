import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const carouselItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Nueva Colección Verano",
    description: "Descubre las últimas tendencias para esta temporada",
    buttonText: "Comprar ahora",
    buttonLink: "/catalogo"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    title: "Ofertas Exclusivas",
    description: "Hasta 50% de descuento en productos seleccionados",
    buttonText: "Ver ofertas",
    buttonLink: "/ofertas"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Colección Premium",
    description: "Prendas de alta calidad para ocasiones especiales",
    buttonText: "Descubrir",
    buttonLink: "/premium"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Accesorios Elegantes",
    description: "Complementa tu estilo con nuestra selección de accesorios",
    buttonText: "Explorar",
    buttonLink: "/accesorios"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Moda Sostenible",
    description: "Descubre nuestra línea de productos eco-friendly",
    buttonText: "Conocer más",
    buttonLink: "/sostenible"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Duración de la transición
  }, [isTransitioning]);

  const goToPrevSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNextSlide = useCallback(() => {
    const newIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Cambio automático de slide cada 3.5 segundos
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 3500);
    
    return () => clearInterval(slideInterval);
  }, [goToNextSlide]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden pointer-events-none">
      {/* Slides */}
      <div className="relative h-full">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-1' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 z-1"></div>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-2 px-4 pointer-events-none">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">{item.title}</h2>
              <p className="text-xl text-white mb-8 max-w-2xl font-montserrat">{item.description}</p>
              <Link 
                to={item.buttonLink} 
                className="bg-stylehub-gold text-stylehub-navy px-8 py-3 rounded-md font-montserrat font-medium hover:bg-stylehub-lightgold transition-all duration-300 shadow-md hover:shadow-lg pointer-events-auto"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Flechas de navegación */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full z-30 transition-all duration-300"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full z-30 transition-all duration-300"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-stylehub-gold w-6' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;