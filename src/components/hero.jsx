import React, { useState } from "react";
import servDom from "../img/serviciosDomesticos.jpg";
import servSeg from "../img/serviciosDeSeguridad.png";
import gasfiteria from "../img/gasfiteria.jpeg";
import electricista from "../img/electricista.jpeg";
import pintura from "../img/pintura2.jpeg";
import limpieza from "../img/limpieza a domicilio2.jpeg";
import smv from "../img/smv2.jpeg";

const Hero = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      img: servDom,
      alt: "Servicios domésticos",
      caption: "Servicios domésticos",
    },
    {
      img: servSeg,
      alt: "Servicios de seguridad",
      caption: "Servicios de seguridad",
    },
    {
      img: gasfiteria,
      alt: "Servicio de Gasfitería",
      caption: "Gasfitería",
    },
    {
      img: electricista,
      alt: "Servicio de Electricista",
      caption: "Electricista",
    },
    {
      img: pintura,
      alt: "Servicio de Pintura",
      caption: "Pintura",
    },
    {
      img: limpieza,
      alt: "Servicio de Limpieza a Domicilio",
      caption: "Limpieza a Domicilio",
    },
    {
      img: smv,
      alt: "Servicio de Consultas Médicas Online",
      caption: "Consultas Médicas Online",
    },
  ];

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;

      if (newIndex >= slides.length) {
        newIndex = 0;
      }

      if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <>
      <section id="inicio" className="hero">
        <div className="slider-container">
          <div className="slider">
            {}
            {slides.map((slide, index) => (
              <div
                className="slide"
                key={index}
                style={{ display: index === slideIndex ? "block" : "none" }}
              >
                <img src={slide.img} alt={slide.alt} />
                <div className="slide-caption">{slide.caption}</div>
              </div>
            ))}
          </div>

          {}
          <button className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;