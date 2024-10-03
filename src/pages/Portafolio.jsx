import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

const Portafolio = () => {
  const proyectos = [
    { id: 1, imgSrc: 'src/img/Captura de pantalla 2024-02-17 093131.png', title: 'Mi libro de diseño UI', description: 'Libro' },
    { id: 2, imgSrc: 'src/img/Captura de pantalla 2024-02-23 080844.png', title: 'Creando un sistema de diseño eficiente', description: 'Sistema de diseño' },
    { id: 3, imgSrc: 'src/img/Captura de pantalla 2024-04-05 184436.png', title: 'Feed de noticias de diseño interior', description: 'Proyecto personal' },
    { id: 4, imgSrc: 'src/assets/img/Captura de pantalla 2024-10-01 111251.png', title: 'App de gestión de tareas', description: 'Aplicación web' },
    { id: 5, imgSrc: 'src/assets/img/Captura de pantalla 2024-10-01 124723.png', title: 'Portfolio personal', description: 'Portfolio' },
    { id: 6, imgSrc: '/project6.png', title: 'Sitio web de restaurante', description: 'Comercio' },
    { id: 7, imgSrc: '/project7.png', title: 'E-commerce de moda', description: 'E-commerce' },
  ];

  return (
    <div className="raleway">
      <Header />
      <div className="mx-auto max-w-screen-xl mt-12">
        {/* Sección de presentación */}
        <div className="text-center py-12 h-auto w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-800">
              portafolio<span className="text-orange-500">.</span>
            </h1>
            <p className="text-md md:text-lg text-gray-600 mt-4">Check out some of my latest design case studies.</p>
            <p className="text-sm md:text-md text-gray-500 mt-2">I've worked for startups, agencies, corporations, and government...</p>
          </div>

          {/* Imagen de la derecha */}
          <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
            <div className="w-[90%] md:w-[80%] h-48 rounded-lg flex items-center justify-center">
              <img src="src/assets/img/contratar_programador.jpg" alt="" className="rounded-lg w-full object-cover h-full" />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-8 mx-auto w-full" />

        {/* Sección de proyectos */}
        <div className="flex justify-center px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
            {proyectos.map(proyecto => (
              <div key={proyecto.id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
