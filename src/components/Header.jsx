import React from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  // Variantes de animación
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <motion.header
      className="w-full flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-10 bg-zinc-900 text-white"
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div
        className="mx-auto md:mx-0 w-[10%] md:w-[20%] flex justify-center md:justify-end mb-4 md:mb-0"
        variants={fadeInLeft} // Aparece desde la izquierda
      >
        <a href="/">
          <svg width="80" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="10" fill="none" />
            <path d="M 70 120 Q 60 60, 100 60 Q 140 60, 130 120 T 70 120 Z" fill="orange" />
            <path d="M 70 120 Q 70 180, 100 180 Q 130 180, 130 120 T 70 120 Z" fill="white" />
          </svg>
        </a>
      </motion.div>

      {/* Navegación */}
      <motion.nav
        className="w-full md:w-[60%] flex items-center justify-center font-normal"
        variants={fadeInRight} // Aparece desde la derecha
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10 items-center">
          <li>
            <a href="/about" className="hover:text-gray-300 transition-all">Acerca de mi</a>
          </li>
          <li>
            <a href="/portafolio" className="hover:text-gray-300 transition-all">Portafolio</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300 transition-all">Contacto</a>
          </li>

          {/* Íconos de redes sociales */}
          <motion.li
            className="flex space-x-5 text-2xl transition-all"
            variants={fadeInRight} // También desde la derecha
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-all">
              <FaLinkedinIn />
            </a>
            <a href="mailto:your-email@example.com" className="hover:text-orange-500">
              <FaEnvelope />
            </a>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
