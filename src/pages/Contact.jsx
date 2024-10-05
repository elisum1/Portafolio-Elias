import React from 'react';
import { motion } from 'framer-motion'; // Importa framer-motion
import Header from '../components/Header';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Footer from '../components/footer';
import contactImage from '/public/img/call-center-service.png'; // Importa la imagen de contacto

const Contact = () => {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <div className="raleway">
      <Header />
      <motion.div
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp} // Animación de entrada
      >
        {/* Sección de presentación */}
        <div className="text-center py-12 h-auto w-full flex flex-col lg:flex-row justify-between items-center lg:px-10">
          {/* Texto */}
          <motion.div
            className="lg:w-1/2 w-full"
            variants={fadeInLeft} // Animación desde la izquierda
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">
              Contacto<span className="text-orange-500">.</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Nos encantaría saber de usted. ¡Comuníquese con nosotros en cualquier momento!
            </p>
            <p className="text-md text-gray-500 mt-2">
              Si tienes alguna pregunta o deseas colaborar en algún proyecto, rellena el siguiente formulario o contáctanos directamente por correo electrónico.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center"
            variants={fadeInRight} // Animación desde la derecha
          >
            <div className="w-full lg:w-[80%] h-48 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src={contactImage} // Utiliza la imagen importada
                alt="Contact"
                className="w-[20%] lg:w-[35%] h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

        {/* Sección de Formulario */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp} // Animación desde abajo
        >
          <form className="w-full lg:w-[70%] bg-white shadow-lg rounded-lg p-4 md:p-8 grid grid-cols-1 gap-6 md:grid-cols-2 border border-gray-200">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Your Email"
              />
            </div>

            <div className="col-span-1 md:col-span-2 mb-6">
              <label htmlFor="subject" className="block text-lg font-semibold text-gray-700">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Subject"
              />
            </div>

            <div className="col-span-1 md:col-span-2 mb-6">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out w-full md:w-auto"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </motion.div>

        {/* Divider Line */}
        <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

        {/* Sección de redes sociales */}
        <motion.div
          className="md:flex items-center justify-center md:justify-center space-x-8 mt-8"
          variants={fadeInUp} // Animación desde abajo
        >
          <div className="text-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-3xl hover:scale-110 transition duration-300 flex justify-center"
            >
              <FaFacebookF />
            </a>
            <p className="text-gray-600 mt-2">Facebook</p>
          </div>

          <div className="text-center">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-3xl hover:scale-110 transition duration-300 flex justify-center"
            >
              <FaTwitter />
            </a>
            <p className="text-gray-600 mt-2">Twitter</p>
          </div>

          <div className="text-center">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-3xl hover:scale-110 transition duration-300 flex justify-center"
            >
              <FaLinkedinIn />
            </a>
            <p className="text-gray-600 mt-2">LinkedIn</p>
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-3xl hover:scale-110 transition duration-300 flex justify-center"
            >
              <FaInstagram />
            </a>
            <p className="text-gray-600 mt-2">Instagram</p>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
