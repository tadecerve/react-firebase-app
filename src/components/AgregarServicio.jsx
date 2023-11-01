import React, { useState } from "react";
import "../styles.css";
import { useForm } from "react-hook-form";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function AgregarServicio() {
  const [servicioId, setServicioId] = useState("");

  const { register, handleSubmit } = useForm();

  const agregarServicio = (data) => {

    const pedido = {
      ...data,
      
    };
    console.log(pedido);

    const serviciosRef = collection(db, "servicios");

    addDoc(serviciosRef, pedido)
      .then((doc) => {
        // pedido.id = doc.id;
        setServicioId(doc.id);
        console.log(doc.id);
    });
  };

  if (servicioId) {
    return (
      <div className="container">
        <Navbar></Navbar>
        <h1 className="main-title">Muchas gracias por subir tu servicio! </h1>
        <p>Tu numero de servicio es: {servicioId}</p>
        <Link to="/">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="main-title"> Agregar Servicio </h1>
        <form className="formulario" onSubmit={handleSubmit(agregarServicio)}>
          <input
            type="text"
            placeholder="Ingresa el titulo del servicio"
            {...register("titulo")}
          />
          <input type="number" placeholder="Precio" {...register("precio")} />
          <input
            type="number"
            placeholder="telefono"
            {...register("telefono")}
          />
          <input type="text" placeholder="Agrega una breve descripcion" {...register("descripcion")} />

          <button className="boton boton--primario" type="submit">
            {" "}
            Agregar Servicio{" "}
          </button>
        </form>
      </div>

     <Footer></Footer>
    </div>
  );
}
