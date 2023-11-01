import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="servicio-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="precio">${item.precio}</p>
          <p className="telefono">${item.telefono}</p>
          <p className="descripcion">{item.descripcion}</p>
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ItemDetail;
