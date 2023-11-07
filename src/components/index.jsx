import React from "react";
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import Navbar from "./Navbar";




export const ProductosLista = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const serviciosRef = collection(db, "servicios");

    getDocs(serviciosRef).then((resp) => {
      setServicios(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }; //unir el Id con los datos de adentro
        })
      );
    });
  });

  return (
    <div>
     <ItemListContainer/>
     <div className="campo">
        <p className="boton boton--primario ">
          <Link to="/AgregarServicio">Agregar Servicio</Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

