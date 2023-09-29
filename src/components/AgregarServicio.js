import React, { useState } from "react";
import "../styles.css";
// import "../agregarservicio.css"; // Importa el archivo CSS

export function AgregarServicio() {
  const [servicio, setServicio] = useState({
    imagen: "",
    titulo: "",
    precio: "",
    telefono: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServicio({ ...servicio, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del servicio a tu servidor o hacer lo que necesites.
    console.log("Datos del servicio:", servicio);
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
      {/* Fin Header */}

      <div>
        <main className="contenedor">
          <h2 className="centrar-texto">Agregar un Servicio</h2>
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="campo">
              <label className="campo__label">Imagen:</label>
              <input
                className="campo__field"
                type="text"
                name="imagen"
                placeholder="Inserte su imagen"
                value={servicio.imagen}
                onChange={handleChange}
              />
            </div>
            <div className="campo">
              <label className="campo__label">Titulo del Servicio:</label>
              <input
                type="text"
                name="titulo"
                placeholder="ej: Vigilancia 24hs"
                value={servicio.titulo}
                onChange={handleChange}
              />
            </div>

            <div className="campo">
              <label className="campo__label">Precio:</label>
              <input
                type="text"
                name="precio"
                placeholder="$3033"
                value={servicio.precio}
                onChange={handleChange}
              />
            </div>

            <div className="campo">
              <label className="campo__label">Teléfono:</label>
              <input
                type="text"
                name="telefono"
                placeholder="ej: 3564124578"
                value={servicio.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="campo">
              <label className="campo__label">Descripción:</label>
              <textarea
                className="campo__field campo__field--textarea"
                name="descripcion"
                value={servicio.descripcion}
                onChange={handleChange}
              />
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
        <ul
          className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
          id="pillNav2"
          role="tablist"
          style={{
            "--bs-nav-link-color": "var(--bs-white)",
            "--bs-nav-pills-link-active-color": "var(--bs-primary)",
            "--bs-nav-pills-link-active-bg": "var(--bs-white)",
          }}
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-5"
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>

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
    </div>
  );
}
