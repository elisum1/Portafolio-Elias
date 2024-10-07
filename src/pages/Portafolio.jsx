import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

const Portafolio = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const proyectos = [
    { id: 1, imgSrc: '/img/Captura de pantalla 2024-10-07 115728.png', title: 'Diseño de Portafolio', description: 'Tecnologia', link: 'https://estilo-de-portafolio.vercel.app' },
    { id: 2, imgSrc: '/img/Captura de pantalla 2024-02-23 080844.png', title: 'Tienda de Ropa', description: 'Moda', link: 'https://teinda-de-ropa.vercel.app' },
    { id: 3, imgSrc: '/img/Captura de pantalla 2024-04-05 184436.png', title: 'Blog de Caffe', description: 'Gastronomia', link: 'https://blog-de-cafe-html.vercel.app/' },
    { id: 4, imgSrc: '/img/Captura de pantalla 2024-10-01 111251.png', title: 'App de gestión de tareas', description: 'Aplicación web', link: 'https://task-web2.vercel.app' },
    { id: 5, imgSrc: '/img/Captura de pantalla 2024-10-01 124723.png', title: 'Gestor de Reservas de Hoteles', description: 'Aplicacion Web', link: 'https://hotel-client-xi.vercel.app/' },
    { id: 6, imgSrc: '/img/project6.png', title: 'Sitio web de restaurante', description: 'Comercio', link: 'https://link-a-restaurante.com' },
    { id: 7, imgSrc: '/img/project7.png', title: 'E-commerce de moda', description: 'E-commerce', link: 'https://link-a-ecommerce-moda.com' },
  ];

  useEffect(() => {
    setTimeout(() => setAnimationFinished(true), 1000);
  }, []);

  return (
    <div className="raleway">
      <Header />
      <div className="mx-auto max-w-screen-xl mt-12">
        {/* Sección de presentación */}
        <div className={`text-center py-12 h-auto w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-10 transition-all duration-1000 ease-in-out ${animationFinished ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-800">
              portafolio<span className="text-orange-500">.</span>
            </h1>
            <p className="text-md md:text-lg text-gray-600 mt-4">Vea algunos de mis últimos estudios de casos de diseño.</p>
            <p className="text-sm md:text-md text-gray-500 mt-2">He trabajado para empresas emergentes, agencias, corporaciones y gobiernos...</p>
          </div>

          {/* Imagen de la derecha */}
          <div className={`md:w-1/2 w-full flex justify-center mt-6 md:mt-0 transition-all duration-1000 ease-in-out ${animationFinished ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <div className="w-[90%] md:w-[80%] h-48 rounded-lg flex items-center justify-center">
              <img src="/img/contratar_programador.jpg" alt="Imagen de contratar programador" className="rounded-lg w-full object-cover h-full" />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-8 mx-auto w-full" />

        {/* Sección de proyectos */}
        <div className="flex justify-center px-4 md:px-0">
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg transition-all duration-1000 ease-in-out ${animationFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {proyectos.map(proyecto => (
              <div 
                key={proyecto.id} 
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
                onClick={() => window.location.href = proyecto.link}
              >
                <img src={proyecto.imgSrc} alt={proyecto.title} className="w-full h-40 md:h-48 object-cover rounded-lg" />
                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{proyecto.title}</h3>
                  <p className="text-sm md:text-md text-gray-500">{proyecto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portafolio;
