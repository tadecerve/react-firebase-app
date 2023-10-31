import React, { useState } from "react";
import "../styles.css";
import {useForm} from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";


export function AgregarServicio() {
  
  const [servicioId,setServicioId]= useState("");
  const {register, handleSubmit} = useForm ();
  const { user, logout } = useAuth();
  console.log(user);

  const agregarServicio = (data) => {
    const pedido = {
      servicio:data
    }
    console.log(pedido);

    const serviciosRef = collection(db,"servicios");

    addDoc(serviciosRef,pedido)
      .then((doc)=> {
        setServicioId(doc.id);
        console.log(doc.id);
        
      })
  }

  if(servicioId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por subir tu servicio</h1>
        <p>Tu numero de servicio es: {servicioId}</p>
      </div>
    )
  }

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
      

      <div className="container">
          <h1 className="main-title"> Agregar Servicio </h1>
          <form className="formulario" onSubmit={handleSubmit(agregarServicio)}>

            <input type="text" placeholder="Ingresa el titulo del servicio" {...register("titulo")}/>
            <input type="number" placeholder="Precio" {...register("precio")} />
            <input type="number" placeholder="Telefono" {...register("telefono")} />

            <button className="agregar" type="submit"> Agregar Servicio </button>

          </form>

      </div>

      

    
    
     
      








      
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
}
