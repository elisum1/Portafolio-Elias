import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

const Portafolio = () => {
  const proyectos = [
    { id: 1, imgSrc: '/img/Captura de pantalla 2024-02-17 093131.png', title: 'Diseño base de E-commerce', description: 'Tecnologia' },
    { id: 2, imgSrc: '/img/Captura de pantalla 2024-02-23 080844.png', title: 'Tienda de Ropa', description: 'Moda' },
    { id: 3, imgSrc: '/img/Captura de pantalla 2024-04-05 184436.png', title: 'Blog de Caffe', description: 'Gastronomia' },
    { id: 4, imgSrc: '/img/Captura de pantalla 2024-10-01 111251.png', title: 'App de gestión de tareas', description: 'Aplicación web' },
    { id: 5, imgSrc: '/img/Captura de pantalla 2024-10-01 124723.png', title: 'Gestor de Reservas de Hoteles', description: 'Aplicacion Web' },
    { id: 6, imgSrc: '/img/project6.png', title: 'Sitio web de restaurante', description: 'Comercio' },
    { id: 7, imgSrc: '/img/project7.png', title: 'E-commerce de moda', description: 'E-commerce' },
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
            <p className="text-md md:text-lg text-gray-600 mt-4">Vea algunos de mis últimos estudios de casos de diseño.</p>
            <p className="text-sm md:text-md text-gray-500 mt-2">He trabajado para empresas emergentes, agencias, corporaciones y gobiernos...</p>
          </div>

          {/* Imagen de la derecha */}
          <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
            <div className="w-[90%] md:w-[80%] h-48 rounded-lg flex items-center justify-center">
              <img src="/img/contratar_programador.jpg" alt="" className="rounded-lg w-full object-cover h-full" />
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
