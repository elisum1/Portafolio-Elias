import React from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion
import Header from '../components/Header';
import Footer from '../components/Footer';
import historyPhoto from '/public/img/photo_2024-09-27_07-20-21-remove.png';

const History = () => {
  // Variantes para las animaciones
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <div className="raleway">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <motion.div
        className="mx-auto max-w-screen-lg py-8 px-4 lg:px-0 mt-10"
        initial="hidden"
        animate="visible"
      >
        {/* Animación para el título */}
        <motion.h1
          className="text-center text-4xl md:text-6xl font-extrabold text-gray-800 mb-6"
          variants={fadeInLeft} // Aparece desde la izquierda
        >
          Mi Historia<span className="text-orange-500">.</span>
        </motion.h1>

        {/* Sección de Historia */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[20%]">
          {/* Texto de historia */}
          <motion.div
            className="lg:w-1/2 lg:pr-4"
            variants={fadeInLeft}
          >
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Desde que inicié en el mundo del desarrollo, he estado en un constante proceso de aprendizaje, 
              superando desafíos y mejorando mis habilidades. Mi enfoque principal ha sido encontrar un equilibrio entre el diseño y 
              la funcionalidad, creando interfaces intuitivas y experiencias de usuario sólidas.
            </p>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Con el tiempo, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades 
              en tecnologías de front-end como React.js con Tailwind y SASS para estilos, así como back-end con Node.js y bases de datos como MySQL y MongoDB.
            </p>
            <p className="text-gray-600 text-lg md:text-xl mb-4">
              Mi pasión por el desarrollo sigue creciendo día a día, y estoy siempre en busca de nuevas oportunidades para aprender, 
              crear, y contribuir a proyectos desafiantes.
            </p>
          </motion.div>

          {/* Imagen representativa */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-start"
            variants={fadeInRight}
          >
            <img 
              src={historyPhoto} 
              alt="Mi Historia" 
              className="rounded-lg w-[80%] "
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Línea Divisoria */}
      <hr className="border-t border-gray-300 my-6 w-full mx-auto" />

      {/* Sección adicional */}
      <motion.div
        className="bg-gray-100 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInRight}
      >
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Un Camino de Aprendizaje</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-2">
            Cada proyecto es una oportunidad para aprender algo nuevo, y estoy entusiasmado por lo que está por venir. 
            A través del diseño, la codificación y la colaboración, continúo desafiándome a mí mismo para alcanzar nuevos horizontes.
          </p>
        </div>
      </motion.div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default History;
