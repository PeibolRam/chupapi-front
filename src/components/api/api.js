import React, { Component } from 'react';
import "../../styles/api.css";

export default class Api extends Component {
    render() {
        return (
            <div>
                
    <h1>Documentación APIstear</h1>
    <div className="wrapper">
      <h2>Acerca de nosotros</h2>
      <p>
        Somos un grupo de jóvenes inovadores que tratan de llevar la tecnología
        al máximo para que puedas tener a su alcance los mejores tips, recetas y
        modo de preparación tus cocteles. Esto la finalidad de que no pagues mas y no
        tengas que salir de casa sólo por querer experimentar la sensación de
        bebidas exquisitas en tu paladar. Nuestro sentido de creatividad junto
        con la tecnología nos impulsaron a crear APIstear, una API que te
        ayuda a crear cocteles que jamás creiste poder preparar tu mismo para
        tus reuniones, cenas,comidas o fiestas que te hagan ver como un gran
        anfitrión.
      </p>
    </div>
    <div className="wrapper">
        <h2>Peticiones disponibles</h2>
        <h3>GET /drinks/</h3>
    <p>Con esta petición puedes sacar toda la información de la base</p>
    <figure className="img_call"><img alt="" src="http://165.227.1.54:5000/public/get_drinks.png" /></figure>

    <h3>GET /drinks/nombre/nombre de tu drink</h3>
    <p>
      Con esta petición puedes sacar toda la información del drink que
      buscaste por nombre
    </p>
    <figure className="img_call"><img alt="" src="http://165.227.1.54:5000/public/get_nombre.png" /></figure>

    <h3>GET /drinks/id/id del drink</h3>
    <p>
      Con esta petición puedes sacar toda la información del drink que
      buscaste por ID
    </p>
    <figure className="img_call"><img alt="" src="http://165.227.1.54:5000/public/get_id.png" /></figure>

    <h3>GET /drinks/base/bebida base</h3>
    <p>
      Con esta petición puedes sacar todos los cocteles que usan la base
      especificada
    </p>
    <figure className="img_call"><img alt="" src="http://165.227.1.54:5000/public/get_base.png" /></figure>

    <h3>POST /drinks/register/</h3>
    <p>Con esta petición puedes dar de alta nuevos drinks</p>
    <figure className="img_call"><img alt="" src="http://165.227.1.54:5000/public/post_register.png" /></figure>
    </div>
    <div className="wrapper">
      <h2>Descripción de los elementos</h2>
      <table className="Bebidas" >
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Descripción</th>
            <th>Tipo de dato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>Identificador único de la bebida</td>
            <td>Number</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>Nombre de la bebida</td>
            <td>String</td>
          </tr>
          <tr>
            <td>ingredientes</td>
            <td>
              Regresa un array con la lista de ingredientes. Cada ingrediente es
              llamado como un objecto
            </td>
            <td>array</td>
          </tr>
          <tr>
            <td>Descripción</td>
            <td>Dato hitórico de la bebida</td>
            <td>String</td>
          </tr>
          <tr>
            <td>Instrucciones</td>
            <td>Forma magnífica de prepara la bebida</td>
            <td>String</td>
          </tr>
          <tr>
            <td>Situación</td>
            <td>Recomendación para beberla</td>
            <td>String</td>
          </tr>
          <tr>
            <td>Recomendación</td>
            <td>Acompañamiento para la degustación</td>
            <td>String</td>
          </tr>
          <tr>
            <td>Origen</td>
            <td>Lugar de nacimiento</td>
            <td>String</td>
          </tr>
          <tr>
            <td>Imagen</td>
            <td>Demostración final de tu bebida</td>
            <td>String</td>
          </tr>
          <tr>
            <td>Base</td>
            <td>Ingrediente principal de la bebida</td>
            <td>String</td>
          </tr>
        </tbody>
      </table>
    </div>
    
            </div>
        )
    }
}

