import React from "react";
import "../styles.css";
// import ImgNosotros from '../img/services2.jpg'

export const Contactos = () => {

  
  return (
    <div>
      <header className="header">
        <div className="contenedor">
          <div className="barra">
            <a className="logo" href="/">
              <h1 className="logo__nombre no-margin centrar-texto">
                Blog<span className="logo__bold">DeServicios</span>
              </h1>
            </a>

            <nav className="navegacion">
              <a href="/Nosotros" className="navegacion__enlace">
                Nosotros
              </a>
              <a href="/" className="navegacion__enlace">
                Servicios
              </a>
              <a href="/Contactos" className="navegacion__enlace">
                Contacto
              </a>
              <a href="/login" className="navegacion__enlace">
                Salir
              </a>
            </nav>
          </div>
        </div>

        <div className="header__texto">
          <h2 className="no-margin">Blog de servicios para contratar</h2>
          <p className="no-margin">
            Postulá tu servicio que deseas ofrecer o contratá el que necesites
          </p>
        </div>
      </header>





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




      {/* FOOTER */}
      <footer className="footer">
        <div className="contenedor">
          <div className="barra">
            <a className="logo" href="index.html">
              <h1 className="logo__nombre no-margin centrar-texto">
                Blog<span className="logo__bold">DeServicios</span>
              </h1>
            </a>

            <nav className="navegacion">
              <a href="/Nosotros" className="navegacion__enlace">
                Nosotros
              </a>
              <a href="/" className="navegacion__enlace">
                Servicios
              </a>
              <a href="/Contactos" className="navegacion__enlace">
                Contacto
              </a>
              <a href="/login" className="navegacion__enlace">
                Salir
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
