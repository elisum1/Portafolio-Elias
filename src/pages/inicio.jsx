import React, { useState, useEffect, useRef } from 'react';
import leftImage from '/public/img/Modificado.png';
import rightImage from '/public/img/Untitled_design_1_-removebg-preview.png';
import Header from '../components/Header';
import Footer from '../components/footer';

function Inicio() {
  const [isOpened, setIsOpened] = useState(null);
  const containerRef = useRef(null);


  const handleClick = (direction) => {
    setIsOpened(isOpened === direction ? null : direction);
  };

  useEffect(() => {
    setTimeout(() => setAnimationFinished(true), 2000);
  }, []);

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpened(null); // Close the doors if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='raleway'>
      <Header />

      <div ref={containerRef} className="flex flex-col items-center h-[50%] bg-white text-gray-900">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center w-full  mx-auto bg-zinc-900">
          <div className="flex justify-center items-center w-full h-[60vh] relative">
            {/* Designer Info */}
            {isOpened === 'designer' && (
              <div className="absolute left-[17%] md:left-[20%] w-[30%] md:w-[20%] text-center transition-all duration-520">
                <h1 className="text-3xl lg:text-7xl font-light font-sans">
                  <span className="text-orange-500 font-bold">designer</span>
                </h1>
                <p className="mt-2 text-gray-100 text-xs md:text-sm lg:text-lg">
                  UI/UX designer focused on user experiences.
                </p>
              </div>
            )}

            {/* Fused Images */}
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
              {/* Left Door */}
              <div
                className={`absolute left-0 w-1/2 h-full transition-all duration-1000 ${
                  isOpened === 'designer' ? 'transform -translate-x-[70%]' : ''
                } overflow-hidden`}
                onMouseEnter={() => setIsOpened('designer')}
                onMouseLeave={() => {}}
                onClick={() => handleClick('designer')} // Handle click to toggle open/close
              >
                <div className="w-full h-full flex justify-end items-center bg-white relative left-[22.5%] border-black border-2  ">
                  <img
                    src={leftImage}
                    alt="Left Door"
                    className="object-cover w-[44%]"
                    style={{ clipPath: 'inset(0 50% 0 0)' }} // Left half of the door
                  />
                </div>
              </div>

              {/* Right Door */}
              <div
                className={`absolute right-0 w-1/2 h-full transition-all duration-1000 ${
                  isOpened === 'coder' ? 'transform translate-x-[70%]' : ''
                } overflow-hidden`}
                onMouseEnter={() => setIsOpened('coder')}
                onMouseLeave={() => {}}
                onClick={() => handleClick('coder')} // Handle click to toggle open/close
              >
                <div className="w-full h-full flex items-center bg-gray-100 relative right-[22%] border-black border-2">
                  <img
                    src={rightImage}
                    alt="Right Door"
                    className="object-cover w-[44%]"
                    style={{ clipPath: 'inset(0 0 0 50%)' }} // Right half of the door
                  />
                </div>
              </div>
            </div>

            {/* Coder Info */}
            {isOpened === 'coder' && (
              <div className="absolute right-[18%] md:right-[20%] w-[30%] md:w-[20%] text-center transition-all duration-520">
                <h1 className="text-3xl lg:text-7xl font-bold font-sans text-gray-100">
                  &lt;coder&gt;
                </h1>
                <p className="mt-2 text-orange-400 text-xs md:text-sm lg:text-lg">
                  JavaScript developer skilled in modern frameworks.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="mt-24 text-center w-full px-4 md:px-10 ">
          <h2 className="text-sm md:text-md font-semibold mb-4 text-gray-500">
            ALGUNOS DE MIS ULTIMOS TRABAJOS
          </h2>
          <hr className="border-t border-gray-300 my-2 w-1/2 mx-auto" />

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] md:w-[50%] relative top-12">
              {/* Proyecto 1 */}
              <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out h-[100%]">
                <img src="public/imgs/Captura de pantalla 2024-02-17 093131.png" alt="Proyecto 1" className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">Mi libro de diseño UI</h3>
                  <p className="text-sm md:text-base text-gray-500">Libro</p>
                </div>
              </div>

              {/* Proyecto 2 */}
              <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img src="public/imgs/Captura de pantalla 2024-02-23 080844.png" alt="Proyecto 2" className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">Creando un sistema de diseño eficiente</h3>
                  <p className="text-sm md:text-base text-gray-500">Sistema de diseño</p>
                </div>
              </div>

              {/* Proyecto 3 */}
              <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <img src="public/imgs/Captura de pantalla 2024-04-05 184436.png" alt="Proyecto 3" className="w-full h-48 object-cover rounded-lg" />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">Feed de noticias de diseño interior</h3>
                  <p className="text-sm md:text-base text-gray-500">Proyecto personal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Inicio;
