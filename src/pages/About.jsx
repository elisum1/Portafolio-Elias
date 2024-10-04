import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

import phoneImage from '/public/img/iPhone-13-PRO-localhost.png';
import screenshot1 from '/public/img/Captura de pantalla 2024-10-01 111251.png';
import screenshot2 from '/public/img/Captura de pantalla 2024-10-01 111303.png';
import aboutImage from '/public/img/photo_2024-09-27_07-20-21-remove.png';
import journeyImage from '/public/img/425354974_10232503182029066_2899442653006001819_n.jpg';
// import cvLink from '/path/to/cv'; // Asegúrate de que esta ruta sea correcta

// Imágenes de los hobbies
import hobbyImage1 from '/public/img/Imagen de WhatsApp 2024-09-30 a las 22.31.18_adda62d5.jpg';
import hobbyImage2 from '/public/img/photo_2024-09-23_22-25-28.jpg';
import hobbyImage3 from '/public/img/photo_2024-09-30_15-30-39.jpg';
import hobbyImage4 from '/public/img/Imagen de WhatsApp 2023-09-28 a las 18.46.17.jpg';

import icon1 from '/public/img/codificacion.png'
import icon2 from '/public/img/icons8-google-code-50.png'
import icon3 from '/public/img/icons8-hablar-con-descaro-a-48.png'
import icon4 from '/public/img/icons8-mongo-db-48.png'
import icon5 from '/public/img/icons8-reaccionar-40.png'
import icon6 from '/public/img/icons8-viento-de-cola-css-48.png'
import icon7 from '/public/img/js.png'
import icon8 from '/public/img/mysql.png'
import icon9 from '/public/img/php.png'
import icon10 from '/public/img/postgre.png'
import icon11 from '/public/img/programacion.png'

import CV from '/public/Elias Eudomar_Urrieta Moreno-3.pdf'
import CV2 from '/public/Resume_3-1.pdf'

