import React from "react";
import Best from "./best/best";
import "../../../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero_chupapi">
      <div className="desc_chupapi">
        <h1>APIstear</h1>
        <p>
          Somos un grupo de jóvenes inovadores que tratan de llevar la
          tecnología al máximo para que puedas tener a su alcance los mejores
          tips, recetas y modo de preparación tus cocteles. Esto la finalidad de
          que no pagues mas y no tengas que salir de casa sólo por querer
          experimentar la sensación de bebidas exquisitas en tu paladar. Nuestro
          sentido de creatividad junto con la tecnología nos impulsaron a crear
          APIstear, una API que te ayuda a crear cocteles que jamás creiste
          poder preparar tu mismo para tus reuniones, cenas,comidas o fiestas
          que te hagan ver como un gran anfitrión.
        </p>
      </div>
      <Best />
    </div>
  );
};

export default Hero;
