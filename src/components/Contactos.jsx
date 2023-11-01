import React from "react";
import "../styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Contactos = () => {
 
  
  return (
    <div>
      <Navbar></Navbar>
      
      <main className="contenedor">
        <h3 className="centrar-texto">Contacto</h3>

        <div className="contacto-bg"></div>

        <form className="formulario">
          <div className="campo">
            <label className="campo__label" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="campo__field"
              type="text"
              placeholder="Tu Nombre"
              id="nombre"
            />
          </div>
          <div className="campo">
            <label className="campo__label" htmlFor="email">
              E-mail
            </label>
            <input
              className="campo__field"
              type="email"
              placeholder="Tu E-mail"
              id="email"
            />
          </div>
          <div className="campo">
            <label className="campo__label" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              className="campo__field campo__field--textarea"
              id="mensaje"
            ></textarea>
          </div>

          <div className="campo">
            <input
              type="submit"
              value="Enviar"
              className="boton boton--primario"
            />
          </div>
        </form>
      </main>

      <Footer/>
    </div>
  );
};
