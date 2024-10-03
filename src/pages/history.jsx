import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

const History = () => {
  return (
    <div className="raleway">
      {/* Encabezado */}
      <Header />
      
      {/* Contenido principal */}
      <div className="mx-auto max-w-screen-lg py-8 px-4 lg:px-0 mt-10">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Mi Historia<span className="text-orange-500">.</span>
        </h1>
        
        {/* Sección de Historia */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[10%]">
          {/* Texto de historia */}
          <div className="lg:w-1/2 lg:pr-4">
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Desde que inicié en el mundo del desarrollo, he estado en un constante proceso de aprendizaje, 
              superando desafíos y mejorando mis habilidades. Mi enfoque principal ha sido encontrar un equilibrio entre el diseño y 
              la funcionalidad, creando interfaces intuitivas y experiencias de usuario sólidas.
            </p>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              A lo largo del tiempo, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades 
              en tecnologías de front-end como React.js y Tailwind, así como back-end con Node.js y bases de datos como MySQL y MongoDB.
            </p>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Mi pasión por el desarrollo sigue creciendo día a día, y estoy siempre en busca de nuevas oportunidades para aprender, 
              crear, y contribuir a proyectos desafiantes.
            </p>
          </div>

          {/* Imagen representativa */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img 
              src="assets/img/photo_2024-09-27_07-20-21-remove.png" 
              alt="Mi Historia" 
              className="rounded-lg w-[80%] shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Línea Divisoria */}
      <hr className="border-t border-gray-300 my-6 w-full mx-auto" />

      {/* Sección adicional (puedes modificar o expandir esta parte según desees) */}
      <div className="bg-gray-100 py-12">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Un Camino de Aprendizaje</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-2">
            Cada proyecto es una oportunidad para aprender algo nuevo, y estoy entusiasmado por lo que está por venir. 
            A través del diseño, la codificación y la colaboración, continúo desafiándome a mí mismo para alcanzar nuevos horizontes.
          </p>
        </div>
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default History;