const About = () => {
  

  return (
    <div className="raleway">
      {<Header/> }
      <div className="ml-[6%] lg:mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-center">
        {/* Main Content */}
        <div className="w-full lg:w-[75%] pr-8">
          {/* Presentation Section */}
          <div className="text-center py-16 h-[80vh] lg:h-[40vh] flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10 mt-10">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800">
                Acerca de mi<span className="text-orange-500">.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 mt-4">
              Soy un diseñador y desarrollador apasionado enfocado en crear experiencias digitales centradas en el usuario.
              </p>
              <p className="text-sm md:text-md text-gray-500 mt-2">
              Me encanta combinar creatividad con funcionalidad para resolver problemas complejos.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="h-[90%] rounded-lg flex items-center justify-center bg-slate-800 w-[90%] mb-[50%] sm:mb-0">
                <img
                  src={aboutImage}
                  alt="About"
                  className="w-[60%] md:w-[46%] h-[100%] rounded-lg "
                />
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

          <div className="py-16 text-center bg-gray-100 flex flex-col lg:flex-row justify-between items-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 lg:mb-0 lg:w-1/3">Mis Estudios</h2>
  <p className="text-md md:text-lg text-gray-600 mt-6 max-w-md lg:max-w-xl lg:ml-4">
  Completé un bootcamp de 6 meses en Enyoi, donde obtuve el título de Full Stack Developer con especialización en React y Node.js. Además, completé un curso de Udemy titulado 'Desarrollo Web Full Stack'.  </p>
</div>



<hr className="border-t border-gray-300 my-8 w-full mx-auto" />
<div className="py-16 text-center bg-white flex gap-12">
  <div className='w-[50%]'>
  <h2 className="text-3xl md:text-2xl font-bold text-gray-800">Mis Hobbies</h2>

  </div>
  <p className="text-md md:text-lg text-gray-600 mt-6">
  Fuera del trabajo, disfruto de una variedad de actividades, como programar, hacer ejercicio, estudiar, nadar y cantar. Estos pasatiempos me permiten equilibrar mis intereses técnicos con actividades físicas y creativas.  </p>
</div>


          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

          {/* My Activities Section */}
          <div className="py-16 text-center bg-white">
            <h2 className="text-3xl md:text-2xl font-bold text-gray-800">Mis Actividades</h2>
            <div className="mt-6 flex justify-around items-center">
              <div className="w-1/5 h-24 bg-red-500 text-white flex justify-center items-center">Programmar 40%</div>
              <div className="w-1/5 h-24 bg-blue-500 text-white flex justify-center items-center">Exejercicios 20%</div>
              <div className="w-1/5 h-24 bg-green-500 text-white flex justify-center items-center">Estudiar 15%</div>
              <div className="w-1/5 h-24 bg-yellow-500 text-white flex justify-center items-center">Nadar 15%</div>
              <div className="w-1/5 h-24 bg-purple-500 text-white flex justify-center items-center">Cantar 10%</div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

         {/* Best Website Section */}
<div className="py-16 flex flex-col lg:flex-row items-center">
  <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
    <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Mi mejor proyecto actual</h2>
    <p className="text-md md:text-lg text-gray-600 mb-6">
    Este es uno de los mejores sitios web que he creado, con un diseño moderno, una interfaz de usuario intuitiva y funciones potentes.
    </p>
  </div>
  <div className="relative lg:w-1/2 w-[80%] flex flex-col items-center">
    <div className="flex justify-center mb-4">
      <img 
        src={phoneImage} 
        alt="Best Website" 
        className="rounded-lg object-cover w-[40%] h-[60%] shadow-lg mr-2" 
      />
      <img 
        src={screenshot1} 
        alt="Best Website" 
        className="rounded-lg object-cover w-[40%] h-[60%] shadow-lg" 
      />
    </div>
    <img 
      src={screenshot2} 
      alt="Best Website" 
      className="rounded-lg object-cover w-[80%] h-[60%] shadow-lg mt-2" 
    />
  </div>
</div>


          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

          {/* Skills Section */}
          <div className="py-16 flex flex-col lg:flex-row items-center bg-white">
  <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
    <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Skills</h2>
    <div className="flex flex-col space-y-4">
      {[
        { name: 'Web Design', percentage: '70%' },
        { name: 'JavaScript', percentage: '80%' },
        { name: 'React.js', percentage: '75%' },
        { name: 'Node.js', percentage: '65%' },
        { name: 'PHP', percentage: '60%' },
        { name: 'Tailwind', percentage: '70%' },
        { name: 'SASS', percentage: '60%' },
        { name: 'MySQL', percentage: '65%' },
        { name: 'PostgreSQL', percentage: '60%' },
        { name: 'MongoDB', percentage: '55%' },
        { name: 'HTML', percentage: '85%' },
        { name: 'CSS', percentage: '80%' },
        { name: 'AJAX', percentage: '70%' },
      ].map(skill => (
        <div key={skill.name} className="flex justify-between text-gray-600">
          <span>{skill.name}</span>
          <span>{skill.percentage}</span>
        </div>
      ))}
    </div>
  </div>
  <div className="lg:w-1/2 flex justify-center items-center">
    <div className="grid grid-cols-2 gap-4">
      {[
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,
        icon6,
        icon7,
        icon8,
        icon9,
        icon10,
        icon11
      ].map((icon, index) => (
        <div key={index} className="w-16 h-16 border border-gray-300 rounded-lg flex justify-center items-center hover:bg-gray-100 transition-all duration-200">
          <img src={icon} alt="" className="w-10 h-10 object-contain" />
        </div>
      ))}
    </div>
  </div>
</div>


          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-8 w-full mx-auto" />

          {/* Short History Section */}
          <div className="py-16 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">Mi viaje</h2>
              <p className="text-md md:text-lg text-gray-600 mb-6">
              Comencé mi viaje como un estudiante curioso y, a lo largo de los años, he desarrollado habilidades en codificación, diseño y resolución de desafíos complejos.              </p>
              <div className='flex gap-6'>
              <a href="/history" className='text-blue-700'> Conoce mi historia !! Da click aca !!</a> 
              

              </div>

            </div>
            <div className="lg:w-1/2">
              <img src={journeyImage} alt="Journey" className="rounded-lg w-full object-cover" />
            </div>
          </div>
        <hr className="border-t border-gray-300 my-8 w-full mx-auto" />
        <div className="py-16 text-center bg-gray-100 flex flex-col items-center">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">My CV</h2>
  <p className="text-md md:text-lg text-gray-600 mb-6 max-w-md">
  ¿Quieres saber más sobre mi trayectoria profesional? Haz clic a continuación para descargar mi currículum completo.  </p>

  <div className='flex gap-12'>
  <a 
    href={CV2}
    download 
    className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
  >
   Descarga mi HV clasica
  </a>

  <a 
    href={CV}
    download 
    className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
  >
    Descarga mi HV Convencional
  </a>
  </div>
</div>


        </div>

        {/* Column of Smaller Squares on the Right */}
        <div className="hidden lg:flex lg:w-[25%] flex-col space-y-4 justify-start items-center fixed right-[.5%] top-[18%] h-[80vh] overflow-y-scroll">
          <div className="w-40 h-40 bg-gray-200 rounded-lg shadow-lg">
            <img src={hobbyImage1} alt="Hobby 1" className="w-full h-full object-cover rounded-lg border-8 " />
          </div>
          <div className="w-40 h-40 bg-gray-200 rounded-lg shadow-lg">
            <img src={hobbyImage2} alt="Hobby 2" className="w-full h-full object-cover rounded-lg border-8" />
          </div>
          <div className="w-40 h-40 bg-gray-200 rounded-lg shadow-lg">
            <img src={hobbyImage3} alt="Hobby 3" className="w-full h-full object-cover rounded-lg border-8" />
          </div>
          <div className="w-40 h-40 bg-gray-200 rounded-lg shadow-lg">
            <img src= {hobbyImage4} alt="Hobby 3" className="w-full h-full object-cover rounded-lg border-8" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
