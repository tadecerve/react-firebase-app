import React, { useState } from "react";
import "../HamburgerMenu.css"; // Asegúrate de crear este archivo y agregar estilos para .menu y .menu.open
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/editarPerfil" className="navegacion__enlace">
          Editar Perfil
        </Link>
        <Link to="/misServicios" className="navegacion__enlace">
          Mis Servicios
        </Link>
        <Link to="/serviciosContratados" className="navegacion__enlace">
          Servicios Contratados
        </Link>
        <Link to='/serviciosFavoritos'className="navegacion__enlace">Servicios Favoritos</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
