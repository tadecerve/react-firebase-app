import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export function MisServicios() {
  const [servicios, setServicios] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "servicios"),
        where("userId", "==", user.uid)
      );

      getDocs(q).then((querySnapshot) => {
        const servicios = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setServicios(servicios);
      });
    }
  }, [user]);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="centrar-texto">Mis servicios</h1>
      {servicios.map((servicio) => {
        console.log(servicio.id); // Aquí agregas el console.log
        return (
          <div key={servicio.id}>
            <div className="MisServicios">
              <img src={servicio.imageUrl} alt="serviciourlimage" />
            </div>
            <h2>{servicio.titulo}</h2>
            <p>Precio: ${servicio.precio}</p>
            <p>Telefono: {servicio.telefono}</p>
            <p>Estado: {servicio.estado ? "Disponible" : "No disponible"}</p>
            <Link to={`/misServicios/editarServicio/${servicio.id}`}>
              <button className="boton-serv">Editar servicio</button>
            </Link>
          </div>
        );
      })}
      <Footer></Footer>
    </div>
  );
}
