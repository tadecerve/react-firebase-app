import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";
import {  signOut } from "firebase/auth";

const Navbar = () => {

    const { user, logout } = useAuth();
  
    console.log(user.email);
  
    
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <header className="header">
    <div className="contenedor">
      <div className="barra">
        <Link className="logo" to="/">
          <h1 className="logo__nombre no-margin centrar-texto">
            Blog<span className="logo__bold">DeServicios</span>
          </h1>
        </Link>

        <nav className="navegacion">
          <Link to="/nosotros" className="navegacion__enlace">
            Nosotros
          </Link>
          <Link to="/" className="navegacion__enlace">
            Servicios
          </Link>
          <Link to="/Contactos" className="navegacion__enlace">
            Contacto
          </Link>
          <Link onClick={()=> signOut(auth)} className="navegacion__enlace"> 
            Salir
          </Link> 
        </nav>
      </div>
    </div>

    <div className="header__texto">
      <h2 className="no-margin">Blog de servicios para contratar</h2>
      <p className="no-margin">
        Bienvenido, Postulá tu servicio que deseas ofrecer o contratá el que necesites
      </p>
    </div>
  </header>
  )
}

export default Navbar