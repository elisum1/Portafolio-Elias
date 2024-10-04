import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-10 bg-zinc-900 text-white">
      <div className="mx-auto md:mx-0 w-[10%] md:w-[20%] flex justify-center md:justify-end mb-4 md:mb-0">
        <a href="/">
          <svg width="80" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="10" fill="none" />
            <path d="M 70 120 Q 60 60, 100 60 Q 140 60, 130 120 T 70 120 Z" fill="orange" />
            <path d="M 70 120 Q 70 180, 100 180 Q 130 180, 130 120 T 70 120 Z" fill="white" />
          </svg>
        </a>
      </div>
      <nav className="w-full md:w-[60%] flex items-center justify-center font-normal">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10 items-center">
          <li><a href="/about" className="hover:text-gray-300 transition-all">Acerca de mi</a></li>
          <li><a href="/portafolio" className="hover:text-gray-300 transition-all">Portafolio</a></li>
          <li><a href="/contact" className="hover:text-gray-300 transition-all">Contacto</a></li>
          <li className="flex space-x-5 text-2xl transition-all">
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
