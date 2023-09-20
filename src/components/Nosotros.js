import React from "react";
import "../styles.css";
import ImgNosotros from "../img/services2.jpg";
import { useAuth } from "../context/authContext";

export const Nosotros = () => {
  const { user, logout } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

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
        <h3 className="centrar-texto">Sobre Nosotros</h3>

        <div className="sobre-nosotros">
          <div className="sobre-nosotros__imagen">
            <img src={ImgNosotros} alt="imagen nosotros" />
          </div>

          <div className="sobre-nosotros__texto">
            <p className="sobre-nosotros__parrafo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis tempora adipisci vel assumenda tempore, perferendis,
              debitis cumque provident vero nulla voluptatem illum dolores iusto
              quidem, veritatis soluta dolorum! Laborum, similique. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi optio, facere
              omnis, consequatur facilis mollitia fugit vitae est voluptates eos
              vero eveniet fugiat natus, porro architecto itaque corrupti unde
              temporibus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At blanditiis recusandae qui aspernatur amet eos accusamus
              nisi voluptas fuga aperiam! Quas ratione beatae placeat,
              voluptatibus voluptate repellendus alias aliquam? Minima.
            </p>
          </div>
        </div>
      </main>

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
              <a href="#" className="navegacion__enlace">
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
