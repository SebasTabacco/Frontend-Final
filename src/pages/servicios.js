import React from "react";
import { Carousel } from "react-bootstrap";
import { FaAtom } from "react-icons/fa"; // Ícono futurista
import "./../../src/styles/components/pages/servicios.css";

const Servicios = () => {
  return (
<>
    <div className='servicios'>
      <div className="space">
        <img src="/image/Logo-3D/f2.jpeg" alt="space"/>
      </div>
      {/* Carrusel de Núcleo Web */}
      <div className="carousel-service">
        <Carousel controls={false} indicators={false} pause={false} interval={3000} className="small-carousel">
          <Carousel.Item>
            <div className="carousel-cont-1">
              <FaAtom size={40} color="#05f5f5" />
              <h2>Núcleo Web</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-cont-1">
              <FaAtom size={40} color="#05f5f5" />
              <h2>Innovación Digital</h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-cont-1">
              <FaAtom size={40} color="#05f5f5" />
              <h2>Transformando Ideas</h2>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Sección original de Servicios */}
      <h2>Desarrollo Web</h2>
      <p>Distintos servicios</p>
      <video autoPlay loop muted playsInline width="600">
        <source src="/image/Logo-3D/viaje.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      </div>
      </>
  );
};

export default Servicios;
