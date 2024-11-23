import React, { useState, useEffect, useRef } from 'react';
import leftImage from '/public/img/Untitled_design-removebg-preview.png';
import rightImage from '/public/img/Untitled_design_1_-removebg-preview.png';
import projectImage1 from '/public/img/Captura de pantalla 2024-11-22 225610.png';
import projectImage2 from '/public/img/Captura de pantalla 2024-10-01 124723.png';
import projectImage3 from '/public/img/Captura de pantalla 2024-11-22 225414.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Inicio() {
  const [isOpened, setIsOpened] = useState(null);
  const [animationFinished, setAnimationFinished] = useState(false); // Estado para controlar la animación de los componentes
  const containerRef = useRef(null);

  const handleClick = (direction) => {
    setIsOpened(isOpened === direction ? null : direction);
  };

  useEffect(() => {
    setTimeout(() => setAnimationFinished(true), 2000);
  }, []);

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpened(null); // Cierra las puertas si se hace clic fuera
    }
  };

  useEffect(() => {
    // Agrega un event listener para hacer clic fuera del componente
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      // Limpieza del event listener al desmontar el componente
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='raleway'>
      <Header />

      <div ref={containerRef} className="flex flex-col items-center h-[50%] bg-white text-gray-900">
        {/* Hero Section */}
        <section className={`flex flex-col justify-center items-center w-full mx-auto bg-zinc-900 ${animationFinished ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <div className="flex justify-center items-center w-full h-[60vh] relative">
            {/* Designer Info */}
            {isOpened === 'designer' && (
              <div className="absolute left-[17%] md:left-[20%] w-[30%] md:w-[20%] text-center transition-all duration-520">
                <h1 className="text-3xl lg:text-7xl font-light font-sans">
                  <span className="text-orange-500 font-bold">diseñador</span>
                </h1>
                <p className="mt-2 text-gray-100 text-xs md:text-sm lg:text-lg">
                  Diseñador UI/UX enfocado en experiencias de usuario.
                </p>
              </div>
            )}

            {/* Fused Images */}
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
              {/* Left Door */}
              <div
                className={`absolute left-0 w-1/2 h-full transition-all duration-1000 ease-in-out ${
                  isOpened === 'designer' ? 'transform -translate-x-[70%]' : ''
                } overflow-hidden`}
                onMouseEnter={() => setIsOpened('designer')}
                onMouseLeave={() => {}}
                onClick={() => handleClick('designer')} // Maneja el clic para alternar abrir/cerrar
              >
                <div className="w-full h-full flex justify-end items-center bg-white relative left-[22.5%] border-black border-2">
                  <img
                    src={leftImage}
                    alt="Imagen representando el diseñador"
                    className="object-cover w-[44%] h-[106%]"
                    style={{ clipPath: 'inset(0 40% 0 0)' }} // La mitad izquierda de la puerta
                  />
                </div>
              </div>

              {/* Right Door */}
              <div
                className={`absolute right-0 w-1/2 h-full transition-all duration-1000 ease-in-out ${
                  isOpened === 'coder' ? 'transform translate-x-[70%]' : ''
                } overflow-hidden`}
                onMouseEnter={() => setIsOpened('coder')}
                onMouseLeave={() => {}}
                onClick={() => handleClick('coder')} // Maneja el clic para alternar abrir/cerrar
              >
                <div className="w-full h-full flex items-center bg-gray-100 relative right-[22%] border-black border-2">
                  <img
                    src={rightImage}
                    alt="Imagen representando el desarrollador"
                    className="object-cover w-[44%] h-[106%]"
                    style={{ clipPath: 'inset(0 0 0 40%)' }} // La mitad derecha de la puerta
                  />
                </div>
              </div>
            </div>

            {/* Coder Info */}
            {isOpened === 'coder' && (
              <div className="absolute right-[18%] md:right-[20%] w-[30%] md:w-[20%] text-center transition-all duration-520">
                <h1 className="text-3xl lg:text-7xl font-bold font-sans text-gray-100">
                  &lt;codigo&gt;
                </h1>
                <p className="mt-2 text-orange-400 text-xs md:text-sm lg:text-lg">
                  Desarrollador de JavaScript con buenas bases en frameworks modernos.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className={`mt-24 text-center w-full px-4 md:px-10 ${
            animationFinished ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } transition-all duration-1000 ease-in-out`}
        >
          <h2 className="text-sm md:text-md font-semibold mb-4 text-gray-500">
            ALGUNOS DE MIS ÚLTIMOS TRABAJOS
          </h2>
          <hr className="border-t border-gray-300 my-2 w-1/2 mx-auto" />

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] md:w-[50%] relative top-12">
              {/* Proyecto 1 */}
              <a  href='https://facture-app-ten.vercel.app/' className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out h-[100%]">
                <img
                  src={projectImage1}
                  alt="Diseño base de E-commerce"
                  className="w-full h-48 object-cover rounded-lg"
                 
                />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">FactServices</h3>
                  <p className="text-sm md:text-base text-gray-500">Software.</p>
                </div>
              </a>

              {/* Proyecto 2 */}
              <a  href='https://hotel-client-xi.vercel.app/' className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img
                  src={projectImage2}
                  alt="Tienda de Ropa"
                  className="w-full h-48 object-cover rounded-lg"
                  
                />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">BestDay</h3>
                  <p className="text-sm md:text-base text-gray-500">Gestor de Hoteles.</p>
                </div>
              </a>

              {/* Proyecto 3 */}
              <a href='https://el-banano-web.vercel.app/' className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img
                  src={projectImage3}
                  alt="Blog de Caffe"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">Restaurante El Banano</h3>
                  <p className="text-sm md:text-base text-gray-500">Gastronomia, Comercio.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
