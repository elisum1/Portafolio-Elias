import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-gray-800 text-white py-4 mt-[7%]">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Elias Urrieta. Todos los derechos reservados.</p>
      </div>

      {/* Scroll to top button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-800 text-white rounded-full flex justify-center items-center hover:bg-gray-700 transition-transform duration-300 hover:translate-y-[-4px]"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
